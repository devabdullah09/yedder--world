// Shared product data used across the application

export type Product = {
  id: string
  name: string
  collection: string
}

export const allProducts: Product[] = [
  // Spring 23 - 56 products
  { id: 'samira', name: 'SAMIRA', collection: 'Spring 23' },
  { id: 'ahmar', name: 'AHMAR', collection: 'Spring 23' },
  { id: 'versace', name: 'VERSACE', collection: 'Spring 23' },
  { id: 'mathilde', name: 'MATHILDE', collection: 'Spring 23' },
  { id: 'azram', name: 'AZRAM', collection: 'Spring 23' },
  { id: 'limon', name: 'LIMON', collection: 'Spring 23' },
  { id: 'rain', name: 'RAIN', collection: 'Spring 23' },
  { id: 'mrk', name: 'MRK', collection: 'Spring 23' },
  { id: 'diab', name: 'DIAB', collection: 'Spring 23' },
  { id: 'zayton', name: 'ZAYTON', collection: 'Spring 23' },
  { id: 'dounia', name: 'DOUNIA', collection: 'Spring 23' },
  { id: 'alkamar', name: 'AL KAMAR', collection: 'Spring 23' },
  { id: 'anya', name: 'ANYA', collection: 'Spring 23' },
  { id: 'ahmar2', name: 'AHMAR II', collection: 'Spring 23' },
  { id: 'isa', name: 'ISA', collection: 'Spring 23' },
  { id: 'pea', name: 'PEA', collection: 'Spring 23' },
  { id: 'leila', name: 'LEILA', collection: 'Spring 23' },
  { id: 'fary', name: 'FARY', collection: 'Spring 23' },
  { id: 'blues', name: 'BLUES', collection: 'Spring 23' },
  { id: 'jasmin', name: 'JASMIN', collection: 'Spring 23' },
  { id: 'azyl', name: 'AZYL', collection: 'Spring 23' },
  { id: 'kamar', name: 'KAMAR', collection: 'Spring 23' },
  { id: 'abia', name: 'ABIA', collection: 'Spring 23' },
  { id: 'omar', name: 'OMAR', collection: 'Spring 23' },
  { id: 'akhdar', name: 'AKHDAR', collection: 'Spring 23' },
  { id: 'jilil', name: 'JILIL', collection: 'Spring 23' },
  { id: 'rosy', name: 'ROSY', collection: 'Spring 23' },
  { id: 'yaya', name: 'YAYA', collection: 'Spring 23' },
  { id: 'purple', name: 'PURPLE', collection: 'Spring 23' },
  { id: 'gold', name: 'GOLD', collection: 'Spring 23' },
  { id: 'houb', name: 'HOUB', collection: 'Spring 23' },
  { id: 'amira', name: 'AMIRA', collection: 'Spring 23' },
  { id: 'ahram', name: 'AHRAM', collection: 'Spring 23' },
  { id: 'bab', name: 'BAB', collection: 'Spring 23' },
  { id: 'alouan', name: 'ALOUAN', collection: 'Spring 23' },
  { id: 'maria', name: 'MARIA', collection: 'Spring 23' },
  { id: 'zin', name: 'ZIN', collection: 'Spring 23' },
  { id: 'puch', name: 'PUCH', collection: 'Spring 23' },
  { id: 'lys', name: 'LYS', collection: 'Spring 23' },
  { id: 'orange', name: 'ORANGE', collection: 'Spring 23' },
  { id: 'hind', name: 'HIND', collection: 'Spring 23' },
  { id: 'jasmin2', name: 'JASMIN II', collection: 'Spring 23' },
  { id: 'mar', name: 'MAR', collection: 'Spring 23' },
  { id: 'kimi', name: 'KIMI', collection: 'Spring 23' },
  { id: 'christielle', name: 'CHRISTIELLE', collection: 'Spring 23' },
  { id: 'coquelicot', name: 'COQUELICOT', collection: 'Spring 23' },
  { id: 'mahia', name: 'MAHIA', collection: 'Spring 23' },
  { id: 'may', name: 'MAY', collection: 'Spring 23' },
  { id: 'cartier', name: 'CARTIER', collection: 'Spring 23' },
  { id: 'sultan', name: 'SULTAN', collection: 'Spring 23' },
  { id: 'bine', name: 'BINE', collection: 'Spring 23' },
  { id: 'zahra', name: 'ZAHRA', collection: 'Spring 23' },
  { id: 'bac', name: 'BAC', collection: 'Spring 23' },
  { id: 'angela', name: 'ANGELA', collection: 'Spring 23' },
  { id: 'lina', name: 'LINA', collection: 'Spring 23' },
  { id: 'stef', name: 'STEF', collection: 'Spring 23' },
  
  // Winter 24 - 13 products
  { id: 'khmissa', name: 'KHMISSA', collection: 'Winter 24' },
  { id: 'welleda', name: 'WELLEDA', collection: 'Winter 24' },
  { id: 'yafit', name: 'YAFIT', collection: 'Winter 24' },
  { id: 'natasha', name: 'NATASHA', collection: 'Winter 24' },
  { id: 'fayrouz', name: 'FAYROUZ', collection: 'Winter 24' },
  { id: 'atlas', name: 'ATLAS', collection: 'Winter 24' },
  { id: 'jabel', name: 'JABEL', collection: 'Winter 24' },
  { id: 'mrouzia', name: 'MROUZIA', collection: 'Winter 24' },
  { id: 'noha', name: 'NOHA', collection: 'Winter 24' },
  { id: 'maleek', name: 'MALEEK', collection: 'Winter 24' },
  { id: 'amazi', name: 'AMAZI', collection: 'Winter 24' },
  { id: 'oumi', name: 'OUMI', collection: 'Winter 24' },
  { id: 'saha', name: 'SAHA', collection: 'Winter 24' },
  
  // Autumn 25 - 8 products
  { id: 'cheetah', name: 'CHEETAH', collection: 'Autumn 25' },
  { id: 'aitakal', name: 'AITAKAL', collection: 'Autumn 25' },
  { id: 'fettah', name: 'FETTAH', collection: 'Autumn 25' },
  { id: 'fire', name: 'FIRE', collection: 'Autumn 25' },
  { id: 'dior', name: 'DIOR', collection: 'Autumn 25' },
  { id: 'safari', name: 'SAFARI', collection: 'Autumn 25' },
  { id: 'golden', name: 'GOLDEN', collection: 'Autumn 25' },
  { id: 'ariel', name: 'ARIEL', collection: 'Autumn 25' },
]

// Helper to get product by ID
export const getProductById = (id: string): Product | null => {
  return allProducts.find(p => p.id === id) || null
}

