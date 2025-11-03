"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VentasModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const ventas_entity_1 = require("./ventas.entity");
const ventas_service_1 = require("./ventas.service");
const ventas_controller_1 = require("./ventas.controller");
const ventas_repository_1 = require("../usuario/providers/ventas.repository");
const usuario_entity_1 = require("../usuario/usuario.entity");
const facturacion_entity_1 = require("../facturacion/facturacion.entity");
const facturacion_module_1 = require("../facturacion/facturacion.module");
let VentasModule = class VentasModule {
};
exports.VentasModule = VentasModule;
exports.VentasModule = VentasModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([ventas_entity_1.Ventas, usuario_entity_1.Usuario, facturacion_entity_1.Facturacion]),
            facturacion_module_1.FacturacionModule,
        ],
        controllers: [ventas_controller_1.VentasController],
        providers: [ventas_service_1.VentasService, ventas_repository_1.VentasRepository],
    })
], VentasModule);
//# sourceMappingURL=ventas.module.js.map