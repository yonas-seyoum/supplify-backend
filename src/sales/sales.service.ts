import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Sales, SalesDocument } from 'src/schema/sales.schema';
import { SalesDto } from './dto/sales.dto';

@Injectable()
export class SalesService {
  constructor(@InjectModel(Sales.name) private salesModel: Model<Sales>) {}

  async addSale(salesDto: SalesDto): Promise<Sales> {
    const sale = new this.salesModel(salesDto);
    return sale.save();
  }

  async getSale(id: string): Promise<Sales | null> {
    return this.salesModel.findById(id).exec();
  }

  async getSales(): Promise<Sales[]> {
    return this.salesModel.find().exec();
  }

  async getRevenue() {}

  async getOrders() {}
}
