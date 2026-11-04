import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  ShieldCheck, 
  ArrowUp,
  Sparkles
} from 'lucide-react';
import InstagramIcon from './InstagramIcon';
import { BUSINESS_INFO } from '../data/business';

export default function Footer({ setActivePage, setCollectionFilter }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (pageId, filter = null) => {
    setActivePage(pageId);
    if (filter && setCollectionFilter) {
      setCollectionFilter(filter);
    }
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#180415] text-[#FAF8F5] pt-16 pb-8 border-t-2 border-[#C5A059]/40 relative overflow-hidden">
      {/* Decorative Gold Glow in Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#C5A059]/20">
          
          {/* Col 1: Brand & Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative flex-shrink-0">
                <img 
                  src="/logo.png" 
                  alt="Pavitrani Jewellers Official Lotus Emblem" 
                  className="h-12 w-auto object-contain filter drop-shadow-[0_0_12px_rgba(224,193,126,0.65)]"
                />
              </div>
              <div>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-serif text-xl font-bold tracking-wider text-[#FAF8F5]">
                    PAVITRANI
                  </span>
                  <span className="font-serif text-xl font-bold tracking-wider text-[#E0C17E]">
                    JEWELLERS
                  </span>
                </div>
                <p className="text-[10px] uppercase tracking-widest text-[#FAF8F5]/70 font-sans pt-0.5">
                  A unit of Mayank Metal Works
                </p>
              </div>
            </div>

            <p className="text-sm font-serif italic text-[#E0C17E] tracking-wide">
              "Jewels as Pure as You"
            </p>

            <p className="text-xs text-[#FAF8F5]/70 leading-relaxed font-sans">
              A premier jewellery showroom in Varanasi dedicated to authentic 925 sterling silver, hallmarked gold, and certified lab-grown diamond creations. Generational trust rooted in ethical metallurgy.
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2D0A27] border border-[#C5A059]/40 text-[11px] text-[#E0C17E]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>A unit of MAYANK METAL WORKS</span>
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={BUSINESS_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-600 via-rose-600 to-purple-600 p-[1px] flex items-center justify-center hover:scale-110 transition-transform shadow"
                aria-label="Pavitrani Jewellers Instagram Profile"
                title="Follow Pavitrani Jewellers on Instagram"
              >
                <div className="w-full h-full bg-[#180415] rounded-full flex items-center justify-center hover:bg-transparent transition-colors">
                  <InstagramIcon className="w-4 h-4 text-white" />
                </div>
              </a>

              <a
                href={BUSINESS_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-emerald-600 flex items-center justify-center hover:bg-emerald-500 hover:scale-110 transition-all text-white shadow"
                aria-label="Chat on WhatsApp"
                title="Chat with showroom on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href={`tel:+91${BUSINESS_INFO.phone}`}
                className="w-9 h-9 rounded-full bg-[#C5A059] flex items-center justify-center hover:bg-[#E0C17E] hover:scale-110 transition-all text-[#180415] shadow"
                aria-label="Call Showroom"
                title="Call showroom directly"
              >
                <Phone className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all text-white shadow"
                aria-label="Email Showroom"
                title="Send official email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-[#E0C17E] tracking-wider border-b border-[#C5A059]/30 pb-2">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-[#FAF8F5]/80">
              <li>
                <button 
                  onClick={() => handleNav('home')} 
                  className="hover:text-[#E0C17E] transition-colors flex items-center gap-1.5 text-left"
                >
                  <span className="text-[#C5A059]">›</span> Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('about')} 
                  className="hover:text-[#E0C17E] transition-colors flex items-center gap-1.5 text-left"
                >
                  <span className="text-[#C5A059]">›</span> About Our Heritage
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('collections')} 
                  className="hover:text-[#E0C17E] transition-colors flex items-center gap-1.5 text-left"
                >
                  <span className="text-[#C5A059]">›</span> Jewellery Collections
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('showroom')} 
                  className="hover:text-[#E0C17E] transition-colors flex items-center gap-1.5 text-left"
                >
                  <span className="text-[#C5A059]">›</span> Virtual Showroom Tour
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('contact')} 
                  className="hover:text-[#E0C17E] transition-colors flex items-center gap-1.5 text-left"
                >
                  <span className="text-[#C5A059]">›</span> Showroom Location & Contact
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('disclaimer')} 
                  className="hover:text-[#E0C17E] transition-colors flex items-center gap-1.5 text-left text-xs text-[#FAF8F5]/60"
                >
                  <span className="text-[#C5A059]">›</span> Product Disclaimer
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('privacy')} 
                  className="hover:text-[#E0C17E] transition-colors flex items-center gap-1.5 text-left text-xs text-[#FAF8F5]/60"
                >
                  <span className="text-[#C5A059]">›</span> Privacy Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Signature Categories */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-[#E0C17E] tracking-wider border-b border-[#C5A059]/30 pb-2">
              Featured Categories
            </h4>
            <ul className="space-y-2.5 text-sm text-[#FAF8F5]/80">
              <li>
                <button 
                  onClick={() => handleNav('collections', '925 Silver')} 
                  className="hover:text-[#E0C17E] transition-colors flex items-center gap-1.5 text-left"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>925 Sterling Silver Jewellery</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('collections', 'Bracelets & Chains')} 
                  className="hover:text-[#E0C17E] transition-colors flex items-center gap-1.5 text-left"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Luxury Bracelets & Chains</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('collections', 'Silverware & Artefacts')} 
                  className="hover:text-[#E0C17E] transition-colors flex items-center gap-1.5 text-left"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Pure Silver Utensils & Peacock Artefacts</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('collections', 'Fine Gold')} 
                  className="hover:text-[#E0C17E] transition-colors flex items-center gap-1.5 text-left"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Hallmarked Fine Gold & Bridal Trousseau</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('collections', 'Lab-Grown Diamonds')} 
                  className="hover:text-[#E0C17E] transition-colors flex items-center gap-1.5 text-left"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Certified Lab-Grown Diamonds</span>
                </button>
              </li>
            </ul>

            <div className="pt-2 text-xs text-[#FAF8F5]/60 bg-white/5 p-3 rounded-lg border border-[#C5A059]/20">
              <p className="font-semibold text-[#E0C17E] mb-1">Showroom Consultation</p>
              <p>Experience our private viewing salon on B.L.W Road. Walk-ins and appointments welcomed.</p>
            </div>
          </div>

          {/* Col 4: Showroom Information */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-[#E0C17E] tracking-wider border-b border-[#C5A059]/30 pb-2">
              Varanasi Showroom
            </h4>

            <div className="space-y-3 text-xs text-[#FAF8F5]/85">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">Pavitrani Jewellers</p>
                  <p>81/1 Shivdaspur, B.L.W Road</p>
                  <p>Near Kabir Ashram, Varanasi, U.P. 221004</p>
                  <a
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-[#E0C17E] hover:underline font-medium mt-1"
                  >
                    Get Directions on Google Maps ›
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                <div>
                  <p>Primary: <a href={`tel:+91${BUSINESS_INFO.phone}`} className="hover:text-[#E0C17E] font-medium">{BUSINESS_INFO.phoneDisplay}</a></p>
                  <p>Showroom: <a href={`tel:+91${BUSINESS_INFO.phoneSecondary}`} className="hover:text-[#E0C17E]">{BUSINESS_INFO.phoneSecondaryDisplay}</a></p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-[#E0C17E] break-all">
                  {BUSINESS_INFO.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">Business Hours:</p>
                  <p>Monday – Sunday: 10:30 AM – 8:30 PM</p>
                  <p className="text-[#C5A059] font-medium">Open All 7 Days</p>
                </div>
              </div>

              <div className="pt-1 text-[11px] text-[#FAF8F5]/60 font-mono">
                GSTIN: <span className="text-[#E0C17E] font-semibold">{BUSINESS_INFO.gstin}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal Copyright Strip */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#FAF8F5]/70">
          <div className="text-center md:text-left space-y-1">
            <p className="font-medium text-[#FAF8F5]">
              Copyright © Pavitrani Jewellers All rights reserved.
            </p>
            <p className="text-[11px] text-[#FAF8F5]/50">
              A unit of MAYANK METAL WORKS  |  GSTIN: {BUSINESS_INFO.gstin}  |  Varanasi, Uttar Pradesh, India
            </p>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => handleNav('disclaimer')}
              className="hover:text-[#E0C17E] transition-colors"
            >
              Disclaimer
            </button>
            <span className="text-white/20">•</span>
            <button
              onClick={() => handleNav('privacy')}
              className="hover:text-[#E0C17E] transition-colors"
            >
              Privacy Policy
            </button>
            <span className="text-white/20">•</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/10 hover:bg-[#C5A059] hover:text-[#180415] transition-all text-[11px] text-[#FAF8F5]"
              title="Return to top of page"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
