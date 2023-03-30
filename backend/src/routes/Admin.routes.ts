import {Router} from "express";
import * as authController from "../controllers/Auth";
import authJwt from "../middlewares/authJWT";

const AdminRouter = Router();

AdminRouter.post("/login", authController.AdminLogin);
AdminRouter.get("/verifyToken", authJwt.verifyToken)


export default AdminRouter;
