import { Handler } from 'express';
import { isAValidCardNumber, isAValidSecurityCode } from '../domain/auth/validations';

const authUser: Handler = (req, res) => {

  if(!req.body.cardNumber || !req.body.securityCode) return res.sendStatus(400);

  try {
    const userInfo = {
      cardNumber: req.body.cardNumber,
      securityCode: req.body.securityCode
    }
    console.log(userInfo)
    isAValidCardNumber(userInfo.cardNumber)
    isAValidSecurityCode(userInfo.securityCode)
  } catch (error) {
    console.log(error);
  }
};

export default authUser;
