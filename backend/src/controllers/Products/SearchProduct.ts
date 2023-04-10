import { Request, RequestHandler } from 'express';
import Joi from 'joi';
import { IProduct, ICategory } from '@/types/interfaces';
import { Product, Category } from '../../models';

const SearchProduct: RequestHandler = async (req: Request, res) => {
  const { error } = Joi.object({
    query: Joi.string().required()
  }).validate(req.query);

  if (error) {
    return res.status(400).json({ message: error.message });
  }

  const { query } = req.query;

  const products: IProduct[] = await Product.find({
    name: { $regex: query, $options: 'i' }
  });

  return res.status(200).json({ products });
};

export default SearchProduct;
