// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ArrowRight, Star, ShieldCheck } from 'lucide-react';
// import { motion } from 'framer-motion';

// export default function Hero() {
//   const navigate = useNavigate();

//   // Modern Elegant Palette
//   const theme = {
//     bg: '#F2F0EA',          // Soft Alabaster/Linen
//     primary: '#1A3C34',     // Deep Cypress Green (Text/Buttons)
//     secondary: '#C8B092',   // Muted Sand/Gold (Accents)
//     white: '#FFFFFF',
//     textLight: '#5A6C66'    // Muted Sage Grey for body text
//   };

//   // Animation Variants
//   const fadeUp = {
//     hidden: { opacity: 0, y: 30 },
//     visible: (custom) => ({
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: custom * 0.1 }
//     })
//   };

//   return (
//     <section 
//       style={{ backgroundColor: theme.bg }} 
//       className="relative min-h-[90vh] flex items-center overflow-hidden"
//     >
//       {/* 1. Background Ambience (Subtle Gradients) */}
//       <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-gradient-to-b from-[#E6E2D8] to-transparent rounded-full blur-[120px] opacity-60 -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      
//       <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 relative z-10 w-full py-20">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
//           {/* --- LEFT CONTENT (5 Columns) --- */}
//           <motion.div 
//             initial="hidden"
//             animate="visible"
//             className="lg:col-span-5 space-y-8"
//           >
//             {/* Elegant Badge */}
//             <motion.div variants={fadeUp} custom={0}>
//               <div 
//                 style={{ borderColor: theme.primary }}
//                 className="inline-flex items-center gap-2 px-3 py-1 border border-opacity-20 rounded-full"
//               >
//                 <span style={{ backgroundColor: theme.primary }} className="w-1.5 h-1.5 rounded-full" />
//                 <span style={{ color: theme.primary }} className="text-xs font-semibold tracking-[0.15em] uppercase opacity-80">
//                   MediVoyage Exclusive
//                 </span>
//               </div>
//             </motion.div>

//             {/* Headline */}
//             <motion.div variants={fadeUp} custom={1} className="relative">
//               <h1 style={{ color: theme.primary }} className="text-5xl lg:text-6xl xl:text-7xl font-serif font-medium leading-[1.1]">
//                 Healing, <br />
//                 <span className="italic font-light">curated</span> for you.
//               </h1>
//               {/* Decorative line */}
//               <div style={{ backgroundColor: theme.secondary }} className="h-1 w-24 mt-6 rounded-full" />
//             </motion.div>

//             {/* Body */}
//             <motion.p 
//               variants={fadeUp} 
//               custom={2}
//               style={{ color: theme.textLight }} 
//               className="text-lg leading-relaxed max-w-md font-sans"
//             >
//               Experience world-class healthcare seamlessly blended with premium hospitality. From JCI-accredited specialists to luxury recovery stays, we orchestrate every detail.
//             </motion.p>

//             {/* Buttons */}
//             <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-4 pt-4">
//               <button
//                 onClick={() => navigate('/services')}
//                 style={{ backgroundColor: theme.primary, color: theme.bg }}
//                 className="group relative px-8 py-4 rounded-full overflow-hidden transition-all hover:shadow-xl hover:shadow-[#1A3C34]/20"
//               >
//                 <span className="relative z-10 flex items-center gap-2 font-medium tracking-wide">
//                   Explore Services <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
//                 </span>
//               </button>
              
//               <button
//                 onClick={() => navigate('/contact')}
//                 style={{ color: theme.primary, borderColor: theme.primary }}
//                 className="px-8 py-4 rounded-full border border-opacity-20 hover:bg-[#1A3C34] hover:text-[#F2F0EA] hover:border-transparent transition-all font-medium tracking-wide"
//               >
//                 Consult Advisor
//               </button>
//             </motion.div>

//             {/* Trust Indicators */}
//             <motion.div variants={fadeUp} custom={4} className="flex items-center gap-6 pt-6 opacity-80">
//                 <div className="flex -space-x-3">
//                     {[1,2,3].map((i) => (
//                         <div key={i} className="w-10 h-10 rounded-full border-2 border-[#F2F0EA] overflow-hidden">
//                              <img src={`https://i.pravatar.cc/100?img=${20+i}`} alt="Client" className="w-full h-full object-cover" />
//                         </div>
//                     ))}
//                 </div>
//                 <div style={{ color: theme.primary }} className="text-sm font-medium">
//                     <div className="flex items-center gap-1">
//                         <Star size={14} fill={theme.secondary} stroke="none" />
//                         <span>4.9/5 Rating</span>
//                     </div>
//                     <span className="text-xs opacity-60">from 500+ patients</span>
//                 </div>
//             </motion.div>
//           </motion.div>

