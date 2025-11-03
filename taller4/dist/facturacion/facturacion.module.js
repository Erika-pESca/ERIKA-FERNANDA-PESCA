"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacturacionModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const facturacion_entity_1 = require("./facturacion.entity");
const ventas_entity_1 = require("../ventas/ventas.entity");
const usuario_entity_1 = require("../usuario/usuario.entity");
const facturacion_service_1 = require("./facturacion.service");
const facturacion_controller_1 = require("./facturacion.controller");
const facturacion_repository_1 = require("../usuario/providers/facturacion.repository");
let FacturacionModule = class FacturacionModule {
};
exports.FacturacionModule = FacturacionModule;
exports.FacturacionModule = FacturacionModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                facturacion_entity_1.Facturacion,
                ventas_entity_1.Ventas,
                usuario_entity_1.Usuario,
            ]),
        ],
        controllers: [facturacion_controller_1.FacturacionController],
        providers: [facturacion_service_1.FacturacionService, facturacion_repository_1.FacturacionRepository],
        exports: [facturacion_service_1.FacturacionService, facturacion_repository_1.FacturacionRepository],
    })
], FacturacionModule);
//# sourceMappingURL=facturacion.module.js.map