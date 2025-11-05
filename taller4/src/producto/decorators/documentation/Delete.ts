import { applyDecorators, HttpStatus } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiBearerAuth, ApiParam } from "@nestjs/swagger";
import { DefaultResponse } from "src/common/interfaces/IResponse";
import { DefaultErrorsDoc } from "src/common/decorators/defaultErrorsDoc";  
export const DeleteProductoDoc = (): MethodDecorator => {
  return applyDecorators(
    ApiBearerAuth(),

    ApiOperation({
      summary: 'Eliminar un producto',
      description: 'Elimina un producto de la base de datos',
    }),

    ApiParam({
      name: 'id',
      description: 'Identificador del producto a eliminar',
      type: Number,
      example: 1,
    }),

    ApiResponse({
      status: HttpStatus.OK,
      description: 'Producto eliminado correctamente',
      type: DefaultResponse,
      example: {
        status: HttpStatus.OK,
        message: 'Producto eliminado correctamente',
      },
    }),

    DefaultErrorsDoc('Producto') 
  );
}