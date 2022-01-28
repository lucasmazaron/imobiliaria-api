import { TUser } from './../../utils/types/user.type';
import { updateUserDto } from '../../utils/dtos/updateUser.dto';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class UpdateUserRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async update(user: updateUserDto): Promise<TUser> {
    return await this.prismaService.user.update({
      where: {
        id: user.id,
      },
      data: {
        ...user,
        updated_at: new Date().toISOString(),
      },
    });
  }
}
