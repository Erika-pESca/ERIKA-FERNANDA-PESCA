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
exports.ProductoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const producto_entity_1 = require("./producto.entity");
const proveedor_entity_1 = require("../proveedor/proveedor.entity");
const categoria_entity_1 = require("../categoria/categoria.entity");
let ProductoService = class ProductoService {
    productoRepository;
    proveedorRepository;
    categoriaRepository;
    constructor(productoRepository, proveedorRepository, categoriaRepository) {
        this.productoRepository = productoRepository;
        this.proveedorRepository = proveedorRepository;
        this.categoriaRepository = categoriaRepository;
    }
    async findAll() {
        return this.productoRepository.find({
            relations: ['proveedor', 'categoria'],
        });
    }
    async findOne(id) {
        const producto = await this.productoRepository.findOne({
            where: { id_producto: id },
            relations: ['proveedor', 'categoria'],
        });
        if (!producto) {
            throw new common_1.NotFoundException(`Producto con ID ${id} no encontrado`);
        }
        return producto;
    }
    async create(dto) {
        const { proveedorId, categoriaId, ...data } = dto;
        const proveedor = await this.proveedorRepository.findOne({
            where: { id_proveedor: proveedorId },
        });
        const categoria = await this.categoriaRepository.findOne({
            where: { id_categoria: categoriaId },
        });
        if (!proveedor)
            throw new common_1.NotFoundException('Proveedor no encontrado');
        if (!categoria)
            throw new common_1.NotFoundException('Categoría no encontrada');
        const nuevoProducto = this.productoRepository.create({
            ...data,
            proveedor,
            categoria,
        });
        return this.productoRepository.save(nuevoProducto);
    }
    async update(id, dto) {
        const producto = await this.productoRepository.findOne({
            where: { id_producto: id },
            relations: ['proveedor', 'categoria'],
        });
        if (!producto) {
            throw new common_1.NotFoundException(`Producto con ID ${id} no encontrado`);
        }
        const { proveedorId, categoriaId, ...data } = dto;
        if (proveedorId) {
            const proveedor = await this.proveedorRepository.findOne({
                where: { id_proveedor: proveedorId },
            });
            if (!proveedor)
                throw new common_1.NotFoundException('Proveedor no encontrado');
            producto.proveedor = proveedor;
        }
        if (categoriaId) {
            const categoria = await this.categoriaRepository.findOne({
                where: { id_categoria: categoriaId },
            });
            if (!categoria)
                throw new common_1.NotFoundException('Categoría no encontrada');
            producto.categoria = categoria;
        }
        Object.assign(producto, data);
        return this.productoRepository.save(producto);
    }
    async remove(id) {
        const producto = await this.productoRepository.findOne({
            where: { id_producto: id },
        });
        if (!producto) {
            throw new common_1.NotFoundException(`Producto con ID ${id} no encontrado`);
        }
        await this.productoRepository.remove(producto);
    }
};
exports.ProductoService = ProductoService;
exports.ProductoService = ProductoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(producto_entity_1.Producto)),
    __param(1, (0, typeorm_1.InjectRepository)(proveedor_entity_1.Proveedor)),
    __param(2, (0, typeorm_1.InjectRepository)(categoria_entity_1.Categoria)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], ProductoService);
//# sourceMappingURL=producto.service.js.map