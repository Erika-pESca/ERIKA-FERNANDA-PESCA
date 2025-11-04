"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllUsersDoc = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const IResponse_1 = require("../../../common/interfaces/IResponse");
const defaultErrorsDoc_1 = require("../../../common/decorators/defaultErrorsDoc");
const GetAllUsersDoc = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiOperation)({
        summary: 'obtiene usuario por el id',
        description: 'obtiene usuario por el id',
    }), (0, swagger_1.ApiParam)({
        name: 'id',
        required: true,
        description: 'Identificador del usuario a obtener',
        type: Number,
        example: 1,
    }), (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Usuario obtenido correctamente',
        type: IResponse_1.DefaultResponse,
        example: {
            status: common_1.HttpStatus.OK,
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
    }), (0, defaultErrorsDoc_1.DefaultErrorsDoc)('Usuario'));
};
exports.GetAllUsersDoc = GetAllUsersDoc;
//# sourceMappingURL=GetAll.js.map