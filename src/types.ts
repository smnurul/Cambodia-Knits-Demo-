export interface Maker {
  id: string;
  name: string;
  location: string;
  story: string;
  imageUrl: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  details: string[];
  imageUrl: string;
  secondaryImageUrl: string;
  makerId: string;
  category: 'toys' | 'home' | 'accessories';
}

export interface StorySection {
  title: string;
  content: string;
  imageUrl: string;
  layout: 'left' | 'right';
}
