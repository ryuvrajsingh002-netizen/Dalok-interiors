import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Compass, Sparkles, Phone, PhoneCall, Award, Layers, MapPin } from 'lucide-react';
import { ASSETS } from '../data/content';

interface HeroProps {
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <section
      id="home"
      aria-label="Dalok Interiors Grand Hero Showcase"
      className="relative pt-24 md:pt-28 pb-10 lg:pb-14 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Full-Page Logo Showcase Container */}
        <div
          id="hero-showcase-container"
          className="relative rounded-3xl md:rounded-[40px] overflow-hidden bg-[#0A0A0C] border-2 border-[#D4AF37]/30 shadow-2xl shadow-black/60 min-h-[600px] lg:min-h-[720px] flex flex-col justify-between items-center text-center p-6 sm:p-10 lg:p-14"
        >
          {/* Subtle Ambient Gold Radial Glows behind the Logo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[500px] lg:w-[680px] h-[340px] sm:h-[500px] lg:h-[680px] bg-gradient-to-br from-[#D4AF37]/15 via-[#D97E4A]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#D97E4A]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Elegant Architectural Corner Frames */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 w-8 h-8 border-t-2 border-l-2 border-[#D4AF37]/60 pointer-events-none" />
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-8 h-8 border-t-2 border-r-2 border-[#D4AF37]/60 pointer-events-none" />
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 w-8 h-8 border-b-2 border-l-2 border-[#D4AF37]/60 pointer-events-none" />
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 w-8 h-8 border-b-2 border-r-2 border-[#D4AF37]/60 pointer-events-none" />

          {/* Top Banner Tag */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 mb-3 sm:mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-[#D4AF37]/40 text-xs text-[#E8DFC8] font-medium shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="tracking-widest uppercase text-[11px] font-semibold text-[#F2E8CE]">
                Dalok Interiors • Signature Atelier 2026
              </span>
            </div>

            <a
              href="https://maps.google.com/?q=Shop+16+Vivan+Aura+Zundal+Ahmedabad"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-md border border-[#D4AF37]/40 text-xs text-[#E8DFC8] hover:text-white font-medium transition-colors shadow-xs"
              title="Locate Dalok Interiors in Ahmedabad"
            >
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Shop 16, Vivan Aura, Zundal, Ahmedabad</span>
            </a>

            <a
              href="tel:9588814702"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/20 hover:bg-[#D4AF37]/30 border border-[#D4AF37]/60 text-xs font-semibold text-[#F8EACB] transition-colors shadow-xs"
              title="Call Dalok Interiors at 9588814702"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
              <span>Call: 9588814702</span>
            </a>
          </motion.div>

          {/* Center Stage: The Entire Dalok Interiors Logo Prominently Displayed */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl my-auto py-2 sm:py-4 flex flex-col items-center"
          >
            {/* Logo Image in its Complete, Full Aspect Ratio */}
            <div className="relative w-full aspect-square max-h-[380px] sm:max-h-[440px] lg:max-h-[500px] flex items-center justify-center">
              <img
                src={ASSETS.logo}
                alt="Dalok Interiors - Designing Spaces. Defining Lifestyles. Full Brand Logo"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)] transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>
          </motion.div>

          {/* Bottom Action Controls on the First Page */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative z-10 w-full max-w-2xl flex flex-col items-center mt-4 sm:mt-6"
          >
            {/* Interactive Primary Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-5 mb-5">
              <button
                type="button"
                id="hero-explore-cta-btn"
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm sm:text-base font-semibold text-[#161412] bg-gradient-to-r from-[#E5C378] via-[#D4AF37] to-[#C99E2E] hover:from-[#ECD08F] hover:to-[#D4AF37] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-[#D4AF37]/25 cursor-pointer group"
              >
                <span>Explore Collections</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <a
                href="tel:9588814702"
                id="hero-call-cta-btn"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm sm:text-base font-semibold text-white bg-white/10 hover:bg-white/15 border border-[#D4AF37]/50 backdrop-blur-md shadow-md hover:border-[#D4AF37] transition-all duration-200"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>Call Now: 9588814702</span>
              </a>

              <a
                href="#arrivals"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-sm font-medium text-[#DCD4C7] hover:text-white hover:bg-white/5 transition-colors"
              >
                <Compass className="w-4 h-4 text-[#D4AF37]" />
                <span>New Arrivals</span>
              </a>
            </div>

            {/* Bottom Atelier Highlights */}
            <div className="w-full pt-4 border-t border-white/10 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-[#B8AE9F]">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="text-[#EADBB6]">Shop 16, Vivan Aura, Zundal, Ahmedabad</span>
              </div>
              <span className="hidden sm:inline text-white/20">•</span>
              <div className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Luxury Interior Architecture</span>
              </div>
              <span className="hidden sm:inline text-white/20">•</span>
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Helpline: <strong className="text-[#F2E8CE]">9588814702</strong></span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
