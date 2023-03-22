import {Router} from "express";
import swaggerUi from "swagger-ui-express";
const swaggerDocument = require("../../openapi.json");
import verifySignUp from "../middlewares/verifySignUp";
import authJwt from "../middlewares/authJWT";
import ClientRouter from "./Client.routes";
import AdminRouter from "./Admin.routes";

const swaggerUiOptions = {
  customCss: ".swagger-ui .topbar { display: none }",
  customSiteTitle: "API Documentation",
  customfavIcon: "https://www.google.com/s2/favicons?domain=google.com",
  customCssUrl: "https://cdn.jsdelivr.net/npm/swagger-ui-dist/swagger-ui.css",
  explorer: true,
};

const router = Router();
router.use("/api/client", ClientRouter);
router.use("/api/admin", AdminRouter);

if (process.env.NODE_ENV === "development") {
  router.use("/dev/api-docs", swaggerUi.serve);
  router.get("/dev/api-docs", swaggerUi.setup(swaggerDocument, swaggerUiOptions));
}
export default router;