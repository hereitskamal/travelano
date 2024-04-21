require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const loginSignupRoutes = require('./routes/LoginSignupAuth');

const cookieParser = require('cookie-parser');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(cookieParser());
const url = process.env.MONGODB_URI;
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log(err));

// Apply CORS middleware
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

// Use your routes
app.use('/api', loginSignupRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
