import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  ShieldCheck, 
  Globe, 
  Heart, 
  ChevronDown,
  Paperclip,
  CheckCircle,
  X,
  Loader2 // Added for loading state
} from 'lucide-react';

// 🔴 PASTE YOUR GOOGLE SCRIPT WEB APP URL HERE
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwxJMtZ41V-eXBbi32hlNDFa5repF8pnv8uf5P5LogldVmvmkzJ0XgG503_r4Qx2wi9-A/exec";

// Common Country Codes List
const COUNTRY_CODES = [
  { code: "+91", country: "IN", label: "🇮🇳 India (+91)" },
  { code: "+1", country: "US", label: "🇺🇸 United States (+1)" },
  { code: "+44", country: "GB", label: "🇬🇧 United Kingdom (+44)" },
  { code: "+971", country: "AE", label: "🇦🇪 UAE (+971)" },
  { code: "+880", country: "BD", label: "🇧🇩 Bangladesh (+880)" },
  { code: "+1", country: "CA", label: "🇨🇦 Canada (+1)" },
  { code: "+61", country: "AU", label: "🇦🇺 Australia (+61)" },
  { code: "+966", country: "SA", label: "🇸🇦 Saudi Arabia (+966)" },
  { code: "+234", country: "NG", label: "🇳🇬 Nigeria (+234)" },
  { code: "+254", country: "KE", label: "🇰🇪 Kenya (+254)" },
  // ... (You can keep your full list here, shortened for brevity)
];

