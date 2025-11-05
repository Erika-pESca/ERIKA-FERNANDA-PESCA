import { Categoria } from "../../../categoria/categoria.entity"
    import { applyDecorators, HttpStatus } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiBearerAuth, ApiBody, ApiParam } from "@nestjs/swagger";
import { DefaultResponse } from "../../../common/interfaces/IResponse";
import { DefaultErrorsDoc } from "../../../common/decorators/defaultErrorsDoc";
import { CreateVentaDto } from "../../dto/create-venta.dto";
import { Producto } from "../../../producto/producto.entity";

export const CreateVentaDoc = (): MethodDecorator => {
  return applyDecorators(
    ApiBearerAuth(),

    ApiOperation({
      summary: 'Crear una venta',
      description: 'Crea una nueva venta en la base de datos',
    }),

    ApiBody({
      description: 'Datos de la venta',
      type: CreateVentaDto,
    }),

    ApiParam({
      name: 'id',
      description: 'Identificador del usuario que realiza la venta',
      type: Number,
      example: 1,
    }),

    ApiResponse({
      status: HttpStatus.OK,
      description: 'Venta creada correctamente',
      type: DefaultResponse,
      example: {
        status: HttpStatus.OK,
        data: {
          id: 1,
          nombre: 'Erika',
          Categoria: 'riego',  
          Producto: 'mangera', 
          precio: 100,
          cantidad: 1,
          fecha: '2022-01-01',
        },
        message: 'Venta creada correctamente',
      },
    }),

    DefaultErrorsDoc('Venta') 
  );
};