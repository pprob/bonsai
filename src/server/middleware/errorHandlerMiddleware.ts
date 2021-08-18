import express, {Request, Response, NextFunction} from 'express';

const errorHandlerMiddleware = (
  err,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.send({
    err,
  });
};

export default errorHandlerMiddleware;
