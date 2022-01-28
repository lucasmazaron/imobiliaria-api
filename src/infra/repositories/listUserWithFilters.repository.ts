import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { TUser, UserFilters } from 'src/utils/types';
import { getUserFilters } from '../helpers/filters.helper';

@Injectable()
export class ListUserWithFiltersRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async listUsers(filters: UserFilters): Promise<TUser[]> {
    const userFilter = getUserFilters(filters);
    return await this.prismaService.user.findMany({
      where: userFilter,
    });
  }
}
