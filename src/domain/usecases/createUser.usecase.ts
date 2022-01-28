import { CreateUserRepository } from './../../infra/repositories/createUser.repository';
import { createUserDto } from 'src/utils/dtos/createUser.dto';
import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { hashPassword } from 'src/utils/helpers/bcrypt';

@Injectable()
export class CreateUserUseCase {
  private readonly logger = new Logger(createUserDto.name);

  constructor(private readonly createUserRepository: CreateUserRepository) {}

  async create(userDto: createUserDto) {
    this.logger.log(`createUserDto: ${JSON.stringify(userDto)}`);
    const user = { ...userDto };

    try {
      user.password = await hashPassword(user.password);
      const createdUser = await this.createUserRepository.create(userDto);
      delete createdUser.password;
      return createdUser;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
