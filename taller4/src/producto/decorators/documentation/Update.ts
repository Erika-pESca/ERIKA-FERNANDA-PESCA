import { applyDecorators, HttpStatus } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiBearerAuth, ApiParam, ApiBody } from "@nestjs/swagger";
import { DefaultResponse } from "../../../common/interfaces/IResponse";
import { DefaultErrorsDoc } from "../../../common/decorators/defaultErrorsDoc";
import { UpdateProductoDto } from "../../../producto/dto/update-producto.dto";

export const UpdateProductoDoc = (): MethodDecorator => {
  return applyDecorators(
    ApiBearerAuth(),

    ApiOperation({
      summary: 'Actualizar un producto',
      description: 'Actualiza los datos de un producto existente en la base de datos',
    }),

    ApiParam({
      name: 'id',
      description: 'Identificador del producto a actualizar',
      type: Number,
      example: 1,
    }),

    ApiBody({
      description: 'Datos del producto a actualizar',
      type: UpdateProductoDto,
    }),

    ApiResponse({
      status: HttpStatus.OK,
      description: 'Producto actualizado correctamente',
      type: DefaultResponse,
      example: {
        status: HttpStatus.OK,
        data: {
          id: 1,
          Producto: 'tuveria', 
          precio: 100,
          cantidad: 1,
          Proveedor: 'tuveria.sta',
          Categoria: 'plastico',
        },
        message: 'Producto actualizado correctamente',
      },
    }),

    DefaultErrorsDoc('Producto'),
  );
};  