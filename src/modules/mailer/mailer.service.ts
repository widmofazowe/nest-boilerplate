import { Inject, Injectable } from '@nestjs/common';
import { EmailTemplate } from 'nest-mailer-module';
import { EmailRenderer, RENDERER } from 'nest-mailer-module/lib/renderers/renderer.service';
import { Main } from './templates/Main';

const TEMPLATES: Record<string, EmailTemplate> = {};

@Injectable()
export class MailerService {
  constructor(@Inject(RENDERER) private renderer: EmailRenderer) {}

  render(templateId: string, mergeVars: Record<string, any>) {
    const template = this.loadTemplate(templateId);

    return this.renderer.render(
      {
        subject: template.subject,
        content: Main({ content: template.content, previewText: template.subject, mergeVars }),
      },
      mergeVars,
    ) as string;
  }

  loadTemplate(templateId: string) {
    if (!TEMPLATES[templateId]) {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      TEMPLATES[templateId] = require(`./templates/${templateId}`).default;
    }

    return TEMPLATES[templateId] as EmailTemplate;
  }
}
