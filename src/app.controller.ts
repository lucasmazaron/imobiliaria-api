import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { BASE_URL } from './utils/consts';
import { AuthService } from './modules/users/auth/auth.service';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post(`${BASE_URL}/auth`)
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
