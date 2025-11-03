"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const categoria_module_1 = require("./categoria/categoria.module");
const proveedor_module_1 = require("./proveedor/proveedor.module");
const producto_module_1 = require("./producto/producto.module");
const usuario_module_1 = require("./usuario/usuario.module");
const facturacion_module_1 = require("./facturacion/facturacion.module");
const ventas_module_1 = require("./ventas/ventas.module");
const venta_producto_module_1 = require("./venta_producto/venta_producto.module");
const auth_module_1 = require("./auth/auth.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: '250622',
                database: 'ferreteria',
                autoLoadEntities: true,
                synchronize: true,
            }),
            categoria_module_1.CategoriaModule,
            proveedor_module_1.ProveedorModule,
            producto_module_1.ProductoModule,
            usuario_module_1.UsuarioModule,
            facturacion_module_1.FacturacionModule,
            ventas_module_1.VentasModule,
            venta_producto_module_1.VentaProductoModule,
            auth_module_1.AuthModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map