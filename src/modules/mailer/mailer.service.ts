import { Inject, Injectable } from '@nestjs/common';
import { EmailRenderer, RENDERER } from 'nest-mailer-module/lib/renderers/renderer.service';
import { Main } from './templates/Main';

const TEMPLATES = {
  testTemplate: {
    subject: 'Test Subject',
    blocks: [
      { component: 'contentBlock', content: 'Hello {{user.name}}' },
      { component: 'contentBlock', content: 'Y' },
    ],
  },
};

@Injectable()
export class MailerService {
  constructor(@Inject(RENDERER) private renderer: EmailRenderer) {}

  render(templateId: string, mergeVars: Record<string, any>) {
    const template = TEMPLATES[templateId];
    return this.renderer.render(
      {
        subject: template.subject,
        content: Main({ content: template, mergeVars }),
      },
      mergeVars,
    );
  }
}
