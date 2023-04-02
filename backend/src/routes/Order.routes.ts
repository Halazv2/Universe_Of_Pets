import { Router } from 'express';
import * as authController from '../controllers/Auth';
import * as OrderController from '../controllers/Order';
import verifySignUp from '../middlewares/verifySignUp';
import authJwt from '../middlewares/authJWT';

const OrderRouter = Router();

OrderRouter.get('/', OrderController.getOrders);
OrderRouter.post('/', OrderController.setOrder);
OrderRouter.delete('/:id', OrderController.cancelOrder);

export default OrderRouter;
