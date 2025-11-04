import { applyDecorators, HttpStatus } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiBearerAuth, ApiParam } from "@nestjs/swagger";
import { DefaultResponse } from "src/common/interfaces/IResponse";
import { DefaultErrorsDoc } from "src/common/decorators/defaultErrorsDoc";  


export const DeleteVentaDoc = (): MethodDecorator => {
  return applyDecorators(
    ApiBearerAuth(),

    ApiOperation({
      summary: 'Eliminar una venta',
      description: 'Elimina una venta de la base de datos',
    }),

    ApiParam({
      name: 'id',
      description: 'Identificador de la venta a eliminar',
      type: Number,
      example: 1,
    }),

    ApiResponse({
      status: HttpStatus.OK,
      description: 'Venta eliminada correctamente',
      type: DefaultResponse,
      example: {
        status: HttpStatus.OK,
        message: 'Venta eliminada correctamente',
      },
    }),

    DefaultErrorsDoc('Venta') 
  );
}