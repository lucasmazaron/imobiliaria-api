import { Prisma } from '.prisma/client';
import { UserFilters } from 'src/utils/types';

export function getUserFilters(filters: UserFilters): Prisma.UserWhereInput {
  return {
    email: {
      contains: filters.email,
    },
  };
}
