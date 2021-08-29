import {Request, Response, NextFunction} from 'express';
import {CustomError} from '../errors/CustomError';

const errorHandlerMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
): any => {
  console.log(err);
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({
      success: false,
      errors: err.serializeErrors(),
    });
  }

  res.status(500).send({
    success: false,
    errors: [
      {
        message: 'Something went wrong',
      },
    ],
  });
};

export default errorHandlerMiddleware;
