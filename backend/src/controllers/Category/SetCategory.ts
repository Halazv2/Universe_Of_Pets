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
  try {
    const { name, description } = req.body;
    const category = new Category({ name, description });
    const savedCategory = await category.save();
    res.send({ category: savedCategory });
  } catch (e: any) {
    res.status(400).send({ message: e.message });
  }
};

export default requestMiddleware(addCategory, { validation: { body: addCategorySchema } });
