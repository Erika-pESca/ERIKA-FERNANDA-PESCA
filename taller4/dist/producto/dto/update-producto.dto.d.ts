import { CreateProductoDto } from './create-producto.dto';
declare const UpdateProductoDto_base: import("@nestjs/common").Type<Partial<CreateProductoDto>>;
export declare class UpdateProductoDto extends UpdateProductoDto_base {
    nombre?: string;
    descripcion?: string;
    precio?: number;
    stock?: number;
    proveedorId?: number;
    categoriaId?: number;
}
export {};
