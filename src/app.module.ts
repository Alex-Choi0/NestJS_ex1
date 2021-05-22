// app.module.ts : /src/

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// AppModule에 추가하려는 ProductsModule를 import
import { MembersModule } from './members/member.module';

import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { ConfigModule } from '@nestjs/config';


@Module({
  // ProductsModule를 현 AppModule에 추가하였다.
  imports: [
    MembersModule,
    TypeOrmModule.forRoot(typeOrmConfig),
    ConfigModule.forRoot({
      isGlobal: true
    })
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