//           {/* --- RIGHT CONTENT (7 Columns) --- */}
//           <div className="lg:col-span-7 relative h-[500px] lg:h-[700px] flex items-center justify-center lg:justify-end">
            
//             {/* Main Tall Image (Architectural/Sharp) */}
//             <motion.div 
//               initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
//               animate={{ opacity: 1, clipPath: "inset(0% 0 0 0)" }}
//               transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
//               className="relative w-[85%] lg:w-[70%] h-full z-10"
//             >
//               <img 
//                 src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1200&auto=format&fit=crop" 
//                 alt="Luxury Recovery Suite" 
//                 className="w-full h-full object-cover shadow-2xl"
//               />
//               {/* Subtle Overlay gradient */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60"></div>
//             </motion.div>

//             {/* Floating Glass Card (Bottom Left) */}
//             <motion.div 
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.6, duration: 0.8 }}
//               className="absolute bottom-12 left-0 lg:left-12 z-20"
//             >
//                <div className="backdrop-blur-md bg-white/80 border border-white/40 p-6 shadow-[0_8px_32px_rgba(0,0,0,0.12)] max-w-[280px]">
//                   <div className="flex items-start gap-4">
//                     <div style={{ backgroundColor: theme.primary }} className="p-3 text-white">
//                         <ShieldCheck size={24} strokeWidth={1.5} />
//                     </div>
//                     <div>
//                         <h3 style={{ color: theme.primary }} className="font-serif text-lg leading-tight mb-1">JCI Accredited</h3>
//                         <p style={{ color: theme.textLight }} className="text-xs leading-relaxed">
//                             Partnered with India's top tier global standard hospitals.
//                         </p>
//                     </div>
//                   </div>
//                </div>
//             </motion.div>

//              {/* Decorative Element (Top Right) */}
//              <motion.div
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: 0.8 }}
//                 className="absolute top-12 right-12 lg:-right-4 z-20 hidden md:block"
//              >
//                  <img 
//                     src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=400&auto=format&fit=crop" 
//                     alt="Detail" 
//                     className="w-32 h-40 object-cover border-4 border-[#F2F0EA] shadow-xl" 
//                 />
//              </motion.div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ArrowRight, Star, ShieldCheck } from 'lucide-react';
// import { motion } from 'framer-motion';

// export default function Hero() {
//   const navigate = useNavigate();

//   // Modern Elegant Palette
//   const theme = {
//     bg: '#F2F0EA',          // Soft Alabaster/Linen
//     primary: '#1A3C34',     // Deep Cypress Green (Text/Buttons)
//     secondary: '#C8B092',   // Muted Sand/Gold (Accents)
//     white: '#FFFFFF',
//     textLight: '#5A6C66'    // Muted Sage Grey for body text
//   };

//   // Animation Variants
//   const fadeUp = {
//     hidden: { opacity: 0, y: 30 },
//     visible: (custom) => ({
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: custom * 0.1 }
//     })
//   };

//   return (
//     <section 
//       style={{ backgroundColor: theme.bg }} 
//       className="relative min-h-[90vh] flex items-center overflow-hidden"
//     >
//       {/* 1. Background Ambience (Subtle Gradients) */}
//       <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-gradient-to-b from-[#E6E2D8] to-transparent rounded-full blur-[120px] opacity-60 -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      
//       <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 relative z-10 w-full py-20">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
//           {/* --- LEFT CONTENT (5 Columns) --- */}
//           <motion.div 
//             initial="hidden"
//             animate="visible"
//             className="lg:col-span-5 space-y-8"
//           >
//             {/* Elegant Badge */}
//             <motion.div variants={fadeUp} custom={0}>
//               <div 
//                 style={{ borderColor: theme.primary }}
//                 className="inline-flex items-center gap-2 px-3 py-1 border border-opacity-20 rounded-full"
//               >
//                 <span style={{ backgroundColor: theme.primary }} className="w-1.5 h-1.5 rounded-full" />
//                 <span style={{ color: theme.primary }} className="text-xs font-semibold tracking-[0.15em] uppercase opacity-80">
//                   MediVoyage Exclusive
//                 </span>
//               </div>
//             </motion.div>

//             {/* Headline */}
//             <motion.div variants={fadeUp} custom={1} className="relative">
//               <h1 style={{ color: theme.primary }} className="text-5xl lg:text-6xl xl:text-7xl font-serif font-medium leading-[1.1]">
//                 Healing, <br />
//                 <span className="italic font-light">curated</span> for you.
//               </h1>
//               {/* Decorative line */}
//               <div style={{ backgroundColor: theme.secondary }} className="h-1 w-24 mt-6 rounded-full" />
//             </motion.div>

