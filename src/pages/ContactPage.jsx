import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Sparkles, 
  ShieldCheck, 
  Navigation,
  CheckCircle2
} from 'lucide-react';
import InstagramIcon from '../components/InstagramIcon';
import { BUSINESS_INFO } from '../data/business';
import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  return (
    <div className="space-y-16 py-8">
      
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-b from-[#2D0A27] via-[#22051E] to-[#FAF8F5] text-[#FAF8F5] pt-12 pb-24 px-4 sm:px-6 lg:px-8 border-b border-[#C5A059]/20 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#C5A059]/40 text-[#E0C17E] text-xs font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connect with Pavitrani Jewellers</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            Contact & Showroom Visit
          </h1>

          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto font-light leading-relaxed font-sans">
            We are always delighted to assist you with jewellery selections, custom bridal orders, pure silver poojan sets, and price quotations.
          </p>
        </div>
      </section>

      {/* 2. Main Contact Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Comprehensive Contact Details Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-luxury border border-[#C5A059]/30 space-y-6 text-left">
              
              <div className="border-b border-gray-100 pb-4">
                <span className="text-xs font-semibold text-[#8B6722] uppercase tracking-wider">
                  Showroom Headquarters
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#2D0A27] mt-1">
                  Pavitrani Jewellers
                </h3>
                <p className="text-xs text-gray-500 font-sans">
                  A unit of MAYANK METAL WORKS
                </p>
                <p className="text-xs font-mono text-[#8B6722] mt-1">
                  GSTIN: {BUSINESS_INFO.gstin}
                </p>
              </div>

              {/* Physical Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#2D0A27]/5 border border-[#C5A059]/30 flex items-center justify-center shrink-0 text-[#C5A059]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-xs uppercase tracking-wider text-gray-900">
                    Physical Address
                  </h4>
                  <p className="text-sm text-gray-700 mt-1 leading-relaxed">
                    81/1 Shivdaspur, B.L.W Road<br />
                    Near Kabir Ashram, Varanasi<br />
                    Uttar Pradesh, India — 221004
                  </p>
                  <a
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#8B6722] hover:underline mt-2"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Navigate via Google Maps</span>
                  </a>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#2D0A27]/5 border border-[#C5A059]/30 flex items-center justify-center shrink-0 text-[#C5A059]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-xs uppercase tracking-wider text-gray-900">
                    Direct Phone Calls
                  </h4>
                  <div className="mt-1 space-y-1 text-sm">
                    <p>
                      Primary: <a href={`tel:+91${BUSINESS_INFO.phone}`} className="font-semibold text-[#2D0A27] hover:text-[#8B6722]">{BUSINESS_INFO.phoneDisplay}</a>
                    </p>
                    <p>
                      Secondary: <a href={`tel:+91${BUSINESS_INFO.phoneSecondary}`} className="text-gray-700 hover:text-[#8B6722]">{BUSINESS_INFO.phoneSecondaryDisplay}</a>
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-300 flex items-center justify-center shrink-0 text-emerald-600">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-xs uppercase tracking-wider text-gray-900">
                    Official WhatsApp
                  </h4>
                  <p className="text-sm text-gray-700 mt-1">
                    +91 {BUSINESS_INFO.whatsapp}
                  </p>
                  <a
                    href={BUSINESS_INFO.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 hover:text-emerald-700 mt-1"
                  >
                    <span>Instant WhatsApp Chat</span>
                    <span>→</span>
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#2D0A27]/5 border border-[#C5A059]/30 flex items-center justify-center shrink-0 text-[#C5A059]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-xs uppercase tracking-wider text-gray-900">
                    Official Email
                  </h4>
                  <a 
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="text-sm text-gray-700 hover:text-[#8B6722] break-all mt-1 block"
                  >
                    {BUSINESS_INFO.email}
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#2D0A27]/5 border border-[#C5A059]/30 flex items-center justify-center shrink-0 text-[#C5A059]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-xs uppercase tracking-wider text-gray-900">
                    Showroom Hours
                  </h4>
                  <p className="text-sm text-gray-700 mt-1">
                    Monday to Sunday: <strong>10:30 AM – 8:30 PM</strong>
                  </p>
                  <p className="text-xs text-emerald-700 font-semibold mt-0.5">
                    Open All 7 Days
                  </p>
                </div>
              </div>

              {/* Social Media Link */}
              <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-gray-500">Official Social Media:</span>
                <a
                  href={BUSINESS_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 text-white text-xs font-medium hover:opacity-95 shadow transition-all"
                >
                  <InstagramIcon className="w-3.5 h-3.5" />
                  <span>@pavitranijewellers_varanasi</span>
                </a>
              </div>

            </div>

            {/* Quick Call Action Card */}
            <div className="p-6 rounded-3xl bg-[#2D0A27] text-white border border-[#C5A059]/30 space-y-3">
              <div className="flex items-center gap-2 text-[#E0C17E] text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Visiting Today?</span>
              </div>
              <p className="text-sm text-white/90 font-serif">
                Need quick directions from Sigra, Cantt Railway Station, or Lanka? Call our showroom directly for assistance.
              </p>
              <a
                href={`tel:+91${BUSINESS_INFO.phone}`}
                className="w-full inline-flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-[#DFBE7B] via-[#C5A059] to-[#9E7D36] text-[#1A0417] rounded-xl font-semibold text-xs tracking-wider uppercase hover:brightness-110 transition-all shadow"
              >
                <Phone className="w-4 h-4" />
                <span>Call Showroom Now (+91 {BUSINESS_INFO.phone})</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact & Enquiry Form */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2 text-left">
              <span className="text-xs font-semibold text-[#8B6722] uppercase tracking-wider">
                Send a Message
              </span>
              <h2 className="font-serif text-3xl font-bold text-[#2D0A27]">
                Online Jewellery Enquiry
              </h2>
              <p className="text-xs text-gray-600 font-sans">
                Fill the form below and we will respond promptly with availability, weight, design variations, and personalized quotation.
              </p>
            </div>

            <ContactForm />
          </div>

        </div>
      </section>

      {/* 3. Interactive Embedded Google Map */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-semibold text-[#8B6722] uppercase tracking-wider">
            Location Map
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#2D0A27]">
            Interactive Showroom Map
          </h2>
          <p className="text-xs text-gray-600 font-sans">
            Locate us easily on B.L.W Road, Shivdaspur near Kabir Ashram, Varanasi.
          </p>
        </div>

        <div className="bg-white rounded-3xl overflow-hidden shadow-luxury border border-[#C5A059]/30">
          <div className="aspect-16/7 w-full min-h-[380px]">
            <iframe
              title="Google Maps Location of Pavitrani Jewellers"
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

          <div className="p-4 sm:p-6 bg-[#FAF8F5] border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-gray-700 text-center sm:text-left">
              <strong>Landmark:</strong> Near Kabir Ashram on main B.L.W Road, Shivdaspur, Varanasi.
            </div>

            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-[#2D0A27] text-[#E0C17E] text-xs font-semibold hover:bg-[#3E0E35] transition-all flex items-center gap-2 shadow"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Open in Google Maps Navigation</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
