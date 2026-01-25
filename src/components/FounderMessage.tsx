import React from 'react';
import { Quote } from 'lucide-react';

export default function FounderMessage() {
  return (
    <section className="py-20 lg:py-28 bg-white font-['Poppins']">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT: IMAGE WITH PATIENTS */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative z-10">
              <img 
                src="/ghana.jpeg" // Put your image in the public folder
                alt="Our Medical Director with a happy patient" 
                className="w-full h-auto object-cover shadow-2xl"
                loading="lazy"
              />
            </div>

            {/* Decorative Background Box (Gold Outline) */}
            <div className="absolute top-4 -left-4 w-full h-full border-2 border-[#D4C5A9] z-0 hidden md:block"></div>

            {/* Floating Quote Card */}
            <div className="absolute -bottom-6 -right-6 lg:bottom-10 lg:-right-12 z-20 bg-[#0F2622] p-6 max-w-xs shadow-2xl">
              <Quote className="text-[#D4C5A9] w-8 h-8 mb-3" />
              <p className="text-white text-sm leading-relaxed font-light italic">
                "We don't just facilitate surgery. We hold your hand from the moment you land until you are safely home."
              </p>
            </div>
          </div>

          {/* RIGHT: TEXT CONTENT */}
          <div>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-4 block font-['Montserrat']">
              A Personal Note
            </span>
            
            <h2 className="text-3xl lg:text-5xl font-['Montserrat'] font-bold text-[#0F2622] mb-6 leading-tight">
              Care That Feels Like <span className="text-[#D4C5A9] italic">Family</span>
            </h2>

            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              When I started MediVoyage, my goal wasn't just to find cheaper healthcare. It was to provide <strong>safer, warmer, and more dignified care</strong> than what was available elsewhere.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              I personally oversee every treatment plan. That means you aren't talking to a call center—you are speaking with a team that knows your name, your medical history, and your recovery goals.
            </p>

            {/* Signature Block */}
            <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
              <img 
                src="/founders.JPG" // Re-use your headshot here for consistency
                alt="Dr. Founder" 
                className="w-16 h-16 rounded-full object-cover border-2 border-[#D4C5A9] p-0.5"
              />
              <div>
                <p className="text-[#0F2622] font-bold font-['Montserrat'] text-lg">
                  Dr. Garvit Maharwal & Dr. Nandita Munjal
                </p>
                <p className="text-[#D4C5A9] text-xs font-bold uppercase tracking-widest">
                  Founders & Medical Director
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}