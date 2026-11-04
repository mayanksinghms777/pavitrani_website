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
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Store,
  Compass,
  Eye
} from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { BUSINESS_INFO, TESTIMONIALS } from '../data/business';
import { PRODUCTS } from '../data/products';

export default function HomePage({ setActivePage, onSelectProduct, setCollectionFilter }) {
  // Exact 6 verified signature jewellery pieces requested for the curated showcase
  const featuredProductIds = [
    'solitaire-teardrop-halo-bracelet',
    'silver-peacock-mayur-showpiece',
    'bracelet-lion-crest-royale',
    'bracelet-royal-pave-tennis',
    'bracelet-clover-charm-link',
    'bracelet-greek-meander-link'
  ];

  const featuredProducts = featuredProductIds
    .map(id => PRODUCTS.find(p => p.id === id))
    .filter(Boolean);

  const handleCategoryClick = (category) => {
    if (setCollectionFilter) {
      setCollectionFilter(category);
    }
    setActivePage('collections');
    window.location.hash = 'collections';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (page) => {
    setActivePage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#FAF6EF] text-[#30232E] selection:bg-[#47153F] selection:text-white">
      
      {/* =========================================================================
          SECTION A: EDITORIAL SPLIT-SCREEN HERO
          Warm Ivory background, prominent 55-60% jewellery photograph,
          refined brand typography, clear CTAs, and micro-trust credentials.
         ========================================================================= */}
      <section className="relative overflow-hidden bg-[#FAF6EF] border-b border-[#C9A24A]/25 pt-10 pb-16 lg:pt-16 lg:pb-24">
        
        {/* Subtle Luxury Ambient Glow */}
        <div 
          className="absolute top-0 right-0 w-3/4 h-full pointer-events-none opacity-40 bg-[radial-gradient(ellipse_at_80%_30%,rgba(201,162,74,0.18)_0%,transparent_65%)]" 
          aria-hidden="true" 
        />
        <div 
          className="absolute bottom-0 left-0 w-1/2 h-1/2 pointer-events-none opacity-25 bg-[radial-gradient(ellipse_at_20%_80%,rgba(71,21,63,0.08)_0%,transparent_60%)]" 
          aria-hidden="true" 
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Brand Story & CTAs (Expanded to 7 cols on desktop) */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
              
              {/* Brand Origin Label (Removed Pavitrani Jewellers, retained Varanasi) */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#C9A24A]/40 text-[#47153F] shadow-xs text-xs font-semibold tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#C9A24A]" />
                <span>Varanasi • Pure Jewellery Atelier</span>
              </div>

              {/* Main Headline: Pavitrani Jewellers */}
              <div className="space-y-3 sm:space-y-4">
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#47153F] font-bold leading-[1.1] tracking-tight">
                  Pavitrani <span className="text-[#47153F]">Jewellers</span>
                </h1>

                <p className="font-serif italic text-2xl sm:text-3xl text-[#C9A24A] font-normal tracking-wide">
                  Jewels as Pure as You
                </p>

                <p className="text-base sm:text-lg text-[#30232E]/80 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Discover thoughtfully selected gold and 925 silver jewellery, crafted to make every moment special.
                </p>
              </div>

              {/* Call to Actions */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={() => handleNav('collections')}
                  className="px-8 py-4 rounded-full bg-[#47153F] text-white hover:bg-[#381032] font-medium text-xs sm:text-sm tracking-wider uppercase transition-all shadow-md hover:shadow-xl flex items-center gap-2.5 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  <span>Explore Collections</span>
                  <ChevronRight className="w-4 h-4 text-[#C9A24A]" />
                </button>

                <button
                  onClick={() => handleNav('showroom')}
                  className="px-8 py-4 rounded-full bg-white text-[#47153F] hover:bg-[#FAF6EF] border border-[#47153F]/40 font-medium text-xs sm:text-sm tracking-wider uppercase transition-all shadow-xs hover:shadow-md flex items-center gap-2.5 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  <Store className="w-4 h-4 text-[#C9A24A]" />
                  <span>Visit Our Showroom</span>
                </button>
              </div>

              {/* Key Credentials Micro-Bar */}
              <div className="pt-8 border-t border-[#C9A24A]/25 grid grid-cols-3 gap-4 text-center lg:text-left">
                <div>
                  <p className="font-serif text-2xl sm:text-3xl font-bold text-[#47153F]">925 Silver</p>
                  <p className="text-[11px] text-[#30232E]/70 uppercase tracking-wider mt-1 font-medium">Certified Purity</p>
                </div>
                <div>
                  <p className="font-serif text-2xl sm:text-3xl font-bold text-[#47153F]">100% BIS</p>
                  <p className="text-[11px] text-[#30232E]/70 uppercase tracking-wider mt-1 font-medium">Hallmarked Gold</p>
                </div>
                <div>
                  <p className="font-serif text-2xl sm:text-3xl font-bold text-[#47153F]">Varanasi</p>
                  <p className="text-[11px] text-[#30232E]/70 uppercase tracking-wider mt-1 font-medium">BLW Road Landmark</p>
                </div>
              </div>

            </div>

            {/* Right Column: Hero Visual (Medium Proportioned Size - 5 cols) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
              <div className="relative w-full max-w-[340px] sm:max-w-[370px] mx-auto lg:mr-0">
                
                {/* Decorative Antique Gold Outer Halo */}
                <div 
                  className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#C9A24A]/20 via-transparent to-[#47153F]/10 blur-lg opacity-70 pointer-events-none" 
                  aria-hidden="true" 
                />

                {/* Medium-Sized Framed Visual Card */}
                <div className="relative rounded-2xl overflow-hidden bg-white p-3 shadow-xl border border-[#C9A24A]/30 w-full">
                  <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden group bg-[#2A1D27]">
                    
                    {/* The striking hero jewellery photograph */}
                    <img
                      src="/images/products/solitaire-teardrop-halo-bracelet.webp"
                      alt="Pavitrani Jewellers Solitaire Teardrop Halo Tennis Bracelet"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="eager"
                    />

                    {/* Elegant vignette gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Top Badges Stack (Zero Overlap Guaranteed) */}
                    <div className="absolute top-3 left-3 flex flex-col items-start gap-1.5 z-10 pointer-events-none">
                      <div className="bg-[#47153F]/90 backdrop-blur-md text-[#E8D8B7] text-[10px] sm:text-[11px] font-semibold px-2.5 py-1 rounded-full border border-[#C9A24A]/40 flex items-center gap-1.5 shadow-md">
                        <Sparkles className="w-3 h-3 text-[#C9A24A]" />
                        <span>Signature Showroom Creation</span>
                      </div>
                      <div className="bg-white/95 backdrop-blur-md text-[#47153F] text-[9px] sm:text-[10px] font-medium px-2 py-0.5 rounded-full border border-[#C9A24A]/30 shadow-xs flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3 text-[#C9A24A]" />
                        <span>Mayank Metal Works</span>
                      </div>
                    </div>

                    {/* Editorial Overlay Caption (Bottom) */}
                    <div className="absolute bottom-3 left-3 right-3 bg-black/65 backdrop-blur-md p-3.5 rounded-xl border border-white/15 text-white space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-semibold text-[#E8D8B7] uppercase tracking-widest">
                          925 Sterling Silver
                        </span>
                        <span className="text-[10px] text-white/80 font-mono">
                          HUID Hallmarked
                        </span>
                      </div>
                      <h3 className="font-serif text-lg sm:text-xl text-white font-medium">
                        Solitaire Teardrop Halo Tennis Bracelet
                      </h3>
                      <p className="text-[11px] text-white/85 line-clamp-2 font-light">
                        Handcrafted in certified 925 sterling silver with brilliant teardrop clusters.
                      </p>
                    </div>

                  </div>

                  {/* Micro-Footer Below Frame */}
                  <div className="mt-2.5 px-3 py-1.5 bg-[#FAF6EF] rounded-lg flex items-center justify-between text-xs text-[#30232E]/85 border border-[#C9A24A]/20">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="font-medium text-[11px]">In-Store Preview</span>
                    </span>
                    <button
                      onClick={() => {
                        const product = PRODUCTS.find(p => p.id === 'solitaire-teardrop-halo-bracelet');
                        if (product && onSelectProduct) onSelectProduct(product);
                      }}
                      className="text-[#47153F] hover:text-[#C9A24A] font-semibold uppercase tracking-wider text-[10px] flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <span>Quick View</span>
                      <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION B: SHOP BY COLLECTION
          4 Visually rich cards: Gold Jewellery, 925 Silver, Rings & Solitaires, Chains & Bracelets.
          Consistent 4/5 portrait ratio, smooth zoom, clear category transitions.
         ========================================================================= */}
      <section className="bg-white py-20 lg:py-24 border-b border-[#C9A24A]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Section Header */}
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF6EF] border border-[#C9A24A]/30 text-[#47153F] text-xs font-semibold uppercase tracking-widest">
              <Sparkles className="w-3 h-3 text-[#C9A24A]" />
              <span>Curated Portfolios</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#30232E] tracking-tight">
              Shop by Collection
            </h2>
            <div className="w-16 h-0.5 bg-[#C9A24A] mx-auto rounded-full" />
            <p className="text-sm sm:text-base text-[#30232E]/75 font-light leading-relaxed">
              Explore our signature selections, from timeless hallmarked gold to certified 925 sterling silver, crafted for celebrations and everyday elegance.
            </p>
          </div>

          {/* 4 Rich Collection Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            
            {/* Card 1: Gold Jewellery */}
            <div 
              onClick={() => handleCategoryClick('Fine Gold')}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-[#FAF6EF] shadow-luxury hover:shadow-luxury-hover border border-[#C9A24A]/25 transition-all duration-300 flex flex-col transform hover:-translate-y-1"
            >
              <div className="relative aspect-4/5 overflow-hidden bg-[#30232E]">
                <img 
                  src="/images/products/gold-bridal-necklace-sets.webp" 
                  alt="Fine Gold Jewellery Varanasi - Pavitrani Jewellers" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                <div className="absolute top-3 left-3 bg-[#47153F]/90 text-[#E8D8B7] text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border border-[#C9A24A]/40">
                  Hallmarked Heritage
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                  <h3 className="font-serif text-2xl font-bold">Gold Jewellery</h3>
                  <p className="text-xs text-white/80 line-clamp-2 font-light">
                    Bridal heirlooms, intricate necklace sets, and sacred gold ornaments hallmarked for pure trust.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-white flex-1 flex items-center justify-between border-t border-[#C9A24A]/15">
                <span className="text-xs font-semibold tracking-wider uppercase text-[#47153F] group-hover:text-[#C9A24A] transition-colors">
                  Explore Gold Pieces
                </span>
                <ChevronRight className="w-4 h-4 text-[#C9A24A] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 2: 925 Silver Jewellery */}
            <div 
              onClick={() => handleCategoryClick('925 Silver')}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-[#FAF6EF] shadow-luxury hover:shadow-luxury-hover border border-[#C9A24A]/25 transition-all duration-300 flex flex-col transform hover:-translate-y-1"
            >
              <div className="relative aspect-4/5 overflow-hidden bg-[#30232E]">
                <img 
                  src="/images/products/bracelet-royal-pave-tennis.webp" 
                  alt="925 Sterling Silver Jewellery Varanasi - Pavitrani Jewellers" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                <div className="absolute top-3 left-3 bg-[#47153F]/90 text-[#E8D8B7] text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border border-[#C9A24A]/40">
                  Certified 92.5% Purity
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                  <h3 className="font-serif text-2xl font-bold">925 Silver Jewellery</h3>
                  <p className="text-xs text-white/80 line-clamp-2 font-light">
                    Modern tennis bands, Italian snake links, and everyday ornaments in certified sterling silver.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-white flex-1 flex items-center justify-between border-t border-[#C9A24A]/15">
                <span className="text-xs font-semibold tracking-wider uppercase text-[#47153F] group-hover:text-[#C9A24A] transition-colors">
                  Explore Silver Pieces
                </span>
                <ChevronRight className="w-4 h-4 text-[#C9A24A] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 3: Rings & Solitaires */}
            <div 
              onClick={() => handleCategoryClick('Lab-Grown Diamonds')}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-[#FAF6EF] shadow-luxury hover:shadow-luxury-hover border border-[#C9A24A]/25 transition-all duration-300 flex flex-col transform hover:-translate-y-1"
            >
              <div className="relative aspect-4/5 overflow-hidden bg-[#30232E]">
                <img 
                  src="/images/products/bracelet-bowtie-sparkle-link.webp" 
                  alt="Rings and Solitaires Varanasi - Pavitrani Jewellers" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                <div className="absolute top-3 left-3 bg-[#47153F]/90 text-[#E8D8B7] text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border border-[#C9A24A]/40">
                  Signature Radiance
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                  <h3 className="font-serif text-2xl font-bold">Rings & Solitaires</h3>
                  <p className="text-xs text-white/80 line-clamp-2 font-light">
                    Precision-cut solitaires, halo pavé clusters, and statement rings engineered for lifelong fire.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-white flex-1 flex items-center justify-between border-t border-[#C9A24A]/15">
                <span className="text-xs font-semibold tracking-wider uppercase text-[#47153F] group-hover:text-[#C9A24A] transition-colors">
                  Explore Solitaires
                </span>
                <ChevronRight className="w-4 h-4 text-[#C9A24A] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 4: Chains & Bracelets */}
            <div 
              onClick={() => handleCategoryClick('Bracelets & Chains')}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-[#FAF6EF] shadow-luxury hover:shadow-luxury-hover border border-[#C9A24A]/25 transition-all duration-300 flex flex-col transform hover:-translate-y-1"
            >
              <div className="relative aspect-4/5 overflow-hidden bg-[#30232E]">
                <img 
                  src="/images/products/bracelets-collection-tray.webp" 
                  alt="Chains and Bracelets Varanasi - Pavitrani Jewellers" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                <div className="absolute top-3 left-3 bg-[#47153F]/90 text-[#E8D8B7] text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border border-[#C9A24A]/40">
                  Artisan Metallurgy
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                  <h3 className="font-serif text-2xl font-bold">Chains & Bracelets</h3>
                  <p className="text-xs text-white/80 line-clamp-2 font-light">
                    Commanding dual-tone links, Greek key meanders, and handcrafted filigree bracelets for every milestone.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-white flex-1 flex items-center justify-between border-t border-[#C9A24A]/15">
                <span className="text-xs font-semibold tracking-wider uppercase text-[#47153F] group-hover:text-[#C9A24A] transition-colors">
                  Explore Bracelets
                </span>
                <ChevronRight className="w-4 h-4 text-[#C9A24A] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION C: BRAND INTRODUCTION & HERITAGE
          Editorial layout introducing Pavitrani Jewellers & Varanasi heritage,
          tagline "Jewels as Pure as You", and real showroom VIP lounge photography.
         ========================================================================= */}
      <section className="bg-[#FAF6EF] py-20 lg:py-24 border-b border-[#C9A24A]/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left: Authentic Showroom Interior Visual */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                
                {/* Subtle Backdrop Accent */}
                <div 
                  className="absolute -inset-3 sm:-inset-4 rounded-3xl bg-[#C9A24A]/15 blur-xl pointer-events-none" 
                  aria-hidden="true" 
                />

                {/* Showroom Photo Container */}
                <div className="relative rounded-3xl overflow-hidden bg-white p-3 sm:p-4 shadow-xl border border-[#C9A24A]/30">
                  <div className="relative aspect-4/3 sm:aspect-16/10 rounded-2xl overflow-hidden bg-[#30232E]">
                    <img
                      src="/images/showroom/pavitrani-showroom-interior-luxury.webp"
                      alt="Pavitrani Jewellers Luxury Showroom VIP Salon on BLW Road Varanasi"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Floating Caption inside photo */}
                    <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10 text-white space-y-1">
                      <div className="flex items-center gap-2">
                        <Store className="w-3.5 h-3.5 text-[#C9A24A]" />
                        <span className="text-[11px] font-semibold text-[#E8D8B7] uppercase tracking-wider">
                          VIP Salon Experience
                        </span>
                      </div>
                      <p className="text-xs text-white/90 font-light">
                        Plush royal purple velvet seating designed for private, unhurried family consultations on BLW Road.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Right: Narrative & Metallurgical Heritage */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#C9A24A]/30 text-[#47153F] text-xs font-semibold uppercase tracking-widest">
                  <Award className="w-3.5 h-3.5 text-[#C9A24A]" />
                  <span>Heritage & Craftsmanship</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#30232E] leading-tight">
                  Rooted in Varanasi's Metallurgical Legacy
                </h2>
                <p className="font-serif italic text-2xl sm:text-3xl text-[#C9A24A] font-normal">
                  “Jewels as Pure as You”
                </p>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-[#30232E]/80 font-light leading-relaxed">
                <p>
                  <strong className="text-[#47153F] font-semibold">Pavitrani Jewellers</strong> was founded as a premier jewellery destination in Varanasi, proudly operating as <strong className="text-[#47153F] font-medium">A Unit of Mayank Metal Works</strong>.
                </p>
                <p>
                  Combining decades of industrial metallurgical mastery with sacred Banarasi jewellery traditions, we craft ornaments that represent uncompromising purity. Every piece of gold is 100% BIS Hallmarked, every silver design is certified 925 sterling, and all religious silverware is crafted for lifetime sacred use.
                </p>
                <p>
                  We invite you to experience our dedicated air-conditioned showroom on B.L.W Road near Kabir Ashram, where transparent pricing and family warmth define every consultation.
                </p>
              </div>

              {/* Credential Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white border border-[#C9A24A]/25 shadow-xs">
                  <p className="font-serif text-2xl font-bold text-[#47153F]">Decades</p>
                  <p className="text-xs text-[#30232E]/70 font-medium mt-0.5">Metallurgical Mastery</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-[#C9A24A]/25 shadow-xs">
                  <p className="font-serif text-2xl font-bold text-[#47153F]">100%</p>
                  <p className="text-xs text-[#30232E]/70 font-medium mt-0.5">Hallmarked Purity</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-[#C9A24A]/25 shadow-xs col-span-2 sm:col-span-1">
                  <p className="font-serif text-2xl font-bold text-[#47153F]">500+</p>
                  <p className="text-xs text-[#30232E]/70 font-medium mt-0.5">Showroom Designs</p>
                </div>
              </div>

              {/* Link CTA */}
              <div className="pt-2">
                <button
                  onClick={() => handleNav('about')}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#47153F] text-white hover:bg-[#381032] font-semibold text-xs tracking-wider uppercase transition-all shadow-md hover:shadow-lg cursor-pointer"
                >
                  <span>Read Our Full Story & Values</span>
                  <ChevronRight className="w-4 h-4 text-[#C9A24A]" />
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION D: FEATURED JEWELLERY GALLERY
          Curated spotlight of 6 verified items with Quick View and WhatsApp enquiry.
         ========================================================================= */}
      <section className="bg-white py-20 lg:py-24 border-b border-[#C9A24A]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#C9A24A]/20 pb-8">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF6EF] border border-[#C9A24A]/30 text-[#47153F] text-xs font-semibold uppercase tracking-widest">
                <Sparkles className="w-3 h-3 text-[#C9A24A]" />
                <span>Showroom Spotlight</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#30232E] tracking-tight">
                Featured Showroom Pieces
              </h2>
              <p className="text-sm sm:text-base text-[#30232E]/75 font-light leading-relaxed">
                Handcrafted masterpieces selected from our active Varanasi inventory, each embodying our hallmark of purity.
              </p>
            </div>

            <button
              onClick={() => handleNav('collections')}
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#47153F] hover:text-[#C9A24A] transition-colors cursor-pointer self-start md:self-auto"
            >
              <span>Explore All Showroom Designs (12 Pieces)</span>
              <ChevronRight className="w-4 h-4 text-[#C9A24A]" />
            </button>
          </div>

          {/* 6 Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-[#FAF6EF] rounded-2xl overflow-hidden shadow-luxury hover:shadow-luxury-hover border border-[#C9A24A]/25 transition-all duration-300 flex flex-col transform hover:-translate-y-1"
              >
                {/* Image Container with Dark Contrast for Jewellery Polish */}
                <div className="relative aspect-square overflow-hidden bg-[#241722] p-4 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />

                  {/* Metal Badge */}
                  <div className="absolute top-3 left-3 bg-[#47153F]/90 backdrop-blur-md text-[#E8D8B7] text-[10px] font-semibold px-2.5 py-1 rounded-full border border-[#C9A24A]/40">
                    {product.badge}
                  </div>

                  {/* Tag Badge */}
                  {product.tag && (
                    <div className="absolute top-3 right-3 bg-[#C9A24A] text-[#30232E] text-[10px] font-bold px-2 py-0.5 rounded shadow-xs uppercase tracking-wider">
                      {product.tag}
                    </div>
                  )}
                </div>

                {/* Content Container */}
                <div className="p-5 bg-white flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-semibold text-[#C9A24A] uppercase tracking-wider">
                      {product.category}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[#30232E] group-hover:text-[#47153F] transition-colors line-clamp-1">
                      {product.title}
                    </h3>
                    <p className="text-xs text-[#30232E]/70 line-clamp-2 leading-relaxed font-light">
                      {product.description}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-3 border-t border-gray-100 flex items-center gap-2">
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="flex-1 py-2.5 px-3 rounded-xl bg-[#FAF6EF] hover:bg-[#47153F] hover:text-white text-[#47153F] border border-[#C9A24A]/30 text-xs font-semibold tracking-wide transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Quick View</span>
                    </button>

                    <a
                      href={`https://wa.me/91${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(
                        `Hello Pavitrani Jewellers, I would like to enquire about: "${product.title}". Please share availability and details.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-medium flex items-center justify-center gap-1.5 transition-all shadow-xs"
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


      {/* =========================================================================
          SECTION E: WHY CHOOSE PAVITRANI (TRUST & QUALITY PILLARS)
          Authentic, verifiable strengths: BIS Hallmark, 925 Silver,
          Mayank Metal Works legacy, precision electronic weighing, direct pricing.
         ========================================================================= */}
      <section className="bg-[#FAF6EF] py-20 lg:py-24 border-b border-[#C9A24A]/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#C9A24A]/30 text-[#47153F] text-xs font-semibold uppercase tracking-widest">
              <ShieldCheck className="w-3 h-3 text-[#C9A24A]" />
              <span>The Pavitrani Promise</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#30232E] tracking-tight">
              Why Families Across Varanasi Choose Us
            </h2>
            <div className="w-16 h-0.5 bg-[#C9A24A] mx-auto rounded-full" />
            <p className="text-sm sm:text-base text-[#30232E]/75 font-light leading-relaxed">
              Genuine metallurgy, open electronic weighing, and ethical pricing with zero hidden retail markups.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            
            {/* Pillar 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-luxury border border-[#C9A24A]/25 flex flex-col space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#47153F]/10 border border-[#C9A24A]/30 flex items-center justify-center text-[#47153F]">
                <ShieldCheck className="w-6 h-6 text-[#C9A24A]" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#30232E]">
                BIS Hallmarked Gold
              </h4>
              <p className="text-xs text-[#30232E]/75 leading-relaxed font-light">
                100% certified purity with official government HUID registration for total peace of mind.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-luxury border border-[#C9A24A]/25 flex flex-col space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#47153F]/10 border border-[#C9A24A]/30 flex items-center justify-center text-[#47153F]">
                <Sparkles className="w-6 h-6 text-[#C9A24A]" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#30232E]">
                925 Sterling Silver
              </h4>
              <p className="text-xs text-[#30232E]/75 leading-relaxed font-light">
                Guaranteed 92.5% pure silver with anti-tarnish rhodium plating for brilliant lifelong lustre.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-luxury border border-[#C9A24A]/25 flex flex-col space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#47153F]/10 border border-[#C9A24A]/30 flex items-center justify-center text-[#47153F]">
                <Award className="w-6 h-6 text-[#C9A24A]" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#30232E]">
                Mayank Metal Works Legacy
              </h4>
              <p className="text-xs text-[#30232E]/75 leading-relaxed font-light">
                Generations of metallurgical manufacturing integrity and industrial trust in Varanasi.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="bg-white rounded-2xl p-6 shadow-luxury border border-[#C9A24A]/25 flex flex-col space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#47153F]/10 border border-[#C9A24A]/30 flex items-center justify-center text-[#47153F]">
                <Scale className="w-6 h-6 text-[#C9A24A]" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#30232E]">
                Precision Digital Weighing
              </h4>
              <p className="text-xs text-[#30232E]/75 leading-relaxed font-light">
                Open, transparent measurement on calibrated electronic balances directly in your view.
              </p>
            </div>

            {/* Pillar 5 */}
            <div className="bg-white rounded-2xl p-6 shadow-luxury border border-[#C9A24A]/25 flex flex-col space-y-3 md:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 rounded-xl bg-[#47153F]/10 border border-[#C9A24A]/30 flex items-center justify-center text-[#47153F]">
                <Gem className="w-6 h-6 text-[#C9A24A]" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#30232E]">
                Direct Honest Pricing
              </h4>
              <p className="text-xs text-[#30232E]/75 leading-relaxed font-light">
                Direct showroom rates with clear making charges and zero inflated luxury markups.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION F: SHOWROOM EXPERIENCE (VARANASI SHOWROOM TOUR)
          Real photos of the showroom (facade, VIP salon, display counters),
          address, Google Maps integration, directions CTA, visit showroom CTA.
         ========================================================================= */}
      <section className="bg-white py-20 lg:py-24 border-b border-[#C9A24A]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF6EF] border border-[#C9A24A]/30 text-[#47153F] text-xs font-semibold uppercase tracking-widest">
              <Store className="w-3 h-3 text-[#C9A24A]" />
              <span>In-Store Experience</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#30232E] tracking-tight">
              Visit Our Grand Varanasi Showroom
            </h2>
            <div className="w-16 h-0.5 bg-[#C9A24A] mx-auto rounded-full" />
            <p className="text-sm sm:text-base text-[#30232E]/75 font-light leading-relaxed">
              Centrally situated on B.L.W Road near Kabir Ashram. A modern haven of heritage jewellery and warm hospitality.
            </p>
          </div>

          {/* 3 Real Showroom Photos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Showroom Facade */}
            <div className="relative rounded-2xl overflow-hidden aspect-4/3 shadow-luxury group bg-[#30232E]">
              <img
                src="/images/showroom/pavitrani-showroom-facade-night.webp"
                alt="Pavitrani Jewellers Varanasi Showroom Front Facade Night View"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] text-[#E8D8B7] font-semibold uppercase tracking-wider">
                  Storefront Elevation
                </span>
                <h4 className="font-serif text-lg font-bold">Grand Illuminated Facade</h4>
                <p className="text-[11px] text-white/75 font-light">Prominent evening landmark on BLW Road</p>
              </div>
            </div>

            {/* Showroom VIP Salon */}
            <div className="relative rounded-2xl overflow-hidden aspect-4/3 shadow-luxury group bg-[#30232E]">
              <img
                src="/images/showroom/pavitrani-showroom-interior-luxury.webp"
                alt="Pavitrani Jewellers VIP Private Consultation Lounge"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] text-[#E8D8B7] font-semibold uppercase tracking-wider">
                  Private Salon
                </span>
                <h4 className="font-serif text-lg font-bold">Royal Purple Velvet Lounge</h4>
                <p className="text-[11px] text-white/75 font-light">Air-conditioned family viewing sanctuary</p>
              </div>
            </div>

            {/* Showroom Display Galleries */}
            <div className="relative rounded-2xl overflow-hidden aspect-4/3 shadow-luxury group bg-[#30232E]">
              <img
                src="/images/showroom/pavitrani-showroom-interior-counters.webp"
                alt="Pavitrani Jewellers Silverware and Jewellery Display Counters"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] text-[#E8D8B7] font-semibold uppercase tracking-wider">
                  Curated Galleries
                </span>
                <h4 className="font-serif text-lg font-bold">Pure Silver & Gold Alcoves</h4>
                <p className="text-[11px] text-white/75 font-light">Over 500+ designs displayed in full view</p>
              </div>
            </div>

          </div>

          {/* Showroom Information & Action Bar */}
          <div className="bg-[#FAF6EF] rounded-2xl p-6 sm:p-8 border border-[#C9A24A]/25 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#C9A24A] shrink-0 mt-0.5" />
              <div>
                <h5 className="font-semibold text-sm text-[#47153F]">Address</h5>
                <p className="text-xs text-[#30232E]/80 mt-0.5 leading-relaxed">
                  81/1 Shivdaspur, B.L.W Road, Near Kabir Ashram, Varanasi, U.P. 221004
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-[#C9A24A] shrink-0 mt-0.5" />
              <div>
                <h5 className="font-semibold text-sm text-[#47153F]">Timings</h5>
                <p className="text-xs text-[#30232E]/80 mt-0.5">
                  Monday – Sunday: 10:30 AM to 8:30 PM
                </p>
                <span className="text-[11px] text-emerald-700 font-semibold">Open All 7 Days</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-white hover:bg-[#FAF6EF] text-[#47153F] border border-[#C9A24A]/40 text-xs font-semibold tracking-wide text-center transition-all flex items-center justify-center gap-1.5 shadow-xs"
              >
                <Compass className="w-4 h-4 text-[#C9A24A]" />
                <span>Get Directions</span>
              </a>

              <button
                onClick={() => handleNav('showroom')}
                className="flex-1 py-3 px-4 rounded-xl bg-[#47153F] hover:bg-[#381032] text-white text-xs font-semibold tracking-wide text-center transition-all shadow-xs cursor-pointer"
              >
                <span>Virtual Tour</span>
              </button>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION G: CUSTOMER TESTIMONIALS
          Real customer feedback from TESTIMONIALS in src/data/business.js
         ========================================================================= */}
      <section className="bg-[#FAF6EF] py-20 lg:py-24 border-b border-[#C9A24A]/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#C9A24A]/30 text-[#47153F] text-xs font-semibold uppercase tracking-widest">
              <Star className="w-3 h-3 text-[#C9A24A] fill-[#C9A24A]" />
              <span>Customer Voices</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#30232E] tracking-tight">
              Words of Trust From Varanasi Patrons
            </h2>
            <div className="w-16 h-0.5 bg-[#C9A24A] mx-auto rounded-full" />
            <p className="text-sm sm:text-base text-[#30232E]/75 font-light leading-relaxed">
              Nothing honours us more than the enduring trust of families who choose Pavitrani for life's most sacred moments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-2xl p-6 shadow-luxury border border-[#C9A24A]/25 flex flex-col justify-between space-y-4"
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


      {/* =========================================================================
          SECTION H: FINAL ENQUIRY & SHOWROOM INVITATION
          Luxury closing section inviting showroom visit or WhatsApp chat,
          with embedded interactive ContactForm.
         ========================================================================= */}
      <section className="bg-[#47153F] text-white py-20 lg:py-24 border-b border-[#C9A24A]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            
            {/* Showroom Direct Invitation */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-[#C9A24A]/40 text-[#E8D8B7] text-xs font-semibold uppercase tracking-widest">
                  <Sparkles className="w-3.5 h-3.5 text-[#C9A24A]" />
                  <span>Begin Your Journey</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
                  We Welcome You to Pavitrani
                </h2>
                <p className="font-serif italic text-2xl text-[#E8D8B7] font-normal">
                  “Jewels as Pure as You”
                </p>
                <p className="text-sm sm:text-base text-white/85 font-light leading-relaxed pt-1">
                  Whether selecting a sacred silver artefact for your home mandir, acquiring certified 925 silver tennis bracelets, or commissioning bespoke gold bridal jewellery, our family welcomes you to our Varanasi showroom.
                </p>
              </div>

              {/* Quick Contact Info */}
              <div className="space-y-4 bg-white/5 p-6 rounded-2xl border border-white/10 text-xs text-white/85">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C9A24A] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-semibold text-sm text-[#E8D8B7]">Showroom Address</h5>
                    <p className="mt-0.5 text-white/80">
                      81/1 Shivdaspur B.L.W Road, Near Kabir Ashram, Varanasi, U.P. 221004
                    </p>
                    <a
                      href={BUSINESS_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-1 text-[#E8D8B7] font-medium hover:underline"
                    >
                      <span>Open in Google Maps Navigation</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#C9A24A] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-semibold text-sm text-[#E8D8B7]">Direct Phone Support</h5>
                    <p className="mt-0.5 text-white/80">
                      Primary: <a href={`tel:+91${BUSINESS_INFO.phone}`} className="font-semibold text-white underline">{BUSINESS_INFO.phoneDisplay}</a>
                    </p>
                    <p className="text-white/80">
                      Secondary: <a href={`tel:+91${BUSINESS_INFO.phoneSecondary}`} className="text-white/90">{BUSINESS_INFO.phoneSecondaryDisplay}</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#C9A24A] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-semibold text-sm text-[#E8D8B7]">Showroom Timings</h5>
                    <p className="mt-0.5 text-white/80">Monday to Sunday: 10:30 AM to 8:30 PM</p>
                    <p className="text-emerald-400 font-medium">Open All 7 Days</p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout Banner */}
              <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-[#C9A24A]/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-lg">
                <div>
                  <p className="text-xs text-[#E8D8B7] uppercase font-semibold tracking-wider">
                    Instant Showroom Assistance
                  </p>
                  <p className="text-sm text-white font-medium mt-0.5">
                    Connect directly with our jewellery advisor
                  </p>
                </div>
                <a
                  href={BUSINESS_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs flex items-center gap-2 shadow-md transition-all shrink-0"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

            </div>

            {/* Interactive Contact / Enquiry Form Container */}
            <div className="lg:col-span-7 bg-white text-[#30232E] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#C9A24A]/30">
              <ContactForm defaultInterest="General Enquiry" />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
