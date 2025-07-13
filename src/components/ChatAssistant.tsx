import React, { useState, useRef, useEffect } from 'react';
import { Send, X, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatAssistantProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ChatAssistant({ isOpen, onClose }: ChatAssistantProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your MediVoyage AI assistant. I can help you with information about medical travel, our services, and answer any questions you might have. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Greetings
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return "Hello! Welcome to MediVoyage. I'm your AI medical travel assistant. I can help you with:\n\n• Information about medical treatments abroad\n• Flight booking assistance\n• Cost estimates and insurance\n• Hospital recommendations\n• Travel planning\n\nWhat would you like to know?";
    }
    
    // Services and general info
    if (lowerMessage.includes('service') || lowerMessage.includes('what do you do') || lowerMessage.includes('about')) {
      return "MediVoyage is a medical travel platform founded by doctors. We offer:\n\n🏥 **Free Second Opinions** - Expert medical opinions at no cost\n✈️ **Travel Coordination** - Complete flight and accommodation booking\n👨‍⚕️ **Medical Consultations** - Connect with top specialists worldwide\n🛡️ **24/7 Support** - Round-the-clock assistance\n❤️ **Post-Recovery Care** - Continued support after treatment\n\nWe help patients from Africa, Middle East, and beyond access quality healthcare faster and safer.";
    }
    
    // Flight and travel
    if (lowerMessage.includes('flight') || lowerMessage.includes('travel') || lowerMessage.includes('book') || lowerMessage.includes('ticket')) {
      return "✈️ **Flight Booking Made Easy:**\n\n• Search flights directly on our website\n• Medical travel insurance included\n• Flexible cancellation for medical appointments\n• Partnership with Skyscanner for best prices\n• 24/7 travel support\n\nYou can book flights in the 'Book Flights' section above. We also arrange:\n• Airport assistance\n• Medical equipment transport\n• Accommodation near hospitals\n• Local transportation\n\nWould you like help finding flights for a specific destination?";
    }
    
    // Cost and pricing
    if (lowerMessage.includes('cost') || lowerMessage.includes('price') || lowerMessage.includes('expensive') || lowerMessage.includes('money') || lowerMessage.includes('fee')) {
      return "💰 **Transparent Pricing:**\n\n**Free Services:**\n• Second medical opinions\n• Initial consultations\n• Treatment plan reviews\n\n**Paid Services:**\n• Treatment costs (vary by procedure/location)\n• Travel arrangements\n• Accommodation\n\n**Cost Savings:**\n• Up to 60-80% less than US/EU prices\n• Insurance assistance available\n• Payment plans offered\n• No hidden fees\n\nWould you like a cost estimate for a specific treatment? I can connect you with our specialists.";
    }
    
    // Countries and destinations
    if (lowerMessage.includes('country') || lowerMessage.includes('where') || lowerMessage.includes('location') || lowerMessage.includes('destination')) {
      return "🌍 **Top Medical Destinations:**\n\n**India** - Advanced cardiac, cancer, orthopedic care\n**Thailand** - Cosmetic surgery, dental, wellness\n**Turkey** - Hair transplant, cosmetic, cardiac\n**Singapore** - High-tech treatments, cancer care\n**UAE** - Luxury medical tourism, specialized care\n**Germany** - Cancer treatment, advanced diagnostics\n**South Korea** - Cosmetic surgery, advanced technology\n\n**We serve patients from:**\n• Africa (Nigeria, Kenya, Ghana, etc.)\n• Middle East (UAE, Saudi Arabia, etc.)\n• Other regions worldwide\n\nWhich type of treatment are you considering?";
    }
    
    // Doctors and specialists
    if (lowerMessage.includes('doctor') || lowerMessage.includes('specialist') || lowerMessage.includes('surgeon') || lowerMessage.includes('physician')) {
      return "👨‍⚕️ **World-Class Medical Experts:**\n\n• **Carefully Vetted** - All doctors are internationally certified\n• **Specialized Care** - Experts in specific conditions\n• **Accredited Hospitals** - JCI and ISO certified facilities\n• **Language Support** - English-speaking medical teams\n• **Experience** - Treating international patients\n\n**Specialties Available:**\n• Cardiology & Cardiac Surgery\n• Oncology & Cancer Treatment\n• Orthopedics & Joint Replacement\n• Neurology & Brain Surgery\n• Fertility & IVF\n• Cosmetic & Plastic Surgery\n\nWhat medical specialty do you need?";
    }
    
    // Emergency and urgent care
    if (lowerMessage.includes('emergency') || lowerMessage.includes('urgent') || lowerMessage.includes('asap') || lowerMessage.includes('immediate')) {
      return "🚨 **Emergency Medical Travel:**\n\n**Immediate Action Required:**\n• Call local emergency services: 911/999/112\n• For urgent medical travel: +1 (555) 911-HELP\n\n**Our Emergency Services:**\n• 24/7 emergency hotline\n• Expedited consultations (within hours)\n• Emergency flight arrangements\n• Medical evacuation coordination\n• Direct hospital admissions\n\n**Response Times:**\n• Emergency: Within 2-4 hours\n• Urgent: Within 24 hours\n• Standard: 2-3 days\n\nIs this a medical emergency requiring immediate assistance?";
    }
    
    // Insurance
    if (lowerMessage.includes('insurance') || lowerMessage.includes('coverage') || lowerMessage.includes('claim')) {
      return "🛡️ **Insurance & Coverage:**\n\n**We Accept:**\n• International health insurance\n• Travel medical insurance\n• Self-pay patients\n• Corporate health plans\n\n**Our Assistance:**\n• Insurance pre-authorization\n• Claims processing support\n• Direct billing arrangements\n• Payment plan options\n\n**Coverage Includes:**\n• Medical treatment costs\n• Travel insurance\n• Accommodation coverage\n• Emergency evacuation\n\nDo you have existing insurance coverage you'd like us to verify?";
    }
    
    // Specific treatments
    if (lowerMessage.includes('cancer') || lowerMessage.includes('oncology') || lowerMessage.includes('tumor')) {
      return "🎗️ **Cancer Treatment Abroad:**\n\n**Advanced Treatments Available:**\n• Chemotherapy & Radiation\n• Immunotherapy & Targeted therapy\n• Surgical oncology\n• Bone marrow transplants\n• Proton therapy\n\n**Top Destinations:**\n• India - Cost-effective, advanced care\n• Germany - Cutting-edge technology\n• Singapore - Precision medicine\n\n**Our Support:**\n• Free second opinions from oncologists\n• Treatment plan coordination\n• Medical visa assistance\n• Family accommodation\n\nWhat type of cancer treatment are you seeking?";
    }
    
    if (lowerMessage.includes('heart') || lowerMessage.includes('cardiac') || lowerMessage.includes('surgery')) {
      return "❤️ **Cardiac Care Excellence:**\n\n**Procedures Available:**\n• Bypass surgery\n• Valve replacement\n• Angioplasty & stenting\n• Heart transplants\n• Pediatric cardiac surgery\n\n**Leading Destinations:**\n• India - World-class cardiac centers\n• Thailand - Advanced technology\n• Turkey - Experienced surgeons\n\n**Success Rates:**\n• 95%+ success rates\n• International standards\n• Experienced surgical teams\n\nWould you like information about specific cardiac procedures?";
    }
    
    // Contact and next steps
    if (lowerMessage.includes('contact') || lowerMessage.includes('speak') || lowerMessage.includes('call') || lowerMessage.includes('talk')) {
      return "📞 **Get in Touch:**\n\n**Immediate Contact:**\n• Phone: +1 (555) 123-4567\n• Email: info@medivoyage.com\n• Emergency: +1 (555) 911-HELP\n\n**Next Steps:**\n1. **Free Consultation** - Discuss your medical needs\n2. **Second Opinion** - Get expert medical review\n3. **Treatment Plan** - Customized care pathway\n4. **Travel Arrangement** - Complete booking support\n\n**Response Time:** Within 24 hours\n\nWould you like me to schedule a free consultation call for you?";
    }
    
    // Default response with more helpful options
    return "Thank you for your question! I'm here to help with medical travel information. \n\n**I can assist you with:**\n• Treatment options and destinations\n• Cost estimates and insurance\n• Flight booking and travel planning\n• Hospital and doctor recommendations\n• Emergency medical travel\n\n**Popular Questions:**\n• \"What treatments are available in India?\"\n• \"How much does cardiac surgery cost?\"\n• \"Can you help book flights?\"\n• \"Which hospitals do you recommend?\"\n\nWhat specific information would you like to know about medical travel?";
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(inputText),
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 w-96 h-[500px] bg-white rounded-lg shadow-2xl border z-50 flex flex-col">
      {/* Header */}
      <div className="bg-blue-600 text-white p-4 rounded-t-lg flex items-center justify-between">
        <div className="flex items-center">
          <Bot className="h-6 w-6 mr-2" />
          <div>
            <h3 className="font-semibold">MediVoyage Assistant</h3>
            <p className="text-xs text-blue-100">Online now</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="text-white hover:bg-blue-700 p-1 rounded"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg ${
                message.sender === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              <div className="flex items-start space-x-2">
                {message.sender === 'bot' && (
                  <Bot className="h-4 w-4 mt-0.5 text-blue-600" />
                )}
                {message.sender === 'user' && (
                  <User className="h-4 w-4 mt-0.5 text-white" />
                )}
                <div>
                  <p className="text-sm">{message.text}</p>
                  <p className={`text-xs mt-1 ${
                    message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-100 p-3 rounded-lg">
              <div className="flex items-center space-x-2">
                <Bot className="h-4 w-4 text-blue-600" />
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputText.trim()}
            className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}