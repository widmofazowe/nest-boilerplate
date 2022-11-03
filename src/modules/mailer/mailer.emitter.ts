import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Message, SendEmailEvent, SEND_EMAIL_EVENT } from 'nest-mailer-module';
import config from 'src/config';

@Injectable()
export class MailerEventEmitter {
  constructor(private eventEmitter: EventEmitter2) {}

  emit(event: Message) {
    this.eventEmitter.emit(
      SEND_EMAIL_EVENT,
      new SendEmailEvent({
        from: config.email.from,
        ...event,
      }),
    );
  }
}
