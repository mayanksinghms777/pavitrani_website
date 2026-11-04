import React from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Phone, 
  MessageCircle, 
  ChevronRight, 
  Star, 
  Award, 
  Gem, 
  Heart,
  Scale
} from 'lucide-react';
import { BUSINESS_INFO, TESTIMONIALS } from '../data/business';
import { PRODUCTS } from '../data/products';
import ContactForm from '../components/ContactForm';

export default function HomePage({ setActivePage, onSelectProduct, setCollectionFilter }) {
  const featuredProducts = PRODUCTS.filter(p => p.featured).slice(0, 6);

  const handleCategoryClick = (category) => {
    if (setCollectionFilter) setCollectionFilter(category);
    setActivePage('collections');
    window.location.hash = 'collections';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-20 sm:space-y-28">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center bg-gradient-to-b from-[#2D0A27] via-[#24061F] to-[#180415] text-[#FAF8F5] overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C5A059]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-rose-900/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#C5A059]/40 text-[#E0C17E] text-xs font-medium tracking-wide">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Varanasi's Destination for Pure Jewellery</span>
            </div>

            <div className="space-y-3">
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#FAF8F5] leading-[1.1]">
                Jewels as Pure <br className="hidden sm:block" />
                <span className="text-gold-gradient italic font-normal">as You</span>
              </h1>
              <p className="text-sm sm:text-base text-[#FAF8F5]/80 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
                Step into <strong className="text-[#E0C17E] font-medium">Pavitrani Jewellers</strong> on B.L.W Road, Varanasi. Experience handcrafted 925 sterling silver ornaments, hallmarked gold heirlooms, and certified lab-grown diamonds created with generations of metallurgical integrity.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => {
                  setActivePage('collections');
                  window.location.hash = 'collections';
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#DFBE7B] via-[#C5A059] to-[#9E7D36] text-[#1A0417] font-semibold text-xs sm:text-sm tracking-wider uppercase hover:shadow-xl hover:brightness-110 transition-all flex items-center gap-2"
              >
                <span>Explore Collections</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <a
                href={BUSINESS_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-full bg-emerald-600/20 hover:bg-emerald-600 text-emerald-300 hover:text-white border border-emerald-500/50 font-medium text-xs sm:text-sm tracking-wider transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Showroom</span>
              </a>

              <button
                onClick={() => {
                  setActivePage('showroom');
                  window.location.hash = 'showroom';
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-[#FAF8F5]/90 border border-white/20 text-xs sm:text-sm tracking-wider transition-all"
              >
                <span>Virtual Showroom</span>
              </button>
            </div>

            {/* Micro Credibility Indicators */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-white/10 text-center lg:text-left">
              <div>
                <p className="font-serif text-2xl font-bold text-[#E0C17E]">925</p>
                <p className="text-[11px] text-[#FAF8F5]/70 uppercase tracking-wider">Certified Silver</p>
              </div>
              <div>
                <p className="font-serif text-2xl font-bold text-[#E0C17E]">100%</p>
                <p className="text-[11px] text-[#FAF8F5]/70 uppercase tracking-wider">Hallmarked Purity</p>
              </div>
              <div>
                <p className="font-serif text-2xl font-bold text-[#E0C17E]">Varanasi</p>
                <p className="text-[11px] text-[#FAF8F5]/70 uppercase tracking-wider">B.L.W Road Landmark</p>
              </div>
            </div>

          </div>

          {/* Hero Visual Imagery */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative ring */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#C5A059]/30 to-purple-600/20 blur-xl opacity-70" />

              {/* Main Visual Card */}
              <div className="relative rounded-2xl overflow-hidden bg-[#180415] border border-[#C5A059]/40 shadow-2xl p-3">
                <div className="relative aspect-4/5 rounded-xl overflow-hidden group">
                  <img
                    src="/images/products/solitaire-teardrop-halo-bracelet.webp"
                    alt="Pavitrani Solitaire Teardrop Halo Tennis Bracelet"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#180415] via-transparent to-black/20" />

                  {/* Watermark badge on card */}
                  <div className="absolute top-4 left-4 bg-[#2D0A27]/90 backdrop-blur-xs text-[#E0C17E] text-[11px] font-medium px-3 py-1 rounded-full border border-[#C5A059]/30 flex items-center gap-1.5 shadow">
                    <Sparkles className="w-3 h-3" />
                    <span>Signature Creation</span>
                  </div>

                  {/* Caption on image */}
                  <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10 space-y-1">
                    <p className="text-xs text-[#E0C17E] uppercase tracking-wider font-semibold">
                      Solitaire Halo Collection
                    </p>
                    <p className="font-serif text-lg text-white font-medium">
                      Teardrop Halo Tennis Bracelet
                    </p>
                    <p className="text-[11px] text-white/70">
                      Handcrafted in 925 sterling silver with brilliant teardrop clusters.
                    </p>
                  </div>
                </div>

                {/* Secondary Pill */}
                <div className="mt-3 px-3 py-2 bg-white/5 rounded-lg flex items-center justify-between text-xs text-[#FAF8F5]/80">
                  <span className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                    <span>A unit of Mayank Metal Works</span>
                  </span>
                  <span className="text-[#E0C17E] font-mono text-[11px]">GST: 09AUQPS8232E2Z3</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 2. VALUE PROPOSITIONS STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-luxury border border-[#C5A059]/20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BUSINESS_INFO.pillars.map((pillar, idx) => (
            <div key={idx} className="flex items-start gap-4 p-2">
              <div className="w-12 h-12 rounded-xl bg-[#2D0A27]/5 border border-[#C5A059]/30 flex items-center justify-center shrink-0 text-[#8B6722]">
                {idx === 0 && <ShieldCheck className="w-6 h-6 text-[#C5A059]" />}
                {idx === 1 && <Sparkles className="w-6 h-6 text-[#C5A059]" />}
                {idx === 2 && <Scale className="w-6 h-6 text-[#C5A059]" />}
                {idx === 3 && <Gem className="w-6 h-6 text-[#C5A059]" />}
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-[#2D0A27]">{pillar.title}</h4>
                <p className="text-xs text-gray-600 leading-relaxed mt-1 font-sans">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. FOUR CORE PILLARS / FEATURED COLLECTIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <p className="text-xs font-semibold tracking-widest text-[#8B6722] uppercase">
            Curated Showroom Portfolios
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#2D0A27]">
            Distinctive Jewellery Collections
          </h2>
          <div className="w-20 h-1 bg-[#C5A059] mx-auto rounded-full" />
          <p className="text-sm text-gray-600 font-sans">
            Every creation at Pavitrani Jewellers is crafted with authentic metallurgy, whether celebrating daily milestones or grand wedding ceremonies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Category 1: 925 Silver */}
          <div 
            onClick={() => handleCategoryClick('925 Silver')}
            className="group cursor-pointer rounded-2xl overflow-hidden bg-white shadow-luxury hover:shadow-luxury-hover border border-[#C5A059]/20 transition-all duration-300 flex flex-col"
          >
            <div className="relative aspect-4/5 overflow-hidden bg-[#180415]">
              <img 
                src="/images/products/bracelet-royal-pave-tennis.webp" 
                alt="925 Sterling Silver Jewellery Varanasi" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-semibold text-[#E0C17E] uppercase tracking-widest">
                  Modern & Classic
                </span>
                <h3 className="font-serif text-xl font-bold">925 Sterling Silver</h3>
              </div>
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
              <p className="text-xs text-gray-600 leading-relaxed font-sans">
                Bracelets, snake chains, meander links, tennis bands and daily-wear ornaments crafted in certified 92.5% pure sterling silver.
              </p>
              <div className="flex items-center text-xs font-semibold text-[#8B6722] group-hover:translate-x-1 transition-transform">
                <span>View Silver Pieces</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </div>

          {/* Category 2: Silverware & Artefacts */}
          <div 
            onClick={() => handleCategoryClick('Silverware & Artefacts')}
            className="group cursor-pointer rounded-2xl overflow-hidden bg-white shadow-luxury hover:shadow-luxury-hover border border-[#C5A059]/20 transition-all duration-300 flex flex-col"
          >
            <div className="relative aspect-4/5 overflow-hidden bg-[#180415]">
              <img 
                src="/images/products/silver-peacock-mayur-showpiece.webp" 
                alt="Pure Silver Artefacts and Utensils Varanasi" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-semibold text-[#E0C17E] uppercase tracking-widest">
                  Banarasi Silversmithing
                </span>
                <h3 className="font-serif text-xl font-bold">Silverware & Artefacts</h3>
              </div>
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
              <p className="text-xs text-gray-600 leading-relaxed font-sans">
                Chiseled silver Mayur (peacocks), puja thalis, kalash, dinnerware sets, and temple offerings rooted in Varanasi's holy traditions.
              </p>
              <div className="flex items-center text-xs font-semibold text-[#8B6722] group-hover:translate-x-1 transition-transform">
                <span>View Silver Artefacts</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </div>

          {/* Category 3: Fine Gold */}
          <div 
            onClick={() => handleCategoryClick('Fine Gold')}
            className="group cursor-pointer rounded-2xl overflow-hidden bg-white shadow-luxury hover:shadow-luxury-hover border border-[#C5A059]/20 transition-all duration-300 flex flex-col"
          >
            <div className="relative aspect-4/5 overflow-hidden bg-[#180415]">
              <img 
                src="/images/products/gold-bridal-necklace-sets.webp" 
                alt="Hallmarked Gold Jewellery Showroom Varanasi" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-semibold text-[#E0C17E] uppercase tracking-widest">
                  Hallmarked Heritage
                </span>
                <h3 className="font-serif text-xl font-bold">Fine Gold Jewellery</h3>
              </div>
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
              <p className="text-xs text-gray-600 leading-relaxed font-sans">
                Bridal trousseau necklaces, choker sets, traditional jhumkis, and lightweight contemporary gold jewellery hallmarked for purity.
              </p>
              <div className="flex items-center text-xs font-semibold text-[#8B6722] group-hover:translate-x-1 transition-transform">
                <span>View Gold Jewellery</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </div>

          {/* Category 4: Lab-Grown Diamonds */}
          <div 
            onClick={() => handleCategoryClick('Lab-Grown Diamonds')}
            className="group cursor-pointer rounded-2xl overflow-hidden bg-white shadow-luxury hover:shadow-luxury-hover border border-[#C5A059]/20 transition-all duration-300 flex flex-col"
          >
            <div className="relative aspect-4/5 overflow-hidden bg-[#180415]">
              <img 
                src="/images/products/solitaire-teardrop-halo-bracelet.webp" 
                alt="Lab-Grown Diamonds and CZ Jewellery Varanasi" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-semibold text-[#E0C17E] uppercase tracking-widest">
                  Conscious Brilliance
                </span>
                <h3 className="font-serif text-xl font-bold">Lab-Grown Diamonds</h3>
              </div>
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
              <p className="text-xs text-gray-600 leading-relaxed font-sans">
                Brilliant diamond solitaires, halo tennis bracelets, and modern rings offering unmatched fire, clarity, and ethical provenance.
              </p>
              <div className="flex items-center text-xs font-semibold text-[#8B6722] group-hover:translate-x-1 transition-transform">
                <span>View Diamond Pieces</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. FEATURED BESTSELLERS SPOTLIGHT */}
      <section className="bg-[#FAF8F5] py-12 border-y border-[#C5A059]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold tracking-widest text-[#8B6722] uppercase">
                Showroom Favourites
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D0A27]">
                Featured Jewellery Pieces
              </h2>
            </div>

            <button
              onClick={() => {
                setActivePage('collections');
                window.location.hash = 'collections';
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs font-semibold tracking-wider text-[#8B6722] hover:text-[#2D0A27] flex items-center gap-1.5 uppercase"
            >
              <span>Explore All 12 Showroom Designs</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-luxury hover:shadow-luxury-hover border border-[#C5A059]/20 transition-all duration-300 flex flex-col"
              >
                {/* Image container */}
                <div className="relative aspect-square overflow-hidden bg-[#180415] p-3 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain filter drop-shadow group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Badge */}
                  <div className="absolute top-3 left-3 bg-[#2D0A27]/90 text-[#E0C17E] text-[10px] font-semibold px-2.5 py-1 rounded-full border border-[#C5A059]/40">
                    {product.badge}
                  </div>

                  {product.tag && (
                    <div className="absolute top-3 right-3 bg-amber-500 text-[#180415] text-[10px] font-bold px-2 py-0.5 rounded shadow">
                      {product.tag}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-medium text-[#8B6722] uppercase tracking-wider">
                      {product.category}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[#2D0A27] group-hover:text-[#8B6722] transition-colors line-clamp-1">
                      {product.title}
                    </h3>
                    <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed font-sans">
                      {product.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-gray-100 flex items-center gap-2">
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="flex-1 py-2 px-3 rounded-xl bg-gray-100 hover:bg-[#2D0A27] hover:text-white text-gray-800 text-xs font-semibold tracking-wide transition-all text-center"
                    >
                      Quick View
                    </button>

                    <a
                      href={`https://wa.me/91${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(
                        `Hello Pavitrani Jewellers, I would like to enquire about: "${product.title}". Please share availability and details.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-medium flex items-center justify-center gap-1.5 transition-all shadow"
                      title="Enquire on WhatsApp"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. ABOUT PAVITRANI PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#2D0A27] text-white rounded-3xl overflow-hidden shadow-2xl border border-[#C5A059]/30 grid grid-cols-1 lg:grid-cols-12">
          
          <div className="lg:col-span-6 p-8 sm:p-12 lg:p-14 flex flex-col justify-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-[#C5A059]/40 text-[#E0C17E] text-xs font-medium w-fit">
              <Award className="w-3.5 h-3.5" />
              <span>A Legacy of Varanasi Metallurgical Trust</span>
            </div>

            <div className="space-y-3">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Pavitrani Jewellers <br />
                <span className="text-gold-gradient italic font-normal">A Unit of Mayank Metal Works</span>
              </h2>
              <p className="text-sm text-white/80 leading-relaxed font-sans font-light">
                Founded with a profound commitment to purity and traditional craftsmanship, Pavitrani Jewellers brings together decades of metallurgical expertise and modern jewellery aesthetics.
              </p>
              <p className="text-sm text-white/80 leading-relaxed font-sans font-light">
                Located on B.L.W Road near Kabir Ashram in Varanasi, our showroom offers a dedicated VIP salon where patrons select fine gold ornaments, 925 sterling silver bracelets, and pure silver religious artefacts in total privacy and comfort.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <p className="font-serif text-xl font-bold text-[#E0C17E]">09AUQPS8232E2Z3</p>
                <p className="text-[11px] text-white/60 font-sans mt-0.5">Official GST Registered</p>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <p className="font-serif text-xl font-bold text-[#E0C17E]">100% Honest</p>
                <p className="text-[11px] text-white/60 font-sans mt-0.5">Purity & Direct Pricing</p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  setActivePage('about');
                  window.location.hash = 'about';
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#DFBE7B] via-[#C5A059] to-[#9E7D36] text-[#1A0417] font-semibold text-xs uppercase tracking-wider shadow hover:shadow-lg hover:brightness-110 transition-all"
              >
                <span>Read Our Full Story & Values</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 relative bg-black/40 min-h-[350px]">
            <img
              src="/images/showroom/pavitrani-showroom-interior-luxury.webp"
              alt="Pavitrani Jewellers Luxury Showroom Salon Varanasi"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2D0A27] via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#2D0A27] lg:via-transparent lg:to-transparent" />
            <div className="absolute bottom-6 right-6 left-6 lg:left-auto bg-black/70 backdrop-blur-md p-4 rounded-xl border border-white/10 text-xs text-white max-w-sm">
              <p className="text-[#E0C17E] font-semibold uppercase tracking-wider">Showroom Experience</p>
              <p className="mt-1 text-white/80">Plush royal purple velvet seating designed for leisurely family consultations on BLW Road.</p>
            </div>
          </div>

        </div>
      </section>

      {/* 6. VIRTUAL SHOWROOM TOUR PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <p className="text-xs font-semibold tracking-widest text-[#8B6722] uppercase">
            Store Experience
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D0A27]">
            Visit Our Grand Varanasi Showroom
          </h2>
          <div className="w-20 h-1 bg-[#C5A059] mx-auto rounded-full" />
          <p className="text-sm text-gray-600 font-sans">
            Centrally situated on B.L.W Road near Kabir Ashram. A modern haven of heritage jewellery and warm hospitality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative rounded-2xl overflow-hidden aspect-4/3 shadow-luxury group">
            <img
              src="/images/showroom/pavitrani-showroom-facade-night.webp"
              alt="Pavitrani Showroom Facade Night"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-xs text-[#E0C17E] font-semibold">Storefront Elevation</p>
              <h4 className="font-serif text-lg font-bold">Illuminated Facade</h4>
              <p className="text-[11px] text-white/70">Grand night view on BLW Road</p>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden aspect-4/3 shadow-luxury group">
            <img
              src="/images/showroom/pavitrani-showroom-interior-luxury.webp"
              alt="Pavitrani Showroom Interior"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-xs text-[#E0C17E] font-semibold">VIP Salon</p>
              <h4 className="font-serif text-lg font-bold">Royal Purple Lounge</h4>
              <p className="text-[11px] text-white/70">Private family viewing environment</p>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden aspect-4/3 shadow-luxury group">
            <img
              src="/images/showroom/pavitrani-showroom-interior-counters.webp"
              alt="Pavitrani Showroom Counters and Silver Displays"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-xs text-[#E0C17E] font-semibold">Display Galleries</p>
              <h4 className="font-serif text-lg font-bold">Pure Silverware Alcoves</h4>
              <p className="text-[11px] text-white/70">Over 500+ curated items on display</p>
            </div>
          </div>
        </div>

        <div className="text-center pt-2">
          <button
            onClick={() => {
              setActivePage('showroom');
              window.location.hash = 'showroom';
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#8B6722] hover:text-[#2D0A27]"
          >
            <span>Explore Virtual Showroom Tour & Directions</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 7. CUSTOMER TESTIMONIALS */}
      <section className="bg-gradient-to-b from-white to-[#FAF8F5] py-16 border-y border-[#C5A059]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <p className="text-xs font-semibold tracking-widest text-[#8B6722] uppercase">
              Customer Voices
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D0A27]">
              Words of Trust from Varanasi Patrons
            </h2>
            <div className="w-20 h-1 bg-[#C5A059] mx-auto rounded-full" />
            <p className="text-sm text-gray-600 font-sans">
              Nothing honours us more than the enduring trust of families who choose Pavitrani for their most sacred celebrations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-2xl p-6 shadow-luxury border border-[#C5A059]/20 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>

                  <p className="text-xs text-gray-700 leading-relaxed italic font-serif">
                    "{t.comment}"
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 space-y-1">
                  <p className="font-semibold text-xs text-[#2D0A27]">{t.name}</p>
                  <p className="text-[11px] text-gray-500">{t.location}</p>
                  <span className="inline-block mt-1 text-[10px] text-[#8B6722] bg-[#FAF8F5] px-2 py-0.5 rounded border border-[#C5A059]/30">
                    {t.productMentioned}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. SHOWROOM LOCATION & ENQUIRY FORM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Showroom Information */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-semibold tracking-widest text-[#8B6722] uppercase">
                Visit or Reach Out
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D0A27]">
                We Welcome You to Pavitrani
              </h2>
              <p className="text-sm text-gray-600 font-sans">
                Have a query regarding a specific jewellery piece, need custom bridal consultation, or visiting our showroom? Reach out directly or fill the form.
              </p>
            </div>

            <div className="space-y-4 bg-white p-6 rounded-2xl shadow-luxury border border-[#C5A059]/20 text-xs text-gray-700">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-[#2D0A27]">Showroom Address</h4>
                  <p className="mt-0.5 text-gray-600">81/1 Shivdaspur B.L.W Road, Near Kabir Ashram, Varanasi, U.P. 221004</p>
                  <a
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-1 text-[#8B6722] font-semibold hover:underline"
                  >
                    Open in Google Maps Navigation ›
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-[#2D0A27]">Contact Numbers</h4>
                  <p className="mt-0.5 text-gray-600">
                    Primary: <a href={`tel:+91${BUSINESS_INFO.phone}`} className="font-semibold text-[#2D0A27]">{BUSINESS_INFO.phoneDisplay}</a>
                  </p>
                  <p className="text-gray-600">
                    Secondary: <a href={`tel:+91${BUSINESS_INFO.phoneSecondary}`} className="text-[#2D0A27]">{BUSINESS_INFO.phoneSecondaryDisplay}</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-[#2D0A27]">Showroom Timings</h4>
                  <p className="mt-0.5 text-gray-600">Monday to Sunday: 10:30 AM to 8:30 PM</p>
                  <p className="text-emerald-700 font-semibold">Open All 7 Days</p>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="p-5 rounded-2xl bg-[#2D0A27] text-white flex items-center justify-between gap-4 border border-[#C5A059]/40">
              <div>
                <p className="text-xs text-[#E0C17E] uppercase font-semibold">Instant Showroom Assistance</p>
                <p className="text-sm font-serif mt-0.5">Chat with our jewellery advisor on WhatsApp</p>
              </div>
              <a
                href={BUSINESS_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs flex items-center gap-1.5 shadow"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat Now</span>
              </a>
            </div>

          </div>

          {/* Interactive Contact / Enquiry Form */}
          <div className="lg:col-span-6">
            <ContactForm />
          </div>

        </div>
      </section>

    </div>
  );
}
