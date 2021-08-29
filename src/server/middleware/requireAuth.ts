import {Request, Response, NextFunction} from 'express';
import {NotAuthorizedError} from '../errors/NotAuthorizedError';

const requireAuth = (req: Request, res: Response, next: NextFunction): void => {
  if (!req.authUser) {
    throw new NotAuthorizedError();
  }

  next();
};

export default requireAuth;
