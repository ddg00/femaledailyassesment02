
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ShopinglogEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    name: string;

    @Column({ length: 255 })
    email: string;

    @Column({ length: 255 })
    item: string;

    @Column('int')
    quantity: number;

    @Column('int')
    total: number;
}
