import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Calendar, Phone, Mail, Sparkles, Send, MapPin } from 'lucide-react';
import { ConsultationFormData } from '../types';
import { ASSETS } from '../data/content';

interface GetInTouchModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSpace?: string;
}

export const GetInTouchModal: React.FC<GetInTouchModalProps> = ({
  isOpen,
  onClose,
  initialSpace = 'Living Room',
}) => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    name: '',
    email: '',
    phone: '',
    roomType: initialSpace,
    preferredStyle: 'Warm Scandinavian Minimal',
    budgetRange: '$10,000 - $25,000',
    timeline: 'Within 1 - 3 Months',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

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
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            className="relative w-full max-w-xl transform overflow-hidden rounded-3xl bg-[#FAF8F5] text-left shadow-2xl border border-[#E7E0D2] p-6 sm:p-8"
          >
            {/* Close Button */}
            <button
              type="button"
              id="close-consultation-btn"
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#EDE7DC] hover:bg-[#E2DACD] text-[#4F4A42] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <div>
                <div className="mb-5 flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden border border-[#D4AF37]/50 bg-black shrink-0 shadow-md">
                    <img
                      src={ASSETS.logo}
                      alt="Dalok Interiors Logo"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#EFE9DD] text-[10px] font-semibold tracking-wider uppercase text-[#885232] mb-1.5">
                      <Sparkles className="w-3 h-3 text-[#D97E4A]" />
                      <span>Dalok Interiors Consultation</span>
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#221F1B] font-normal">
                      Let's Craft Your Sanctuary
                    </h3>
                    <p className="text-xs sm:text-sm text-[#666057] mt-1">
                      Connect with a Dalok Interiors principal designer for customized spatial planning and 3D architectural renderings.
                    </p>
                  </div>
                </div>

                {/* Direct Assistance & Studio Address Banner */}
                <div className="p-3 rounded-2xl bg-[#EFE8DC]/80 border border-[#DFD6C7] mb-5 text-xs text-[#524B43] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 font-medium">
                      <Phone className="w-3.5 h-3.5 text-[#D97E4A]" />
                      <span>Need immediate assistance? Call:</span>
                    </span>
                    <a
                      href="tel:9588814702"
                      className="font-semibold text-[#885232] hover:text-[#D97E4A] hover:underline transition-colors"
                    >
                      9588814702
                    </a>
                  </div>
                  <div className="flex items-center gap-2 pt-1.5 border-t border-[#DFD6C7]/60 text-[11px] text-[#635C52]">
                    <MapPin className="w-3.5 h-3.5 text-[#D97E4A] shrink-0" />
                    <span>Studio: <strong>Shop No. 16, Vivan Aura, Zundal, Ahmedabad</strong></span>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-medium text-[#403B35] mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Sophia Laurent"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#DED7CB] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#D97E4A]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#403B35] mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sophia@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#DED7CB] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#D97E4A]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-medium text-[#403B35] mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 349-2041"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#DED7CB] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#D97E4A]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#403B35] mb-1">
                        Space or Room
                      </label>
                      <select
                        value={formData.roomType}
                        onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#DED7CB] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#D97E4A]"
                      >
                        <option>Living Room</option>
                        <option>Home Office & Library</option>
                        <option>Master Bedroom Suite</option>
                        <option>Dining & Kitchen Atelier</option>
                        <option>Full Home Residence</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-medium text-[#403B35] mb-1">
                        Preferred Aesthetic
                      </label>
                      <select
                        value={formData.preferredStyle}
                        onChange={(e) => setFormData({ ...formData, preferredStyle: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#DED7CB] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#D97E4A]"
                      >
                        <option>Warm Scandinavian Minimal</option>
                        <option>Japandi Organic & Tactile</option>
                        <option>Contemporary European Classic</option>
                        <option>Modern Mid-Century Elegance</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#403B35] mb-1">
                        Projected Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#DED7CB] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#D97E4A]"
                      >
                        <option>Immediately (Within 30 Days)</option>
                        <option>Within 1 - 3 Months</option>
                        <option>Within 3 - 6 Months</option>
                        <option>Future Planning / New Build</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#403B35] mb-1">
                      Project Notes or Specific Furniture Pieces
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Share your room dimensions, existing finishes, lighting conditions, or favorite designs..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#DED7CB] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#D97E4A] resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-full text-sm font-medium text-white bg-[#D97E4A] hover:bg-[#C56F3D] active:scale-[0.99] transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                    >
                      {isSubmitting ? (
                        <span>Preparing Consultation Request...</span>
                      ) : (
                        <>
                          <span>Submit Design Inquiry</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-[#EFE8DC] text-[#D97E4A] flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#221F1B] mb-2 font-medium">
                  Inquiry Received With Care
                </h3>
                <p className="text-sm text-[#666057] max-w-md mx-auto mb-6 leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. A design lead from <strong>Dalok Interior</strong> will contact you at <strong>{formData.email}</strong> within one business day. For urgent inquiries, call us at <a href="tel:9588814702" className="text-[#885232] font-semibold hover:underline">9588814702</a>.
                </p>
                <div className="bg-[#F3EDE2] rounded-2xl p-4 max-w-sm mx-auto mb-6 text-xs text-[#5C564E] text-left space-y-1.5">
                  <div><strong>Reference ID:</strong> DI-2026-{Math.floor(100000 + Math.random() * 900000)}</div>
                  <div><strong>Studio Contact:</strong> +91 95888 14702</div>
                  <div><strong>Showroom:</strong> Shop No. 16, Vivan Aura, Zundal, Ahmedabad</div>
                  <div><strong>Focus Space:</strong> {formData.roomType}</div>
                  <div><strong>Aesthetic:</strong> {formData.preferredStyle}</div>
                </div>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-full text-xs font-medium text-white bg-[#D97E4A] hover:bg-[#C56F3D] transition-colors"
                >
                  Return to Studio
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};
