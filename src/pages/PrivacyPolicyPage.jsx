import React from 'react';
import { ShieldCheck, Lock, EyeOff, UserCheck, FileText, Mail, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

export default function PrivacyPolicyPage({ setActivePage }) {
  return (
    <div className="space-y-12 py-8">
      
      {/* Header */}
      <section className="bg-gradient-to-b from-[#2D0A27] via-[#22051E] to-[#FAF8F5] text-[#FAF8F5] pt-12 pb-20 px-4 sm:px-6 lg:px-8 border-b border-[#C5A059]/20 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#C5A059]/40 text-[#E0C17E] text-xs font-medium">
            <Lock className="w-3.5 h-3.5" />
            <span>Customer Data Protection</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Privacy Policy
          </h1>

          <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto font-light leading-relaxed font-sans">
            How Pavitrani Jewellers collects, uses, protects, and honours your personal enquiry information and privacy.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-luxury border border-[#C5A059]/30 space-y-8 text-left text-gray-700 leading-relaxed font-sans text-sm">
          
          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-3 text-emerald-900">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <p className="text-xs leading-relaxed">
              <strong>Our Privacy Promise:</strong> At Pavitrani Jewellers (A unit of Mayank Metal Works), we hold our customers' privacy in highest reverence. We collect only the information necessary to serve your jewellery requirements. We never sell, rent, or trade your personal information to third parties.
            </p>
          </div>

          {/* Section 1 */}
          <div className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-[#2D0A27] flex items-center gap-2">
              <span className="text-[#C5A059]">1.</span> Scope & Purpose
            </h2>
            <p>
              This Privacy Policy explains how <strong>Pavitrani Jewellers</strong> ("we", "us", "our") manages personal data collected through our website (<strong>pavitranijewellers.com</strong>), direct customer WhatsApp communications, telephone enquiries, and showroom visits at our location: <strong>81/1 Shivdaspur B.L.W Road Near Kabir Ashram, Varanasi, Uttar Pradesh 221004</strong>.
            </p>
            <p>
              By submitting an online enquiry, contacting us via WhatsApp, or visiting our showroom, you acknowledge and agree to the practices outlined in this policy.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-[#2D0A27] flex items-center gap-2">
              <span className="text-[#C5A059]">2.</span> Information We Collect
            </h2>
            <p>
              We only collect information that you voluntarily choose to share with us, including:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs">
              <li><strong>Contact Details:</strong> Full name, telephone/mobile number, WhatsApp number, and email address.</li>
              <li><strong>Enquiry Preferences:</strong> Jewellery categories of interest (e.g., 925 sterling silver bracelets, pure silver poojan thalis, gold bridal sets, custom rings), requested dimensions, or wedding timelines.</li>
              <li><strong>Showroom Appointment Details:</strong> Preferred visit date and time for private consultations.</li>
              <li><strong>Technical Metadata:</strong> Standard, non-identifying technical data such as IP address, browser type, and page interaction timestamps used strictly to ensure website reliability and spam prevention.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-[#2D0A27] flex items-center gap-2">
              <span className="text-[#C5A059]">3.</span> How We Use Your Information
            </h2>
            <p>
              Your personal information is used exclusively for legitimate business and customer service purposes:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs">
              <li>Responding directly to your product enquiries, quotations, and requests for photographs or video previews.</li>
              <li>Confirming showroom visit schedules and preparing selected ornaments in our VIP viewing lounge.</li>
              <li>Coordinating bespoke jewellery orders, sizing adjustments, and engraving specifications.</li>
              <li>Issuing official GST tax invoices (GSTIN: {BUSINESS_INFO.gstin}) and statutory hallmarking records as mandated by Indian jewellery trade regulations.</li>
              <li>Providing post-purchase assistance such as silver cleaning, maintenance guidance, and warranty verifications.</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-[#2D0A27] flex items-center gap-2">
              <span className="text-[#C5A059]">4.</span> Non-Disclosure & Data Protection
            </h2>
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-gray-50 border border-gray-200">
              <EyeOff className="w-5 h-5 text-[#8B6722] shrink-0 mt-0.5" />
              <p className="text-xs">
                <strong>Strict Confidentiality:</strong> Under no circumstances do we sell, rent, monetise, or disclose your telephone number, email, or enquiry history to third-party marketing companies, telemarketers, or advertising networks.
              </p>
            </div>
            <p>
              Access to customer enquiry data is restricted solely to authorized showroom personnel at Pavitrani Jewellers who require the details to respond to your inquiry.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-[#2D0A27] flex items-center gap-2">
              <span className="text-[#C5A059]">5.</span> Communications via WhatsApp & Phone
            </h2>
            <p>
              When you initiate contact through our WhatsApp button or website enquiry form, you consent to receive direct replies from our official business number (<strong>+91 {BUSINESS_INFO.whatsapp}</strong>).
            </p>
            <p>
              We do not engage in automated broadcast spam. If at any point you wish to cease receiving messages or updates from Pavitrani Jewellers, simply reply with "STOP" or "UNSUBSCRIBE" on WhatsApp or notify us via email, and your contact records will be archived promptly.
            </p>
          </div>

          {/* Section 6 */}
          <div className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-[#2D0A27] flex items-center gap-2">
              <span className="text-[#C5A059]">6.</span> Website Security (HTTPS & Encryption)
            </h2>
            <p>
              Our website is secured with industry-standard SSL (Secure Sockets Layer) encryption (HTTPS). All data transmitted between your browser and our servers is encrypted in transit. We implement firewall safeguards and anti-spam honeypot mechanisms to prevent malicious interference.
            </p>
          </div>

          {/* Section 7 */}
          <div className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-[#2D0A27] flex items-center gap-2">
              <span className="text-[#C5A059]">7.</span> Your Legal Rights
            </h2>
            <p>
              In accordance with applicable Indian data protection frameworks, you have the right to:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs">
              <li>Request confirmation of the personal data we hold about you.</li>
              <li>Request correction or updating of any inaccurate contact details.</li>
              <li>Request complete deletion or removal of your enquiry records from our customer database.</li>
            </ul>
          </div>

          {/* Section 8 */}
          <div className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-[#2D0A27] flex items-center gap-2">
              <span className="text-[#C5A059]">8.</span> Grievance Officer & Contact Details
            </h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or how your personal information is handled, please contact our designated grievance representative:
            </p>
            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#C5A059]/30 text-xs space-y-1.5">
              <p className="font-bold text-[#2D0A27]">Privacy & Grievance Cell — Pavitrani Jewellers</p>
              <p>Legal Entity: <strong>Pavitrani Jewellers (A unit of MAYANK METAL WORKS)</strong></p>
              <p>Showroom Address: 81/1 Shivdaspur B.L.W Road Near Kabir Ashram, Varanasi, U.P. 221004</p>
              <p>Telephone: +91 {BUSINESS_INFO.phone}</p>
              <p>Email: <a href={`mailto:${BUSINESS_INFO.email}`} className="text-[#8B6722] underline">{BUSINESS_INFO.email}</a></p>
              <p>GSTIN: {BUSINESS_INFO.gstin}</p>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
            <span>Last revised: November 2026</span>
            <button
              onClick={() => {
                setActivePage('contact');
                window.location.hash = 'contact';
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-[#8B6722] font-semibold hover:underline"
            >
              Contact Showroom Representative ›
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
