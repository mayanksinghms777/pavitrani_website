import React from 'react';
import { 
  MapPin, 
  Clock, 
  Phone, 
  MessageCircle, 
  Sparkles, 
  ShieldCheck, 
  Car, 
  Coffee, 
  Scale, 
  Award,
  Navigation
} from 'lucide-react';
import { BUSINESS_INFO, SHOWROOM_GALLERY } from '../data/business';

export default function ShowroomPage() {
  return (
    <div className="space-y-16 sm:space-y-24">
      
      {/* 1. Header Banner (Official Brand Royal Plum #47153F) */}
      <section className="bg-[#47153F] text-[#FAF8F5] pt-14 pb-28 px-4 sm:px-6 lg:px-8 border-b border-[#C9A24A]/30 text-center relative overflow-hidden">
        {/* Subtle Ambient Sheen */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(201,162,74,0.08)_0%,_transparent_50%)] pointer-events-none" />

        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#C9A24A]/40 text-[#E8D8B7] text-xs font-medium">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A24A]" />
            <span>81/1 Shivdaspur B.L.W Road, Varanasi</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[#FAF6EF] leading-tight">
            The Pavitrani Showroom Experience
          </h1>

          <p className="text-base sm:text-lg text-[#FAF6EF]/85 max-w-2xl mx-auto font-light leading-relaxed font-sans">
            Step into a world where sacred Varanasi tradition meets modern luxury. Designed for leisurely family consultations and transparent transactions.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-white text-[#47153F] hover:bg-[#FAF8F5] font-semibold text-xs uppercase tracking-wider shadow-md transition-all flex items-center gap-2"
            >
              <Navigation className="w-4 h-4 text-[#C9A24A]" />
              <span>Get Directions on Google Maps</span>
            </a>

            <a
              href={`tel:+91${BUSINESS_INFO.phone}`}
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 text-[#FAF6EF] border border-[#C9A24A]/40 font-medium text-xs tracking-wider transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#C9A24A]" />
              <span>Call: {BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Visual Tour: 4 Detailed Showroom Photo Sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20 space-y-16">
        
        {/* Photo 1: Illuminated Night Facade */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-luxury border border-[#C9A24A]/25 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 rounded-2xl overflow-hidden aspect-16/10 shadow-md relative group">
            <img
              src="/images/showroom/pavitrani-showroom-facade-night.webp"
              alt="Pavitrani Jewellers Night Facade on BLW Road Varanasi"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="lg:col-span-5 space-y-4 text-left">
            <div className="inline-block px-3 py-1 rounded-full bg-[#FAF6EF] text-[#C9A24A] text-xs font-semibold uppercase tracking-wider border border-[#C9A24A]/30">
              Exterior Architecture
            </div>
            <h2 className="font-serif text-3xl font-bold text-[#47153F]">
              Grand Illuminated Facade on B.L.W Road
            </h2>
            <p className="text-xs sm:text-sm text-[#30232E]/80 leading-relaxed font-sans">
              Centrally situated in Shivdaspur near the historic Kabir Ashram, our contemporary multistory showroom stands as an illuminated beacon of hallmark purity in Varanasi.
            </p>
            <div className="space-y-2 pt-2 text-xs text-[#30232E]/70 font-sans">
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24A]" />
                <span>Prime roadside location with dedicated client parking</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24A]" />
                <span>Easily accessible from BLW Colony, Manduadih & Cantt</span>
              </p>
            </div>
          </div>
        </div>

        {/* Photo 2: Luxury Royal Velvet VIP Lounge */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-luxury border border-[#C9A24A]/25 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4 text-left order-2 lg:order-1">
            <div className="inline-block px-3 py-1 rounded-full bg-[#FAF6EF] text-[#C9A24A] text-xs font-semibold uppercase tracking-wider border border-[#C9A24A]/30">
              Private Hospitality
            </div>
            <h2 className="font-serif text-3xl font-bold text-[#47153F]">
              Plush Royal Purple VIP Consultation Lounge
            </h2>
            <p className="text-xs sm:text-sm text-[#30232E]/80 leading-relaxed font-sans">
              Selecting bridal heirlooms, bridal necklaces, or auspicious silver puja sets demands time and contemplation. Relax in our private VIP salon while viewing pieces under true-spectrum jewellery lighting.
            </p>
            <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
              <div className="p-3 bg-[#FAF6EF] rounded-xl border border-[#C9A24A]/20">
                <p className="font-semibold text-[#47153F]">Private Consultation</p>
                <p className="text-[11px] text-gray-500 mt-0.5">One-on-one specialist</p>
              </div>
              <div className="p-3 bg-[#FAF6EF] rounded-xl border border-[#C9A24A]/20">
                <p className="font-semibold text-[#47153F]">Warm Hospitality</p>
                <p className="text-[11px] text-gray-500 mt-0.5">Complimentary tea & water</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 rounded-2xl overflow-hidden aspect-16/10 shadow-md relative group order-1 lg:order-2">
            <img
              src="/images/showroom/pavitrani-showroom-interior-luxury.webp"
              alt="Pavitrani VIP Lounge Interior with Velvet Seating"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Photo 3: Silverware Displays & Counters */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-luxury border border-[#C9A24A]/25 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 rounded-2xl overflow-hidden aspect-16/10 shadow-md relative group">
            <img
              src="/images/showroom/pavitrani-showroom-interior-counters.webp"
              alt="Pavitrani Curated Silverware and Gold Jewellery Counters"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="lg:col-span-5 space-y-4 text-left">
            <div className="inline-block px-3 py-1 rounded-full bg-[#FAF6EF] text-[#C9A24A] text-xs font-semibold uppercase tracking-wider border border-[#C9A24A]/30">
              Curated Displays
            </div>
            <h2 className="font-serif text-3xl font-bold text-[#47153F]">
              Comprehensive Silverware & Gold Alcoves
            </h2>
            <p className="text-xs sm:text-sm text-[#30232E]/80 leading-relaxed font-sans">
              Our display galleries present an extensive inventory of certified 925 sterling silver bracelets, traditional silver utensils, heavy wedding payals, and certified diamond rings.
            </p>
            <div className="p-4 rounded-xl bg-[#47153F] text-white space-y-1 text-xs">
              <p className="font-semibold text-[#E8D8B7]">Live Precision Weighing</p>
              <p className="text-white/80">Every piece weighed right before you on electronic digital scales with zero approximation.</p>
            </div>
          </div>
        </div>

      </section>

      {/* 3. In-Store Amenities */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF6EF] rounded-3xl p-8 sm:p-12 border border-[#C9A24A]/30 space-y-8">
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <span className="text-xs font-semibold text-[#C9A24A] uppercase tracking-wider">
              Patron Comfort
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#47153F]">
              Showroom Amenities & Facilities
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-5 rounded-2xl shadow-luxury border border-[#C9A24A]/20 space-y-2 text-left">
              <Car className="w-6 h-6 text-[#C9A24A]" />
              <h4 className="font-serif text-base font-bold text-[#47153F]">Convenient Parking</h4>
              <p className="text-xs text-[#30232E]/75 font-sans">Ample parking space available for cars and two-wheelers right at our storefront on BLW Road.</p>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-luxury border border-[#C9A24A]/20 space-y-2 text-left">
              <Scale className="w-6 h-6 text-[#C9A24A]" />
              <h4 className="font-serif text-base font-bold text-[#47153F]">Precision Weighing</h4>
              <p className="text-xs text-[#30232E]/75 font-sans">Govt-certified electronic balances ensuring absolute transparency down to milligram accuracy.</p>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-luxury border border-[#C9A24A]/20 space-y-2 text-left">
              <Coffee className="w-6 h-6 text-[#C9A24A]" />
              <h4 className="font-serif text-base font-bold text-[#47153F]">Varanasi Hospitality</h4>
              <p className="text-xs text-[#30232E]/75 font-sans">Warm Banarasi courtesy, comfortable seating, and refreshments for the whole family.</p>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-luxury border border-[#C9A24A]/20 space-y-2 text-left">
              <Award className="w-6 h-6 text-[#C9A24A]" />
              <h4 className="font-serif text-base font-bold text-[#47153F]">Instant GST Invoicing</h4>
              <p className="text-xs text-[#30232E]/75 font-sans">Official computerized tax invoices with GSTIN: 09AUQPS8232E2Z3 for all purchases.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Map & Directions Embed */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 pb-12">
        <div className="text-center space-y-2">
          <span className="text-xs font-semibold text-[#C9A24A] uppercase tracking-wider">
            Interactive Map
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#47153F]">
            Find Us on B.L.W Road, Varanasi
          </h2>
        </div>

        <div className="bg-white rounded-3xl overflow-hidden shadow-luxury border border-[#C9A24A]/30">
          <div className="aspect-21/9 w-full min-h-[350px] relative bg-gray-100">
            <iframe
              title="Pavitrani Jewellers Varanasi Showroom Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.382834571981!2d82.9712!3d25.2925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE3JzMzLjAiTiA4MsKwNTgnMTYuMyJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>

          <div className="p-6 bg-[#47153F] text-white flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center md:text-left">
              <p className="font-serif text-lg font-bold text-[#E8D8B7]">Pavitrani Jewellers</p>
              <p className="text-xs text-white/80">81/1 Shivdaspur B.L.W Road Near Kabir Ashram, Varanasi, U.P.</p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-[#FAF6EF] text-[#47153F] hover:bg-[#E8D8B7] text-xs font-semibold tracking-wider uppercase transition-all flex items-center gap-1.5 shadow-sm"
              >
                <Navigation className="w-3.5 h-3.5 text-[#C9A24A]" />
                <span>Open in Maps</span>
              </a>

              <a
                href={BUSINESS_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium tracking-wider transition-all flex items-center gap-1.5 shadow-sm"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
