import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {constructor(
  @Inject('RABBITMQ_SERVICE') private readonly client: ClientProxy,
) {}

async sendMessage(message: string) {
  this.client.emit('message', message);
  return { status: 'Mensagem enviada pelo Nestjs Producer na porta 3000 com sucesso', message };
}
}
