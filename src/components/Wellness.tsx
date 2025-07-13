import React, { useState } from 'react';
import { ArrowLeft, Leaf, Sun, Droplet, Activity } from 'lucide-react';

interface WellnessProps {
  onBack: () => void;
}

export default function Wellness({ onBack }: WellnessProps) {
  const [activeTab, setActiveTab] = useState('Ayurveda');

  const wellnessPrograms = {
    Ayurveda: [
      {
        icon: Leaf,
        title: 'Ayurvedic Detox',
        subtitle: '7-Day Panchakarma Program',
        rating: 'Rated 95%',
        price: '$500',
        color: 'text-green-600',
      },
      {
        icon: Leaf,
        title: 'Stress Relief Ayurveda',
        subtitle: '14-Day Rejuvenation Therapy',
        rating: 'Rated 92%',
        price: '$900',
        color: 'text-teal-600',
      },
    ],
    Yoga: [
      {
        icon: Activity,
        title: 'Yoga Retreat',
        subtitle: '10-Day Guided Yoga + Meditation',
        rating: 'Rated 94%',
        price: '$700',
        color: 'text-indigo-600',
      },
      {
        icon: Activity,
        title: 'Healing Through Yoga',
        subtitle: 'Mind & Body Therapy Program',
        rating: 'Rated 91%',
        price: '$650',
        color: 'text-blue-600',
      },
    ],
    Spa: [
      {
        icon: Droplet,
        title: 'Luxury Spa Experience',
        subtitle: '3-Night Himalayan Resort Stay',
        rating: 'Rated 93%',
        price: '$1200',
        color: 'text-pink-600',
      },
      {
        icon: Sun,
        title: 'Skin Rejuvenation',
        subtitle: 'Organic Facial & Body Care',
        rating: 'Rated 90%',
        price: '$450',
        color: 'text-orange-600',
      },
    ],
  };

  const currentPrograms = wellnessPrograms[activeTab as keyof typeof wellnessPrograms];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <button
            onClick={onBack}
            className="flex items-center text-gray-600 hover:text-blue-600 transition mb-4"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </button>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Explore <span className="text-teal-500">Wellness Programs</span>
          </h1>

          {/* Tabs */}
          <div className="flex space-x-6 border-b border-gray-200 mt-4">
            {Object.keys(wellnessPrograms).map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`pb-3 px-1 border-b-2 font-medium text-sm ${
                  activeTab === category
                    ? 'border-teal-500 text-teal-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          {activeTab} <span className="text-teal-500">Packages</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentPrograms.map((program, index) => {
            const Icon = program.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition cursor-pointer"
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4 ${program.color}`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{program.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{program.subtitle}</p>
                  <div className="text-sm text-teal-600 font-medium">{program.rating}</div>
                  <div className="text-lg font-bold text-orange-600 mt-2">{program.price}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Need Help Choosing a Program?</h3>
          <p className="text-lg mb-6 text-teal-100">
            Talk to our wellness experts and customize your experience based on your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Free Consultation
            </button>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('showContact'))}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors"
            >
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
