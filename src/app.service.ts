import { Injectable } from '@nestjs/common';
import {Shopinglog} from './shopinglog.entity';
import {EntityManager, Repository} from 'typeorm';
import {InjectEntityManager, InjectRepository} from '@nestjs/typeorm';

@Injectable()
export class AppService {
  constructor(
      @InjectRepository(Shopinglog)
      private readonly repository: Repository<Shopinglog>,
      @InjectEntityManager()
      private readonly entityManager: EntityManager,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  getAll(): Promise<Shopinglog[]> {
    return this.repository.find();
  }

  pivot() {
    this.repository
    return this.entityManager.query(`
      SELECT
        name,
        MAX(email) AS email,
        SUM(CASE WHEN item = 'Barang1' THEN quantity END) AS Barang1,
        SUM(CASE WHEN item = 'Barang2' THEN quantity END) AS Barang2,
        SUM(CASE WHEN item = 'Barang3' THEN quantity END) AS Barang3,
        SUM(CASE WHEN item = 'Barang4' THEN quantity END) AS Barang4,
        SUM(CASE WHEN item = 'Barang5' THEN quantity END) AS Barang5,
        SUM(CASE WHEN item = 'Barang6' THEN quantity END) AS Barang6,
        SUM(CASE WHEN item = 'Barang7' THEN quantity END) AS Barang7,
        SUM(CASE WHEN item = 'Barang8' THEN quantity END) AS Barang8,
        SUM(CASE WHEN item = 'Barang9' THEN quantity END) AS Barang9,
        SUM(CASE WHEN item = 'Barang10' THEN quantity END) AS Barang10
      FROM
        shopinglog
      GROUP BY name
    `);
  }
}
