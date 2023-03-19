import {Request, RequestHandler} from "express";
import Joi from "joi";
import bcrypt from "bcrypt";
import requestMiddleware from "../../../middlewares/request-middleware";
import {Admin} from "../../../models";
import {IAccount} from "@/types/interfaces";
import jwt from "jsonwebtoken";

export const addAccountSchema = Joi.object().keys({
  email: Joi.string().email().lowercase().required(),
  password: Joi.string().required(),
});

const AdminLogin: RequestHandler = async (req: Request<{}, {}, IAccount>, res) => {
  const {email, password} = req.body;
  const admin = (await Admin.findOne({email})) as IAccount;
  !admin ? res.send({message: "Admin not found"}) : null;
  const passwordIsValid = 
    bcrypt.compareSync(password, admin.password) ? true : false;
  !passwordIsValid ? res.send({message: "Invalid password"}) : null;
  let token = jwt.sign({id: admin._id}, process.env.SECRET as string, {
    expiresIn: 86400,
  });
  let response = {
    auth: true,
    token: token,
    Admin: {
      _id: admin._id,
      first_name: admin.first_name,
      last_name: admin.last_name,
      email: admin.email,
    },
  };
  res.status(200).send(response);
};

export default requestMiddleware(AdminLogin, {validation: {body: addAccountSchema}});
