import { Injectable } from '@nestjs/common';
import {ShopinglogEntity} from './shopinglog.entity';
import {Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';

@Injectable()
export class AppService {
  constructor(
      @InjectRepository(ShopinglogEntity)
      private readonly repository: Repository<ShopinglogEntity>,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  getAll(): Promise<ShopinglogEntity[]> {
    return this.repository.find();
  }

  pivot() {
    return 'test';
  }
}
