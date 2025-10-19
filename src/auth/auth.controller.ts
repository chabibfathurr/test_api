import { Controller, Logger } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authservice: AuthService) {}

  private readonly logger = new Logger(AuthController.name, {
    timestamp: true,
  });
}
