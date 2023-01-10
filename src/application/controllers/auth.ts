import { Handler } from 'express';
import UseDB from '../../dependencies/types/useDB';
import MysqlConnection from '../../infrastructure/db/mysql';
import { isAValidCardNumber, isAValidSecurityCode } from '../domain/auth/validations';

const authUser: Handler = async (req, res) => {
  if(!req.body.cardNumber || !req.body.securityCode) return res.sendStatus(400);
  try {
    isAValidCardNumber(req.body.cardNumber)
    isAValidSecurityCode(req.body.securityCode)
    const db: UseDB = new MysqlConnection();
    db.connect();
    await db.userExist(req.body.cardNumber, req.body.securityCode);
      
  } catch (error: string | any) {
    res.status(400).json(error);
  }
};

export default authUser;
