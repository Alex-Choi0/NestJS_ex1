// typeorm.config.ts : /src/config

// TypeORM의 option 설정
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

// TypeORM과 DataBase를 연결하기 위한 셋팅
export const typeOrmConfig:TypeOrmModuleOptions = {
    type: 'mysql', // 데이터베이스 타입
    host: 'localhost', // 주소
    port: 3306, // 데이터베이스 포스트
    username: 'root', // 데이터베이스 소유자 이름
    password: 'qweasdZXC123', // 데이터베이스 비밀번호
    database: 'members', // 데이터베이스 이름
    autoLoadEntities: true, // 자동으로 entities를 DB에 배포
    synchronize: true // 동기화
};