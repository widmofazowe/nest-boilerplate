import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import {
  Message,
  NoContentMessage,
  SendEmailEvent,
  SendTemplatedEmailEvent,
  SEND_EMAIL_EVENT,
  SEND_TEMPLATED_EMAIL_EVENT,
} from 'nest-mailer-module';
import config from 'src/config';
import { MailerService } from './mailer.service';
import { Main } from './templates/Main';

@Injectable()
export class MailerEventEmitter {
  constructor(private eventEmitter: EventEmitter2, private mailerService: MailerService) {}

  emitPlain(event: Message) {
    this.eventEmitter.emit(
      SEND_EMAIL_EVENT,
      new SendEmailEvent({
        from: config.email.from,
        ...event,
      }),
    );
  }

  emit(templateId: string, message: Omit<NoContentMessage, 'subject'>, mergeVars?: Record<string, any>) {
    const template = this.mailerService.loadTemplate(templateId);

    this.eventEmitter.emit(
      SEND_TEMPLATED_EMAIL_EVENT,
      new SendTemplatedEmailEvent(
        {
          subject: template.subject,
          content: Main({ content: template.content, previewText: template.subject, mergeVars }),
        },
        {
          subject: template.subject,
          from: config.email.from,
          ...message,
        },
        mergeVars,
      ),
    );
  }
}
