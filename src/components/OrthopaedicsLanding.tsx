import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, CheckCircle, ShieldCheck, Activity, ArrowRight, Star } from 'lucide-react';
import WhatsAppButton from '../components/WhatsAppButton';

export default function OrthopaedicsLanding() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', phone: '', problem: 'knee' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // --- HANDLE SUBMISSION ---
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 1. TODO: Send data to your backend/CRM & Google Ads Conversion tracking
    console.log("Lead Captured:", formData);

    // 2. SIMULATE DELAY THEN REDIRECT
    setTimeout(() => {
      alert("Thank you! Our Ortho Team will call you shortly to schedule your assessment.");
      
      // 4. REDIRECT to Main Website Home Page
      navigate('/'); 
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#F2F0EA] font-sans text-gray-800">
      
      {/* --- HERO SECTION (With Background Image) --- */}
      <div className="relative bg-[#1A3C34] overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            // PLACEHOLDER IMAGE - You can replace this with a relevant image of your own
            src="https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&q=80&w=2000" 
            alt="Advanced Orthopedic Care" 
            className="w-full h-full object-cover opacity-25 mix-blend-overlay filter grayscale contrast-125"
          />
          {/* Gradient Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A3C34] via-[#1A3C34]/90 to-[#1A3C34]/70"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 md:pt-24 md:pb-32 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Left Content: The Pitch */}
            <div className="text-white space-y-6 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C8B092]/20 border border-[#C8B092]/40 text-[#C8B092] text-xs font-bold tracking-widest uppercase">
                <Star className="w-3 h-3 fill-current" /> India's Top Ortho Care
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight shadow-sm">
                Don't Let Joint Pain <br />
                <span className="text-[#C8B092]">Stop Your Life.</span>
              </h1>
              <p className="text-lg text-gray-200 max-w-lg font-medium">
                Get world-class Joint Replacement & Spine Surgery at 
                <span className="text-white font-bold border-b-2 border-[#C8B092]"> 60% less cost </span> 
                than International standards. Partnered with JCI Accredited Hospitals.
              </p>
              
              <ul className="space-y-4 pt-6">
                {[
                  "Free MRI/X-Ray Review by Top Surgeons",
                  "All-Inclusive Surgical Packages (No Hidden Costs)",
                  "Dedicated Medical Concierge for Travel & Stay"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[15px] font-medium text-gray-100">
                    <CheckCircle className="w-6 h-6 text-[#C8B092] shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Content: The Lead Form (High Visibility) */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl border-4 border-[#C8B092]/30 relative z-20">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#C8B092] text-[#1A3C34] text-xs font-bold uppercase py-1 px-4 rounded-full whitespace-nowrap">
                Limited Time Free Assessment
              </div>
              <h3 className="text-2xl font-bold text-[#1A3C34] mb-2 font-serif text-center mt-2">Get Expert Surgical Opinion</h3>
              <p className="text-sm text-gray-500 mb-6 text-center leading-snug">Fill this form. Our Senior Ortho Team will contact you within 15 mins.</p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Patient Name *</label>
                  <input 
                    required 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#1A3C34] focus:ring-1 focus:ring-[#1A3C34] outline-none transition-all"
                    placeholder="Enter full name"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Phone Number (WhatsApp) *</label>
                  <input 
                    required 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#1A3C34] focus:ring-1 focus:ring-[#1A3C34] outline-none transition-all"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Select Current Issue *</label>
                  <select 
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#1A3C34] focus:bg-white outline-none appearance-none"
                    style={{backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 20 20\'%3e%3cpath stroke=\'%236b7280\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'1.5\' d=\'M6 8l4 4 4-4\'/%3e%3c/svg%3e")', backgroundPosition: 'right 0.5rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em'}}
                    value={formData.problem}
                    onChange={e => setFormData({...formData, problem: e.target.value})}
                  >
                    <option value="knee">Knee Pain / Needs Replacement</option>
                    <option value="hip">Hip Pain / Needs Replacement</option>
                    <option value="spine">Spine / Chronic Back Pain</option>
                    <option value="sports">Sports Injury (ACL/Ligament)</option>
                    <option value="shoulder">Shoulder Pain</option>
                    <option value="other">Other Ortho Issue</option>
                  </select>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-[#1A3C34] hover:bg-[#132e28] text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-[#1A3C34]/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 text-lg"
                >
                  {isSubmitting ? 'Submitting...' : (
                    <>
                      Request Free Call Back <ArrowRight className="w-6 h-6" />
                    </>
                  )}
                </button>
                
                <p className="text-[10px] text-center text-gray-400 mt-3 flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-[#C8B092]" /> Your data is secure & only shared with medical team.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* --- TRUST BADGES & LOGOS SECTION --- */}
      <div className="bg-white py-10 border-b border-gray-100">
        {/* Stats Grid */}
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center opacity-90 pb-10 border-b border-gray-100">
           {[
             { label: "Successful Surgeries Facilitated", value: "5,000+" },
             { label: "JCI Accredited Hospital Partners", value: "15+" },
             { label: "Average Cost Savings", value: "60%" },
             { label: "Patient Satisfaction Score", value: "4.9/5" },
           ].map((stat, i) => (
             <div key={i}>
               <div className="text-3xl font-extrabold text-[#1A3C34] font-serif">{stat.value}</div>
               <div className="text-xs uppercase tracking-wider font-bold text-gray-500 mt-1">{stat.label}</div>
             </div>
           ))}
        </div>

        {/* --- GOVERNMENT RECOGNITION LOGOS (New Section) --- */}
        <div className="max-w-4xl mx-auto px-4 pt-10 text-center">
            <p className="text-sm uppercase tracking-widest text-gray-400 mb-8 font-bold">Recognized By Government Initiatives</p>
            
            {/* IMPORTANT: You must add your logo images to your 'public' folder.
               Example: public/logos/istart.png, public/logos/dpiit.png, etc.
            */}
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default">
                {/* iStart Logo Placeholder */}
                <img src="/logos/istart.png" alt="iStart Rajasthan" className="h-12 md:h-14 object-contain" onError={(e) => e.currentTarget.style.display = 'none'} />
                
                {/* DPIIT Logo Placeholder */}
                <img src="/logos/dpiit.png" alt="DPIIT" className="h-10 md:h-12 object-contain" onError={(e) => e.currentTarget.style.display = 'none'} />
                
                {/* MeitY Logo Placeholder */}
                <img src="/logos/meity.png" alt="MeitY" className="h-12 md:h-14 object-contain" onError={(e) => e.currentTarget.style.display = 'none'} />
            </div>
            {/* Helper text if images are missing */}
            <p className="text-[10px] text-red-400 mt-4 italic text-center hidden md:block">
               (Developer Note: Please add istart.png, dpiit.png, and meity.png to your public/logos folder to see the images)
            </p>
        </div>
      </div>

      {/* --- TREATMENTS GRID --- */}
      <div className="py-20 max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
           <h2 className="text-3xl font-serif font-bold text-[#1A3C34] mb-4">Centers of Orthopedic Excellence</h2>
           <p className="text-gray-600 max-w-2xl mx-auto">We partner with hospitals using the latest robotic and minimally invasive techniques for faster recovery and better outcomes.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              title: "Total Knee Replacement", 
              desc: "Advanced Robotic-assisted surgery options. Precision alignment for longevity. Typically walking within 24 hours.",
              img: "https://images.unsplash.com/photo-1584555613497-9ecf9dd06f68?auto=format&fit=crop&q=80&w=400" // Placeholder
            },
            { 
              title: "Hip Replacement", 
              desc: "Minimally invasive Anterior Approach available. Smaller incisions, less muscle trauma, and faster return to activities.",
              img: "https://images.unsplash.com/photo-1606206591513-280d8b08e201?auto=format&fit=crop&q=80&w=400" // Placeholder
            },
            { 
              title: "Complex Spine Surgery", 
              desc: "Endoscopic and Microscopic solutions for slip disc, sciatica, and spinal stenosis. High success rate.",
              img: "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?auto=format&fit=crop&q=80&w=400" // Placeholder
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all group">
              <div className="h-48 overflow-hidden relative">
                 <div className="absolute inset-0 bg-[#1A3C34]/20 group-hover:bg-transparent transition-colors z-10"></div>
                 <img src={item.img} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1A3C34] mb-3">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- STICKY MOBILE CTA --- */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-md p-4 border-t border-gray-200 z-50 flex gap-3 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
        <a href="tel:+919876543210" className="flex-1 bg-gray-100 text-[#1A3C34] font-bold py-3 rounded-xl flex items-center justify-center gap-2 border border-gray-200">
          <Phone className="w-5 h-5" /> Call Expert
        </a>
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex-1 bg-[#1A3C34] text-white font-bold py-3 rounded-xl shadow-lg"
        >
          Book Free Opinion
        </button>
      </div>
<WhatsAppButton />
    </div>
  );
}