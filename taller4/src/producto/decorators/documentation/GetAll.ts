import { applyDecorators, HttpStatus } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiBearerAuth, ApiParam } from "@nestjs/swagger";
import { DefaultResponse } from "src/common/interfaces/IResponse";  
import { DefaultErrorsDoc } from "src/common/decorators/defaultErrorsDoc";
import { Producto } from "src/producto/producto.entity";
import { Proveedor } from "src/proveedor/proveedor.entity";

export const GetAllProductoDoc = (): MethodDecorator => {
  return applyDecorators(
    ApiBearerAuth(),

    ApiOperation({
      summary: 'obtiene productos por el id',
      description: 'obtiene productos por el id',
    }),

    ApiParam({
      name: 'id',
      required: true,
      description: 'Identificador del usuario a obtener',
      type: Number,
      example: 1,
    }), 

    ApiResponse({
      status: HttpStatus.OK,
      description: 'Productos obtenido correctamente',
      type: DefaultResponse,
      example: {
        status: HttpStatus.OK,
        data: [
          {
            id: 1,
            Producto: 'tuveria', 
            precio: 100,
            cantidad: 1,
            Proveedor: 'tuveria.sta',
            Categoria: 'plastico',
          },
          {
            id: 2,
            Producto: 'mangera', 
            precio: 100,
            cantidad: 1,
            Proveedor: 'Stanley',
            Categoria: 'riego',
          },

        ],
        message: 'Productos obtenido correctamente',
      },
    }),

    DefaultErrorsDoc('Producto')
  );
};  