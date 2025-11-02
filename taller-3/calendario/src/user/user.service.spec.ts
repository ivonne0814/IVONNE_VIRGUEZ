import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

describe('UserService', () => {
  let service: UserService;
  let repo: Repository<User>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getRepositoryToken(User),
          useValue: {
            find: jest.fn(),
            findOne: jest.fn(),
            save: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
            create: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
    repo = module.get<Repository<User>>(getRepositoryToken(User));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a user', async () => {
    const userData = { name: 'John', email: 'john@example.com', password: '123456' };
    const userEntity = { id: 1, ...userData };

    jest.spyOn(repo, 'create').mockReturnValue(userEntity as any);
    jest.spyOn(repo, 'save').mockResolvedValue(userEntity as any);

    const result = await service.create(userData);
    expect(result).toEqual(userEntity);
    expect(repo.save).toHaveBeenCalledWith(userEntity);
  });

  it('should return all users', async () => {
    const users = [{ id: 1, name: 'John' }];
    jest.spyOn(repo, 'find').mockResolvedValue(users as any);

    expect(await service.findAll()).toEqual(users);
  });
});
