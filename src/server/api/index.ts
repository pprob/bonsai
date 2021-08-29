import express from 'express';
import {productsRouter} from './products';
import {userRouter} from './user';

const router = express.Router();

router.use(productsRouter);
router.use(userRouter);

export {router as apiRouter};
