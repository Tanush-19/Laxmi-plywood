import { BusinessInfo, Category, Product, Review } from './types';

export const BUSINESS_INFO: BusinessInfo = {
  name: ' Laxmi Plywood',
  phone: ' 9848058562',
  whatsapp: ' 919848058562',
  address: ' Shop no. Ck 9, Kavi complex, 10 11, Sai Nagar, Kompally, Hyderabad, Secunderabad, Telangana 500100',
  hours: ' Monday - Saturday, 9:00 AM - 8:00 PM',
  description: 'Better price than the market',
  email: 'reddytanush441@gmail.com'
};


export const CATEGORIES: { name: Category; description: string; image: string }[] = [
  {
    name: 'Plywood',
    description: 'Commercial, Marine, and BWP grade plywood for all applications.',
    image: 'https://images.unsplash.com/photo-1572085313466-6710de8d7ba3?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Laminates',
    description: 'Premium decorative laminates in varied textures and finishes.',
    image: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Doors',
    description: 'Flush doors, moulded panel doors, and solid wood doors.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'MDF & Boards',
    description: 'High-density boards for smooth finishes and cabinetry.',
    image: 'https://images.unsplash.com/photo-1601084224716-1f79f220387f?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Hardware & Accessories',
    description: 'Quality hinges, handles, and modular kitchen accessories.',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'ply-1',
    name: 'Premium BWP Plywood',
    category: 'Plywood',
    image: 'https://images.unsplash.com/photo-1534062016597-d8616183d317?auto=format&fit=crop&q=80&w=800',
    features: ['Boiling Water Proof', 'Borer & Termite Proof', 'High Density'],
    applications: ['Kitchen Cabinets', 'Bathroom Vanities', 'Outdoor Furniture'],
    sizes: ['8x4 ft', '7x4 ft'],
    isFeatured: true
  },
  {
    id: 'lam-1',
    name: 'Matte Woodgrain Laminate',
    category: 'Laminates',
    image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&q=80&w=800',
    features: ['Scratch Resistant', 'Anti-Bacterial', 'Zero Maintenance'],
    applications: ['Wardrobes', 'Wall Paneling', 'Office Desks'],
    sizes: ['8x4 ft (1mm thickness)'],
    isFeatured: true
  },
  {
    id: 'door-1',
    name: 'Solid Teak Veneer Door',
    category: 'Doors',
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80&w=800',
    features: ['Solid Core', 'Natural Wood Grain', 'Weather Resistant'],
    applications: ['Main Entrances', 'Bedroom Doors'],
    sizes: ['Custom Sizes Available'],
    isFeatured: true
  },
  {
    id: 'mdf-1',
    name: 'Exterior Grade MDF',
    category: 'MDF & Boards',
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80&w=800',
    features: ['Smooth Finish', 'High Routing Grade', 'Moisture Resistant'],
    applications: ['CNC Carving', 'Painted Furniture'],
    sizes: ['8x4 ft (18mm, 12mm)']
  },
  {
    id: 'hard-1',
    name: 'Soft-Close Cabinet Hinges',
    category: 'Hardware & Accessories',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800',
    features: ['Rust Proof', 'Tested for 50,000 Cycles', 'Easy Installation'],
    applications: ['Kitchen Cabinets', 'Wardrobes'],
    isFeatured: true
  }
];

export const GALLERY_IMAGES = [
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200', // Kitchen
  'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200', // Interior
  'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=1200', // Kitchen 2
  'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&q=80&w=1200', // Living room
  'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=1200', // Interior 3
  'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1200', // Office
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    name: 'Customer 1',
    text: '[CUSTOMER REVIEW WILL APPEAR HERE]',
    rating: 4.5
  },
  {
    id: 'rev-2',
    name: 'Customer 2',
    text: '[CUSTOMER REVIEW WILL APPEAR HERE]',
    rating: 3
  },
  {
    id: 'rev-3',
    name: 'Customer 3',
    text: '[CUSTOMER REVIEW WILL APPEAR HERE]',
    rating: 5
  }
];

export const generateWhatsAppLink = (message: string) => {
  // In a real scenario, BUSINESS_INFO.whatsapp would be a number like '919876543210'
  // Since it's a placeholder, we'll format a generic link that the client can update
  const number = BUSINESS_INFO.whatsapp.replace(/[^0-9]/g, '');
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${number || '0000000000'}?text=${encodedMessage}`;
};

export const generatePhoneLink = () => {
  return `tel:${BUSINESS_INFO.phone}`;
};
