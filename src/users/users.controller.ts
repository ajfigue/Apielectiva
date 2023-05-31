import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  ParseIntPipe,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from './auth.guard';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @ApiOperation({ summary: 'Create a new user' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post('/create')
  async createUser(@Body() newUser: CreateUserDto): Promise<User> {
    return this.userService.createUser(newUser);
  }

  @ApiOperation({ summary: 'Login whit your user' })
  @Post('/login')
  login(@Body() newUser: CreateUserDto) {
    return this.userService.login(newUser);
  }

  @ApiOperation({ summary: 'User List' })
  @Get('/userList')
  listUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }

  @ApiOperation({ summary: 'Find User with id' })
  @Get('/userList/:id')
  listUser(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return this.userService.getUser(id);
  }

  @ApiOperation({ summary: 'Delete users' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete('/userDelete/:id')
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.deleteUser(id);
  }

  @ApiOperation({ summary: 'Update Users' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Put('/userUpdate/:id')
  update_user(
    @Param('id', ParseIntPipe) id: number,
    @Body() user: UpdateUserDto,
  ) {
    return this.userService.updateUser(id, user);
  }
}
