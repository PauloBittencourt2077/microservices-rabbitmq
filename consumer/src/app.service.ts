import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getStatus(): string {
    return 'Consumer está ativo e escutando mensagens no NestJS na porta 3001!';
  }
}
