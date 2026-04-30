import React from 'react';
import { motion } from 'framer-motion';
import { PRODUCTS } from '../constants';
import { ProductCard } from '../components/ProductCard';
import { Filter, Search } from 'lucide-react';
import { cn } from '../lib/utils';

export const Shop = () => {
  const [activeCategory, setActiveCategory] = React.useState<'all' | 'toys' | 'home' | 'accessories'>('all');
  const categories = ['all', 'toys', 'home', 'accessories'];

  const filteredProducts = activeCategory === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="pt-32 pb-20 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 space-y-8">
          <div className="space-y-2">
            <h1 className="text-5xl md:text-6xl font-bold text-hand-dyed-indigo">The Collection</h1>
            <p className="text-lg opacity-60">Thoughtfully made, forever cherished.</p>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-hand-dyed-indigo/10 pb-8">
            <div className="flex flex-wrap gap-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat as any)}
                  className={cn(
                    "px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest transition-all",
                    activeCategory === cat 
                      ? "bg-hand-dyed-indigo text-white shadow-lg" 
                      : "bg-white text-hand-dyed-indigo/50 hover:text-hand-dyed-indigo"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative group max-w-xs w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 opacity-30 group-focus-within:opacity-100 transition-opacity" />
              <input 
                type="text" 
                placeholder="Search treasures..." 
                className="w-full pl-12 pr-4 py-3 bg-white rounded-2xl text-sm border-none focus:ring-2 focus:ring-sage-leaf transition-all"
              />
            </div>
          </div>
        </header>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
            {filteredProducts.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-40 space-y-4">
            <Filter className="w-12 h-12 mx-auto opacity-20" />
            <h2 className="text-2xl font-serif">No treasures found in this category.</h2>
            <p className="opacity-60">Try exploring our other hand-knitted collections.</p>
          </div>
        )}
      </div>
    </div>
  );
};
