export type Category = 
  | 'Plywood'
  | 'Laminates'
  | 'Doors'
  | 'MDF & Boards'
  | 'Hardware & Accessories';

export interface Product {
  id: string;
  name: string;
  category: Category;
  image: string;
  features: string[];
  applications?: string[];
  sizes?: string[];
  isFeatured?: boolean;
}

export interface Review {
  id: string;
  name: string;
  text: string;
  rating: number;
}

export interface BusinessInfo {
  name: string;
  phone: string;
  whatsapp: string;
  address: string;
  hours: string;
  description: string;
  email: string;
}