//             {/* Body */}
//             <motion.p 
//               variants={fadeUp} 
//               custom={2}
//               style={{ color: theme.textLight }} 
//               className="text-lg leading-relaxed max-w-md font-sans"
//             >
//               Experience world-class healthcare seamlessly blended with premium hospitality. From JCI-accredited specialists to luxury recovery stays, we orchestrate every detail.
//             </motion.p>

//             {/* Buttons */}
//             <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-4 pt-4">
//               <button
//                 onClick={() => navigate('/services')}
//                 style={{ backgroundColor: theme.primary, color: theme.bg }}
//                 className="group relative px-8 py-4 rounded-full overflow-hidden transition-all hover:shadow-xl hover:shadow-[#1A3C34]/20"
//               >
//                 <span className="relative z-10 flex items-center gap-2 font-medium tracking-wide">
//                   Explore Services <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
//                 </span>
//               </button>
              
//               <button
//                 onClick={() => navigate('/contact')}
//                 style={{ color: theme.primary, borderColor: theme.primary }}
//                 className="px-8 py-4 rounded-full border border-opacity-20 hover:bg-[#1A3C34] hover:text-[#F2F0EA] hover:border-transparent transition-all font-medium tracking-wide"
//               >
//                 Consult Advisor
//               </button>
//             </motion.div>

//             {/* Trust Indicators */}
//             <motion.div variants={fadeUp} custom={4} className="flex items-center gap-6 pt-6 opacity-80">
//                 <div className="flex -space-x-3">
//                     {[1,2,3].map((i) => (
//                         <div key={i} className="w-10 h-10 rounded-full border-2 border-[#F2F0EA] overflow-hidden">
//                              <img src={`https://i.pravatar.cc/100?img=${20+i}`} alt="Client" className="w-full h-full object-cover" />
//                         </div>
//                     ))}
//                 </div>
//                 <div style={{ color: theme.primary }} className="text-sm font-medium">
//                     <div className="flex items-center gap-1">
//                         <Star size={14} fill={theme.secondary} stroke="none" />
//                         <span>4.9/5 Rating</span>
//                     </div>
//                     <span className="text-xs opacity-60">from 500+ patients</span>
//                 </div>
//             </motion.div>
//           </motion.div>

//           {/* --- RIGHT CONTENT (7 Columns) --- */}
//           <div className="lg:col-span-7 relative h-[500px] lg:h-[700px] flex items-center justify-center lg:justify-end">
            
//             {/* Main Tall Image (Architectural/Sharp) */}
//             <motion.div 
//               initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
//               animate={{ opacity: 1, clipPath: "inset(0% 0 0 0)" }}
//               transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
//               className="relative w-[85%] lg:w-[70%] h-full z-10"
//             >
//               <img 
//                 src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1200&auto=format&fit=crop" 
//                 alt="Luxury Recovery Suite" 
//                 className="w-full h-full object-cover shadow-2xl"
//               />
//               {/* Subtle Overlay gradient */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60"></div>
//             </motion.div>

//             {/* Floating Glass Card (Bottom Left) */}
//             <motion.div 
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.6, duration: 0.8 }}
//               className="absolute bottom-12 left-0 lg:left-12 z-20"
//             >
//                <div className="backdrop-blur-md bg-white/80 border border-white/40 p-6 shadow-[0_8px_32px_rgba(0,0,0,0.12)] max-w-[280px]">
//                   <div className="flex items-start gap-4">
//                     <div style={{ backgroundColor: theme.primary }} className="p-3 text-white">
//                         <ShieldCheck size={24} strokeWidth={1.5} />
//                     </div>
//                     <div>
//                         <h3 style={{ color: theme.primary }} className="font-serif text-lg leading-tight mb-1">JCI Accredited</h3>
//                         <p style={{ color: theme.textLight }} className="text-xs leading-relaxed">
//                             Partnered with India's top tier global standard hospitals.
//                         </p>
//                     </div>
//                   </div>
//                </div>
//             </motion.div>

//              {/* Decorative Element (Top Right) */}
//              <motion.div
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: 0.8 }}
//                 className="absolute top-12 right-12 lg:-right-4 z-20 hidden md:block"
//              >
//                  <img 
//                     src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=400&auto=format&fit=crop" 
//                     alt="Detail" 
//                     className="w-32 h-40 object-cover border-4 border-[#F2F0EA] shadow-xl" 
//                 />
//              </motion.div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Upload, 
  ShieldCheck, 
  Globe, 
  Heart, 
  ChevronDown,
  Paperclip,
  User,
  Phone,
  Mail
} from 'lucide-react';

