import { Router } from 'express';
import * as authController from '../controllers/Auth';
import * as ProductController from '../controllers/Products';
import verifySignUp from '../middlewares/verifySignUp';
import authJwt from '../middlewares/authJWT';

const ProductsRouter = Router();

ProductsRouter.get('/', [authJwt.verifyToken], ProductController.getProducts);



export default ProductsRouter;
