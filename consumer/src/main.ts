import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

app.connectMicroservice({
  transport: Transport.RMQ,
  options: {
    urls: ['amqp://admin:123456@localhost:7000'],
    queue: 'test_queue',
    queueOptions: { durable: false },
  },
});

await app.startAllMicroservices(); 
await app.listen(3001); 
console.log('Consumer rodando na porta 3001');
}
bootstrap();
