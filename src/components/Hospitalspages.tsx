import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, ShieldCheck, Award, FileCheck } from 'lucide-react';

export default function NetworkInfo() {
  
  // --- THEME ---
  const theme = {
    bg: '#F2F0EA',
    primary: '#1A3C34',
    secondary: '#C8B092',
    textLight: '#5A6C66',
    border: '#E2E0D8',
    white: '#FFFFFF'
  };

  const fonts = {
    heading: '"Playfair Display", serif',
    body: '"EB Garamond", serif',
    sans: 'ui-sans-serif, system-ui, sans-serif'
  };

  // --- 4 BOXES DATA (Mosaic/Bento Config) ---
  const pillarBoxes = [
    {
      title: "Rigorous Vetting",
      // SPAN 2: Wide Box
      span: "md:col-span-2",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop",
      points: ["On-site clinical audits", "Sterilization protocol review", "Nursing ratio checks"],
      bgColor: theme.primary, textColor: theme.white, accentColor: theme.secondary
    },
    {
      title: "Advanced Tech",
      // SPAN 1: Tall/Narrow Box
      span: "md:col-span-1",
      image: "https://images.unsplash.com/photo-1630128295920-627fb9aff5a4?w=900&auto=format&fit=crop",
      points: ["Da Vinci Xi Robotics", "3Tesla MRI Systems", "Proton Beam Therapy"],
      bgColor: theme.white, textColor: theme.primary, accentColor: theme.secondary
    },
    {
      title: "Elite Specialists",
      // SPAN 1: Tall/Narrow Box
      span: "md:col-span-1",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=600&auto=format&fit=crop",
      points: ["Department heads only", "US/UK Fellowship trained", "High surgical volume"],
      bgColor: theme.white, textColor: theme.primary, accentColor: theme.secondary
    },
    {
      title: "Premium Experience",
      // SPAN 2: Wide Box
      span: "md:col-span-2",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop",
      points: ["Dedicated recovery suites", "Multi-lingual support", "Seamless visa assistance"],
      bgColor: '#3A4F47', textColor: theme.white, accentColor: theme.secondary
    },
  ];

  // --- ACCREDITATIONS ---
  const accreditations = [
    { label: "JCI Accredited", sub: "Global Gold Standard", icon: Award },
    { label: "NABH Certified", sub: "National Hospital Board", icon: ShieldCheck },
    { label: "NABL Compliant", sub: "Lab Testing Authority", icon: FileCheck },
  ];

  return (
    <div style={{ backgroundColor: theme.bg }} className="min-h-screen pt-32 pb-16 font-sans">
      
      {/* =========================================
          HERO & TRUST STRIP
      ========================================= */}
      <section className="max-w-6xl mx-auto px-6 mb-20 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="h-[1px] w-6" style={{ backgroundColor: theme.primary }}></span>
          <span style={{ color: theme.primary, fontFamily: fonts.sans }} className="text-[10px] font-bold tracking-[0.25em] uppercase opacity-80">
            The Gold Standard
          </span>
          <span className="h-[1px] w-6" style={{ backgroundColor: theme.primary }}></span>
        </div>
        
        <h1 style={{ color: theme.primary, fontFamily: fonts.heading }} className="text-4xl md:text-5xl font-medium leading-tight mb-8">
          Four pillars of <span style={{ color: theme.secondary, fontStyle: 'italic' }}>excellence.</span>
        </h1>

        {/* TRUST BADGES */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8">
          {accreditations.map((item, idx) => (
             <div 
               key={idx} 
               className="flex items-center gap-3 bg-white px-5 py-3 rounded-full shadow-sm border"
               style={{ borderColor: theme.border }}
             >
                <div className="p-1.5 rounded-full bg-[#F2F0EA]">
                  <item.icon size={16} color={theme.primary} />
                </div>
                <div className="text-left">
                  <p style={{ color: theme.primary, fontFamily: fonts.sans }} className="text-[10px] font-bold uppercase tracking-wider leading-none">
                    {item.label}
                  </p>
                  <p style={{ color: theme.textLight }} className="text-[9px] leading-tight mt-0.5">
                    {item.sub}
                  </p>
                </div>
             </div>
          ))}
        </div>

        <p style={{ color: theme.textLight, fontFamily: fonts.body }} className="text-xl max-w-xl mx-auto">
          Our network is rigorously vetted to meet international benchmarks of safety and quality.
        </p>
      </section>

      {/* =========================================
          MOSAIC GRID (4 BOXES)
      ========================================= */}
      <section className="max-w-[1200px] mx-auto px-6 mb-32">
        {/* Grid System: 
           - Mobile: 1 Col
           - Desktop: 3 Cols 
           This allows the 2-span items to sit next to 1-span items perfectly.
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {pillarBoxes.map((box, idx) => (
            <div 
              key={idx} 
              // Bento Span Class & Rounded Corners
              className={`${box.span} group relative flex flex-col h-full transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-2xl border overflow-hidden rounded-[2rem]`}
              style={{ 
                backgroundColor: box.bgColor, 
                borderColor: theme.border,
              }}
            >
              {/* Image Area - Full Color */}
              <div className="h-64 sm:h-72 overflow-hidden relative">
                 <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                 <img 
                   src={box.image} 
                   alt={box.title}
                   // REMOVED grayscale classes
                   className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-all duration-700 ease-in-out"
                 />
              </div>

              {/* Content Area */}
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <h3 style={{ color: box.textColor, fontFamily: fonts.heading }} className="text-3xl font-medium mb-6">
                    {box.title}
                  </h3>
                  
                  {/* Grid layout for text inside wide boxes */}
                  <div className={`space-y-3 ${box.span === 'md:col-span-2' ? 'md:grid md:grid-cols-2 md:gap-4 md:space-y-0' : ''}`}>
                    {box.points.map(pt => (
                      <div key={pt} className="flex items-start gap-3">
                        <Check size={16} color={box.accentColor} className="mt-0.5 flex-shrink-0" />
                        <span style={{ color: box.textColor, fontFamily: fonts.sans, opacity: 0.9 }} className="text-xs font-bold uppercase tracking-widest leading-relaxed">
                          {pt}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-8 h-0.5 w-12 opacity-30" style={{ backgroundColor: box.accentColor }}></div>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* =========================================
          PARTNERS MARQUEE (Empty Placeholders)
      ========================================= */}
      <section className="py-20 border-y bg-white" style={{ borderColor: theme.border }}>
        <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
           <span style={{ color: theme.primary, fontFamily: fonts.sans }} className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-60">
              Trusted By Global Leaders
           </span>
        </div>

        <div className="relative flex overflow-hidden w-full mask-gradient-sides">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
          
          <motion.div 
            className="flex gap-20 whitespace-nowrap items-center"
            animate={{ x: [0, -1400] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          >
            {/* 10 Empty Slots for logos */}
            {[...Array(10)].map((_, index) => (
              <div 
                key={index} 
                className="opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-pointer flex items-center justify-center"
              >
                 {/* REPLACE THIS DIV WITH YOUR IMG */}
                 <div 
                   className="h-16 w-40 border-2 border-dashed rounded-lg flex items-center justify-center"
                   style={{ borderColor: theme.border }}
                 >
                    <span style={{ color: theme.textLight, fontFamily: fonts.sans }} className="text-[10px] font-bold uppercase">
                      Logo {index + 1}
                    </span>
                 </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

       {/* =========================================
          CTA
      ========================================= */}
      <section className="bg-[#1A3C34] py-24 px-6 text-center">
        <h2 style={{ color: theme.white, fontFamily: fonts.heading }} className="text-4xl md:text-5xl font-medium mb-6">
          Experience world-class care.
        </h2>
        <p style={{ color: '#E2E0D8', fontFamily: fonts.body }} className="text-2xl opacity-80 mb-12 max-w-md mx-auto">
          Begin your journey with a clinical assessment.
        </p>
        <button 
          style={{ backgroundColor: theme.secondary, color: theme.primary }}
          className="px-12 py-5 text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300 inline-flex items-center gap-4 rounded-full"
        >
          Start Assessment <ArrowRight size={16} />
        </button>
      </section>

    </div>
  );
}