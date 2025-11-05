import { applyDecorators, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiBearerAuth, ApiParam, ApiBody } from '@nestjs/swagger';
import { DefaultResponse } from 'src/common/interfaces/IResponse';
import { DefaultErrorsDoc } from 'src/common/decorators/defaultErrorsDoc';
import { UpdateVentaDto } from 'src/ventas/dto/update-venta.dto';

export const UpdateVentaDoc = (): MethodDecorator => {
  return applyDecorators(
    ApiBearerAuth(),

    ApiOperation({
      summary: 'Actualizar una venta',
      description: 'Actualiza los datos de una venta existente en la base de datos',
    }),

    ApiParam({
      name: 'id',
      description: 'Identificador de la venta a actualizar',
      type: Number,
      example: 1,
    }),

    ApiBody({
  description: 'Datos de la venta a actualizar',
  required: true,
  schema: {
    type: 'object',
    properties: {
      fecha: {
        type: 'string',
        format: 'date-time',
        example: '2025-11-03T15:30:00.000Z',
        description: 'Fecha de la venta en formato ISO 8601',
      },
      total: {
        type: 'number',
        example: 200000,
        description: 'Valor total de la venta',
      },
      id_usuario: {
        type: 'number',
        example: 1,
        description: 'Identificador del usuario que realiza la venta',
      },
    },
  },
}),


    ApiResponse({
      status: HttpStatus.OK,
      description: 'Venta actualizada correctamente',
      type: DefaultResponse,
      example: {
        status: HttpStatus.OK,
        data: {
          id: 1,
          fecha: '2025-11-03T15:30:00.000Z',
          total: 200000,
          id_usuario: 1,
        },
        message: 'Venta actualizada correctamente',
      },
    }),

    DefaultErrorsDoc('Venta'),
  );
};
