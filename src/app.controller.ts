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
  @Render('datashopinglog')
  async getData() {
    return { data : await this.appService.getAll() };
  }

  @Get('pivot')
  @Render( 'pivot' )
  async getPivot() {
    return { data: await this.appService.pivot() };
  }
}
