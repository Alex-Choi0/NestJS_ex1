// member.service.ts : /src/members

import { Injectable} from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { MemberRepository } from "./member.repository";
import { Member } from "./member.entity";
 


// controller에 method를 제공해 준다.
@Injectable()
export class MembersService{
    constructor(
        // DB를 사용하게 되서 더이상 members는 필요 없어졌다.
        @InjectRepository(MemberRepository)
        private memberRepository: MemberRepository
        ) {}
        // DB구축전 테스트용 코드(DB설치후 삭제)
        //private members: Member_ver1[] = [];


    // DB에 있는 모든 member를 조회한다.
    async inquireAllMember(){
        // find()은 쿼리문 SELECT * FROM members;
        // 이라고 보면 된다.
        return await this.memberRepository.find();
    }



    // Controller에서 회원정보 등록 요청시
    // DB와 통신을 해야하기 때문에 async사용.
    async createMember(
        name : string,
        password : string,
        email : string,
        age : number,
        
    ) : Promise <Member>{

        // createMember method를 이용하고 결과를 member.controller에 보낸다.
        return await this.memberRepository.createMember(name, password, email, age);
    }

    



}
