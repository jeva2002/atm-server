import dotenv from 'dotenv';
dotenv.config();
import express, { Express } from 'express';
import cors from 'cors';
import { corsOptions } from '../config/cors';
import auth from './routes/authRoute';

export const initializeServer = () => {
  const app: Express = express();

  app.use(cors(corsOptions));
  app.use(express.json());

  app.use('/auth', auth);

  app.listen(process.env.PORT, () => {
    console.log('[server]: Server running in the port:', process.env.PORT);
  });
};
