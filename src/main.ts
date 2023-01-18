import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { API_VERSION, PORT } from './env';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix(`api/${API_VERSION}`);

  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Restaurants API')
    .setDescription('Restaurants API')
    .setVersion(API_VERSION)
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(PORT);
}
bootstrap();
