import React from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  Scale, 
  Gem, 
  Award, 
  ChevronRight, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Phone, 
  Star,
  CheckCircle2
} from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { BUSINESS_INFO, TESTIMONIALS } from '../data/business';
import { PRODUCTS, FEATURED_PRODUCT_IDS } from '../data/products';

export default function HomePage({ setActivePage, onSelectProduct, setCollectionFilter }) {
  const featuredProducts = PRODUCTS.filter((p) => FEATURED_PRODUCT_IDS.includes(p.id));

  const handleCategoryClick = (category) => {
    if (setCollectionFilter) {
      setCollectionFilter(category);
    }
    setActivePage('collections');
    window.location.hash = 'collections';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-20 sm:space-y-28">
      
      {/* 1. HERO SECTION (Official Brand Royal Plum #47153F with Authentic Showroom Facade Background) */}
      <section className="relative min-h-[85vh] lg:min-h-[92vh] flex items-center bg-[#47153F] text-[#FAF8F5] overflow-hidden py-16 lg:py-24 border-b border-[#C9A24A]/30">
        
        {/* Background Image: Authentic Pavitrani Jewellers Store Front (Showroom Night Facade) */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="/images/showroom/pavitrani-showroom-facade-night.webp"
            alt="Pavitrani Jewellers Varanasi Showroom Front Facade"
            className="w-full h-full object-cover object-center scale-105"
          />
          {/* Exact Brand Purple #47153F Overlays */}
          {/* Base blend with exact #47153F */}
          <div className="absolute inset-0 bg-[#47153F]/80 mix-blend-multiply" />
          {/* Horizontal gradient: deeper on text side, more transparent on right side */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#47153F] via-[#47153F]/85 to-[#47153F]/65" />
          {/* Top and bottom subtle vignettes blending seamlessly into the navbar and the next section */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#47153F]/60 via-transparent to-[#47153F]" />
        </div>

        {/* Subtle Fine Gold Ambient Sheen */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(201,162,74,0.06)_0%,_transparent_50%)] pointer-events-none z-1" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#47153F]/80 backdrop-blur-md border border-[#C9A24A]/50 text-[#E8D8B7] text-xs font-medium tracking-wide shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-[#C9A24A]" />
              <span>Varanasi's Destination for Pure Jewellery</span>
            </div>

            <div className="space-y-4">
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] drop-shadow-md">
                Pavitrani <span className="bg-gradient-to-r from-white via-[#FAF6EF] to-[#E8D8B7] bg-clip-text text-transparent">Jewellers</span>
              </h1>
              <p className="font-serif italic text-2xl sm:text-3xl lg:text-4xl text-[#E8D8B7] tracking-wide font-normal drop-shadow-sm">
                Jewels as Pure as You
              </p>
              <p className="text-sm sm:text-base text-white/95 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed pt-1 drop-shadow-xs">
                Step into <strong className="text-[#E8D8B7] font-medium">Pavitrani Jewellers</strong> on B.L.W Road, Varanasi. Experience handcrafted 925 sterling silver ornaments, hallmarked gold heirlooms, and certified lab-grown diamonds created with generations of metallurgical integrity.
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
                className="px-7 py-3.5 rounded-full bg-white text-[#47153F] hover:bg-[#FAF8F5] font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-xl hover:shadow-2xl flex items-center gap-2 transform hover:-translate-y-0.5"
              >
                <span>Explore Collections</span>
                <ChevronRight className="w-4 h-4 text-[#C9A24A]" />
              </button>

              <a
                href={BUSINESS_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs sm:text-sm tracking-wider transition-all flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
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
                className="px-6 py-3.5 rounded-full bg-[#47153F]/70 hover:bg-[#47153F]/90 backdrop-blur-md text-[#FAF6EF] border border-[#C9A24A]/40 text-xs sm:text-sm tracking-wider transition-all shadow-md transform hover:-translate-y-0.5"
              >
                <span>Virtual Showroom</span>
              </button>
            </div>

            {/* Micro Credibility Indicators */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-[#C9A24A]/30 text-center lg:text-left">
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-bold text-[#E8D8B7] drop-shadow-sm">925</p>
                <p className="text-[11px] text-[#FAF6EF]/85 uppercase tracking-wider">Certified Silver</p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-bold text-[#E8D8B7] drop-shadow-sm">100%</p>
                <p className="text-[11px] text-[#FAF6EF]/85 uppercase tracking-wider">Hallmarked Purity</p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-bold text-[#E8D8B7] drop-shadow-sm">Varanasi</p>
                <p className="text-[11px] text-[#FAF6EF]/85 uppercase tracking-wider">B.L.W Road Landmark</p>
              </div>
            </div>

          </div>

          {/* Hero Visual Imagery */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer subtle gold glow */}
              <div className="absolute -inset-3 rounded-3xl bg-[#C9A24A]/25 blur-xl opacity-80" />

              {/* Main Visual Card */}
              <div className="relative rounded-2xl overflow-hidden bg-[#47153F]/85 backdrop-blur-md border border-[#C9A24A]/45 shadow-2xl p-3">
                <div className="relative aspect-4/5 rounded-xl overflow-hidden group bg-black/40">
                  <img
                    src="/images/products/solitaire-teardrop-halo-bracelet.webp"
                    alt="Pavitrani Solitaire Teardrop Halo Tennis Bracelet"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                  {/* Watermark badge on card */}
                  <div className="absolute top-4 left-4 bg-[#47153F]/90 backdrop-blur-xs text-[#E8D8B7] text-[11px] font-medium px-3 py-1 rounded-full border border-[#C9A24A]/40 flex items-center gap-1.5 shadow">
                    <Sparkles className="w-3 h-3 text-[#C9A24A]" />
                    <span>Signature Creation</span>
                  </div>

                  {/* Caption on image */}
                  <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10 space-y-1">
                    <p className="text-xs text-[#E8D8B7] uppercase tracking-wider font-semibold">
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
                <div className="mt-3 px-3 py-2 bg-black/25 rounded-lg flex items-center justify-between text-xs text-[#FAF6EF]/85 border border-[#C9A24A]/20">
                  <span className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#C9A24A]" />
                    <span>A unit of Mayank Metal Works</span>
                  </span>
                  <span className="text-[#E8D8B7] font-mono text-[11px]">GST: 09AUQPS8232E2Z3</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 2. VALUE PROPOSITIONS STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-luxury border border-[#C9A24A]/25 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BUSINESS_INFO.pillars.map((pillar, idx) => (
            <div key={idx} className="flex items-start gap-4 p-2">
              <div className="w-12 h-12 rounded-xl bg-[#47153F]/5 border border-[#C9A24A]/30 flex items-center justify-center shrink-0 text-[#C9A24A]">
                {idx === 0 && <ShieldCheck className="w-6 h-6" />}
                {idx === 1 && <Sparkles className="w-6 h-6" />}
                {idx === 2 && <Scale className="w-6 h-6" />}
                {idx === 3 && <Gem className="w-6 h-6" />}
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-[#47153F]">{pillar.title}</h4>
                <p className="text-xs text-[#30232E]/75 leading-relaxed mt-1 font-sans">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. FOUR CORE PILLARS / FEATURED COLLECTIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <p className="text-xs font-semibold tracking-widest text-[#C9A24A] uppercase">
            Curated Showroom Portfolios
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#47153F]">
            Distinctive Jewellery Collections
          </h2>
          <div className="w-16 h-0.5 bg-[#C9A24A] mx-auto rounded-full" />
          <p className="text-sm text-[#30232E]/80 font-sans">
            Every creation at Pavitrani Jewellers is crafted with authentic metallurgy, whether celebrating daily milestones or grand wedding ceremonies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Category 1: 925 Silver */}
          <div 
            onClick={() => handleCategoryClick('925 Silver')}
            className="group cursor-pointer rounded-2xl overflow-hidden bg-white shadow-luxury hover:shadow-luxury-hover border border-[#C9A24A]/20 transition-all duration-300 flex flex-col"
          >
            <div className="relative aspect-4/5 overflow-hidden bg-[#30232E]">
              <img 
                src="/images/products/bracelet-royal-pave-tennis.webp" 
                alt="925 Sterling Silver Jewellery Varanasi" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-semibold text-[#E8D8B7] uppercase tracking-widest">
                  Modern & Classic
                </span>
                <h3 className="font-serif text-xl font-bold">925 Sterling Silver</h3>
              </div>
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
              <p className="text-xs text-[#30232E]/75 leading-relaxed font-sans">
                Bracelets, snake chains, meander links, tennis bands and daily-wear ornaments crafted in certified 92.5% pure sterling silver.
              </p>
              <div className="flex items-center text-xs font-semibold text-[#47153F] group-hover:text-[#C9A24A] group-hover:translate-x-1 transition-all">
                <span>View Silver Pieces</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </div>

          {/* Category 2: Silverware & Artefacts */}
          <div 
            onClick={() => handleCategoryClick('Silverware & Artefacts')}
            className="group cursor-pointer rounded-2xl overflow-hidden bg-white shadow-luxury hover:shadow-luxury-hover border border-[#C9A24A]/20 transition-all duration-300 flex flex-col"
          >
            <div className="relative aspect-4/5 overflow-hidden bg-[#30232E]">
              <img 
                src="/images/products/silver-peacock-mayur-showpiece.webp" 
                alt="Pure Silver Artefacts and Utensils Varanasi" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-semibold text-[#E8D8B7] uppercase tracking-widest">
                  Banarasi Silversmithing
                </span>
                <h3 className="font-serif text-xl font-bold">Silverware & Artefacts</h3>
              </div>
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
              <p className="text-xs text-[#30232E]/75 leading-relaxed font-sans">
                Chiseled silver Mayur (peacocks), puja thalis, kalash, dinnerware sets, and temple offerings rooted in Varanasi's holy traditions.
              </p>
              <div className="flex items-center text-xs font-semibold text-[#47153F] group-hover:text-[#C9A24A] group-hover:translate-x-1 transition-all">
                <span>View Silver Artefacts</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </div>

          {/* Category 3: Fine Gold */}
          <div 
            onClick={() => handleCategoryClick('Fine Gold')}
            className="group cursor-pointer rounded-2xl overflow-hidden bg-white shadow-luxury hover:shadow-luxury-hover border border-[#C9A24A]/20 transition-all duration-300 flex flex-col"
          >
            <div className="relative aspect-4/5 overflow-hidden bg-[#30232E]">
              <img 
                src="/images/products/gold-bridal-necklace-sets.webp" 
                alt="Hallmarked Gold Jewellery Showroom Varanasi" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-semibold text-[#E8D8B7] uppercase tracking-widest">
                  Hallmarked Heritage
                </span>
                <h3 className="font-serif text-xl font-bold">Fine Gold Jewellery</h3>
              </div>
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
              <p className="text-xs text-[#30232E]/75 leading-relaxed font-sans">
                Bridal trousseau necklaces, choker sets, traditional jhumkis, and lightweight contemporary gold jewellery hallmarked for purity.
              </p>
              <div className="flex items-center text-xs font-semibold text-[#47153F] group-hover:text-[#C9A24A] group-hover:translate-x-1 transition-all">
                <span>View Gold Jewellery</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </div>

          {/* Category 4: Lab-Grown Diamonds */}
          <div 
            onClick={() => handleCategoryClick('Lab-Grown Diamonds')}
            className="group cursor-pointer rounded-2xl overflow-hidden bg-white shadow-luxury hover:shadow-luxury-hover border border-[#C9A24A]/20 transition-all duration-300 flex flex-col"
          >
            <div className="relative aspect-4/5 overflow-hidden bg-[#30232E]">
              <img 
                src="/images/products/solitaire-teardrop-halo-bracelet.webp" 
                alt="Lab-Grown Diamonds and CZ Jewellery Varanasi" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-semibold text-[#E8D8B7] uppercase tracking-widest">
                  Conscious Brilliance
                </span>
                <h3 className="font-serif text-xl font-bold">Lab-Grown Diamonds</h3>
              </div>
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
              <p className="text-xs text-[#30232E]/75 leading-relaxed font-sans">
                Brilliant diamond solitaires, halo tennis bracelets, and modern rings offering unmatched fire, clarity, and ethical provenance.
              </p>
              <div className="flex items-center text-xs font-semibold text-[#47153F] group-hover:text-[#C9A24A] group-hover:translate-x-1 transition-all">
                <span>View Diamond Pieces</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. FEATURED BESTSELLERS SPOTLIGHT */}
      <section className="bg-[#FAF6EF] py-14 border-y border-[#C9A24A]/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold tracking-widest text-[#C9A24A] uppercase">
                Showroom Favourites
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#47153F]">
                Featured Jewellery Pieces
              </h2>
            </div>

            <button
              onClick={() => {
                setActivePage('collections');
                window.location.hash = 'collections';
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs font-semibold tracking-wider text-[#47153F] hover:text-[#C9A24A] flex items-center gap-1.5 uppercase transition-colors"
            >
              <span>Explore All 12 Showroom Designs</span>
              <ChevronRight className="w-4 h-4 text-[#C9A24A]" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-luxury hover:shadow-luxury-hover border border-[#C9A24A]/20 transition-all duration-300 flex flex-col"
              >
                {/* Image container */}
                <div className="relative aspect-square overflow-hidden bg-[#30232E] p-3 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain filter drop-shadow group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Badge */}
                  <div className="absolute top-3 left-3 bg-[#47153F]/90 text-[#E8D8B7] text-[10px] font-semibold px-2.5 py-1 rounded-full border border-[#C9A24A]/40">
                    {product.badge}
                  </div>

                  {product.tag && (
                    <div className="absolute top-3 right-3 bg-[#C9A24A] text-[#47153F] text-[10px] font-bold px-2 py-0.5 rounded shadow-xs">
                      {product.tag}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-medium text-[#C9A24A] uppercase tracking-wider">
                      {product.category}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[#47153F] group-hover:text-[#C9A24A] transition-colors line-clamp-1">
                      {product.title}
                    </h3>
                    <p className="text-xs text-[#30232E]/75 line-clamp-2 leading-relaxed font-sans">
                      {product.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-gray-100 flex items-center gap-2">
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="flex-1 py-2 px-3 rounded-xl bg-[#FAF6EF] hover:bg-[#47153F] hover:text-[#FAF6EF] text-[#47153F] border border-[#C9A24A]/30 text-xs font-semibold tracking-wide transition-all text-center"
                    >
                      Quick View
                    </button>

                    <a
                      href={`https://wa.me/91${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(
                        `Hello Pavitrani Jewellers, I would like to enquire about: "${product.title}". Please share availability and details.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-medium flex items-center justify-center gap-1.5 transition-all shadow-xs"
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

      {/* 5. ABOUT PAVITRANI PREVIEW (Royal Plum Brand Feature) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#47153F] text-[#FAF6EF] rounded-3xl overflow-hidden shadow-xl border border-[#C9A24A]/35 grid grid-cols-1 lg:grid-cols-12">
          
          <div className="lg:col-span-6 p-8 sm:p-12 lg:p-14 flex flex-col justify-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-[#C9A24A]/40 text-[#E8D8B7] text-xs font-medium w-fit">
              <Award className="w-3.5 h-3.5 text-[#C9A24A]" />
              <span>A Legacy of Varanasi Metallurgical Trust</span>
            </div>

            <div className="space-y-3">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
                Pavitrani Jewellers <br />
                <span className="text-[#E8D8B7] italic font-normal">A Unit of Mayank Metal Works</span>
              </h2>
              <p className="text-sm text-[#FAF6EF]/85 leading-relaxed font-sans font-light">
                Founded with a profound commitment to purity and traditional craftsmanship, Pavitrani Jewellers brings together decades of metallurgical expertise and modern jewellery aesthetics.
              </p>
              <p className="text-sm text-[#FAF6EF]/85 leading-relaxed font-sans font-light">
                Located on B.L.W Road near Kabir Ashram in Varanasi, our showroom offers a dedicated VIP salon where patrons select fine gold ornaments, 925 sterling silver bracelets, and pure silver religious artefacts in total privacy and comfort.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <p className="font-serif text-xl font-bold text-[#E8D8B7]">09AUQPS8232E2Z3</p>
                <p className="text-[11px] text-[#FAF6EF]/70 font-sans mt-0.5">Official GST Registered</p>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <p className="font-serif text-xl font-bold text-[#E8D8B7]">100% Honest</p>
                <p className="text-[11px] text-[#FAF6EF]/70 font-sans mt-0.5">Purity & Direct Pricing</p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  setActivePage('about');
                  window.location.hash = 'about';
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FAF6EF] text-[#47153F] hover:bg-[#E8D8B7] font-semibold text-xs uppercase tracking-wider shadow-sm transition-all"
              >
                <span>Read Our Full Story & Values</span>
                <ChevronRight className="w-4 h-4 text-[#C9A24A]" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 relative bg-black/40 min-h-[350px]">
            <img
              src="/images/showroom/pavitrani-showroom-interior-luxury.webp"
              alt="Pavitrani Jewellers Luxury Showroom Salon Varanasi"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#47153F] via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#47153F] lg:via-transparent lg:to-transparent" />
            <div className="absolute bottom-6 right-6 left-6 lg:left-auto bg-black/70 backdrop-blur-md p-4 rounded-xl border border-white/10 text-xs text-white max-w-sm">
              <p className="text-[#E8D8B7] font-semibold uppercase tracking-wider">Showroom Experience</p>
              <p className="mt-1 text-white/80">Plush royal purple velvet seating designed for leisurely family consultations on BLW Road.</p>
            </div>
          </div>

        </div>
      </section>

      {/* 6. VIRTUAL SHOWROOM TOUR PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <p className="text-xs font-semibold tracking-widest text-[#C9A24A] uppercase">
            Store Experience
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#47153F]">
            Visit Our Grand Varanasi Showroom
          </h2>
          <div className="w-16 h-0.5 bg-[#C9A24A] mx-auto rounded-full" />
          <p className="text-sm text-[#30232E]/80 font-sans">
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
              <p className="text-xs text-[#E8D8B7] font-semibold">Storefront Elevation</p>
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
              <p className="text-xs text-[#E8D8B7] font-semibold">VIP Salon</p>
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
              <p className="text-xs text-[#E8D8B7] font-semibold">Display Galleries</p>
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
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#47153F] hover:text-[#C9A24A] transition-colors"
          >
            <span>Explore Virtual Showroom Tour & Directions</span>
            <ChevronRight className="w-4 h-4 text-[#C9A24A]" />
          </button>
        </div>
      </section>

      {/* 7. CUSTOMER TESTIMONIALS */}
      <section className="bg-gradient-to-b from-white to-[#FAF6EF] py-16 border-y border-[#C9A24A]/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <p className="text-xs font-semibold tracking-widest text-[#C9A24A] uppercase">
              Customer Voices
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#47153F]">
              Words of Trust from Varanasi Patrons
            </h2>
            <div className="w-16 h-0.5 bg-[#C9A24A] mx-auto rounded-full" />
            <p className="text-sm text-[#30232E]/80 font-sans">
              Nothing honours us more than the enduring trust of families who choose Pavitrani for their most sacred celebrations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-2xl p-6 shadow-luxury border border-[#C9A24A]/20 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 text-[#C9A24A]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C9A24A]" />
                    ))}
                  </div>

                  <p className="text-xs text-[#30232E]/85 leading-relaxed italic font-serif">
                    "{t.comment}"
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 space-y-1">
                  <p className="font-semibold text-xs text-[#47153F]">{t.name}</p>
                  <p className="text-[11px] text-gray-500">{t.location}</p>
                  <span className="inline-block mt-1 text-[10px] text-[#47153F] bg-[#FAF6EF] px-2 py-0.5 rounded border border-[#C9A24A]/30">
                    {t.productMentioned}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. SHOWROOM LOCATION & ENQUIRY FORM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Showroom Information */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-semibold tracking-widest text-[#C9A24A] uppercase">
                Visit or Reach Out
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#47153F]">
                We Welcome You to Pavitrani
              </h2>
              <p className="text-sm text-[#30232E]/80 font-sans">
                Have a query regarding a specific jewellery piece, need custom bridal consultation, or visiting our showroom? Reach out directly or fill the form.
              </p>
            </div>

            <div className="space-y-4 bg-white p-6 rounded-2xl shadow-luxury border border-[#C9A24A]/20 text-xs text-[#30232E]/80">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C9A24A] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-[#47153F]">Showroom Address</h4>
                  <p className="mt-0.5 text-gray-600">81/1 Shivdaspur B.L.W Road, Near Kabir Ashram, Varanasi, U.P. 221004</p>
                  <a
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-1 text-[#47153F] font-semibold hover:underline"
                  >
                    Open in Google Maps Navigation ›
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#C9A24A] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-[#47153F]">Contact Numbers</h4>
                  <p className="mt-0.5 text-gray-600">
                    Primary: <a href={`tel:+91${BUSINESS_INFO.phone}`} className="font-semibold text-[#47153F]">{BUSINESS_INFO.phoneDisplay}</a>
                  </p>
                  <p className="text-gray-600">
                    Secondary: <a href={`tel:+91${BUSINESS_INFO.phoneSecondary}`} className="text-[#47153F]">{BUSINESS_INFO.phoneSecondaryDisplay}</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#C9A24A] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-[#47153F]">Showroom Timings</h4>
                  <p className="mt-0.5 text-gray-600">Monday to Sunday: 10:30 AM to 8:30 PM</p>
                  <p className="text-emerald-700 font-semibold">Open All 7 Days</p>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="p-5 rounded-2xl bg-[#47153F] text-white flex items-center justify-between gap-4 border border-[#C9A24A]/40 shadow-md">
              <div>
                <p className="text-xs text-[#E8D8B7] uppercase font-semibold">Instant Showroom Assistance</p>
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
