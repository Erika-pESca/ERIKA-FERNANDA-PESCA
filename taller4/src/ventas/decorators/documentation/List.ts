import { applyDecorators, HttpStatus } from '@nestjs/common';
import {
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
  ApiParam,
} from '@nestjs/swagger';
import { DefaultResponse } from '../../../common/interfaces/IResponse';
import { DefaultErrorsDoc } from '../../../common/decorators/defaultErrorsDoc';
import { Producto } from '../../../producto/producto.entity';

export const ListVentasDoc = (): MethodDecorator => {
  return applyDecorators(
    ApiBearerAuth(),

    ApiOperation({
      summary: 'Lista todas las ventas',
      description: 'Lista todas las ventas creadas en la base de datos',
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
      description: 'Lista de ventas',
      type: DefaultResponse,
      example: {
        status: HttpStatus.OK,
        data: [
          {
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
          {
            id: 2,
            nombre: 'andres',
            apellido: 'ardila',
            correo: 'andres@gmail.com',
            contrasena: '125234',
            rol: 'Usuario',
            Producto: 'mangera',
            precio: 100,
            cantidad: 1,
            fecha: '2022-01-01',
          },
        ],
        message: 'Lista de ventas',
      },
    }),

    DefaultErrorsDoc('Venta'),
  );
};
