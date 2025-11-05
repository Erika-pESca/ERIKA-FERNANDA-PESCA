import { ApiProperty } from '@nestjs/swagger';

class VentaMinResponseDto {
    @ApiProperty({ example: 1 })
    id_venta: number;
}

class ProductoMinResponseDto {
    @ApiProperty({ example: 5 })
    id_producto: number;
    @ApiProperty({ example: 'Producto A' })
    nombre: string;
}

export class VentaProductoResponseDto {
    @ApiProperty({ example: 1 })
    id_venta_producto: number;

    @ApiProperty({ example: 3 })
    cantidad: number;

    @ApiProperty({ example: 10000.00 })
    precio_unitario: number;

    @ApiProperty({ example: 30000.00 })
    subtotal: number;

    @ApiProperty({ type: VentaMinResponseDto })
    venta: VentaMinResponseDto;

    @ApiProperty({ type: ProductoMinResponseDto })
    producto: ProductoMinResponseDto;
}