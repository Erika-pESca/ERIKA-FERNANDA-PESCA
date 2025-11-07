import { Test, TestingModule } from '@nestjs/testing';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { NotFoundException } from '@nestjs/common';
import { Usuario } from './usuario.entity';

describe('UsuarioController', () => {
  let controller: UsuarioController;
  let service: UsuarioService;

  const mockUsuario: Usuario = {
    id_usuario: 1,
    nombre: 'Test',
    apellido: 'User',
    correo: 'test@example.com',
    contrasena: 'password',
    rol: 'user',
    ventas: [],
    facturas: [],
    updatedAt: new Date(),
    deletedAt: null,
  };

  const mockUsuarioService = {
    createUser: jest.fn().mockResolvedValue(mockUsuario),
    listUsers: jest.fn().mockResolvedValue([mockUsuario]),
    getUser: jest.fn().mockResolvedValue(mockUsuario),
    updateUser: jest.fn().mockResolvedValue(mockUsuario),
    deleteUser: jest.fn().mockResolvedValue(true),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsuarioController],
      providers: [
        {
          provide: UsuarioService,
          useValue: mockUsuarioService,
        },
      ],
    }).compile();

    controller = module.get<UsuarioController>(UsuarioController);
    service = module.get<UsuarioService>(UsuarioService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('createUser', () => {
    it('should create a user', async () => {
      const createUsuarioDto: CreateUsuarioDto = {
        nombre: 'Test',
        apellido: 'User',
        correo: 'test@example.com',
        contrasena: 'password',
        rol: 'user',
      };

      const result = await controller.createUser(createUsuarioDto);
      expect(result).toEqual(mockUsuario);
      expect(service.createUser).toHaveBeenCalledWith(createUsuarioDto);
    });
  });

  describe('listUsers', () => {
    it('should return an array of users', async () => {
      const result = await controller.listUsers();
      expect(result).toEqual([mockUsuario]);
      expect(service.listUsers).toHaveBeenCalled();
    });
  });

  describe('getUser', () => {
    it('should return a single user', async () => {
      const result = await controller.getUser(1);
      expect(result).toEqual(mockUsuario);
      expect(service.getUser).toHaveBeenCalledWith(1);
    });

    it('should throw NotFoundException if user not found', async () => {
      mockUsuarioService.getUser.mockResolvedValue(null);
      await expect(controller.getUser(1)).rejects.toThrow(NotFoundException);
    });
  });

  describe('updateUser', () => {
    it('should update a user', async () => {
      const updateUsuarioDto: UpdateUsuarioDto = { nombre: 'Updated' };
      const expectedResult = { ...mockUsuario, ...updateUsuarioDto };
      mockUsuarioService.updateUser.mockResolvedValue(expectedResult);

      const result = await controller.updateUser(1, updateUsuarioDto);
      expect(result).toEqual(expectedResult);
      expect(service.updateUser).toHaveBeenCalledWith(1, updateUsuarioDto);
    });

    it('should throw NotFoundException if user to update not found', async () => {
      mockUsuarioService.updateUser.mockResolvedValue(null);
      await expect(controller.updateUser(1, {})).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('deleteUser', () => {
    it('should delete a user', async () => {
      await controller.deleteUser(1);
      expect(service.deleteUser).toHaveBeenCalledWith(1);
    });

    it('should throw NotFoundException if user to delete not found', async () => {
      mockUsuarioService.deleteUser.mockRejectedValue(new NotFoundException());
      await expect(controller.deleteUser(1)).rejects.toThrow(NotFoundException);
    });
  });
});
