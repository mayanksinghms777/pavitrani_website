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
    <div className="space-y-12">
      
      {/* 1. Header Banner (Royal Plum - Flush under header with zero gap) */}
      <section className="bg-[#44003B] text-[#FAF6EF] pt-14 pb-24 px-4 sm:px-6 lg:px-8 border-b border-[#C9A24A]/30 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#C9A24A]/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#C9A24A]/40 text-[#E8D8B7] text-xs font-medium">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A24A]" />
            <span>Showroom Gallery & Catalogue</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white">
            Jewellery Collections
          </h1>

          <p className="text-sm sm:text-base text-[#FAF6EF]/85 max-w-2xl mx-auto font-light leading-relaxed font-sans">
            Explore authentic jewellery photographed straight from our Varanasi showroom inventory. Every piece exemplifies our motto: <span className="italic text-[#E8D8B7]">"Jewels as Pure as You"</span>.
          </p>
        </div>
      </section>

      {/* 2. Interactive Filter & Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-14 relative z-20">
        <div className="bg-white rounded-2xl shadow-luxury border border-[#C9A24A]/30 p-4 sm:p-6 space-y-4">
          
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
                className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-gray-300 text-xs sm:text-sm focus:border-[#C9A24A] focus:ring-2 focus:ring-[#C9A24A]/25 outline-none font-sans"
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

            <div className="text-xs text-[#30232E]/70 font-sans flex items-center gap-2">
              <Filter className="w-3.5 h-3.5 text-[#C9A24A]" />
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
                      ? 'bg-[#44003B] text-[#FAF6EF] shadow-xs border border-[#C9A24A]/40'
                      : 'bg-[#FAF6EF] text-[#30232E] hover:bg-[#E8D8B7]/40 border border-gray-200'
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
          <div className="bg-white rounded-2xl p-12 text-center space-y-4 border border-gray-200 max-w-md mx-auto my-8 shadow-sm">
            <div className="w-12 h-12 bg-[#FAF6EF] text-[#C9A24A] rounded-full flex items-center justify-center mx-auto border border-[#C9A24A]/30">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#44003B]">No Matching Designs Found</h3>
            <p className="text-xs text-gray-500 font-sans">
              Try adjusting your search terms or select "All Collections" to explore our full inventory.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveFilter(null);
              }}
              className="px-4 py-2 bg-[#44003B] text-[#FAF6EF] rounded-xl text-xs font-semibold hover:bg-[#30232E] transition-colors"
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
                  className="group bg-white rounded-2xl overflow-hidden shadow-luxury hover:shadow-luxury-hover border border-[#C9A24A]/25 transition-all duration-300 flex flex-col"
                >
                  {/* Image Container with Quick View Hover Trigger */}
                  <div 
                    onClick={() => onSelectProduct(product)}
                    className="relative aspect-4/5 overflow-hidden bg-[#30232E] p-3 flex items-center justify-center cursor-pointer group"
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-contain filter drop-shadow group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />

                    {/* Badge */}
                    <div className="absolute top-3 left-3 bg-[#44003B]/90 text-[#E8D8B7] text-[10px] font-semibold px-2.5 py-1 rounded-full border border-[#C9A24A]/40 shadow-xs">
                      {product.badge}
                    </div>

                    {product.tag && (
                      <div className="absolute top-3 right-3 bg-[#C9A24A] text-[#44003B] text-[10px] font-bold px-2.5 py-0.5 rounded shadow-xs">
                        {product.tag}
                      </div>
                    )}

                    {/* Quick View Button on Hover */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                      <span className="px-4 py-2 rounded-full bg-[#FAF6EF] text-[#44003B] text-xs font-semibold flex items-center gap-1.5 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        <Eye className="w-3.5 h-3.5 text-[#C9A24A]" />
                        <span>Quick View & Details</span>
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[11px] font-medium text-[#C9A24A]">
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
                        className="font-serif text-lg font-bold text-[#44003B] group-hover:text-[#C9A24A] transition-colors cursor-pointer line-clamp-1"
                      >
                        {product.title}
                      </h3>

                      <p className="text-xs text-[#30232E]/75 line-clamp-2 leading-relaxed font-sans">
                        {product.description}
                      </p>

                      {/* Key highlights bullet preview */}
                      {product.highlights && product.highlights.length > 0 && (
                        <ul className="pt-1 space-y-1 text-[11px] text-[#30232E]/65 font-sans">
                          <li className="flex items-center gap-1.5 truncate">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A24A] shrink-0" />
                            <span className="truncate">{product.highlights[0]}</span>
                          </li>
                          {product.highlights[1] && (
                            <li className="flex items-center gap-1.5 truncate">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A24A] shrink-0" />
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
                        className="flex-1 py-2.5 px-3 rounded-xl bg-[#FAF6EF] hover:bg-[#44003B] hover:text-[#FAF6EF] text-[#44003B] border border-[#C9A24A]/30 text-xs font-semibold tracking-wide transition-all text-center"
                      >
                        Details
                      </button>

                      <a
                        href={`https://wa.me/91${BUSINESS_INFO.whatsapp}?text=${whatsappMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium flex items-center justify-center gap-1.5 transition-all shadow-xs"
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-[#FAF6EF] rounded-2xl p-6 border border-[#C9A24A]/30 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#30232E]/80 shadow-xs">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#C9A24A] shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-sm text-[#44003B]">
                Authentic Photography & Transparent Information
              </h4>
              <p className="mt-0.5 text-[#30232E]/70 max-w-2xl font-sans leading-relaxed">
                In strict adherence to consumer trust, all photos represent authentic jewellery and silverware from our Varanasi showroom. Metal rates, exact weights, and specifications are confirmed directly at the showroom upon physical inspection.
              </p>
            </div>
          </div>

          <a
            href={BUSINESS_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-[#44003B] hover:bg-[#30232E] text-[#FAF6EF] text-xs font-semibold tracking-wide transition-all flex items-center gap-1.5 shadow"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Ask About Any Custom Piece</span>
          </a>
        </div>
      </section>

    </div>
  );
}
