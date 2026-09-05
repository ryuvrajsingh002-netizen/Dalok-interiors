import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Check, ArrowRight } from 'lucide-react';
import { CollectionItem } from '../types';

interface LookbookModalProps {
  collection: CollectionItem | null;
  onClose: () => void;
  onBookConsultation: (collectionName: string) => void;
}

export const LookbookModal: React.FC<LookbookModalProps> = ({
  collection,
  onClose,
  onBookConsultation,
}) => {
  if (!collection) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-xs"
        />

        <div className="flex min-h-full items-center justify-center p-4 sm:p-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-2xl transform overflow-hidden rounded-3xl bg-[#FAF8F5] text-left shadow-2xl border border-[#E8E2D6]"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-white/80 hover:bg-white text-[#4A453D] shadow-xs"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Collection Imagery */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#ECE6DC]">
              <img
                src={collection.image}
                alt={collection.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#25201A]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="text-xs uppercase tracking-widest text-[#E89E6E] font-semibold">
                  {collection.highlight}
                </span>
                <h3 className="font-serif text-3xl font-medium text-white mt-1">
                  {collection.title} Lookbook
                </h3>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 space-y-5">
              <p className="text-sm sm:text-base text-[#565149] leading-relaxed">
                {collection.description}
              </p>

              {/* Curator Statement */}
              <div className="bg-[#F2ECE1] rounded-2xl p-4 sm:p-5 border border-[#E6DFC0]/50">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8A4F2C] mb-1.5">
                  <Sparkles className="w-4 h-4 text-[#D97E4A]" />
                  <span>Curator's Notes & Architectural Intent</span>
                </div>
                <p className="text-xs sm:text-sm text-[#5B554D] italic leading-relaxed">
                  "{collection.curatorNote}"
                </p>
              </div>

              {/* Space Features */}
              <div className="grid grid-cols-2 gap-3 text-xs text-[#524D46]">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#D97E4A]" />
                  <span>Custom Wood & Finish Tailoring</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#D97E4A]" />
                  <span>Integrated Architectural Lighting</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#D97E4A]" />
                  <span>Organic Non-Toxic Textiles</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#D97E4A]" />
                  <span>Complimentary Room Spatial Plan</span>
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-[#EAE4D9] flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-[#7F796F]">
                  Available for full residence design or individual bespoke pieces.
                </span>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onBookConsultation(collection.title);
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-medium text-white bg-[#D97E4A] hover:bg-[#C56F3D] shadow-sm cursor-pointer transition-all"
                >
                  <span>Inquire About This Space</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};
