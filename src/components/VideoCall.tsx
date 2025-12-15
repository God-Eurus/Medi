import React, { useState, useRef, useEffect } from 'react';
import { 
  Search, Star, Clock, Video, ArrowLeft, X, 
  CheckCircle, ShieldCheck, CreditCard, ChevronRight, Calendar, Filter, MapPin, ChevronLeft, Mic, MicOff, VideoOff, PhoneOff, MessageSquare 
} from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

// --- DATA ---
const SPECIALTIES = [
  "All", "Cardiology", "Dermatology", "General Surgery", "Neurology", "Orthopedics"
];

const DOCTORS = [
  {
    id: 1,
    name: "Dr. Swaraj Maharwal",
    specialty: "General Surgery",
    hospital: "Amar Jain Hospital",
    rating: 4.9,
    experience: "35 Years",
    image: "https://i.pravatar.cc/400?img=68", 
    slots: ["10:30 AM", "04:30 PM"],
    price: 1500,
    location: "Jaipur",
    online: true,
  },
  {
    id: 2,
    name: "Dr. G L Sharma",
    specialty: "Cardiology",
    hospital: "Priyanka Hospital",
    rating: 5.0,
    experience: "40 Years",
    image: "https://i.pravatar.cc/400?img=53",
    slots: ["11:00 AM", "NOW"],
    price: 2000,
    location: "Jaipur",
    online: true,
  },
  {
    id: 3,
    name: "Dr. Gunjan Jain",
    specialty: "Dermatology",
    hospital: "Skin & Laser Clinic",
    rating: 4.9,
    experience: "25 Years",
    image: "https://i.pravatar.cc/400?img=47",
    slots: ["01:00 PM", "02:30 PM"],
    price: 1800,
    location: "Jaipur",
    online: false,
  },
  {
    id: 4,
    name: "Dr. Naresh Somani",
    specialty: "Neurology",
    hospital: "HCG Hospital",
    rating: 4.8,
    experience: "30 Years",
    image: "https://i.pravatar.cc/400?img=12",
    slots: ["09:00 AM", "09:30 AM"],
    price: 2500,
    location: "Jaipur",
    online: true,
  },
  {
    id: 5,
    name: "Dr. Priya Sharma",
    specialty: "Orthopedics",
    hospital: "Bone & Joint Care",
    rating: 4.7,
    experience: "15 Years",
    image: "https://i.pravatar.cc/400?img=23",
    slots: ["10:00 AM", "05:00 PM"],
    price: 1200,
    location: "Jaipur",
    online: true,
  },
   {
    id: 6,
    name: "Dr. Rahul Verma",
    specialty: "Cardiology",
    hospital: "City Heart Centre",
    rating: 4.9,
    experience: "20 Years",
    image: "https://i.pravatar.cc/400?img=33",
    slots: ["12:00 PM", "NOW"],
    price: 1900,
    location: "Jaipur",
    online: true,
  },
  {
    id: 7,
    name: "Dr. Anita Desai",
    specialty: "Dermatology",
    hospital: "Apollo Clinic",
    rating: 4.8,
    experience: "18 Years",
    image: "https://i.pravatar.cc/400?img=38",
    slots: ["03:00 PM", "03:45 PM"],
    price: 1600,
    location: "Jaipur",
    online: false,
  },
];

// --- THEME ---
const THEME = {
  primary: '#1A3C34', 
  secondary: '#C8B092', 
  bg: '#F5F5F0', 
  white: '#FFFFFF',
};

