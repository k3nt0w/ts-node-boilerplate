import { Test, TestingModule } from '@nestjs/testing'
import { UserController } from '../user.controller'
import { UserService } from '../user.service'
import { User } from '../interfaces/user.interface'

describe('User Controller', () => {
  let userController: UserController
  let userService: UserService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    }).compile()

    userController = module.get<UserController>(UserController)
    userService = module.get<UserService>(UserService)
  })

  describe('findAll', () => {
    it('should return an array of users', async () => {
      const result: User[] = [
        {
          name: 'Pixel',
          age: 2,
        },
      ]
      jest.spyOn(userService, 'findAll').mockImplementation(() => result)

      expect(await userController.findAll()).toBe(result)
    })
  })
})
