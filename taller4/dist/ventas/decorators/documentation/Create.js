"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateVentaDoc = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const IResponse_1 = require("../../../common/interfaces/IResponse");
const defaultErrorsDoc_1 = require("../../../common/decorators/defaultErrorsDoc");
const create_venta_dto_1 = require("../../dto/create-venta.dto");
const CreateVentaDoc = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiOperation)({
        summary: 'Crear una venta',
        description: 'Crea una nueva venta en la base de datos',
    }), (0, swagger_1.ApiBody)({
        description: 'Datos de la venta',
        type: create_venta_dto_1.CreateVentaDto,
    }), (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador del usuario que realiza la venta',
        type: Number,
        example: 1,
    }), (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Venta creada correctamente',
        type: IResponse_1.DefaultResponse,
        example: {
            status: common_1.HttpStatus.OK,
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
    }), (0, defaultErrorsDoc_1.DefaultErrorsDoc)('Venta'));
};
exports.CreateVentaDoc = CreateVentaDoc;
//# sourceMappingURL=Create.js.map