import React from 'react';
import { ShieldCheck, Lock, Eye, FileText, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

export default function PrivacyPolicyPage({ setActivePage }) {
  return (
    <div className="space-y-12">
      
      {/* Header (Royal Plum - Flush under header with zero gap) */}
      <section className="bg-[#44003B] text-[#FAF6EF] pt-14 pb-24 px-4 sm:px-6 lg:px-8 border-b border-[#C9A24A]/30 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#C9A24A]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#C9A24A]/40 text-[#E8D8B7] text-xs font-medium">
            <Lock className="w-3.5 h-3.5 text-[#C9A24A]" />
            <span>Data Protection & Privacy Covenant</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Privacy Policy
          </h1>

          <p className="text-sm sm:text-base text-[#FAF6EF]/85 max-w-2xl mx-auto font-light leading-relaxed font-sans">
            How Pavitrani Jewellers (A unit of Mayank Metal Works) respects, safeguards, and handles your personal information across our website and showroom communications.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20 pb-12">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-luxury border border-[#C9A24A]/25 space-y-8 text-left text-[#30232E]/85 leading-relaxed font-sans text-sm">
          
          <div className="p-4 rounded-xl bg-[#FAF6EF] border border-[#C9A24A]/30 flex items-start gap-3 text-[#30232E]">
            <ShieldCheck className="w-5 h-5 text-[#C9A24A] shrink-0 mt-0.5" />
            <p className="text-xs leading-relaxed">
              <strong>Our Privacy Guarantee:</strong> Pavitrani Jewellers values the sanctity of your private consultations and personal data as deeply as we value the purity of our precious metals. We never sell, rent, monetize, or disclose your contact details to third-party telemarketers or external advertising networks.
            </p>
          </div>

          {/* Section 1 */}
          <div className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-[#44003B] flex items-center gap-2">
              <span className="text-[#C9A24A]">1.</span> Scope & Data Controller
            </h2>
            <p>
              This Privacy Policy applies to personal information gathered through <strong>pavitrani.com</strong>, showroom enquiry forms, WhatsApp conversations, telephone consultations, and showroom billing terminals operated by:
            </p>
            <div className="p-4 rounded-xl bg-[#FAF6EF] border border-[#C9A24A]/20 text-xs font-sans space-y-1">
              <p><strong>Entity Name:</strong> Pavitrani Jewellers</p>
              <p><strong>Parent Unit:</strong> MAYANK METAL WORKS</p>
              <p><strong>Registered Showroom:</strong> 81/1 Shivdaspur B.L.W Road Near Kabir Ashram, Varanasi, U.P. 221004, India</p>
              <p><strong>GSTIN:</strong> {BUSINESS_INFO.gstin}</p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-[#44003B] flex items-center gap-2">
              <span className="text-[#C9A24A]">2.</span> Information We Collect
            </h2>
            <p>
              We only collect information directly provided by you for the purpose of fulfilling jewellery enquiries, booking consultation appointments, or generating legal GST invoices:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#30232E]/80">
              <li><strong>Contact Particulars:</strong> Your full name, mobile phone number, WhatsApp contact, and email address submitted via our enquiry forms.</li>
              <li><strong>Showroom Invoicing Records:</strong> Name, billing address, and PAN (Permanent Account Number) if legally mandated under Indian income tax regulations for precious metal transactions exceeding statutory thresholds.</li>
              <li><strong>Custom Design Requirements:</strong> Sizing preferences, metal choices (925 silver, 22K/18K gold), and design notes shared for bespoke creations.</li>
              <li><strong>Anonymous Technical Metrics:</strong> Browser type, approximate location, and page visit duration collected via standard non-identifying server logs to maintain website security.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-[#44003B] flex items-center gap-2">
              <span className="text-[#C9A24A]">3.</span> Purpose of Data Processing
            </h2>
            <p>We process your information exclusively for legitimate retail jewellery operations:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs">
              <div className="p-3 bg-[#FAF6EF] rounded-xl border border-[#C9A24A]/20 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C9A24A] shrink-0 mt-0.5" />
                <span>Responding to product availability & custom jewellery quotes</span>
              </div>
              <div className="p-3 bg-[#FAF6EF] rounded-xl border border-[#C9A24A]/20 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C9A24A] shrink-0 mt-0.5" />
                <span>Issuing official computerized GST invoices & hallmark certificates</span>
              </div>
              <div className="p-3 bg-[#FAF6EF] rounded-xl border border-[#C9A24A]/20 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C9A24A] shrink-0 mt-0.5" />
                <span>Coordinating custom order progress via WhatsApp or phone</span>
              </div>
              <div className="p-3 bg-[#FAF6EF] rounded-xl border border-[#C9A24A]/20 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C9A24A] shrink-0 mt-0.5" />
                <span>Providing after-sales cleaning, polishing, and repair assistance</span>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-[#44003B] flex items-center gap-2">
              <span className="text-[#C9A24A]">4.</span> WhatsApp & Third-Party Communications
            </h2>
            <p>
              When initiating communication via our WhatsApp Showroom buttons (+91 9335093572), your communication is protected by WhatsApp's end-to-end encryption under Meta's privacy infrastructure.
            </p>
            <p>
              We do not employ automated spam bots. All WhatsApp conversations are conducted directly by our Varanasi showroom advisors. You can request cessation of any direct messages at any time.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-[#44003B] flex items-center gap-2">
              <span className="text-[#C9A24A]">5.</span> Data Storage, Retention & Security
            </h2>
            <p>
              Your contact enquiries and billing records are stored within protected, authenticated databases. Accounting and tax records are retained in strict accordance with Indian statutory accounting and GST compliance requirements.
            </p>
          </div>

          {/* Section 6 */}
          <div className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-[#44003B] flex items-center gap-2">
              <span className="text-[#C9A24A]">6.</span> Contact Our Privacy Officer
            </h2>
            <p>
              For any questions regarding this Privacy Policy, updating your records, or requesting data removal:
            </p>
            <div className="p-4 rounded-xl bg-[#FAF6EF] border border-[#C9A24A]/25 space-y-1 text-xs">
              <p className="font-bold text-[#44003B]">Privacy & Grievance Cell — Pavitrani Jewellers</p>
              <p>Email: <strong>{BUSINESS_INFO.email}</strong></p>
              <p>Phone: <strong>+91 {BUSINESS_INFO.phoneDisplay}</strong></p>
              <p>Address: 81/1 Shivdaspur B.L.W Road Near Kabir Ashram, Varanasi, U.P. 221004</p>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-500">
            <p>Effective Date: November 2026 • Pavitrani Jewellers Varanasi</p>
            <button
              onClick={() => {
                setActivePage('home');
                window.location.hash = 'home';
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-[#44003B] font-semibold hover:underline"
            >
              Return to Home Page ›
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
