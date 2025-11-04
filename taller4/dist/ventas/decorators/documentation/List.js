"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListVentasDoc = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const IResponse_1 = require("../../../common/interfaces/IResponse");
const defaultErrorsDoc_1 = require("../../../common/decorators/defaultErrorsDoc");
const ListVentasDoc = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiOperation)({
        summary: 'Lista todas las ventas',
        description: 'Lista todas las ventas creadas en la base de datos',
    }), (0, swagger_1.ApiParam)({
        name: 'id',
        required: true,
        description: 'Identificador del usuario a obtener',
        type: Number,
        example: 1,
    }), (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Lista de ventas',
        type: IResponse_1.DefaultResponse,
        example: {
            status: common_1.HttpStatus.OK,
            data: [
                {
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
                {
                    id: 2,
                    nombre: 'andres',
                    apellido: 'ardila',
                    correo: 'andres@gmail.com',
                    contrasena: '125234',
                    rol: 'Usuario',
                    Producto: 'mangera',
                    precio: 100,
                    cantidad: 1,
                    fecha: '2022-01-01',
                },
            ],
            message: 'Lista de ventas',
        },
    }), (0, defaultErrorsDoc_1.DefaultErrorsDoc)('Venta'));
};
exports.ListVentasDoc = ListVentasDoc;
//# sourceMappingURL=List.js.map