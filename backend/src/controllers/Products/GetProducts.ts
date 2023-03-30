import { Request, RequestHandler } from 'express';
import Joi from 'joi';
import { IProduct, ICart, ICategory, IOrder } from '@/types/interfaces';
import { Products } from '../../models';

const getProducts: RequestHandler = async (req: Request, res) => {
  const products: IProduct[] = await Products.find();
  res.status(200).json(products);
};

export default getProducts;
