import { PrimaryGeneratedColumn,Column,Entity } from "typeorm";

@Entity()
export class newArticle {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({length:45})
    title:string;

    @Column({length:45})
    timeData:string;

    @Column({length:255})
    text:string;

    @Column({length:255})
    imageUrl:string;
}
