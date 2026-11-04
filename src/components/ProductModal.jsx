import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Phone, Sparkles, CheckCircle2, ShieldCheck, ZoomIn } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

export default function ProductModal({ product, onClose }) {
  const [activeImage, setActiveImage] = useState('main');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!product) return null;

  const currentImgSrc = activeImage === 'detail' && product.detailImage 
    ? product.detailImage 
    : product.image;

  const whatsappMessage = encodeURIComponent(
    `Hello Pavitrani Jewellers, I saw "${product.title}" on your website. Could you please share more details, current availability, and pricing at your Varanasi showroom?`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      {/* Backdrop */}
      <div 
        className="fixed inset-0" 
        onClick={onClose} 
        aria-hidden="true" 
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#FAF8F5] rounded-2xl shadow-2xl border border-[#C5A059]/40 z-10 flex flex-col md:flex-row">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#2D0A27]/80 text-[#FAF8F5] hover:bg-[#2D0A27] hover:text-[#E0C17E] transition-all"
          aria-label="Close product preview"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Product Imagery & Zoom View */}
        <div className="w-full md:w-1/2 p-6 bg-[#1A0417] flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-[#C5A059]/20">
          <div className="relative w-full aspect-square max-w-sm rounded-xl overflow-hidden bg-black/30 border border-[#C5A059]/30 flex items-center justify-center p-2 group">
            <img
              src={currentImgSrc}
              alt={product.title}
              className="w-full h-full object-contain filter drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-xs text-[#E0C17E] px-2.5 py-1 rounded text-xs flex items-center gap-1.5 border border-[#C5A059]/30">
              <ZoomIn className="w-3.5 h-3.5" />
              <span>{activeImage === 'detail' ? 'Macro Focus' : 'Full Piece'}</span>
            </div>
          </div>

          {/* Toggle between Main and Detail view if detail image exists */}
          {product.detailImage && product.detailImage !== product.image && (
            <div className="flex items-center gap-3 mt-4">
              <button
                onClick={() => setActiveImage('main')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeImage === 'main'
                    ? 'bg-[#C5A059] text-[#1A0417] font-semibold shadow'
                    : 'bg-white/10 text-white/70 hover:bg-white/20'
                }`}
              >
                Full View
              </button>
              <button
                onClick={() => setActiveImage('detail')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeImage === 'detail'
                    ? 'bg-[#C5A059] text-[#1A0417] font-semibold shadow'
                    : 'bg-white/10 text-white/70 hover:bg-white/20'
                }`}
              >
                Intricate Detail Close-up
              </button>
            </div>
          )}

          <p className="text-[11px] text-[#FAF8F5]/60 text-center mt-3 font-sans">
            Photographed directly from Pavitrani Jewellers showroom stock.
          </p>
        </div>

        {/* Right Side: Product Details & Enquiry Actions */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-[#2D0A27] text-[#E0C17E] border border-[#C5A059]/40">
                {product.category}
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-[#EFE9DF] text-[#7A5B1E] border border-[#C5A059]/30">
                {product.badge}
              </span>
              {product.tag && (
                <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-800 border border-amber-200">
                  {product.tag}
                </span>
              )}
            </div>

            {/* Title */}
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2D0A27] leading-snug">
              {product.title}
            </h2>

            {/* Description */}
            <p className="text-sm text-gray-700 leading-relaxed font-sans">
              {product.description}
            </p>

            {/* Craftsmanship Highlights */}
            {product.highlights && product.highlights.length > 0 && (
              <div className="space-y-2 pt-2">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#8B6722]">
                  Craftsmanship & Hallmarks
                </h4>
                <ul className="grid grid-cols-1 gap-2 text-xs text-gray-700">
                  {product.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Transparent Note regarding prices & metal weight */}
            <div className="p-3.5 rounded-xl bg-[#F7F3EC] border border-[#C5A059]/30 text-xs text-gray-700 space-y-1">
              <div className="flex items-center gap-1.5 font-semibold text-[#2D0A27]">
                <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                <span>Transparent Showroom Pricing</span>
              </div>
              <p className="text-[11px] text-gray-600 leading-normal">
                Final price and weight vary according to custom sizing, live bullion gold/silver market rates, and exact piece weight. Please enquire below for instant live availability and exact quote.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-2 border-t border-gray-200">
            <a
              href={`https://wa.me/91${BUSINESS_INFO.whatsapp}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600 text-white font-medium text-sm shadow-md hover:shadow-lg transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Enquire for this Piece on WhatsApp</span>
            </a>

            <div className="flex items-center gap-3">
              <a
                href={`tel:+91${BUSINESS_INFO.phone}`}
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#2D0A27] hover:bg-[#3E0E35] text-[#FAF8F5] text-xs font-semibold tracking-wider transition-all"
              >
                <Phone className="w-4 h-4 text-[#C5A059]" />
                <span>Call Showroom</span>
              </a>

              <button
                onClick={onClose}
                className="py-3 px-5 rounded-xl bg-gray-200 hover:bg-gray-300 text-gray-700 text-xs font-semibold transition-all"
              >
                Close
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
