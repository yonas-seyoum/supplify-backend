import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { SuppliersService } from './suppliers.service';
import { AddSupplierDto, UpdateSupplierDto } from './dto/suppliers.dto';
import { Supplier, SupplierDocument } from 'src/schema/supplier.schema';

@Controller('suppliers')
export class SupplierController {
  constructor(private readonly supplierService: SuppliersService) {}

  @Get(':id')
  async getSupplier(@Param('id') id: string): Promise<Supplier | null> {
    return this.supplierService.getSupplier(id);
  }

  @Get()
  async getSuppliers(): Promise<Supplier[]> {
    return this.supplierService.getSuppliers();
  }

  @Post()
  async addSupplier(@Body() addSupplierDto: AddSupplierDto): Promise<Supplier> {
    return this.supplierService.addSupplier(addSupplierDto);
  }

  @Patch(':id')
  async updateSupplier(
    @Param('id') id: string,
    @Body() updateSupplierDto: UpdateSupplierDto,
  ) {
    return this.supplierService.updateSuppliers(id, updateSupplierDto);
  }

  @Delete(':id')
  async deleteSupplier(@Param('id') id: string): Promise<Supplier | null> {
    return this.supplierService.deleteSupplier(id);
  }
}
