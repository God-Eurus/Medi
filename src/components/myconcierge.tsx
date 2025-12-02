import React from 'react';
import { motion } from 'framer-motion';
import { Plus, ArrowRight } from 'lucide-react';

export default function MyConcierge() {
  
  // --- THEME CONSTANTS ---
  const theme = {
    bg: '#F2F0EA',          // Soft Alabaster
    primary: '#1A3C34',     // Deep Cypress Green
    primaryDark: '#0F2622', // Darker Green for gradient
    secondary: '#C8B092',   // Muted Gold
    textLight: '#5A6C66',   // Sage Grey
    white: '#FFFFFF',
    border: '#E2E0D8'
  };

  return (
    <div className="min-h-screen w-full font-sans overflow-x-hidden" style={{ backgroundColor: theme.bg }}>
      
      {/* =========================================
          SECTION 1: HERO (RADICAL. MAGICAL.)
      ========================================= */}
      <section className="relative w-full pt-16 md:pt-20 pb-0 overflow-hidden flex flex-col items-center text-center">
        {/* Dark Gradient Background */}
        <div 
            className="absolute inset-0 z-0" 
            style={{ background: `linear-gradient(180deg, ${theme.primary} 0%, ${theme.primaryDark} 100%)` }}
        ></div>

        <div className="relative z-10 w-full max-w-4xl px-4 md:px-6 flex flex-col items-center">
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter text-white leading-[0.95] md:leading-[0.9] mb-4 md:mb-6"
            >
                SMOOTH.<br />
                TRANSPARENT.<br />
                REVOLUTIONARY.
            </motion.h1>

            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-[10px] md:text-xs font-bold uppercase tracking-widest mb-8 opacity-60 text-white px-4"
            >
                 Available in Jaipur, Mumbai, Ahemdabad & Bangalore
            </motion.p>

            <motion.button
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="group flex items-center gap-3 bg-white text-[#1A3C34] px-6 py-3 md:px-8 md:py-3 rounded-full font-bold text-[10px] md:text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition-all"
            >
                Book Consultation
                <div className="bg-[#1A3C34] text-white rounded-full p-1">
                    <ArrowRight size={12} />
                </div>
            </motion.button>

            {/* Phone Mockup */}
            <motion.div 
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8, type: "spring" }}
                className="mt-12 md:mt-16 relative w-[280px] h-[380px] sm:w-[300px] sm:h-[400px] md:w-[350px] md:h-[450px] bg-gray-900 rounded-t-[30px] md:rounded-t-[40px] border-[6px] md:border-[8px] border-gray-900 shadow-2xl overflow-hidden"
            >
                <div className="absolute top-0 left-0 right-0 h-5 md:h-6 bg-black z-20 flex justify-center">
                    <div className="w-20 md:w-24 h-3 md:h-4 bg-black rounded-b-xl"></div>
                </div>
                <div className="w-full h-full bg-white relative flex flex-col pt-10 md:pt-12 px-4 md:px-6">
                    <div className="w-full h-[180px] md:h-[220px] rounded-2xl p-5 md:p-6 flex flex-col justify-between shadow-lg"
                         style={{ background: `linear-gradient(135deg, ${theme.secondary}, #E6D5BC, #F2F0EA)` }}
                    >
                        <span className="text-[9px] md:text-[10px] font-bold tracking-widest text-[#1A3C34]">Medivoyage</span>
                        <div>
                             <div className="w-6 h-6 md:w-8 md:h-8 text-white mb-2">
                                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" /></svg>
                             </div>
                             <h3 className="text-2xl md:text-3xl font-black text-white mix-blend-overlay opacity-90 tracking-tighter">CONCIERGE</h3>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
      </section>

      {/* =========================================
          SECTION 2: LIMITED PRICE (VIP PASS)
      ========================================= */}
      <section className="py-16 md:py-20 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8 md:mb-12 space-y-2">
                <h2 
                    className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter uppercase leading-[1]"
                    style={{ color: theme.primary }}
                >
                    Transparent Pricing.<br />
                    Trusted Care.
                </h2>
                <p className="text-base md:text-lg font-serif italic" style={{ color: theme.textLight }}>
                    ₹1999/year · Family of 4
                </p>
            </div>

            <div className="bg-white rounded-[24px] md:rounded-[32px] p-6 md:p-12 shadow-sm border flex flex-col md:flex-row items-center gap-8 md:gap-16"
                 style={{ borderColor: theme.border }}
            >
                <div className="w-full md:w-1/2">
                    <motion.div 
                        whileHover={{ scale: 1.02, rotateY: 5 }}
                        className="w-full aspect-[1.586/1] rounded-xl md:rounded-2xl p-5 md:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden"
                        style={{ background: `linear-gradient(135deg, ${theme.secondary}, #E6D5BC, #F2F0EA)` }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                        <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#1A3C34] uppercase">SuperHealth</span>
                        <div className="relative z-10">
                            <div className="w-6 h-6 md:w-8 md:h-8 text-white mb-2 opacity-80">
                                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" /></svg>
                            </div>
                            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mix-blend-overlay opacity-60 tracking-tighter">VIP PASS</h3>
                        </div>
                    </motion.div>
                </div>

                <div className="w-full md:w-1/2 space-y-4 md:space-y-6 text-center md:text-left">
                    <h3 className="text-xl md:text-2xl font-bold leading-tight" style={{ color: theme.primary }}>
                        Just ₹1999/year for your entire family of 4
                    </h3>
                    <div className="space-y-3 md:space-y-4 text-sm md:text-base leading-relaxed" style={{ color: theme.textLight }}>
                        <p>Experience peace of mind knowing every member from children to grandparents is protected under one simple plan.</p>
                        <p>Affordable, reliable, and designed around your family's needs.</p>
                    </div>
                    <div className="flex justify-center md:justify-start">
                        <button 
                            className="group flex items-center gap-2 px-6 py-3 md:px-8 rounded-full font-bold text-xs uppercase tracking-wider text-white transition-all hover:opacity-90 mt-2"
                            style={{ backgroundColor: theme.primary }}
                        >
                            Buy VIP Pass
                            <div className="bg-white/20 rounded-full p-1 group-hover:bg-white/30 transition-colors">
                                <ArrowRight size={12} />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* =========================================
          SECTION 3: 4-CARD GRID
      ========================================= */}
      <section className="flex items-center justify-center px-4 md:px-6 pb-16 md:pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl w-full">
            
            {/* Card 1 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 md:p-10 rounded-[24px] md:rounded-[32px] min-h-[220px] md:min-h-[280px] flex flex-col justify-between relative shadow-sm border"
              style={{ borderColor: theme.border }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-medium tracking-tight leading-[1.2]" style={{ color: theme.textLight }}>
                All Tests and Scans are covered. <br />
                <span style={{ color: theme.primary }} className="font-semibold italic">Yes, even MRIs & discharge medicines too.</span>
              </h2>
              <div className="self-end mt-4">
                 <div className="rounded-full p-2 cursor-pointer transition-colors duration-300" style={{ backgroundColor: theme.secondary }}>
                    <Plus size={18} className="text-[#1A3C34]" />
                 </div>
              </div>
            </motion.div>
            
            {/* Card 2 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden p-6 md:p-10 rounded-[24px] md:rounded-[32px] min-h-[220px] md:min-h-[280px] flex flex-col justify-center shadow-sm group"
              style={{ backgroundColor: theme.primary }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
              <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-serif font-medium tracking-tight leading-[1.1] relative z-10">
                Affordable, reliable <br/> tailor made for you.
              </h2>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 md:p-10 rounded-[24px] md:rounded-[32px] min-h-[220px] md:min-h-[320px] flex flex-col justify-between shadow-sm border"
              style={{ borderColor: theme.border }}
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-medium tracking-tight leading-[1]" style={{ color: theme.primary }}>
                Consult<br /> your doctors<br /> As many times <br /> <span className="italic">As you need</span>
              </h2>
            </motion.div>

            {/* Card 4 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 md:p-10 rounded-[24px] md:rounded-[32px] min-h-[220px] md:min-h-[320px] flex flex-col justify-center shadow-sm border"
              style={{ borderColor: theme.border }}
            >
              <h2 
                className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.15] bg-clip-text text-transparent"
                style={{ backgroundImage: `linear-gradient(to bottom, ${theme.secondary}, #A68A68)` }}
              >
                Best in class doctors.<br /> State of the art hospitals.<br /> Seamless experience.<br />(airport to airport.)
              </h2>
            </motion.div>
            
          </div>
      </section>

      {/* =========================================
          SECTION 4: RESPONSIBILITY & EXCLUSIONS
      ========================================= */}
      <section className="flex items-center justify-center px-4 md:px-6 pb-16 md:pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl w-full">

            {/* LEFT: RESPONSIBILITY (Dark Card) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 md:p-12 rounded-[24px] md:rounded-[32px] min-h-[300px] md:min-h-[350px] flex flex-col justify-center shadow-md"
              style={{ backgroundColor: '#050505' }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.05] mb-4 md:mb-6" style={{ color: theme.secondary }}>
                Great power <br/>
                brings great <br/>
                responsibility
              </h2>
              <p className="text-xs md:text-base leading-relaxed opacity-90" style={{ color: theme.secondary }}>
                VIP Pass gives you instant and unlimited access to care. We request you to be respectful to your fellow patients and avoid last minute changes to appointments to minimize care delay to other patients who could've otherwise booked the slot you had.
              </p>
            </motion.div>

            {/* RIGHT: NOT INCLUDED (White Card) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-8 md:p-12 rounded-[24px] md:rounded-[32px] min-h-[300px] md:min-h-[350px] flex flex-col justify-center shadow-sm border"
              style={{ borderColor: theme.border }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.05] mb-4 md:mb-6" style={{ color: '#262626' }}>
                What's not included?
              </h2>
              <p className="text-xs md:text-base leading-relaxed" style={{ color: theme.textLight }}>
                Any procedures other than explicitly mentioned in the packages, in case of any complication stay extends the stipulated timeframe (extended stay policy Will cover you if you opt for it)
              </p>
            </motion.div>

          </div>
      </section>

      {/* =========================================
          SECTION 5: FOOTER
      ========================================= */}
      <footer className="w-full max-w-5xl mx-auto px-6 pb-12 pt-8 border-t text-center md:text-left" style={{ borderColor: theme.border }}>
        <div className="space-y-2">
            <h3 
               className="text-lg font-black tracking-widest uppercase bg-clip-text text-transparent w-fit mx-auto md:mx-0"
               style={{ backgroundImage: `linear-gradient(to right, #9333EA, #EC4899)` }} 
            >
                MEDIVOYAGE
            </h3>
            <p className="text-xs font-medium text-gray-500">
                Speak to a <strong className="text-gray-900">Medivoyage Concierge</strong> on +919799636757
            </p>
        </div>
      </footer>

    </div>
  );
}