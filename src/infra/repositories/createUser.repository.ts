import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { TUser } from 'src/utils/types';
import { createUserDto } from '../../utils/dtos/createUser.dto';

@Injectable()
export class CreateUserRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(user: createUserDto): Promise<TUser> {
    return await this.prismaService.user.create({
      data: {
        ...user,
      },
    });
  }
}
