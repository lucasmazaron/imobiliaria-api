import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { hashPassword } from 'src/utils/helpers/bcrypt';
import { updateUserDto } from 'src/utils/dtos/updateUser.dto';
import { UpdateUserRepository } from 'src/infra/repositories/updateUser.repository';

@Injectable()
export class UpdateUserUseCase {
  private readonly logger = new Logger(updateUserDto.name);

  constructor(private readonly updateUserRepository: UpdateUserRepository) {}

  async update(userDto: updateUserDto) {
    this.logger.log(`updateUserDto: ${JSON.stringify(userDto)}`);

    const user = { ...userDto };

    try {
      if (user.password) {
        user.password = await hashPassword(user.password);
      }

      const updatedUser = await this.updateUserRepository.update(userDto);
      delete updatedUser.password;
      return updatedUser;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
