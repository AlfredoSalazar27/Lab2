import { IsNotEmpty, IsNumber, IsPositive, MaxLength, isNotEmpty, maxLength } from "class-validator";
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Productos{
 
    @PrimaryColumn()
    id:number;
    @Column({length:50,nullable:false})
    @MaxLength(50,{message: 'debe de contener un msximo mde 50 caracteres'})
    @IsNotEmpty({message: 'Debe de indicar el nombre del producto'})
    nombre: string;
    @Column()
    @IsNotEmpty({message: 'Debe indicar el precio'})
    @IsNumber()
    precio: number;
    @Column()
    stock:number;
    @Column()
    @IsPositive({message: 'debe indicar un valor positivo'})
    @IsNotEmpty({message: 'Debe indicar el stock'})
    categoria: number;
    @Column()
    @IsNotEmpty({message: 'Debe indicar la categoria'})
    @Column({default:1})
    estado: boolean;






    
}