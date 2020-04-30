import { IsString, IsNotEmpty, IsNumber } from "class-validator";

export class CreateProductDto { 
    @IsString()
    @IsNotEmpty()
    readonly name:string;

    @IsString()
    @IsNotEmpty()
    readonly description:string;

    @IsString()
    @IsNotEmpty()
    readonly imageUrl:string;

    @IsNumber()
    @IsNotEmpty()
    readonly price:number;
};