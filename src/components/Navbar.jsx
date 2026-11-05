import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Clock, MapPin, Menu, X, ChevronRight, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

export default function Navbar({ activePage, setActivePage }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
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
      {/* 1. Top Luxury Announcement Bar (Royal Plum #47153F) */}
      <div className="bg-[#47153F] text-[#FAF6EF] text-xs py-1.5 px-4 border-b border-[#C9A24A]/25 hidden sm:block">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-xs font-light tracking-wider text-[#FAF6EF]/90">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#C9A24A]" />
              <span>81/1 Shivdaspur B.L.W Road, Near Kabir Ashram, Varanasi</span>
            </span>
            <span className="hidden md:inline text-[#C9A24A]/50">•</span>
            <span className="hidden md:flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#C9A24A]" />
              <span>Mon - Sun: 10:30 AM - 8:30 PM</span>
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a 
              href={`tel:+91${BUSINESS_INFO.phone}`}
              className="flex items-center gap-1.5 text-[#E8D8B7] hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C9A24A]" />
              <span>{BUSINESS_INFO.phoneDisplay}</span>
            </a>
            <span className="text-[#C9A24A]/50">•</span>
            <a 
              href={BUSINESS_INFO.whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-300 hover:text-emerald-200 transition-colors font-medium"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp Showroom</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Luxury Navigation Bar (Warm Ivory with Antique Gold Accent Border & Subtle Shadow) */}
      <nav className={`w-full transition-all duration-300 bg-[#FAF6EF]/95 backdrop-blur-md ${
        isScrolled 
          ? 'shadow-sm py-2.5 border-b border-[#C9A24A]/30' 
          : 'py-3.5 border-b border-[#C9A24A]/20'
      }`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-6 xl:px-8 flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 sm:gap-3 text-left group focus:outline-none flex-shrink-0 mr-3 lg:mr-5 xl:mr-7"
            aria-label="Pavitrani Jewellers Home"
          >
            {/* Official Supplied Lotus Logo in authentic Royal Purple without any background or color filter */}
            <div className="relative flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
              <img 
                src="/pavitrani-official-logo.png?v=20261105" 
                alt="Pavitrani Jewellers Official Lotus Emblem" 
                className="h-9 sm:h-10 md:h-11 w-auto object-contain transition-all"
                loading="eager"
              />
            </div>

            {/* Brand Lockup: PAVITRANI JEWELLERS on ONE horizontal line on desktop */}
            <div className="flex flex-col min-w-0">
              <div className="flex items-baseline gap-1 sm:gap-2 leading-none">
                <span className="font-serif text-[15px] sm:text-base md:text-lg lg:text-[17px] xl:text-[20px] font-bold tracking-[0.04em] sm:tracking-[0.06em] text-[#47153F] group-hover:text-[#C9A24A] transition-colors whitespace-nowrap">
                  PAVITRANI JEWELLERS
                </span>
              </div>
              
              {/* Tagline underneath */}
              <span className="font-serif italic text-[9px] sm:text-[10px] md:text-xs text-[#C9A24A] tracking-[0.12em] sm:tracking-[0.16em] uppercase font-medium leading-tight mt-0.5 whitespace-nowrap">
                Jewels as Pure as You
              </span>
              
              {/* Secondary text */}
              <span className="text-[8px] sm:text-[9px] text-[#30232E]/70 tracking-wider uppercase font-sans hidden sm:block leading-tight mt-0.5 font-medium whitespace-nowrap">
                A unit of Mayank Metal Works
              </span>
            </div>
          </button>

          {/* Elegant Gold Hairline Divider between Brand and Nav Links */}
          <div className="hidden lg:block h-5 w-[1px] bg-[#C9A24A]/30 shrink-0 mr-3 lg:mr-4 xl:mr-6" aria-hidden="true" />

          {/* Desktop Navigation Links (Center - Guaranteed strictly on ONE horizontal line with comfortable spacing) */}
          <div className="hidden lg:flex items-center space-x-0.5 xl:space-x-1.5 shrink-0">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`whitespace-nowrap px-2 xl:px-3 py-1.5 text-xs xl:text-sm font-medium tracking-wide transition-all rounded-md relative ${
                    isActive
                      ? 'text-[#47153F] font-bold'
                      : 'text-[#30232E]/80 hover:text-[#47153F] hover:bg-[#E8D8B7]/30'
                  }`}
                >
                  <span className="whitespace-nowrap">{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 xl:left-3 xl:right-3 h-[2px] bg-[#C9A24A]"></span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Action Buttons on Right (Desktop only) */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-2.5 shrink-0 ml-auto pl-2">
            <a
              href={BUSINESS_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 p-2 2xl:px-3.5 2xl:py-2 rounded-full border border-emerald-600/30 bg-emerald-50 text-emerald-800 hover:bg-emerald-600 hover:text-white transition-all text-xs font-medium tracking-wide shadow-xs whitespace-nowrap"
              title="Chat with jewellery advisor on WhatsApp"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600 group-hover:text-white shrink-0" />
              <span className="hidden 2xl:inline">Enquire Now</span>
            </a>

            <button
              onClick={() => handleNavClick('contact')}
              className="inline-flex items-center gap-1.5 px-3 xl:px-4 py-1.5 xl:py-2 rounded-full bg-[#47153F] text-white hover:bg-[#340E2E] border border-[#C9A24A]/40 transition-all text-xs font-semibold tracking-wider uppercase shadow-sm hover:shadow whitespace-nowrap"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C9A24A] shrink-0" />
              <span>Visit Showroom</span>
            </button>
          </div>

          {/* Mobile Navigation Controls */}
          <div className="flex lg:hidden items-center gap-2 flex-shrink-0 ml-auto pl-2">
            <a
              href={BUSINESS_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full hover:bg-emerald-600 hover:text-white transition-all shadow-xs"
              aria-label="WhatsApp Showroom"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#47153F] hover:bg-[#E8D8B7]/40 rounded-lg focus:outline-none transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-[#C9A24A]/25 px-4 pt-4 pb-6 mt-2 space-y-3 shadow-xl animate-in slide-in-from-top duration-200">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-serif transition-colors text-left ${
                    activePage === link.id
                      ? 'bg-[#47153F]/10 text-[#47153F] font-bold border-l-4 border-[#C9A24A]'
                      : 'text-[#30232E] hover:bg-[#E8D8B7]/30 hover:text-[#47153F]'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-[#C9A24A]" />
                </button>
              ))}
              <button
                onClick={() => handleNavClick('disclaimer')}
                className="w-full flex items-center justify-between px-4 py-2.5 text-xs text-[#30232E]/70 hover:text-[#47153F]"
              >
                <span>Disclaimer</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#C9A24A]" />
              </button>
              <button
                onClick={() => handleNavClick('privacy')}
                className="w-full flex items-center justify-between px-4 py-2.5 text-xs text-[#30232E]/70 hover:text-[#47153F]"
              >
                <span>Privacy Policy</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#C9A24A]" />
              </button>
            </div>

            <div className="pt-4 border-t border-[#C9A24A]/25 space-y-2">
              <a
                href={BUSINESS_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 bg-emerald-600 text-white rounded-lg font-medium text-sm shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp (+91 9335093572)</span>
              </a>

              <a
                href={`tel:+91${BUSINESS_INFO.phone}`}
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#47153F] text-[#FAF6EF] rounded-lg font-medium text-sm hover:bg-[#340E2E] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C9A24A]" />
                <span>Call Showroom (+91 {BUSINESS_INFO.phone})</span>
              </a>
            </div>

            <div className="pt-3 text-[11px] text-[#30232E]/70 text-center font-sans">
              <p>81/1 Shivdaspur B.L.W Road, Varanasi</p>
              <p className="text-[#C9A24A] font-medium">Mon - Sun: 10:30 AM - 8:30 PM</p>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
