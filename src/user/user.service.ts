import { Injectable } from '@nestjs/common'
import { User } from './interfaces/user.interface'

@Injectable()
export class UserService {
  private readonly user: User[] = [
    { name: 'alice', age: 18 },
    { name: 'bob', age: 18 },
  ]

  findAll(): User[] {
    return this.user
  }
}
