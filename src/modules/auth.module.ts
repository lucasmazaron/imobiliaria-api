import { Module } from '@nestjs/common';
import { AuthService } from './users/auth/auth.service';
import { UsersModule } from './users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './users/auth/local.strategy';
import { JwtStrategy } from './users/auth/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from 'prisma/prisma.service';
@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.SECRET_KEY,
      signOptions: {
        expiresIn: '1 days',
      },
    }),
  ],
  providers: [PrismaService, AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
