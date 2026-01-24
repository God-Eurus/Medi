import React, { useState, useRef, useEffect } from 'react';
import { 
  Shield, 
  Award, 
  ArrowRight, 
  CheckCircle, 
  UploadCloud, 
  ChevronDown, 
  Search, 
  X,
  Globe, 
  Headphones, 
  Building2 
} from 'lucide-react';
import { COUNTRY_CODES, SPECIALTIES } from './constants';

interface FormData {
  name: string;
  email: string;
  phone: string;
  specialty: string;
  need: string;
}

export default function HeroTwo() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    specialty: '',
    need: ''
  });
  
  // File State
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // Country Dropdown State
  const defaultCountry = COUNTRY_CODES.find(c => c.country === 'IN') || COUNTRY_CODES[0];
  const [selectedCountry, setSelectedCountry] = useState(defaultCountry);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Submission State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter countries
  const filteredCountries = COUNTRY_CODES.filter((item) => {
    const searchLower = searchQuery.toLowerCase();
    return (
      item.label.toLowerCase().includes(searchLower) || 
      item.code.includes(searchQuery)
    );
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const removeFile = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedFile(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formSubmitData = new FormData();
      
      formSubmitData.append("Name", formData.name);
      formSubmitData.append("Email", formData.email);
      formSubmitData.append("Phone", `${selectedCountry.code} ${formData.phone}`);
      formSubmitData.append("Specialty", formData.specialty || "Not Selected");
      formSubmitData.append("Need", formData.need);
      
      formSubmitData.append("_subject", "New Treatment Inquiry + File");
      formSubmitData.append("_captcha", "false"); 
      
      if (selectedFile) {
        formSubmitData.append("attachment", selectedFile);
      }

      const response = await fetch("https://formsubmit.co/medivoyagehealthcare@gmail.com", { 
        method: "POST",
        body: formSubmitData,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', specialty: '', need: '' });
      setSelectedFile(null);

      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Error submitting inquiry:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-screen w-full flex items-start pt-24 lg:pt-36 bg-[#0F2622]">
      
      {/* 1. BACKGROUND IMAGE & OVERLAY */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="/bgimage.jpg" 
          alt="Modern Medical Facility" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2622]/95 via-[#0F2622]/80 to-[#0F2622]/40"></div>
      </div>

      {/* 2. CONTENT */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        
        {/* RESPONSIVE LAYOUT: Flex Column on Mobile (Heading -> Form), Grid on Desktop */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: Text Content */}
          <div className="text-white pt-4 w-full">
            
            {/* Tagline - Hidden on Mobile */}
            <div className="hidden lg:inline-flex items-center gap-2 border border-[#D4C5A9]/30 bg-[#D4C5A9]/10 text-[#D4C5A9] px-4 py-1.5 text-sm font-medium mb-6 backdrop-blur-sm font-['Poppins']">
              <Shield className="w-4 h-4" />
              <span>Clinically-Led Medical Travel</span>
            </div>

            {/* Main Heading - Visible Always */}
            <h1 className="text-4xl lg:text-5xl font-['Montserrat'] font-bold leading-tight mb-2 lg:mb-4 text-white drop-shadow-lg">
              Doctor Led. World Class HealthCare.<br />
              <span className="text-[#D4C5A9]">Zero Waiting Time.</span>
            </h1>

            {/* Description - Hidden on Mobile */}
            <p className="hidden lg:block text-xl text-gray-200 mb-8 leading-relaxed max-w-lg drop-shadow-md font-medium font-['Poppins']">
              Connect with internationally accredited hospitals and board-certified surgeons. We handle your entire journey—from free consultation to recovery.
            </p>

             {/* Trust Badges - Hidden on Mobile */}
             <div className="hidden lg:grid grid-cols-2 gap-x-6 gap-y-6 border-t border-white/20 pt-8 font-['Poppins']">
                 <div className="flex items-center gap-3">
                    <div className="p-2 bg-black/20 backdrop-blur-md border border-white/10"><Award className="w-5 h-5 text-[#D4C5A9]" /></div>
                    <div><span className="block text-sm font-bold text-white shadow-black drop-shadow-md">JCI Accredited</span><span className="text-xs text-[#D4C5A9]">Global Standard</span></div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-black/20 backdrop-blur-md border border-white/10"><Building2 className="w-5 h-5 text-[#D4C5A9]" /></div>
                    <div><span className="block text-sm font-bold text-white shadow-black drop-shadow-md">Verified Hospitals</span><span className="text-xs text-[#D4C5A9]">Clinically Audited</span></div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-black/20 backdrop-blur-md border border-white/10"><Globe className="w-5 h-5 text-[#D4C5A9]" /></div>
                    <div><span className="block text-sm font-bold text-white shadow-black drop-shadow-md">Intl. Standards</span><span className="text-xs text-[#D4C5A9]">World-Class Care</span></div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-black/20 backdrop-blur-md border border-white/10"><Headphones className="w-5 h-5 text-[#D4C5A9]" /></div>
                    <div><span className="block text-sm font-bold text-white shadow-black drop-shadow-md">24/7 Support</span><span className="text-xs text-[#D4C5A9]">Always With You</span></div>
                  </div>
              </div>
          </div>

          {/* RIGHT COLUMN: The GLASS Form */}
          <div className="w-full flex justify-center lg:justify-end mt-2 lg:mt-0">
            <div 
              className="w-full max-w-md bg-white/5 border border-white/20 p-6 md:p-12 shadow-2xl relative rounded-none backdrop-blur-md font-['Poppins']"
              style={{ 
                WebkitBackdropFilter: 'blur(24px)', 
                backdropFilter: 'blur(24px)',
                transform: 'translate3d(0,0,0)' 
              }} 
            >
                <div className="absolute -top-4 right-6 bg-[#D4C5A9] text-[#0F2622] text-[10px] font-bold px-3 py-1 shadow-lg uppercase tracking-wide font-['Montserrat']">
                  Free Quote in 24h
                </div>

                <h2 className="text-2xl font-['Montserrat'] font-bold text-white mb-2">
                  Get Your Treatment Plan
                </h2>
                <p className="text-gray-300 mb-6 text-sm">
                  Speak to a specialist. Confidential & Free.
                </p>
                
                {submitStatus === 'success' && (
                  <div className="mb-4 p-3 bg-emerald-900/50 border border-emerald-500/30 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <p className="text-emerald-200 font-medium text-xs">Request received! We will be in touch shortly.</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-4 p-3 bg-red-900/50 border border-red-500/30">
                    <p className="text-red-200 font-medium text-xs">Connection error. Please try again.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Name Input */}
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-none focus:outline-none focus:bg-white/20 focus:border-[#D4C5A9] transition-all placeholder-gray-400 text-sm text-white"
                    placeholder="Full Name"
                  />

                  {/* Phone Input Group with Country Dropdown */}
                  <div className="flex relative" ref={dropdownRef}>
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="flex items-center gap-1 px-3 py-3 bg-white/10 border border-white/10 border-r-0 text-white text-sm hover:bg-white/20 transition-colors w-24 justify-between flex-shrink-0"
                    >
                      <span className="truncate">{selectedCountry?.code || "+91"}</span>
                      <ChevronDown size={14} className={`transform transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {isDropdownOpen && (
                      <div className="absolute top-full left-0 w-72 bg-[#0F2622] border border-[#D4C5A9]/30 shadow-xl z-50 max-h-60 flex flex-col mt-1">
                        <div className="p-2 border-b border-white/10 sticky top-0 bg-[#0F2622] z-10">
                          <div className="relative">
                            <Search size={14} className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                              type="text"
                              autoFocus
                              placeholder="Search country..."
                              className="w-full bg-white/5 border border-white/10 rounded-sm py-1.5 pl-8 pr-2 text-xs text-white focus:outline-none focus:border-[#D4C5A9]"
                              value={searchQuery}
                              onChange={(e) => setSearchQuery(e.target.value)}
                            />
                          </div>
                        </div>
                        
                        <div className="overflow-y-auto flex-1">
                          {filteredCountries.length > 0 ? (
                            filteredCountries.map((country, idx) => (
                              <button
                                key={`${country.country}-${idx}`}
                                type="button"
                                className="w-full text-left px-3 py-2 text-sm text-gray-300 hover:bg-white/10 hover:text-white flex items-center gap-2"
                                onClick={() => {
                                  setSelectedCountry(country);
                                  setIsDropdownOpen(false);
                                  setSearchQuery("");
                                }}
                              >
                                <span className="truncate">{country.label}</span>
                              </button>
                            ))
                          ) : (
                            <div className="p-3 text-xs text-gray-500 text-center">No results found</div>
                          )}
                        </div>
                      </div>
                    )}

                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-none focus:outline-none focus:bg-white/20 focus:border-[#D4C5A9] transition-all placeholder-gray-400 text-sm text-white"
                      placeholder="Phone Number"
                    />
                  </div>

                  {/* Email Input */}
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-none focus:outline-none focus:bg-white/20 focus:border-[#D4C5A9] transition-all placeholder-gray-400 text-sm text-white"
                    placeholder="Email Address"
                  />

                  {/* Specialty Dropdown */}
                  <div className="relative">
                    <select
                      required
                      value={formData.specialty}
                      onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                      className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-none focus:outline-none focus:bg-white/20 focus:border-[#D4C5A9] transition-all text-sm text-white appearance-none cursor-pointer"
                    >
                      <option value="" disabled className="bg-[#0F2622] text-gray-400">Select Specialty / Treatment</option>
                      {SPECIALTIES.map((spec, idx) => (
                        <option key={idx} value={spec} className="bg-[#0F2622] text-white">
                          {spec}
                        </option>
                      ))}
                    </select>
                    <ChevronDown size={14} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>

                  {/* Description Textarea */}
                  <textarea
                    required
                    rows={2}
                    value={formData.need}
                    onChange={(e) => setFormData({ ...formData, need: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-none focus:outline-none focus:bg-white/20 focus:border-[#D4C5A9] transition-all resize-none placeholder-gray-400 text-sm text-white"
                    placeholder="Briefly describe your condition or requirements..."
                  />

                  {/* File Upload Input */}
                  <div className="relative">
                    <input 
                      type="file" 
                      id="file-upload" 
                      className="hidden" 
                      onChange={handleFileChange}
                      accept="image/png, image/jpeg, application/pdf"
                    />
                    <label 
                      htmlFor="file-upload" 
                      className={`flex items-center justify-between w-full px-4 py-3 border border-dashed rounded-none cursor-pointer transition-all ${
                        selectedFile 
                          ? 'bg-[#D4C5A9]/10 border-[#D4C5A9] text-[#D4C5A9]' 
                          : 'bg-white/5 border-white/20 text-gray-400 hover:text-white hover:border-white/40'
                      }`}
                    >
                      <div className="flex items-center gap-3 overflow-hidden">
                        <UploadCloud size={18} />
                        <span className="text-sm truncate">
                          {selectedFile ? selectedFile.name : "Upload Reports (PDF/Image)"}
                        </span>
                      </div>
                      
                      {selectedFile && (
                        <button 
                          type="button" 
                          onClick={removeFile}
                          className="p-1 hover:bg-white/10 rounded-full"
                        >
                          <X size={14} />
                        </button>
                      )}
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full text-[#0F2622] font-['Montserrat'] font-bold text-base py-4 px-6 rounded-none transition-all transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(212,197,169,0.4)] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 mt-2"
                    style={{ backgroundColor: '#D4C5A9' }}
                  >
                    {isSubmitting ? 'Sending...' : 'Request Consultation'}
                    {!isSubmitting && <ArrowRight className="w-4 h-4" />}
                  </button>
                  
                  <p className="text-[10px] text-gray-400 text-center flex justify-center items-center gap-1 mt-2 opacity-70">
                    <Shield size={10} /> 100% Secure & HIPAA Compliant
                  </p>
                </form>
              </div>
          </div>

        </div>
      </div>
    </section>
  );
}