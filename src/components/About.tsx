import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  ShieldCheck, 
  ChevronLeft, 
  ChevronRight,
  Star,
  Check,
  ChevronDown
} from 'lucide-react';

export default function MedivoyageConcierge() {
  
  // --- THEME CONFIGURATION ---
  const theme = {
    bg: '#F2F0EA',          // Soft Alabaster/Linen
    primary: '#1A3C34',     // Deep Cypress Green
    secondary: '#C8B092',   // Muted Sand/Gold
    white: '#FFFFFF',
    textLight: '#5A6C66',   // Muted Sage Grey
    border: '#E2E0D8'
  };

  // --- FONTS ---
  const fonts = {
    heading: '"Playfair Display", serif',
    body: '"EB Garamond", serif',
    sans: 'ui-sans-serif, system-ui, sans-serif'
  };

  // --- DATA: DOCTORS ---
  const allDoctors = [
    { name: "Dr. Swaraj Maharwal", specialty: "General Surgery", hospital: "Apollo Spectra", experience: "35 Years", location: "Jaipur", rating: "4.9", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop" },
    { name: "Dr. G L Sharma", specialty: "Cardiology", hospital: "Fortis Escorts", experience: "22 Years", location: "Mumbai", rating: "5.0", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop" },
    { name: "Dr. Naresh Somani", specialty: "Oncology", hospital: "Max Healthcare", experience: "12 Years", location: "Bangalore", rating: "4.8", image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=800&auto=format&fit=crop" },
    { name: "Dr. Manish Munjal", specialty: "Cardiology", hospital: "Medanta Hospital", experience: "25 Years", location: "Gurgaon", rating: "4.9", image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=800&auto=format&fit=crop" },
    // ... add rest of your doctors here
  ];

  // --- FILTER & CATEGORY LOGIC ---
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", ...new Set(allDoctors.map(d => d.specialty))];

  const filteredList = selectedCategory === "All" 
    ? allDoctors 
    : allDoctors.filter(d => d.specialty === selectedCategory);

  // --- SLIDER LOGIC ---
  const visibleItems = 4;
  const isSliderActive = filteredList.length > visibleItems;
  const displayDoctors = isSliderActive 
    ? [...filteredList, ...filteredList.slice(0, visibleItems)] 
    : filteredList;

  const [currentDocIndex, setCurrentDocIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    setCurrentDocIndex(0);
    setIsTransitioning(true);
  }, [selectedCategory]);

  const nextDoctor = () => {
    if (!isSliderActive || currentDocIndex >= filteredList.length) return;
    setIsTransitioning(true);
    setCurrentDocIndex((prev) => prev + 1);
  };
  
  const prevDoctor = () => {
    if (!isSliderActive) return;
    if (currentDocIndex <= 0) {
      setIsTransitioning(false);
      setCurrentDocIndex(filteredList.length);
      setTimeout(() => {
        setIsTransitioning(true);
        setCurrentDocIndex(filteredList.length - 1);
      }, 10);
    } else {
      setIsTransitioning(true);
      setCurrentDocIndex((prev) => prev - 1);
    }
  };

  useEffect(() => {
    if (isSliderActive && currentDocIndex === filteredList.length) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentDocIndex(0);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [currentDocIndex, filteredList.length, isSliderActive]);


  return (
    <div style={{ backgroundColor: theme.bg }} className="selection:bg-[#1A3C34] selection:text-[#F2F0EA] min-h-screen">
      
      {/* =========================================
          SECTION 1: THE CONCIERGE (HERO)
      ========================================= */}
      <section className="relative pt-20 pb-16 px-6 lg:pt-28 lg:pb-24 border-b" style={{ borderColor: theme.border }}>
        <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Tagline */}
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-6" style={{ backgroundColor: theme.primary }}></span>
              <span style={{ color: theme.primary, fontFamily: fonts.sans }} className="text-[10px] font-bold tracking-[0.25em] uppercase opacity-80">
                The Medical Concierge
              </span>
            </div>

            {/* Headline */}
            <h1 style={{ color: theme.primary, fontFamily: fonts.heading }} className="text-4xl lg:text-5xl xl:text-6xl font-medium leading-[1.1]">
              We are doctors. <br />
              <span style={{ color: theme.secondary, fontStyle: 'italic' }}>Not brokers.</span>
            </h1>

            {/* Subtext */}
            <p style={{ color: theme.textLight, fontFamily: fonts.body }} className="text-lg lg:text-xl max-w-md leading-relaxed">
              Your health journey shouldn't be a transaction. We ensure end-to-end clinical oversight, JCI-accredited care, and zero hidden margins.
            </p>

            {/* Trust Signals */}
            <div className="grid grid-cols-2 gap-px max-w-sm mt-6 border opacity-90" style={{ borderColor: theme.primary, backgroundColor: theme.primary }}>
              {['HIPAA Compliant', 'JCI Hospitals', 'Doctor Vetted', 'Zero Wait Time'].map((item, i) => (
                <div key={i} style={{ backgroundColor: theme.bg }} className="p-3 flex items-center gap-2">
                  <ShieldCheck style={{ color: theme.primary }} size={16} strokeWidth={1} />
                  <span style={{ color: theme.primary, fontFamily: fonts.sans }} className="text-xs font-bold tracking-wide">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <button 
                style={{ backgroundColor: theme.primary, color: theme.bg, fontFamily: fonts.sans }}
                className="px-6 py-4 text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-opacity duration-300 flex items-center gap-2"
              >
                Start Assessment <ArrowRight size={14} />
              </button>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 1 }}
             className="relative h-[550px] w-full"
          >
            <div className="absolute inset-0 bg-[#1A3C34]/10 z-10 pointer-events-none"></div>
            <img 
              src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=1200&auto=format&fit=crop" 
              alt="Consultation" 
              className="w-full h-full object-cover contrast-[1.1]"
            />
            <div style={{ backgroundColor: theme.white }} className="absolute bottom-0 left-0 p-6 w-full md:w-auto md:max-w-xs border-t-2 z-20 shadow-lg" css={{ borderColor: theme.primary }}>
               <div style={{ backgroundColor: theme.primary }} className="h-0.5 w-full absolute top-0 left-0"></div>
               <p style={{ color: theme.primary, fontFamily: fonts.heading }} className="text-lg italic mb-3">"This isn't tourism. It's healthcare."</p>
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 overflow-hidden rounded-full">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" alt="Dr" className="w-full h-full object-cover"/>
                  </div>
                  <div>
                    <p style={{ color: theme.primary, fontFamily: fonts.sans }} className="text-[10px] font-bold uppercase tracking-wider">Dr. Sarah Jenning</p>
                    <p style={{ color: theme.textLight, fontFamily: fonts.sans }} className="text-[10px]">Chief Medical Officer</p>
                  </div>
               </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* =========================================
          SECTION 2: OUR FOUNDERS (RESTORED SHARP VERSION)
      ========================================= */}
      <section className="relative py-20 lg:py-28 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* Reduced gap-16 to gap-8 for tighter spacing */}
          <div className="grid lg:grid-cols-12 gap-8 items-center">

            {/* 1. LEFT COLUMN: IMAGE (Sharp, Reduced Height) */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-5 relative h-[400px] lg:h-[500px] w-full"
            >
              <div className="w-full h-full overflow-hidden relative shadow-sm border" style={{ borderColor: theme.border }}>
                <div className="absolute inset-0 bg-black/5 z-10"></div>
                <img 
                  src="/founders.JPG" 
                  alt="Founders Dr. Anya Sharma and Marcus Chen" 
                  className="w-full h-full object-cover object-center grayscale-[10%] hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </motion.div>

            {/* 2. RIGHT COLUMN: THE CONTENT "BOX" */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-7 relative"
            >
              <div 
                className="relative p-6 lg:p-10 border backdrop-blur-md shadow-sm bg-white/80"
                style={{ 
                  borderColor: theme.border,
                }}
              >
                {/* Decorative Quote Icon */}
                <div className="absolute top-6 right-6 opacity-5 pointer-events-none">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill={theme.primary}>
                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                  </svg>
                </div>

                <div className="space-y-6 relative z-10">
                  {/* Header Group */}
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="h-[1px] w-6" style={{ backgroundColor: theme.secondary }}></span>
                      <span style={{ color: theme.primary, fontFamily: fonts.sans }} className="text-[10px] font-bold tracking-[0.2em] uppercase">
                        Who We Are
                      </span>
                    </div>
                    <h2 
                      style={{ color: theme.primary, fontFamily: fonts.heading }} 
                      className="text-3xl lg:text-4xl font-medium leading-[1.15]"
                    >
                      Driven by Purpose. <br />
                      <span style={{ color: theme.secondary }} className="italic">Guided by Science.</span>
                    </h2>
                  </div>

                  {/* Content Group */}
                  <div style={{ color: theme.textLight, fontFamily: fonts.body }} className="text-base lg:text-lg leading-relaxed space-y-4 font-light">
                    <p>
                      "We founded My Concierge on a simple premise: your health journey should be as seamless as it is effective. Having navigated international healthcare ourselves, we saw a need for clinical excellence combined with high-touch hospitality."
                    </p>
                    <p>
                      "We are a team of physicians and travel experts vetting every detail. This isn't just about access; it's about the peace of mind knowing your well-being is our only priority."
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-[1px] opacity-20" style={{ backgroundColor: theme.primary }}></div>

                  {/* Signatures */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                    <div className="space-y-1">
                      <p style={{ color: theme.primary, fontFamily: fonts.heading }} className="text-lg italic">Dr. Anya Sharma</p>
                      <p style={{ color: theme.textLight, fontFamily: fonts.sans }} className="text-[9px] font-bold uppercase tracking-widest opacity-70">Co-Founder & CMO</p>
                    </div>
                    <div className="space-y-1">
                      <p style={{ color: theme.primary, fontFamily: fonts.heading }} className="text-lg italic">Marcus Chen</p>
                      <p style={{ color: theme.textLight, fontFamily: fonts.sans }} className="text-[9px] font-bold uppercase tracking-widest opacity-70">Co-Founder & CEO</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      
      {/* =========================================
          SECTION 4: CURATED SPECIALISTS
      ========================================= */}
      <section id="doctors" style={{ backgroundColor: theme.bg }} className="py-24 px-6 border-t" css={{ borderColor: theme.border }}>
        <div className="max-w-[1400px] mx-auto">
            {/* Header & Filter Controls */}
            <div className="mb-12">
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-3">
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: theme.secondary }}></span>
                        <span style={{ color: theme.primary, fontFamily: fonts.sans }} className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-70">
                            Medical Board
                        </span>
                    </div>
                    <h2 style={{ color: theme.primary, fontFamily: fonts.heading }} className="text-4xl md:text-5xl leading-[1]">
                        Curated <span style={{ color: theme.secondary, fontStyle: 'italic' }}>Specialists.</span>
                    </h2>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b pb-4" style={{ borderColor: theme.border }}>
                    <div className="flex flex-wrap gap-x-6 gap-y-3 w-full md:w-auto">
                      {categories.slice(0, 6).map((cat) => (
                        <button
                          key={cat}
                          onClick={() => setSelectedCategory(cat)}
                          className={`text-sm font-bold uppercase tracking-wider transition-all duration-300 pb-1 relative ${
                            selectedCategory === cat 
                              ? 'text-[#1A3C34]' 
                              : 'text-[#1A3C34]/40 hover:text-[#1A3C34]'
                          }`}
                        >
                          {cat}
                          {selectedCategory === cat && (
                            <motion.div 
                                layoutId="activeTab"
                                className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C8B092]"
                            />
                          )}
                        </button>
                      ))}
                    </div>

                    <div className="flex gap-2 shrink-0">
                        <button 
                            onClick={prevDoctor}
                            disabled={!isSliderActive}
                            className={`w-12 h-12 border flex items-center justify-center transition-all ${
                                !isSliderActive ? 'opacity-30 cursor-not-allowed' : 'hover:bg-[#1A3C34] hover:text-[#F2F0EA]'
                            }`}
                            style={{ borderColor: theme.primary, color: theme.primary }}
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button 
                            onClick={nextDoctor}
                            disabled={!isSliderActive}
                            className={`w-12 h-12 border flex items-center justify-center transition-all ${
                                !isSliderActive ? 'opacity-30 cursor-not-allowed' : 'hover:bg-[#1A3C34] hover:text-[#F2F0EA]'
                            }`}
                            style={{ borderColor: theme.primary, color: theme.primary }}
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Slider Content */}
            <div className="relative">
                <div className="overflow-hidden -mx-2 p-2"> 
                    <motion.div 
                        className="flex"
                        animate={{ x: isSliderActive ? `-${currentDocIndex * (100 / displayDoctors.length)}%` : '0%' }}
                        transition={ isTransitioning ? { type: "spring", stiffness: 300, damping: 30 } : { duration: 0 } }
                        style={{ 
                          width: isSliderActive 
                            ? `${(displayDoctors.length / visibleItems) * 100}%` 
                            : '100%' 
                        }} 
                    >
                        {displayDoctors.map((doctor, index) => (
                            <div 
                                key={`${doctor.name}-${index}`} 
                                className="px-3"
                                style={{ width: isSliderActive ? `${100 / displayDoctors.length}%` : `${100/visibleItems}%` }}
                            >
                               <div className="group relative bg-white cursor-pointer overflow-hidden h-full shadow-sm hover:shadow-xl transition-shadow duration-500">
                                    {/* Image */}
                                    <div className="relative h-[320px] overflow-hidden">
                                        <img 
                                            src={doctor.image} 
                                            alt={doctor.name} 
                                            className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
                                        />
                                        <div className="absolute top-0 left-0 w-full p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div style={{ backgroundColor: theme.white, color: theme.primary, fontFamily: fonts.sans }} className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest shadow-lg">
                                                Book Now
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 h-[180px] flex flex-col justify-between">
                                        <div>
                                            <div className="flex justify-between items-start mb-2">
                                                <span style={{ color: theme.secondary, fontFamily: fonts.sans }} className="text-[10px] font-bold tracking-widest uppercase">
                                                    {doctor.specialty.split(' ')[0]}
                                                </span>
                                                <div className="flex items-center gap-1 opacity-60">
                                                    <Star size={10} fill={theme.primary} stroke="none" style={{ color: theme.primary }}/>
                                                    <span style={{ color: theme.primary }} className="text-xs font-bold">{doctor.rating}</span>
                                                </div>
                                            </div>

                                            <h3 style={{ color: theme.primary, fontFamily: fonts.heading }} className="text-xl font-bold tracking-tight mb-1">
                                                {doctor.name}
                                            </h3>
                                            <p style={{ color: theme.textLight, fontFamily: fonts.body }} className="text-sm opacity-80">{doctor.hospital}</p>
                                        </div>

                                        <div className="pt-4 border-t border-gray-100 flex justify-between items-end">
                                            <div>
                                                <p className="text-[10px] uppercase tracking-wider opacity-40 font-sans" style={{ color: theme.primary }}>Location</p>
                                                <p className="text-xs font-bold font-sans" style={{ color: theme.primary }}>{doctor.location}</p>
                                            </div>
                                            <div>
                                                <p className="text-[10px] uppercase tracking-wider opacity-40 text-right font-sans" style={{ color: theme.primary }}>Exp</p>
                                                <p className="text-xs font-bold font-sans" style={{ color: theme.primary }}>{doctor.experience}</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div style={{ backgroundColor: theme.secondary }} className="absolute bottom-0 left-0 w-full h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                               </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
            
        </div>
      </section>

    </div>
  );
}