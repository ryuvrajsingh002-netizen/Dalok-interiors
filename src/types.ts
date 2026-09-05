export interface CategoryItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  itemCount: string;
  slug: string;
}

export interface CollectionItem {
  id: string;
  title: string;
  description: string;
  image: string;
  itemsCount: number;
  highlight: string;
  curatorNote: string;
}

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  longDescription: string;
  image: string;
  dimensions: string;
  materials: string;
  designer: string;
  colors: { name: string; hex: string }[];
  inStock: boolean;
  rating: number;
  reviewsCount: number;
}

export interface ConsultationFormData {
  name: string;
  email: string;
  phone: string;
  roomType: string;
  preferredStyle: string;
  budgetRange: string;
  timeline: string;
  notes: string;
}
