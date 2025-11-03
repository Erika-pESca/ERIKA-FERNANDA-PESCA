"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const usuario_entity_1 = require("./usuario.entity");
const ventas_entity_1 = require("../ventas/ventas.entity");
const facturacion_entity_1 = require("../facturacion/facturacion.entity");
const usuario_controller_1 = require("./usuario.controller");
const usuario_service_1 = require("./usuario.service");
const usuario_repository_1 = require("./providers/usuario.repository");
const ventas_repository_1 = require("./providers/ventas.repository");
const facturacion_repository_1 = require("./providers/facturacion.repository");
let UsuarioModule = class UsuarioModule {
};
exports.UsuarioModule = UsuarioModule;
exports.UsuarioModule = UsuarioModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([usuario_entity_1.Usuario, ventas_entity_1.Ventas, facturacion_entity_1.Facturacion])],
        controllers: [usuario_controller_1.UsuarioController],
        providers: [
            usuario_service_1.UsuarioService,
            usuario_repository_1.UsuarioRepository,
            ventas_repository_1.VentasRepository,
            facturacion_repository_1.FacturacionRepository,
        ],
        exports: [
            usuario_service_1.UsuarioService,
            usuario_repository_1.UsuarioRepository,
            ventas_repository_1.VentasRepository,
            facturacion_repository_1.FacturacionRepository,
        ],
    })
], UsuarioModule);
//# sourceMappingURL=usuario.module.js.map