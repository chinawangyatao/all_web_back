import { PrimaryGeneratedColumn,Column,Entity } from "typeorm";

@Entity()
export class Recommend {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({length:100})
    title:string;
}
