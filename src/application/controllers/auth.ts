import { Handler, Response } from 'express';
import UseDB from '../../dependencies/types/useDB';
import { CurrentUser } from '../../dependencies/types/userInfo';
import MysqlConnection from '../../infrastructure/db/mysql';
import { createTokenAdmin, createTokenUser } from '../domain/auth/token';
import {
  isAValidCardNumber,
  isAValidSecurityCode,
} from '../domain/auth/validations';

const giveAccess = (user: CurrentUser, res: Response, db: UseDB) => {
  if(user.role === 'admin') {
    const refreshToken = createTokenAdmin(user.cardNumber);
    res.cookie('jwt', refreshToken, {
      httpOnly: true,
      sameSite: 'lax',
      maxAge: 1 * 60 * 60 * 1000,
      secure: false,
      path: '/'
    });
    db.giveToken(user.id, refreshToken);
  }
  res.status(200).json(createTokenUser(user.cardNumber));
}

const authUser: Handler = async (req, res) => {
  try {
    if (!req.body.cardNumber || !req.body.securityCode)
      return res.sendStatus(400);
    isAValidCardNumber(req.body.cardNumber);
    isAValidSecurityCode(req.body.securityCode);
    const db: UseDB = new MysqlConnection();
    db.connect();
    const userExist = await db
      .userExist(req.body.cardNumber, req.body.securityCode)
      .then((res: CurrentUser) => {
        return res;
      })
      .catch((error: any) => {
        res.status(400).json(error);
        return false;
      });
    if (userExist) {
      giveAccess(userExist, res, db);
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

export default authUser;
