import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Supplier} from '../schema/supplier.schema';
import { AddSupplierDto, UpdateSupplierDto } from './dto/suppliers.dto';

@Injectable()
export class SuppliersService {
  constructor(
    @InjectModel(Supplier.name) private suppliersModel: Model<Supplier>,
  ) {}

  async addSupplier(addSupplierDto: AddSupplierDto): Promise<Supplier> {
    const addedSupplier = new this.suppliersModel(addSupplierDto);
    return addedSupplier.save();
  }

  async getSupplier(id: string): Promise<Supplier | null> {
    return this.suppliersModel.findById(id).exec();
  }

  async getSuppliers(): Promise<Supplier[]> {
    return this.suppliersModel.find().exec();
  }

  async updateSuppliers(
    id: string,
    updateSupplierDto: UpdateSupplierDto,
  ): Promise<Supplier | null> {
    return this.suppliersModel
      .findByIdAndUpdate(id, updateSupplierDto, {
        new: true,
      })
      .exec();
  }

  async deleteSupplier(id: string): Promise<Supplier | null> {
    return this.suppliersModel.findByIdAndDelete(id).exec();
  }
}
