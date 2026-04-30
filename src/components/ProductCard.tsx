import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { ShoppingBag, Eye } from 'lucide-react';
import { cn } from '../lib/utils';

export const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div 
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-white shadow-lg transition-transform duration-500 group-hover:-translate-y-2">
        <AnimatePresence mode="wait">
          {!isHovered ? (
            <motion.img
              key="primary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <motion.img
              key="secondary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              src={product.secondaryImageUrl}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          )}
        </AnimatePresence>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-hand-dyed-indigo/0 group-hover:bg-hand-dyed-indigo/20 transition-colors duration-500 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
          <Link 
            to={`/product/${product.id}`}
            className="p-3 bg-white rounded-full text-hand-dyed-indigo hover:bg-golden-silk hover:text-white transition-colors shadow-xl"
          >
            <Eye className="w-5 h-5" />
          </Link>
          <button className="p-3 bg-white rounded-full text-hand-dyed-indigo hover:bg-golden-silk hover:text-white transition-colors shadow-xl">
            <ShoppingBag className="w-5 h-5" />
          </button>
        </div>

        {/* Category Label */}
        <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-hand-dyed-indigo">
          {product.category}
        </div>
      </div>

      <div className="mt-6 space-y-2 px-1">
        <div className="flex justify-between items-start">
          <h3 className="font-serif text-xl group-hover:text-terracotta-earth transition-colors">
            {product.name}
          </h3>
          <p className="font-serif text-lg font-medium">${product.price}</p>
        </div>
        <p className="text-sm opacity-60 line-clamp-2 leading-relaxed">
          {product.description}
        </p>
      </div>
    </div>
  );
};
