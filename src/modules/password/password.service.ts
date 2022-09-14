import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

const SALT = 10;

@Injectable()
export class PasswordService {
  cryptPassword(password: string) {
    return bcrypt
      .genSalt(SALT)
      .then(salt => bcrypt.hash(password, salt))
      .then(hash => hash);
  }

  comparePassword(password: string, hashPassword: string) {
    return bcrypt.compare(password, hashPassword).then(resp => resp);
  }
}
