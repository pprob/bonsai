import express from 'express';
import createUser from './handlers/createUser';
import signinUser from './handlers/signinUser';

const router = express.Router();

router.post('/user/signin', signinUser);
router.post('/user/create', createUser);

export {router as userRouter};
