export interface UserInfo {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  cardNumber: string;
  securityCode: string;
  birthday: Date;
  role: string;
}

export interface CurrentUser {
  id: string;
  cardNumber: string;
  role: string;
}