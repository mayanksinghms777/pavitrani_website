import React, { useState, useMemo } from 'react';
import { 
  Sparkles, 
  Search, 
  MessageCircle, 
  Eye, 
  CheckCircle2, 
  ShieldCheck, 
  X,
  Filter
} from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { BUSINESS_INFO } from '../data/business';

export default function CollectionsPage({ onSelectProduct, activeFilter, setActiveFilter }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubCategory, setSelectedSubCategory] = useState('All');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      // Category match
      const categoryMatch = 
        !activeFilter || 
        activeFilter === 'All Collections' || 
        item.category === activeFilter ||
        item.subCategory?.includes(activeFilter);

      // Search match
      const searchMatch = 
        !searchQuery.trim() ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.badge?.toLowerCase().includes(searchQuery.toLowerCase());

      return categoryMatch && searchMatch;
    });
  }, [activeFilter, searchQuery]);

  return (
    <div className="space-y-12 py-8">
      
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-b from-[#2D0A27] via-[#22051E] to-[#FAF8F5] text-[#FAF8F5] pt-12 pb-20 px-4 sm:px-6 lg:px-8 border-b border-[#C5A059]/20 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#C5A059]/40 text-[#E0C17E] text-xs font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Showroom Gallery & Catalogue</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white">
            Jewellery Collections
          </h1>

          <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto font-light leading-relaxed font-sans">
            Explore authentic jewellery photographed straight from our Varanasi showroom inventory. Every piece exemplifies our motto: <span className="italic text-[#E0C17E]">"Jewels as Pure as You"</span>.
          </p>
        </div>
      </section>

      {/* 2. Interactive Filter & Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-14 relative z-20">
        <div className="bg-white rounded-2xl shadow-luxury border border-[#C5A059]/30 p-4 sm:p-6 space-y-4">
          
          {/* Search Input & Info */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full sm:w-96">
              <Search className="absolute left-3.5 top-3 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search silver bracelets, peacocks, chains, gold..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-gray-300 text-xs sm:text-sm focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/30 outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="text-xs text-gray-500 font-sans flex items-center gap-2">
              <Filter className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Showing <strong>{filteredProducts.length}</strong> authentic showroom designs</span>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isSelected = (!activeFilter && cat === 'All Collections') || activeFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveFilter(cat === 'All Collections' ? null : cat);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-[#2D0A27] text-[#E0C17E] shadow border border-[#C5A059]/50'
                      : 'bg-[#FAF8F5] text-gray-700 hover:bg-[#EFE9DF] border border-gray-200'
                  }`}
                >
                  <span>{cat}</span>
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center space-y-4 border border-gray-200 max-w-md mx-auto my-8">
            <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mx-auto">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-gray-900">No Matching Designs Found</h3>
            <p className="text-xs text-gray-500 font-sans">
              Try adjusting your search terms or select "All Collections" to explore our full inventory.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveFilter(null);
              }}
              className="px-4 py-2 bg-[#2D0A27] text-[#E0C17E] rounded-xl text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => {
              const whatsappMessage = encodeURIComponent(
                `Hello Pavitrani Jewellers, I am interested in "${product.title}" featured on your website. Please share availability and details at your Varanasi showroom.`
              );

              return (
                <div
                  key={product.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-luxury hover:shadow-luxury-hover border border-[#C5A059]/25 transition-all duration-300 flex flex-col"
                >
                  {/* Image Container with Quick View Hover Trigger */}
                  <div 
                    onClick={() => onSelectProduct(product)}
                    className="relative aspect-4/5 overflow-hidden bg-[#180415] p-3 flex items-center justify-center cursor-pointer group"
                  >
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
                      <div className="absolute top-3 right-3 bg-amber-500 text-[#180415] text-[10px] font-bold px-2.5 py-0.5 rounded shadow">
                        {product.tag}
                      </div>
                    )}

                    {/* Quick View Button on Hover */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                      <span className="px-4 py-2 rounded-full bg-[#FAF8F5] text-[#2D0A27] text-xs font-semibold flex items-center gap-1.5 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        <Eye className="w-3.5 h-3.5 text-[#C5A059]" />
                        <span>Quick View & Details</span>
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[11px] font-medium text-[#8B6722]">
                        <span className="uppercase tracking-wider">{product.category}</span>
                        {product.inStock && (
                          <span className="text-emerald-700 font-semibold flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
                            Showroom Stock
                          </span>
                        )}
                      </div>

                      <h3 
                        onClick={() => onSelectProduct(product)}
                        className="font-serif text-lg font-bold text-[#2D0A27] group-hover:text-[#8B6722] transition-colors cursor-pointer line-clamp-1"
                      >
                        {product.title}
                      </h3>

                      <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed font-sans">
                        {product.description}
                      </p>

                      {/* Key highlights bullet preview */}
                      {product.highlights && product.highlights.length > 0 && (
                        <ul className="pt-1 space-y-1 text-[11px] text-gray-500 font-sans">
                          <li className="flex items-center gap-1.5 truncate">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                            <span className="truncate">{product.highlights[0]}</span>
                          </li>
                          {product.highlights[1] && (
                            <li className="flex items-center gap-1.5 truncate">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                              <span className="truncate">{product.highlights[1]}</span>
                            </li>
                          )}
                        </ul>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="pt-3 border-t border-gray-100 flex items-center gap-2">
                      <button
                        onClick={() => onSelectProduct(product)}
                        className="flex-1 py-2.5 px-3 rounded-xl bg-gray-100 hover:bg-[#2D0A27] hover:text-white text-gray-800 text-xs font-semibold tracking-wide transition-all text-center"
                      >
                        Details
                      </button>

                      <a
                        href={`https://wa.me/91${BUSINESS_INFO.whatsapp}?text=${whatsappMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600 text-white text-xs font-medium flex items-center justify-center gap-1.5 transition-all shadow"
                        title="Enquire directly on WhatsApp"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Enquire</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* 4. Transparent Disclaimer Notice */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF8F5] rounded-2xl p-6 border border-[#C5A059]/30 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-700">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-sm text-[#2D0A27]">
                Authentic Photography & Transparent Information
              </h4>
              <p className="mt-0.5 text-gray-600 max-w-2xl font-sans">
                In strict adherence to consumer trust, all photos represent authentic jewellery and silverware from our Varanasi showroom. Metal rates, exact weights, and specifications are confirmed directly at the showroom upon physical inspection.
              </p>
            </div>
          </div>

          <a
            href={BUSINESS_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-[#2D0A27] hover:bg-[#3E0E35] text-[#E0C17E] text-xs font-semibold tracking-wide transition-all flex items-center gap-1.5 shadow"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ask About Any Custom Piece</span>
          </a>
        </div>
      </section>

    </div>
  );
}
