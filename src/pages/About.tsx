import React from 'react';
import { motion } from 'framer-motion';
import { STORY_SECTIONS } from '../constants';

export const About = () => {
  return (
    <div className="pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <header className="max-w-3xl mb-32 space-y-8">
          <h1 className="text-6xl md:text-8xl font-bold text-hand-dyed-indigo leading-tight">
            More than just <br />
            <span className="text-sage-leaf">knitting.</span>
          </h1>
          <p className="text-2xl text-maker-charcoal/70 leading-relaxed font-serif">
            Cambodia Knits is a social enterprise working with communities in Cambodia 
            to produce high quality, hand-knitted products.
          </p>
        </header>

        <div className="space-y-40">
          {STORY_SECTIONS.map((section, i) => (
            <div 
              key={i}
              className={`flex flex-col ${section.layout === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-32 items-center`}
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2 relative"
              >
                <div className={`aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl relative z-10 ${section.layout === 'left' ? 'rotate-[-3deg]' : 'rotate-[3deg]'}`}>
                  <img src={section.imageUrl} alt={section.title} className="w-full h-full object-cover" />
                </div>
                {/* Decorative Elements */}
                <div className={`absolute inset-0 bg-golden-silk/10 rounded-[4rem] -z-10 translate-x-10 translate-y-10`} />
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2 space-y-8"
              >
                <div className="w-12 h-1 bg-terracotta-earth mb-8" />
                <h2 className="text-4xl md:text-5xl font-bold text-hand-dyed-indigo">
                  {section.title}
                </h2>
                <p className="text-xl opacity-70 leading-relaxed">
                  {section.content}
                </p>
                <div className="bento-card bg-loom-cream p-8 space-y-4 border border-hand-dyed-indigo/5">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-hand-dyed-indigo">The Impact</h4>
                  <p className="text-sm italic opacity-60">
                    "Since joining CK, I can pay for my children's school books and healthcare. 
                    I feel proud of what I can create." — Local Artisan
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        <section className="mt-40 bg-hand-dyed-indigo rounded-[4rem] p-12 md:p-24 text-center text-loom-cream space-y-10">
          <h2 className="text-4xl md:text-6xl font-bold">Join Our Community</h2>
          <p className="text-xl opacity-70 max-w-2xl mx-auto leading-relaxed">
            Support fair trade and sustainable development. Every purchase makes 
             a difference in the life of a Cambodian woman and her family.
          </p>
          <div className="flex justify-center gap-6">
            <button className="puffy-button bg-golden-silk text-hand-dyed-indigo font-bold">
              Become a Retailer
            </button>
            <button className="puffy-button border border-white/20 hover:bg-white/10 transition-colors">
              Donate to Workshops
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};
