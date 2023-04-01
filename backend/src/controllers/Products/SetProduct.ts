import { Request, RequestHandler } from 'express';
import Joi from 'joi';
import { IProduct, ICart, ICategory, IOrder } from '@/types/interfaces';
import { Product } from '../../models';
import path from 'path';

export const addProductSchema = Joi.object().keys({
  name: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().required(),
  images: [
    {
      path: Joi.string().required(),
    }
  ],
  category: Joi.string().required()
});


const addProduct: RequestHandler = async (req: Request<{}, {}, IProduct>, res) => {
  
};
export default addProduct;
