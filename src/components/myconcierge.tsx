import React from 'react';
import { motion } from 'framer-motion';
import { 
  Plane, 
  Stethoscope, 
  Shield, 
  Globe, 
  HeartPulse, 
  FileText, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export default function MyConcierge() {
  // Theme: Inverted (Light Stone & Deep Emerald)
  const theme = {
    bg: '#FAFAF9',           // Alabaster / Light Stone
    text: '#0F2622',         // Deep Emerald
    subText: '#5C6B67',      // Muted Slate Green
    accent: '#D4C5A9',       // Champagne Gold
    cardBg: '#FFFFFF',       // Pure White
    border: '#E6E4E0',       // Soft Grey Border
  };

  return (
    <div className="min-h-screen w-full font-sans selection:bg-[#0F2622] selection:text-[#D4C5A9]" style={{ backgroundColor: theme.bg, color: theme.text }}>
      
      {/* Font Injection */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400&display=swap');
          .font-garamond { font-family: 'EB Garamond', serif; }
        `}
      </style>

      {/* MINIMALIST NAV */}
      

      {/* MAIN CONTENT */}
      <main className="pt-40 pb-32 px-6 max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="block text-[#D4C5A9] text-xs font-bold tracking-[0.2em] uppercase mb-8">Our Services</span>
            
            <h1 className="font-garamond text-6xl md:text-7xl lg:text-8xl text-[#0F2622] mb-10 leading-[0.95]">
              The Art of <br />
              <span className="italic font-light text-[#0F2622]/80">Modern Healing</span>
            </h1>
            
            <p className="text-[#5C6B67] text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
              We orchestrate seamless medical journeys, bridging the gap between clinical necessity and luxury hospitality through a single point of contact.
            </p>
          </motion.div>
        </div>

        {/* SERVICES BENTO GRID */}
        {/* Grid Structure: 4 Columns. */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr mb-40">
           
           {/* 1. Medical Aviation (Large, Image Background) */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             whileHover={{ y: -4 }}
             className="lg:col-span-2 relative min-h-[320px] rounded-xl overflow-hidden group p-8 flex flex-col justify-end text-white"
           >
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2622] via-transparent to-transparent z-10 opacity-90"></div>
              <img 
                src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=1000&auto=format&fit=crop" 
                alt="Private Jet Interior" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              <div className="relative z-20">
                <Plane className="mb-4 text-[#D4C5A9]" size={32} strokeWidth={1} />
                <h3 className="font-garamond text-4xl mb-2">Medical Aviation</h3>
                <p className="text-white/80 font-light text-sm max-w-md">Bed-to-bed air ambulance and commercial stretcher coordination with ICU-level care at 40,000 feet.</p>
              </div>
           </motion.div>

           {/* 2. Executive Screening (Small, White) */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             whileHover={{ y: -4 }}
             className="bg-white border border-[#E6E4E0] p-8 rounded-xl flex flex-col justify-between hover:border-[#D4C5A9] transition-colors"
           >
              <div className="text-[#0F2622]">
                 <HeartPulse size={28} strokeWidth={1} />
              </div>
              <div>
                 <h3 className="font-garamond text-2xl text-[#0F2622] mb-2">Executive Screening</h3>
                 <p className="text-[#5C6B67] text-sm leading-relaxed">Genetic profiling and bio-marker analysis at leading diagnostic centers.</p>
              </div>
           </motion.div>

           {/* 3. Global Specialist Access (Small, Deep Green) */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             whileHover={{ y: -4 }}
             className="bg-[#0F2622] p-8 rounded-xl flex flex-col justify-between text-white"
           >
              <div className="text-[#D4C5A9]">
                 <Stethoscope size={28} strokeWidth={1} />
              </div>
              <div>
                 <h3 className="font-garamond text-2xl text-white mb-2">Specialist Access</h3>
                 <p className="text-white/60 text-sm leading-relaxed">Expedited appointments at Mayo, Charité, and Johns Hopkins.</p>
              </div>
           </motion.div>

           {/* 4. Legal & Visa (Small, Light Grey) */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3 }}
             whileHover={{ y: -4 }}
             className="bg-[#F2F0E9] p-8 rounded-xl flex flex-col justify-between"
           >
              <div className="text-[#0F2622]">
                 <FileText size={28} strokeWidth={1} />
              </div>
              <div>
                 <h3 className="font-garamond text-2xl text-[#0F2622] mb-2">Legal & Logistics</h3>
                 <p className="text-[#5C6B67] text-sm leading-relaxed">Full-spectrum support for medical visas and insurance claims.</p>
              </div>
           </motion.div>

           {/* 5. Wellness Retreats (Large, Image) */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.4 }}
             whileHover={{ y: -4 }}
             className="lg:col-span-2 relative min-h-[320px] rounded-xl overflow-hidden group p-8 flex flex-col justify-end text-white"
           >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2622] via-transparent to-transparent z-10 opacity-80"></div>
              <img 
                src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=1000&auto=format&fit=crop" 
                alt="Wellness Retreat" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              <div className="relative z-20">
                <Sparkles className="mb-4 text-[#D4C5A9]" size={32} strokeWidth={1} />
                <h3 className="font-garamond text-4xl mb-2">Wellness Retreats</h3>
                <p className="text-white/80 font-light text-sm max-w-md">Post-operative recovery and longevity programs curated in serene destinations like Kyoto and The Alps.</p>
              </div>
           </motion.div>

           {/* 6. Private Security (Small, Gold) */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.5 }}
             whileHover={{ y: -4 }}
             className="bg-[#D4C5A9] p-8 rounded-xl flex flex-col justify-between"
           >
              <div className="text-[#0F2622]">
                 <Shield size={28} strokeWidth={1} />
              </div>
              <div>
                 <h3 className="font-garamond text-2xl text-[#0F2622] mb-2">Private Security</h3>
                 <p className="text-[#0F2622]/80 text-sm leading-relaxed">Discreet close protection and secure transport.</p>
              </div>
           </motion.div>

        </div>

        {/* BOTTOM CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <button className="group relative px-12 py-6 bg-[#0F2622] text-white rounded-none overflow-hidden transition-all hover:bg-[#1A3D36]">
            <span className="relative z-10 text-xs font-bold uppercase tracking-[0.2em]">Begin Your Journey</span>
            <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-4 transition-all duration-300 text-[#D4C5A9]">
              <ArrowRight size={16} />
            </div>
          </button>
        </motion.div>

      </main>

      {/* FOOTER STRIP */}
      <footer className="border-t py-16 text-center" style={{ borderColor: theme.border }}>
         <div className="flex flex-col md:flex-row justify-center items-center gap-10 text-[#0F2622]/40 text-[10px] font-bold uppercase tracking-[0.15em]">
            <span className="flex items-center gap-2 hover:text-[#0F2622] transition-colors cursor-pointer"><Globe size={14} className="text-[#D4C5A9]"/> Global Network</span>
            <span className="hidden md:inline w-1 h-1 bg-[#0F2622]/10 rounded-full"></span>
            <span className="flex items-center gap-2 hover:text-[#0F2622] transition-colors cursor-pointer"><Shield size={14} className="text-[#D4C5A9]"/> HIPPA Compliant</span>
            <span className="hidden md:inline w-1 h-1 bg-[#0F2622]/10 rounded-full"></span>
            <span className="flex items-center gap-2 hover:text-[#0F2622] transition-colors cursor-pointer"><Stethoscope size={14} className="text-[#D4C5A9]"/> JCI Accredited</span>
         </div>
      </footer>
    </div>
  );
}