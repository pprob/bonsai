/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {Request, Response} from 'express';
import User from '../../../models/user';
import jwt from 'jsonwebtoken';
import {BadRequestError} from '../../../errors/BadRequestError';

const createUser = async (req: Request, res: Response): Promise<void> => {
  const {email, password} = req.body;

  const existingUser = await User.findOne({email});

  if (existingUser) {
    throw new BadRequestError('Email in use');
  }

  const user = User.build({email, password});

  await user.save();

  const authToken = jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    process.env.JWT_SECRET!,
  );

  req.session = {
    authToken,
  };

  res.status(201).send({
    success: true,
    user,
  });
};

export default createUser;
