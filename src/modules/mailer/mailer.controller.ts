import { Controller, Get, Param } from '@nestjs/common';
import { Public } from 'src/common/decorators/public.decorator';
import { MailerService } from './mailer.service';

@Controller('/mailer')
export class MailerController {
  constructor(private mailerService: MailerService) {}

  @Public()
  @Get('/preview/:templateId')
  async preview(@Param('templateId') templateId: string) {
    const html = this.mailerService.render(templateId, {
      user: {
        name: 'widmo',
        email: 'widomski.pawel@gmail.com',
      },
    });

    return html;
  }

  @Public()
  @Get('/send/:templateId/:email')
  async send(@Param('templateId') templateId: string, @Param('email') email) {
    const html = this.mailerService.render(templateId, {
      user: {
        name: 'widmo',
        email,
      },
    });

    return html;
  }
}
