import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as helmet from 'helmet';
import * as compression from 'compression';
// import * as csurf from 'csurf';
import 'reflect-metadata';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet());
  app.use(compression());
  // app.use(csurf({ cookie: true }));

  const config = new DocumentBuilder()
    .setTitle('Imobiliária API')
    .setDescription('Sistema Imobiliária ALDEVS')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(+process.env.API_PORT);
}
bootstrap();
