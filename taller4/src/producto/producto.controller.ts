import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { CreateProductoDoc } from './decorators/documentation/Create';
import { DeleteProductoDoc } from './decorators/documentation/Delete'; 
  import { GetAllProductoDoc } from './decorators/documentation/GetAll';
  import { ListProductoDoc } from './decorators/documentation/List';
import { UpdateProductoDoc } from './decorators/documentation/Update';

@Controller('productos')
export class ProductoController {
  constructor(private readonly productoService: ProductoService) {}
// obtener todos los productos
@ListProductoDoc()
  @Get()
  findAll() {
    return this.productoService.findAll();
  }
// obtener un producto por ID
@GetAllProductoDoc()
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    // convierte el id automáticamente a número
    return this.productoService.findOne(id);
  }
  // crear producto
@CreateProductoDoc()
  @Post()
  create(@Body() data: CreateProductoDto) {
    return this.productoService.create(data);
  }

  @UpdateProductoDoc()
// actualizar producto
  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateProductoDto) {
    return this.productoService.update(id, data);
  }

  // eliminar producto
@DeleteProductoDoc()
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.productoService.remove(id);
  }
}
