// member.controller.ts : /src/members

// Controller를 구성하기 위한 method
// Controller : nest js에서 컨트롤 구현시 필요
// Post : nest js에서 Client의 Post 구현시 필요
// Body : nest js에서 Client의 Body를 추출할때 필요
import { 
    Controller, 
    Post, 
    Body, 
    Get,
    Query,
    Put,
    BadRequestException
    } from '@nestjs/common';
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
    async inquireMember(@Query() query){

        // parame의 id가 존재하지 않음
        // 모든 member를 조회한다.
        if(!query.id){
            // service에서 method inquireAllMember를 이용하여
            // 모든 DB에 있는 member정보를 받는다.
            return await this.membersService.inquireAllMember();
        }

        else{
            return await this.membersService.inquireOneMember(query.id);
        }

        
    }

    

    // POST요청 URL : root/members
    @Post()
    async addMember(
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
        const memberPkId = await this.membersService.createMember(
            completeBody.name,
            completeBody.password,
            completeBody.email,
            completeBody.age
        );

        return memberPkId;

    }

    @Put()
    async updateMember(
        @Query() query,
        @Body('name') name: string,
        @Body('password') password: string,
        @Body('email') email: string,
        @Body('age') age : number
        
        ){

        // query에 memberId가 존재하지 않을시 
        // if문 수행
        if(!query.id){
            throw new BadRequestException("parms id doesn't exist");
        }

        const updateMember = await this.membersService.updateMember(
            query.id,name, password, email, age

        );

        return updateMember;

    }

}