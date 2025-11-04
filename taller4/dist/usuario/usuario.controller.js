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
exports.UsuarioController = void 0;
const common_1 = require("@nestjs/common");
const usuario_service_1 = require("./usuario.service");
const create_usuario_dto_1 = require("./dto/create-usuario.dto");
const update_usuario_dto_1 = require("./dto/update-usuario.dto");
const swagger_1 = require("@nestjs/swagger");
const defaultErrorsDoc_1 = require("../common/decorators/defaultErrorsDoc");
let UsuarioController = class UsuarioController {
    userService;
    constructor(userService) {
        this.userService = userService;
    }
    createUser(body) {
        return this.userService.createUser(body);
    }
    listUsers() {
        return this.userService.listUsers();
    }
    async getUser(id) {
        const user = await this.userService.getUser(id);
        if (!user)
            throw new common_1.NotFoundException(`Usuario ${id} no encontrado`);
        return user;
    }
    async updateUser(id, body) {
        const updated = await this.userService.updateUser(id, body);
        if (!updated)
            throw new common_1.NotFoundException(`Usuario ${id} no encontrado`);
        return updated;
    }
    async deleteUser(id) {
        const result = await this.userService.deleteUser(id);
        if (!result)
            throw new common_1.NotFoundException(`Usuario ${id} no encontrado`);
        return { message: `Usuario ${id} eliminado correctamente` };
    }
};
exports.UsuarioController = UsuarioController;
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Crear un usuario',
        description: 'Crea un nuevo usuario en la base de datos',
    }),
    (0, defaultErrorsDoc_1.DefaultErrorsDoc)(),
    (0, common_1.Post)('register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_usuario_dto_1.CreateUsuarioDto]),
    __metadata("design:returntype", void 0)
], UsuarioController.prototype, "createUser", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Lista los usuarios creados',
        description: 'nos lista todos los usuarios creados en la base de datos y guardados corectamente',
    }),
    (0, common_1.Get)('list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsuarioController.prototype, "listUsers", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Obtener usuario por un ID',
        description: 'nos devuelve un usuario en especifico',
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador numérico del usuario',
        type: Number,
        example: 1,
    }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "getUser", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Actualizar usuario',
        description: 'actualiza un usuario en la base de datos en los campos que queremos que se actualicen',
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador numérico del usuario a actualizar',
        type: Number,
        example: 2,
    }),
    (0, swagger_1.ApiBody)({
        description: 'Campos que pueden actualizarse del usuario',
        type: update_usuario_dto_1.UpdateUsuarioDto,
    }),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_usuario_dto_1.UpdateUsuarioDto]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "updateUser", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Eliminar usuario',
        description: 'elimina un usuario en la base de datos con su respectivo ID',
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador del usuario a eliminar',
        type: Number,
        example: 3,
    }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "deleteUser", null);
exports.UsuarioController = UsuarioController = __decorate([
    (0, common_1.Controller)('usuario'),
    __metadata("design:paramtypes", [usuario_service_1.UsuarioService])
], UsuarioController);
//# sourceMappingURL=usuario.controller.js.map