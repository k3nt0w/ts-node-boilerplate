import { Controller, Get, HttpCode } from '@nestjs/common'
import { UserService } from './user.service'
import { User } from './interfaces/user.interface'

@Controller('user')
export class UserController {
  private constructor(private readonly userService: UserService) {}

  @Get()
  @HttpCode(201)
  public async findAll(): Promise<User[]> {
    return this.userService.findAll()
  }
}
