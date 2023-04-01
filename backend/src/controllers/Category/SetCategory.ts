import { Request, RequestHandler } from 'express';
import Joi from 'joi';
import { ICategory } from '@/types/interfaces';
import { Category } from '../../models';
import requestMiddleware from '../../middlewares/request-middleware';

export const addCategorySchema = Joi.object().keys({
  name: Joi.string().required(),
  description: Joi.string().required()
});

const addCategory: RequestHandler = async (req: Request<{}, {}, ICategory>, res) => {
  const { name, description } = req.body;
  const category = await Category.create({ name, description });
  res.status(201).json(category);
};

export default requestMiddleware(addCategory, { validation: { body: addCategorySchema } });
