import React, { useState } from 'react';
import { Mail, Check, MapPin, Phone, ArrowRight, Instagram, Globe } from 'lucide-react';
import { SHOWROOM_LOCATIONS, ASSETS } from '../data/content';
import { ScrollReveal } from './ScrollReveal';

interface FooterProps {
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer id="contact" className="bg-[#221B16] text-[#EFE8DF] pt-16 md:pt-20 pb-12 border-t border-[#382E26]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Newsletter & Manifesto Banner with Scroll Reveal */}
        <ScrollReveal direction="up" distance={32} duration={700} className="mb-16">
          <div className="rounded-3xl bg-[#2D241E] p-8 sm:p-12 border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#D97E4A] mb-2 block">
                The Atelier Gazette
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-normal mb-3">
                Receive curated lookbooks, seasonal drops, and spatial design essays.
              </h3>
              <p className="text-xs sm:text-sm text-[#B8AEA3] font-light max-w-lg">
                Delivered fortnightly. Strictly no spam. Unsubscribe anytime with one click.
              </p>
            </div>

            <div className="lg:col-span-5">
              {!subscribed ? (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email..."
                    className="px-4 py-3.5 rounded-full bg-white/10 border border-white/15 text-white text-sm placeholder-[#9C9184] focus:outline-none focus:ring-2 focus:ring-[#D97E4A] flex-1"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3.5 rounded-full text-sm font-medium text-white bg-[#D97E4A] hover:bg-[#C56F3D] active:scale-[0.98] transition-colors shrink-0 shadow-md cursor-pointer"
                  >
                    Join Gazette
                  </button>
                </form>
              ) : (
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/10 border border-white/20 text-[#EBD7C7]">
                  <div className="w-8 h-8 rounded-full bg-[#D97E4A] text-white flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <div className="text-xs">
                    <strong>Welcome to the Atelier Gazette.</strong> Lookbook sent to your inbox.
                  </div>
                </div>
              )}
            </div>
          </div>
        </ScrollReveal>

        {/* Showrooms Grid with Scroll Reveal */}
        <div className="mb-14">
          <ScrollReveal direction="up" distance={25} duration={650} className="mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="text-xs uppercase tracking-widest font-semibold text-[#D97E4A]">
                  Dalok Interiors Studio & Atelier Locations
                </h4>
                <p className="text-xs text-[#9E9487] mt-0.5">
                  Visit our experience center or schedule a private architectural consultation.
                </p>
              </div>
              <a
                href="tel:9588814702"
                className="inline-flex items-center gap-2 text-xs font-medium text-[#EFE8DF] hover:text-[#D97E4A] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#D97E4A]" />
                <span>Direct Hotline: +91 95888 14702</span>
              </a>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SHOWROOM_LOCATIONS.map((loc, idx) => (
              <ScrollReveal
                key={loc.city}
                direction="up"
                delay={idx * 100}
                distance={30}
                duration={650}
                className="h-full"
              >
                <div
                  className={`p-4 rounded-2xl transition-colors h-full flex flex-col justify-between ${
                    loc.isFlagship
                      ? 'bg-[#181614] border-2 border-[#D4AF37]/60 shadow-lg shadow-black/40 relative'
                      : 'bg-white/5 border border-white/5 hover:border-white/15'
                  }`}
                >
                  {loc.isFlagship && (
                    <div className="absolute -top-2.5 right-3 px-2.5 py-0.5 rounded-full bg-[#D4AF37] text-[10px] font-bold tracking-wider text-[#12100E] uppercase shadow-xs">
                      Main Studio
                    </div>
                  )}
                  <div>
                    <div className="flex items-center gap-2 text-white font-medium mb-1">
                      <MapPin className={`w-4 h-4 ${loc.isFlagship ? 'text-[#D4AF37]' : 'text-[#D97E4A]'}`} />
                      <span>{loc.city}</span>
                    </div>
                    <p className="text-xs text-[#B5ABA0] mb-3 leading-relaxed">{loc.address}</p>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs mt-2">
                    <a
                      href={`tel:${loc.phone.replace(/[^0-9+]/g, '')}`}
                      className="text-[#D97E4A] hover:underline flex items-center gap-1.5 font-medium"
                    >
                      <Phone className="w-3 h-3" /> {loc.phone}
                    </a>
                    {loc.mapsUrl && (
                      <a
                        href={loc.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#E5D7B7] hover:text-white underline text-[11px]"
                      >
                        Map Direction
                      </a>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Navigation & Brand Details with Scroll Reveal */}
        <ScrollReveal direction="up" delay={150} distance={30} duration={700}>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 py-10 border-t border-b border-white/10">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl overflow-hidden border border-[#D4AF37]/40 bg-black flex items-center justify-center shadow-xs">
                  <img
                    src={ASSETS.logo}
                    alt="Dalok Interiors Emblem"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-xl tracking-tight text-white font-medium">
                    Dalok Interiors
                  </span>
                  <span className="text-[10px] tracking-widest uppercase text-[#D4AF37] font-medium">
                    Designing Spaces • Defining Lifestyles
                  </span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#AFA498] leading-relaxed max-w-sm mb-3 font-light">
                Crafting timeless interior environments through honest materiality, acoustic calm, and bespoke spatial architecture.
              </p>
              <div className="flex items-center gap-2 text-xs text-[#D8CFBF] mb-5">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <span>Shop No. 16, Vivan Aura, Zundal, Ahmedabad</span>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="tel:9588814702"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium text-white bg-[#D97E4A] hover:bg-[#C56F3D] transition-colors shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call 9588814702</span>
                </a>
                <a
                  href="https://maps.google.com/?q=Shop+16+Vivan+Aura+Zundal+Ahmedabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium text-[#EADBB6] bg-white/10 hover:bg-white/20 transition-colors border border-[#D4AF37]/30"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Get Directions</span>
                </a>
                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium text-white bg-white/10 hover:bg-white/20 transition-colors border border-white/15"
                >
                  <span>Book Walkthrough</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div>
              <h5 className="text-xs uppercase tracking-wider font-semibold text-white mb-4">Collections</h5>
              <ul className="space-y-2.5 text-xs text-[#B5ABA0]">
                <li><a href="#collections" className="hover:text-[#D97E4A] transition-colors">Living Room Sanctuary</a></li>
                <li><a href="#collections" className="hover:text-[#D97E4A] transition-colors">Nordic Home Office</a></li>
                <li><a href="#collections" className="hover:text-[#D97E4A] transition-colors">Restorative Bedroom</a></li>
                <li><a href="#collections" className="hover:text-[#D97E4A] transition-colors">Artisanal Stoneware</a></li>
                <li><a href="#arrivals" className="hover:text-[#D97E4A] transition-colors">2026 Season Drops</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-xs uppercase tracking-wider font-semibold text-white mb-4">Atelier Services</h5>
              <ul className="space-y-2.5 text-xs text-[#B5ABA0]">
                <li><button onClick={onOpenConsultation} className="hover:text-[#D97E4A] transition-colors text-left">Bespoke Spatial Design</button></li>
                <li><button onClick={onOpenConsultation} className="hover:text-[#D97E4A] transition-colors text-left">Custom Timber Fabrication</button></li>
                <li><a href="#about" className="hover:text-[#D97E4A] transition-colors">Architectural Trade Program</a></li>
                <li><a href="#about" className="hover:text-[#D97E4A] transition-colors">Materiality Library & Swatches</a></li>
                <li><a href="#about" className="hover:text-[#D97E4A] transition-colors">White-Glove Installation</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-xs uppercase tracking-wider font-semibold text-white mb-4">Design Journal</h5>
              <ul className="space-y-2.5 text-xs text-[#B5ABA0]">
                <li><a href="#blog" className="hover:text-[#D97E4A] transition-colors">The Art of Negative Space</a></li>
                <li><a href="#blog" className="hover:text-[#D97E4A] transition-colors">Acoustic Architecture</a></li>
                <li><a href="#blog" className="hover:text-[#D97E4A] transition-colors">Curating Stoneware</a></li>
                <li><a href="#about" className="hover:text-[#D97E4A] transition-colors">FSC Timber Provenance</a></li>
              </ul>
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom Legal & Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8E8377]">
          <p>© 2026 Dalok Interior. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#home" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#home" className="hover:text-white transition-colors">Terms of Atelier</a>
            <a href="#home" className="hover:text-white transition-colors">Sustainability Report</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
