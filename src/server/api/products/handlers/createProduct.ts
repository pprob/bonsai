import {Request, Response} from 'express';
import Product from '../../../models/product';

const createProduct = async (req: Request, res: Response): Promise<void> => {
  const {name, price, quantity, categories, description} = req.body;

  const product = new Product({name, price, quantity, categories, description});
  await product.save();

  res.send(product);
};

export default createProduct;
