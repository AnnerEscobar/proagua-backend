import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common/pipes';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['http://localhost:4200', 'https://proagua-frontend.netlify.app'],
    credentials: true,
  });
  

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform:true
    })
  );

  await app.listen( process.env.PORT ?? 3000);
  console.log('Trabajando en puerto', process.env.PORT)
}
bootstrap();
