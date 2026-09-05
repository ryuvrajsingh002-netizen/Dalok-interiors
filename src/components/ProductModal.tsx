import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Heart, Ruler, Sparkles, ShieldCheck, Truck, Star } from 'lucide-react';
import { ProductItem } from '../types';

interface ProductModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onToggleWishlist: (product: ProductItem) => void;
  isWishlisted: boolean;
  onRequestQuote: (product: ProductItem) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onToggleWishlist,
  isWishlisted,
  onRequestQuote,
}) => {
  if (!product) return null;

  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || '');
  const [quantity, setQuantity] = useState(1);
  const [addedNotice, setAddedNotice] = useState(false);

  const handleAddToWishlist = () => {
    onToggleWishlist(product);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2500);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        />

        <div className="flex min-h-full items-center justify-center p-4 sm:p-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative w-full max-w-3xl transform overflow-hidden rounded-3xl bg-[#FAF8F5] text-left shadow-2xl transition-all border border-[#E7E1D4]"
          >
            {/* Close Button */}
            <button
              type="button"
              id="close-product-modal-btn"
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-white/80 hover:bg-white text-[#57524A] hover:text-[#201D1A] transition-colors shadow-xs"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Product Visual Container */}
              <div className="bg-[#F2ECE2] p-6 sm:p-8 flex items-center justify-center relative border-b md:border-b-0 md:border-r border-[#E8E2D6]">
                <div className="relative w-full aspect-square max-w-[320px] rounded-2xl overflow-hidden bg-white p-4 shadow-xs flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#FAF7F2] text-[10px] font-semibold tracking-wider uppercase text-[#885232] border border-[#E8DFC8]">
                    {product.category}
                  </div>
                </div>
              </div>

              {/* Product Specifications & CTAs */}
              <div className="p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-[#8C857A] mb-1.5">
                    <span>{product.designer}</span>
                  </div>

                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#221F1B]">
                      {product.name}
                    </h3>
                    <span className="font-serif text-xl sm:text-2xl font-semibold text-[#D97E4A]">
                      ${product.price}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="text-xs text-[#706B62]">
                      {product.rating} ({product.reviewsCount} atelier reviews)
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#5D5850] leading-relaxed mb-6 font-normal">
                    {product.longDescription}
                  </p>

                  {/* Finishes / Colors */}
                  <div className="mb-5">
                    <div className="flex items-center justify-between text-xs font-medium text-[#3A3630] mb-2">
                      <span>Finish & Tone:</span>
                      <span className="text-[#80796F] font-normal">{selectedColor}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {product.colors.map((color) => (
                        <button
                          key={color.name}
                          type="button"
                          onClick={() => setSelectedColor(color.name)}
                          className={`w-8 h-8 rounded-full border-2 transition-all p-0.5 flex items-center justify-center ${
                            selectedColor === color.name
                              ? 'border-[#D97E4A] scale-110 shadow-xs'
                              : 'border-transparent hover:scale-105'
                          }`}
                          title={color.name}
                        >
                          <span
                            className="w-full h-full rounded-full block border border-black/10"
                            style={{ backgroundColor: color.hex }}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Technical Details */}
                  <div className="space-y-2 py-3 border-t border-b border-[#EDE7DD] text-xs text-[#6B655D] mb-6">
                    <div className="flex items-start gap-2">
                      <Ruler className="w-4 h-4 text-[#D97E4A] shrink-0 mt-0.5" />
                      <span><strong>Dimensions:</strong> {product.dimensions}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Sparkles className="w-4 h-4 text-[#D97E4A] shrink-0 mt-0.5" />
                      <span><strong>Materials:</strong> {product.materials}</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-2.5">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      id="modal-inquire-btn"
                      onClick={() => {
                        onClose();
                        onRequestQuote(product);
                      }}
                      className="flex-1 py-3 px-5 rounded-full text-sm font-medium text-white bg-[#D97E4A] hover:bg-[#C56F3D] active:scale-[0.98] transition-all duration-200 shadow-md cursor-pointer text-center"
                    >
                      Book Showroom Viewing
                    </button>
                    <button
                      type="button"
                      id="modal-wishlist-btn"
                      onClick={handleAddToWishlist}
                      className={`p-3 rounded-full border transition-colors ${
                        isWishlisted
                          ? 'bg-[#D97E4A] border-[#D97E4A] text-white'
                          : 'border-[#E0D8CB] bg-white text-[#5A554D] hover:text-[#D97E4A]'
                      }`}
                      aria-label="Add to wishlist"
                      title={isWishlisted ? 'Saved in Wishlist' : 'Add to Wishlist'}
                    >
                      <Heart className="w-5 h-5 fill-current" />
                    </button>
                  </div>

                  {addedNotice && (
                    <p className="text-center text-xs text-[#8A5232] font-medium animate-fade-in">
                      Item updated in your saved showroom collection.
                    </p>
                  )}

                  <div className="flex items-center justify-center gap-4 text-[11px] text-[#847E74] pt-1">
                    <span className="flex items-center gap-1">
                      <Truck className="w-3.5 h-3.5 text-[#D97E4A]" /> White Glove Delivery
                    </span>
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#D97E4A]" /> 10-Year Craft Warranty
                    </span>
                  </div>

                  <a
                    href="tel:9588814702"
                    className="block text-center text-xs text-[#7A746B] hover:text-[#D97E4A] transition-colors pt-1"
                  >
                    Questions? Call Dalok Interior: <strong className="text-[#885232] font-semibold underline">9588814702</strong>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};
