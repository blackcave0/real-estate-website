export interface Property {
  id: string;
  projectName: string;
  owner: string;
  propertyType: 'Plot' | 'Apartment' | 'Villa' | 'Commercial' | 'House';
  status: 'Available' | 'Sold' | 'Under-Contract' | 'Ready to Move';
  facing: 'North' | 'South' | 'East' | 'West' | 'North-East' | 'North-West' | 'South-East' | 'South-West' | 'East-North' | 'East-South' | 'West-North' | 'West-South';
  // dimensions: {
  length: number;
  breadth: number;
  totalArea: number;
  // };
  floor: string | number;
  pricePerSqft: number;
  // totalAmount: number;
  plusPoints: string[];
  description: string;
  images: string[];
  location: string;
  isFeatured: boolean;
}