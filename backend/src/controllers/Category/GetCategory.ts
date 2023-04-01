import { Request, RequestHandler } from 'express';
import { ICategory } from '@/types/interfaces';
import { Category } from '../../models';
import requestMiddleware from '../../middlewares/request-middleware';

const getCategory: RequestHandler = async (req: Request, res) => {
  const products: ICategory[] = await Category.find();
  res.status(200).json(products);
};

export default requestMiddleware(getCategory);
