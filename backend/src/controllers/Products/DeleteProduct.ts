import { Request, RequestHandler } from 'express';
import Joi from 'joi';
import { IProduct } from '@/types/interfaces';
import { Product } from '../../models';
import path from 'path';

const deleteProduct: RequestHandler = async (req: Request<{}, {}, IProduct>, res) => {
  try {
    const { id } = req.params as { id: string };
    const product = await Product.findByIdAndDelete(id);
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};
export default deleteProduct;
