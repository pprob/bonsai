/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {Request, Response} from 'express';
import User from '../../../models/user';
import {BadRequestError} from '../../../errors/BadRequestError';
import PasswordUtil from '../../../utils/password';
import jwt from 'jsonwebtoken';

const signinUser = async (req: Request, res: Response): Promise<void> => {
  const {email, password} = req.body;

  const user = await User.findOne({email});

  if (!user) {
    throw new BadRequestError('Invalid credentials');
  }

  const isMatch = await PasswordUtil.comparePassword(user.password, password);

  if (!isMatch) {
    throw new BadRequestError('Invalid credentials');
  }

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

  res.status(200).send({
    success: true,
    user,
  });
};

export default signinUser;
