/* member.module.ts 파일 */
// module를 생성하는데 필요한 component
import { Module } from '@nestjs/common';

// MembersController, MembersService를 
// 각각의 파일에서 import한다.
import { MembersController } from './member.controller';
import { MembersService } from './member.service';

// members모델 생성
@Module({
    // 해당 controllers(members컨트롤) 및
    // providers(members서비스)를 배열로 입력.
    controllers: [MembersController],
    providers: [MembersService],
})

export class ProductsModule{

}