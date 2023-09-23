const jwt = require("jsonwebtoken");
const userModel = require("../model/users.model");

const verifyToken = (req, res, next) => {
  if (
    req.headers &&
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "JWT"
  ) {
    jwt.verify(
      req.headers.authorization.split(" ")[1],
      "secretKey",
      function (err, verifiedToken) {
        console.log("verified Token", verifiedToken);
        if (err) {
          res.status(401).send({ message: "Invalid JWT Token" });
        }

        userModel
          .findById(verifiedToken.id)
          .then((user) => {
            console.log("user", user);

            req.user = user;
            next();
          })
          .catch((err) => {
            res.status(500).send({ message: err.message });
          });
      }
    );
  } else {
    res.status(403).send({ message: "Token not present" });
  }
};

module.exports = verifyToken;
