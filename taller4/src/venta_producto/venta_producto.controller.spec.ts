import { Test, TestingModule } from '@nestjs/testing';
import { VentaProductoController } from './venta_producto.controller';
import { VentaProductoService } from './venta_producto.service';
import { HttpStatus } from '@nestjs/common';
import { VentaProducto } from './venta_producto.entity';

describe('VentaProductoController', () => {
  let controller: VentaProductoController;
  let service: VentaProductoService;

  beforeEach(async () => {
    const mockService = {
      agregarProductoAVenta: jest.fn(),
      listarPorVenta: jest.fn(),
      eliminar: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [VentaProductoController],
      providers: [{ provide: VentaProductoService, useValue: mockService }],
    }).compile();

    controller = module.get<VentaProductoController>(VentaProductoController);
    service = module.get<VentaProductoService>(VentaProductoService);
  });

  // Verificar que el controlador esté definido
  it('debería estar definido', () => {
    expect(controller).toBeDefined();
  });

  // Agregar un producto a una venta
  it('debería agregar un producto a una venta', async () => {
    const body = { idVenta: 1, idProducto: 5, cantidad: 3 };

    const mockResult: VentaProducto = {
      id_venta_producto: 1,
      cantidad: 3,
      precio_unitario: 10000,
      subtotal: 30000,
      venta: { id_venta: 1 } as any,
      producto: { id_producto: 5, nombre: 'Producto A' } as any,
    };

    jest.spyOn(service, 'agregarProductoAVenta').mockResolvedValue(mockResult);

    const result = await controller.agregarProducto(body);

    expect(result).toEqual({
      status: HttpStatus.CREATED,
      data: mockResult,
      message: 'Producto agregado correctamente a la venta',
    });

    //el servicio fue llamado con los parámetros correctos
    expect(service.agregarProductoAVenta).toHaveBeenCalledWith(1, 5, 3);
  });

  // Listar productos de una venta específica
  it('debería listar los productos de una venta', async () => {
    const idVenta = 1;
    const mockList: VentaProducto[] = [
      {
        id_venta_producto: 1,
        cantidad: 2,
        precio_unitario: 10000,
        subtotal: 20000,
        venta: { id_venta: 1 } as any,
        producto: { id_producto: 5, nombre: 'Producto A' } as any,
      },
    ];

    jest.spyOn(service, 'listarPorVenta').mockResolvedValue(mockList);

    const result = await controller.listar(idVenta);

    expect(result).toEqual({
      status: HttpStatus.OK,
      data: mockList,
      message: 'Productos listados correctamente',
    });

    expect(service.listarPorVenta).toHaveBeenCalledWith(idVenta);
  });

  // Eliminar un producto de una venta
  it('debería eliminar un producto de una venta', async () => {
    const id = 1;

    // resultado compatible con DeleteResult
    jest.spyOn(service, 'eliminar').mockResolvedValue({ affected: 1 } as any);

    const result = await controller.eliminar(id);

    expect(result).toEqual({
      status: HttpStatus.OK,
      data: null,
      message: 'Producto eliminado correctamente de la venta',
    });

    expect(service.eliminar).toHaveBeenCalledWith(id);
  });
});
