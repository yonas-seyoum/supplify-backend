import { Module } from '@nestjs/common';
import { SalesService } from './sales.service';
import { SalesController } from './sales.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Sales } from 'src/schema/sales.schema';
import { SalesSchema } from 'src/schema/sales.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Sales.name, schema: SalesSchema }]),
  ],
  providers: [SalesService],
  controllers: [SalesController],
  exports: [MongooseModule, SalesService],
})
export class SalesModule {}
