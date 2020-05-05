import {Field, ID, ObjectType} from "type-graphql";
import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
@ObjectType()
export default class Author {

    @PrimaryGeneratedColumn()
    @Field(type => ID)
    id: number

    @Column()
    @Field(type => String)
    name: string
}
