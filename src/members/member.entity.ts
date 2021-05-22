// member.entity.ts : /src/members

import {    Entity, 
            Column, 
            PrimaryGeneratedColumn, 
            BaseEntity // repository에 record작성시 필요.
        } from 'typeorm';


@Entity()
export class Member extends BaseEntity {
    // pk number 생성
    @PrimaryGeneratedColumn() 
    id: number;

    // 컬럼 생성 : name
    @Column()
    name: string;

    // 컬럼 생성 : password
    @Column()
    password: string;

    // 컬럼 생성 : email
    @Column()
    email: string;

    // 컬럼 생성 : age
    @Column('int') // int는 정수
    age: number;

}