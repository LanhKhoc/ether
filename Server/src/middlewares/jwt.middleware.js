import { verifyJWTToken } from '../libs/auth';

export default (req, res, next) => {
  // TODO: Get Bearer token from header then verify
  const token = '';

  verifyJWTToken(token)
    .then((decodedToken) => {
      req.user = decodedToken;
      next();
    })
    .catch(_ => res.status(400).json({ message: 'Invalid auth token provided!' }));
};
