import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SupplierDocument = HydratedDocument<Supplier>;

@Schema()
export class Supplier {
  @Prop({ required: true, type: Object })
  companyInformation: {
    name: string;
    category: string;
  };

  @Prop({ required: true, type: Object })
  contactInformation: {
    name: string;
    email: string;
    phoneNumber: string;
    website?: string;
  };

  @Prop({ required: true, type: Object })
  address: {
    streetAdress: string;
    city: string;
    state: string;
    country: string;
  };

  @Prop({ type: Object })
  additionalInformation: {
    paymentTerms?: string;
    notes?: string;
  };

  @Prop({ enum: ['active', 'inactive'], defaul: 'active' })
  status: 'active' | 'inactive';
}

export const SupplierSchema = SchemaFactory.createForClass(Supplier);
