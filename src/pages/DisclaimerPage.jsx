import React from 'react';
import { AlertCircle, ShieldCheck, Scale, FileText, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

export default function DisclaimerPage({ setActivePage }) {
  return (
    <div className="space-y-12 bg-[#FAF6EF]">
      
      {/* Header (Warm Ivory Luxury Editorial Header) */}
      <section className="bg-[#FAF6EF] text-[#30232E] pt-12 pb-16 sm:pt-16 sm:pb-20 px-4 sm:px-6 lg:px-8 border-b border-[#C9A24A]/25 text-center relative overflow-hidden">
        {/* Subtle Luxury Ambient Sheen */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(201,162,74,0.15)_0%,transparent_65%)] pointer-events-none" />

        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#C9A24A]/40 text-[#47153F] text-xs font-semibold uppercase tracking-widest shadow-xs">
            <FileText className="w-3.5 h-3.5 text-[#C9A24A]" />
            <span>Official Legal Notice</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#30232E]">
            Product & Pricing <span className="text-[#47153F]">Disclaimer</span>
          </h1>

          <p className="font-serif italic text-xl sm:text-2xl text-[#C9A24A] font-normal tracking-wide">
            “Jewels as Pure as You”
          </p>

          <p className="text-sm sm:text-base text-[#30232E]/80 max-w-2xl mx-auto font-light leading-relaxed font-sans">
            Important information regarding product representations, daily precious metal market price variations, and showroom confirmations for Pavitrani Jewellers.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pb-16">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-luxury border border-[#C9A24A]/25 space-y-8 text-left text-[#30232E]/85 leading-relaxed font-sans text-sm">
          
          <div className="p-4 rounded-xl bg-[#FAF6EF] border border-[#C9A24A]/30 flex items-start gap-3 text-[#30232E]">
            <AlertCircle className="w-5 h-5 text-[#C9A24A] shrink-0 mt-0.5" />
            <p className="text-xs leading-relaxed">
              <strong>Important Summary:</strong> All jewellery photographs, descriptions, and catalogues displayed on this website represent authentic pieces from Pavitrani Jewellers. However, due to daily metal market fluctuations and handcrafted artisanal variations, final product weights, dimensions, stone metrics, availability, and prices must always be confirmed directly with our showroom on B.L.W Road, Varanasi.
            </p>
          </div>

          {/* Section 1 */}
          <div className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-[#47153F] flex items-center gap-2">
              <span className="text-[#C9A24A]">1.</span> Product Representations & Photography
            </h2>
            <p>
              All photographs featured across <strong>pavitrani.com</strong> are authentic images of our actual inventory, showroom displays, and handcrafted creations. We strictly do not generate artificial product images or misrepresent our merchandise.
            </p>
            <p>
              However, because fine jewellery involves reflective precious metals (925 sterling silver, hallmarked gold) and multifaceted stones, photographic colors, lustres, and dimensions may vary slightly depending on monitor color calibration, ambient showroom illumination, and screen resolutions.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-[#47153F] flex items-center gap-2">
              <span className="text-[#C9A24A]">2.</span> Daily Precious Metal Price Fluctuation
            </h2>
            <p>
              Precious metal market rates (Gold 24K, 22K, 18K and Fine Silver 999, Sterling Silver 925) change continuously throughout trading hours based on national bullion exchanges and international market indices.
            </p>
            <p>
              Prices shown, quoted via online channels, or discussed on social media represent indicative estimates at a particular point in time. The definitive transaction price is calculated in real time at the billing terminal of our Varanasi showroom based on the official prevailing bullion rate at the moment of billing, certified weight, making charges, and applicable statutory GST (3%).
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-[#47153F] flex items-center gap-2">
              <span className="text-[#C9A24A]">3.</span> Handcrafted Weight & Metric Variances
            </h2>
            <p>
              Each piece of jewellery and silver artefact at Pavitrani Jewellers is handcrafted by seasoned master artisans. Due to the nature of manual metal casting, filigree work, stone setting, and hand polishing:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs">
              <li>Final physical weights may vary slightly from catalogue references (typically ±2% to 5%).</li>
              <li>Dimensions and stone carat weights are approximate and confirmed on calibrated digital scales during showroom inspection.</li>
              <li>Custom orders and adjustments are subject to individual craftsman specifications agreed upon during order placement.</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-[#47153F] flex items-center gap-2">
              <span className="text-[#C9A24A]">4.</span> In-Stock Availability & Reservations
            </h2>
            <p>
              Because our showroom maintains an active retail customer base on B.L.W Road, stock availability changes constantly. While we endeavor to keep the website catalogue synchronized with our vault inventory, pieces can be sold before online status updates.
            </p>
            <p>
              To confirm that an item is currently available in the showroom before travelling, please connect with us directly via WhatsApp (+91 9335093572) or call our helpdesk (+91 9335093572).
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-[#47153F] flex items-center gap-2">
              <span className="text-[#C9A24A]">5.</span> Hallmarking & Quality Certification
            </h2>
            <p>
              Pavitrani Jewellers adheres unconditionally to Bureau of Indian Standards (BIS) hallmarking guidelines for gold jewellery and purity certification for 925 sterling silver ornaments. Every patron receives an authentic computerized GST tax invoice documenting metal purity, gross weight, net weight, stone details, and hallmark identification.
            </p>
          </div>

          {/* Section 6 */}
          <div className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-[#47153F] flex items-center gap-2">
              <span className="text-[#C9A24A]">6.</span> Contact for Pricing & Order Clarifications
            </h2>
            <p>
              If you have any questions or require an exact quote based on today's live metal rates, our team is available to assist:
            </p>
            <div className="p-4 rounded-xl bg-[#FAF6EF] border border-[#C9A24A]/25 space-y-2 text-xs">
              <p><strong>Showroom Address:</strong> 81/1 Shivdaspur B.L.W Road Near Kabir Ashram, Varanasi, U.P. 221004</p>
              <p><strong>Telephone:</strong> {BUSINESS_INFO.phoneDisplay} / {BUSINESS_INFO.phoneSecondaryDisplay || BUSINESS_INFO.secondaryPhoneDisplay}</p>
              <p><strong>Email:</strong> {BUSINESS_INFO.email}</p>
              <p><strong>GSTIN:</strong> {BUSINESS_INFO.gstin}</p>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs text-gray-500">
              Last updated: November 2026 • Pavitrani Jewellers (A unit of Mayank Metal Works)
            </p>

            <button
              onClick={() => {
                setActivePage('collections');
                window.location.hash = 'collections';
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-4 py-2 rounded-xl bg-[#47153F] text-[#FAF6EF] text-xs font-semibold hover:bg-[#30232E] transition-colors"
            >
              Browse Collections
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
