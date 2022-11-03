import { Controller, Get, Param } from '@nestjs/common';
import { Public } from 'src/common/decorators/public.decorator';
import { MailerService } from './mailer.service';

@Controller('/mailer')
export class MailerController {
  constructor(private mailerService: MailerService) {}

  @Public()
  @Get('/preview/:templateId')
  async previewTemplate(@Param('templateId') templateId: string) {
    const html = this.mailerService.render(templateId, {
      user: {
        name: 'widmo',
        email: 'widomski.pawel@gmail.com',
      },
    });

    return html;
  }
}
