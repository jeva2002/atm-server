export const isAValidCardNumber = (cardNumber: string): void => {
  if (cardNumber.length !== 16) throw 'It is not a valid card number';
};

export const isAValidSecurityCode = (securityCode: string): void => {
  if (securityCode.length !== 3) throw 'It is not a valid security code';
};
