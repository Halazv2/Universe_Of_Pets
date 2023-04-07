import { Request, RequestHandler } from 'express';
import Joi from 'joi';
import { ICategory } from '@/types/interfaces';
import { Category } from '../../models';
import requestMiddleware from '../../middlewares/request-middleware';

export const addCategorySchema = Joi.object().keys({
  name: Joi.string().required(),
  description: Joi.string().required()
});

const updateCategory: RequestHandler = async (req: Request<{}, {}, ICategory>, res) => {
    try {
        const { id } = req.params as { id: string };
        const { name, description } = req.body;
        const category = await Category.findByIdAndUpdate(
            id,
            {
                name,
                description
            },
            { new: true }
        );
        res.send({ category });
    } catch (e: any) {
        res.status(400).send({ message: e.message });
    }
};

export default requestMiddleware(updateCategory, { validation: { body: addCategorySchema } });
