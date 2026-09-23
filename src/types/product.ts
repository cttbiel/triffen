export interface ProductImage {
  src: string;
  alt: string;
}

export interface SizeOption {
  size: string;
  stock: string;
  available: boolean;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  sku: string;
  price: number;
  priceFormatted: string;
  installments: string;
  pixDiscount: string;
  badge: string;
  images: ProductImage[];
  sizes: SizeOption[];
  description: string;
  details: string[];
  care: string[];
  shippingInfo: string;
}

export interface SizeMeasurementRow {
  size: string;
  chest: string;
  length: string;
  sleeve: string;
  shoulder: string;
}

export interface SizeChart {
  columns: string[];
  rows: SizeMeasurementRow[];
}
