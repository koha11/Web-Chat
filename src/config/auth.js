const jwt = require('jsonwebtoken');

verifyToken = (req, res, next) => {
  let token = req.cookies.access_token;

  if (!token) {
    res.locals._user = {};
    // next();
    res.redirect('/login');
    return;
  }

  if (req.url == '/signin' || req.url == '/signup') {
    //login r thi ko can verify tai trang login do
    next();
    return;
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        message: err.toString(),
      });
    }
    res.locals._user = decoded;
    next();
  });
};

module.exports = {
  verifyToken,
};
