"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllVentasDoc = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const IResponse_1 = require("../../../common/interfaces/IResponse");
const defaultErrorsDoc_1 = require("../../../common/decorators/defaultErrorsDoc");
const GetAllVentasDoc = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiOperation)({
        summary: 'obtiene ventas por el id',
        description: 'obtiene ventas por el id',
    }), (0, swagger_1.ApiParam)({
        name: 'id',
        required: true,
        description: 'Identificador del usuario a obtener',
        type: Number,
        example: 1,
    }), (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Ventas obtenido correctamente',
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
                Producto: 'mangera',
                precio: 100,
                cantidad: 1,
                fecha: '2022-01-01',
            },
            message: 'Ventas obtenido correctamente',
        },
    }), (0, defaultErrorsDoc_1.DefaultErrorsDoc)('Venta'));
};
exports.GetAllVentasDoc = GetAllVentasDoc;
//# sourceMappingURL=GetAll.js.map