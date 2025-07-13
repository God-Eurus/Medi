import React from 'react';
import { Users, Clock, MapPin, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why MediVoyage Exists
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We started MediVoyage with one simple belief: access to quality healthcare should not depend on where you live.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?_gl=1*ga69vt*_ga*NjIwNDY4NzAuMTczNjg0MTc1OQ..*_ga_8JE65Q40S6*czE3NTI0MzIyNzgkbzQkZzEkdDE3NTI0MzIzNjUkajUzJGwwJGgw" 
              alt="Medical consultation" 
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Founded by Doctors, Driven by Compassion
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded by doctors, our platform helps patients from Africa, the Middle East, and beyond get timely, transparent treatment at internationally trusted hospitals. We guide you every step of the way — from free second opinions to travel support and post-recovery check-ins.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              MediVoyage isn't just about travel. It's about restoring your health, dignity, and peace of mind.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-blue-50 rounded-xl">
            <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Expert Network</h4>
            <p className="text-gray-600">Connect with world-class medical professionals</p>
          </div>
          <div className="text-center p-6 bg-green-50 rounded-xl">
            <Clock className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Fast Access</h4>
            <p className="text-gray-600">Skip long waiting times for urgent care</p>
          </div>
          <div className="text-center p-6 bg-purple-50 rounded-xl">
            <MapPin className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Global Reach</h4>
            <p className="text-gray-600">Access to hospitals worldwide</p>
          </div>
          <div className="text-center p-6 bg-orange-50 rounded-xl">
            <Award className="h-12 w-12 text-orange-600 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Quality Care</h4>
            <p className="text-gray-600">Only trusted, accredited facilities</p>
          </div>
        </div>
      </div>
    </section>
  );
}