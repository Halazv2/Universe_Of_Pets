import { Request, RequestHandler } from 'express';
import { ICategory } from '@/types/interfaces';
import { Category } from '../../models';
import requestMiddleware from '../../middlewares/request-middleware';

const getCategoryById: RequestHandler = async (req: Request, res) => {
  const { id } = req.params;

  try {
    const category = await Category.findById(id);
    if (!category) {
      return res.send({ message: 'Category not found' });
    }

    res.send({ category });
  } catch (e) {
    res.send({ error: e });
  }
};

export default requestMiddleware(getCategoryById);
