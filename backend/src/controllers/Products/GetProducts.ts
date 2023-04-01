import { Request, RequestHandler } from 'express';
import Joi from 'joi';
import { IProduct } from '@/types/interfaces';
import { Product } from '../../models';

const getProducts: RequestHandler = async (req: Request, res) => {
  const products: IProduct[] = await Product.find();
  res.status(200).json(products);
};

export default getProducts;
