export class CreateProductDto {
  name: string;
  description: string;
  quantity: number;
  price: number;
  category: string;
}

export class UpdateProductDto {
  name?: string;
  description?: string;
  qunatity?: number;
  price?: number;
  category?: string;
}
