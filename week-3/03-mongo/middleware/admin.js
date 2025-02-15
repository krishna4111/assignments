// Middleware for handling auth
const { Admin } = require("../db");
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const username = req.headers.username;
  const password = req.headers.password;

  Admin.findOne({ username, password }).then((val) => {
    if (val) {
      next();
    } else {
      res.status(403).json({
        msg: "Admin dosent exist",
      });
    }
  });
}

module.exports = adminMiddleware;
