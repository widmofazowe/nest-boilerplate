import { join } from 'path';

export default {
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  database: {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'app',
    password: 'apppass',
    database: 'app',
    schema: 'app',
    synchronize: true,
    logging: true,
    entities: [join(__dirname, '..', '**', '*.entity.{ts,js}')],
  } as any,
};
