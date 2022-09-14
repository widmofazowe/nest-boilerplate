import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class PasswordService {
  cryptPassword(password: string) {
    return bcrypt
      .genSalt(10)
      .then(salt => bcrypt.hash(password, salt))
      .then(hash => hash);
  }

  comparePassword(password: string, hashPassword: string) {
    return bcrypt.compare(password, hashPassword).then(resp => resp);
  }
}
