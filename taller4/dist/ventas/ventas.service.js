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
exports.VentasService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const ventas_entity_1 = require("./ventas.entity");
const usuario_entity_1 = require("../usuario/usuario.entity");
const facturacion_entity_1 = require("../facturacion/facturacion.entity");
let VentasService = class VentasService {
    ventaRepo;
    usuarioRepo;
    facturacionRepo;
    constructor(ventaRepo, usuarioRepo, facturacionRepo) {
        this.ventaRepo = ventaRepo;
        this.usuarioRepo = usuarioRepo;
        this.facturacionRepo = facturacionRepo;
    }
    async createVenta(data) {
        const usuario = await this.usuarioRepo.findOne({
            where: { id_usuario: data.id_usuario },
        });
        if (!usuario) {
            throw new Error('Usuario no encontrado');
        }
        const nuevaVenta = this.ventaRepo.create({
            total: data.total,
            usuario: usuario,
        });
        const ventaGuardada = await this.ventaRepo.save(nuevaVenta);
        const nuevaFactura = this.facturacionRepo.create({
            venta: ventaGuardada,
            usuario: usuario,
            fecha_emision: new Date(),
            total: ventaGuardada.total,
        });
        const facturaGuardada = await this.facturacionRepo.save(nuevaFactura);
        const ventaConFactura = await this.ventaRepo.findOne({
            where: { id_venta: ventaGuardada.id_venta },
            relations: ['usuario', 'facturacion'],
        });
        return ventaConFactura;
    }
    async updateVenta(id, body) {
        return await this.ventaRepo.find({
            relations: ['usuario', 'facturacion'],
        });
    }
    async getVenta(id) {
        return await this.ventaRepo.findOne({
            where: { id_venta: id },
            relations: ['usuario', 'facturacion'],
        });
    }
    async deleteVenta(id) {
        return await this.ventaRepo.delete(id);
    }
};
exports.VentasService = VentasService;
exports.VentasService = VentasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(ventas_entity_1.Ventas)),
    __param(1, (0, typeorm_1.InjectRepository)(usuario_entity_1.Usuario)),
    __param(2, (0, typeorm_1.InjectRepository)(facturacion_entity_1.Facturacion)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], VentasService);
//# sourceMappingURL=ventas.service.js.map