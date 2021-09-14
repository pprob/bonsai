import {Request, Response} from 'express';
import Product from '../../../models/product';

const createProduct = async (req: Request, res: Response): Promise<void> => {
  const files = JSON.parse(JSON.stringify(req.files));
  const images = files.map((file) => {
    return file.buffer.data;
  });

  const {name, price, quantity, categories, description} = req.body;

  const product = Product.build({
    name,
    price,
    quantity,
    categories,
    description,
    images,
  });

  await product.save();

  res.status(201).send({
    success: true,
  });
};

export default createProduct;
