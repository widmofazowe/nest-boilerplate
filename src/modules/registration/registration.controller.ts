import { Body, Controller, Post } from '@nestjs/common';
import { Public } from 'src/common/decorators/public.decorator';
import { RegistrationDto } from './registration.dto';
import { RegistrationService } from './registration.service';

@Controller('/registration')
export class RegistrationController {
  constructor(private registrationService: RegistrationService) {}

  @Post('/')
  @Public()
  async register(@Body() registrationDto: RegistrationDto) {
    return this.registrationService.register(registrationDto);
  }
}
