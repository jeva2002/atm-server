import mysql, { Connection } from 'mysql';
import connectionConfig from '../../config/db';
import UseDB from '../../dependencies/types/useDB';
import { UserInfo } from '../../dependencies/types/userInfo';

class MysqlConnection extends UseDB {
  connection: Connection = mysql.createConnection(connectionConfig);

  connect(): void {
    this.connection.connect();
  }

  disconnect(): void {
    this.connection.end();
  }

  giveToken(userId: string, token: string): void {
    this.connection.query(
      `UPDATE users_list SET refresh_token = '${token}' WHERE id = '${userId}';`,
      (error, results) => {
        if (error) throw error;
        console.log(results);
      }
    );
  }

  userExist(hashedPassword: string, securityCode: string): void {
    //TODO falta verificar cuando no se encuentre el usuario.
    this.connection.query(
      `SELECT * FROM users_list WHERE cardNumber = '${hashedPassword}';`,
      (error, results) => {
        try {
          if (error) throw error;
          if (results[0]?.securityCode === securityCode) {

          } else throw 'The security code or the card number are wrong';
        } catch (error) {
          console.log(error)
        }
      }
    );
  }

  createUser(userInfo: UserInfo) {
    this.connection.query(
      `INSERT INTO users_list (firstname, lastname, email, cardNumber, securityCode, birthday, role) values ('${userInfo.firstname}', '${userInfo.lastname}', '${userInfo.email}', '${userInfo.cardNumber}','${userInfo.securityCode}', '${userInfo.birthday}', '${userInfo.role}');`,
      (error, results) => {
        if (error) throw error;
        console.log(results);
      }
    );
  }
}

export default MysqlConnection;
