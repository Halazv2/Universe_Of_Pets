import { Router } from 'express';
import * as CartController from '../controllers/Cart';
import verifySignUp from '../middlewares/verifySignUp';
import authJwt from '../middlewares/authJWT';

const CartRouter = Router();

CartRouter.get('/:user', CartController.getUserCart);
CartRouter.post('/', CartController.addTocart);
CartRouter.delete('/:id', CartController.DeleteFromCart);

export default CartRouter;
