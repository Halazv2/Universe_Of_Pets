import { Request, RequestHandler } from 'express';
import Joi from 'joi';
import { IProduct, ICategory } from '@/types/interfaces';
import { Product, Category } from '../../models';

const getProducts: RequestHandler = async (req: Request, res) => {
  try {
    const products: IProduct[] = await Product.find().populate({
      path: 'category',
      model: Category
    });

    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({
      error: 'Internal server error'
    });
  }
};

export default getProducts;
