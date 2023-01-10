import { ConnectionConfig } from 'mysql';

const connectionConfig: ConnectionConfig = {
  host: process.env.DB_HOST || '',
  user: process.env.DB_USER || '',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_DATABASE || 'users_atm',
}

export default connectionConfig;