export default function Hero() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    specialty: '',
    treatment: '',
    location: 'Jaipur'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Reusable styles for consistency
  const inputBase = "w-full bg-black/20 border border-white/10 text-white text-sm rounded-lg px-3 py-2.5 placeholder:text-white/40 focus:outline-none focus:border-[#D4C5A9] transition-colors";
  const labelBase = "text-[10px] text-[#D4C5A9] uppercase tracking-wider ml-1 mb-1 block";

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex flex-col justify-center py-12 lg:py-0">
      
      {/* 1. BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0">
        <motion.div
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
            className="w-full h-full"
        >
            <img 
            src="/hospitalimage.jpg" 
            alt="Wellness Sanctuary" 
            className="w-full h-full object-cover"
            />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2622]/95 via-[#0F2622]/85 to-[#0F2622]/90"></div>
      </div>

      {/* 2. MAIN CONTENT GRID */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">
        
        {/* LEFT COLUMN: Text Content */}
        <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-center lg:text-left pt-10 lg:pt-0 hidden lg:block"
        >
            {/* <div className="inline-flex items-center gap-3 border border-white/20 bg-white/5 backdrop-blur-sm px-4 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4C5A9] animate-pulse"></span>
                <span className="text-white/80 text-[10px] tracking-[0.2em] uppercase">Global Medical Concierge</span>
            </div> */}

            <h1 className="text-4xl lg:text-6xl font-serif text-white leading-tight">
                DOCTOR LED. <br />
                <span className="text-[#D4C5A9] font-light">WORLD CLASS HEALTHCARE.</span>
            </h1>
            <h1 className="text-4xl lg:text-6xl font-serif text-white leading-tight">
                ZERO WAITING TIME. <br />
                <span className="text-[#D4C5A9] font-light">TRANSPARENT PRICING.</span> 
            </h1>

            
        </motion.div>

        {/* RIGHT COLUMN: Compact Glass Form */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full max-w-[420px] mx-auto lg:ml-auto"
        >
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-2xl shadow-2xl relative">
                
                <h3 className="text-xl font-serif text-white text-center mb-4">Get Personalized Help</h3>

                <form className="space-y-3">
                    
                    {/* SECTION 1: Personal Details */}
                    <div className="space-y-3">
                        {/* Name & Phone in one row */}
                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <input 
                                    type="text" 
                                    name="name"
                                    placeholder="Name" 
                                    className={inputBase}
                                />
                            </div>
                            <div>
                                <input 
                                    type="tel" 
                                    name="phone"
                                    placeholder="Phone Number" 
                                    className={inputBase}
                                />
                            </div>
                        </div>
                        {/* Email full width */}
                        <div>
                            <input 
                                type="email" 
                                name="email"
                                placeholder="Email Address" 
                                className={inputBase}
                            />
                        </div>
                    </div>

                    <div className="h-px bg-white/10 my-2"></div>

                    {/* SECTION 2: Medical Details */}
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label className={labelBase}>Specialty</label>
                            <div className="relative">
                                <select 
                                    name="specialty"
                                    value={formData.specialty} 
                                    onChange={handleChange} 
                                    className={`${inputBase} appearance-none`}
                                >
                                    <option value="" className="bg-[#0F2622]">Select...</option>
                                    <option value="dental" className="bg-[#0F2622]">Dental</option>
                                    <option value="cosmetic" className="bg-[#0F2622]">Cosmetic</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label className={labelBase}>Treatment</label>
                            <div className="relative">
                                <select 
                                    name="treatment"
                                    value={formData.treatment}
                                    onChange={handleChange}
                                    disabled={!formData.specialty}
                                    className={`${inputBase} appearance-none disabled:opacity-50`}
                                >
                                    <option value="" className="bg-[#0F2622]">Select...</option>
                                    <option value="implants" className="bg-[#0F2622]">Implants</option>
                                    <option value="veneers" className="bg-[#0F2622]">Veneers</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Location */}
                    <div>
                        <label className={labelBase}>Preferred Location</label>
                        <div className="relative">
                            <select 
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                className={`${inputBase} appearance-none`}
                            >
                                <option value="Jaipur" className="bg-[#0F2622]">Jaipur, India</option>
                                <option value="Delhi" className="bg-[#0F2622]">Delhi, India</option>
                                <option value="Mumbai" className="bg-[#0F2622]">Mumbai, India</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-3.5 text-white/50 pointer-events-none" size={14} />
                        </div>
                    </div>

                    {/* Message & File */}
                    <div className="flex gap-2 items-center">
                        <input 
                            type="text" 
                            placeholder="Describe your needs..." 
                            className={`${inputBase} flex-1`}
                        />
                        <div className="relative group">
                            <input type="file" id="file-upload" className="hidden" />
                            <label htmlFor="file-upload" className="flex items-center justify-center w-10 h-[42px] border border-white/20 rounded-lg bg-black/10 hover:bg-black/20 text-white/60 hover:text-[#D4C5A9] cursor-pointer transition-colors" title="Upload Documents">
                                <Paperclip size={18} />
                            </label>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-3 pt-2">
                        <button type="button" className="bg-[#D4C5A9] hover:bg-[#C0B090] text-[#0F2622] text-sm font-bold py-3 rounded-lg transition-all active:scale-95 shadow-lg shadow-[#D4C5A9]/20">
                            Get Quotations
                        </button>
                        <button type="button" className="bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium py-3 rounded-lg transition-all">
                            Consultation
                        </button>
                    </div>
                </form>

                {/* Footer Trust Icons */}
                <div className="flex justify-center gap-6 mt-4 pt-3 border-t border-white/10 opacity-70">
                    <div className="flex items-center gap-1.5">
                        <ShieldCheck className="text-[#D4C5A9]" size={14} />
                        <span className="text-[9px] uppercase tracking-widest text-white">Trusted</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Globe className="text-[#D4C5A9]" size={14} />
                        <span className="text-[9px] uppercase tracking-widest text-white">Global</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Heart className="text-[#D4C5A9]" size={14} />
                        <span className="text-[9px] uppercase tracking-widest text-white">Caring</span>
                    </div>
                </div>

            </div>
        </motion.div>
      </div>
    </section>
  );
}

