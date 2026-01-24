import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

// DEFINE THE 4-STEP JOURNEY WITH IMAGE PATHS
const steps = [
  {
    imageSrc: './one.jpg',
    altText: 'Doctor and patient consultation illustration',
    title: 'Inquiry & Consultation',
    description: 'Share needs, get matched with specialists, and have a video consultation to finalize the plan.',
  },
  {
    imageSrc: 'two.jpg',
    altText: 'Travel and logistics illustration',
    title: 'Travel & Arrival',
    description: 'We handle visas, flights, and hotels. Enjoy VIP airport pickup and transport upon arrival.',
  },
  {
    imageSrc: 'three.jpg',
    altText: 'Medical treatment illustration',
    title: 'World-Class Treatment',
    description: 'Surgery in JCI-accredited hospitals with full on-ground language and logistical support.',
  },
  {
    imageSrc: 'four.jpg',
    altText: 'Recovery and return home illustration',
    title: 'Recovery & Return',
    description: 'Post-op care monitoring, fit-to-fly certification, and safe coordination for your return home.',
  }
];

export function PatientJourney() {
  const [currentStep, setCurrentStep] = useState(0);

  const colors = {
    emerald: '#0F2622',
    gold: '#D4C5A9',
    alabaster: '#F2F0EA'
  };

  // HANDLERS FOR MOBILE NAVIGATION
  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  return (
    <section className="py-16" style={{ backgroundColor: colors.alabaster }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-2 block">
            The Process
          </span>
          <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4" style={{ color: colors.emerald }}>
            Your Journey to <span className="italic" style={{ color: colors.gold }}>Better Health</span>
          </h2>
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            A simplified, four-step path towards your medical recovery.
          </p>
        </div>

        {/* ================= DESKTOP VIEW (Grid) ================= */}
        {/* Hidden on mobile/tablet, visible on large screens */}
        <div className="hidden lg:grid grid-cols-4 gap-8 mb-16 relative">
          {steps.map((step, index) => {
            const showArrow = index !== steps.length - 1; 
            return (
              <div key={index} className="relative group flex flex-col h-full">
                <StepCard step={step} index={index} colors={colors} />
                
                {/* Connector Arrow */}
                {showArrow && (
                  <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 z-0 text-[#D4C5A9]/50">
                    <ArrowRight size={24} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ================= MOBILE/TABLET VIEW (Slider) ================= */}
        {/* Visible on mobile/tablet, hidden on large screens */}
        <div className="lg:hidden mb-16 relative px-2">
          
          {/* Active Card with Fade Effect Key */}
          <div key={currentStep} className="animate-fade-in transition-all duration-300">
             <StepCard step={steps[currentStep]} index={currentStep} colors={colors} />
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button 
              onClick={prevStep}
              className="p-3 rounded-full bg-white shadow-md hover:bg-[#0F2622] hover:text-[#D4C5A9] transition-colors border border-gray-100"
              aria-label="Previous step"
            >
              <ChevronLeft size={24} />
            </button>

            <span className="text-sm font-bold tracking-widest" style={{ color: colors.emerald }}>
              {currentStep + 1} / {steps.length}
            </span>

            <button 
              onClick={nextStep}
              className="p-3 rounded-full bg-white shadow-md hover:bg-[#0F2622] hover:text-[#D4C5A9] transition-colors border border-gray-100"
              aria-label="Next step"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* COMPACT TIMELINE BOX */}
        <div 
          className="w-full py-8 px-6 text-center shadow-lg rounded-none flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12"
          style={{ backgroundColor: colors.emerald }}
        >
          <div className="text-center md:text-right">
             <h3 className="text-lg font-serif font-bold text-white">
                Estimated Timeline
              </h3>
          </div>

          <div className="hidden md:block w-px h-8 bg-[#D4C5A9]/30"></div>

          <div className="text-center md:text-left">
             <span className="text-2xl font-serif font-bold text-[#D4C5A9]">
                2-4 Weeks <span className="text-xs text-gray-400 font-sans font-normal ml-2">(Depends on procedure)</span>
              </span>
          </div>
        </div>

      </div>
    </section>
  );
}

// Helper Component for the Card to avoid code duplication
function StepCard({ step, index, colors }) {
  return (
    <div className="bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300 border-b-4 border-transparent hover:border-[#D4C5A9] flex-1 flex flex-col items-center text-center z-10 h-full">
      {/* Step Number */}
      <div className="text-xs font-bold text-[#D4C5A9] mb-6 tracking-widest uppercase">
        Step 0{index + 1}
      </div>

      {/* ILLUSTRATION CONTAINER */}
      <div className="w-full aspect-[4/3] mb-6 overflow-hidden">
        <img 
          src={step.imageSrc} 
          alt={step.altText}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <h3 className="text-xl font-serif font-bold mb-3" style={{ color: colors.emerald }}>
        {step.title}
      </h3>

      <p className="text-gray-500 text-sm leading-relaxed">
        {step.description}
      </p>
    </div>
  );
}