// --- VIDEO PORTAL COMPONENT ---
// This acts as a separate "page"
const VideoPortal = ({ doc, onEndCall }: { doc: any, onEndCall: () => void }) => {
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [duration, setDuration] = useState("00:00");

  useEffect(() => {
    // Simple timer simulation
    let seconds = 0;
    const interval = setInterval(() => {
        seconds++;
        const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
        const secs = (seconds % 60).toString().padStart(2, '0');
        setDuration(`${mins}:${secs}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-[#0F1110] text-white z-50 flex flex-col">
       {/* Top Bar */}
       <div className="flex justify-between items-center p-6 bg-gradient-to-b from-black/80 to-transparent absolute top-0 w-full z-10">
          <div className="flex items-center gap-4">
             <div className="w-10 h-10 rounded-full border border-white/20 overflow-hidden">
                <img src={doc.image} className="w-full h-full object-cover" alt="" />
             </div>
             <div>
                <h3 className="font-serif text-lg leading-none">{doc.name}</h3>
                <span className="text-xs text-[#C8B092] font-bold tracking-wider uppercase">Live Consultation</span>
             </div>
          </div>
          <div className="bg-white/10 backdrop-blur px-3 py-1 rounded-full text-xs font-mono border border-white/10">
            {duration}
          </div>
       </div>

       {/* Main Video Area */}
       <div className="flex-1 flex items-center justify-center p-4">
          <div className="w-full max-w-5xl aspect-video bg-[#1a1a1a] rounded-2xl overflow-hidden relative border border-white/10 shadow-2xl">
             <img src={doc.image} className="w-full h-full object-cover opacity-60 blur-sm" alt="remote-bg" />
             <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-32 h-32 rounded-full border-4 border-[#C8B092] overflow-hidden shadow-lg">
                    <img src={doc.image} className="w-full h-full object-cover" alt="doctor-avatar" />
                 </div>
             </div>
             
             {/* Self View (PiP) */}
             <div className="absolute bottom-6 right-6 w-48 h-32 bg-black rounded-lg border border-white/20 overflow-hidden shadow-xl">
                 <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                    <span className="text-xs text-gray-500">You</span>
                 </div>
             </div>
          </div>
       </div>

       {/* Control Bar */}
       <div className="pb-8 pt-4 flex justify-center items-center gap-6">
          <button 
            onClick={() => setIsMuted(!isMuted)}
            className={`p-4 rounded-full transition-all ${isMuted ? 'bg-red-500/20 text-red-500' : 'bg-[#2A2A2A] hover:bg-[#3A3A3A] text-white'}`}
          >
             {isMuted ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
          </button>
          
          <button 
            onClick={() => setIsVideoOff(!isVideoOff)}
            className={`p-4 rounded-full transition-all ${isVideoOff ? 'bg-red-500/20 text-red-500' : 'bg-[#2A2A2A] hover:bg-[#3A3A3A] text-white'}`}
          >
             {isVideoOff ? <VideoOff className="w-6 h-6" /> : <Video className="w-6 h-6" />}
          </button>

          <button 
            onClick={onEndCall}
            className="p-4 px-8 rounded-full bg-red-600 hover:bg-red-700 text-white transition-all shadow-lg shadow-red-600/30"
          >
             <PhoneOff className="w-6 h-6" />
          </button>

          <button className="p-4 rounded-full bg-[#2A2A2A] hover:bg-[#3A3A3A] text-white transition-all">
             <MessageSquare className="w-6 h-6" />
          </button>
       </div>
    </div>
  );
};


export default function ConsultationPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [bookingStep, setBookingStep] = useState<'browse' | 'payment' | 'confirmed' | 'call'>('browse');
  const [selectedDoc, setSelectedDoc] = useState<any>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  // --- HANDLERS ---
  const initiateBooking = (doc: any, slot: string) => {
    setSelectedDoc(doc);
    setSelectedSlot(slot);
    setBookingStep('payment');
  };

  const processPayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      selectedSlot === 'NOW' ? setBookingStep('call') : setBookingStep('confirmed');
    }, 1500);
  };

  const closePaymentModal = () => {
    if (!isProcessing) {
      setBookingStep('browse');
      setSelectedDoc(null);
      setSelectedSlot(null);
    }
  };

  const scrollSlider = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
        const scrollAmount = 300; 
        sliderRef.current.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth'
        });
    }
  };

  const filteredDoctors = selectedCategory === "All" 
    ? DOCTORS 
    : DOCTORS.filter(d => d.specialty === selectedCategory);


  // --- MAIN RENDER ---

  // 1. If in 'call' state, render ONLY the Video Portal (Simulating a redirect)
  if (bookingStep === 'call') {
    return <VideoPortal doc={selectedDoc} onEndCall={() => setBookingStep('browse')} />;
  }

  // 2. Standard View
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F0]">
      <Header />

      <main className="flex-1 pt-24 pb-16 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 h-full flex flex-col justify-center">
          
          <div className="mb-8 pl-1">
            <h1 className="text-3xl md:text-4xl font-serif text-[#1A3C34] mb-2">Our Specialists</h1>
            <p className="text-gray-500 text-sm md:text-base font-light max-w-2xl">Browse our directory of distinguished doctors.</p>
          </div>

          {/* FILTER PILLS */}
          <div className="flex overflow-x-auto pb-4 gap-2 mb-6 no-scrollbar mask-fade-right pl-1">
             {SPECIALTIES.map((cat) => (
               <button
                 key={cat}
                 onClick={() => setSelectedCategory(cat)}
                 className={`flex-shrink-0 px-5 py-2 text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] transition-all border ${
                   selectedCategory === cat
                     ? 'bg-[#1A3C34] border-[#1A3C34] text-white'
                     : 'bg-white border-gray-200 text-gray-500 hover:border-[#C8B092] hover:text-[#1A3C34]'
                 }`}
               >
                 {cat}
               </button>
             ))}
          </div>

          {/* DOCTOR SLIDER CONTAINER */}
          <div className="relative group/slider">
            
            {/* Controls */}
            <button onClick={() => scrollSlider('left')} className="hidden md:block absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-3 rounded-full text-[#1A3C34] opacity-0 group-hover/slider:opacity-100 transition-opacity border border-gray-100">
                <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={() => scrollSlider('right')} className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-3 rounded-full text-[#1A3C34] opacity-0 group-hover/slider:opacity-100 transition-opacity border border-gray-100">
                <ChevronRight className="w-5 h-5" />
            </button>

            {/* SLIDER */}
            <div 
                ref={sliderRef}
                className="flex overflow-x-auto snap-x snap-mandatory gap-5 pb-8 no-scrollbar pl-1"
                style={{ scrollBehavior: 'smooth' }}
            >
                {filteredDoctors.map(doc => (
                    // --- COMPACT DOCTOR CARD (min-w-[280px]) ---
                    <div key={doc.id} className="min-w-[260px] md:min-w-[280px] snap-start bg-white border border-gray-100 hover:border-[#C8B092] transition-all duration-300 group flex flex-col h-full shadow-sm hover:shadow-lg">
                    
                        {/* Compact Image Aspect [4/5] */}
                        <div className="relative w-full aspect-[4/5] bg-gray-200 overflow-hidden">
                            <img 
                                src={doc.image} 
                                alt={doc.name} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                            />
                            {doc.online && (
                                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur px-2 py-1 text-[9px] font-bold text-green-700 flex items-center gap-1.5 z-10 shadow-sm">
                                <span className="relative flex h-1.5 w-1.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                                </span>
                                LIVE
                                </div>
                            )}
                        </div>

                        {/* Content */}
                        <div className="p-4 flex flex-col flex-1">
                            <div className="flex justify-between items-baseline mb-2">
                                <span className="text-[9px] font-bold tracking-[0.2em] text-[#C8B092] uppercase truncate max-w-[150px]">
                                {doc.specialty}
                                </span>
                                <div className="flex items-center gap-0.5 text-[#1A3C34]">
                                <Star className="w-3 h-3 fill-current" />
                                <span className="text-[10px] font-bold">{doc.rating}</span>
                                </div>
                            </div>

                            <div className="mb-4">
                                <h3 className="font-serif text-lg text-[#1A3C34] leading-tight mb-1 truncate">
                                {doc.name}
                                </h3>
                                <p className="text-xs text-gray-400 font-light truncate">
                                {doc.hospital}
                                </p>
                            </div>

                            <div className="flex justify-between items-center pt-3 border-t border-gray-100 mb-4 mt-auto">
                                <span className="text-[10px] font-medium text-gray-500 flex items-center gap-1">
                                    <MapPin className="w-3 h-3 text-[#C8B092]" /> {doc.location}
                                </span>
                                <span className="text-[10px] font-medium text-gray-500">
                                    {doc.experience} Exp.
                                </span>
                            </div>

                            {/* Buttons */}
                            <div className="grid grid-cols-2 gap-2">
                                {doc.slots.map((slot: string) => (
                                <button
                                    key={slot}
                                    onClick={() => initiateBooking(doc, slot)}
                                    className={`py-2 px-1 text-[10px] font-bold border transition-all ${
                                    slot === 'NOW'
                                        ? 'bg-[#1A3C34] text-white border-[#1A3C34] hover:bg-[#152e28]'
                                        : 'bg-white text-[#1A3C34] border-gray-200 hover:border-[#C8B092] hover:text-[#C8B092]'
                                    }`}
                                >
                                    {slot === 'NOW' ? <span className="flex items-center justify-center gap-1"><Video className="w-3 h-3"/> INSTANT</span> : slot}
                                </button>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
                
                {/* Spacer for horizontal scroll comfort */}
                <div className="min-w-[20px] h-1 flex-shrink-0" />
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* --- PAYMENT MODAL --- */}
      {bookingStep === 'payment' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1A3C34]/80 backdrop-blur-sm animate-in fade-in">
            <div className="bg-white p-6 max-w-xs w-full relative border border-gray-200 shadow-2xl">
                <button onClick={closePaymentModal} className="absolute top-3 right-3 text-gray-400 hover:text-black"><X className="w-5 h-5"/></button>
                
                <h2 className="text-lg font-serif mb-1 text-[#1A3C34]">Confirm Booking</h2>
                <p className="text-xs text-gray-500 mb-6 uppercase tracking-wider">Secure Checkout</p>
                
                <div className="flex items-center gap-3 mb-4 p-3 bg-gray-50 border border-gray-100">
                    <img src={selectedDoc.image} className="w-10 h-10 object-cover grayscale" alt="" />
                    <div>
                        <div className="text-sm font-bold text-[#1A3C34]">{selectedDoc.name}</div>
                        <div className="text-[10px] text-gray-500">{selectedSlot} • ₹{selectedDoc.price}</div>
                    </div>
                </div>

                <button onClick={processPayment} disabled={isProcessing} className="w-full bg-[#1A3C34] text-white py-3 text-sm font-bold tracking-wide hover:bg-black transition-colors">
                    {isProcessing ? 'PROCESSING...' : 'PAY & BOOK'}
                </button>
            </div>
        </div>
      )}

      {/* --- CONFIRMED MODAL --- */}
      {bookingStep === 'confirmed' && (
         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1A3C34]/80 backdrop-blur-sm">
            <div className="bg-white p-8 max-w-xs w-full text-center shadow-2xl">
                <CheckCircle className="w-12 h-12 text-[#1A3C34] mx-auto mb-4" />
                <h2 className="text-xl font-serif mb-2 text-[#1A3C34]">Confirmed</h2>
                <p className="text-xs text-gray-500 mb-6">Appointment booked successfully.</p>
                <button onClick={closePaymentModal} className="text-xs font-bold underline">CLOSE</button>
            </div>
         </div>
      )}

    </div>
  );
}