import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [ClientsModule.register([
    {
      name: 'RABBITMQ_SERVICE',
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://admin:123456@localhost:7000'],
        queue: 'test_queue',
        queueOptions: { durable: false },
      },
    },
  ]),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
