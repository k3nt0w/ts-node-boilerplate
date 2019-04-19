import { Controller, Get, HttpCode } from '@nestjs/common'
import { UserService } from './user.service'
import { User } from './interfaces/user.interface'
import { statusCode } from '../http/statusCode'

@Controller('user')
export class UserController {
  public constructor(private readonly userService: UserService) {}

  @Get()
  @HttpCode(statusCode.OK)
  public async findAll(): Promise<User[]> {
    return this.userService.findAll()
  }
}
