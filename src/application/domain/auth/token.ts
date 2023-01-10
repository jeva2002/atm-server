import jwt from 'jsonwebtoken';

export const createTokenUser = (cardNumber: string): string => {
  return jwt.sign(
    { cardNumber: cardNumber },
    process.env.ACCESS_TOKEN_SECRET || '',
    { expiresIn: '5m' }
  );
};

export const createTokenAdmin = (cardNumber: string): string => {
  const refreshToken = jwt.sign(
    { cardNumber: cardNumber },
    process.env.REFRESH_TOKEN_SECRET || '',
    { expiresIn: '1h' }
  );
  return refreshToken;
};

export const verifyToken = (token: string, isAdmin: boolean): any => {
  try {
    return jwt.verify(
      token,
      isAdmin
        ? process.env.REFRESH_TOKEN_SECRET || ''
        : process.env.ACCESS_TOKEN_SECRET || ''
    );
  } catch (error) {
    throw error;
  }
};
