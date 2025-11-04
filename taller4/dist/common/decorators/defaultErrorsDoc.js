"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultErrorsDoc = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const IResponse_1 = require("../interfaces/IResponse");
const DefaultErrorsDoc = (entityName) => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: `${entityName} no fue creado correctamente`,
        type: IResponse_1.DefaultResponse,
        example: {
            status: common_1.HttpStatus.BAD_REQUEST,
            message: `${entityName} no fue creado correctamente`,
        },
    }), (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: `${entityName} creado correctamente`,
        type: IResponse_1.DefaultResponse,
        example: {
            status: common_1.HttpStatus.OK,
            data: {
                id: 1,
                message: `${entityName} creado correctamente`,
            },
        },
    }), (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.CONFLICT,
        description: `${entityName} ya existe`,
        type: IResponse_1.DefaultResponse,
        example: {
            status: common_1.HttpStatus.CONFLICT,
            message: `${entityName} ya existe`,
        },
    }), (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.UNAUTHORIZED,
        description: `No tiene permisos para crear ese ${entityName}`,
        type: IResponse_1.DefaultResponse,
        example: {
            status: common_1.HttpStatus.UNAUTHORIZED,
            message: `No tiene permisos para crear ese ${entityName}`,
        },
    }));
};
exports.DefaultErrorsDoc = DefaultErrorsDoc;
//# sourceMappingURL=defaultErrorsDoc.js.map