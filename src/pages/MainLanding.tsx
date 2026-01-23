import React, { useState } from 'react';
import { 
  Phone, 
  CheckCircle, 
  ShieldCheck, 
  ArrowRight, 
  FileText, 
  Stethoscope, 
  HeartHandshake,
  Star,
  Shield,
  Plane 
} from 'lucide-react';

// --- IMPORTS FOR EXISTING COMPONENTS ---
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function MediVoyageLanding() {
  const [formData, setFormData] = useState({ 
    name: '', 
    phone: '', 
    email: '', 
    specialty: 'general',
    comments: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // --- FORM HANDLING ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formsubmit.co/medivoyagehealthcare@gmail.com", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          Name: formData.name,
          Phone: formData.phone,
          Email: formData.email,
          Treatment: formData.specialty,
          Comments: formData.comments,
          _subject: "New MediVoyage Lead!",
          _captcha: "false"
        })
      });

      if (response.ok) {
        alert("Thank you! A Care Manager will call you shortly.");
        setFormData({ name: '', phone: '', email: '', specialty: 'general', comments: '' });
      } else {
        alert("Something went wrong. Please try again or call us directly.");
      }

    } catch (error) {
      console.error("Form Error:", error);
      alert("Error sending message. Please call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFCF8] font-sans text-gray-800">

      {/* 1. EXISTING HEADER */}
      <Header />

      {/* --- HERO SECTION --- */}
      <div className="relative min-h-[90vh] flex items-center pt-24 pb-16 bg-[#0f2420] overflow-hidden">
        
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
           <img 
             src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=2000" 
             alt="Doctor Background" 
             className="w-full h-full object-cover opacity-40 mix-blend-overlay"
           />
           <div className="absolute inset-0 bg-gradient-to-r from-[#0f2420] via-[#0f2420]/90 to-[#0f2420]/60"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Typography & Value Prop */}
            <div className="text-white space-y-8 animate-fade-in-up">
              
              <div className="inline-flex items-center gap-2 px-4 py-2 border border-white/20 rounded-none bg-white/5 backdrop-blur-sm text-gray-300 text-xs font-medium tracking-widest uppercase">
                <Shield className="w-3 h-3 text-[#C8B092]" /> Clinically-Led Medical Travel
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.1] tracking-tight">
                Doctor Led. <br />
                World Class <span className="text-[#C8B092]">HealthCare.</span> <br />
                Zero Waiting Time.
              </h1>
              
              <p className="text-lg text-gray-400 max-w-lg font-light leading-relaxed border-l-2 border-[#C8B092]/30 pl-6">
                Connect with internationally accredited hospitals and board-certified surgeons. We handle your entire journey — from free consultation to recovery.
              </p>

              {/* Trust Indicators */}
              <div className="flex items-center gap-8 pt-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 border border-white/10 rounded bg-white/5">
                    <Star className="w-5 h-5 text-[#C8B092]" />
                  </div>
                  <div className="text-sm">
                    <p className="font-bold text-white">JCI Accredited</p>
                    <p className="text-gray-500 text-xs">Global Standard</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 border border-white/10 rounded bg-white/5">
                    <ShieldCheck className="w-5 h-5 text-[#C8B092]" />
                  </div>
                  <div className="text-sm">
                    <p className="font-bold text-white">ISO Certified</p>
                    <p className="text-gray-500 text-xs">Quality Assured</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Glassmorphism Form */}
            <div className="relative">
                <div className="absolute -top-4 right-4 z-20 bg-[#C8B092] text-[#1A3C34] text-[10px] font-bold px-3 py-1 uppercase tracking-widest shadow-lg">
                    Free Quote in 24H
                </div>

                <div id="lead-form" className="backdrop-blur-md bg-white/10 border border-white/20 p-8 rounded-none shadow-2xl relative overflow-hidden">
                  <div className="mb-8">
                    <h3 className="text-3xl font-serif font-bold text-white">Get Your Treatment Plan</h3>
                    <p className="text-sm text-gray-400 mt-2">Speak to a specialist. Confidential & Free.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    {/* Row 1: Name & Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                        <input 
                            required 
                            type="text" 
                            name="name"
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:border-[#C8B092] focus:bg-white/10 focus:outline-none transition-all"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={e => setFormData({...formData, name: e.target.value})}
                        />
                        </div>
                        <div>
                        <input 
                            required 
                            type="tel" 
                            name="phone"
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:border-[#C8B092] focus:bg-white/10 focus:outline-none transition-all"
                            placeholder="Phone"
                            value={formData.phone}
                            onChange={e => setFormData({...formData, phone: e.target.value})}
                        />
                        </div>
                    </div>

                    {/* Row 2: Email */}
                    <div>
                      <input 
                        required 
                        type="email" 
                        name="email"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:border-[#C8B092] focus:bg-white/10 focus:outline-none transition-all"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                      />
                    </div>

                    {/* Row 3: Treatment */}
                    <div>
                      <select 
                        name="treatment"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 text-gray-400 focus:text-white focus:border-[#C8B092] focus:bg-white/10 focus:outline-none transition-all appearance-none"
                        value={formData.specialty}
                        onChange={e => setFormData({...formData, specialty: e.target.value})}
                      >
                        <option value="general" className="bg-[#1A3C34] text-gray-300">Select Treatment Type...</option>
                        <option value="ortho" className="bg-[#1A3C34] text-white">Orthopaedics (Knee/Hip/Spine)</option>
                        <option value="cosmetic" className="bg-[#1A3C34] text-white">Cosmetic Surgery & Hair</option>
                        <option value="dental" className="bg-[#1A3C34] text-white">Dental Implants</option>
                        <option value="cardio" className="bg-[#1A3C34] text-white">Heart Surgery</option>
                        <option value="fertility" className="bg-[#1A3C34] text-white">IVF / Fertility</option>
                      </select>
                    </div>

                    {/* Row 4: Comments */}
                    <div>
                      <textarea 
                        name="comments"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:border-[#C8B092] focus:bg-white/10 focus:outline-none h-24 resize-none transition-all"
                        placeholder="Describe required treatment..."
                        value={formData.comments}
                        onChange={e => setFormData({...formData, comments: e.target.value})}
                      />
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-[#C8B092] hover:bg-[#b0987a] text-[#1A3C34] font-bold py-4 shadow-lg hover:shadow-[#C8B092]/20 transition-all flex items-center justify-center gap-2 mt-2"
                    >
                      {isSubmitting ? 'Sending...' : (
                        <>
                          Request Consultation <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </button>
                    
                    <p className="text-[10px] text-center text-gray-500 mt-4 flex items-center justify-center gap-1">
                      <ShieldCheck className="w-3 h-3" /> 100% Secure & HIPAA Compliant
                    </p>
                  </form>
                </div>
            </div>

          </div>
        </div>
      </div>

      {/* --- PATIENT JOURNEY --- */}
      <div className="py-20 bg-[#F2F0EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1A3C34] mb-4">Your Journey to Recovery</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We handle the logistics so you can focus on healing. Here is how simple it is:</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 border-t-2 border-dashed border-[#C8B092]/50 -z-0 transform -translate-y-8"></div>

            {[
              {
                step: "01",
                title: "Free Consultation",
                desc: "Send us your reports. Top surgeons review them and provide a treatment plan & cost estimate within 24hrs.",
                icon: FileText,
                img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=400"
              },
              {
                step: "02",
                title: "Travel & Visa",
                desc: "Our team assists with Medical Visa letters, flight bookings, and arranges your hotel stay.",
                icon: Plane,
                img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=400"
              },
              {
                step: "03",
                title: "Surgery & Care",
                desc: "Arrive in India. A dedicated concierge receives you. Surgery is performed at a JCI accredited facility.",
                icon: Stethoscope,
                img: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=400"
              },
              {
                step: "04",
                title: "Recovery & Return",
                desc: "Post-op rehab and follow-up checks. We ensure you are fit to fly before dropping you at the airport.",
                icon: HeartHandshake,
                img: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&q=80&w=400"
              }
            ].map((item, idx) => (
              <div key={idx} className="relative z-10 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                <div className="absolute top-4 left-4 bg-[#C8B092] text-white text-xs font-bold px-2 py-1 rounded">
                  STEP {item.step}
                </div>
                
                <div className="h-40 overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>

                <div className="p-6">
                  <div className="w-10 h-10 bg-[#1A3C34] rounded-full flex items-center justify-center text-white mb-4 -mt-10 border-4 border-white relative z-20 shadow-md">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1A3C34] mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#1A3C34] py-16 text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: "Patients Assisted", value: "5,000+" },
            { label: "Partner Hospitals", value: "30+" },
            { label: "Cost Savings", value: "70%" },
            { label: "Countries Served", value: "12+" },
          ].map((stat, i) => (
            <div key={i} className="border-l border-[#C8B092]/20 first:border-0">
              <div className="text-3xl md:text-4xl font-serif font-bold text-[#C8B092]">{stat.value}</div>
              <div className="text-xs uppercase tracking-widest text-gray-400 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Sticky Mobile CTA (Kept for higher conversion) */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-3 z-50 flex gap-3 shadow-lg pb-safe">
        <a href="tel:+919876543210" className="flex-1 flex items-center justify-center gap-2 bg-[#F2F0EA] text-[#1A3C34] font-bold py-3 rounded-lg border border-[#1A3C34]/10">
          <Phone className="w-4 h-4" /> Call Us
        </a>
        <button 
          onClick={() => document.getElementById('lead-form')?.scrollIntoView({behavior: 'smooth'})}
          className="flex-1 flex items-center justify-center gap-2 bg-[#1A3C34] text-white font-bold py-3 rounded-lg shadow-lg"
        >
          Get Quote
        </button>
      </div>

      {/* 2. EXISTING FOOTER */}
      <Footer />
      
    </div>
  );
}