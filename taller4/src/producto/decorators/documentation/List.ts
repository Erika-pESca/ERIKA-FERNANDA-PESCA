import { applyDecorators, HttpStatus } from '@nestjs/common';
import {
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
  ApiParam,
} from '@nestjs/swagger';
import { DefaultResponse } from '../../../common/interfaces/IResponse';
import { DefaultErrorsDoc } from '../../../common/decorators/defaultErrorsDoc';

export const ListProductoDoc = (): MethodDecorator => {
  return applyDecorators(
    ApiBearerAuth(),

    ApiOperation({
      summary: 'Lista todos los productos',
      description: 'Lista todos los productos creados en la base de datos',
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
      description: 'Lista de productos',
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
        message: 'Lista de productos',
      },
    }),

    DefaultErrorsDoc('Producto'),
  );
};
