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
      text: "Very prompt and professional consultation. The team handled my respiratory treatment with utmost care. The follow-up post treatment was excellent too. Highly recommend Medivoyage!",
      author: "Heena Arora",
      location: "Zambia, Africa",
      treatment: "Respiratory",
      rating: 5,
      image: "lady.jpg"
    },
    {
      id: 2,
      text: "Dr. Maharwal explained everything via video call before I even booked my procedure. My dental appointment & procedure was good and pain free and the nursing staff was incredibly attentive.",
      author: "Suvarcha Kalra",
      location: "Dubai, UAE",
      treatment: "Dentistry",
      rating: 5,
      image: "suvarcha.jpeg"
    },
    // {
    //   id: 3,
    //   text: "World-class infrastructure at a fraction of the cost. I am pain-free and eternally grateful to the entire team for their professionalism and empathy throughout the process.",
    //   author: "Elena Petrova",
    //   location: "Berlin, Germany",
    //   treatment: "Spinal Fusion",
    //   rating: 5,
    //   image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
    // }
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
                <span style={{ color: theme.textLight, fontFamily: fonts.sans }} className="text-[20px] font-bold tracking-[0.2em] uppercase opacity-60">
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