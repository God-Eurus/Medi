import React, { useState } from 'react';
import { ArrowLeft, Heart, Brain, Ear, LucideKey as Kidney, Stethoscope, Microscope, Activity, Users, Baby, Eye, Zap, Search } from 'lucide-react';

interface TreatmentProps {
  onBack: () => void;
}

export default function Treatment({ onBack }: TreatmentProps) {
  const [activeTab, setActiveTab] = useState('Medical');

  const medicalTreatments = [
    {
      icon: Activity,
      title: 'Bariatric Surgery',
      rating: '94% Rated',
      subtitle: 'Value for Money',
      price: '$1500',
      color: 'text-teal-600'
    },
    {
      icon: Heart,
      title: 'Cardiac Sciences',
      rating: '90% Rated',
      subtitle: 'Value for Money',
      price: '$500',
      color: 'text-red-600'
    },
    {
      icon: Ear,
      title: 'ENT',
      rating: '91% Rated',
      subtitle: 'Value for Money',
      price: '$16000',
      color: 'text-blue-600'
    },
    {
      icon: Kidney,
      title: 'General & Laparoscopic...',
      rating: '90% Rated',
      subtitle: 'Value for Money',
      price: '$1800',
      color: 'text-purple-600'
    },
    {
      icon: Stethoscope,
      title: 'General Medicine',
      rating: '94% Rated',
      subtitle: 'Value for Money',
      price: '$30000',
      color: 'text-green-600'
    },
    {
      icon: Microscope,
      title: 'Haematology & BMT',
      rating: '93% Rated',
      subtitle: 'Value for Money',
      price: '$30000',
      color: 'text-indigo-600'
    },
    {
      icon: Activity,
      title: 'Hepatology',
      rating: '90% Rated',
      subtitle: 'Value for Money',
      price: '$1500',
      color: 'text-teal-600'
    },
    {
      icon: Stethoscope,
      title: 'Infectious Disease',
      rating: '94% Rated',
      subtitle: 'Value for Money',
      price: '$500',
      color: 'text-orange-600'
    },
    {
      icon: Baby,
      title: 'Infertility',
      rating: '92% Rated',
      subtitle: 'Value for Money',
      price: '$16000',
      color: 'text-pink-600'
    },
    {
      icon: Kidney,
      title: 'Nephrology & Urology',
      rating: '92% Rated',
      subtitle: 'Value for Money',
      price: '$1800',
      color: 'text-blue-600'
    },
    {
      icon: Users,
      title: 'Neuro Sciences',
      rating: '90% Rated',
      subtitle: 'Value for Money',
      price: '$30000',
      color: 'text-purple-600'
    },
    {
      icon: Brain,
      title: 'Neurology',
      rating: '91% Rated',
      subtitle: 'Value for Money',
      price: '$30000',
      color: 'text-indigo-600'
    }
  ];

  const aestheticTreatments = [
    {
      icon: Eye,
      title: 'Cosmetic Surgery',
      rating: '95% Rated',
      subtitle: 'Value for Money',
      price: '$2500',
      color: 'text-pink-600'
    },
    {
      icon: Activity,
      title: 'Plastic Surgery',
      rating: '92% Rated',
      subtitle: 'Value for Money',
      price: '$3000',
      color: 'text-purple-600'
    },
    {
      icon: Zap,
      title: 'Laser Treatments',
      rating: '89% Rated',
      subtitle: 'Value for Money',
      price: '$800',
      color: 'text-orange-600'
    }
  ];

  const wellnessTreatments = [
    {
      icon: Heart,
      title: 'Wellness Programs',
      rating: '96% Rated',
      subtitle: 'Value for Money',
      price: '$1200',
      color: 'text-green-600'
    },
    {
      icon: Activity,
      title: 'Rehabilitation',
      rating: '93% Rated',
      subtitle: 'Value for Money',
      price: '$2000',
      color: 'text-blue-600'
    }
  ];

  const getCurrentTreatments = () => {
    switch (activeTab) {
      case 'Medical':
        return medicalTreatments;
      case 'Aesthetic':
        return aestheticTreatments;
      case 'Wellness':
        return wellnessTreatments;
      default:
        return medicalTreatments;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={onBack}
            className="flex items-center text-gray-600 hover:text-blue-600 transition-colors mb-4"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </button>
          
          <nav className="text-sm text-gray-500 mb-6">
            <span>🏠 Treatment</span>
          </nav>

          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Find <span className="text-teal-500">Treatments</span>
          </h1>

          {/* Tab Navigation */}
          <div className="flex space-x-8 border-b border-gray-200">
            {['Medical', 'Aesthetic', 'Wellness'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab
                    ? 'border-teal-500 text-teal-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          {activeTab} <span className="text-teal-500">Treatments</span>
        </h2>

        {/* Treatment Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getCurrentTreatments().map((treatment, index) => {
            const Icon = treatment.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mb-4 ${treatment.color}`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {treatment.title}
                  </h3>
                  
                  <div className="text-sm text-teal-600 font-medium mb-1">
                    {treatment.rating}
                  </div>
                  <div className="text-sm text-gray-500 mb-4">
                    {treatment.subtitle}
                  </div>
                  
                  <div className="text-sm text-orange-600 font-medium">
                    Packages Starting from
                  </div>
                  <div className="text-lg font-bold text-orange-600">
                    {treatment.price}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Need Help Choosing the Right Treatment?
          </h3>
          <p className="text-lg mb-6 text-teal-100">
            Our medical specialists are here to guide you through your treatment options and help you make the best decision for your health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Free Consultation
            </button>
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('showContact'))}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors"
            >
              Contact Our Specialists
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}