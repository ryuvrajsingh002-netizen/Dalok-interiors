import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Trash2, ArrowRight, Heart, ShoppingBag } from 'lucide-react';
import { ProductItem } from '../types';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistItems: ProductItem[];
  onRemoveItem: (id: string) => void;
  onSelectProduct: (product: ProductItem) => void;
  onInquireAll: () => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlistItems,
  onRemoveItem,
  onSelectProduct,
  onInquireAll,
}) => {
  if (!isOpen) return null;

  const totalEstimated = wishlistItems.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/50 backdrop-blur-xs"
        />

        <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="w-screen max-w-md bg-[#FAF8F5] shadow-2xl border-l border-[#E6DFC0] flex flex-col justify-between"
          >
            {/* Drawer Header */}
            <div className="p-6 border-b border-[#EAE4D9] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-[#D97E4A] fill-[#D97E4A]" />
                <h3 className="font-serif text-xl font-medium text-[#221F1B]">
                  Saved Pieces ({wishlistItems.length})
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-full hover:bg-[#EFE9DF] text-[#605A51] transition-colors"
                aria-label="Close saved items drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Items List */}
            <div className="p-6 flex-1 overflow-y-auto space-y-4">
              {wishlistItems.length === 0 ? (
                <div className="text-center py-16 text-[#787268]">
                  <ShoppingBag className="w-12 h-12 mx-auto stroke-1 text-[#C4BDAF] mb-3" />
                  <p className="font-serif text-lg text-[#25221E] mb-1">Your Curated List Is Empty</p>
                  <p className="text-xs max-w-xs mx-auto leading-relaxed">
                    Click the heart icon on any design or latest arrival to bookmark items for your living space project.
                  </p>
                </div>
              ) : (
                wishlistItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-3.5 bg-white rounded-2xl border border-[#ECE5D8] items-center group"
                  >
                    <div
                      onClick={() => {
                        onClose();
                        onSelectProduct(item);
                      }}
                      className="w-16 h-16 rounded-xl bg-[#F6F2EA] p-1 shrink-0 overflow-hidden cursor-pointer"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4
                        onClick={() => {
                          onClose();
                          onSelectProduct(item);
                        }}
                        className="font-serif text-sm font-medium text-[#221F1B] hover:text-[#D97E4A] cursor-pointer truncate"
                      >
                        {item.name}
                      </h4>
                      <p className="text-xs text-[#7A746B]">{item.category}</p>
                      <span className="text-xs font-semibold text-[#D97E4A] mt-1 block">
                        ${item.price}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => onRemoveItem(item.id)}
                      className="p-2 text-[#9A9388] hover:text-red-500 transition-colors"
                      title="Remove piece"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Footer Summary & Action */}
            {wishlistItems.length > 0 && (
              <div className="p-6 bg-[#F3EDE2] border-t border-[#E8E1D4] space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#686259]">Estimated Selection Total</span>
                  <span className="font-serif text-lg font-semibold text-[#221F1B]">
                    ${totalEstimated}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onInquireAll();
                  }}
                  className="w-full py-3.5 px-4 rounded-full text-sm font-medium text-white bg-[#D97E4A] hover:bg-[#C56F3D] transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Request Full Specification & Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};
