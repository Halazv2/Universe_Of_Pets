import { Router } from 'express';
import * as authController from '../controllers/Auth';
import * as ProductController from '../controllers/Products';
import verifySignUp from '../middlewares/verifySignUp';
import authJwt from '../middlewares/authJWT';

const ClientRouter = Router();

ClientRouter.post('/signup', [verifySignUp.checkDuplicateEmail], authController.Sign_up);
ClientRouter.post('/login', authController.Login);

ClientRouter.get('/products', [authJwt.verifyToken], ProductController.getProducts);

export default ClientRouter;
