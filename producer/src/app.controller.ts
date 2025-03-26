import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('send')
  async send(@Body('message') message: string) {
    return this.appService.sendMessage(message || 'Olá, RabbitMQ! Aqui é API NestJS na porta 3000');
  }
}
