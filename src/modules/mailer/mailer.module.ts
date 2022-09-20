import { Global, Module } from '@nestjs/common';
import { MailerModule, SendgridMailer } from 'nest-mailer-module';
import config from 'src/config';
import { MailerEventEmitter } from './mailer.emitter';

@Global()
@Module({
  imports: [MailerModule.forRoot({ mailer: new SendgridMailer(config.sendgrid.key) })],
  providers: [MailerEventEmitter],
  exports: [MailerEventEmitter],
})
export class AppMailerModule {}
