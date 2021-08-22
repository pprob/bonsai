import express from 'express';
import createProduct from './handlers/createProduct';
import getProducts from './handlers/getProduct';

const router = express.Router();

router.get('/products', getProducts);
router.post('/products', createProduct);

export {router as productsRouter};
