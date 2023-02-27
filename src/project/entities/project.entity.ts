import { PrimaryGeneratedColumn,Column,Entity } from "typeorm";

@Entity()
export class Project {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({length:145})
    name:string;

    @Column({length:245})
    text:string;

    @Column({length:100})
    tech:string;
}
