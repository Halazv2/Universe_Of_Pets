import {Router} from "express";
import * as authController from "../controllers/Auth";
import verifySignUp from "../middlewares/verifySignUp";

const ClientRouter = Router();

ClientRouter.post("/signup", [verifySignUp.checkDuplicateEmail], authController.Sign_up);
ClientRouter.post("/login", authController.Login);

export default ClientRouter;