// import React from 'react';
// import { motion } from 'framer-motion';
// import { ArrowUpRight, Globe, Shield, Star } from 'lucide-react';

// export default function Hero() {
//   // Theme: Swiss Minimalist (Stone, Charcoal, Clay)
//   const theme = {
//     bg: '#EAEAE6',        // Stone Grey
//     text: '#1C1C1C',      // Soft Black
//     accent: '#C25E45',    // Terracotta / Burnt Clay
//     white: '#FFFFFF',
//     line: '#D1D1CD'       // Darker stone for borders
//   };

//   // Modern Stagger Animation
//   const containerVars = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.3
//       }
//     }
//   };

//   const itemVars = {
//     hidden: { y: 20, opacity: 0 },
//     show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
//   };

//   return (
//     <section 
//       style={{ backgroundColor: theme.bg, color: theme.text }} 
//       className="relative min-h-screen flex flex-col pt-24 overflow-hidden font-sans"
//     >
      
//       {/* 1. TOP GRID LINES (Decorative) */}
//       <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
//         <div style={{ borderColor: theme.line }} className="w-full h-full border-r border-l border-opacity-50 max-w-[1600px] mx-auto grid grid-cols-4 lg:grid-cols-12">
//             {/* Vertical grid lines for structure */}
//             <div className="hidden lg:block col-span-3 border-r" style={{ borderColor: theme.line }}></div>
//             <div className="hidden lg:block col-span-5 border-r" style={{ borderColor: theme.line }}></div>
//             <div className="hidden lg:block col-span-4"></div>
//         </div>
//       </div>

//       <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 lg:px-0 h-full flex-grow flex flex-col lg:flex-row">
        
//         {/* --- LEFT COLUMN (Typography & Content) --- */}
//         <div className="w-full lg:w-8/12 flex flex-col justify-between lg:pr-20 lg:pl-12 pb-12">
            
//             <motion.div 
//               variants={containerVars}
//               initial="hidden"
//               animate="show"
//               className="space-y-10 mt-10 lg:mt-20"
//             >
//                 {/* 1. Header Meta */}
//                 <motion.div variants={itemVars} className="flex items-center gap-4 text-xs font-bold tracking-widest uppercase opacity-60">
//                     <span className="flex items-center gap-2">
//                         <Globe size={14} /> Global Care Network
//                     </span>
//                     <span>—</span>
//                     <span>Est. 2024</span>
//                 </motion.div>

//                 {/* 2. Massive Headline (Modern Sans) */}
//                 <motion.div variants={itemVars}>
//                     <h1 className="text-6xl lg:text-8xl xl:text-9xl font-bold tracking-tighter leading-[0.9]">
//                         BEYOND <br />
//                         <span style={{ color: theme.accent }}>BORDERS.</span>
//                     </h1>
//                 </motion.div>

//                 {/* 3. Subtext (Grid aligned) */}
//                 <motion.div variants={itemVars} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl pt-4">
//                     <p className="text-lg leading-relaxed font-medium">
//                         Redefining medical tourism through a lens of luxury and precision. We curate surgical journeys that feel like retreats.
//                     </p>
//                     <div className="flex flex-col justify-end">
//                         <p className="text-sm opacity-60 font-mono">
//                             / 01 — DENTAL IMPLANTS <br/>
//                             / 02 — AESTHETICS <br/>
//                             / 03 — ORTHOPEDICS
//                         </p>
//                     </div>
//                 </motion.div>

