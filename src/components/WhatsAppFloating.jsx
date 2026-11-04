import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

export default function WhatsAppFloating() {
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  const defaultMessage = encodeURIComponent(
    "Hello Pavitrani Jewellers, I am exploring your website and would like to enquire about your jewellery collections and visit your showroom in Varanasi."
  );

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Interactive Tooltip Card */}
      {!tooltipDismissed && (
        <div className="hidden sm:flex items-center gap-2 bg-[#2D0A27] text-white text-xs px-3.5 py-2 rounded-full shadow-2xl border border-[#C5A059]/40 animate-bounce duration-1000">
          <span className="text-[#E0C17E] font-medium">Have questions?</span>
          <span>Chat with our Showroom</span>
          <button 
            onClick={() => setTooltipDismissed(true)}
            className="p-0.5 hover:text-rose-400 text-white/60 ml-1"
            aria-label="Dismiss chat tip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button with Pulsing Wave */}
      <a
        href={`https://wa.me/91${BUSINESS_INFO.whatsapp}?text=${defaultMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group w-14 h-14 bg-gradient-to-tr from-emerald-600 to-emerald-500 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-all duration-300 border-2 border-white/40 focus:outline-none focus:ring-4 focus:ring-emerald-400/50"
        aria-label="Chat directly on WhatsApp with Pavitrani Jewellers showroom"
      >
        {/* Animated Pulse Halo */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500 opacity-40 animate-ping pointer-events-none group-hover:hidden" />
        
        <MessageCircle className="w-7 h-7 relative z-10" />

        {/* Floating Badge */}
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 text-[#180415] text-[10px] font-bold rounded-full flex items-center justify-center border border-white">
          1
        </span>
      </a>
    </div>
  );
}
