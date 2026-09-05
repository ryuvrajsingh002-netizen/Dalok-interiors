import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Heart } from 'lucide-react';
import { LATEST_ARRIVALS, ASSETS } from '../data/content';
import { ProductItem } from '../types';
import { ScrollReveal } from './ScrollReveal';

interface LatestArrivalsProps {
  onSelectProduct: (product: ProductItem) => void;
  onToggleWishlist: (product: ProductItem) => void;
  wishlistIds: string[];
  onGetInspired: () => void;
}

export const LatestArrivals: React.FC<LatestArrivalsProps> = ({
  onSelectProduct,
  onToggleWishlist,
  wishlistIds,
  onGetInspired,
}) => {
  return (
    <section
      id="arrivals"
      aria-label="Latest Arrivals"
      className="relative py-20 lg:py-28 overflow-hidden bg-[#2D241E]"
    >
      {/* Warm Wood Background Texture with Gradient Vignette */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay">
        <img
          src={ASSETS.woodBg}
          alt="Warm walnut timber texture background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#211A15]/95 via-[#2D241E]/90 to-[#1E1713]/95 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Intro Banner with Intersection Observer Slide-in */}
          <div className="lg:col-span-4 text-white">
            <ScrollReveal direction="right" distance={36} duration={700}>
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-xs border border-white/15 text-xs font-medium text-[#EED8C6] mb-4">
                  <Sparkles className="w-3.5 h-3.5 text-[#E6935C]" />
                  <span className="uppercase tracking-widest text-[10px] font-semibold">
                    Atelier Drops
                  </span>
                </div>

                <h2
                  id="latest-arrivals-heading"
                  className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#F9F6F0] mb-4 leading-tight"
                >
                  Latest Arrivals
                </h2>

                <p className="text-sm sm:text-base text-[#D4C9BC] leading-relaxed mb-8 max-w-md font-light">
                  Discover newly released artisan silhouettes, crafted from honest natural woods, raw stoneware ceramics, and tactile linen to bring serene luxury into your home.
                </p>

                <button
                  type="button"
                  id="get-inspired-btn"
                  onClick={onGetInspired}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium text-white bg-[#D97E4A] hover:bg-[#C56F3D] active:scale-[0.98] transition-all duration-200 shadow-md cursor-pointer group"
                >
                  <span>Get Inspired</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>

                {/* Decorative Subtle Organic Element */}
                <div className="mt-10 pt-6 border-t border-white/10 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <span className="font-serif text-lg text-[#E6935C] italic">01</span>
                  </div>
                  <div>
                    <h4 className="text-xs font-medium uppercase tracking-wider text-[#FAF5ED]">Handmade Limited Editions</h4>
                    <p className="text-xs text-[#B5ABA0]">Sustainably harvested timber & chemical-free glazes.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Product Cards Grid (3 Cards) with Staggered Scroll Reveal */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
              {LATEST_ARRIVALS.map((product, idx) => {
                const isWishlisted = wishlistIds.includes(product.id);
                return (
                  <ScrollReveal
                    key={product.id}
                    direction="up"
                    delay={idx * 140}
                    distance={40}
                    duration={700}
                    className="h-full"
                  >
                    <motion.div
                      id={`product-card-${product.id}`}
                      whileHover={{ y: -8 }}
                      className="group bg-[#FAF8F5] rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-xl border border-white/80 transition-all duration-300 flex flex-col justify-between h-full"
                    >
                      <div>
                        {/* Product Image on Clean Light Pedestal with Wishlist Toggle */}
                        <div className="relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden bg-white border border-[#EFE9DF] mb-4 flex items-center justify-center p-3">
                          <img
                            src={product.image}
                            alt={product.name}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-contain object-center group-hover:scale-106 transition-transform duration-500 ease-out"
                            loading="lazy"
                          />
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              onToggleWishlist(product);
                            }}
                            className={`absolute top-2.5 right-2.5 p-2 rounded-full backdrop-blur-xs transition-colors shadow-xs ${
                              isWishlisted
                                ? 'bg-[#D97E4A] text-white'
                                : 'bg-white/80 text-[#605A52] hover:text-[#D97E4A]'
                            }`}
                            aria-label={`Save ${product.name} to wishlist`}
                          >
                            <Heart className="w-3.5 h-3.5 fill-current" />
                          </button>
                        </div>

                        {/* Product Meta */}
                        <div className="flex items-baseline justify-between mb-1">
                          <h3 className="font-serif text-lg sm:text-xl font-medium text-[#221F1B] group-hover:text-[#D97E4A] transition-colors">
                            {product.name}
                          </h3>
                          <span className="text-sm font-semibold text-[#221F1B]">
                            ${product.price}
                          </span>
                        </div>

                        <p className="text-xs text-[#6E6961] leading-relaxed mb-4 line-clamp-2">
                          {product.description}
                        </p>
                      </div>

                      {/* View Product CTA Button */}
                      <button
                        type="button"
                        id={`view-product-btn-${product.id}`}
                        onClick={() => onSelectProduct(product)}
                        className="w-full py-2.5 px-4 rounded-full text-xs sm:text-sm font-medium text-white bg-[#D97E4A] hover:bg-[#C56F3D] active:scale-[0.98] transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer text-center"
                      >
                        View Product
                      </button>
                    </motion.div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
