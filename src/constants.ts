import { Product, Maker, StorySection } from './types';

export const MAKERS: Maker[] = [
  {
    id: 'm1',
    name: 'Sorphea',
    location: 'Phnom Penh',
    story: 'Sorphea has been with Cambodia Knits for 5 years. Knitting has allowed her to support her three children through school while working from the comfort of her home.',
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 'm2',
    name: 'Channary',
    location: 'Siem Reap',
    story: 'A master of the intricate purl stitch, Channary lead our community workshops and is famous for her attention to detail in our animal designs.',
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400',
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'srey-elephant',
    name: 'Srey the Elephant',
    price: 32,
    description: 'Hand-knitted with love, Srey features soft organic cotton and recycled poly-fill. Perfect for little hands and big imaginations.',
    details: [
      '100% Organic Cotton Yarn',
      'Washable at 30°C',
      'Safety tested (EN71)',
      'Dimensions: 20cm x 15cm'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=800',
    secondaryImageUrl: 'https://images.unsplash.com/photo-1558012734-d83023e1645e?auto=format&fit=crop&q=80&w=800',
    makerId: 'm1',
    category: 'toys'
  },
  {
    id: 'bunnies-galore',
    name: 'Garden Bunny',
    price: 28,
    description: 'A gentle companion for quiet afternoons. Each bunny is unique, reflecting the individual style of its maker.',
    details: [
      'Hand-dyed indigo accents',
      'Softest bamboo-cotton blend',
      'Eco-friendly packaging'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1585155770447-2f66e2a397b5?auto=format&fit=crop&q=80&w=800',
    secondaryImageUrl: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?auto=format&fit=crop&q=80&w=800',
    makerId: 'm2',
    category: 'toys'
  },
  {
    id: 'loom-basket',
    name: 'Trellis Home Basket',
    price: 45,
    description: 'Woven using heavy-duty cotton cord, these baskets bring a touch of Cambodian craftsmanship to your living space.',
    details: [
      'Reinforced handles',
      'Structural knit pattern',
      'Diameter: 30cm'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1591084728795-1149f32d9866?auto=format&fit=crop&q=80&w=800',
    secondaryImageUrl: 'https://images.unsplash.com/photo-1606131731447-3f0b633d1611?auto=format&fit=crop&q=80&w=800',
    makerId: 'm1',
    category: 'home'
  }
];

export const STORY_SECTIONS: StorySection[] = [
  {
    title: 'The First Stitch',
    content: 'Founded in 2009, Cambodia Knits began with a simple idea: to provide sustainable employment for marginalized women in a way that respects their roles as caregivers and community members.',
    imageUrl: 'https://images.unsplash.com/photo-1481326006155-467f3945bd02?auto=format&fit=crop&q=80&w=1000',
    layout: 'left'
  },
  {
    title: 'Woven Into the Community',
    content: 'We work with over 100 artisans across five communities. By providing home-based work, we ensure that families stay together and children stay in school.',
    imageUrl: 'https://images.unsplash.com/photo-1520006403909-838d6b92c22e?auto=format&fit=crop&q=80&w=1000',
    layout: 'right'
  }
];
