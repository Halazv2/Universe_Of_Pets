import { Router } from 'express';
import * as authController from '../controllers/Auth';
import * as CategoryController from '../controllers/Category';
import verifySignUp from '../middlewares/verifySignUp';
import authJwt from '../middlewares/authJWT';

const CategoryRouter = Router();

CategoryRouter.get('/', CategoryController.getCategory);
CategoryRouter.post('/', CategoryController.addCategory);
CategoryRouter.get('/:id', CategoryController.getCategoryById);
CategoryRouter.delete('/:id', CategoryController.deleteCategory);
CategoryRouter.put('/:id', CategoryController.updateCategory);

export default CategoryRouter;
