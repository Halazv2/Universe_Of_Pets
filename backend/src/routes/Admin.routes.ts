import {Router} from "express";
import * as authController from "../controllers/Auth";

const AdminRouter = Router();

AdminRouter.post("/login", authController.AdminLogin);

export default AdminRouter;
