import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Leaf,
  Clock, 
  X,
  CheckCircle,
  Phone,
  User,
  MessageSquare,
  Calendar,
  Loader2 // ✅ Added Loader Icon
} from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from '../components/WhatsAppButton';

// 🔴 TODO: REPLACE THIS WITH YOUR DEPLOYED GOOGLE SCRIPT WEB APP URL
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbygVKMboL03fpLVzKvxismJVg0bq47sT8HBtqclVaWpcDESusO2EH71TZuhHKwAuDadGA/exec";

interface WellnessProps {
  onBack: () => void;
}

export default function Wellness({ onBack }: WellnessProps) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Curated Packages');
  
  // --- STATE: CONSULTATION MODAL ---
  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);
  const [consultSuccess, setConsultSuccess] = useState(false);
  const [isConsultSubmitting, setIsConsultSubmitting] = useState(false); // ✅ New Loading State
  const [consultForm, setConsultForm] = useState({ name: '', phone: '', concern: '' });

  // --- STATE: BOOKING MODAL ---
  const [selectedTherapy, setSelectedTherapy] = useState<string | null>(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [isBookingSubmitting, setIsBookingSubmitting] = useState(false); // ✅ New Loading State
  const [bookingForm, setBookingForm] = useState({ name: '', phone: '', date: '', time: '' });

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

  // --- HANDLER: CONSULTATION SUBMIT ---
  const handleConsultSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsConsultSubmitting(true); // ✅ Start Loading Immediately

    const formData = new FormData();
    formData.append('name', consultForm.name);
    formData.append('phone', consultForm.phone);
    formData.append('concern', consultForm.concern);
    formData.append('therapy', 'General Consultation Request'); 
    formData.append('date', 'N/A');
    formData.append('time', 'N/A');

    fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      body: formData,
      mode: "no-cors"
    })
    .then(() => {
        setIsConsultSubmitting(false); // ✅ Stop Loading
        setConsultSuccess(true);
        setTimeout(() => {
            setIsConsultModalOpen(false);
            setTimeout(() => {
              setConsultSuccess(false);
              setConsultForm({ name: '', phone: '', concern: '' });
            }, 300);
        }, 3000);
    })
    .catch((error) => {
        setIsConsultSubmitting(false); // ✅ Stop Loading on Error
        console.error("Error submitting form", error);
        alert("There was an error submitting your request. Please try again.");
    });
  };

  // --- HANDLER: BOOKING SUBMIT ---
  const handleOpenBooking = (therapyName: string) => {
    setSelectedTherapy(therapyName);
  };

  const handleCloseBooking = () => {
    setSelectedTherapy(null);
    setTimeout(() => {
      setBookingSuccess(false);
      setBookingForm({ name: '', phone: '', date: '', time: '' });
    }, 300);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBookingSubmitting(true); // ✅ Start Loading Immediately
    
    const formData = new FormData();
    formData.append('name', bookingForm.name);
    formData.append('phone', bookingForm.phone);
    formData.append('date', bookingForm.date);
    formData.append('time', bookingForm.time);
    formData.append('therapy', selectedTherapy || 'Unknown Therapy');
    formData.append('concern', 'Booking Request');

    fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: formData,
        mode: "no-cors"
      })
      .then(() => {
          setIsBookingSubmitting(false); // ✅ Stop Loading
          setBookingSuccess(true);
          setTimeout(() => {
              handleCloseBooking();
          }, 3000);
      })
      .catch((error) => {
          setIsBookingSubmitting(false); // ✅ Stop Loading on Error
          console.error("Error submitting form", error);
          alert("There was an error submitting your booking. Please try again.");
      });
  };

  // --- DATA ---
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
    <div style={{ backgroundColor: theme.bg }} className="min-h-screen font-sans relative">
      <Header />
      
      {/* =========================================
          HEADER
      ========================================= */}
      <div className="pt-24 pb-12 px-6 border-b" style={{ borderColor: theme.border }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <button onClick={onBack} className="text-[#1A3C34] hover:opacity-70 flex items-center gap-2 mb-2">
                    <ArrowLeft size={16} /> <span className="text-xs font-bold uppercase tracking-wider">Back</span>
                </button>
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

                {/* ✅ BOOKING BUTTON */}
                <button 
                  onClick={() => handleOpenBooking(program.title)}
                  className="mt-auto w-full py-3 border border-[#1A3C34] text-[10px] font-bold uppercase tracking-widest hover:bg-[#1A3C34] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 rounded"
                  style={{ color: theme.primary }}
                >
                  Book Session <Leaf size={12} />
                </button>
              </div>
            </div>
          ))}
        </motion.div>

        {/* =========================================
            BOTTOM CTA
        ========================================= */}
        <div className="mt-20 bg-[#1A3C34] rounded-2xl p-10 md:p-16 text-center relative overflow-hidden">
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
                  onClick={() => setIsConsultModalOpen(true)}
                  style={{ backgroundColor: theme.secondary, color: theme.primary }}
                  className="px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300 rounded"
                >
                  Consult an Expert
                </button>
             </div>
          </div>
        </div>
      </div>
      
      <Footer />

      {/* =========================================
          CONSULTATION MODAL (GENERAL)
      ========================================= */}
      <AnimatePresence>
        {isConsultModalOpen && (
          <motion.div 
            key="consult-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsConsultModalOpen(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div 
              key="consult-content"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-white rounded-2xl w-full max-w-md shadow-2xl relative overflow-hidden"
            >
              <div className="h-2 w-full" style={{ background: `linear-gradient(to right, ${theme.primary}, ${theme.secondary})` }}></div>
              <button onClick={() => setIsConsultModalOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10">
                <X size={20} />
              </button>

              <div className="p-8">
                {consultSuccess ? (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-8">
                    <div className="mx-auto w-16 h-16 bg-[#1A3C34]/10 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle className="text-[#1A3C34] w-10 h-10" />
                    </div>
                    <h3 style={{ fontFamily: fonts.heading }} className="text-2xl text-[#1A3C34] mb-2">Request Sent</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">Our wellness expert will review your profile and contact you shortly.</p>
                  </motion.div>
                ) : (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <div className="text-center mb-8">
                        <h3 style={{ fontFamily: fonts.heading, color: theme.primary }} className="text-2xl font-medium mb-2">Wellness Consultation</h3>
                        <p style={{ fontFamily: fonts.body }} className="text-gray-600 text-lg italic">Let us curate a plan for your Dosha.</p>
                    </div>
                    <form onSubmit={handleConsultSubmit} className="space-y-4">
                        <div className="relative">
                            <User className="absolute left-3 top-3 text-gray-400" size={16} />
                            <input required type="text" placeholder="Your Name" value={consultForm.name} onChange={(e) => setConsultForm({...consultForm, name: e.target.value})} className="w-full pl-10 pr-4 py-3 bg-[#F2F0EA] border border-[#E2E0D8] rounded-lg text-sm text-[#1A3C34] focus:outline-none focus:border-[#C8B092]" />
                        </div>
                        <div className="relative">
                            <Phone className="absolute left-3 top-3 text-gray-400" size={16} />
                            <input required type="tel" placeholder="Phone Number" value={consultForm.phone} onChange={(e) => setConsultForm({...consultForm, phone: e.target.value})} className="w-full pl-10 pr-4 py-3 bg-[#F2F0EA] border border-[#E2E0D8] rounded-lg text-sm text-[#1A3C34] focus:outline-none focus:border-[#C8B092]" />
                        </div>
                        <div className="relative">
                            <MessageSquare className="absolute left-3 top-3 text-gray-400" size={16} />
                            <textarea placeholder="Specific concerns? (e.g. Back pain)" value={consultForm.concern} onChange={(e) => setConsultForm({...consultForm, concern: e.target.value})} className="w-full pl-10 pr-4 py-3 bg-[#F2F0EA] border border-[#E2E0D8] rounded-lg text-sm text-[#1A3C34] focus:outline-none focus:border-[#C8B092] h-24 resize-none" />
                        </div>
                        
                        {/* ✅ Button with Loading State */}
                        <button 
                            type="submit" 
                            disabled={isConsultSubmitting}
                            className="w-full py-3 mt-2 text-white text-xs font-bold uppercase tracking-widest rounded-lg shadow-lg hover:opacity-90 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2" 
                            style={{ backgroundColor: theme.primary }}
                        >
                            {isConsultSubmitting ? (
                                <>Sending... <Loader2 className="animate-spin" size={14} /></>
                            ) : (
                                "Request Call"
                            )}
                        </button>
                    </form>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================
          BOOKING MODAL (SPECIFIC THERAPY)
      ========================================= */}
      <AnimatePresence>
        {selectedTherapy && (
          <motion.div 
            key="booking-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseBooking}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div 
              key="booking-content"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-white rounded-2xl w-full max-w-md shadow-2xl relative overflow-hidden"
            >
              <div className="h-2 w-full" style={{ background: `linear-gradient(to right, ${theme.primary}, ${theme.secondary})` }}></div>
              <button onClick={handleCloseBooking} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10">
                <X size={20} />
              </button>

              <div className="p-8">
                {bookingSuccess ? (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-8">
                    <div className="mx-auto w-16 h-16 bg-[#1A3C34]/10 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle className="text-[#1A3C34] w-10 h-10" />
                    </div>
                    <h3 style={{ fontFamily: fonts.heading }} className="text-2xl text-[#1A3C34] mb-2">Booking Confirmed</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">We have received your request for <strong>{selectedTherapy}</strong>. Our team will contact you shortly to confirm the slot.</p>
                  </motion.div>
                ) : (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <div className="text-center mb-8">
                        <h3 style={{ fontFamily: fonts.heading, color: theme.primary }} className="text-2xl font-medium mb-2">Book Session</h3>
                        <p style={{ fontFamily: fonts.body }} className="text-gray-600 text-lg italic text-[#C8B092]">{selectedTherapy}</p>
                    </div>

                    <form onSubmit={handleBookingSubmit} className="space-y-4">
                        <div className="relative">
                            <User className="absolute left-3 top-3 text-gray-400" size={16} />
                            <input required type="text" placeholder="Your Name" value={bookingForm.name} onChange={(e) => setBookingForm({...bookingForm, name: e.target.value})} className="w-full pl-10 pr-4 py-3 bg-[#F2F0EA] border border-[#E2E0D8] rounded-lg text-sm text-[#1A3C34] focus:outline-none focus:border-[#C8B092]" />
                        </div>
                        <div className="relative">
                            <Phone className="absolute left-3 top-3 text-gray-400" size={16} />
                            <input required type="tel" placeholder="Phone Number" value={bookingForm.phone} onChange={(e) => setBookingForm({...bookingForm, phone: e.target.value})} className="w-full pl-10 pr-4 py-3 bg-[#F2F0EA] border border-[#E2E0D8] rounded-lg text-sm text-[#1A3C34] focus:outline-none focus:border-[#C8B092]" />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                            <div className="relative">
                                <Calendar className="absolute left-3 top-3 text-gray-400" size={16} />
                                <input required type="date" value={bookingForm.date} onChange={(e) => setBookingForm({...bookingForm, date: e.target.value})} className="w-full pl-10 pr-4 py-3 bg-[#F2F0EA] border border-[#E2E0D8] rounded-lg text-sm text-[#1A3C34] focus:outline-none focus:border-[#C8B092]" />
                            </div>
                            <div className="relative">
                                <Clock className="absolute left-3 top-3 text-gray-400" size={16} />
                                <input required type="time" value={bookingForm.time} onChange={(e) => setBookingForm({...bookingForm, time: e.target.value})} className="w-full pl-10 pr-4 py-3 bg-[#F2F0EA] border border-[#E2E0D8] rounded-lg text-sm text-[#1A3C34] focus:outline-none focus:border-[#C8B092]" />
                            </div>
                        </div>

                        {/* ✅ Button with Loading State */}
                        <button 
                            type="submit" 
                            disabled={isBookingSubmitting}
                            className="w-full py-3 mt-4 text-white text-xs font-bold uppercase tracking-widest rounded-lg shadow-lg hover:opacity-90 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2" 
                            style={{ backgroundColor: theme.primary }}
                        >
                            {isBookingSubmitting ? (
                                <>Sending... <Loader2 className="animate-spin" size={14} /></>
                            ) : (
                                "Confirm Booking"
                            )}
                        </button>
                    </form>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
        <WhatsAppButton />
    </div>
  );
}