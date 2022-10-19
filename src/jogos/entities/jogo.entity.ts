import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "jogos"})
export class Jogo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 10, nullable: false})
    classificacao: string;

    @Column({length: 10, nullable: false})
    dataLancamento: string;

    @Column({length: 30, nullable: false})
    desenvolvedora: string;
}