export default function Hero() {
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // New Loading State

  const [formData, setFormData] = useState({
    name: '',
    countryCode: '+91',
    phone: '',
    email: '',
    specialty: '',
    treatment: '',
    location: 'Jaipur',
    comments: '',
    documents: null
  });

  const treatmentsMap = {
    "CARDIAC SCIENCES": ["Angioplasty", "CABG", "Valve Replacement", "Pacemaker"],
    "ORTHOPAEDICS": ["Knee Replacement", "Hip Replacement", "ACL Reconstruction", "Spine Surgery"],
    "NEURO SCIENCES": ["Brain Tumour Surgery", "Spine Surgery", "Epilepsy Surgery"],
    "ONCOLOGY": ["Chemotherapy", "Radiation", "Surgical Oncology", "PET Scan"],
    "GENERAL SURGERY": ["Hernia Repair", "Gallbladder Removal", "Appendectomy"],
    "ENT": ["Cochlear Implant", "Sinus Surgery", "Tonsillectomy"],
    "GYNAECOLOGY": ["IVF", "Hysterectomy", "C-Section", "Fibroid Removal"],
    "UROLOGY": ["Kidney Transplant", "Kidney Stones", "Prostate Surgery"],
    "GASTROENTEROLOGY": ["Liver Transplant", "Endoscopy", "Colonoscopy"],
    "COSMETIC SURGERY": ["Hair Transplant", "Liposuction", "Rhinoplasty"],
    "DENTAL": ["Implants", "Root Canal", "Veneers"],
    "OTHERS": ["General Inquiry"]
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      ...(name === "specialty" ? { treatment: "" } : {}) 
    }));
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
    // Treatment is mandatory if specialty has treatments
    const treatments = treatmentsMap[formData.specialty];
    if (treatments && treatments.length > 0 && !formData.treatment) return false;
    return true;
  };

  const handleSubmit = (action) => {
    if (!validateForm()) {
      alert("Please fill in all mandatory fields.");
      return;
    }

    setIsSubmitting(true);

    // 1. Create a timestamp
    const timestamp = new Date().toLocaleString();

    // 2. Use URLSearchParams (More reliable for Google Sheets than FormData)
    const formParams = new URLSearchParams();
    formParams.append('Date', timestamp);
    formParams.append('Type', action); // 'quotation' or 'consultation'
    formParams.append('Name', formData.name);
    formParams.append('Phone', `'${formData.countryCode} ${formData.phone}`); // Adding ' prevents Excel math formatting
    formParams.append('Email', formData.email);
    formParams.append('Specialty', formData.specialty);
    formParams.append('Treatment', formData.treatment);
    formParams.append('Location', formData.location);
    formParams.append('Comments', formData.comments);

    // 3. Send using "no-cors"
    fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      body: formParams,
      mode: "no-cors" // IMPORTANT: Allows the browser to send data to a different domain
    })
    .then(() => {
        // With 'no-cors', we can't read the response, so if it doesn't throw an error, we assume success.
        setIsSubmitting(false);
        setShowSuccess(true);
        console.log("Success: Data sent to sheet");
    })
    .catch((error) => {
        setIsSubmitting(false);
        console.error("Error:", error);
        alert("Connection error. Please check your internet.");
    });
  };

  const closePopupAndReturnHome = () => {
    setShowSuccess(false);
    navigate('/'); 
    setFormData({
        name: '', countryCode: '+91', phone: '', email: '', specialty: '', treatment: '', location: 'Jaipur', comments: '', documents: null
    });
  };

  const availableTreatments =
    formData.specialty && treatmentsMap[formData.specialty]
      ? treatmentsMap[formData.specialty]
      : [];

  const inputBase = "bg-black/20 border border-white/10 text-white text-sm rounded-lg px-3 py-2.5 placeholder:text-white/40 focus:outline-none focus:border-[#D4C5A9] transition-colors";
  const labelBase = "text-[10px] text-[#D4C5A9] uppercase tracking-wider ml-1 mb-1 block";

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex flex-col justify-center py-12 lg:py-0">
      
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <motion.div
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
            className="w-full h-full"
        >
           {/* Replace with your actual image path */}
            <img src="/hospitalimage.jpg" alt="Medical Tourism" className="w-full h-full object-cover"/>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2622]/95 via-[#0F2622]/85 to-[#0F2622]/90"></div>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">
        
        {/* LEFT TEXT */}
        <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-center lg:text-left pt-10 lg:pt-0 hidden lg:block"
        >
            <h1 className="text-4xl lg:text-6xl font-serif text-white leading-tight">
                DOCTOR LED. <br />
                <span className="text-[#D4C5A9] font-light">WORLD CLASS HEALTHCARE.</span>
            </h1>
            <h1 className="text-4xl lg:text-6xl font-serif text-white leading-tight">
                ZERO WAITING TIME. <br />
                <span className="text-[#D4C5A9] font-light">TRANSPARENT PRICING.</span> 
            </h1>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full max-w-[420px] mx-auto lg:ml-auto"
        >
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-2xl shadow-2xl relative">
                <h3 className="text-xl font-serif text-white text-center mb-4">Get Personalized Help</h3>
                
                <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-3">
                        {/* Name */}
                        <input 
                            type="text" 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Name *" 
                            className={`${inputBase} w-full`}
                        />
                        
                        {/* Phone with Country Code */}
                        <div className="flex gap-2">
                             <div className="relative w-[110px] shrink-0">
                                <select
                                    name="countryCode"
                                    value={formData.countryCode}
                                    onChange={handleChange}
                                    className={`${inputBase} w-full appearance-none pr-6`}
                                >
                                    {COUNTRY_CODES.map((item) => (
                                        <option key={item.code + item.country} value={item.code} className="bg-[#0F2622]">
                                            {item.label}
                                        </option>
                                    ))}
                                </select>
                                <ChevronDown className="absolute right-2 top-3 text-white/50 pointer-events-none" size={12} />
                             </div>
                             <input 
                                type="tel" 
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Phone Number *" 
                                className={`${inputBase} flex-1`}
                            />
                        </div>

                        {/* Email */}
                        <input 
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email Address *" 
                            className={`${inputBase} w-full`}
                        />
                    </div>
                    
                    <div className="h-px bg-white/10 my-2"></div>
                    
                    {/* Specialty & Treatment */}
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label className={labelBase}>Specialty <span className="text-red-400">*</span></label>
                            <div className="relative">
                                <select name="specialty" value={formData.specialty} onChange={handleChange} className={`${inputBase} w-full appearance-none`}>
                                    <option value="" className="bg-[#0F2622]">Select...</option>
                                    {Object.keys(treatmentsMap).map(specialty => (
                                        <option key={specialty} value={specialty} className="bg-[#0F2622]">{specialty}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div>
                            <label className={labelBase}>Treatment <span className="text-red-400">*</span></label>
                            <div className="relative">
                                <select name="treatment" value={formData.treatment} onChange={handleChange} disabled={!formData.specialty} className={`${inputBase} w-full appearance-none disabled:opacity-50`}>
                                    <option value="" className="bg-[#0F2622]">{formData.specialty ? "Select..." : "Select Specialty"}</option>
                                    {availableTreatments.map(treat => (
                                        <option key={treat} value={treat} className="bg-[#0F2622]">{treat}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Location */}
                    <div>
                        <label className={labelBase}>Preferred Location <span className="text-red-400">*</span></label>
                        <div className="relative">
                            <select name="location" value={formData.location} onChange={handleChange} className={`${inputBase} w-full appearance-none`}>
                              <option value="Jaipur" className="bg-[#0F2622]">Jaipur, India</option>
                                <option value="Bangalore" className="bg-[#0F2622]">Bangalore, India</option>
                                <option value="Delhi" className="bg-[#0F2622]">Delhi, India</option>
                                <option value="Mumbai" className="bg-[#0F2622]">Mumbai, India</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-3.5 text-white/50 pointer-events-none" size={14} />
                        </div>
                    </div>

                    {/* Comments & File */}
                    <div className="flex gap-2 items-center">
                        <input name="comments" value={formData.comments} onChange={handleChange} type="text" placeholder="Describe your needs..." className={`${inputBase} flex-1`}/>
                        <div className="relative group">
                            <input type="file" id="file-upload" className="hidden" onChange={handleFileChange}/>
                            <label htmlFor="file-upload" className="flex items-center justify-center w-10 h-[42px] border border-white/20 rounded-lg bg-black/10 hover:bg-black/20 text-white/60 hover:text-[#D4C5A9] cursor-pointer transition-colors" title="Upload Documents">
                                <Paperclip size={18} />
                            </label>
                        </div>
                    </div>

                    {/* Submit Buttons */}
                    <div className="grid  gap-3 pt-2">
                        <button 
                            type="button" 
                            disabled={isSubmitting}
                            onClick={() => handleSubmit('quotation')} 
                            className="bg-[#D4C5A9] hover:bg-[#C0B090] text-[#0F2622] text-sm font-bold py-3 rounded-lg transition-all active:scale-95 shadow-lg shadow-[#D4C5A9]/20 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {isSubmitting ? <Loader2 className="animate-spin" size={16} /> : "Get Quotations"}
                        </button>
                        
                    </div>
                </form>

                <div className="flex justify-center gap-6 mt-4 pt-3 border-t border-white/10 opacity-70">
                    <div className="flex items-center gap-1.5"><ShieldCheck className="text-[#D4C5A9]" size={14} /><span className="text-[9px] uppercase tracking-widest text-white">Trusted</span></div>
                    <div className="flex items-center gap-1.5"><Globe className="text-[#D4C5A9]" size={14} /><span className="text-[9px] uppercase tracking-widest text-white">Global</span></div>
                    <div className="flex items-center gap-1.5"><Heart className="text-[#D4C5A9]" size={14} /><span className="text-[9px] uppercase tracking-widest text-white">Caring</span></div>
                </div>
            </div>
        </motion.div>
      </div>

      {/* SUCCESS POPUP */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl relative"
            >
              <button 
                onClick={closePopupAndReturnHome} 
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={20} />
              </button>

              <div className="mx-auto w-16 h-16 bg-[#1A3C34]/10 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="text-[#1A3C34] w-10 h-10" />
              </div>

              <h3 className="text-2xl font-serif text-[#1A3C34] mb-2">Request Received</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Thank you for trusting us. Our medical team will review your details and connect with you shortly.
              </p>

              <button 
                onClick={closePopupAndReturnHome}
                className="w-full bg-[#1A3C34] text-white font-medium py-3 rounded-lg hover:bg-[#142F29] transition-colors"
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