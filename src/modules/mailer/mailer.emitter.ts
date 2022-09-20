import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { SendEmailEvent, SEND_EMAIL_EVENT } from 'nest-mailer-module';
import config from 'src/config';

@Injectable()
export class MailerEventEmitter {
  constructor(private eventEmitter: EventEmitter2) {}

  emit(event: SendEmailEvent) {
    this.eventEmitter.emit(SEND_EMAIL_EVENT, {
      from: config.email.from,
      ...event,
    });
  }
}
