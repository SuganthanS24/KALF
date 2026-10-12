import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: 'Private Acquisition & Advisory',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate luxury curatorial submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section 
      id="contact" 
      className="relative w-full bg-white text-black py-24 px-6 sm:px-10 lg:px-16 border-t border-b border-neutral-200 overflow-hidden"
    >
      {/* Background Subtle Ambient Glow & Architectural Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.025]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, #000000 1px, transparent 1px), linear-gradient(to bottom, #000000 1px, transparent 1px)`,
            backgroundSize: '90px 90px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1360px] mx-auto">
        
        {/* Section Header (Centered) */}
        <div className="text-center max-w-4xl mx-auto mb-16 border-b border-neutral-200 pb-8 px-4">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-2 h-2 rounded-full bg-black" />
            <span className="text-[11px] font-mono tracking-[0.38em] text-neutral-500 uppercase font-semibold">
              CURATORIAL INQUIRY & COMMISSION • KALF ART GALLERY
            </span>
            <span className="w-2 h-2 rounded-full bg-black" />
          </div>

          <h2 className="font-editorial-headline text-3xl sm:text-5xl lg:text-[54px] text-black font-bold tracking-tight uppercase leading-[1.06] mb-4">
            INITIATE CURATORIAL <br />
            <span className="text-neutral-500 font-normal italic">COMMISSION & DIALOGUE</span>
          </h2>

          <p className="text-neutral-600 text-xs sm:text-sm font-light max-w-xl mx-auto font-mono tracking-wider leading-relaxed">
            Direct access to our senior curatorial desk in Zurich for private acquisitions, monumental architectural commissions, or private salon appointments.
          </p>
        </div>

        {/* 2-COLUMN MAIN STAGE: Curatorial Information (Left) + Luxury Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* LEFT COLUMN: SALON DETAILS & CURATORIAL ASSURANCE */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-10">
            
            <div>
              <span className="text-[10px] font-mono tracking-[0.3em] text-neutral-500 uppercase block mb-3 font-semibold">
                PRIMARY SALON & VAULT ARCHIVE
              </span>
              <h3 className="font-editorial-headline text-2xl sm:text-3xl font-bold text-black uppercase tracking-tight mb-4">
                ZURICH MASTER ARCHIVE
              </h3>
              <p className="text-neutral-700 text-sm leading-relaxed font-light mb-6">
                Situated in Zurich’s historic cultural district, our private salon exhibits monumental canvases and kinetic suites under museum-calibrated illumination.
              </p>

              {/* Direct Contact Metrics */}
              <div className="space-y-4 border-t border-b border-neutral-200 py-6 text-xs sm:text-sm">
                <div className="flex items-start justify-between">
                  <span className="font-mono tracking-[0.2em] text-neutral-500 uppercase text-[10px] font-semibold">
                    ADDRESS
                  </span>
                  <span className="text-black text-right font-medium">
                    Bahnhofstrasse 48, 8001 Zürich, Switzerland
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-mono tracking-[0.2em] text-neutral-500 uppercase text-[10px] font-semibold">
                    DIRECT TELEPHONE
                  </span>
                  <a href="tel:+41442148800" className="text-black font-mono font-semibold hover:underline">
                    +41 (0)44 214 88 00
                  </a>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-mono tracking-[0.2em] text-neutral-500 uppercase text-[10px] font-semibold">
                    CURATORIAL DESK
                  </span>
                  <a href="mailto:curator@kalfartgallery.com" className="text-black font-mono font-semibold hover:underline">
                    curator@kalfartgallery.com
                  </a>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-mono tracking-[0.2em] text-neutral-500 uppercase text-[10px] font-semibold">
                    VISITING HOURS
                  </span>
                  <span className="text-black font-mono text-[11px] font-medium">
                    TUE — SAT: 11:00 — 19:00 (BY INVITATION)
                  </span>
                </div>
              </div>
            </div>

            {/* Curatorial Assurance Card with Corner Brackets */}
            <div className="relative border border-neutral-300 p-6 bg-neutral-50 shadow-md">
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-black pointer-events-none" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-black pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-black pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-black pointer-events-none" />

              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-black" />
                <span className="text-[10px] font-mono tracking-widest text-neutral-700 uppercase font-bold">
                  ARCHIVAL PROVENANCE GUARANTEE
                </span>
              </div>
              <p className="text-neutral-600 text-xs font-light leading-relaxed">
                Every acquisition is sealed with forensic physical certification, museum microclimate crating specs, and lifetime provenance archival registration.
              </p>
            </div>

          </div>

          {/* RIGHT COLUMN: LUXURY EDITORIAL INQUIRY FORM */}
          <div className="lg:col-span-7">
            <div className="relative border border-neutral-300 p-8 sm:p-12 bg-white shadow-xl">
              
              {/* Corner Frame Brackets */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-black pointer-events-none" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-black pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-black pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-black pointer-events-none" />

              {/* Form Eyebrow */}
              <div className="flex items-center justify-between mb-8 border-b border-neutral-200 pb-4">
                <span className="text-[10px] font-mono tracking-[0.3em] text-neutral-500 uppercase font-semibold">
                  ACQUISITION & SALON PROTOCOL
                </span>
                <span className="text-[9px] font-mono tracking-widest text-neutral-800 uppercase bg-neutral-100 border border-neutral-300 px-2.5 py-1 rounded-full font-semibold">
                  EST. 2023
                </span>
              </div>

              {submitted ? (
                /* Submission Confirmation Receipt */
                <div className="py-12 text-center flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full border-2 border-black flex items-center justify-center mb-6 text-black text-2xl font-bold">
                    ✓
                  </div>
                  <span className="text-[10px] font-mono tracking-[0.35em] text-neutral-500 uppercase block mb-2 font-semibold">
                    INQUIRY TRANSMITTED SUCCESSFULLY
                  </span>
                  <h3 className="font-editorial-headline text-2xl sm:text-3xl font-bold text-black uppercase mb-4">
                    THANK YOU, {formData.name || 'COLLECTOR'}
                  </h3>
                  <p className="text-neutral-700 text-sm max-w-md font-light leading-relaxed mb-8">
                    Your inquiry has been encrypted and routed directly to our Head Curator in Zurich. We will contact you at <strong className="text-black">{formData.email}</strong> or <strong className="text-black">{formData.phone}</strong> within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', phone: '', email: '', serviceType: 'Private Acquisition & Advisory', notes: '' });
                    }}
                    className="px-6 py-2.5 rounded-full border border-black bg-black text-white text-xs font-mono tracking-widest uppercase hover:bg-neutral-800 transition-all cursor-pointer shadow-sm"
                  >
                    SUBMIT ANOTHER INQUIRY
                  </button>
                </div>
              ) : (
                /* Form Inputs */
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name Field */}
                  <div>
                    <label className="block text-[10px] font-mono tracking-[0.25em] text-neutral-600 uppercase mb-2 font-semibold">
                      FULL NAME *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Lord Julian Vance / Fenix Collections"
                      className="w-full px-4 py-3.5 bg-neutral-50 border border-neutral-300 rounded-none text-black text-sm font-sans placeholder-neutral-400 focus:outline-none focus:border-black focus:bg-white transition-all"
                    />
                  </div>

                  {/* Phone & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone Number Field */}
                    <div>
                      <label className="block text-[10px] font-mono tracking-[0.25em] text-neutral-600 uppercase mb-2 font-semibold">
                        PHONE NUMBER *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+41 44 214 0000"
                        className="w-full px-4 py-3.5 bg-neutral-50 border border-neutral-300 rounded-none text-black text-sm font-sans placeholder-neutral-400 focus:outline-none focus:border-black focus:bg-white transition-all font-mono"
                      />
                    </div>

                    {/* Email Field */}
                    <div>
                      <label className="block text-[10px] font-mono tracking-[0.25em] text-neutral-600 uppercase mb-2 font-semibold">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="collector@residence.com"
                        className="w-full px-4 py-3.5 bg-neutral-50 border border-neutral-300 rounded-none text-black text-sm font-sans placeholder-neutral-400 focus:outline-none focus:border-black focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Inquiry Discipline / Practice */}
                  <div>
                    <label className="block text-[10px] font-mono tracking-[0.25em] text-neutral-600 uppercase mb-2 font-semibold">
                      PRACTICE DISCIPLINE / SERVICE
                    </label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 bg-neutral-50 border border-neutral-300 rounded-none text-black text-sm font-sans focus:outline-none focus:border-black focus:bg-white transition-all cursor-pointer"
                    >
                      <option value="Private Curation & Advisory">01 • PRIVATE CURATION & ADVISORY</option>
                      <option value="Museum & Biennale Loans">02 • MUSEUM & BIENNALE LOANS</option>
                      <option value="Site-Specific Commissions">03 • SITE-SPECIFIC ARCHITECTURAL COMMISSIONS</option>
                      <option value="Kinetic & Digital Suites">04 • KINETIC & DIGITAL NEW MEDIA SUITES</option>
                      <option value="Conservation & Forensics">05 • CONSERVATION & LABORATORY RESTORATION</option>
                      <option value="Exclusive Salon & Vault Access">06 • EXCLUSIVE ZURICH VAULT ACCESS</option>
                    </select>
                  </div>

                  {/* Notes / Message Field */}
                  <div>
                    <label className="block text-[10px] font-mono tracking-[0.25em] text-neutral-600 uppercase mb-2 font-semibold">
                      CURATORIAL NOTES / SPECIFICATIONS *
                    </label>
                    <textarea
                      name="notes"
                      required
                      rows={4}
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Please describe your architectural space volumes, acquisition intentions, or specific masterwork inquiries..."
                      className="w-full px-4 py-3.5 bg-neutral-50 border border-neutral-300 rounded-none text-black text-sm font-sans placeholder-neutral-400 focus:outline-none focus:border-black focus:bg-white transition-all resize-none leading-relaxed"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-8 bg-black text-white font-mono text-xs font-bold tracking-[0.28em] uppercase hover:bg-neutral-800 transition-all cursor-pointer disabled:opacity-50 flex items-center justify-center gap-3 shadow-[0_4px_20px_rgba(0,0,0,0.18)]"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                          TRANSMITTING TO CURATOR...
                        </>
                      ) : (
                        'SUBMIT CURATORIAL INQUIRY →'
                      )}
                    </button>
                    <div className="text-center mt-3">
                      <span className="text-[9px] font-mono tracking-widest text-neutral-500 uppercase font-medium">
                        CONFIDENTIAL SALON TRANSMISSION • 24-HOUR RESPONSE GUARANTEE
                      </span>
                    </div>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
