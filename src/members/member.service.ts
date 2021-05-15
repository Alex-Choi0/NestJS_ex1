import { Injectable} from "@nestjs/common";
import { Member_ver1, Member_ver2 } from "./members.module";
import { v4 as uuidv4 } from 'uuid'; // PK ID를 만들기 위한 npm


// controller에 method를 제공해 준다.
@Injectable()
export class MembersService{

    // 더미데이터 members을 생성한다.
    // class Member_ver1기준이며 빈배열로 시작한다.
    // private는 members가 내부 method을 통하지 않고서는
    // 참조될수 없다.
    private members: Member_ver1[] = [];


    // Controller에서 회원정보 등록 요청시
    insertMember(
        name : string,
        password : string,
        email : string,
        age : number,
        
    ) : string{

        // uuid를 이용하여 PK ID를 생성
        const pkId = uuidv4();
        // newMember에 새로운 class을 생성후 Client에서 받은 원소들을 입력
        const newMember = new Member_ver1(pkId, name, password, email, age);
        // Array members에 newMember을 Push하여 배열을 삽입
        this.members.push(newMember);
        // 문자열 pkId를 return한다.
        return pkId;

    }

    // Controller에서 회원저어보 조회시
    getMembers(){
        // 모든 회원의 정보를 배열로 return
        return [...this.members];
    }

}
