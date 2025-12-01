import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Quote, 
  Star, 
  ArrowRight, 
  ArrowLeft, 
  Check,
  ChevronDown,
  MapPin,
  Clock,
  Shield
} from 'lucide-react';

export default function TestimonialsAndForm() {
  
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

  // --- TESTIMONIALS DATA ---
  const testimonials = [
    {
      id: 1,
      text: "The level of care was beyond anything I've experienced. The team handled my visa and surgery scheduling effortlessly. It felt less like a medical trip and more like a guided recovery journey.",
      author: "Sarah Jenkins",
      location: "London, UK",
      treatment: "Dental Implants",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
    },
    {
      id: 2,
      text: "Dr. Verma explained everything via video call before I even booked. The hospital recovery suite felt more like a 5-star hotel than a clinic, and the nursing staff was incredibly attentive.",
      author: "Michael Ross",
      location: "New York, USA",
      treatment: "Knee Replacement",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
    },
    {
      id: 3,
      text: "World-class infrastructure at a fraction of the cost. I am pain-free and eternally grateful to the entire team for their professionalism and empathy throughout the process.",
      author: "Elena Petrova",
      location: "Berlin, Germany",
      treatment: "Spinal Fusion",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="font-sans">
      
      {/* =========================================
          PART 1: LEAD CAPTURE FORM (FULL IMAGE BACKGROUND)
      ========================================= */}
      <section className="relative min-h-[650px] flex items-center py-20 px-6 overflow-hidden">
        
        {/* 1. Full Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=900&auto=format&fit=crop" 
            alt="Luxury Recovery" 
            className="w-full h-full object-cover"
          />
          {/* Dark Green Overlay for Text Contrast */}
          <div className="absolute inset-0 bg-[#1A3C34]/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* 2. Content Container (Grid Layout) */}
        <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT COLUMN: Text Content */}
          <div className="text-white space-y-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 
                style={{ fontFamily: fonts.heading }} 
                className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] mb-6"
              >
                Ready to open the door <br />
                <span style={{ color: theme.secondary, fontStyle: 'italic' }}>to better health?</span>
              </h2>
              <p className="text-lg md:text-xl opacity-90 leading-relaxed font-light max-w-xl mx-auto lg:mx-0">
                Take advantage of our New Year Offer - £500 off! <br/>
                Our team is here to answer your questions, understand your goals, and guide you toward the care that's right for you.
              </p>
              
              {/* Trust Features */}
              <div className="hidden lg:flex gap-8 pt-8 opacity-80 justify-center lg:justify-start">
                 <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded-full border border-white/30"><Clock size={16}/></div>
                    <span className="text-xs font-bold uppercase tracking-widest">24h Response</span>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded-full border border-white/30"><Shield size={16}/></div>
                    <span className="text-xs font-bold uppercase tracking-widest">HIPAA Compliant</span>
                 </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: The Form Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-md mx-auto lg:ml-auto bg-[#F2F0EA] p-8 md:p-10 shadow-2xl rounded-sm"
            style={{ color: theme.primary }}
          >
            <form className="space-y-5">
              
              {/* Full Name */}
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-widest opacity-60">Full Name *</label>
                <input 
                  type="text" 
                  placeholder="Your name" 
                  className="w-full bg-transparent border-b border-gray-300 py-2 text-sm outline-none focus:border-[#1A3C34] transition-colors placeholder:text-gray-400"
                />
              </div>

              {/* Mobile Number */}
              <div className="space-y-1">
                 <label className="text-[10px] font-bold uppercase tracking-widest opacity-60">Phone Number *</label>
                 <div className="flex items-end gap-3">
                    <div className="flex items-center gap-1 border-b border-gray-300 py-2 min-w-[60px]">
                       <span className="text-lg">🇬🇧</span>
                       <span className="text-sm font-medium">+44</span>
                       <ChevronDown size={12} className="opacity-50" />
                    </div>
                    <input 
                      type="tel" 
                      placeholder="Mobile number" 
                      className="w-full bg-transparent border-b border-gray-300 py-2 text-sm outline-none focus:border-[#1A3C34] transition-colors placeholder:text-gray-400"
                    />
                 </div>
              </div>

              {/* Email Address */}
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-widest opacity-60">Email Address *</label>
                <input 
                  type="email" 
                  placeholder="E-mail address" 
                  className="w-full bg-transparent border-b border-gray-300 py-2 text-sm outline-none focus:border-[#1A3C34] transition-colors placeholder:text-gray-400"
                />
              </div>

              {/* Promo Code */}
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-widest opacity-60">Promo Code</label>
                <input 
                  type="text" 
                  placeholder="Promo Code (if any)" 
                  className="w-full bg-transparent border-b border-gray-300 py-2 text-sm outline-none focus:border-[#1A3C34] transition-colors placeholder:text-gray-400"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button 
                  type="button"
                  className="w-full py-4 text-xs font-bold uppercase tracking-widest text-white hover:opacity-90 transition-opacity rounded bg-[#9CA3AF]"
                  style={{ backgroundColor: '#888888' }} 
                >
                  Book a Free Consultation
                </button>
              </div>

              {/* Footer Text */}
              <div className="flex items-start gap-2 opacity-60 pt-1">
                 <div className="mt-0.5"><Check size={14} color={theme.primary} /></div>
                 <p className="text-[10px] leading-tight">
                   Your details are secure. Our team will contact you shortly.
                 </p>
              </div>

            </form>
          </motion.div>

        </div>
      </section>

     
      
      {/* =========================================
          PART 2: TESTIMONIALS (WIDE SLIDER)
      ========================================= */}
      <section 
        style={{ backgroundColor: theme.bg }} 
        className="py-20 border-t"
        css={{ borderColor: theme.border }}
      >
        <div className="max-w-[1400px] mx-auto px-6">
            
            {/* Section Label */}
            <div className="text-center mb-8">
                <span style={{ color: theme.textLight, fontFamily: fonts.sans }} className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-60">
                Patient Stories
                </span>
            </div>

            {/* TESTIMONIAL BOX */}
            <div 
                className="relative bg-white border shadow-sm p-6 md:p-10 flex flex-col justify-center overflow-hidden rounded-xl" 
                style={{ borderColor: theme.border }}
            >
                <div className="absolute top-6 right-6 opacity-[0.03] pointer-events-none" style={{ color: theme.primary }}>
                    <Quote size={120} strokeWidth={1} />
                </div>

                <AnimatePresence mode='wait'>
                    <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="relative z-10"
                    >
                    <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto">
                        
                        {/* Thumbnail Image (Small) */}
                        <div className="flex-shrink-0 relative">
                            <div className="w-24 h-24 md:w-28 md:h-28 border-2 p-1 bg-white rotate-3 shadow-md rounded-md" style={{ borderColor: theme.border }}>
                                <img 
                                src={testimonials[currentIndex].image} 
                                alt={testimonials[currentIndex].author} 
                                className="w-full h-full object-cover grayscale-[20%] rounded-sm"
                                />
                            </div>
                        </div>
                        
                        <div className="flex-1 text-center md:text-left">
                            {/* Stars */}
                            <div className="flex justify-center md:justify-start gap-1.5 mb-3">
                                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                    <Star key={i} size={14} fill={theme.secondary} stroke="none" />
                                ))}
                            </div>
                            
                            {/* Text */}
                            <p style={{ color: theme.primary, fontFamily: fonts.body }} className="text-xl md:text-3xl italic leading-relaxed mb-4 font-light max-w-4xl">
                                "{testimonials[currentIndex].text}"
                            </p>
                            
                            {/* Author Meta */}
                            <div className="border-t pt-3 inline-block md:block w-full" style={{ borderColor: theme.border }}>
                                <h4 style={{ color: theme.primary, fontFamily: fonts.heading }} className="text-lg font-medium">
                                {testimonials[currentIndex].author}
                                </h4>
                                <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 text-xs uppercase tracking-wider opacity-70 mt-1" style={{ color: theme.textLight }}>
                                    <div className="flex items-center gap-1">
                                        <MapPin size={10} />
                                        <span>{testimonials[currentIndex].location}</span>
                                    </div>
                                    <span className="text-gray-300 mx-1">|</span>
                                    <span style={{ color: theme.secondary, fontWeight: 'bold' }}>{testimonials[currentIndex].treatment}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Buttons */}
                <div className="hidden md:flex absolute bottom-6 right-6 gap-2">
                    <button 
                    onClick={prevSlide} 
                    className="w-10 h-10 flex items-center justify-center border hover:bg-[#1A3C34] hover:text-white transition-colors group rounded-full" 
                    style={{ borderColor: theme.border, color: theme.primary }}
                    >
                    <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
                    </button>
                    <button 
                    onClick={nextSlide} 
                    className="w-10 h-10 flex items-center justify-center border hover:bg-[#1A3C34] hover:text-white transition-colors group rounded-full" 
                    style={{ borderColor: theme.border, color: theme.primary }}
                    >
                    <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                    </button>
                </div>
            </div>
        </div>
      </section>

    </div>
  );
}