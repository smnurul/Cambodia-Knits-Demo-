import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Heart, Globe } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { ProductCard } from '../components/ProductCard';

export const Home = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 z-10"
          >
            <div className="inline-flex items-center gap-2 bg-sage-leaf/10 text-sage-leaf px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-4 h-4" />
              Handmade in Cambodia
            </div>
            <h1 className="text-6xl md:text-8xl font-bold leading-tight text-hand-dyed-indigo">
              Woven with <br />
              <span className="text-terracotta-earth italic">Purpose.</span>
            </h1>
            <p className="text-xl text-maker-charcoal/70 leading-relaxed max-w-xl">
              Discover ethically hand-knitted toys and home goods that empower 
              communities and preserve traditional Cambodian craftsmanship.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/shop" className="puffy-button bg-hand-dyed-indigo text-white flex items-center gap-2">
                Shop the Collection <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/about" className="puffy-button bg-white text-hand-dyed-indigo border border-hand-dyed-indigo/10">
                Our Story
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl rotate-3">
              <img 
                src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=1000" 
                alt="Hand knitted toy" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Organic Shapes */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-golden-silk opacity-20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-sage-leaf opacity-20 rounded-full blur-3xl animate-pulse" />
            
            {/* Impact Stats Overlay */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-8 -right-8 glass-light p-6 rounded-3xl shadow-xl max-w-[200px]"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-hand-dyed-indigo mb-2">Social Impact</p>
              <p className="text-3xl font-serif font-bold text-terracotta-earth">100+</p>
              <p className="text-xs opacity-70">Artisans empowered across 5 villages</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy/Story Section */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center space-y-16">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-hand-dyed-indigo">Small Stitches, Big Changes</h2>
            <p className="text-lg opacity-60 max-w-2xl mx-auto">
              Every Cambodia Knits product is made in the homes of our knitters, 
              allowing them to earn a fair wage while caring for their families.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Heart, title: 'Hand-Made', desc: 'Each toy is unique and carries the spirit of its maker.' },
              { icon: Globe, title: 'Ethical Supply', desc: 'Sustainably sourced materials and fair-trade practices at every step.' },
              { icon: Sparkles, title: 'Empowering', desc: 'Providing home-based work that transforms lives and communities.' },
            ].map((feature, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bento-card text-left space-y-4"
              >
                <div className="w-12 h-12 bg-loom-cream rounded-2xl flex items-center justify-center text-sage-leaf">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-serif">{feature.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-32 px-6 bg-loom-cream">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16 px-4">
            <div className="space-y-2">
              <p className="text-xs font-bold uppercase tracking-widest text-sage-leaf">Curated Picks</p>
              <h2 className="text-4xl md:text-5xl font-bold">The Maker's Favorites</h2>
            </div>
            <Link to="/shop" className="group flex items-center gap-2 font-medium hover:text-golden-silk transition-colors">
              View All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Community / Story Callout */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1520006403909-838d6b92c22e?auto=format&fit=crop&q=80&w=1000" 
              className="rounded-[4rem] shadow-2xl"
              alt="Artisans at work"
            />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 border-8 border-golden-silk/20 rounded-[2rem] -z-10" />
          </div>
          <div className="space-y-8">
            <h2 className="text-5xl md:text-6xl font-bold leading-tight">Meet the Hands <br /><span className="text-sage-leaf">Behind the Stitches</span></h2>
            <p className="text-xl opacity-70 leading-relaxed">
              We believe in the power of social enterprise. Our knitters aren't just 
              employees; they are business partners who decide their own schedules 
              and workloads.
            </p>
            <Link to="/about" className="puffy-button bg-terracotta-earth text-white inline-flex items-center gap-2">
              Our Full Story <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
