import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RefreshToken } from './entities/refresh-token.entity';

@Injectable()
export class RefreshTokenService {
  constructor(
    @InjectRepository(RefreshToken)
    private readonly refreshTokenRepository: Repository<RefreshToken>,
  ) {}

  create(data: Partial<RefreshToken>) {
    const token = this.refreshTokenRepository.create(data);
    return this.refreshTokenRepository.save(token);
  }

  findAll() {
    return this.refreshTokenRepository.find({ relations: ['user'] });
  }

  findOne(id: number) {
    return this.refreshTokenRepository.findOne({ where: { id }, relations: ['user'] });
  }

  update(id: number, data: Partial<RefreshToken>) {
    return this.refreshTokenRepository.update(id, data);
  }

  remove(id: number) {
    return this.refreshTokenRepository.delete(id);
  }
}
