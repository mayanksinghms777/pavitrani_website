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
    <div className="space-y-16 sm:space-y-24 bg-[#FAF6EF]">
      
      {/* 1. Header Hero (Warm Ivory Luxury Editorial Header) */}
      <section className="bg-[#FAF6EF] text-[#30232E] pt-10 pb-12 sm:pt-16 sm:pb-20 px-3 sm:px-6 lg:px-8 border-b border-[#C9A24A]/25 text-center relative overflow-hidden">
        {/* Subtle Luxury Ambient Sheen */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(201,162,74,0.15)_0%,transparent_65%)] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#C9A24A]/40 text-[#47153F] text-xs font-semibold uppercase tracking-widest shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A24A]" />
            <span>The Story of Pavitrani Jewellers</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#30232E] leading-tight">
            Rooted in Varanasi's Heritage, <br />
            <span className="text-[#47153F] italic font-normal">Dedicated to Uncompromising Purity</span>
          </h1>

          <p className="font-serif italic text-lg sm:text-2xl text-[#C9A24A] font-normal tracking-wide">
            “Jewels as Pure as You”
          </p>

          <p className="text-sm sm:text-base text-[#30232E]/80 max-w-2xl mx-auto font-light leading-relaxed font-sans">
            "Jewels as Pure as You" is more than a slogan — it is our generational covenant with every patron who walks through our doors on B.L.W Road.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <span className="px-3.5 py-1.5 rounded-full bg-white text-xs font-medium text-[#47153F] border border-[#C9A24A]/30 shadow-xs">
              A Unit of MAYANK METAL WORKS
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white text-xs font-medium text-[#30232E]/75 border border-[#C9A24A]/30 shadow-xs">
              GST: {BUSINESS_INFO.gstin}
            </span>
          </div>

        </div>
      </section>

      {/* 2. Brand Story & Origins */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-20">
        <div className="bg-[#FFFFFF] rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-16 shadow-luxury border border-[#C9A24A]/30 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A24A]">
                Our Origins & Heritage
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#47153F]">
                A Legacy of Metallurgical Craftsmanship in Kashi
              </h2>
            </div>

            <p className="text-sm text-[#30232E]/80 leading-relaxed font-sans">
              Born from the distinguished metallurgical foundations of <strong>Mayank Metal Works</strong>, <strong>Pavitrani Jewellers</strong> was conceived to bring a new standard of transparency, refinement, and beauty to the jewellery landscape of Varanasi.
            </p>

            <p className="text-sm text-[#30232E]/80 leading-relaxed font-sans">
              In ancient Kashi, silver and gold have always been sacred metals — emblems of sanctity, devotion, and family prosperity. We honor this sacred trust by maintaining the strictest standards of metal purity, from our hallmark 925 sterling silver bracelets to pure silver puja utensils and regal bridal gold ornaments.
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="font-serif text-xl font-bold text-[#47153F]">
                The Meaning of "Pavitrani"
              </h4>
              <p className="text-sm text-[#30232E]/80 leading-relaxed font-sans">
                Derived from the Sanskrit root for <em>purity, holiness, and sanctification</em>, "Pavitrani" signifies that every ornament bearing our hallmark is completely unadulterated, ethically sourced, and crafted with reverence for the individual who wears it.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#47153F]">
                <CheckCircle2 className="w-4 h-4 text-[#C9A24A]" />
                <span>Zero Compromise on Hallmarked Purity</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#47153F]">
                <CheckCircle2 className="w-4 h-4 text-[#C9A24A]" />
                <span>Ethical & Transparent Billing</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#47153F]">
                <CheckCircle2 className="w-4 h-4 text-[#C9A24A]" />
                <span>Master Silversmiths of Varanasi</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-[#C9A24A]/30 relative group">
              <img
                src="/images/showroom/pavitrani-showroom-interior-luxury.webp"
                alt="Pavitrani Jewellers VIP Lounge Interior"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-xs text-[#E8D8B7] font-semibold uppercase">The Pavitrani Atmosphere</p>
                <p className="font-serif text-base font-medium">Plush VIP Consultation Salon</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#FAF6EF] border border-[#C9A24A]/20 text-xs text-[#30232E]/80 italic font-serif text-center">
              "We consider every customer a guest of honour in our showroom, ensuring you experience warmth, respect, and complete transparency."
            </div>
          </div>

        </div>
      </section>

      {/* 3. Four Guiding Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <p className="text-xs font-semibold tracking-widest text-[#C9A24A] uppercase">
            Our Moral Foundation
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#47153F]">
            Values That Guide Every Creation
          </h2>
          <div className="w-16 h-0.5 bg-[#C9A24A] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-luxury border border-[#C9A24A]/20 space-y-3 text-left">
            <div className="w-12 h-12 rounded-xl bg-[#47153F]/5 border border-[#C9A24A]/30 flex items-center justify-center text-[#C9A24A]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#47153F]">Uncompromising Purity</h3>
            <p className="text-xs text-[#30232E]/75 leading-relaxed font-sans">
              Every piece of 925 sterling silver, solid gold, and gemstone is vetted with rigorous metallurgical testing. What you see is what you receive — guaranteed.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-luxury border border-[#C9A24A]/20 space-y-3 text-left">
            <div className="w-12 h-12 rounded-xl bg-[#47153F]/5 border border-[#C9A24A]/30 flex items-center justify-center text-[#C9A24A]">
              <Scale className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#47153F]">Total Transparency</h3>
            <p className="text-xs text-[#30232E]/75 leading-relaxed font-sans">
              No hidden making charges or ambiguous pricing formulas. We weigh every ornament on high-precision certified scales right before your eyes.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-luxury border border-[#C9A24A]/20 space-y-3 text-left">
            <div className="w-12 h-12 rounded-xl bg-[#47153F]/5 border border-[#C9A24A]/30 flex items-center justify-center text-[#C9A24A]">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#47153F]">Artisanal Silversmithing</h3>
            <p className="text-xs text-[#30232E]/75 leading-relaxed font-sans">
              From our famous chiseled silver Mayur (peacocks) to intricate filigree clover bracelets, our artisans marry Banarasi heritage with modern silhouettes.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-luxury border border-[#C9A24A]/20 space-y-3 text-left">
            <div className="w-12 h-12 rounded-xl bg-[#47153F]/5 border border-[#C9A24A]/30 flex items-center justify-center text-[#C9A24A]">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#47153F]">Generational Care</h3>
            <p className="text-xs text-[#30232E]/75 leading-relaxed font-sans">
              We build lifelong relationships with families across Varanasi, offering post-purchase resizing, cleaning, polishing, and custom heirloom restoration.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Showroom Photography Gallery */}
      <section className="bg-[#FAF6EF] py-12 border-y border-[#C9A24A]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A24A]">
              Real Photographs
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#47153F]">
              Step Inside Our Varanasi Showroom
            </h2>
            <p className="text-xs text-[#30232E]/70 font-sans">
              Authentic photographs of our building, illuminated storefront, and customer galleries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SHOWROOM_GALLERY.map((item) => (
              <div 
                key={item.id} 
                className="bg-white rounded-2xl overflow-hidden shadow-luxury border border-[#C9A24A]/20 flex flex-col group"
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
                  <span className="text-[11px] font-semibold text-[#C9A24A] uppercase tracking-wider">
                    {item.subtitle}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#47153F]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#30232E]/75 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Visit Invitation Call to Action */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-12">
        <div className="bg-[#47153F] text-[#FAF6EF] p-8 sm:p-12 rounded-3xl shadow-xl border border-[#C9A24A]/40 space-y-6">
          <div className="w-14 h-14 rounded-full bg-white/10 mx-auto flex items-center justify-center border border-[#C9A24A]/40 text-[#E8D8B7]">
            <Gem className="w-7 h-7 text-[#C9A24A]" />
          </div>

          <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Experience Pavitrani in Person
          </h3>

          <p className="text-sm text-[#FAF6EF]/85 max-w-xl mx-auto font-light leading-relaxed font-sans">
            Whether selecting a bridal trousseau, an auspicious silver poojan set, or a statement bracelet, our advisors look forward to welcoming you with traditional Varanasi warmth.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => {
                setActivePage('contact');
                window.location.hash = 'contact';
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-3 rounded-full bg-[#FAF6EF] text-[#47153F] hover:bg-[#E8D8B7] font-semibold text-xs uppercase tracking-wider shadow-sm transition-all"
            >
              Get Showroom Directions
            </button>

            <a
              href={BUSINESS_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs tracking-wider transition-all flex items-center gap-2 shadow-sm"
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
