import React from 'react';
import { Mail, Instagram, Facebook } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-hand-dyed-indigo text-loom-cream pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-loom-cream/10 pb-20">
        <div className="space-y-6">
          <h3 className="font-serif text-3xl font-bold">Cambodia Knits</h3>
          <p className="text-sm opacity-70 leading-relaxed max-w-xs">
            Empowering women and knitting communities together since 2009. 
            Every stitch is a step towards a better future.
          </p>
        </div>

        <div>
          <h4 className="font-serif text-xl mb-6">Explore</h4>
          <ul className="space-y-4 text-sm opacity-70">
            <li><a href="/shop" className="hover:text-golden-silk">Shop Toys</a></li>
            <li><a href="/about" className="hover:text-golden-silk">Our Story</a></li>
            <li><a href="/impact" className="hover:text-golden-silk">Social Impact</a></li>
            <li><a href="/wholesale" className="hover:text-golden-silk">Wholesale</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-xl mb-6">Support</h4>
          <ul className="space-y-4 text-sm opacity-70">
            <li><a href="/shipping" className="hover:text-golden-silk">Shipping Info</a></li>
            <li><a href="/returns" className="hover:text-golden-silk">Returns & Exchanges</a></li>
            <li><a href="/contact" className="hover:text-golden-silk">Contact Us</a></li>
            <li><a href="/faq" className="hover:text-golden-silk">FAQs</a></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="font-serif text-xl mb-6">Stay Connected</h4>
          <p className="text-sm opacity-70">Sign up for stories from the makers.</p>
          <div className="flex gap-4">
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-sm w-full focus:outline-none focus:border-golden-silk"
            />
            <button className="bg-golden-silk text-hand-dyed-indigo px-4 py-2 rounded-lg text-sm font-bold">
              Join
            </button>
          </div>
          <div className="flex gap-6 opacity-70 pt-4">
            <Instagram className="w-5 h-5 cursor-pointer hover:text-golden-silk" />
            <Facebook className="w-5 h-5 cursor-pointer hover:text-golden-silk" />
            <Mail className="w-5 h-5 cursor-pointer hover:text-golden-silk" />
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-10 text-[10px] uppercase tracking-widest opacity-40 flex flex-col md:flex-row justify-between gap-4">
        <p>© 2024 Cambodia Knits Social Enterprise. All Rights Reserved.</p>
        <div className="flex gap-8">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Phnom Penh, Cambodia</span>
        </div>
      </div>
    </footer>
  );
};
