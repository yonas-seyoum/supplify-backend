import { PartialType } from '@nestjs/mapped-types';

export class AddSupplierDto {
  companyInformation: {
    name: string;
    category: string;
  };
  contactInformation: {
    name: string;
    email: string;
    phoneNumber: string;
    website?: string;
  };
  address: {
    streetAdress: string;
    city: string;
    state: string;
    country: string;
  };
  additionalInformation?: {
    paymentTerms: string;
    notes?: string;
  };
  status: 'active' | 'inactive';
}

export class UpdateSupplierDto extends PartialType(AddSupplierDto) {}
