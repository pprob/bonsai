import {Request, Response} from 'express';

const signoutUser = (req: Request, res: Response): void => {
  req.session = null;

  res.status(200).send({
    success: true,
  });
};

export default signoutUser;
