import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PRODUCTS, MAKERS } from '../constants';
import { ShoppingBag, ChevronLeft, Heart, Share2, Info } from 'lucide-react';

export const ProductDetail = () => {
  const { id } = useParams();
  const product = PRODUCTS.find((p) => p.id === id);
  const maker = MAKERS.find((m) => m.id === product?.makerId);

  if (!product) return <div>Product not found</div>;

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <Link 
          to="/shop" 
          className="inline-flex items-center gap-2 mb-12 text-sm font-bold uppercase tracking-widest text-sage-leaf hover:text-hand-dyed-indigo transition-colors"
        >
          <ChevronLeft className="w-4 h-4" /> Back to Shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Visuals - Asymmetric Stack */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="aspect-square rounded-[3rem] overflow-hidden bg-white shadow-2xl"
            >
              <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
            </motion.div>
            <div className="grid grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-white shadow-lg rotate-2"
              >
                <img src={product.secondaryImageUrl} alt={product.name} className="w-full h-full object-cover" />
              </motion.div>
              <div className="flex flex-col justify-center gap-6">
                <div className="bento-card p-6 bg-golden-silk/10 text-golden-silk space-y-2">
                  <Info className="w-6 h-6" />
                  <p className="font-bold text-sm uppercase tracking-widest">Handmade</p>
                  <p className="text-xs opacity-70">Each piece takes roughly 8-12 hours of dedicated knitting.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-12">
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-sage-leaf">
                <span>{product.category}</span>
                <span className="w-1 h-1 bg-sage-leaf rounded-full" />
                <span>Fair Trade</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-hand-dyed-indigo">{product.name}</h1>
              <p className="text-3xl font-serif text-terracotta-earth font-bold">${product.price}</p>
            </div>

            <p className="text-lg opacity-70 leading-relaxed max-w-xl">
              {product.description}
            </p>

            <div className="space-y-4">
              <h3 className="font-bold uppercase text-xs tracking-widest text-hand-dyed-indigo">Details & Care</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                {product.details.map((detail, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm opacity-70">
                    <div className="w-1.5 h-1.5 bg-golden-silk rounded-full" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-4 pt-4 border-t border-hand-dyed-indigo/10 pt-8">
              <button className="puffy-button bg-hand-dyed-indigo text-white flex-1 flex items-center justify-center gap-3">
                <ShoppingBag className="w-5 h-5" /> Add to Cart
              </button>
              <button className="p-4 rounded-full border border-hand-dyed-indigo/10 hover:bg-terracotta-earth hover:text-white transition-all text-hand-dyed-indigo">
                <Heart className="w-6 h-6" />
              </button>
              <button className="p-4 rounded-full border border-hand-dyed-indigo/10 hover:bg-golden-silk hover:text-white transition-all text-hand-dyed-indigo">
                <Share2 className="w-6 h-6" />
              </button>
            </div>

            {/* Meet the Maker Mini-Card */}
            {maker && (
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bento-card bg-loom-cream p-8 mt-12 flex flex-col md:flex-row gap-8 items-center border border-hand-dyed-indigo/5"
              >
                <img src={maker.imageUrl} className="w-24 h-24 rounded-full object-cover ring-4 ring-white shadow-xl" alt={maker.name} />
                <div className="space-y-2 text-center md:text-left">
                  <p className="text-xs font-bold uppercase tracking-widest text-sage-leaf">Meet the Maker</p>
                  <h4 className="text-2xl font-serif">{maker.name} from {maker.location}</h4>
                  <p className="text-sm opacity-60 italic leading-relaxed">
                    "{maker.story.substring(0, 100)}..."
                  </p>
                  <Link to="/about" className="text-xs font-bold underline hover:text-terracotta-earth transition-colors">
                    Read the full story
                  </Link>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
