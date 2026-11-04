import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  Sparkles, 
  HeartHandshake, 
  Scale, 
  MapPin, 
  Clock, 
  MessageCircle,
  Gem,
  CheckCircle2
} from 'lucide-react';
import { BUSINESS_INFO, SHOWROOM_GALLERY } from '../data/business';

export default function AboutPage({ setActivePage }) {
  return (
    <div className="space-y-16 sm:space-y-24 py-8">
      
      {/* 1. Header Hero */}
      <section className="bg-gradient-to-b from-[#2D0A27] via-[#22051E] to-[#FAF8F5] text-[#FAF8F5] pt-12 pb-24 px-4 sm:px-6 lg:px-8 border-b border-[#C5A059]/20 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#C5A059]/40 text-[#E0C17E] text-xs font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Story of Pavitrani Jewellers</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            Rooted in Varanasi's Heritage, <br />
            <span className="text-gold-gradient italic font-normal">Dedicated to Uncompromising Purity</span>
          </h1>

          <p className="text-base sm:text-lg text-white/80 max-w-3xl mx-auto font-light leading-relaxed font-sans">
            "Jewels as Pure as You" is more than a slogan — it is our generational covenant with every patron who walks through our doors on B.L.W Road.
          </p>

          <div className="pt-2 flex items-center justify-center gap-3">
            <span className="px-3.5 py-1 rounded-full bg-black/40 text-xs text-[#E0C17E] border border-[#C5A059]/30">
              A Unit of MAYANK METAL WORKS
            </span>
            <span className="px-3.5 py-1 rounded-full bg-black/40 text-xs text-white/80 border border-white/20">
              GST: {BUSINESS_INFO.gstin}
            </span>
          </div>

        </div>
      </section>

      {/* 2. Brand Story & Origins */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 sm:-mt-20 relative z-20">
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-luxury border border-[#C5A059]/30 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#8B6722]">
                Our Origins & Heritage
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D0A27]">
                A Legacy of Metallurgical Craftsmanship in Kashi
              </h2>
            </div>

            <p className="text-sm text-gray-700 leading-relaxed font-sans">
              Born from the distinguished metallurgical foundations of <strong>Mayank Metal Works</strong>, <strong>Pavitrani Jewellers</strong> was conceived to bring a new standard of transparency, refinement, and beauty to the jewellery landscape of Varanasi.
            </p>

            <p className="text-sm text-gray-700 leading-relaxed font-sans">
              In ancient Kashi, silver and gold have always been sacred metals — emblems of sanctity, devotion, and family prosperity. We honor this sacred trust by maintaining the strictest standards of metal purity, from our hallmark 925 sterling silver bracelets to pure silver puja utensils and regal bridal gold ornaments.
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="font-serif text-xl font-bold text-[#2D0A27]">
                The Meaning of "Pavitrani"
              </h4>
              <p className="text-sm text-gray-700 leading-relaxed font-sans">
                Derived from the Sanskrit root for <em>purity, holiness, and sanctification</em>, "Pavitrani" signifies that every ornament bearing our hallmark is completely unadulterated, ethically sourced, and crafted with reverence for the individual who wears it.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#2D0A27]">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                <span>Zero Compromise on Hallmarked Purity</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#2D0A27]">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                <span>Ethical & Transparent Billing</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#2D0A27]">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                <span>Master Silversmiths of Varanasi</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-[#C5A059]/40 relative group">
              <img
                src="/images/showroom/pavitrani-showroom-interior-luxury.webp"
                alt="Pavitrani Jewellers VIP Lounge Interior"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-xs text-[#E0C17E] font-semibold uppercase">The Pavitrani Atmosphere</p>
                <p className="font-serif text-base font-medium">Plush VIP Consultation Salon</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#C5A059]/20 text-xs text-gray-600 italic font-serif text-center">
              "We consider every customer a guest of honour in our showroom, ensuring you experience warmth, respect, and complete transparency."
            </div>
          </div>

        </div>
      </section>

      {/* 3. Four Guiding Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <p className="text-xs font-semibold tracking-widest text-[#8B6722] uppercase">
            Our Moral Foundation
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D0A27]">
            Values That Guide Every Creation
          </h2>
          <div className="w-20 h-1 bg-[#C5A059] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-luxury border border-[#C5A059]/20 space-y-3 text-left">
            <div className="w-12 h-12 rounded-xl bg-[#2D0A27]/5 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#2D0A27]">Uncompromising Purity</h3>
            <p className="text-xs text-gray-600 leading-relaxed font-sans">
              Every piece of 925 sterling silver, solid gold, and gemstone is vetted with rigorous metallurgical testing. What you see is what you receive — guaranteed.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-luxury border border-[#C5A059]/20 space-y-3 text-left">
            <div className="w-12 h-12 rounded-xl bg-[#2D0A27]/5 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059]">
              <Scale className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#2D0A27]">Total Transparency</h3>
            <p className="text-xs text-gray-600 leading-relaxed font-sans">
              No hidden making charges or ambiguous pricing formulas. We weigh every ornament on high-precision certified scales right before your eyes.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-luxury border border-[#C5A059]/20 space-y-3 text-left">
            <div className="w-12 h-12 rounded-xl bg-[#2D0A27]/5 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059]">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#2D0A27]">Artisanal Silversmithing</h3>
            <p className="text-xs text-gray-600 leading-relaxed font-sans">
              From our famous chiseled silver Mayur (peacocks) to intricate filigree clover bracelets, our artisans marry Banarasi heritage with international silhouettes.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-luxury border border-[#C5A059]/20 space-y-3 text-left">
            <div className="w-12 h-12 rounded-xl bg-[#2D0A27]/5 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059]">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#2D0A27]">Generational Care</h3>
            <p className="text-xs text-gray-600 leading-relaxed font-sans">
              We build lifelong relationships with families across Varanasi, offering post-purchase resizing, cleaning, polishing, and custom heirloom restoration.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Showroom Photography Gallery */}
      <section className="bg-[#FAF8F5] py-12 border-y border-[#C5A059]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#8B6722]">
              Real Photographs
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#2D0A27]">
              Step Inside Our Varanasi Showroom
            </h2>
            <p className="text-xs text-gray-600 font-sans">
              Authentic photographs of our building, illuminated storefront, and customer galleries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SHOWROOM_GALLERY.map((item) => (
              <div 
                key={item.id} 
                className="bg-white rounded-2xl overflow-hidden shadow-luxury border border-[#C5A059]/20 flex flex-col group"
              >
                <div className="relative aspect-16/10 overflow-hidden bg-black/40">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 space-y-1.5 text-left">
                  <span className="text-[11px] font-semibold text-[#8B6722] uppercase tracking-wider">
                    {item.subtitle}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#2D0A27]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Visit Invitation Call to Action */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="bg-[#2D0A27] text-white p-8 sm:p-12 rounded-3xl shadow-2xl border border-[#C5A059]/30 space-y-6">
          <div className="w-14 h-14 rounded-full bg-white/10 mx-auto flex items-center justify-center border border-[#C5A059]/40 text-[#E0C17E]">
            <Gem className="w-7 h-7" />
          </div>

          <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Experience Pavitrani in Person
          </h3>

          <p className="text-sm text-white/80 max-w-xl mx-auto font-light leading-relaxed font-sans">
            Whether selecting a bridal trousseau, an auspicious silver poojan set, or a statement bracelet, our advisors look forward to welcoming you with traditional Varanasi warmth.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => {
                setActivePage('contact');
                window.location.hash = 'contact';
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#DFBE7B] via-[#C5A059] to-[#9E7D36] text-[#1A0417] font-semibold text-xs uppercase tracking-wider shadow hover:brightness-110 transition-all"
            >
              Get Showroom Directions
            </button>

            <a
              href={BUSINESS_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs tracking-wider transition-all flex items-center gap-2 shadow"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Connect on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
