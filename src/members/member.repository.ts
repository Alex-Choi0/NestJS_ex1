// member.repository.ts : /src/members

import { Member } from './member.entity';
import { EntityRepository, Repository } from 'typeorm';

// 내부에 에러가 발생시 사용.
import { 
    BadRequestException, 
    InternalServerErrorException 
} from '@nestjs/common';

// Member entity를 불러서 DB의 테이블 생성
@EntityRepository(Member)
export class MemberRepository extends Repository<Member> {
// members.service.ts에 사용할 method생성


    // Member를 생성한다. 
    async createMember(
        name : string,
        password : string,
        email : string,
        age : number,
    ) : Promise <Member> {

        // member record 생성
        const member = new Member()

        // service에서 받은 정보를 record에 작성
        member.name = name;
        member.password = password;
        member.email = email;
        member.age = age;

        try{
            // 작성한 record를 DB에 저장.
            await member.save();
        }
        catch(err){
            // error가 발생하면 코드 500과 에러 message를 service쪽에
            // 보내준다.
            throw new InternalServerErrorException(err.message);
            // 여기서 코드는 마무리됨
        }


        // password는 민감한 정보이기 때문에 
        // service에 보낼때는 삭제한다.
        delete member.password;

        // DB에 record가 저장된 다음
        // member를 service에 return
        return member;
    }

    // Member DB정보를 수정한다.
    // ?는 없어도 되는 인자이다.
    async updateMember(
        memberId : number,
        name? : string,
        password? : string,
        email? : string,
        age? : number,
    ) : Promise <Member> {

        // this는 DB를 말한다.
        // DB에서 해당 id와 일치하는 memberId를 찾는다.
        const member = await this.findOne({ id : memberId});

        // member에 정보가 있으면 입력
        // 없으면 DB의 정보를 입력한다.
        member.name = name ? name : member.name;
        member.password = password ? password : member.password;
        member.email = email ? email : member.email;
        member.age = age ? age : member.age;

        try{
            // 수정한 member의 정보를 DB에 저장한다.
            await member.save()
        }
        catch(err){
            // error가 발생하면 코드 500과 에러 message를 service쪽에
            // 보내준다.
            throw new InternalServerErrorException(err.message);
            // 여기서 코드는 마무리됨
        }

        // password는 민감한 정보이므로 Service쪽에 보내지 않는다.
        delete member.password;

        // member를 Service쪽으로 return한다.
        return member
    }

    // Member DB정보를 수정한다.
    async deleteMember(
        memberId : number,
        password : string,
        email : string,
    ) : Promise <Member> {

        // this는 DB를 말한다.
        // DB에서 해당 id와 일치하는 memberId를 찾는다.
        const member = await this.findOne({ id : memberId});
        console.log(member);
        try{

            // member가 존재하지 않을시
            if(!member){
                throw {
                    statusCode : 400,
                    message : "DB can't find the record"
                }
            }

            // password, email이 생략시
            else if(
                !password || 
                !email
            ){
                throw {
                    statusCode : 400,
                    message : "There are no password or email"
                }
            }

            // member의 입력정보와 DB의 정보를 비교
            else if(
                member.password === password &&
                member.email === email
            ){
                await this.delete({id : memberId});
            }

            
        }
        catch(err){
            // error가 발생하면 해당코드와 에러 message를 service쪽에
            // 보내준다.
            console.log(err);

            // 에러코드에 따라 다르게 respone한다.
            if(err.statusCode === 400){
                throw new BadRequestException(err.message)
            }

            // 기타에러는 내부에러로 처리
            throw new InternalServerErrorException(err.message);
            // 여기서 코드는 마무리됨
        }


        // member를 Service쪽으로 return한다.
        return member
    }

}