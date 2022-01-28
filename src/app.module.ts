import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ThrottlerModule } from '@nestjs/throttler';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './modules/users.module';
import { PeoplesModule } from './modules/peoples.module';
import { AuthModule } from './modules/auth.module';
import { PropertyModule } from './modules/property.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 10,
    }),
    UsersModule,
    PeoplesModule,
    PropertyModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
