import { IsString, IsEmail, IsNotEmpty, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class createPropertyDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly fullName: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly password: string;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty()
  readonly active: boolean;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty()
  readonly admin: boolean;
}
