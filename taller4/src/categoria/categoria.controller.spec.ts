import { Test, TestingModule } from '@nestjs/testing';
import { CategoriaController } from './categoria.controller';
import { CategoriaService } from './categoria.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { Categoria } from './categoria.entity';

describe('CategoriaController', () => {
  let controller: CategoriaController;
  let service: CategoriaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoriaController],
      providers: [
        {
          provide: CategoriaService,
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<CategoriaController>(CategoriaController);
    service = module.get<CategoriaService>(CategoriaService);
  });

  it('debería estar definido', () => {
    expect(controller).toBeDefined();
  });

  it('debería crear una categoría', async () => {
    const dto: CreateCategoriaDto = { nombre: 'Comida', descripcion: 'Platillos típicos' };
    const mockCategoria: Categoria = { id_categoria: 1, ...dto, productos: [] };

    jest.spyOn(service, 'create').mockResolvedValue(mockCategoria);

    const result = await controller.create(dto);
    expect(result).toEqual(mockCategoria);
    expect(service.create).toHaveBeenCalledWith(dto);
  });

  it('debería retornar todas las categorías', async () => {
    const mockCategorias: Categoria[] = [{ id_categoria: 1, nombre: 'Bebidas', productos: [] }];

    jest.spyOn(service, 'findAll').mockResolvedValue(mockCategorias);

    const result = await controller.findAll();
    expect(result).toEqual(mockCategorias);
    expect(service.findAll).toHaveBeenCalled();
  });

  it('debería retornar una categoría por ID', async () => {
    const id = 1;
    const mockCategoria: Categoria = { id_categoria: id, nombre: 'Postres', productos: [] };

    jest.spyOn(service, 'findOne').mockResolvedValue(mockCategoria);

    const result = await controller.findOne(id);
    expect(result).toEqual(mockCategoria);
    expect(service.findOne).toHaveBeenCalledWith(id);
  });

  it('debería actualizar una categoría', async () => {
    const id = 1;
    const dto: UpdateCategoriaDto = { nombre: 'Comidas Rápidas' };
    const mockCategoria: Categoria = { id_categoria: id, nombre: dto.nombre!, productos: [] };

    jest.spyOn(service, 'update').mockResolvedValue(mockCategoria);

    const result = await controller.update(id, dto);
    expect(result).toEqual(mockCategoria);
    expect(service.update).toHaveBeenCalledWith(id, dto);
  });

  it('debería eliminar una categoría', async () => {
    const id = 1;
    const mockCategoria: Categoria = { id_categoria: id, nombre: 'Eliminar', productos: [] };

    jest.spyOn(service, 'remove').mockResolvedValue(mockCategoria);

    const result = await controller.remove(id);
    expect(result).toEqual(mockCategoria);
    expect(service.remove).toHaveBeenCalledWith(id);
  });
});
