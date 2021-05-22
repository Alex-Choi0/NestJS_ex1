/* app.module.ts 파일 */

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// AppModule에 추가하려는 ProductsModule를 import
import { MembersModule } from './members/member.module';


@Module({
  // ProductsModule를 현 AppModule에 추가하였다.
  imports: [
    MembersModule,
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
