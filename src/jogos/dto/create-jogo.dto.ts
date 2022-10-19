import { IsString, IsNumber } from "class-validator";

export class CreateJogoDto {
    @IsNumber()
    id: number;

    @IsString()
    classificacao: string;

    @IsString()
    dataLancamento: string;

    @IsString()
    desenvolvedora: string;

}
