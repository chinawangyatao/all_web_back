import { PrimaryGeneratedColumn,Column,Entity } from "typeorm";

@Entity()
export class aboutUs {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({length:255})
    title:string;
}