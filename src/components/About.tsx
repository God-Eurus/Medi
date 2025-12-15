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

  // --- RESPONSIVE HOOK ---
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // --- DATA: DOCTORS ---
  const allDoctors = [
    { name: "Dr. Swaraj Maharwal", specialty: "General-Surgery", hospital: "Amar Jain Hospital ", experience: "35 Years", location: "Jaipur", rating: "4.9", image: "/tauji.png" },
    { name: "Dr. G L Sharma", specialty: "Cardiology", hospital: "Priyanka Hospital & Cardiac Centre ", experience: "40 Years", location: "Jaipur", rating: "5.0", image: "https://priyankahospital.com/wp-content/uploads/2024/06/9GL-1.jpg" },
    { name: "Dr. Gunjan Jain", specialty: "Obstetrics&Gynaecology", hospital: "Jain Fertility & Mother Care Hospital", experience: "35 Years", location: "Jaipur", rating: "4.9", image: "/gunjanjain.jpeg" },
    { name: "Dr. Naresh Somani", specialty: "Medical-Oncology", hospital: "HCG Hospital", experience: "30 Years", location: "Jaipur", rating: "4.8", image: "/Dr-Naresh-Somani.jpeg" },
    { name: "Dr. Manish Munjal", specialty: "Anesthesia&Critical-Care", hospital: "Priyanka Heart & Cardiac Centre", experience: "35 Years", location: "Jaipur", rating: "4.9", image: "/Dr-Manish-Munjal.JPG" },
    { name: "Dr. Rajkumari Somani", specialty: "Obstetrics&Gynaecology", hospital: "Somani Hospital", experience: "30 Years", location: "Jaipur", rating: "4.9", image: "Rajkumari_Somani.png" },
    { name: "Dr. Kanav Jain", specialty: "Fertility&IVF", hospital: "Jain Fertility & Mother Care Hospital", experience: "10 Years", location: "Mumbai", rating: "4.7", image: "kanavjain.jpeg" },
    { name: "Dr. Bilal Mohammed", specialty: "Orthopedics", hospital: "S K Soni Hospital", experience: "5 Years", location: "Jaipur", rating: "4.7", image: "Dr.BilalMohammed.jpeg" },
    { name: "Dr. Zoheb Naqvi", specialty: "Anesthesia-Critical-Care", hospital: "Mahatma Gandhi Hospital", experience: "5 Years", location: "Jaipur", rating: "4.7", image: "drzohebnaqvi.jpeg" },
    { name: " Dr. Prachi Mathur", specialty: "Anesthesia-Pain-Management", hospital: "Jain Fertility & Mother Care Hospital", experience: "10 Years", location: "Jaipur", rating: "4.7", image: "prachimathur.jpeg" },
    { name: "Dr. Rita Munjal", specialty: "Dentistry", hospital: "Munjal Dental Clinic", experience: "30 Years", location: "Jaipur", rating: "4.7", image: "Dr-Rita-Munjal.JPG" },
    { name: "Dr. Shitanshu Shah", specialty: "Dentistry (Prosthodontist & Implantologist)", hospital: "Haasya Mantra Clinic & Implant Centre", experience: "5 Years", location: "Ahemdabad ", rating: "4.7", image: "Dr-Shitanshu-Shah.jpg" },
    { name: "Dr. Dr. Jhanvi Patel", specialty: "Dentistry (Endodontist)", hospital: "Haasya Mantra Clinic & Implant Centre", experience: "5 Years", location: "Ahemdabad ", rating: "4.7", image: "Dr-Jahanvi-Patel.jpg" },
  ];

  // --- DATA: PARTNERS ---
  const PARTNERS = [
    { name: "Partner 1", logo: "aims.jpeg" },
    { name: "Partner 2", logo: "amic.png" },
    { name: "Partner 3", logo: "haasyamantra.png"},
    { name: "Partner 4", logo: "image.png" },
    { name: "Partner 5", logo: "images.png" },
    { name: "Partner 6", logo: "mgmt.png" },
    { name: "Partner 7", logo: "phcc.png" },
    { name: "Partner 8", logo: "rishabh.jpeg" },
  ];

  // --- FILTER & CATEGORY LOGIC ---
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", ...new Set(allDoctors.map(d => d.specialty))];

  const filteredList = selectedCategory === "All" 
    ? allDoctors 
    : allDoctors.filter(d => d.specialty === selectedCategory);

  // --- SLIDER LOGIC ---
  let visibleItems = 4;
  if (windowWidth < 640) visibleItems = 1;      
  else if (windowWidth < 1024) visibleItems = 2; 
  else visibleItems = 4;                         

  const isSliderActive = filteredList.length > visibleItems;
  
  const displayDoctors = isSliderActive 
    ? filteredList 
    : filteredList;

  const [currentDocIndex, setCurrentDocIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    setCurrentDocIndex(0);
    setIsTransitioning(true);
  }, [selectedCategory, visibleItems]);

  const nextDoctor = () => {
    if (!isSliderActive) return;
    // Prevent scrolling past the last set of items
    if (currentDocIndex >= filteredList.length - visibleItems) {
        // Optional: Loop back to start
        setCurrentDocIndex(0);
    } else {
        setIsTransitioning(true);
        setCurrentDocIndex((prev) => prev + 1);
    }
  };
  
  const prevDoctor = () => {
    if (!isSliderActive) return;
    if (currentDocIndex <= 0) {
        // Optional: Loop to end
        setCurrentDocIndex(filteredList.length - visibleItems);
    } else {
        setIsTransitioning(true);
        setCurrentDocIndex((prev) => prev - 1);
    }
  };

  return (
    <div style={{ backgroundColor: theme.bg }} className="selection:bg-[#1A3C34] selection:text-[#F2F0EA] min-h-screen overflow-x-hidden">
      
      {/* =========================================
          SECTION 1: HERO
      ========================================= */}
      <section className="relative pt-20 pb-16 px-4 md:px-6 lg:pt-28 lg:pb-24 border-b" style={{ borderColor: theme.border }}>
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center lg:text-left"
          >
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <span className="h-[1px] w-6" style={{ backgroundColor: theme.primary }}></span>
              <span style={{ color: theme.primary, fontFamily: fonts.sans }} className="text-[10px] font-bold tracking-[0.25em] uppercase opacity-80">
                The Medical Concierge
              </span>
            </div>

            <h1 style={{ color: theme.primary, fontFamily: fonts.heading }} className="text-4xl lg:text-5xl xl:text-6xl font-medium leading-[1.1]">
              We are doctors. <br />
              <span style={{ color: theme.secondary, fontStyle: 'italic' }}>Not brokers.</span>
            </h1>

            <p style={{ color: theme.textLight, fontFamily: fonts.body }} className="text-base md:text-lg lg:text-xl max-w-md mx-auto lg:mx-0 leading-relaxed">
              Your health journey shouldn't be a transaction. We ensure end-to-end clinical oversight, JCI-accredited care, and zero hidden margins.
            </p>

            <div className="grid grid-cols-2 gap-px max-w-sm mt-6 border opacity-90 mx-auto lg:mx-0" style={{ borderColor: theme.primary, backgroundColor: theme.primary }}>
              {['HIPAA Compliant', 'JCI Hospitals', 'Doctor Vetted', 'Zero Wait Time'].map((item, i) => (
                <div key={i} style={{ backgroundColor: theme.bg }} className="p-3 flex items-center justify-center lg:justify-start gap-2">
                  <ShieldCheck style={{ color: theme.primary }} size={16} strokeWidth={1} />
                  <span style={{ color: theme.primary, fontFamily: fonts.sans }} className="text-xs font-bold tracking-wide">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 lg:gap-16 mt-10 max-w-md mx-auto lg:mx-0">
              <img src="jcin.png" alt="Accreditation" className="h-10 lg:h-12 w-auto object-contain" />
              <img src="/hipan.png" alt="Accreditation" className="h-10 lg:h-12 w-auto object-contain" />
              <img src="nabh.png" alt="Accreditation" className="h-10 lg:h-12 w-auto object-contain" />
            </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 1 }}
             className="relative h-[300px] md:h-[450px] lg:h-[550px] w-full mt-8 lg:mt-0"
          >
            <div className="absolute inset-0 bg-[#1A3C34]/10 z-10 pointer-events-none"></div>
            <img 
              src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=1200&auto=format&fit=crop" 
              alt="Consultation" 
              className="w-full h-full object-cover contrast-[1.1] rounded-sm"
            />
          </motion.div>

        </div>
      </section>

      {/* =========================================
          SECTION 2: OUR FOUNDERS
      ========================================= */}
      <section className="relative py-16 lg:py-28 px-4 md:px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-5 relative h-[300px] md:h-[400px] lg:h-[500px] w-full"
            >
              <div className="w-full h-full overflow-hidden relative shadow-sm border" style={{ borderColor: theme.border }}>
                <div className="absolute inset-0 bg-black/5 z-10"></div>
                <img 
                  src="/founders.JPG" 
                  alt="Founders" 
                  className="w-full h-full object-cover object-top md:object-center grayscale-[10%] hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-7 relative"
            >
              <div 
                className="relative p-6 lg:p-10 border backdrop-blur-md shadow-sm bg-white/80"
                style={{ borderColor: theme.border }}
              >
                <div className="space-y-6 relative z-10">
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

                  <div style={{ color: theme.textLight, fontFamily: fonts.body }} className="text-base lg:text-lg leading-relaxed space-y-4 font-light">
                    <p>MediVoyage was created with a simple belief: every person deserves access to safe, honest, and world class healthcare. That means transparent, fixed pricing so you always know what to expect.
                      You are not just a case or a file. You are someone with a story, a family, a future—and you deserve care that honors that.
                      <br/> <br/>
                      As doctor founders, our promise is to stand by you at every step, making sure your medical journey is clear, comfortable, and truly centered around your well-being.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                    <div className="space-y-1">
                      <p style={{ color: theme.primary, fontFamily: fonts.heading }} className="text-lg italic">Dr. Garvit Maharwal</p>
                      <p style={{ color: theme.textLight, fontFamily: fonts.sans }} className="text-[9px] font-bold uppercase tracking-widest opacity-70">Co-Founder & CEO</p>
                    </div>
                    <div className="space-y-1">
                      <p style={{ color: theme.primary, fontFamily: fonts.heading }} className="text-lg italic">Dr. Nandita Munjal</p>
                      <p style={{ color: theme.textLight, fontFamily: fonts.sans }} className="text-[9px] font-bold uppercase tracking-widest opacity-70">Co-Founder & COO</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 3: CURATED SPECIALISTS (FIXED SCROLL)
      ========================================= */}
      <section id="doctors" style={{ backgroundColor: theme.bg }} className="py-16 md:py-24 px-4 md:px-6 border-t" css={{ borderColor: theme.border }}>
        <div className="max-w-[1400px] mx-auto">
            {/* Header & Filter Controls */}
            <div className="mb-8 md:mb-12">
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-3">
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: theme.secondary }}></span>
                        <span style={{ color: theme.primary, fontFamily: fonts.sans }} className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-70">
                            Medical Board
                        </span>
                    </div>
                    <h2 style={{ color: theme.primary, fontFamily: fonts.heading }} className="text-3xl md:text-5xl leading-[1]">
                        Curated <span style={{ color: theme.secondary, fontStyle: 'italic' }}>Specialists.</span>
                    </h2>
                </div>

                <div className="flex flex-col xl:flex-row justify-between items-end gap-6 border-b pb-4" style={{ borderColor: theme.border }}>
                    <div className="flex flex-wrap gap-x-4 md:gap-x-6 gap-y-3 w-full">
                      {categories.slice(0, 6).map((cat) => (
                        <button
                          key={cat}
                          onClick={() => setSelectedCategory(cat)}
                          className={`text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 pb-1 relative ${
                            selectedCategory === cat 
                              ? 'text-[#1A3C34]' 
                              : 'text-[#1A3C34]/40 hover:text-[#1A3C34]'
                          }`}
                        >
                          {cat}
                          {selectedCategory === cat && (
                            <motion.div 
                                layoutId="activeTab"
                                className="absolute bottom-0 left-0 w-full h-0.5"
                                style={{ backgroundColor: theme.secondary }}
                            />
                          )}
                        </button>
                      ))}
                    </div>

                    <div className="flex gap-2 shrink-0 self-end">
                        <button 
                            onClick={prevDoctor}
                            disabled={!isSliderActive}
                            className={`w-10 h-10 md:w-12 md:h-12 border flex items-center justify-center transition-all ${
                                !isSliderActive ? 'opacity-30 cursor-not-allowed' : 'hover:bg-[#1A3C34] hover:text-[#F2F0EA]'
                            }`}
                            style={{ borderColor: theme.primary, color: theme.primary }}
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button 
                            onClick={nextDoctor}
                            disabled={!isSliderActive}
                            className={`w-10 h-10 md:w-12 md:h-12 border flex items-center justify-center transition-all ${
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
                        // ✅ FIX: Calculate translation based on total items, not visible items
                        animate={{ x: isSliderActive ? `-${currentDocIndex * (100 / displayDoctors.length)}%` : '0%' }}
                        transition={ isTransitioning ? { type: "spring", stiffness: 300, damping: 30 } : { duration: 0 } }
                        style={{ 
                          // ✅ FIX: Container width = (Total Items / Visible Items) * 100%
                          // This ensures each card is exactly 1/(visibleItems) of the viewport width
                          width: isSliderActive 
                            ? `${(displayDoctors.length / visibleItems) * 100}%` 
                            : '100%' 
                        }} 
                    >
                        {displayDoctors.map((doctor, index) => (
                            <div 
                                key={`${doctor.name}-${index}`} 
                                className="px-2 md:px-3"
                                // Each card takes up equal space in the long container
                                style={{ width: `${100 / displayDoctors.length}%` }}
                            >
                               <div className="group relative bg-white cursor-pointer overflow-hidden h-full shadow-sm hover:shadow-xl transition-shadow duration-500 rounded-sm">
                                    <div className="relative h-[280px] md:h-[320px] overflow-hidden">
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

                                    <div className="p-4 md:p-6 h-[160px] md:h-[180px] flex flex-col justify-between">
                                        <div>
                                            <div className="flex justify-between items-start mb-2">
                                                <span style={{ color: theme.secondary, fontFamily: fonts.sans }} className="text-[9px] md:text-[10px] font-bold tracking-widest uppercase truncate max-w-[70%]">
                                                    {doctor.specialty.split(' ')[0]}
                                                </span>
                                                <div className="flex items-center gap-1 opacity-60">
                                                    <Star size={10} fill={theme.primary} stroke="none" style={{ color: theme.primary }}/>
                                                    <span style={{ color: theme.primary }} className="text-xs font-bold">{doctor.rating}</span>
                                                </div>
                                            </div>

                                            <h3 style={{ color: theme.primary, fontFamily: fonts.heading }} className="text-lg md:text-xl font-bold tracking-tight mb-1 truncate">
                                                {doctor.name}
                                            </h3>
                                            <p style={{ color: theme.textLight, fontFamily: fonts.body }} className="text-xs md:text-sm opacity-80 truncate">{doctor.hospital}</p>
                                        </div>

                                        <div className="pt-4 border-t border-gray-100 flex justify-between items-end">
                                            <div>
                                                <p className="text-[9px] md:text-[10px] uppercase tracking-wider opacity-40 font-sans" style={{ color: theme.primary }}>Location</p>
                                                <p className="text-xs font-bold font-sans" style={{ color: theme.primary }}>{doctor.location}</p>
                                            </div>
                                            <div>
                                                <p className="text-[9px] md:text-[10px] uppercase tracking-wider opacity-40 text-right font-sans" style={{ color: theme.primary }}>Exp</p>
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

      {/* =========================================
          SECTION 4: PARTNERS
      ========================================= */}
      <section id ="hospitals" className="py-16 md:py-20 border-y bg-white" style={{ borderColor: theme.border }}>
        <div className="max-w-7xl mx-auto px-6 mb-8 md:mb-12 text-center">
          <span
            style={{ color: theme.primary, fontFamily: fonts.sans }}
            className="text-[20px] md:text-[25px] font-bold tracking-[0.2em] uppercase opacity-60"
          >
            Our partners
          </span>
        </div>

        <div className="relative flex overflow-hidden w-full mask-gradient-sides">
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          <motion.div
            className="flex gap-8 md:gap-16 whitespace-nowrap items-center" 
            animate={{ x: ["0%", "-50%"] }} 
            transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
          >
            {[...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS].map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center shrink-0"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="h-8 md:h-12 w-auto object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  );
}