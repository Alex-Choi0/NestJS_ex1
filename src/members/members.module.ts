/*

회원가입시 유저가 입력해야하는 정보

    name : 이름 (string)
    password : 비밀번호 (string)
    email : 이메일 (string)
    age : 나이 (number)

    위 members.module을 만드는 방법은 2가지가 있습니다.

*/

// 1번째 cless를 이용하여 지정
export class Member_ver1{

    id : string; // DB저장시 PR키
    name : string;
    password : string;
    email : string;
    age : number;

    constructor(
        id: string, 
        name: string, 
        password: string,
        email: string, 
        age: number
        ) {

        this.id = id;
        this.name = name;
        this.password = password;
        this.email = email;
        this.age = age;
    }

}

// 2번째 public를 이용하여 지정
export class Member_ver2{

    // 위쪽 코드와 동일함
    constructor(
        public  id: string,
        public  name: string,
        public  password: string,
        public  email: string,
        public  age: number
        ) {

            }

}