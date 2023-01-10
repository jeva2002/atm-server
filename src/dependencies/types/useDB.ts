import { UserInfo } from "./userInfo";

abstract class UseDB {
  abstract connection: any;

  abstract connect(): void;
  
  abstract userExist(hashedPassword: string, securityCode: string): any;

  abstract giveToken(userId: string, token: string): any;

  abstract createUser(userInfo: UserInfo): any;

  abstract disconnect(): void;
  
}

export default UseDB;