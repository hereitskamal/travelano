const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const passport = require("passport");
const axios = require("axios");
const session = require("express-session");
const { User, OTP } = require("../models/User");
const { UserTracking } = require("../models/TrackingModel");
const geoip = require("geoip-lite");

const router = express.Router();

router.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: false,
  })
);

router.post("/register", async (req, res) => {
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  const geo = geoip.lookup(ip);
  try {
    const { phoneNo, mailId } = req.body;
    const existingUserPhone = await User.findOne({ phoneNo });
    const existingUserEmail = await User.findOne({ mailId });

    if (existingUserPhone || existingUserEmail) {
      return res.status(409).json({
        message: "User with this phone number or email already exists.",
      });
    }

    const user = new User(req.body);
    await user.save();

    const token = jwt.sign({ id: user._id }, "Your-Secret-Key", {
      expiresIn: "1h",
    });

    res
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        path: "/",
        domain: "localhost",
      })
      .status(201)
      .json({ data: { user } });
  } catch (error) {
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(
        (error) => error.message
      );
      res.status(422).json({ message: validationErrors });
    } else {
      console.error("Registration error:", error);
      res
        .status(500)
        .json({ message: "Registration failed. Please try again." });
    }
  }
});


router.post("/google-login", async (req, res) => {
  const { token } = req.body;
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  const geo = geoip.lookup(ip);
  // console.log(geo)
  const { data } = await axios.get(
    `https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${token}`
  );
  if (data.aud !== process.env.GOOGLE_CLIENT_ID) {
    return res
      .status(403)
      .json({ error: "Unauthorized Google sign-in attempt." });
  }

  let user = await User.findOne({ mailId: data.email });

  if (!user) {
    user = new User({
      phoneNo: data.phoneNo ? data.phoneNo : data.email,
      mailId: data.email,
      firstName: data.given_name,
      lastName: data.family_name,
    });
    await user.save();
  }

  const userToken = jwt.sign({ id: user._id }, "Your-Secret-Key", {
    expiresIn: "1h",
  });

  // Fetch the user from the database again to ensure consistency
  user = await User.findOne({ _id: user._id });

  res
    .cookie("token", userToken, {
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
      domain: "localhost",
      path: "/",
    })
    .json({ exists: !!user, user, token: userToken });
});

router.post("/login", async (req, res) => {
  try {
    const { mailId, password } = req.body;
    const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
    //console.log("User IP Address:", ip);
    const user = await User.findOne({ mailId });

    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Incorrect password" });
    }

    //console.log(`User logged in from IP address: ${ip}`);
    const geo = geoip.lookup(ip);
    //console.log("User Location:", geo);

    const token = jwt.sign({ id: user._id }, "Your-Secret-Key", {
      expiresIn: "1h",
    });
    res
      .cookie("token", token, {
        secure: true,
        httpOnly: true,
        sameSite: "Strict",
        domain: "localhost",
        path: "/",
      })
      .status(201)
      .json({ user, ip, country: geo ? geo.country : null });
  } catch (error) {
    res.status(400).json(error);
  }
});

router.post("/check-user", async (req, res) => {
  try {
    const { phoneNo } = req.body;
    const user = await User.findOne({ phoneNo });

    if (user) {
      const token = jwt.sign({ userId: user._id }, "your_secret_key", {
        expiresIn: "1h",
      });

      res
        .cookie("token", token, {
          httpOnly: true,
          secure: true,
          sameSite: "strict",
          path: "/",
          domain: "localhost",
        })
        .status(201)
        .json({ userData: user, exist: true });
    } else {
      res.json({ exists: false });
    }
  } catch (error) {
    console.error("Error checking user existence:", error);
    res.status(500).json({ error: "Failed to check user existence" });
  }
});

router.post("/save-otp", async (req, res) => {
  try {
    const { userId, otp } = req.body;
    const newOTP = new OTP({ userId, otp });
    await newOTP.save();
    res.status(201).json({ message: "OTP saved successfully" });
  } catch (error) {
    console.error("Error saving OTP:", error);
    res.status(500).json({ error: "Failed to save OTP to the database" });
  }
});

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});
router.get("/all-users", async (req, res) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ error: "Unauthorized: Missing token" });
    }

    jwt.verify(token, "Your-Secret-Key", async (err, decoded) => {
      if (err) {
        console.error("Error verifying token:", err);
        return res.status(401).json({ error: "Unauthorized: Invalid token" });
      }

      // Token is valid, proceed to fetch users
      const users = await User.find();
      res.status(200).json(users);
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

router.get("/users/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: "Failed to fetch user" });
  }
});

// Update user by ID
router.put("/users/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const userData = req.body;
    const updatedUser = await User.findByIdAndUpdate(userId, userData, {
      new: true,
    });
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ error: "Failed to update user" });
  }
});
router.post("/logout", (req, res) => {
  res
    .clearCookie("token")
    .status(200)
    .json({ message: "Logged out successfully" });
});

router.post('/track', async (req, res) => {
  const { userId, pathname } = req.body;

  try { 
    let userTracking = await UserTracking.findOne({ userId });

    if (!userTracking) { 
      userTracking = new UserTracking({ userId, pageViews: [] });
    }
 
    userTracking.pageViews.push({
      event: 'page_view',
      pathname,
    });
 
    await userTracking.save();
    res.status(200).send('Page view tracked successfully');
  } catch (error) {
    console.error('Error tracking page view:', error);
    res.status(500).send('Failed to track page view');
  }
});

module.exports = router;
