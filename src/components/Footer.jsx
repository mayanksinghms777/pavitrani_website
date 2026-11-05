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
    <footer className="bg-[#47153F] text-[#FAF6EF] pt-16 pb-8 border-t border-[#C9A24A]/40 relative overflow-hidden">
      {/* Decorative Subtle Antique Gold Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-28 bg-[#C9A24A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10 pb-12 border-b border-[#C9A24A]/25">
          
          {/* Col 1: Brand & Identity (Takes 4 cols to prevent text overlap) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3 min-w-0">
              <div className="relative flex-shrink-0">
                <img 
                  src="/pavitrani-official-white.png?v=20261105" 
                  alt="Pavitrani Jewellers Official Lotus Emblem" 
                  className="h-10 xl:h-11 w-auto object-contain opacity-95"
                />
              </div>
              <div className="min-w-0">
                <div className="flex flex-wrap items-baseline gap-1 leading-tight">
                  <span className="font-serif text-lg xl:text-xl font-bold tracking-wider text-[#FAF6EF]">
                    PAVITRANI
                  </span>
                  <span className="font-serif text-lg xl:text-xl font-bold tracking-wider text-[#E8D8B7]">
                    JEWELLERS
                  </span>
                </div>
                <p className="text-[10px] uppercase tracking-widest text-[#FAF6EF]/75 font-sans pt-0.5 truncate">
                  A unit of Mayank Metal Works
                </p>
              </div>
            </div>

            <p className="text-sm font-serif italic text-[#C9A24A] tracking-wide">
              "Jewels as Pure as You"
            </p>

            <p className="text-xs text-[#FAF6EF]/80 leading-relaxed font-sans">
              A premier jewellery showroom in Varanasi dedicated to authentic 925 sterling silver, hallmarked gold, and certified lab-grown diamond creations. Generational trust rooted in ethical metallurgy.
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#30232E] border border-[#C9A24A]/40 text-[11px] text-[#E8D8B7]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C9A24A]" />
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
                <div className="w-full h-full bg-[#47153F] rounded-full flex items-center justify-center hover:bg-transparent transition-colors">
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
                className="w-9 h-9 rounded-full bg-[#C9A24A] flex items-center justify-center hover:bg-[#E8D8B7] hover:scale-110 transition-all text-[#47153F] shadow"
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

          {/* Col 2: Navigation Links (2 cols out of 12) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-lg font-semibold tracking-wider text-[#E8D8B7] border-b border-[#C9A24A]/25 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-[#FAF6EF]/80 font-sans">
              <li>
                <button 
                  onClick={() => handleNav('home')} 
                  className="hover:text-[#E8D8B7] transition-colors flex items-center gap-2 group text-left"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24A] group-hover:scale-125 transition-transform" />
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('about')} 
                  className="hover:text-[#E8D8B7] transition-colors flex items-center gap-2 group text-left"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24A] group-hover:scale-125 transition-transform" />
                  <span>About Us & Heritage</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('collections')} 
                  className="hover:text-[#E8D8B7] transition-colors flex items-center gap-2 group text-left"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24A] group-hover:scale-125 transition-transform" />
                  <span>Jewellery Collections</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('showroom')} 
                  className="hover:text-[#E8D8B7] transition-colors flex items-center gap-2 group text-left"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24A] group-hover:scale-125 transition-transform" />
                  <span>Virtual Showroom Tour</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('contact')} 
                  className="hover:text-[#E8D8B7] transition-colors flex items-center gap-2 group text-left"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24A] group-hover:scale-125 transition-transform" />
                  <span>Contact & Showroom Location</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('disclaimer')} 
                  className="hover:text-[#E8D8B7] transition-colors flex items-center gap-2 group text-left"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24A] group-hover:scale-125 transition-transform" />
                  <span>Product & Pricing Disclaimer</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('privacy')} 
                  className="hover:text-[#E8D8B7] transition-colors flex items-center gap-2 group text-left"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24A] group-hover:scale-125 transition-transform" />
                  <span>Privacy Policy</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Collections Categories (3 cols out of 12) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-lg font-semibold tracking-wider text-[#E8D8B7] border-b border-[#C9A24A]/25 pb-2">
              Featured Collections
            </h4>
            <ul className="space-y-2.5 text-xs text-[#FAF6EF]/80 font-sans">
              <li>
                <button 
                  onClick={() => handleNav('collections', 'Silver Bracelets')}
                  className="hover:text-[#E8D8B7] transition-colors flex items-center gap-2 group text-left"
                >
                  <Sparkles className="w-3 h-3 text-[#C9A24A]" />
                  <span>925 Sterling Silver Bracelets</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('collections', 'Silverware & Artifacts')}
                  className="hover:text-[#E8D8B7] transition-colors flex items-center gap-2 group text-left"
                >
                  <Sparkles className="w-3 h-3 text-[#C9A24A]" />
                  <span>Pure Silver Idols & Showpieces</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('collections', 'Gold Jewellery')}
                  className="hover:text-[#E8D8B7] transition-colors flex items-center gap-2 group text-left"
                >
                  <Sparkles className="w-3 h-3 text-[#C9A24A]" />
                  <span>Hallmarked Gold Jewellery</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('collections', 'Diamond Jewellery')}
                  className="hover:text-[#E8D8B7] transition-colors flex items-center gap-2 group text-left"
                >
                  <Sparkles className="w-3 h-3 text-[#C9A24A]" />
                  <span>Certified Lab-Grown Solitaires</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('collections', 'Bridal & Heirlooms')}
                  className="hover:text-[#E8D8B7] transition-colors flex items-center gap-2 group text-left"
                >
                  <Sparkles className="w-3 h-3 text-[#C9A24A]" />
                  <span>Bridal Ornaments & Heirlooms</span>
                </button>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href={BUSINESS_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-600/30 text-emerald-200 border border-emerald-500/40 text-[11px] font-medium hover:bg-emerald-600 hover:text-white transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Custom Order on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Col 4: Showroom Address & Timings (3 cols out of 12) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-lg font-semibold tracking-wider text-[#E8D8B7] border-b border-[#C9A24A]/25 pb-2">
              Visit Showroom
            </h4>
            <div className="space-y-3 text-xs text-[#FAF6EF]/85 font-sans">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C9A24A] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">{BUSINESS_INFO.name}</p>
                  <p className="text-[#FAF8F5]/80">{BUSINESS_INFO.address?.line1 || BUSINESS_INFO.address?.street || "81/1 Shivdaspur, B.L.W Road"}</p>
                  <p className="text-[#FAF8F5]/80">{BUSINESS_INFO.address?.city}, {BUSINESS_INFO.address?.state} {BUSINESS_INFO.address?.pincode}</p>
                  <a 
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#E8D8B7] hover:underline text-[11px] inline-block mt-1"
                  >
                    Open Google Maps &rarr;
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#C9A24A] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">Showroom Hours</p>
                  <p className="text-[#FAF8F5]/80">
                    {BUSINESS_INFO.timings?.days || BUSINESS_INFO.businessHours?.[0]?.days || "Monday - Sunday"}: {BUSINESS_INFO.timings?.hours || BUSINESS_INFO.businessHours?.[0]?.time || "10:30 AM - 8:30 PM"}
                  </p>
                  <p className="text-[11px] text-[#C9A24A]">Open All 7 Days</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#C9A24A] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">Helpline</p>
                  <a href={`tel:+91${BUSINESS_INFO.phone}`} className="hover:text-[#E8D8B7]">
                    {BUSINESS_INFO.phoneDisplay}
                  </a>
                  <p className="text-[11px] text-[#FAF8F5]/60">{BUSINESS_INFO.phoneSecondaryDisplay || BUSINESS_INFO.secondaryPhoneDisplay}</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal Copyright & Certification Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#FAF8F5]/70 font-sans">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-center md:text-left">
            <span>Copyright © Pavitrani Jewellers All rights reserved.</span>
            <span className="hidden sm:inline text-[#C9A24A]/40">•</span>
            <span className="text-[#E8D8B7]">GSTIN: {BUSINESS_INFO.gstin}</span>
            <span className="hidden sm:inline text-[#C9A24A]/40">•</span>
            <span>A unit of MAYANK METAL WORKS</span>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => handleNav('privacy')}
              className="hover:text-[#E8D8B7] transition-colors"
            >
              Privacy Policy
            </button>
            <span className="text-[#C9A24A]/40">•</span>
            <button 
              onClick={() => handleNav('disclaimer')}
              className="hover:text-[#E8D8B7] transition-colors"
            >
              Disclaimer
            </button>
            <span className="text-[#C9A24A]/40">•</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-[#E8D8B7] hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
