import express from 'express';
import { signIn, signUp } from '../controllers/authController';
import { validate } from '../middlewares/validationMiddleware';
import { signInSchema, signUpSchema } from '../schemas/authSchema';

const authRouter = express.Router();
authRouter.post("/signup", (req, res, next) => validate(req, res, next, signUpSchema), signUp);
authRouter.post("/signin", (req, res, next) => validate(req, res, next, signInSchema), signIn);


export default authRouter