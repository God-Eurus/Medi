import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQS = [
  {
    question: "Is it safe to travel to India for medical treatment?",
    answer: "Absolutely. We strictly partner with JCI (Joint Commission International) and NABH accredited hospitals. These are the same standards used by top hospitals in the USA and Europe. Our surgeons are board-certified, and many have trained in the UK or US."
  },
  {
    question: "How much money can I actually save?",
    answer: "Patients typically save between 60% to 80% compared to prices in the US, UK, or Canada. For example, a Knee Replacement that costs $45,000 in the US often costs around $6,000 - $8,000 with us, including your hospital stay."
  },
  {
    question: "Do you help with Medical Visas and flights?",
    answer: "Yes. Once you confirm your treatment, we provide an official 'Medical Visa Invitation Letter' from the hospital. Our concierge team then assists you with flight bookings, airport transfers, and hotel accommodation for your companion."
  },
  {
    question: "What happens if there are complications after I return home?",
    answer: "Your care doesn't end when you fly back. We organize scheduled video follow-ups with your surgeon. We also provide you with a comprehensive 'Fit-to-Fly' certificate and detailed medical reports to share with your local GP."
  },
  {
    question: "Do I have to pay the full amount upfront?",
    answer: "No. You usually pay the hospital directly upon arrival or admission. We do not hold your medical funds. In some cases, a small booking deposit might be required to secure the OT (Operation Theatre) slot."
  },
  {
    question: "Will there be a language barrier?",
    answer: "No. All our partner hospitals have English-speaking staff, and doctors are fluent in English. For patients from non-English speaking countries (e.g., Arabic, Russian, French), we provide dedicated language interpreters at no extra cost."
  }
];

export default function FAQ() {
  // CHANGED: Initial state is now null (all closed) instead of 0
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#F2F0EA] font-['Poppins']">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-2 block font-['Montserrat']">
            Common Questions
          </span>
          <h2 className="text-3xl lg:text-4xl font-['Montserrat'] font-bold text-[#0F2622] mb-4">
            Everything You Need <span className="text-[#D4C5A9] italic">To Know</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">
            We believe in complete transparency. Here are answers to the most frequent questions our patients ask.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white border transition-all duration-300 ${
                openIndex === index 
                  ? 'border-[#D4C5A9] shadow-lg' 
                  : 'border-transparent shadow-sm hover:border-gray-200'
              }`}
            >
              {/* Question Header (Clickable) */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <div className="flex items-center gap-4">
                  <HelpCircle 
                    size={20} 
                    className={`transition-colors ${
                      openIndex === index ? 'text-[#D4C5A9]' : 'text-gray-300'
                    }`} 
                  />
                  <span className={`text-lg font-bold font-['Montserrat'] transition-colors ${
                    openIndex === index ? 'text-[#0F2622]' : 'text-gray-700'
                  }`}>
                    {faq.question}
                  </span>
                </div>
                
                {/* Icon Toggle */}
                <div className={`p-2 rounded-full transition-colors ${
                    openIndex === index ? 'bg-[#0F2622] text-white' : 'bg-gray-100 text-gray-500'
                }`}>
                  {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>

              {/* Answer Content (Collapsible) */}
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 pl-[3.75rem] text-gray-500 leading-relaxed text-sm">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm mb-4">Still have questions?</p>
            <a 
                href="https://wa.me/9799636757" 
                className="inline-flex items-center justify-center px-8 py-3 text-sm font-bold text-white transition-all duration-200 bg-[#0F2622] border-2 border-transparent hover:bg-transparent hover:text-[#0F2622] hover:border-[#0F2622] font-['Montserrat'] uppercase tracking-widest"
            >
                Chat with a Specialist
            </a>
        </div>

      </div>
    </section>
  );
}