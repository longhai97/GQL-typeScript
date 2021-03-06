import {Field, ID, ObjectType} from "type-graphql";

@ObjectType()
export default class Book {
    @Field(type => ID)
    id: string

    @Field(type => String)
    name: string
}
