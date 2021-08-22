import {Request, Response} from 'express';

const getProducts = async (req: Request, res: Response): Promise<void> => {
  res.send('sending products');
};

export default getProducts;
