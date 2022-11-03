import { Global, Module } from '@nestjs/common';
import { MailerModule, ReactRenderer, SendgridMailer } from 'nest-mailer-module';
import config from 'src/config';
import { MailerController } from './mailer.controller';
import { MailerEventEmitter } from './mailer.emitter';
import { MailerService } from './mailer.service';

@Global()
@Module({
  imports: [MailerModule.forRoot({ mailer: new SendgridMailer(config.sendgrid.key), renderer: new ReactRenderer() })],
  controllers: [MailerController],
  providers: [MailerEventEmitter, MailerService],
  exports: [MailerEventEmitter],
})
export class AppMailerModule {}
