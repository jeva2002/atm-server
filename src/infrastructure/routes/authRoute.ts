import { Router, IRouter } from "express";
import authUser from "../../application/controllers/authController";

const auth: IRouter = Router();

auth.route('/').post(authUser)

export default auth;