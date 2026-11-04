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
    <div className="space-y-16 sm:space-y-24 py-8">
      
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-b from-[#2D0A27] via-[#22051E] to-[#FAF8F5] text-[#FAF8F5] pt-12 pb-24 px-4 sm:px-6 lg:px-8 border-b border-[#C5A059]/20 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#C5A059]/40 text-[#E0C17E] text-xs font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>81/1 Shivdaspur B.L.W Road, Varanasi</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            The Pavitrani Showroom Experience
          </h1>

          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto font-light leading-relaxed font-sans">
            Step into a world where sacred Varanasi tradition meets modern luxury. Designed for leisurely family consultations and transparent transactions.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#DFBE7B] via-[#C5A059] to-[#9E7D36] text-[#1A0417] font-semibold text-xs uppercase tracking-wider shadow hover:brightness-110 transition-all flex items-center gap-2"
            >
              <Navigation className="w-4 h-4" />
              <span>Get Directions on Google Maps</span>
            </a>

            <a
              href={`tel:+91${BUSINESS_INFO.phone}`}
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-medium text-xs tracking-wider transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#C5A059]" />
              <span>Call: {BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Visual Tour: 4 Detailed Showroom Photo Sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20 space-y-16">
        
        {/* Photo 1: Illuminated Facade */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-luxury border border-[#C5A059]/30 grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 aspect-16/10 relative overflow-hidden bg-black/40">
            <img
              src="/images/showroom/pavitrani-showroom-facade-night.webp"
              alt="Pavitrani Jewellers Storefront Night Facade Varanasi"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:col-span-5 p-8 sm:p-10 space-y-4 text-left">
            <span className="text-xs font-semibold text-[#8B6722] uppercase tracking-wider">
              Landmark Storefront
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#2D0A27]">
              Grand Illuminated Elevation
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed font-sans">
              Our striking multi-tiered glass showroom lights up the B.L.W Road in Shivdaspur. Decorated with festive illuminations and displaying our illuminated brand lotus insignia, it welcomes patrons into an ambience of regal elegance.
            </p>
            <div className="pt-2 text-xs text-gray-500 font-sans space-y-1.5">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C5A059]" />
                <span>Near Kabir Ashram, Shivdaspur, Varanasi</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C5A059]" />
                <span>Open All 7 Days: 10:30 AM to 8:30 PM</span>
              </p>
            </div>
          </div>
        </div>

        {/* Photo 2: Royal Purple Salon */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-luxury border border-[#C5A059]/30 grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-5 p-8 sm:p-10 space-y-4 text-left order-2 lg:order-1">
            <span className="text-xs font-semibold text-[#8B6722] uppercase tracking-wider">
              VIP Customer Salon
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#2D0A27]">
              Plush Velvet Hospitality
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed font-sans">
              We believe jewellery shopping should never feel rushed. Settle into our plush royal purple high-back velvet armchairs while our trained consultants present pieces tailored to your personal aesthetic, wedding dates, or gifting needs.
            </p>
            <div className="pt-2 grid grid-cols-2 gap-3 text-xs text-gray-700">
              <div className="p-3 rounded-xl bg-[#FAF8F5] border border-gray-200">
                <p className="font-semibold text-[#2D0A27]">Private Consultation</p>
                <p className="text-[11px] text-gray-500 mt-0.5">Quiet VIP viewing for bridal families</p>
              </div>
              <div className="p-3 rounded-xl bg-[#FAF8F5] border border-gray-200">
                <p className="font-semibold text-[#2D0A27]">Warm Hospitality</p>
                <p className="text-[11px] text-gray-500 mt-0.5">Traditional refreshments & comfort</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 aspect-16/10 relative overflow-hidden bg-black/40 order-1 lg:order-2">
            <img
              src="/images/showroom/pavitrani-showroom-interior-luxury.webp"
              alt="Pavitrani Jewellers VIP Lounge Purple Velvet Chairs"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Photo 3: Silverware & Showcase Alcoves */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-luxury border border-[#C5A059]/30 grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 aspect-16/10 relative overflow-hidden bg-black/40">
            <img
              src="/images/showroom/pavitrani-showroom-interior-counters.webp"
              alt="Pavitrani Jewellers Silverware and Jewellery Showcase Galleries"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:col-span-5 p-8 sm:p-10 space-y-4 text-left">
            <span className="text-xs font-semibold text-[#8B6722] uppercase tracking-wider">
              Display Galleries
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#2D0A27]">
              Pure Silver Utensils & Gold Heirlooms
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed font-sans">
              Our illuminated showcase alcoves house Varanasi's most comprehensive collection of pure silver dinnerware, wedding pooja samagri, decorative silverware, silver Mayur sculptures, and fine gold trousseau sets.
            </p>
            <div className="p-4 rounded-xl bg-[#2D0A27] text-white space-y-1 text-xs">
              <p className="text-[#E0C17E] font-semibold">Live Precision Weighing</p>
              <p className="text-white/80">Every piece is verified in front of you on certified precision scales with zero ambiguity.</p>
            </div>
          </div>
        </div>

      </section>

      {/* 3. In-Store Amenities */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF8F5] rounded-3xl p-8 sm:p-12 border border-[#C5A059]/30 space-y-8">
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <span className="text-xs font-semibold text-[#8B6722] uppercase tracking-wider">
              Patron Comfort
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#2D0A27]">
              Showroom Amenities & Facilities
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-200 space-y-2 text-left">
              <Car className="w-6 h-6 text-[#C5A059]" />
              <h4 className="font-serif text-base font-bold text-[#2D0A27]">Convenient Parking</h4>
              <p className="text-xs text-gray-600 font-sans">Ample parking space available for cars and two-wheelers right at our storefront on BLW Road.</p>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-200 space-y-2 text-left">
              <Scale className="w-6 h-6 text-[#C5A059]" />
              <h4 className="font-serif text-base font-bold text-[#2D0A27]">Precision Weighing</h4>
              <p className="text-xs text-gray-600 font-sans">Govt-certified electronic balances ensuring absolute transparency down to milligram accuracy.</p>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-200 space-y-2 text-left">
              <Coffee className="w-6 h-6 text-[#C5A059]" />
              <h4 className="font-serif text-base font-bold text-[#2D0A27]">Varanasi Hospitality</h4>
              <p className="text-xs text-gray-600 font-sans">Warm Banarasi courtesy, comfortable seating, and refreshments for the whole family.</p>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-200 space-y-2 text-left">
              <Award className="w-6 h-6 text-[#C5A059]" />
              <h4 className="font-serif text-base font-bold text-[#2D0A27]">Instant GST Invoicing</h4>
              <p className="text-xs text-gray-600 font-sans">Official computerized tax invoices with GSTIN: 09AUQPS8232E2Z3 for all purchases.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Map & Directions Embed */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-semibold text-[#8B6722] uppercase tracking-wider">
            Interactive Map
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#2D0A27]">
            Find Us on B.L.W Road, Varanasi
          </h2>
        </div>

        <div className="bg-white rounded-3xl overflow-hidden shadow-luxury border border-[#C5A059]/30">
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

          <div className="p-6 bg-[#2D0A27] text-white flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center md:text-left">
              <p className="font-serif text-lg font-bold text-[#E0C17E]">Pavitrani Jewellers</p>
              <p className="text-xs text-white/80">81/1 Shivdaspur B.L.W Road Near Kabir Ashram, Varanasi, U.P.</p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#DFBE7B] via-[#C5A059] to-[#9E7D36] text-[#1A0417] text-xs font-semibold tracking-wider uppercase hover:brightness-110 transition-all flex items-center gap-1.5"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Open in Maps</span>
              </a>

              <a
                href={BUSINESS_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium tracking-wider transition-all flex items-center gap-1.5"
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