//                 {/* 4. Modern CTA Buttons */}
//                 <motion.div variants={itemVars} className="flex flex-wrap gap-4 pt-8">
//                     <button 
//                         style={{ backgroundColor: theme.text, color: theme.bg }}
//                         className="group relative px-8 py-5 text-sm font-bold uppercase tracking-wider overflow-hidden hover:bg-[#000000] transition-colors"
//                     >
//                         Start Your Journey
//                         <ArrowUpRight className="inline-block ml-2 w-4 h-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
//                     </button>
                    
//                     <button 
//                         className="px-8 py-5 text-sm font-bold uppercase tracking-wider border border-current hover:bg-black/5 transition-colors"
//                     >
//                        View Destinations
//                     </button>
//                 </motion.div>
//             </motion.div>

//             {/* Bottom Stats */}
//             <motion.div 
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 1 }}
//                 className="grid grid-cols-3 gap-8 mt-20 pt-8 border-t"
//                 style={{ borderColor: theme.line }}
//             >
//                  <div>
//                     <h3 className="text-3xl font-bold tracking-tighter">98%</h3>
//                     <p className="text-xs uppercase tracking-wider mt-1 opacity-60">Success Rate</p>
//                  </div>
//                  <div>
//                     <h3 className="text-3xl font-bold tracking-tighter">12+</h3>
//                     <p className="text-xs uppercase tracking-wider mt-1 opacity-60">Countries</p>
//                  </div>
//                  <div className="flex items-center gap-2">
//                     <div className="w-10 h-10 rounded-full bg-[#1C1C1C] text-white flex items-center justify-center">
//                         <Shield size={18} />
//                     </div>
//                     <p className="text-xs font-bold leading-tight uppercase">
//                         JCI <br/>Verified
//                     </p>
//                  </div>
//             </motion.div>
//         </div>

//         {/* --- RIGHT COLUMN (Bleed Image) --- */}
//         <motion.div 
//              initial={{ clipPath: 'inset(0 0 100% 0)' }}
//              animate={{ clipPath: 'inset(0 0 0% 0)' }}
//              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
//              className="w-full lg:w-4/12 relative min-h-[500px] lg:min-h-auto lg:h-auto mt-12 lg:mt-0"
//         >
//             <div className="absolute inset-0 bg-gray-200">
//                 <img 
//                     src="https://images.unsplash.com/photo-1599045118108-bf9954418b76?q=80&w=1000&auto=format&fit=crop" 
//                     alt="Modern Architecture" 
//                     className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
//                 />
//             </div>

//             {/* Floating Review Card */}
//             <div 
//                 style={{ backgroundColor: theme.accent, color: theme.bg }}
//                 className="absolute bottom-0 left-0 p-8 w-full backdrop-blur-sm bg-opacity-90"
//             >
//                 <div className="flex justify-between items-start mb-4">
//                     <div className="flex gap-1">
//                         {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" stroke="none" />)}
//                     </div>
//                     <span className="text-xs font-bold uppercase tracking-wider">Patient Story</span>
//                 </div>
//                 <p className="text-lg font-medium leading-tight mb-4">
//                     "The most seamless medical experience of my life. Modern, clean, and incredibly professional."
//                 </p>
//                 <div className="flex items-center gap-3">
//                      <div className="w-8 h-8 rounded-full bg-white/20"></div>
//                      <span className="text-xs font-bold uppercase tracking-wider">Sarah J., UK</span>
//                 </div>
//             </div>
//         </motion.div>

//       </div>
//     </section>
//   );
// }




// import React from 'react';
// import { motion } from 'framer-motion';
// import { ArrowUpRight, Shield, Star, Activity } from 'lucide-react';

// export default function Hero() {
//   // Theme: Luxury Dark Mode (Gold accent on dark)
//   const theme = {
//     text: '#FFFFFF',      // White text for contrast
//     accent: '#D4C5A9',    // Champagne Gold accent
//     muted: 'rgba(255,255,255,0.6)' // Muted white for subtext
//   };

//   // Animation Variants (Staggered Entrance)
//   const containerVars = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: { staggerChildren: 0.15, delayChildren: 0.4 }
//     }
//   };

//   const itemVars = {
//     hidden: { y: 30, opacity: 0 },
//     show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
//   };

//   return (
//     <section className="relative h-screen w-full overflow-hidden font-sans bg-[#0F0F0F]">
      
//       {/* 1. FULL BACKGROUND IMAGE */}
//       <div className="absolute inset-0 z-0">
//         <motion.div
//              initial={{ scale: 1.1 }}
//              animate={{ scale: 1 }}
//              transition={{ duration: 1.5, ease: "easeOut" }}
//              className="w-full h-full"
//         >
//             <img 
//                 // Using a serene, high-end architectural image evocative of a luxury wellness resort
//                 src="https://images.unsplash.com/photo-1617972758319-a23ba7f07746?q=80&w=2070&auto=format&fit=crop" 
//                 alt="Luxury Wellness Destination" 
//                 className="w-full h-full object-cover"
//             />
//         </motion.div>
        
