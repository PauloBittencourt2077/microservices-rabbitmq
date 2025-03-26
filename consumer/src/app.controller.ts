import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);
  constructor(private readonly appService: AppService) {}

  @EventPattern('message')
  handleMessage(message: string) {
    this.logger.log(`Mensagem recebida: "${message}"`);
  }

  @Get('status')
  getStatus() {
    return this.appService.getStatus();
  }
}
