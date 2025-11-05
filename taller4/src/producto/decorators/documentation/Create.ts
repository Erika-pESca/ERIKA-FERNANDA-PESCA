
import { applyDecorators, HttpStatus } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiBearerAuth, ApiBody, ApiParam } from "@nestjs/swagger";
import { DefaultResponse } from "src/common/interfaces/IResponse";
import { DefaultErrorsDoc } from "src/common/decorators/defaultErrorsDoc";
import { CreateProductoDto } from "src/producto/dto/create-producto.dto";
import { Producto } from "src/producto/producto.entity";
import { Categoria } from "src/categoria/categoria.entity";

export const CreateProductoDoc = (): MethodDecorator => {
  return applyDecorators(
    ApiBearerAuth(),

    ApiOperation({
      summary: 'Crear un producto',
      description: 'Crea un nuevo producto en la base de datos',
    }),

    ApiBody({
      description: 'Datos del producto a crear',
      type: CreateProductoDto,
    }),

    ApiParam({
      name: 'id',
      description: 'Identificador del usuario que realiza la venta',
      type: Number,
      example: 1,
    }),

    ApiResponse({
      status: HttpStatus.OK,
      description: 'Producto creado correctamente',
      type: DefaultResponse,
      example: {
        status: HttpStatus.OK,
        data: {
          id: 1,
          Categoria: 'riego',
          Producto: 'mangera', 
          precio: 100,
          cantidad: 1,
          
        },
        message: 'Producto creado correctamente',
      },
    }),

    DefaultErrorsDoc('Producto') // Aquí se agregan las respuestas de error comunes
  );
};  