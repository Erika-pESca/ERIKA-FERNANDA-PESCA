import { applyDecorators, HttpStatus } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiBearerAuth, ApiParam } from "@nestjs/swagger";
import { DefaultResponse } from "src/common/interfaces/IResponse";
import { DefaultErrorsDoc } from "src/common/decorators/defaultErrorsDoc";
import { Producto } from "src/producto/producto.entity";

export const GetAllVentasDoc = (): MethodDecorator => {
  return applyDecorators(
    ApiBearerAuth(),

    ApiOperation({
      summary: 'obtiene ventas por el id',
      description: 'obtiene ventas por el id',
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
      description: 'Ventas obtenido correctamente',
      type: DefaultResponse,
      example: {
        status: HttpStatus.OK,
        data: {
          id: 1,
          nombre: 'Erika',
          apellido: 'Pesca',
          correo: 'erika@gmail.com',
          contrasena: '123456',
          rol: 'Administrador',
          Producto: 'mangera', 
          precio: 100,
          cantidad: 1,
          fecha: '2022-01-01',
        },
        message: 'Ventas obtenido correctamente',
      },
    }),

    DefaultErrorsDoc('Venta')
  );
};  