import { Controller, Get, Param, Query } from '@nestjs/common';

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
}
