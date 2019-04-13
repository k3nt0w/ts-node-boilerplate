import { Controller, Get, HttpCode } from '@nestjs/common'
import { UserService } from './user.service'
import { User } from './interfaces/user.interface'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @HttpCode(201)
  async findAll(): Promise<User[]> {
    return this.userService.findAll()
  }
}
