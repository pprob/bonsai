import express from 'express';
import createProduct from './handlers/createProduct';
import getProducts from './handlers/getProduct';
import upload from '../../middleware/imageFormDataMiddleware';

const router = express.Router();

router.get('/products', getProducts);
router.post('/products', upload.array('products', 8), createProduct);

export {router as productsRouter};
