import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({
        nullable: false,
        length: 50
    })
    username: string 

    @Column({
        nullable: false,
    })
    password: string
}