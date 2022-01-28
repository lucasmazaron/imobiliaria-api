import { ListUserWithFiltersRepository } from './../../../infra/repositories/listUserWithFilters.repository';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { UsersService } from '../users.service';
import { JwtService } from '@nestjs/jwt';
import { comparePassword } from 'src/utils/helpers/bcrypt';
import { TUser, TLoginData } from '../../../utils/types';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private readonly listUserWithFiltersRepository: ListUserWithFiltersRepository
  ) {}

  async validateUser(email: string, pass: string): Promise<TUser> {
    const user = await this.listUserWithFiltersRepository.listUsers({
      email: email,
    });

    if (user.length > 1) {
      throw new InternalServerErrorException('Usuário duplicado!');
    }

    if (user && (await comparePassword(pass, user[0].password))) {
      return user[0];
    }
    return null;
  }

  async login(user: TLoginData) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
      user: user,
    };
  }
}
