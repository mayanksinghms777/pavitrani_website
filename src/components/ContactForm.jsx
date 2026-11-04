import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, MessageCircle, PhoneCall } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

export default function ContactForm({ defaultInterest = "" }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interest: defaultInterest || 'General Enquiry',
    message: '',
    botField: '' // Honeypot spam trap
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const interestOptions = [
    'General Enquiry',
    '925 Sterling Silver Jewellery',
    'Pure Silverware & Poojan Samagri',
    'Fine Gold & Bridal Jewellery',
    'Lab-Grown Diamonds',
    'Custom Jewellery Order',
    'Showroom Visit Booking'
  ];

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your full name';
    }
    
    // Phone validation for Indian mobile numbers
    const phoneRegex = /^[6-9]\d{9}$/;
    const cleanPhone = formData.phone.replace(/\D/g, '').slice(-10);
    if (!cleanPhone || !phoneRegex.test(cleanPhone)) {
      errs.phone = 'Please provide a valid 10-digit mobile number';
    }

    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address';
    }

    if (!formData.message.trim() || formData.message.trim().length < 5) {
      errs.message = 'Please enter a message (at least 5 characters)';
    }

    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.botField) {
      // Honeypot caught spam
      return;
    }

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    // Simulate instant secure processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const sendDirectToWhatsApp = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const text = encodeURIComponent(
      `Hello Pavitrani Jewellers,\n\n` +
      `New Website Enquiry:\n` +
      `• Name: ${formData.name}\n` +
      `• Phone: ${formData.phone}\n` +
      `• Email: ${formData.email || 'Not provided'}\n` +
      `• Collection of Interest: ${formData.interest}\n` +
      `• Message: ${formData.message}\n\n` +
      `Sent via Pavitrani Website.`
    );

    window.open(`https://wa.me/91${BUSINESS_INFO.whatsapp}?text=${text}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="bg-white rounded-2xl shadow-luxury border border-[#C9A24A]/25 p-6 sm:p-8">
      {submitted ? (
        <div className="py-8 text-center space-y-5 animate-in fade-in duration-300">
          <div className="w-16 h-16 bg-[#FAF6EF] text-[#44003B] rounded-full flex items-center justify-center mx-auto border border-[#C9A24A]/30">
            <CheckCircle2 className="w-10 h-10 text-[#C9A24A]" />
          </div>

          <div className="space-y-2">
            <h3 className="font-serif text-2xl font-bold text-[#44003B]">
              Enquiry Received with Reverence!
            </h3>
            <p className="text-sm text-[#30232E]/80 max-w-md mx-auto">
              Thank you, <strong className="text-[#44003B]">{formData.name}</strong>. Our jewellery advisors at Pavitrani Jewellers Varanasi will get in touch with you shortly on <strong className="text-[#44003B]">{formData.phone}</strong>.
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`https://wa.me/91${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(
                `Hello Pavitrani Jewellers, this is ${formData.name}. I just submitted an enquiry regarding ${formData.interest}.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold tracking-wide transition-all shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Connect on WhatsApp Now</span>
            </a>

            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  name: '',
                  phone: '',
                  email: '',
                  interest: 'General Enquiry',
                  message: '',
                  botField: ''
                });
              }}
              className="text-xs text-[#30232E]/70 hover:text-[#44003B] underline"
            >
              Send Another Enquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 text-left font-sans">
          {/* Honeypot anti-spam trap field (hidden from human users) */}
          <div className="hidden" aria-hidden="true">
            <input
              type="text"
              name="botField"
              tabIndex={-1}
              autoComplete="off"
              value={formData.botField}
              onChange={(e) => setFormData({ ...formData, botField: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#30232E] mb-1">
              Your Full Name <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Ramesh Chandra / Priya Sharma"
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
                if (errors.name) setErrors({ ...errors, name: null });
              }}
              className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-all outline-none focus:ring-2 focus:ring-[#C9A24A]/25 ${
                errors.name ? 'border-rose-400 bg-rose-50/30' : 'border-gray-300 focus:border-[#C9A24A]'
              }`}
            />
            {errors.name && (
              <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.name}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#30232E] mb-1">
                Phone Number (WhatsApp) <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-xs text-gray-500 font-medium">
                  +91
                </span>
                <input
                  type="tel"
                  required
                  placeholder="9876543210"
                  value={formData.phone}
                  onChange={(e) => {
                    setFormData({ ...formData, phone: e.target.value });
                    if (errors.phone) setErrors({ ...errors, phone: null });
                  }}
                  className={`w-full pl-11 pr-4 py-2.5 rounded-xl border text-sm transition-all outline-none focus:ring-2 focus:ring-[#C9A24A]/25 ${
                    errors.phone ? 'border-rose-400 bg-rose-50/30' : 'border-gray-300 focus:border-[#C9A24A]'
                  }`}
                />
              </div>
              {errors.phone && (
                <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.phone}
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#30232E] mb-1">
                Email Address <span className="text-gray-400 text-[10px] font-normal">(Optional)</span>
              </label>
              <input
                type="email"
                placeholder="name@example.com"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (errors.email) setErrors({ ...errors, email: null });
                }}
                className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-all outline-none focus:ring-2 focus:ring-[#C9A24A]/25 ${
                  errors.email ? 'border-rose-400 bg-rose-50/30' : 'border-gray-300 focus:border-[#C9A24A]'
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.email}
                </p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#30232E] mb-1">
              Collection of Interest
            </label>
            <select
              value={formData.interest}
              onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm transition-all outline-none focus:border-[#C9A24A] focus:ring-2 focus:ring-[#C9A24A]/25 bg-white text-[#30232E]"
            >
              {interestOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#30232E] mb-1">
              Your Message or Custom Request <span className="text-rose-500">*</span>
            </label>
            <textarea
              required
              rows={3}
              placeholder="Tell us what you're looking for, wedding dates, or ask about custom design availability..."
              value={formData.message}
              onChange={(e) => {
                setFormData({ ...formData, message: e.target.value });
                if (errors.message) setErrors({ ...errors, message: null });
              }}
              className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-all outline-none focus:ring-2 focus:ring-[#C9A24A]/25 ${
                errors.message ? 'border-rose-400 bg-rose-50/30' : 'border-gray-300 focus:border-[#C9A24A]'
              }`}
            />
            {errors.message && (
              <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.message}
              </p>
            )}
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-[#44003B] hover:bg-[#30232E] text-[#FAF6EF] font-semibold text-xs uppercase tracking-wider shadow-sm transition-all disabled:opacity-60"
            >
              <Send className="w-4 h-4 text-[#C9A24A]" />
              <span>{isSubmitting ? 'Submitting...' : 'Submit Enquiry'}</span>
            </button>

            <button
              type="button"
              onClick={sendDirectToWhatsApp}
              className="flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs tracking-wider transition-all shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Send via WhatsApp</span>
            </button>
          </div>

          <p className="text-[11px] text-gray-500 text-center font-sans">
            🔒 Your contact details are securely protected in accordance with our{' '}
            <span className="text-[#44003B] font-semibold underline cursor-pointer">Privacy Policy</span>. We never spam.
          </p>
        </form>
      )}
    </div>
  );
}
