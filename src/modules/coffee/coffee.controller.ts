import { 
    Body, 
    Controller, 
    Get, 
    Param, 
    Post, 
    Query, 
    HttpCode,
    HttpStatus,
    InternalServerErrorException 
} from '@nestjs/common';

// coffee 컨트롤러
// localhosg:3000/coffee url로 클라이언트에서 서버로 요청을 준다.
@Controller('coffee')
export class CoffeeController {

    @Get()
    // @Query()는 url에 있는 쿼리값을 갖고옵니다.
    findAll(@Query() paginationQuery){
        // 클라이언트에서 항상 받는 값 2개를 변수로 지정
        const { color, cost} = paginationQuery;
        return (
            `Color : ${color}, Cost : ${cost}`
        )
    }

    // Get요청에서 id를 받는다.
    @Get(':id')
    findOne(@Param('id') id: string){ // @Param()은 NestJS에서 제공, 파라메터 찾기
        return `보내주신 url의 해당 id는 ${id} 입니다.`
    }

    // body값을 읽기 위하여 Post요청을 만든다. 
    @Post()
    // 응답할 코드를 지정
    @HttpCode(HttpStatus.ACCEPTED) // ACCEPTED는 202코드 출력
    create(
        @Body('name') name : string,
        @Body('message') message : string
    ) { // create에서 Body를 받을수 있도록 코딩한다.
        console.log("request from client(POST)")
        // 클라이언트에서 받은 body를 확인하기 위해서 
        // 다시 클라이언트로 응답한다.

        try{
            return (`당신의 이름은 ${name}이고 보낸 메세지는 '${message}' 입니다.`);
        }
        catch{
            throw new InternalServerErrorException("임의 에러 발생");
        }

        
        
    }
}
