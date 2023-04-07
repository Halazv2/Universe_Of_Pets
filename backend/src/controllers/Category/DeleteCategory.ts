import { Request, RequestHandler } from 'express';
import { ICategory } from '@/types/interfaces';
import { Category } from '../../models';
import requestMiddleware from '../../middlewares/request-middleware';

const deleteCategory: RequestHandler = async (req: Request, res) => {
    const { id } = req.params as { id: string };
    const category = await Category.findByIdAndDelete(id);
    res.status(200).json(category);
};

export default requestMiddleware(deleteCategory);