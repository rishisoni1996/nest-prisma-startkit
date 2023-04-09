import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { JwtAuthGuard } from '../auth/auth.jwt.guard';

import { UserService } from './user.service';
import { CreateUserDTO, UserResponseDTO } from './user.dto';

@ApiTags('Users')
@Controller('/users')
export class UserController {
  constructor(private userService: UserService) { }

  @Get()
  @ApiOperation({ description: 'Get all Users' })
  @UseGuards(JwtAuthGuard)
  async getAll(): Promise<User[]> {
    return this.userService.users({});
  }

  @Post('user')
  @ApiOperation({ description: 'Create a User' })
  @ApiBody({ type: CreateUserDTO })
  @ApiResponse({ type: UserResponseDTO })
  async signupUser(
    @Body() userData: { name?: string; email: string; password: string },
  ): Promise<User> {
    return this.userService.createUser(userData);
  }
}
