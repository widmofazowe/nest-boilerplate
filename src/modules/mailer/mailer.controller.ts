import { Controller, Get, Param } from '@nestjs/common';
import { Public } from 'src/common/decorators/public.decorator';
import { MailerEventEmitter } from './mailer.emitter';
import { MailerService } from './mailer.service';

const TEST_PAYLOAD = {
  user: {
    name: 'widmo',
    email: 'widomski.pawel@gmail.com',
  },
  resetPasswordToken: 'RESET',
};

@Controller('/mailer')
export class MailerController {
  constructor(private mailerService: MailerService, private mailerEmitter: MailerEventEmitter) {}

  @Public()
  @Get('/preview/:templateId')
  async preview(@Param('templateId') templateId: string) {
    const html = this.mailerService.render(templateId, TEST_PAYLOAD);

    return html;
  }

  @Public()
  @Get('/send/:templateId/:email')
  async send(@Param('templateId') templateId: string, @Param('email') email) {
    this.mailerEmitter.emit(
      templateId,
      {
        to: [{ email, type: 'to' }],
      },
      TEST_PAYLOAD,
    );

    return `${templateId} sent to ${email}`;
  }
}
