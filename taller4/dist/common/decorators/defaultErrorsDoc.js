"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultErrorsDoc = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const IResponse_1 = require("../interfaces/IResponse");
const DefaultErrorsDoc = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'El usuario no fue creado correctamente',
        type: IResponse_1.DefaultResponse,
        example: {
            status: common_1.HttpStatus.BAD_REQUEST,
            message: 'El usuario no fue creado correctamente',
        },
    }), (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Usuario creado correctamente',
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
            message: 'Usuario creado correctamente',
        },
    }), (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.CONFLICT,
        description: 'El usuario ya existe',
        type: IResponse_1.DefaultResponse,
        example: {
            status: common_1.HttpStatus.CONFLICT,
            message: 'El usuario ya existe',
        },
    }), (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.UNAUTHORIZED,
        description: 'No tiene permisos para crear ese usuario',
        type: IResponse_1.DefaultResponse,
        example: {
            status: common_1.HttpStatus.UNAUTHORIZED,
            message: 'No tiene permisos para crear ese usuario',
        },
    }));
};
exports.DefaultErrorsDoc = DefaultErrorsDoc;
//# sourceMappingURL=defaultErrorsDoc.js.map