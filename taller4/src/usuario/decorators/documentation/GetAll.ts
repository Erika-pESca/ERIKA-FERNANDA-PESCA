import { applyDecorators, HttpStatus } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiBearerAuth, ApiParam } from "@nestjs/swagger";
import { DefaultResponse } from "src/common/interfaces/IResponse";
import { DefaultErrorsDoc } from "src/common/decorators/defaultErrorsDoc";


export const GetAllUsersDoc = (): MethodDecorator => {
  return applyDecorators(
    ApiBearerAuth(),

    ApiOperation({
      summary: 'obtiene usuario por el id',
      description: 'obtiene usuario por el id',
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
      description: 'Usuario obtenido correctamente',
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
        },
        message: 'Usuario obtenido correctamente',
      },
    }),

    DefaultErrorsDoc('Usuario')
  );
};
