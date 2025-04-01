import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Supplier, SupplierSchema } from 'src/schema/supplier.schema';
import { SuppliersService } from './suppliers.service';
import { SupplierController } from './suppliers.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Supplier.name, schema: SupplierSchema },
    ]),
  ],
  providers: [SuppliersService],
  controllers: [SupplierController],
})
export class SuppliersModule {}
