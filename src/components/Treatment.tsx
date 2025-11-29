import React, { useState } from 'react';
import {
  ArrowLeft,
  Heart,
  Brain,
  Ear,
  Stethoscope,
  Microscope,
  Activity,
  Users,
  Baby,
  ArrowRight,
  Plus,
  Search,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Treatment() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Theme Palette
  const theme = {
    bg: '#F2F0EA',          // Alabaster
    primary: '#1A3C34',     // Deep Cypress Green
    secondary: '#C8B092',   // Gold
    white: '#FFFFFF',
    border: '#E2E0D8',
    textLight: '#5A6C66'
  };

  // Categories
  const medicalTreatments = [
    { key: "cardiac", icon: Heart, title: "Cardiac Sciences" },
    { key: "orthopaedics", icon: Activity, title: "Orthopaedics" },
    { key: "neuro", icon: Brain, title: "Neuro Sciences" },
    { key: "general", icon: Stethoscope, title: "General Surgery" },
    { key: "ent", icon: Ear, title: "ENT" },
    { key: "gynae", icon: Baby, title: "Gynaecology" },
    { key: "urology", icon: Microscope, title: "Urology" },
    { key: "gastro", icon: Users, title: "Gastroenterology" },
    { key: "others", icon: Plus, title: "Specialized Care" }, 
  ];

  // Subcategories Data
  const subcategories: Record<string, { title: string; description: string; price: number; recovery?: string }[]> = {
    cardiac: [
      { title: "Angiography", description: "Diagnostic imaging for vascular health.", price: 375, recovery: "1 Day" },
      { title: "Angioplasty", description: "Minimally invasive vessel restoration.", price: 1450, recovery: "2-3 Days" },
      { title: "Arterial Switch", description: "Complex congenital correction surgery.", price: 6000, recovery: "2 Weeks" },
      { title: "ASD Closure", description: "Septal defect repair procedure.", price: 4000, recovery: "4-5 Days" },
      { title: "CABG Bypass", description: "Coronary artery bypass grafting.", price: 3625, recovery: "1-2 Weeks" },
      { title: "Pacemaker", description: "Cardiac rhythm management implant.", price: 3625, recovery: "1-2 Days" },
    ],
    // ... (Keep other categories the same, adding recovery data adds value)
    orthopaedics: [
       { title: "ACL Reconstruction", description: "Ligament repair via arthroscopy.", price: 2300, recovery: "4-6 Months" },
       { title: "Hip Replacement", description: "Total prosthetic joint replacement.", price: 2625, recovery: "3-6 Weeks" },
    ],
    // Add dummy data for logic to work on other tabs
    neuro: [{ title: "Craniotomy", description: "Surgical access procedure.", price: 2880, recovery: "4-8 Weeks" }],
    general: [{ title: "Appendectomy", description: "Laparoscopic removal.", price: 1450, recovery: "1-2 Weeks" }],
    ent: [{ title: "Septoplasty", description: "Nasal septum correction.", price: 440, recovery: "1 Week" }],
    gynae: [{ title: "Hysterectomy", description: "Laparoscopic removal.", price: 1725, recovery: "2-4 Weeks" }],
    urology: [{ title: "Lithotripsy", description: "Kidney stone fragmentation.", price: 1725, recovery: "1-2 Days" }],
    gastro: [{ title: "Endoscopy", description: "Upper GI visual examination.", price: 60, recovery: "Same Day" }],
    others: [{ title: "IVF / IUI", description: "Assisted reproductive technology.", price: 2500, recovery: "Varies" }],
  };

  const currentCategoryTitle = medicalTreatments.find((c) => c.key === selectedCategory)?.title;

  // Search Logic
  const filteredCategories = medicalTreatments.filter(t => 
    t.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ backgroundColor: theme.bg }} className="min-h-screen pt-24 pb-20 font-sans selection:bg-[#1A3C34] selection:text-[#F2F0EA]">
      
      {/* === HERO SECTION (New) === */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 mb-16">
        <div className="bg-[#1A3C34] rounded-[2rem] p-10 md:p-16 relative overflow-hidden text-white shadow-2xl">
           {/* Abstract BG Shapes */}
           <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#C8B092] opacity-10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3"></div>
           
           <div className="relative z-10 max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                 <Sparkles className="text-[#C8B092] w-5 h-5" />
                 <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#C8B092]">Clinical Excellence</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6">
                 World-class treatments. <br/>
                 <span className="italic text-[#C8B092]">Transparent pricing.</span>
              </h1>
              
              {/* Search Bar */}
              <div className="relative max-w-md">
                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                 <input 
                    type="text" 
                    placeholder="Search treatments (e.g. Cardiac, Knee...)" 
                    className="w-full pl-12 pr-6 py-4 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white placeholder:text-white/50 focus:outline-none focus:bg-white/20 transition-all"
                    value={searchQuery}
                    onChange={(e) => {
                       setSearchQuery(e.target.value);
                       setSelectedCategory(null); // Reset detail view on search
                    }}
                 />
              </div>
           </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        
        <AnimatePresence mode='wait'>
        {!selectedCategory ? (
          /* === CATEGORY GRID === */
          <motion.div 
            key="grid"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredCategories.map((treatment) => {
              const Icon = treatment.icon;
              return (
                <div
                  key={treatment.key}
                  onClick={() => setSelectedCategory(treatment.key)}
                  className="group bg-white border p-8 cursor-pointer transition-all duration-500 hover:shadow-xl hover:shadow-[#1A3C34]/5 flex items-start justify-between relative overflow-hidden rounded-xl"
                  style={{ borderColor: theme.border }}
                >
                  <div className="relative z-10">
                      <div className="w-12 h-12 flex items-center justify-center mb-6 rounded-full bg-[#F2F0EA] transition-colors duration-500 text-[#1A3C34] group-hover:bg-[#1A3C34] group-hover:text-[#C8B092]">
                        <Icon strokeWidth={1.5} className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-serif font-bold text-[#1A3C34]">
                        {treatment.title}
                      </h3>
                      <p className="text-xs font-bold uppercase tracking-widest mt-4 opacity-50 text-[#1A3C34] group-hover:opacity-80 flex items-center gap-2">
                        Explore <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                      </p>
                  </div>
                  
                  {/* Decorative Circle */}
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#C8B092]/10 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                </div>
              );
            })}
          </motion.div>

        ) : (
          
          /* === SUBCATEGORY LIST (Detail View) === */
          <motion.div
            key="list"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between mb-8">
                <button
                onClick={() => setSelectedCategory(null)}
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:translate-x-[-5px] transition-transform"
                style={{ color: theme.primary }}
                >
                <ArrowLeft className="h-4 w-4" />
                Back to Categories
                </button>
                <h2 style={{ color: theme.primary }} className="text-2xl font-serif font-bold hidden md:block">
                   {currentCategoryTitle}
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {subcategories[selectedCategory] && subcategories[selectedCategory].map((sub, i) => (
                <div
                  key={i}
                  className="bg-white p-8 group hover:shadow-lg transition-all border rounded-xl relative overflow-hidden"
                  style={{ borderColor: theme.border }}
                >
                  <div className="flex justify-between items-start mb-4">
                     <h4 style={{ color: theme.primary }} className="text-xl font-serif font-bold">
                        {sub.title}
                     </h4>
                  </div>
                  
                  <p style={{ color: theme.textLight }} className="text-sm leading-relaxed mb-6">
                    {sub.description}
                  </p>

                  {/* Recovery Time Badge (New) */}
                  {sub.recovery && (
                     <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F2F0EA] mb-6">
                        <Activity size={12} color={theme.primary} />
                        <span className="text-[10px] font-bold uppercase tracking-wide" style={{ color: theme.primary }}>
                           Recovery: {sub.recovery}
                        </span>
                     </div>
                  )}
                  
                  <div className="pt-6 border-t border-dashed border-gray-200 flex items-end justify-between">
                    <div>
                        <p className="text-[10px] uppercase tracking-widest opacity-50" style={{ color: theme.primary }}>Estimated Cost</p>
                        <p style={{ color: theme.secondary }} className="text-2xl font-serif font-bold italic">
                            ${sub.price.toLocaleString()}
                        </p>
                    </div>
                    <button className="px-4 py-2 text-[10px] font-bold uppercase tracking-widest bg-[#1A3C34] text-white rounded hover:bg-[#C8B092] hover:text-[#1A3C34] transition-colors">
                        Book
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
        </AnimatePresence>

      </div>
    </div>
  );
}