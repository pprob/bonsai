import express from 'express';
import createUser from './handlers/createUser';
import signinUser from './handlers/signinUser';
import signoutUser from './handlers/signoutUser';

const router = express.Router();

router.post('/user/signin', signinUser);
router.post('/user/create', createUser);
router.post('/user/signout', signoutUser);

export {router as userRouter};
