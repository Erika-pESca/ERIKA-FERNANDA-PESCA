import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Producto } from '../producto/producto.entity';


@Entity('categoria')
export class Categoria {
    @PrimaryGeneratedColumn()
    id_categoria!: number;

    @Column({ length: 100 })
    nombre!: string;

    @Column({ type: 'text', nullable: true })
    descripcion?: string;

    //Relación uno a muchos (1 categoría tiene muchos productos)
    @OneToMany(() => Producto, producto => producto.categoria)
    productos!: Producto[];
}


