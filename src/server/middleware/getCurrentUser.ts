/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';

interface authUser {
  email: string;
  id: string;
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface Request {
      authUser?: authUser;
    }
  }
}

const getCurrentUser = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  if (!req.session?.token) {
    next();
  }
  try {
    const authUser = jwt.verify(
      req.session?.token,
      process.env.JWT_SECRET!,
    ) as authUser;
    req.authUser = authUser;
  } catch {}

  next();
};

export default getCurrentUser;
