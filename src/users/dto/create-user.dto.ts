import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({ description: 'User Email' })
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: 'for Password' })
  password: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: 'User name' })
  readonly name: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: 'User lastname' })
  readonly lastname?: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: 'User identification' })
  readonly identification?: string;
  @IsOptional()
  @ApiProperty({ description: 'User picture' })
  readonly picture?: string;
  @IsOptional()
  @ApiProperty({ description: 'User phone' })
  readonly phone?: string;
  @IsOptional()
  @ApiProperty({ description: 'User gender' })
  readonly gender?: string;
  @IsOptional()
  @ApiProperty({ description: 'User date' })
  readonly birthday?: string;
  @IsOptional()
  @ApiProperty({ description: 'User country' })
  readonly country?: string;
  @IsOptional()
  @ApiProperty({ description: 'User state' })
  readonly state?: string;
  @IsOptional()
  @ApiProperty({ description: 'User city' })
  readonly city?: string;
  @IsOptional()
  @ApiProperty({ description: 'User address' })
  readonly address?: string;
  @IsOptional()
  @ApiProperty({ description: 'User is active' })
  readonly active?: boolean;
}
