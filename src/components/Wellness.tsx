import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  Sparkles, 
  Clock, 
  IndianRupee 
} from 'lucide-react';

interface WellnessProps {
  onBack: () => void;
}

export default function Wellness({ onBack }: WellnessProps) {
  const [activeTab, setActiveTab] = useState('Curated Packages');

  // --- THEME CONFIGURATION ---
  const theme = {
    bg: '#F2F0EA',
    primary: '#1A3C34',
    secondary: '#C8B092',
    white: '#FFFFFF',
    textLight: '#5A6C66',
    border: '#E2E0D8'
  };

  const fonts = {
    heading: '"Playfair Display", serif',
    body: '"EB Garamond", serif',
    sans: 'ui-sans-serif, system-ui, sans-serif'
  };

  // --- DATA (Cleaned) ---
  const wellnessPrograms = {
    'Curated Packages': [
      {
        title: 'Anant Nidra (Deep Sleep)',
        subtitle: 'Restorative therapy for insomnia and stress.',
        description: 'Includes Meditation, Soothing Calm Facial, Marma Massage with Steam, Shirodhara, and Sound Healing Session.',
        duration: 'Multiple Sessions',
        image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=600&auto=format&fit=crop'
      },
      {
        title: 'Anant Shudi (Ultimate Detox)',
        subtitle: 'Comprehensive program to cleanse toxins.',
        description: 'Includes Seven Chakra Crystal Healing Massage, Salt Therapy, Signature Facial, and Lavender Pedicure.',
        duration: 'Full Day',
        image: 'https://images.unsplash.com/photo-1579126038374-6064e9370f0f?q=80&w=600&auto=format&fit=crop'
      },
      {
        title: 'Anti Cellulite Package',
        subtitle: 'Targeted treatment for smoother skin.',
        description: 'Features Aqua Yoga, Elakizi Massage with wooden rollers, and Steam/Sauna sessions.',
        duration: 'Single Session',
        image: 'https://images.unsplash.com/photo-1712725213051-8d7d6a52edaf?w=900&auto=format&fit=crop'
      }
    ],
    'Ayurvedic Therapy': [
      {
        title: 'Shirodhara',
        subtitle: 'Mental clarity and stress reduction.',
        description: 'Warm oil gently poured onto the forehead to calm the nervous system and induce deep relaxation.',
        duration: '30 Min',
        image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=600&auto=format&fit=crop'
      },
      {
        title: 'Janu Vasti',
        subtitle: 'Knee care and pain relief.',
        description: 'A dam-like structure filled with warm medicated oil is placed on the knee joints to relieve pain.',
        
        duration: '30 Min',
        image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=600&auto=format&fit=crop'
      },
      {
        title: 'Abhyanga',
        subtitle: 'Full-body herbal oil massage.',
        description: 'Improves circulation, detoxifies the body, and promotes balance through traditional techniques.',
        
        duration: '60 Min',
        image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=600&auto=format&fit=crop'
      },
      {
        title: 'Karnapoorana',
        subtitle: 'Ayurvedic ear therapy.',
        description: 'Warm oil therapy to enhance ear health, improve hearing, and relieve tinnitus and vertigo.',
        
        duration: '15 Min',
        image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=600&auto=format&fit=crop'
      }
    ],
    'Holistic Healing': [
      {
        title: 'Sound Healing',
        subtitle: 'Harmonizing body and soul.',
        description: 'Immerse in transformative sound journeys and healing melodies to restore profound balance.',
        
        duration: '45 Min',
        image: 'https://images.unsplash.com/photo-1515023115689-589c33041d3c?q=80&w=600&auto=format&fit=crop'
      },
      {
        title: 'Ice Water Cryotherapy',
        subtitle: 'Circulation and energy boost.',
        description: 'Stimulates circulation and boosts well-being as your body responds to the rejuvenating cold.',
        
        duration: '15 Min',
        image: 'https://images.unsplash.com/photo-1583416750470-965b2707b355?q=80&w=600&auto=format&fit=crop'
      },
      {
        title: 'Salt (Halo) Therapy',
        subtitle: 'Respiratory rejuvenation.',
        description: 'Immerse yourself in the healing properties of salt crystals for deep respiratory renewal.',
        
        duration: '30 Min',
        image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=600&auto=format&fit=crop'
      }
    ],
    'Facials & Skin': [
      {
        title: 'Signature Hydra Facial',
        subtitle: 'Extraction and micro-dermabrasion.',
        description: 'Three-phase treatment: extraction, diamond micro-dermabrasion, and LED serum infusion.',
        
        duration: '90 Min',
        image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=600&auto=format&fit=crop'
      },
      {
        title: 'Chandan Mud Therapy',
        subtitle: 'Naturopathy for the full body.',
        description: 'A harmonious blend of mud enriched with Sandalwood to purify and nourish the skin.',
        
        duration: '60 Min',
        image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=600&auto=format&fit=crop'
      }
    ]
  };

  const currentPrograms = wellnessPrograms[activeTab as keyof typeof wellnessPrograms];

  return (
    <div style={{ backgroundColor: theme.bg }} className="min-h-screen font-sans">
      
      {/* =========================================
          HEADER
      ========================================= */}
      <div className="pt-24 pb-12 px-6 border-b" style={{ borderColor: theme.border }}>
        <div className="max-w-7xl mx-auto">
          
          

          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="h-[1px] w-8" style={{ backgroundColor: theme.primary }}></span>
                <span style={{ color: theme.primary, fontFamily: fonts.sans }} className="text-[10px] font-bold tracking-[0.25em] uppercase opacity-70">
                  Omasra Wellness Centre
                </span>
              </div>
              <h1 style={{ color: theme.primary, fontFamily: fonts.heading }} className="text-4xl md:text-5xl font-medium">
                Holistic <span style={{ color: theme.secondary, fontStyle: 'italic' }}>Therapies</span>
              </h1>
            </div>
          </div>

          {/* Custom Tabs */}
          <div className="flex overflow-x-auto gap-8 mt-12 pb-2 scrollbar-hide">
            {Object.keys(wellnessPrograms).map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className="relative pb-3 flex-shrink-0 transition-all duration-300"
              >
                <span 
                  style={{ 
                    color: activeTab === category ? theme.primary : theme.textLight, 
                    fontFamily: fonts.sans,
                    opacity: activeTab === category ? 1 : 0.6
                  }} 
                  className="text-xs font-bold uppercase tracking-widest"
                >
                  {category}
                </span>
                {activeTab === category && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 w-full h-[2px]"
                    style={{ backgroundColor: theme.secondary }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* =========================================
          CONTENT GRID
      ========================================= */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div 
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {currentPrograms.map((program, index) => (
            <div
              key={index}
              className="group bg-white border flex flex-col overflow-hidden hover:shadow-xl transition-all duration-500"
              style={{ borderColor: theme.border, borderRadius: '12px' }} 
            >
              {/* Image Section */}
              <div className="h-56 overflow-hidden relative border-b" style={{ borderColor: theme.border }}>
                <div className="absolute inset-0 bg-[#1A3C34]/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-700 ease-in-out"
                />
                
                {/* Floating Price Badge */}
                <div className="absolute top-4 right-4 z-20">
                   <div className="bg-white/95 backdrop-blur-md px-3 py-1.5 border border-gray-100 shadow-sm rounded flex items-center gap-1">
                      <IndianRupee size={12} color={theme.primary} />
                      <span style={{ color: theme.primary, fontFamily: fonts.sans }} className="text-xs font-bold">
                        {program.price}
                      </span>
                   </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-3">
                   <Clock size={12} color={theme.secondary} />
                   <span style={{ color: theme.textLight, fontFamily: fonts.sans }} className="text-[10px] font-bold uppercase tracking-widest">
                     {program.duration}
                   </span>
                </div>

                <h3 style={{ color: theme.primary, fontFamily: fonts.heading }} className="text-2xl font-medium mb-2">
                  {program.title}
                </h3>
                
                <p style={{ color: theme.textLight, fontFamily: fonts.body }} className="text-lg italic mb-4 opacity-80">
                  {program.subtitle}
                </p>

                <div className="w-8 h-[1px] mb-4" style={{ backgroundColor: theme.secondary }}></div>

                <p style={{ color: theme.primary, fontFamily: fonts.body }} className="text-base leading-relaxed mb-6">
                  {program.description}
                </p>

                <button 
                  className="mt-auto w-full py-3 border border-[#1A3C34] text-[10px] font-bold uppercase tracking-widest hover:bg-[#1A3C34] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 rounded"
                  style={{ color: theme.primary }}
                >
                  Book Session <Sparkles size={12} />
                </button>
              </div>
            </div>
          ))}
        </motion.div>

        {/* =========================================
            BOTTOM CTA
        ========================================= */}
        <div className="mt-20 bg-[#1A3C34] rounded-2xl p-10 md:p-16 text-center relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-[#C8B092] opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#C8B092] opacity-10 rounded-full blur-3xl"></div>

          <div className="relative z-10 max-w-2xl mx-auto">
             <h3 style={{ color: theme.white, fontFamily: fonts.heading }} className="text-3xl md:text-4xl font-medium mb-6">
               Not sure which therapy fits you?
             </h3>
             <p style={{ color: '#E2E0D8', fontFamily: fonts.body }} className="text-xl opacity-80 mb-8">
               Our wellness consultants can create a personalized package based on your body type (Dosha) and health goals.
             </p>
             
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  style={{ backgroundColor: theme.secondary, color: theme.primary }}
                  className="px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300 rounded"
                >
                  Consult an Expert
                </button>
                <button
                  onClick={() => window.dispatchEvent(new CustomEvent('showContact'))}
                  className="px-8 py-4 border text-xs font-bold uppercase tracking-widest hover:bg-[#1A3C34] hover:border-[#C8B092] hover:text-[#C8B092] transition-colors duration-300 rounded"
                  style={{ borderColor: theme.white, color: theme.white }}
                >
                  Contact Support
                </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}