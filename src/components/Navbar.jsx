import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Clock, MapPin, Menu, X, ChevronRight, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

export default function Navbar({ activePage, setActivePage }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'collections', label: 'Collections' },
    { id: 'showroom', label: 'Showroom' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Luxury Announcement Bar */}
      <div className="bg-[#1A0417] text-[#FAF8F5] text-xs py-2 px-4 border-b border-[#C5A059]/20 hidden sm:block">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-xs font-light tracking-wider text-[#FAF8F5]/80">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>81/1 Shivdaspur B.L.W Road, Near Kabir Ashram, Varanasi</span>
            </span>
            <span className="hidden md:inline text-[#C5A059]/40">•</span>
            <span className="hidden md:flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Mon - Sun: 10:30 AM - 8:30 PM</span>
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a 
              href={`tel:+91${BUSINESS_INFO.phone}`}
              className="flex items-center gap-1.5 text-[#E0C17E] hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{BUSINESS_INFO.phoneDisplay}</span>
            </a>
            <span className="text-[#C5A059]/40">•</span>
            <a 
              href={BUSINESS_INFO.whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Showroom</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Luxury Navigation Bar */}
      <nav className={`w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#2D0A27]/98 backdrop-blur-md shadow-xl py-3 border-b border-[#C5A059]/30' 
          : 'bg-[#2D0A27] py-4 border-b border-[#C5A059]/20'
      }`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 sm:gap-3.5 text-left group focus:outline-none min-w-0 mr-2"
            aria-label="Pavitrani Jewellers Home"
          >
            {/* Luminous Golden Lotus Logo without background or circle */}
            <div className="relative flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
              <img 
                src="/logo.png" 
                alt="Pavitrani Jewellers Official Lotus Emblem" 
                className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain filter drop-shadow-[0_0_14px_rgba(224,193,126,0.65)] group-hover:drop-shadow-[0_0_22px_rgba(224,193,126,0.9)] transition-all"
                loading="eager"
              />
            </div>

            {/* Brand Typography with PAVITRANI & JEWELLERS of identical size */}
            <div className="flex flex-col min-w-0">
              <div className="flex flex-wrap items-baseline gap-x-1.5 sm:gap-x-2 leading-tight">
                <span className="font-serif text-base sm:text-xl md:text-2xl font-bold tracking-wider text-[#FAF8F5] group-hover:text-[#E0C17E] transition-colors whitespace-nowrap">
                  PAVITRANI
                </span>
                <span className="font-serif text-base sm:text-xl md:text-2xl font-bold tracking-wider text-[#E0C17E] transition-colors whitespace-nowrap">
                  JEWELLERS
                </span>
              </div>
              <span className="text-[9px] sm:text-xs text-[#FAF8F5]/80 tracking-[0.16em] uppercase italic font-serif leading-tight pt-0.5 whitespace-nowrap">
                Jewels as Pure as You
              </span>
              <span className="text-[8px] sm:text-[9px] text-[#C5A059]/90 tracking-wider uppercase font-sans hidden md:block leading-tight pt-0.5">
                A unit of Mayank Metal Works
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-4 py-2 text-sm font-medium tracking-wide transition-all rounded-md relative ${
                    isActive
                      ? 'text-[#E0C17E] font-semibold'
                      : 'text-[#FAF8F5]/85 hover:text-[#E0C17E] hover:bg-white/5'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent"></span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Action Buttons on Right (Desktop) */}
          <div className="hidden sm:flex items-center gap-3 flex-shrink-0">
            <a
              href={BUSINESS_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-600/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-600 hover:text-white transition-all text-xs font-medium tracking-wide shadow-sm"
              title="Chat with jewellery advisor on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Enquire Now</span>
            </a>

            <button
              onClick={() => handleNavClick('contact')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-[#DFBE7B] via-[#C5A059] to-[#9E7D36] text-[#1A0417] font-semibold text-xs tracking-wider uppercase hover:shadow-lg hover:brightness-110 transition-all shadow"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Visit Showroom</span>
            </button>
          </div>

          {/* Mobile WhatsApp & Menu Button (With safe clearance) */}
          <div className="flex lg:hidden items-center gap-2 flex-shrink-0 ml-auto pl-2">
            <a
              href={BUSINESS_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-2.5 text-emerald-300 bg-emerald-950/60 border border-emerald-500/40 rounded-full hover:bg-emerald-600 hover:text-white transition-all shadow-sm"
              aria-label="WhatsApp Showroom"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#FAF8F5] hover:text-[#C5A059] focus:outline-none rounded-lg hover:bg-white/5 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#1F051B] border-t border-[#C5A059]/20 px-4 pt-4 pb-6 mt-3 space-y-3 shadow-2xl animate-in slide-in-from-top duration-200">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-serif transition-colors text-left ${
                    activePage === link.id
                      ? 'bg-[#C5A059]/20 text-[#E0C17E] font-bold border-l-4 border-[#C5A059]'
                      : 'text-[#FAF8F5]/90 hover:bg-white/5 hover:text-[#E0C17E]'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-[#C5A059]/60" />
                </button>
              ))}
              <button
                onClick={() => handleNavClick('disclaimer')}
                className="w-full flex items-center justify-between px-4 py-2.5 text-xs text-[#FAF8F5]/60 hover:text-[#E0C17E]"
              >
                <span>Disclaimer</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => handleNavClick('privacy')}
                className="w-full flex items-center justify-between px-4 py-2.5 text-xs text-[#FAF8F5]/60 hover:text-[#E0C17E]"
              >
                <span>Privacy Policy</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="pt-4 border-t border-[#C5A059]/20 space-y-2">
              <a
                href={BUSINESS_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 bg-emerald-600 text-white rounded-lg font-medium text-sm shadow"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp (+91 9335093572)</span>
              </a>

              <a
                href={`tel:+91${BUSINESS_INFO.phone}`}
                className="w-full flex items-center justify-center gap-2 py-3 bg-white/10 text-[#FAF8F5] border border-[#C5A059]/30 rounded-lg font-medium text-sm hover:bg-white/15"
              >
                <Phone className="w-4 h-4 text-[#C5A059]" />
                <span>Call Showroom (+91 {BUSINESS_INFO.phone})</span>
              </a>
            </div>

            <div className="pt-3 text-[11px] text-[#FAF8F5]/60 text-center font-sans">
              <p>81/1 Shivdaspur B.L.W Road, Varanasi</p>
              <p className="text-[#C5A059]">Mon - Sun: 10:30 AM - 8:30 PM</p>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
