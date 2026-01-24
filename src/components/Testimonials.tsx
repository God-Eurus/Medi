import React, { useState } from 'react';
import { Star, Quote, CheckCircle, ChevronLeft, ChevronRight, ArrowRight, Calendar } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    location: 'United States',
    procedure: 'Hip Replacement',
    image: 'https://images.pexels.com/photos/3768894/pexels-photo-3768894.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    text: 'I saved over $45,000 on my hip replacement. The hospital was state-of-the-art, and my surgeon was incredible. MediVoyage handled everything from flights to recovery accommodation.'
  },
  {
    name: 'James Mitchell',
    location: 'United Kingdom',
    procedure: 'Dental Implants',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    text: 'After being quoted £25,000 in London, I got the same dental implants for £8,000 including travel. The quality exceeded my expectations and the support was outstanding.'
  },
  {
    name: 'Maria Rodriguez',
    location: 'Canada',
    procedure: 'Cosmetic Surgery',
    image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    text: 'The entire experience was seamless. From video consultations to post-op care, I felt supported every step of the way. Results are amazing and I saved thousands.'
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Scroll to Hero Form
  const scrollToForm = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative py-24 bg-[#0F2622] overflow-hidden font-['Poppins']">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}></div>
      </div>
      {/* Gold Glow */}
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#D4C5A9] rounded-full mix-blend-overlay filter blur-[100px] opacity-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-5xl font-['Montserrat'] font-bold text-white mb-6">
            Trusted by <span className="text-[#D4C5A9] italic">Thousands</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
            Real stories from patients who chose quality, savings, and safety.
          </p>
        </div>

        {/* ================= DESKTOP GRID (Hidden on Mobile) ================= */}
        <div className="hidden lg:grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>

        {/* ================= MOBILE SLIDER (Visible on Mobile) ================= */}
        <div className="lg:hidden mb-16 relative">
           <div className="transition-all duration-300 ease-in-out transform">
             <TestimonialCard testimonial={testimonials[currentIndex]} />
           </div>

           {/* Navigation Buttons */}
           <div className="flex items-center justify-center gap-6 mt-8">
            <button 
              onClick={prevTestimonial}
              className="p-3 rounded-none bg-white/10 border border-white/20 text-white hover:bg-[#D4C5A9] hover:text-[#0F2622] hover:border-[#D4C5A9] transition-all shadow-lg"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>

            <span className="text-sm font-bold tracking-widest text-[#D4C5A9]">
              {currentIndex + 1} / {testimonials.length}
            </span>

            <button 
              onClick={nextTestimonial}
              className="p-3 rounded-none bg-white/10 border border-white/20 text-white hover:bg-[#D4C5A9] hover:text-[#0F2622] hover:border-[#D4C5A9] transition-all shadow-lg"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Stats Bar - No Box */}
        <div className="relative mt-20">
            {/* Removed bg, border, padding, and blur classes */}
            <div className="relative mx-auto max-w-4xl flex flex-col items-center">
                
                {/* Stats Row - Forced One Line */}
                <div className="w-full grid grid-cols-3 divide-x divide-white/10 mb-10">
                    <div className="text-center px-1 md:px-4">
                        <div className="text-3xl md:text-5xl font-['Montserrat'] font-bold text-white mb-2">10k+</div>
                        <div className="text-[10px] md:text-sm text-[#D4C5A9] font-medium uppercase tracking-widest leading-tight">Happy<br className="md:hidden" /> Patients</div>
                    </div>
                    <div className="text-center px-1 md:px-4">
                        <div className="text-3xl md:text-5xl font-['Montserrat'] font-bold text-white mb-2">98%</div>
                        <div className="text-[10px] md:text-sm text-[#D4C5A9] font-medium uppercase tracking-widest leading-tight">Satisfaction<br className="md:hidden" /> Rate</div>
                    </div>
                    <div className="text-center px-1 md:px-4">
                        <div className="text-3xl md:text-5xl font-['Montserrat'] font-bold text-white mb-2">50+</div>
                        <div className="text-[10px] md:text-sm text-[#D4C5A9] font-medium uppercase tracking-widest leading-tight">Partner<br className="md:hidden" /> Hospitals</div>
                    </div>
                </div>

                {/* Call to Action Button */}
                <button 
                    onClick={scrollToForm}
                    className="group bg-[#D4C5A9] text-[#0F2622] font-['Montserrat'] font-bold py-4 px-10 rounded-none shadow-[0_0_20px_rgba(212,197,169,0.3)] hover:shadow-[0_0_30px_rgba(212,197,169,0.5)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 text-lg"
                >
                    <Calendar className="w-6 h-6" />
                    <span className="uppercase tracking-wider">Book Free Consultation</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>

            </div>
        </div>

      </div>
    </section>
  );
}

// Helper Component for the Card
function TestimonialCard({ testimonial }: { testimonial: any }) {
  return (
    <div className="bg-white rounded-none p-8 shadow-2xl relative transform hover:-translate-y-2 transition-transform duration-300 border-b-4 border-transparent hover:border-[#D4C5A9]">
      <Quote className="absolute top-8 right-8 w-10 h-10 text-[#D4C5A9]/20" />

      {/* User Profile */}
      <div className="flex items-center gap-4 mb-6">
        <div className="relative">
            <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-16 h-16 rounded-full object-cover border-2 border-gray-100 shadow-md"
            loading="lazy"
            />
            <div className="absolute bottom-0 right-0 bg-[#0F2622] rounded-full p-1 border border-white">
                <CheckCircle size={10} className="text-[#D4C5A9]" />
            </div>
        </div>
        <div>
          <h3 className="font-['Montserrat'] font-bold text-[#0F2622] text-lg">{testimonial.name}</h3>
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">{testimonial.location}</p>
        </div>
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-5">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-[#D4C5A9] text-[#D4C5A9]" />
        ))}
      </div>

      {/* Text */}
      <p className="text-gray-600 leading-relaxed mb-6 text-sm font-['Poppins']">
        "{testimonial.text}"
      </p>

      {/* Tag - Sharpened */}
      <div className="inline-block bg-[#0F2622]/5 text-[#0F2622] px-4 py-1.5 rounded-none text-xs font-bold border border-[#0F2622]/10 uppercase tracking-wider">
        {testimonial.procedure}
      </div>
    </div>
  );
}