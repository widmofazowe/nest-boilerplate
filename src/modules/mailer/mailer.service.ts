import { Inject, Injectable } from '@nestjs/common';
import { EmailRenderer, RENDERER } from 'nest-mailer-module/lib/renderers/renderer.service';
import { Template } from './models/template';
import { Main } from './templates/Main';

const TEMPLATES: Record<string, Template> = {};

@Injectable()
export class MailerService {
  constructor(@Inject(RENDERER) private renderer: EmailRenderer) {}

  render(templateId: string, mergeVars: Record<string, any>) {
    const template = this.loadTemplate(templateId);

    return this.renderer.render(
      {
        subject: template.subject,
        content: Main({ content: template, mergeVars }),
      },
      mergeVars,
    );
  }

  loadTemplate(templateId: string) {
    if (!TEMPLATES[templateId]) {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      TEMPLATES[templateId] = require(`./templates/${templateId}`).default;
    }

    return TEMPLATES[templateId];
  }
}
