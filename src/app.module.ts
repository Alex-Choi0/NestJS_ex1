// app.module.ts : /src/

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeeController } from './modules/coffee/coffee.controller';


@Module({
  // ProductsModule를 현 AppModule에 추가하였다.
  imports: [
    ],
  controllers: [AppController, CoffeeController],
  providers: [AppService],
})
export class AppModule {}
