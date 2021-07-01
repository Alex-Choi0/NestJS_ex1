// app.module.ts : /src/

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';





@Module({
  // ProductsModule를 현 AppModule에 추가하였다.
  imports: [
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
