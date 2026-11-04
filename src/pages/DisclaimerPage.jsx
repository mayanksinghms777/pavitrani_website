import React from 'react';
import { AlertCircle, ShieldCheck, Scale, FileText, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

export default function DisclaimerPage({ setActivePage }) {
  return (
    <div className="space-y-12 py-8">
      
      {/* Header */}
      <section className="bg-gradient-to-b from-[#2D0A27] via-[#22051E] to-[#FAF8F5] text-[#FAF8F5] pt-12 pb-20 px-4 sm:px-6 lg:px-8 border-b border-[#C5A059]/20 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#C5A059]/40 text-[#E0C17E] text-xs font-medium">
            <FileText className="w-3.5 h-3.5" />
            <span>Official Legal Notice</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Product & Pricing Disclaimer
          </h1>

          <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto font-light leading-relaxed font-sans">
            Important information regarding product representations, daily precious metal market price variations, and showroom confirmations for Pavitrani Jewellers.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-luxury border border-[#C5A059]/30 space-y-8 text-left text-gray-700 leading-relaxed font-sans text-sm">
          
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 flex items-start gap-3 text-amber-900">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-xs leading-relaxed">
              <strong>Important Summary:</strong> All jewellery photographs, descriptions, and catalogues displayed on this website represent authentic pieces from Pavitrani Jewellers. However, due to daily metal market fluctuations and handcrafted artisanal variations, final product weights, dimensions, stone metrics, availability, and prices must always be confirmed directly with our showroom on B.L.W Road, Varanasi.
            </p>
          </div>

          {/* Section 1 */}
          <div className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-[#2D0A27] flex items-center gap-2">
              <span className="text-[#C5A059]">1.</span> Product Representations & Photography
            </h2>
            <p>
              All photographs featured across <strong>pavitranijewellers.com</strong> are authentic images of our actual inventory, showroom displays, and handcrafted creations. We strictly do not generate artificial product images or misrepresent our merchandise.
            </p>
            <p>
              However, because fine jewellery involves reflective precious metals (925 sterling silver, hallmarked gold) and multifaceted stones, photographic colors, lustres, and dimensions may vary slightly depending on monitor color calibration, ambient showroom illumination, and screen resolutions.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-[#2D0A27] flex items-center gap-2">
              <span className="text-[#C5A059]">2.</span> Daily Bullion Market Price Fluctuations
            </h2>
            <p>
              Gold and silver prices are subject to continuous fluctuation in accordance with national and international bullion markets, government duties, and association benchmark rates.
            </p>
            <p>
              Consequently, we do not advertise static or binding prices online. Any price quote provided via WhatsApp, telephone, or website enquiry is indicative and valid only for the date and time specified. Final billing rates are calculated upon formal purchase at our Varanasi showroom based on the prevailing market rate and official computerized precision weighing.
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-[#2D0A27] flex items-center gap-2">
              <span className="text-[#C5A059]">3.</span> Handcrafted Variations & Custom Sizing
            </h2>
            <p>
              Many of our pieces — notably our signature pure silver Mayur (peacock) artefacts, filigree links, and poojan thali sets — are handcrafted by master silversmiths and artisans in Varanasi. As a result, subtle natural variations in gram weight, chiseling relief, and link tolerances are hallmarks of authentic artisanal individuality, not defects.
            </p>
            <p>
              Custom wrist sizing, chain lengths, and stone selections will naturally impact the final metal weight and quotation.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-[#2D0A27] flex items-center gap-2">
              <span className="text-[#C5A059]">4.</span> Availability & Showroom Inventory
            </h2>
            <p>
              While we endeavor to keep our catalogue representative of active stock, items are subject to prior sale in our showroom. An item displayed online does not constitute an irrevocable reservation until confirmed by our sales advisors.
            </p>
            <p>
              If a specific design is temporarily out of stock, we can often craft or re-order it upon request.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-[#2D0A27] flex items-center gap-2">
              <span className="text-[#C5A059]">5.</span> Intellectual Property & Brand Assets
            </h2>
            <p>
              The <strong>Pavitrani Jewellers</strong> brand name, official lotus emblem logo, slogan <em>"Jewels as Pure as You"</em>, photographs, and website content are the exclusive intellectual property of <strong>Pavitrani Jewellers (A unit of Mayank Metal Works)</strong>. Unauthorized reproduction, scraping, commercial redistribution, or copying is strictly prohibited under Indian intellectual property laws.
            </p>
          </div>

          {/* Section 6 */}
          <div className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-[#2D0A27] flex items-center gap-2">
              <span className="text-[#C5A059]">6.</span> Showroom Confirmation & Inquiries
            </h2>
            <p>
              For real-time stock verification, live weight certificates, and daily rate quotations, please contact our showroom advisors directly:
            </p>
            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#C5A059]/30 text-xs space-y-1">
              <p><strong>Pavitrani Jewellers</strong> (A unit of MAYANK METAL WORKS)</p>
              <p>Address: 81/1 Shivdaspur B.L.W Road Near Kabir Ashram, Varanasi, U.P. 221004</p>
              <p>Phone: +91 {BUSINESS_INFO.phone} / +91 {BUSINESS_INFO.phoneSecondary}</p>
              <p>WhatsApp: +91 {BUSINESS_INFO.whatsapp}</p>
              <p>Email: {BUSINESS_INFO.email}</p>
              <p>GSTIN: {BUSINESS_INFO.gstin}</p>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs text-gray-500">Last updated: November 2026</span>
            
            <div className="flex items-center gap-3">
              <a
                href={BUSINESS_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-medium flex items-center gap-1.5 shadow"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Verify a Piece on WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  setActivePage('contact');
                  window.location.hash = 'contact';
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-4 py-2 rounded-xl bg-[#2D0A27] text-[#E0C17E] text-xs font-semibold hover:bg-[#3E0E35]"
              >
                Contact Showroom
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
