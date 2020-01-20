import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {ShopinglogEntity} from './shopinglog.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      // sql connection
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [ShopinglogEntity],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([ShopinglogEntity]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
