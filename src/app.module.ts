import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Shopinglog} from './shopinglog.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      // sql connection
      type: 'mysql',
      host: 'db',
      port: 3306,
      username: 'pivot',
      password: 'pivot',
      database: 'pivot',
      entities: [Shopinglog],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Shopinglog]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
