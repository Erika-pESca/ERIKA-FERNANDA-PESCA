"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VentaProductoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const venta_producto_entity_1 = require("./venta_producto.entity");
const ventas_entity_1 = require("../ventas/ventas.entity");
const producto_entity_1 = require("../producto/producto.entity");
let VentaProductoService = class VentaProductoService {
    ventaProductoRepo;
    ventaRepo;
    productoRepo;
    constructor(ventaProductoRepo, ventaRepo, productoRepo) {
        this.ventaProductoRepo = ventaProductoRepo;
        this.ventaRepo = ventaRepo;
        this.productoRepo = productoRepo;
    }
    async agregarProductoAVenta(idVenta, idProducto, cantidad) {
        const venta = await this.ventaRepo.findOne({ where: { id_venta: idVenta } });
        if (!venta)
            throw new common_1.NotFoundException('Venta no encontrada');
        const producto = await this.productoRepo.findOne({ where: { id_producto: idProducto } });
        if (!producto)
            throw new common_1.NotFoundException('Producto no encontrado');
        if (cantidad > producto.stock) {
            throw new common_1.NotFoundException(`Stock insuficiente. Disponible: ${producto.stock}`);
        }
        const subtotal = Number(producto.precio) * cantidad;
        const ventaProducto = this.ventaProductoRepo.create({
            cantidad,
            precio_unitario: producto.precio,
            subtotal,
            venta,
            producto,
        });
        const nuevoRegistro = await this.ventaProductoRepo.save(ventaProducto);
        producto.stock -= cantidad;
        await this.productoRepo.save(producto);
        return nuevoRegistro;
    }
    async listarPorVenta(idVenta) {
        return await this.ventaProductoRepo.find({
            where: { venta: { id_venta: idVenta } },
            relations: ['producto', 'venta'],
        });
    }
    async eliminar(id) {
        const existe = await this.ventaProductoRepo.findOne({ where: { id_venta_producto: id } });
        if (!existe)
            throw new common_1.NotFoundException('Registro no encontrado');
        return await this.ventaProductoRepo.delete(id);
    }
};
exports.VentaProductoService = VentaProductoService;
exports.VentaProductoService = VentaProductoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(venta_producto_entity_1.VentaProducto)),
    __param(1, (0, typeorm_1.InjectRepository)(ventas_entity_1.Ventas)),
    __param(2, (0, typeorm_1.InjectRepository)(producto_entity_1.Producto)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], VentaProductoService);
//# sourceMappingURL=venta_producto.service.js.map