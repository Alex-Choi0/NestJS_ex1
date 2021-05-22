// member.module.ts : /src/members

// module를 생성하는데 필요한 component
import { Module } from '@nestjs/common';

// MembersController, MembersService를 
// 각각의 파일에서 import한다.
import { MembersController } from './member.controller';
import { MembersService } from './member.service';

// MemberRepository를 module에 import한다.
import { MemberRepository } from './member.repository';
// TypeOrmModule를 적용
import { TypeOrmModule } from '@nestjs/typeorm';



// members모델 생성
@Module({
    imports:[
        TypeOrmModule.forFeature([MemberRepository])
    ],
    // 해당 controllers(members컨트롤) 및
    // providers(members서비스)를 배열로 입력.
    controllers: [MembersController],
    providers: [MembersService],
})

export class MembersModule{

}