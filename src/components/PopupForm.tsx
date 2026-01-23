import { useState, useEffect } from 'react';
import { X, ArrowRight, CheckCircle } from 'lucide-react';

export function PopupForm() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', need: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    // Trigger the popup 2 seconds after mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // --- SIMULATION START ---
      // Since you don't have Supabase, we simulate a network delay here.
      // Replace this block with your EmailJS or API logic later.
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      console.log('Form Submitted Successfully:', formData);
      // --- SIMULATION END ---
      
      setIsSuccess(true);
      
      // Close automatically after 3 seconds of showing success message
      setTimeout(() => {
        setIsVisible(false); 
        setIsSuccess(false);
        setFormData({ name: '', phone: '', email: '', need: '' });
      }, 3000);

    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
      
      {/* Dark Backdrop (Click to close) */}
      <div 
        className="absolute inset-0 bg-[#0F2622]/80 backdrop-blur-sm transition-opacity duration-300"
        onClick={handleClose}
      ></div>

      {/* Modal Card */}
      <div className="relative bg-white w-full max-w-md p-8 shadow-2xl transform transition-all duration-300 scale-100 animate-in fade-in zoom-in slide-in-from-bottom-4 rounded-none">
        
        {/* Close Button */}
        <button 
          onClick={handleClose} 
          className="absolute top-4 right-4 text-gray-400 hover:text-[#0F2622] transition-colors"
        >
          <X size={24} />
        </button>

        {/* Content */}
        {!isSuccess ? (
          <>
            <div className="text-center mb-6">
              <span className="text-[#D4C5A9] font-bold text-xs tracking-widest uppercase">Limited Time Offer</span>
              <h2 className="text-2xl font-serif font-bold text-[#0F2622] mt-2">
                Get Your Free Quote
              </h2>
              <p className="text-gray-500 text-sm mt-2">
                Speak to our specialists today. Priority response guaranteed.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#0F2622] transition-colors rounded-none"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="Phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#0F2622] transition-colors rounded-none"
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#0F2622] transition-colors rounded-none"
                />
              </div>
              <textarea
                rows={3}
                placeholder="How can we help you?"
                required
                value={formData.need}
                onChange={(e) => setFormData({...formData, need: e.target.value})}
                className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#0F2622] transition-colors resize-none rounded-none"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#0F2622] text-white font-bold py-4 text-sm uppercase tracking-wider hover:bg-[#15332E] transition-colors flex items-center justify-center gap-2 rounded-none"
              >
                {isSubmitting ? 'Sending...' : 'Get My Quote'}
                {!isSubmitting && <ArrowRight size={16} />}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-10">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-[#0F2622]">Request Received!</h3>
            <p className="text-gray-500 text-sm mt-2">We will contact you shortly.</p>
          </div>
        )}

      </div>
    </div>
  );
}