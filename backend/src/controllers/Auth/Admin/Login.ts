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

const Login: RequestHandler = async (req: Request<{}, {}, IAccount>, res) => {
  const {email, password} = req.body;
  const client = (await Admin.findOne({email})) as any;
  !client ? res.send({message: "Account not found"}) : null;
  const passwordIsValid = await bcrypt.compare(password, client.password);
  !passwordIsValid ? res.send({message: "Invalid password"}) : null;

  let token = jwt.sign({id: client._id}, process.env.SECRET as string, {
    expiresIn: 86400,
  });
  let response = {
    auth: true,
    token: token,
    client: {
      _id: client._id,
      first_name: client.first_name,
      last_name: client.last_name,
      email: client.email,
    },
  };
  res.status(200).send(response);
};

export default requestMiddleware(Login, {validation: {body: addAccountSchema}});
