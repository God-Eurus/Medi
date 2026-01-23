import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  ShieldCheck, Globe, Heart, ChevronDown, Paperclip, 
  CheckCircle, X, Loader2, Search 
} from 'lucide-react';
import { COUNTRY_CODES, SPECIALTIES } from './constants';

// 🔴 PASTE YOUR GOOGLE SCRIPT WEB APP URL HERE
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwxJMtZ41V-eXBbi32hlNDFa5repF8pnv8uf5P5LogldVmvmkzJ0XgG503_r4Qx2wi9-A/exec";

export default function Hero() {
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // State for Custom Dropdowns
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  const [isSpecialtyOpen, setIsSpecialtyOpen] = useState(false);
  const [specialtySearch, setSpecialtySearch] = useState("");

  // Refs for clicking outside
  const countryRef = useRef(null);
  const specialtyRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    countryCode: '+91',
    phone: '',
    email: '',
    specialty: '',
    location: 'Jaipur',
    comments: '',
    documents: null
  });

  // Handle click outside to close dropdowns
  useEffect(() => {
    function handleClickOutside(event) {
      if (countryRef.current && !countryRef.current.contains(event.target)) {
        setIsCountryOpen(false);
      }
      if (specialtyRef.current && !specialtyRef.current.contains(event.target)) {
        setIsSpecialtyOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData(prev => ({ ...prev, documents: e.target.files[0] }));
    }
  };

  const validateForm = () => {
    if (!formData.name.trim()) return false;
    if (!formData.phone.trim()) return false;
    if (!formData.email.trim()) return false;
    if (!formData.specialty) return false;
    return true;
  };

  const handleSubmit = (action) => {
    if (!validateForm()) {
      alert("Please fill in all mandatory fields (Name, Phone, Email, Specialty).");
      return;
    }

    setIsSubmitting(true);
    const timestamp = new Date().toLocaleString();
    const formParams = new URLSearchParams();
    formParams.append('Date', timestamp);
    formParams.append('Type', action);
    formParams.append('Name', formData.name);
    formParams.append('Phone', `'${formData.countryCode} ${formData.phone}`);
    formParams.append('Email', formData.email);
    formParams.append('Specialty', formData.specialty);
    formParams.append('Location', formData.location);
    formParams.append('Comments', formData.comments);

    fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      body: formParams,
      mode: "no-cors"
    })
    .then(() => {
        setIsSubmitting(false);
        setShowSuccess(true);
    })
    .catch((error) => {
        setIsSubmitting(false);
        alert("Connection error. Please check your internet.");
    });
  };

  const closePopupAndReturnHome = () => {
    setShowSuccess(false);
    navigate('/'); 
    setFormData({
        name: '', countryCode: '+91', phone: '', email: '', specialty: '', location: 'Jaipur', comments: '', documents: null
    });
    setSpecialtySearch("");
  };

  // Filter Logic
  const filteredCountries = COUNTRY_CODES.filter(item => 
    item.label.toLowerCase().includes(countrySearch.toLowerCase()) || 
    item.code.includes(countrySearch)
  );

  const filteredSpecialties = SPECIALTIES.filter(item => 
    item.toLowerCase().includes(specialtySearch.toLowerCase())
  );

  // STYLE CONSTANTS - SHARP & PROFESSIONAL
  // Removed "rounded", removed background color, added bottom border only
  const inputBase = "bg-transparent border-b border-white/20 text-white text-sm rounded-none px-2 py-3 placeholder:text-white/30 focus:outline-none focus:border-[#D4C5A9] focus:bg-white/5 transition-all w-full";
  
  // Dropdown container styling - Sharp edges
  const dropdownBase = "absolute top-full left-0 mt-0 w-full max-h-60 bg-[#0F2622] border border-[#D4C5A9]/30 shadow-2xl overflow-y-auto z-50 text-left rounded-none";

  return (
  <section className="relative w-full min-h-screen overflow-hidden flex flex-col items-center justify-center py-12">
      
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0 bg-[#0F2622]">
        <motion.div
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
            className="w-full h-full transform-gpu will-change-transform"
            style={{ backfaceVisibility: 'hidden' }} 
        >
            <img src="/bgimgg.png" alt="Medical Tourism" className="w-full h-full object-cover opacity-60"/>
        </motion.div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex flex-col items-center gap-8">
        
        {/* HEADER TEXT */}
        <motion.div 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center space-y-4 max-w-4xl mx-auto pt-10"
        >
            <h1 className="text-3xl md:text-5xl font-serif text-white leading-tight">
                Doctor Led. <span className="text-[#D4C5A9] font-light">World Class HealthCare.</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-serif text-white leading-tight">
                Zero Waiting Time. <span className="text-[#D4C5A9] font-light">Transparent Pricing.</span> 
            </h2>
        </motion.div>

        {/* FORM CONTAINER - SHARP & GLASS */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full max-w-5xl" 
        >
            <div 
                // Removed rounded-3xl, added rounded-none, sharper border
                className="bg-white/[0.02] border border-white/20 p-8 md:p-12 shadow-2xl relative rounded-none backdrop-blur-md"
                style={{ 
                  WebkitBackdropFilter: 'blur(24px)', 
                  backdropFilter: 'blur(24px)',
                  transform: 'translate3d(0,0,0)' 
                }} 
            >
                <h3 className="text-2xl font-serif text-white text-center mb-8 tracking-wide">GET PERSONALIZED QUOTATION</h3>
                
                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                    
                    {/* ROW 1 */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        <input 
                            type="text" 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="PATIENT NAME *" 
                            className={`${inputBase} appearance-none`}
                        />
                        
                        {/* Custom Phone Input */}
                        <div className="flex gap-4">
                             <div className="relative w-[110px] shrink-0" ref={countryRef}>
                                <button
                                    type="button"
                                    onClick={() => setIsCountryOpen(!isCountryOpen)}
                                    // Made this look like an input
                                    className={`${inputBase} flex items-center justify-between text-left`}
                                >
                                    <span className="truncate">{formData.countryCode}</span>
                                    <ChevronDown size={12} className="opacity-50" />
                                </button>

                                {isCountryOpen && (
                                    <div className={dropdownBase} style={{ width: '300px' }}>
                                        <div className="p-2 sticky top-0 bg-[#0F2622] border-b border-white/10">
                                            <div className="flex items-center bg-white/5 px-2 border border-white/10">
                                                <Search size={12} className="text-white/50" />
                                                <input 
                                                    autoFocus
                                                    className="w-full bg-transparent p-2 text-xs text-white outline-none placeholder:text-white/30"
                                                    placeholder="Search country..."
                                                    value={countrySearch}
                                                    onChange={(e) => setCountrySearch(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        {filteredCountries.map((item) => (
                                            <div 
                                                key={item.code + item.country} 
                                                onClick={() => {
                                                    setFormData(prev => ({ ...prev, countryCode: item.code }));
                                                    setIsCountryOpen(false);
                                                }}
                                                className="px-4 py-3 hover:bg-[#D4C5A9] hover:text-[#0F2622] cursor-pointer text-xs text-white/90 border-b border-white/5 last:border-0 transition-colors"
                                            >
                                                {item.label}
                                            </div>
                                        ))}
                                    </div>
                                )}
                             </div>

                             <input 
                                type="tel" 
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="PHONE NUMBER *" 
                                className={`${inputBase} flex-1 appearance-none`}
                            />
                        </div>

                        <input 
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="EMAIL ADDRESS *" 
                            className={`${inputBase} appearance-none`}
                        />
                    </div>

                    {/* ROW 2 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        
                        {/* Custom Specialty */}
                        <div className="relative" ref={specialtyRef}>
                             <div className="relative">
                                <input 
                                    type="text" 
                                    placeholder="SELECT SPECIALTY *"
                                    value={specialtySearch || formData.specialty} 
                                    onChange={(e) => {
                                        setSpecialtySearch(e.target.value);
                                        setFormData(prev => ({...prev, specialty: ""})); 
                                        setIsSpecialtyOpen(true);
                                    }}
                                    onFocus={() => {
                                        setSpecialtySearch(""); 
                                        setIsSpecialtyOpen(true);
                                    }}
                                    className={`${inputBase} appearance-none pr-8`}
                                />
                                <ChevronDown className="absolute right-2 top-4 text-white/50 pointer-events-none" size={14} />
                             </div>

                             {isSpecialtyOpen && (
                                <div className={dropdownBase}>
                                    {filteredSpecialties.length > 0 ? (
                                        filteredSpecialties.map((spec) => (
                                            <div 
                                                key={spec} 
                                                onClick={() => {
                                                    setFormData(prev => ({ ...prev, specialty: spec }));
                                                    setSpecialtySearch(""); 
                                                    setIsSpecialtyOpen(false);
                                                }}
                                                className="px-4 py-3 hover:bg-[#D4C5A9] hover:text-[#0F2622] cursor-pointer text-sm text-white/90 border-b border-white/5 last:border-0 transition-colors"
                                            >
                                                {spec}
                                            </div>
                                        ))
                                    ) : (
                                        <div className="p-4 text-sm text-white/40 text-center">No specialty found</div>
                                    )}
                                </div>
                             )}
                        </div>

                        {/* Location */}
                        <div className="relative">
                            <select 
                                name="location" 
                                value={formData.location} 
                                onChange={handleChange} 
                                className={`${inputBase} appearance-none bg-transparent`}
                            >
                              <option value="" className="text-black bg-[#D4C5A9]">PREFERRED LOCATION</option>
                              <option value="Jaipur" className="text-white bg-[#0F2622]">Jaipur, India</option>
                              <option value="Bangalore" className="text-white bg-[#0F2622]">Bangalore, India</option>
                              <option value="Delhi" className="text-white bg-[#0F2622]">Delhi, India</option>
                              <option value="Mumbai" className="text-white bg-[#0F2622]">Mumbai, India</option>
                              <option value="Ahemdabad" className="text-white bg-[#0F2622]">Ahemdabad India</option>
                            </select>
                            <ChevronDown className="absolute right-2 top-4 text-white/50 pointer-events-none" size={14} />
                        </div>
                    </div>

                    {/* ROW 3 */}
                    <div className="flex gap-6 items-end">
                        <input 
                            name="comments" 
                            value={formData.comments} 
                            onChange={handleChange} 
                            type="text" 
                            placeholder="DESCRIBE YOUR MEDICAL NEEDS..." 
                            className={`${inputBase} flex-1 appearance-none`}
                        />
                        <div className="relative group shrink-0">
                            <input type="file" id="file-upload" className="hidden" onChange={handleFileChange}/>
                            <label htmlFor="file-upload" className="flex items-center gap-2 px-6 py-3 border border-white/30 hover:border-[#D4C5A9] bg-transparent text-white/70 hover:text-[#D4C5A9] cursor-pointer transition-all rounded-none" title="Upload Documents">
                                <Paperclip size={18} />
                                <span className="text-xs uppercase tracking-wider hidden sm:inline">Attach Reports</span>
                            </label>
                        </div>
                    </div>
                    
                    <div className="h-px bg-white/10 my-6"></div>

                    {/* Submit Button - SHARP */}
                    <div className="flex justify-center">
                        <button 
                            type="button" 
                            disabled={isSubmitting}
                            onClick={() => handleSubmit('quotation')} 
                            className="w-full md:w-1/3 bg-[#D4C5A9] hover:bg-[#C0B090] text-[#0F2622] text-sm tracking-widest font-bold py-4 rounded-none transition-all shadow-xl shadow-black/20 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 border border-[#D4C5A9]"
                        >
                            {isSubmitting ? <Loader2 className="animate-spin" size={18} /> : "GET FREE QUOTATION"}
                        </button>
                    </div>
                </form>

                {/* Trust Badges */}
                <div className="flex justify-center gap-8 mt-8 pt-6 border-t border-white/10 opacity-60">
                    <div className="flex items-center gap-3"><ShieldCheck className="text-[#D4C5A9]" size={18} /><span className="text-[10px] md:text-xs uppercase tracking-widest text-white">Verified Hospitals</span></div>
                    <div className="flex items-center gap-3"><Globe className="text-[#D4C5A9]" size={18} /><span className="text-[10px] md:text-xs uppercase tracking-widest text-white">Intl. Standards</span></div>
                    <div className="flex items-center gap-3"><Heart className="text-[#D4C5A9]" size={18} /><span className="text-[10px] md:text-xs uppercase tracking-widest text-white">24/7 Support</span></div>
                </div>
            </div>
        </motion.div>
      </div>

      {/* SUCCESS POPUP - SHARP */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              // Sharp corners here too
              className="bg-white rounded-none p-10 max-w-sm w-full text-center shadow-2xl relative border-t-4 border-[#1A3C34]"
            >
              <button 
                onClick={closePopupAndReturnHome} 
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={20} />
              </button>

              <div className="mx-auto w-16 h-16 bg-[#1A3C34]/10 rounded-none flex items-center justify-center mb-6">
                <CheckCircle className="text-[#1A3C34] w-10 h-10" />
              </div>

              <h3 className="text-2xl font-serif text-[#1A3C34] mb-2">Request Received</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                Thank you. Our medical team will review your details and connect with you shortly.
              </p>

              <button 
                onClick={closePopupAndReturnHome}
                className="w-full bg-[#1A3C34] text-white text-xs uppercase tracking-widest font-bold py-4 rounded-none hover:bg-[#142F29] transition-colors"
              >
                Return to Home
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}