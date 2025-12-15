import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // ✅ Import useNavigate
import { Plus, ArrowRight, Star, Shield, Activity, Calendar, Plane } from 'lucide-react';
import Header from './Header';
import Footer from './Footer'
import WhatsAppButton from '../components/WhatsAppButton';
// Footer component removed to avoid duplication with the custom footer below

export default function MyConcierge() {
  const navigate = useNavigate(); // ✅ Initialize hook

  // --- THEME CONSTANTS ---
  const theme = {
    bg: '#F2F0EA',          // Soft Alabaster
    primary: '#1A3C34',     // Deep Cypress Green
    primaryDark: '#0F2622', // Darker Green
    secondary: '#C8B092',   // Muted Gold
    textLight: '#5A6C66',   // Sage Grey
    white: '#FFFFFF',
    border: '#DCDAD3'       // Slightly darker border for contrast
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <div className="min-h-screen w-full font-sans overflow-x-hidden selection:bg-[#C8B092] selection:text-white" style={{ backgroundColor: theme.bg }}>
      <Header />
      {/* Decorative Background Blur */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#C8B092] opacity-[0.07] rounded-full blur-3xl -z-10 pointer-events-none" />

      {/* =========================================
          SECTION 1: HERO
      ========================================= */}
      <section className="relative w-full pt-16 md:pt-28 pb-12 overflow-hidden flex flex-col items-center text-center">
        
        <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="relative z-10 w-full max-w-5xl px-4 md:px-6 flex flex-col items-center"
        >
            <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6">
                <span className="h-[1px] w-8 bg-[#1A3C34] opacity-30"></span>
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-[#1A3C34]">Medivoyage Concierge</span>
                <span className="h-[1px] w-8 bg-[#1A3C34] opacity-30"></span>
            </motion.div>

            <motion.h1 
                variants={itemVariants}
                className="text-5xl sm:text-6xl md:text-8xl font-serif font-medium tracking-tight text-[#1A3C34] leading-[0.95] mb-6"
            >
                Smooth. <span className="italic text-[#C8B092]">Transparent.</span><br />
                 Revolutionary.
            </motion.h1>

            <motion.p 
                variants={itemVariants}
                className="text-sm md:text-base font-medium max-w-lg leading-relaxed mb-8"
                style={{ color: theme.textLight }}
            >
                 The first premium medical concierge available in Jaipur, Mumbai, Ahmedabad & Bangalore.
            </motion.p>

            <motion.div variants={itemVariants} className="flex gap-4">
                {/* ✅ Button now redirects to Home */}
                <motion.button
                    onClick={() => navigate('/')} 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group flex items-center gap-3 px-8 py-4 rounded-full font-bold text-xs uppercase tracking-wider shadow-xl hover:shadow-2xl transition-all text-white"
                    style={{ backgroundColor: theme.primary }}
                >
                    Start Consultation
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform"/>
                </motion.button>
            </motion.div>

            {/* Phone Mockup - Floats over content */}
            <motion.div 
                initial={{ y: 100, opacity: 0, rotateX: 20 }}
                animate={{ y: 0, opacity: 1, rotateX: 0 }}
                transition={{ delay: 0.4, duration: 1, type: "spring" }}
                className="mt-16 md:mt-20 relative z-20"
                style={{ perspective: '1000px' }}
            >
                <div className="relative w-[280px] h-[550px] sm:w-[320px] sm:h-[600px] bg-[#050505] rounded-[40px] md:rounded-[50px] border-[8px] border-[#151515] shadow-2xl overflow-hidden ring-1 ring-white/10">
                    {/* Screen Content */}
                    <div className="w-full h-full bg-[#F2F0EA] relative flex flex-col">
                        
                        {/* Status Bar Mock */}
                        <div className="flex justify-between items-center px-6 pt-4 pb-2">
                             <span className="text-[10px] font-bold text-black">9:41</span>
                             <div className="flex gap-1">
                                <div className="w-4 h-2 bg-black rounded-sm"></div>
                             </div>
                        </div>

                        {/* App Header */}
                        <div className="px-6 py-4">
                            <h3 className="text-2xl font-serif text-[#1A3C34]">Hello, Traveler.</h3>
                        </div>

                        {/* Card 1 in Phone */}
                        <div className="mx-4 p-5 rounded-2xl mb-3 shadow-lg flex flex-col justify-between h-40"
                             style={{ background: `linear-gradient(135deg, ${theme.primary}, ${theme.primaryDark})` }}>
                             <div className="flex justify-between items-start">
                                <Activity size={20} className="text-[#C8B092]" />
                                <span className="text-[10px] text-white/60 uppercase tracking-widest">Premium</span>
                             </div>
                             <div className="text-white">
                                <div className="text-2xl font-medium">Full Coverage</div>
                                <div className="text-xs opacity-70">Active Membership</div>
                             </div>
                        </div>

                        {/* Card 2 in Phone */}
                        <div className="mx-4 p-5 rounded-2xl bg-white shadow-sm border border-stone-200">
                             <div className="flex gap-3 items-center mb-3">
                                <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center">
                                    <Plane size={18} className="text-[#1A3C34]" />
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-[#1A3C34]">Flight to Mumbai</div>
                                    <div className="text-[10px] text-stone-500">Scheduled for Tomorrow</div>
                                </div>
                             </div>
                             <div className="w-full bg-stone-100 h-1 rounded-full overflow-hidden">
                                <div className="w-2/3 h-full bg-[#C8B092]"></div>
                             </div>
                        </div>

                    </div>
                </div>
                
                {/* Shadow underneath phone */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-12 bg-[#1A3C34] opacity-20 blur-2xl rounded-[100%] z-[-1]"></div>
            </motion.div>

        </motion.div>
      </section>


      {/* =========================================
          SECTION 2: VIP PASS (Split Layout)
      ========================================= */}
      <section className="py-20 px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto bg-white rounded-[32px] md:rounded-[48px] p-8 md:p-16 shadow-xl border border-[#EAE8E0]">
            
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                {/* Left: The Typography */}
                <div className="lg:w-1/2 space-y-8">
                    <h2 className="text-4xl md:text-6xl font-serif font-medium leading-[0.95]" style={{ color: theme.primary }}>
                        One Price.<br />
                        <span className="text-[#C8B092] italic">Unlimited</span> Care.
                    </h2>
                    <p className="text-lg leading-relaxed text-[#5A6C66]">
                        No hidden fees. No surprise bills. A fixed package tailor-made to your needs covering procedures, flights, visas, and accommodation.
                    </p>

                    <div className="grid gap-6 mt-8">
                        {[
                            { title: "Consultation", desc: "Tell us what you seek from home." },
                            { title: "Curated Package", desc: "We build your all-inclusive plan." },
                            { title: "Arrival", desc: "No waiting lines. Zero hassle." },
                            { title: "Recovery", desc: "Treatment & follow-up care included." }
                        ].map((step, idx) => (
                            <div key={idx} className="flex gap-4 group">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full border border-[#C8B092] text-[#C8B092] flex items-center justify-center text-sm font-bold group-hover:bg-[#C8B092] group-hover:text-white transition-colors">
                                    {idx + 1}
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#1A3C34] text-sm uppercase tracking-wide">{step.title}</h4>
                                    <p className="text-sm text-[#5A6C66]">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: The "Card" Graphic */}
                <div className="lg:w-1/2 flex items-center justify-center">
                    <motion.div 
                        whileHover={{ scale: 1.02, rotateY: 5 }}
                        className="w-full max-w-md aspect-[1.586/1] rounded-2xl md:rounded-3xl p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden"
                        style={{ background: `linear-gradient(135deg, ${theme.primary}, #0F2622)` }}
                    >
                        {/* Noise Texture */}
                        <div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
                        
                        <div className="flex justify-between items-start z-10">
                            <span className="text-xs font-bold tracking-[0.2em] text-[#C8B092] uppercase">Medivoyage</span>
                            <Star className="text-[#C8B092]" fill="#C8B092" size={20} />
                        </div>
                        
                        <div className="relative z-10">
                            <h3 className="text-4xl md:text-5xl font-serif text-white mb-2">PRIORITY PASS</h3>
                            <p className="text-white/60 text-xs tracking-wider uppercase">Global Access • Priority Queue</p>
                        </div>

                        {/* Glossy Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 pointer-events-none"></div>
                    </motion.div>
                </div>
            </div>
        </div>
      </section>

      {/* =========================================
          SECTION 3: BENTO GRID
      ========================================= */}
      <section className="px-4 md:px-6 pb-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            
            {/* Card 1: MRI/Tests */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 rounded-[32px] min-h-[300px] flex flex-col justify-between border border-[#EAE8E0] hover:shadow-lg transition-shadow duration-500"
            >
              <div className="w-12 h-12 rounded-full bg-[#F2F0EA] flex items-center justify-center mb-6">
                <Activity className="text-[#1A3C34]" size={24} />
              </div>
              <h3 className="text-3xl md:text-4xl font-serif leading-tight text-[#1A3C34]">
                All Tests Covered.<br />
                <span className="text-[#C8B092] italic">Yes, even MRIs.</span>
              </h3>
              <p className="mt-4 text-[#5A6C66]">Includes discharge medicines and pre-op scans.</p>
            </motion.div>
            
            {/* Card 2: Dark Promo */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative overflow-hidden p-8 md:p-12 rounded-[32px] min-h-[300px] flex flex-col justify-center text-center group"
              style={{ backgroundColor: theme.primary }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 to-transparent"></div>
              <h3 className="text-white text-3xl md:text-5xl font-serif leading-tight relative z-10">
                Affordable.<br />
                Reliable.<br />
                <span className="italic text-[#C8B092]">Tailor made.</span>
              </h3>
            </motion.div>

            {/* Card 3: Doctors */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#FBFBF9] p-8 md:p-12 rounded-[32px] min-h-[300px] flex flex-col justify-between border border-[#EAE8E0]"
            >
              <h3 className="text-3xl md:text-5xl font-serif leading-[0.9] text-[#1A3C34]">
                Consult <br />
                as many times <br />
                <span className="italic text-[#C8B092]">as you need.</span>
              </h3>
              <div className="flex items-center gap-2 mt-4 text-[#1A3C34] font-bold text-xs uppercase tracking-widest">
                <div className="w-2 h-2 bg-[#1A3C34] rounded-full"></div>
                Unlimited Access
              </div>
            </motion.div>

            {/* Card 4: Airport to Airport */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white p-8 md:p-12 rounded-[32px] min-h-[300px] flex flex-col justify-center border border-[#EAE8E0] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Plane size={140} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold leading-snug text-[#1A3C34] relative z-10">
                Best in class doctors.<br/>
                State of the art hospitals.<br/>
                <span className="text-[#C8B092]">Seamless Experience.<br/>(Airport to Airport) </span>
              </h3>
            </motion.div>
            
          </div>
      </section>

      {/* =========================================
          SECTION 4: RESPONSIBILITY
      ========================================= */}
      <section className="px-4 md:px-6 pb-20">
          <div className="max-w-6xl mx-auto bg-[#1A3C34] rounded-[32px] md:rounded-[48px] p-8 md:p-16 text-white relative overflow-hidden">
             
             <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                 <div>
                    <Shield className="text-[#C8B092] mb-6" size={40} />
                    <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-6">
                        Great power brings <br/>
                        <span className="text-[#C8B092]">great responsibility.</span>
                    </h2>
                    <p className="text-white/70 leading-relaxed text-sm md:text-base">
                        VIP Pass gives you instant access. We request you to be respectful to fellow patients. Avoiding last-minute changes minimizes care delay for others who need the slot.
                    </p>
                 </div>
                 
                 <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                    <h4 className="text-xl font-bold mb-4">What's not included?</h4>
                    <p className="text-white/60 text-sm leading-relaxed">
                        Any procedures other than explicitly mentioned in the packages. However, our <strong>Extended Stay Policy</strong> will cover you if you opt for it in case of complications.
                    </p>
                 </div>
             </div>

          </div>
      </section>

      {/* =========================================
          SECTION 5: FOOTER (Custom)
      ========================================= */}
      <footer className="w-full bg-[#1A3C34] text-[#F2F0EA] pt-20 pb-12 rounded-t-[40px] mt-10">
        <div className="max-w-6xl mx-auto px-6 text-center md:text-left">
            <div className="flex flex-col md:flex-row justify-between items-end gap-10">
                <div className="space-y-4">
                    <h3 className="text-xs font-bold tracking-[0.3em] uppercase opacity-50">
                        Medivoyage India
                    </h3>
                    <p className="text-3xl md:text-5xl font-serif">
                        Your health,<br/> our voyage.
                    </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 w-full md:w-auto">
                    <p className="text-sm opacity-70 uppercase tracking-widest mb-2">Concierge Hotline</p>
                    <p className="text-2xl md:text-3xl font-mono font-medium">+91 97996 36757</p>
                </div>
            </div>
            
            <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between text-xs opacity-40">
                <p>&copy; 2024 Medivoyage. All rights reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <span>Privacy Policy</span>
                    <span>Terms of Service</span>
                </div>
            </div>
        </div>
      </footer>
    <Footer />
    <WhatsAppButton />
    </div>
  );
}