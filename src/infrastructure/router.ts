import dotenv from 'dotenv';
dotenv.config();
import express, { Express } from 'express';
import cors from 'cors';
import { corsOptions } from '../config/cors';
import cookieParser from 'cookie-parser';
import adminRouter from './routes/admin';
import authRouter from './routes/auth';

export const initializeServer = () => {
  const app: Express = express();

  app.use(cors(corsOptions));
  app.use(express.json());
  app.use(cookieParser());

  app.use('/admin', adminRouter)
  app.use('/auth', authRouter);

  app.listen(process.env.PORT, () => {
    console.log('[server]: Server running in the port:', process.env.PORT);
  });
};
