import { createParamDecorator, ExecutionContext } from '@nestjs/common';

import { Request } from 'express';

export const RequestUser = createParamDecorator((_, ctx: ExecutionContext) => {
  const request: Request = ctx.switchToHttp().getRequest();
  return request.user;
});
