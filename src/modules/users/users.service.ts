import {
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { createUserDto } from '../../utils/dtos/createUser.dto';
import { updateUserDto } from '../../utils/dtos/updateUser.dto';
import { hashPassword } from 'src/utils/helpers/bcrypt';
import { PrismaService } from 'prisma/prisma.service';
import { TUser } from '../../utils/types';

@Injectable()
export class UsersService {
  private readonly logger = new Logger(createUserDto.name);

  constructor(private readonly prismaService: PrismaService) {}

  async listUserById(id: string): Promise<TUser> {
    const user = await this.prismaService.user.findFirst({
      where: {
        id: id,
      },
    });

    if (!user) {
      throw new NotFoundException(`Usuário id ${id} não encontrado!`);
    }

    return user;
  }

  async deleteUser(id: string): Promise<void> {
    await this.prismaService.user.delete({
      where: { id },
    });
  }
}
