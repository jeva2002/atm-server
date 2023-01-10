import { Router, IRouter } from "express";
import authUser from "../../application/controllers/auth";

const authRouter: IRouter = Router();

authRouter.route('/').post(authUser)

export default authRouter;