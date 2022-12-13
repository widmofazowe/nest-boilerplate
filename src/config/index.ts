import { join } from 'path';
if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require('dotenv').config();
}

export default {
  appUrl: process.env.APP_URL,
  jwt: {
    authSecret: process.env.JWT_AUTH_SECRET,
    refreshSecret: process.env.JWT_REFRESH_SECRET,
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
  sendgrid: {
    key: process.env.SENDGRID_KEY,
  },
  email: {
    from: { email: 'content@pawelwidomski.pl', name: 'widmo' },
  },
};
