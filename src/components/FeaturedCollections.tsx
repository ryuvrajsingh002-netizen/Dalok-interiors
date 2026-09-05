import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Eye, Layers } from 'lucide-react';
import { FEATURED_COLLECTIONS } from '../data/content';
import { CollectionItem } from '../types';
import { ScrollReveal } from './ScrollReveal';

interface FeaturedCollectionsProps {
  onSelectCollection: (collection: CollectionItem) => void;
}

export const FeaturedCollections: React.FC<FeaturedCollectionsProps> = ({
  onSelectCollection,
}) => {
  return (
    <section
      id="collections"
      aria-label="Featured Collections"
      className="py-16 md:py-20 bg-[#FAF7F2] border-t border-b border-[#EDE7DC]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Intersection Observer Reveal */}
        <ScrollReveal direction="up" distance={30} duration={650} className="mb-10 md:mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#D97E4A] mb-2 block">
                Curated Spaces
              </span>
              <h2
                id="featured-collections-heading"
                className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#25221E] font-normal"
              >
                Featured Collections
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#68635B] max-w-md mt-3 md:mt-0 font-normal">
              Thoughtfully balanced architectural pieces configured to introduce harmony, texture, and organic luxury to every room.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Large Image Cards Grid with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
          {FEATURED_COLLECTIONS.map((item, idx) => (
            <ScrollReveal
              key={item.id}
              direction="up"
              delay={idx * 130}
              distance={36}
              duration={700}
              className="h-full"
            >
              <motion.div
                id={`collection-card-${item.id}`}
                whileHover={{ y: -6 }}
                onClick={() => onSelectCollection(item)}
                className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E9E3D8] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer h-full"
              >
                {/* Image Container with Zoom & Vignette */}
                <div className="relative aspect-[4/3] sm:aspect-[4/3.2] overflow-hidden bg-[#EFEAE1]">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Floating Quick Look pill on hover */}
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white/95 text-[#25221E] backdrop-blur-xs shadow-md">
                      <Eye className="w-3.5 h-3.5 text-[#D97E4A]" />
                      <span>View Lookbook</span>
                    </span>
                  </div>

                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium bg-[#FAF7F2]/90 backdrop-blur-xs text-[#524E47] border border-white/60">
                      {item.itemsCount} Pieces
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#25221E] group-hover:text-[#D97E4A] transition-colors mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6C675E] leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#F2EDE5] flex items-center justify-between text-xs font-medium text-[#868076] group-hover:text-[#D97E4A] transition-colors">
                    <span>Explore Series</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
