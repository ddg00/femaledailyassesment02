
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class history {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    item: string;

    @Column('int')
    quantity: number;

    @Column('int')
    total: number;
}
