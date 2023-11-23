const HttpError = require('http-errors');
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = process.env;


const authenticate = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");
  if (bearer !== "Bearer") {
    next(HttpError(401))
  }
  try {
    const { id } = jwt.verify(token, SECRET_KEY);

  }
  catch {
        next(HttpError(401))

  }
};

module.exports = authenticate;