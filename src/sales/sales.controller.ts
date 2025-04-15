import { Body, Controller, Get, Post } from '@nestjs/common';
import { SalesService } from './sales.service';
import { SalesDto } from './dto/sales.dto';

@Controller('sales')
export class SalesController {
  constructor(private readonly salesServices: SalesService) {}
  @Get(':id')
  async getSale() {}

  @Get()
  async getSales() {
    return this.salesServices.getSales();
  }

  @Post()
  async addSale(@Body() salesDto: SalesDto) {
    return this.salesServices.addSale(salesDto);
  }
}
