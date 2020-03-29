import { Result } from '@entities/Result.entity';
import 'reflect-metadata';
import { Field, Float, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class CountryInfo {
    @Field(() => ID, { nullable: true })
    _id: string;

    @Field(() => Float, { nullable: true })
    lat: number;

    @Field(() => Float)
    long: number;

    @Field()
    flag: string;

    @Field({ nullable: true })
    iso3: string;

    @Field({ nullable: true })
    iso2: string;
}

@ObjectType()
export class Country {
    @Field()
    country: string;

    @Field()
    countryInfo: CountryInfo;

    @Field(() => Result)
    result: Result;
}