import {Controller, Get, Render} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello() {
    return { message: this.appService.getHello() };
  }

  @Get('shoping-log')
  async getData() {
    return await this.appService.getAll();
  }
}
