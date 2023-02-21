import { PrimaryGeneratedColumn,Column,Entity } from "typeorm";

@Entity()
export class House {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({length:100})
    title:string;

    @Column({length:128})
    Text:string;

    @Column({length:100})
    type:string;
}
