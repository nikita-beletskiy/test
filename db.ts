import { Pool, QueryArrayConfig } from 'pg';

const pool = new Pool({
  user: 'bniki',
  host: 'localhost',
  database: 'bniki',
  password: 'password',
  port: 5432
});

export const db = {
  query: (text: String, params?: any) =>
    pool.query({ text } as QueryArrayConfig, params)
};
