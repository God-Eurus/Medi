import React from 'react';
import { Stethoscope, Plane, Phone, FileText, Heart, Shield } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: FileText,
      title: "Free Second Opinions",
      description: "Get expert medical opinions from leading specialists worldwide at no cost.",
      color: "blue"
    },
    {
      icon: Stethoscope,
      title: "Medical Consultations",
      description: "Connect with top doctors and specialists for comprehensive medical evaluations.",
      color: "green"
    },
    {
      icon: Plane,
      title: "Travel Coordination",
      description: "Complete travel planning including flights, accommodation, and local transport.",
      color: "purple"
    },
    {
      icon: Phone,
      title: "24/7 Support",
      description: "Round-the-clock assistance throughout your medical journey.",
      color: "orange"
    },
    {
      icon: Heart,
      title: "Post-Recovery Care",
      description: "Continued support and follow-up care after your treatment.",
      color: "red"
    },
    {
      icon: Shield,
      title: "Insurance Assistance",
      description: "Help navigating insurance coverage and payment options.",
      color: "indigo"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-50 text-blue-600",
      green: "bg-green-50 text-green-600",
      purple: "bg-purple-50 text-purple-600",
      orange: "bg-orange-50 text-orange-600",
      red: "bg-red-50 text-red-600",
      indigo: "bg-indigo-50 text-indigo-600"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Comprehensive Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From initial consultation to post-recovery care, we're with you every step of your medical journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className={`w-16 h-16 rounded-lg ${getColorClasses(service.color)} flex items-center justify-center mb-6`}>
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}