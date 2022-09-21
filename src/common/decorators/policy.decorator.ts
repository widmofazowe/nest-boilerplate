import { applyDecorators, UseGuards } from '@nestjs/common';
import { CheckPolicies, PolicyHandler } from 'src/modules/authorization/check-policies.decorator';
import { PoliciesGuard } from 'src/modules/authorization/policies.guard';

export function Policy(...handlers: PolicyHandler[]) {
  return applyDecorators(UseGuards(PoliciesGuard), CheckPolicies(...handlers));
}
