import React, { useState } from 'react';
import { ArrowRight, Shield, Globe, Heart } from 'lucide-react';

export default function Hero() {
  const [formData, setFormData] = useState({
    specialty: '',
    treatment: '',
    location: '',
    comments: '',
    documents: null as File | null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData(prev => ({ ...prev, documents: e.target.files![0] }));
    }
  };

  const handleSubmit = (action: 'quotation' | 'consultation') => {
    console.log('Form submitted for:', action);
    console.log(formData);
    alert(
      `Your request for ${action === 'quotation' ? 'quotation' : 'free consultation'} has been submitted.`
    );
  };

  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Text */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Welcome to <span className="text-blue-600">My Medivoyage</span>
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Hi! How can we assist you today?
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('showLogin'))}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('showContact'))}
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Get Personalized Help
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Specialty</label>
              <select
                name="specialty"
                value={formData.specialty}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select Specialty</option>
                <option>Cardiology</option>
                <option>Orthopedics</option>
                <option>Oncology</option>
                <option>Neurology</option>
                <option>Cosmetic Surgery</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Treatment</label>
              <select
                name="treatment"
                value={formData.treatment}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select Treatment</option>
                <option>Heart Bypass</option>
                <option>Knee Replacement</option>
                <option>Cancer Therapy</option>
                <option>Hair Transplant</option>
                <option>IVF</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Preferred Location (India)</label>
              <select
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select Location</option>
                <option>Delhi</option>
                <option>Mumbai</option>
                <option>Bangalore</option>
                <option>Chennai</option>
                <option>Hyderabad</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Comments</label>
              <textarea
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                rows={3}
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Any specific condition, symptoms, or preferences?"
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Upload Documents (Optional)</label>
              <div className="flex items-center gap-2 mt-1">
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="border p-2 rounded-lg w-full"
                />
                {formData.documents && (
                  <span className="text-sm text-green-600">✓ Uploaded</span>
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                type="button"
                onClick={() => handleSubmit('quotation')}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors w-full"
              >
                Get Quotations
              </button>
              <button
                type="button"
                onClick={() => handleSubmit('consultation')}
                className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors w-full"
              >
                Schedule Free Specialist Consultation
              </button>
            </div>
          </form>

          {/* Trust Labels */}
          <div className="mt-8 grid grid-cols-3 gap-4">
            <div className="text-center">
              <Shield className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <p className="text-sm font-semibold text-gray-700">Trusted</p>
            </div>
            <div className="text-center">
              <Globe className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <p className="text-sm font-semibold text-gray-700">Global</p>
            </div>
            <div className="text-center">
              <Heart className="h-8 w-8 text-red-600 mx-auto mb-2" />
              <p className="text-sm font-semibold text-gray-700">Caring</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
