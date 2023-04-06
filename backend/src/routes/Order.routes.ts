import { Router } from 'express';
import * as authController from '../controllers/Auth';
import * as OrderController from '../controllers/Order';
import verifySignUp from '../middlewares/verifySignUp';
import authJwt from '../middlewares/authJWT';
import getAllUser from '../controllers/Users/GetAllUsers';
const OrderRouter = Router();

OrderRouter.get('/', OrderController.getOrders);
OrderRouter.post('/', OrderController.setOrder);
OrderRouter.get('/allUsers', getAllUser);
OrderRouter.delete('/:id', OrderController.cancelOrder);
OrderRouter.get('/:id/:userId', OrderController.GetUserOrderByID);
OrderRouter.get('/:user', OrderController.GetUserOrders);

export default OrderRouter;
