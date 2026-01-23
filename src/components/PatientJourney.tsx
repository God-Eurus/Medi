import { FileText, Video, Calendar, Plane, Stethoscope, Heart, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    title: 'Submit Inquiry',
    description: 'Share your needs. We match you with specialists & quote in 24h.',
  },
  {
    icon: Video,
    title: 'Consultation',
    description: 'Video call with your surgeon to review the plan & costs.',
  },
  {
    icon: Calendar,
    title: 'Logistics',
    description: 'We handle your visa, flight coordination, and hotels.',
  },
  {
    icon: Plane,
    title: 'Arrival',
    description: 'VIP Airport pickup and transport to your hotel.',
  },
  {
    icon: Stethoscope,
    title: 'Treatment',
    description: 'Surgery in JCI-accredited hospitals with full support.',
  },
  {
    icon: Heart,
    title: 'Recovery',
    description: 'Post-op care, fit-to-fly check, and safe return home.',
  }
];

export function PatientJourney() {
  const colors = {
    emerald: '#0F2622',
    gold: '#D4C5A9',
    alabaster: '#F2F0EA'
  };

  return (
    <section className="py-16" style={{ backgroundColor: colors.alabaster }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER (Reduced Margins) */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-2 block">
            The Process
          </span>
          <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4" style={{ color: colors.emerald }}>
            Your Journey to <span className="italic" style={{ color: colors.gold }}>Better Health</span>
          </h2>
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            A seamless, step-by-step path from inquiry to full recovery.
          </p>
        </div>

        {/* STEPS GRID (Tighter Gap) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12 relative">
          
          {steps.map((step, index) => {
            const Icon = step.icon;
            // Logic to show arrows only between steps (not after the last one)
            // On desktop (lg), arrows appear after 1, 2, 4, 5. Step 3 wraps, Step 6 ends.
            const showArrow = index !== 2 && index !== 5; 

            return (
              <div key={index} className="relative group">
                {/* CARD */}
                <div className="bg-white p-6 shadow-sm hover:shadow-lg transition-all duration-300 border-t-2 border-transparent hover:border-[#D4C5A9] h-full rounded-none flex flex-col items-center text-center">
                  
                  {/* Step Number */}
                  <div className="text-xs font-bold text-[#D4C5A9] mb-4 tracking-widest">
                    STEP 0{index + 1}
                  </div>

                  {/* Compact Icon */}
                  <div 
                    className="w-12 h-12 flex items-center justify-center mb-4 bg-[#0F2622] text-[#D4C5A9] shadow-md group-hover:scale-110 transition-transform duration-300 rounded-none"
                  >
                    <Icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>

                  <h3 className="text-lg font-serif font-bold mb-2" style={{ color: colors.emerald }}>
                    {step.title}
                  </h3>

                  <p className="text-gray-500 text-xs leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>

                {/* CONNECTOR ARROW (Desktop Only) */}
                {showArrow && (
                  <div className="hidden lg:block absolute top-1/2 -right-5 transform -translate-y-1/2 z-10 text-gray-300">
                    <ArrowRight size={20} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* COMPACT TIMELINE BOX */}
        <div 
          className="w-full py-8 px-6 text-center shadow-lg rounded-none flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12"
          style={{ backgroundColor: colors.emerald }}
        >
          <div className="text-center md:text-right">
             <h3 className="text-lg font-serif font-bold text-white">
                Total Timeline
              </h3>
          </div>

          <div className="hidden md:block w-px h-8 bg-[#D4C5A9]/30"></div>

          <div className="text-center md:text-left">
             <span className="text-2xl font-serif font-bold text-[#D4C5A9]">
                2-4 Weeks <span className="text-xs text-gray-400 font-sans font-normal ml-2">(Expedited: 7 Days)</span>
              </span>
          </div>
        </div>

      </div>
    </section>
  );
}