import { PrimaryGeneratedColumn,Column,Entity } from "typeorm";

@Entity()
export class Code {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({length:128})
    title:string;

    @Column({length:28})
    type:string;

    @Column({length:255})
    urlImage:string;
}
