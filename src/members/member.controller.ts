/* member.controller.ts 파일 */

// Controller를 구성하기 위한 method
// Controller : nest js에서 컨트롤 구현시 필요
// Post : nest js에서 Client의 Post 구현시 필요
// Body : nest js에서 Client의 Body를 추출할때 필요
// Get : nest js에서 Client의 Get 구현시 필요
import { Controller, Post, Body, Get } from '@nestjs/common';
// MembersService method를 참조
import { MembersService } from './member.service';

// Controller의 시작부분
// ('members')일시 url은 root/members으로 요청이 와야 
// 아래 Controller이 실행된다.
@Controller('members')
export class MembersController{

    // MembersService는 현재 class안에서만 사용할수 있다.
    // 동시에 읽기 전용이다.
    constructor(private readonly membersService: MembersService) {

    }

    // GET요청 URL : root/members
    @Get()
    // 모든 members의 정보를 요청한다.
    getAllMembers(){
        return {
            // Controller에서 membersService의 getMembers method
            // 에서 해당값을 요청.
            members : this.membersService.getMembers()
        }
    }

    // POST요청 URL : root/members
    @Post()
    addMember(
        // Client의 Body에서 온 정보를 각각 변수로 
        // 저장
        @Body() completeBody: {
            name : string,
            password : string,
            email : string,
            age : number
        }

        /* 위 주석의 방법으로 사용할수 있음
        Body에서 받은 변수들은 각각 name, password, email, age이다.
        @Body('name') name: string,
        @Body('password') password: string,
        @Body('email') email: string,
        @Body('age') age : number
        */

    ){
        // membersService의 insertMember를 이용하여 신입회원을 
        // 가입시키고 해당 PkId를 return한다.
        const memberPkId = this.membersService.insertMember(
            completeBody.name,
            completeBody.password,
            completeBody.email,
            completeBody.age
        );

        

        // 새로 가입한 회원의 PkId를 JSON형식으로 return 한다.
        return {
            id : memberPkId
        }
    }

}