//         {/* Gradient Overlay - Crucial for text readability against a busy image */}
//         {/* It's darker on the left where the text sits, and lighter on the right */}
//         <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-black/20"></div>
//       </div>

//       {/* 2. MAIN CONTENT LAYER */}
//       <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 lg:px-12 h-full flex flex-col justify-center">
        
//         <motion.div 
//             variants={containerVars}
//             initial="hidden"
//             animate="show"
//             className="w-full lg:w-2/3 space-y-8"
//             style={{ color: theme.text }}
//         >
//             {/* COMPANY NAME / BRANDING */}
//             <motion.div variants={itemVars} className="flex items-center gap-3 mb-4">
//                 <Activity size={20} color={theme.accent} />
//                 <span className="text-lg font-bold tracking-[0.2em] uppercase">
//                     MEDIVOYAGE
//                 </span>
//                 <div style={{ backgroundColor: theme.accent }} className="h-[2px] w-12 ml-4 opacity-50"></div>
//             </motion.div>

//             {/* HUGE HEADLINE */}
//             <motion.div variants={itemVars}>
//                 <h1 className="text-6xl lg:text-8xl xl:text-9xl font-bold tracking-tighter leading-[0.95] -ml-1">
//                     BEYOND <br />
//                     <span style={{ color: theme.accent }}>BORDERS.</span>
//                 </h1>
//             </motion.div>

//             {/* SUBTEXT */}
//             <motion.div variants={itemVars} className="max-w-xl pt-2">
//                 <p className="text-xl lg:text-2xl leading-relaxed font-medium" style={{ color: theme.muted }}>
//                     The new standard in global healthcare. We curate seamless medical journeys that feel less like procedures and more like retreats.
//                 </p>
//             </motion.div>

//             {/* BUTTONS */}
//             <motion.div variants={itemVars} className="flex flex-wrap gap-5 pt-8">
//                 <button 
//                     style={{ backgroundColor: theme.accent, color: '#000' }}
//                     className="group relative h-14 px-10 text-sm font-bold uppercase tracking-wider overflow-hidden hover:bg-white transition-colors flex items-center"
//                 >
//                     Start Your Journey
//                     <ArrowUpRight className="inline-block ml-2 w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
//                 </button>
                
//                 <button 
//                     style={{ borderColor: theme.muted, color: theme.text }}
//                     className="h-14 px-10 text-sm font-bold uppercase tracking-wider border-2 hover:bg-white/10 transition-colors backdrop-blur-sm flex items-center gap-2"
//                 >
//                    <Star size={16} fill={theme.accent} stroke="none" /> View Success Stories
//                 </button>
//             </motion.div>
//         </motion.div>

//         {/* 3. BOTTOM STATS STRIP (Floating above bottom edge) */}
//         <motion.div 
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1, duration: 0.8 }}
//             className="absolute bottom-0 left-0 w-full border-t border-white/10 backdrop-blur-md bg-black/20"
//         >
//             <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-6">
//                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
//                      {/* Stat 1 */}
//                      <div>
//                         <div className="flex items-center gap-2 mb-1">
//                             <Shield size={16} color={theme.accent} />
//                             <p className="text-xs uppercase tracking-widest opacity-70">Top Tier</p>
//                         </div>
//                         <p className="text-xl font-bold">JCI Accredited Partners</p>
//                      </div>
//                      {/* Stat 2 */}
//                      <div>
//                         <p className="text-xs uppercase tracking-widest opacity-70 mb-1">Global Reach</p>
//                         <p className="text-xl font-bold">15+ Countries</p>
//                      </div>
//                      {/* Stat 3 */}
//                      <div className="hidden md:block">
//                         <p className="text-xs uppercase tracking-widest opacity-70 mb-1">Patient Satisfaction</p>
//                         <p className="text-xl font-bold flex gap-1 items-center">
//                             4.9/5 <Star fill={theme.accent} stroke="none" size={14}/>
//                         </p>
//                      </div>
//                      {/* Decorative Element */}
//                      <div className="hidden md:flex justify-end items-center opacity-30">
//                         <Activity size={40} strokeWidth={1} />
//                      </div>
//                  </div>
//             </div>
//         </motion.div>

//       </div>
//     </section>
//   );
// }




// import React from 'react';
// import { motion } from 'framer-motion';
// import { ArrowRight, Search, PlayCircle } from 'lucide-react';

// export default function Hero() {
//   // Theme: Pure Minimalist (White, Black, Soft Gray)
//   const theme = {
//     bg: '#FFFFFF',
//     textMain: '#111827', // Almost Black
//     textMuted: '#6B7280', // Cool Gray
//     accent: '#2563EB',   // Royal Blue (Sparse usage for focus)
//     surface: '#F9FAFB'   // Very light gray for inputs
//   };

