export class CreateProductoDto {
  nombre?: string;
  descripcion?: string;
  precio?: number;
  stock?: number;
  proveedorId?: number;
  categoriaId?: number;
}
