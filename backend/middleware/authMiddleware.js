const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  jwt.verify(token, 'Your-Secret-Key', (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: 'Failed to authenticate token' });
    }

    req.userId = decoded.id;  
    next();
  });
};

module.exports = verifyToken;
