import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, Sparkles, PhoneCall, ArrowRight, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ASSETS } from '../data/content';

interface HeaderProps {
  onOpenConsultation: () => void;
  onOpenWishlist: () => void;
  wishlistCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenConsultation,
  onOpenWishlist,
  wishlistCount,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Collections', href: '#collections', id: 'collections' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Blog', href: '#blog', id: 'blog' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, id: string) => {
    e.preventDefault();
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FBF9F5]/90 backdrop-blur-md shadow-xs border-b border-[#E8E2D8]/80 py-3.5'
          : 'bg-[#FBF9F5]/70 backdrop-blur-xs py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            id="brand-logo-link"
            className="flex items-center gap-2.5 sm:gap-3 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D97E4A]"
            onClick={(e) => handleNavClick(e, '#home', 'home')}
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden border border-[#D4AF37]/50 shadow-xs bg-[#0C0B0A] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <img
                src={ASSETS.logo}
                alt="Dalok Interiors Logo"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl tracking-tight font-medium text-[#2C2925] leading-none group-hover:text-[#D97E4A] transition-colors">
                Dalok Interiors
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-wider uppercase text-[#885232] font-semibold mt-0.5">
                Designing Spaces
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-navigation" className="hidden md:flex items-center gap-7 lg:gap-9">
            {navLinks.map((link) => (
              <a
                key={link.id}
                id={`nav-${link.id}`}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.id)}
                className={`text-sm tracking-wide font-medium transition-colors relative py-1 hover:text-[#D97E4A] ${
                  activeSection === link.id ? 'text-[#D97E4A]' : 'text-[#565149]'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#D97E4A] rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Actions on right */}
          <div className="flex items-center gap-3">
            {/* Wishlist Button */}
            <button
              type="button"
              id="header-wishlist-btn"
              onClick={onOpenWishlist}
              className="relative p-2 rounded-full text-[#565149] hover:text-[#2C2925] hover:bg-[#EFE9DF] transition-colors focus:outline-none"
              aria-label="View saved items"
              title="Saved items"
            >
              <Heart className="w-5 h-5 stroke-[1.75]" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#D97E4A] text-white text-[10px] font-semibold rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Direct Phone Call Link */}
            <a
              href="tel:9588814702"
              id="header-phone-link"
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-[#3D3831] hover:text-[#D97E4A] bg-[#ECE5D8]/75 hover:bg-[#ECE5D8] transition-colors border border-[#E0D8CA]"
              title="Call Dalok Interior at 9588814702"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#D97E4A]" />
              <span>9588814702</span>
            </a>

            {/* Premium CTA Button */}
            <button
              type="button"
              id="header-get-in-touch-btn"
              onClick={onOpenConsultation}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium tracking-wide text-white bg-[#D97E4A] hover:bg-[#C56F3D] active:scale-[0.98] transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#565149] hover:text-[#2C2925] md:hidden focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-b border-[#E8E2D8] bg-[#FBF9F5]/98 backdrop-blur-lg px-5 pt-3 pb-6"
          >
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.id)}
                  className={`text-base font-medium py-2 px-3 rounded-lg transition-colors ${
                    activeSection === link.id
                      ? 'bg-[#EFE9DF] text-[#D97E4A]'
                      : 'text-[#48443E] hover:bg-[#F3EFE7]'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-[#E8E2D8] flex flex-col gap-2.5">
                <a
                  href="tel:9588814702"
                  id="mobile-phone-call-btn"
                  className="w-full py-2.5 px-4 rounded-full text-center text-sm font-medium text-[#2C2925] bg-[#EFE9DF] hover:bg-[#E5DDD0] transition-colors flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-[#D97E4A]" />
                  <span>Call: 9588814702</span>
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConsultation();
                  }}
                  className="w-full py-3 px-4 rounded-full text-center text-sm font-medium text-white bg-[#D97E4A] hover:bg-[#C56F3D] transition-colors shadow-xs"
                >
                  Get In Touch
                </button>
                <a
                  href="https://maps.google.com/?q=Shop+16+Vivan+Aura+Zundal+Ahmedabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 text-center text-xs text-[#6E665A] hover:text-[#D97E4A] pt-1"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#D97E4A]" />
                  <span>Shop 16, Vivan Aura, Zundal, Ahmedabad</span>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
