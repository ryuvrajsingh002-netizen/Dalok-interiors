import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { CATEGORIES_DATA } from '../data/content';
import { CategoryItem } from '../types';
import { ScrollReveal } from './ScrollReveal';

interface CategoryCardsProps {
  onSelectCategory: (category: CategoryItem) => void;
}

export const CategoryCards: React.FC<CategoryCardsProps> = ({ onSelectCategory }) => {
  return (
    <section id="categories" aria-label="Product Categories" className="relative -mt-4 sm:-mt-8 lg:-mt-10 z-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {CATEGORIES_DATA.map((cat, idx) => (
            <ScrollReveal
              key={cat.id}
              direction="up"
              delay={idx * 120}
              distance={35}
              duration={650}
              className="h-full"
            >
              <motion.div
                id={`category-card-${cat.id}`}
                whileHover={{ y: -6 }}
                className="group bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-sm hover:shadow-xl border border-[#EBE5DA] transition-all duration-300 flex flex-col justify-between h-full"
              >
                <div className="flex items-start gap-4 mb-4">
                  {/* Product Thumbnail with soft background */}
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[#F6F3ED] overflow-hidden shrink-0 border border-[#ECE6DB] flex items-center justify-center p-1.5 group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-contain object-center"
                      loading="lazy"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <h3 className="font-serif text-lg sm:text-xl font-medium text-[#25221E] group-hover:text-[#D97E4A] transition-colors">
                        {cat.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-[#6A655D] leading-relaxed line-clamp-2">
                      {cat.subtitle}
                    </p>
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-2 border-t border-[#F1ECE3] flex items-center justify-between">
                  <span className="text-[11px] font-medium uppercase tracking-wider text-[#989288]">
                    {cat.itemCount}
                  </span>
                  <button
                    type="button"
                    id={`shop-now-${cat.id}`}
                    onClick={() => onSelectCategory(cat)}
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium text-[#565149] group-hover:text-white bg-[#EFEAE1] group-hover:bg-[#D97E4A] transition-all duration-200 cursor-pointer"
                  >
                    <span>Shop Now</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
