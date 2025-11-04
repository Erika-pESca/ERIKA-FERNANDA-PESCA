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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUsuarioDto = void 0;
const class_validator_1 = require("class-validator");
const roles_enum_1 = require("../enums/roles.enum");
const swagger_1 = require("@nestjs/swagger");
class CreateUsuarioDto {
    nombre;
    apellido;
    correo;
    contrasena;
    rol;
}
exports.CreateUsuarioDto = CreateUsuarioDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'nombre',
        required: true,
        type: String,
        description: 'Nombre del usuario',
        example: 'Erika',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(3),
    (0, class_validator_1.MaxLength)(100),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUsuarioDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'apellido',
        required: true,
        type: String,
        description: 'Apellido del usuario',
        example: 'Pesca',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(3),
    (0, class_validator_1.MaxLength)(100),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUsuarioDto.prototype, "apellido", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'correo',
        required: true,
        type: String,
        description: 'Correo del usuario',
        example: 'erika@gmail.com',
    }),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.MinLength)(5),
    (0, class_validator_1.MaxLength)(100),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUsuarioDto.prototype, "correo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'contrasena',
        required: true,
        type: String,
        description: 'Contraseña del usuario',
        example: '123456',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(8),
    (0, class_validator_1.MaxLength)(100),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUsuarioDto.prototype, "contrasena", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'rol',
        required: true,
        enum: String,
        description: 'Rol del usuario',
        example: 'Administrador',
    }),
    (0, class_validator_1.IsEnum)(roles_enum_1.Roles),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUsuarioDto.prototype, "rol", void 0);
//# sourceMappingURL=create-usuario.dto.js.map