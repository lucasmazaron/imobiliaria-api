import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { PeopleController } from '../presentation/controllers/peoples.controller';
import { PeoplesService } from './people/peoples.service';

@Module({
  controllers: [PeopleController],
  providers: [PrismaService, PeoplesService],
  exports: [PeoplesService],
})
export class PeoplesModule {}
