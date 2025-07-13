import React, { useState } from 'react';
import { Plane, Calendar, MapPin, Users, Search, ArrowRight, Clock, Shield } from 'lucide-react';

export default function FlightBooking() {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    departure: '',
    return: '',
    passengers: '1',
    tripType: 'round-trip'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSearch = () => {
    if (!formData.from || !formData.to || !formData.departure) {
      alert('Please fill in all required fields');
      return;
    }
    
    // Create Skyscanner URL with proper formatting
    const fromCode = formData.from.toLowerCase().replace(/\s+/g, '-');
    const toCode = formData.to.toLowerCase().replace(/\s+/g, '-');
    const departureDate = formData.departure.replace(/-/g, '');
    const returnDate = formData.return ? formData.return.replace(/-/g, '') : '';
    
    let skyscannerUrl = `https://www.skyscanner.com/transport/flights/${fromCode}/${toCode}/${departureDate}`;
    
    if (formData.tripType === 'round-trip' && returnDate) {
      skyscannerUrl += `/${returnDate}`;
    }
    
    skyscannerUrl += `/?adults=${formData.passengers}&children=0&adultsv2=${formData.passengers}&childrenv2=&infants=0&cabinclass=economy&rtn=${formData.tripType === 'round-trip' ? '1' : '0'}`;
    
    window.open(skyscannerUrl, '_blank');
  };

  return (
    <section id="flights" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Book Your Medical Travel
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find and book the best flights for your medical journey with our integrated booking system.
          </p>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 shadow-2xl">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-4">Medical Travel Flights</h3>
              <p className="text-blue-100 mb-6">
                Book flights specifically designed for medical travelers with flexible cancellation and medical assistance.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-blue-100">
                  <Shield className="h-5 w-5" />
                  <span>Medical travel insurance included</span>
                </div>
                <div className="flex items-center space-x-3 text-blue-100">
                  <Clock className="h-5 w-5" />
                  <span>Flexible booking for medical appointments</span>
                </div>
                <div className="flex items-center space-x-3 text-blue-100">
                  <Plane className="h-5 w-5" />
                  <span>Powered by Skyscanner</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 bg-white rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Search & Book Flights</h4>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <label className="block">
                  <span className="text-gray-700 font-medium">Trip Type</span>
                  <select
                    name="tripType"
                    value={formData.tripType}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="round-trip">Round Trip</option>
                    <option value="one-way">One Way</option>
                  </select>
                </label>
                <label className="block">
                  <span className="text-gray-700 font-medium">Passengers</span>
                  <select
                    name="passengers"
                    value={formData.passengers}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="1">1 Passenger</option>
                    <option value="2">2 Passengers</option>
                    <option value="3">3 Passengers</option>
                    <option value="4">4+ Passengers</option>
                  </select>
                </label>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <label className="block">
                  <span className="text-gray-700 font-medium">From</span>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      name="from"
                      value={formData.from}
                      onChange={handleInputChange}
                      placeholder="e.g., Lagos, Dubai, Nairobi"
                      className="mt-1 block w-full pl-10 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>
                </label>
                <label className="block">
                  <span className="text-gray-700 font-medium">To</span>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      name="to"
                      value={formData.to}
                      onChange={handleInputChange}
                      placeholder="e.g., Mumbai, Bangkok, Istanbul"
                      className="mt-1 block w-full pl-10 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>
                </label>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <label className="block">
                  <span className="text-gray-700 font-medium">Departure</span>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="date"
                      name="departure"
                      value={formData.departure}
                      onChange={handleInputChange}
                      className="mt-1 block w-full pl-10 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>
                </label>
                {formData.tripType === 'round-trip' && (
                  <label className="block">
                    <span className="text-gray-700 font-medium">Return</span>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input
                        type="date"
                        name="return"
                        value={formData.return}
                        onChange={handleInputChange}
                        className="mt-1 block w-full pl-10 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </label>
                )}
              </div>

              <button
                onClick={handleSearch}
                className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center text-lg"
              >
                <Search className="mr-2 h-5 w-5" />
                Search Medical Travel Flights
              </button>
              
              <p className="text-sm text-gray-500 mt-3 text-center">
                You'll be redirected to Skyscanner to complete your booking with medical travel options
              </p>
            </div>
          </div>
          
          <div className="mt-8 grid md:grid-cols-3 gap-6 text-white">
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <Search className="h-6 w-6" />
              </div>
              <h4 className="font-semibold mb-2">1. Search Flights</h4>
              <p className="text-blue-100 text-sm">Find the best flights for your medical travel dates</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <Shield className="h-6 w-6" />
              </div>
              <h4 className="font-semibold mb-2">2. Medical Coverage</h4>
              <p className="text-blue-100 text-sm">Automatic medical travel insurance and flexible terms</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <Plane className="h-6 w-6" />
              </div>
              <h4 className="font-semibold mb-2">3. Book & Travel</h4>
              <p className="text-blue-100 text-sm">Complete booking with 24/7 medical travel support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}