import {Request, Response} from 'express';
import Product from '../../../models/product';

const getProducts = async (req: Request, res: Response): Promise<void> => {
  const products = await Product.find({});

  res.status(200).send({
    success: true,
    products,
  });
};

export default getProducts;