//   const fadeUp = {
//     hidden: { opacity: 0, y: 20 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
//   };

//   return (
//     <section className="relative min-h-screen w-full bg-white flex items-center overflow-hidden pt-20 lg:pt-0">
      
//       <div className="max-w-[1440px] mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
//         {/* --- LEFT: Content & Typography --- */}
//         <div className="flex flex-col justify-center space-y-10 lg:pr-12">
          
//           <motion.div 
//             initial="hidden" 
//             animate="show" 
//             variants={{ show: { transition: { staggerChildren: 0.1 } } }}
//             className="space-y-8"
//           >
//             {/* 1. Minimal Badge */}
//             <motion.div variants={fadeUp}>
//               <span className="inline-block py-1 px-3 rounded-full bg-gray-100 text-xs font-bold tracking-widest uppercase text-gray-900">
//                 MediVoyage
//               </span>
//             </motion.div>

//             {/* 2. Headline: Clean & Heavy */}
//             <motion.div variants={fadeUp}>
//               <h1 className="text-5xl lg:text-7xl font-sans font-bold tracking-tight text-gray-900 leading-[1.1]">
//                 Health without <br />
//                 <span className="text-gray-400">compromise.</span>
//               </h1>
//             </motion.div>

//             {/* 3. Description: Readable & Narrow */}
//             <motion.div variants={fadeUp}>
//               <p className="text-lg text-gray-600 max-w-md leading-relaxed">
//                 Connect with the world's leading medical experts. We handle the travel, logistics, and luxury accommodation, so you can focus on recovery.
//               </p>
//             </motion.div>

//             {/* 4. Interactive Search Pill (Modern & Functional) */}
//             <motion.div variants={fadeUp} className="max-w-md w-full">
//               <div className="relative group">
//                 <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                   <Search className="h-5 w-5 text-gray-400" />
//                 </div>
//                 <input 
//                   type="text"
//                   placeholder="Try 'Dental in Turkey' or 'Hair Transplant'..."
//                   className="block w-full pl-12 pr-4 py-5 bg-gray-50 border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-gray-400 transition-all shadow-sm group-hover:shadow-md"
//                 />
//                 <button className="absolute right-2 top-2 bottom-2 bg-black text-white px-6 rounded-xl font-medium text-sm hover:bg-gray-800 transition-colors">
//                   Find
//                 </button>
//               </div>
//               <div className="mt-4 flex gap-4 text-xs font-medium text-gray-500">
//                 <span>Popular:</span>
//                 <span className="underline cursor-pointer hover:text-black">Hair Transplant</span>
//                 <span className="underline cursor-pointer hover:text-black">Rhinoplasty</span>
//                 <span className="underline cursor-pointer hover:text-black">IVF</span>
//               </div>
//             </motion.div>
//           </motion.div>

//         </div>

//         {/* --- RIGHT: The Visual "Canvas" --- */}
//         <motion.div 
//           initial={{ opacity: 0, x: 40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
//           className="relative h-[600px] lg:h-[750px] w-full"
//         >
//           {/* Main Image Container - Asymmetric Curve */}
//           {/* This specific rounded corner (rounded-[3rem]) is very trendy in 2025 apps */}
//           <div className="absolute inset-0 bg-gray-100 rounded-[2.5rem] overflow-hidden">
//             <img 
//               src="https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1200&auto=format&fit=crop" 
//               alt="Modern Clean Recovery" 
//               className="w-full h-full object-cover"
//             />
//             {/* Subtle Gradient for depth */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
//           </div>

//           {/* Floating UI Card - "Glass" effect */}
//           <motion.div 
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.8 }}
//             className="absolute bottom-10 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] flex items-center justify-between"
//           >
//              <div className="flex items-center gap-4">
//                 <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
//                    <PlayCircle size={24} fill="currentColor" stroke="none" className="opacity-80"/>
//                 </div>
//                 <div>
//                   <p className="text-sm font-bold text-gray-900">How it works</p>
//                   <p className="text-xs text-gray-500">1 min video</p>
//                 </div>
//              </div>
//              <div className="h-10 w-[1px] bg-gray-200 mx-4 hidden sm:block"></div>
//              <div className="hidden sm:block">
//                  <div className="flex -space-x-2">
//                     {[1,2,3].map((i) => (
//                         <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
//                              <img src={`https://i.pravatar.cc/100?img=${10+i}`} alt="User" />
//                         </div>
//                     ))}
//                  </div>
//                  <p className="text-[10px] text-gray-500 mt-1 font-medium">1k+ Patients this month</p>
//              </div>
//           </motion.div>
          
//         </motion.div>

//       </div>
//     </section>
//   );
// }