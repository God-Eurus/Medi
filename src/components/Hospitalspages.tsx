import React, { useState } from 'react';
import {
    ArrowLeft,
    MapPin,
    Building as HospitalIcon,
    Bed,
    Users,
    Phone
  } from 'lucide-react';
  

interface HospitalType {
  name: string;
  city: string;
  established: string;
  beds: number;
  icuBeds?: number;
}

interface HospitalProps {
  onBack: () => void;
}

export default function Hospital({ onBack }: { onBack: () => void }) {
  const [cityFilter, setCityFilter] = useState<string>('');
  const hospitals: HospitalType[] = [
    { name: 'Fortis Hospital, Noida', city: 'Delhi / NCR', established: '1995', beds: 600, icuBeds: 80 },
    { name: 'Fortis Escorts Heart Institute', city: 'New Delhi', established: '1988', beds: 282, icuBeds: 45 },
    { name: 'Max Healthcare Saket', city: 'New Delhi', established: '2001', beds: 1000, icuBeds: 120 },
    { name: 'Fortis Memorial Research Institute', city: 'Gurgaon', established: '2001', beds: 350, icuBeds: 60 },
    { name: 'Artemis Hospital', city: 'Gurgaon', established: '2007', beds: 400, icuBeds: 70 },
    // ...add more as needed
  ];

  const cities = Array.from(new Set(hospitals.map(h => h.city)));
  const displayed = cityFilter ? hospitals.filter(h => h.city === cityFilter) : hospitals;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto p-6">
          <button onClick={onBack} className="flex items-center text-gray-600 hover:text-blue-600">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Home
          </button>

          <h1 className="text-4xl font-bold text-gray-900 mt-4 mb-6">
            Best <span className="text-teal-600">Hospitals in India</span>
          </h1>

          <div className="flex items-center gap-2 mb-8">
            <MapPin className="w-5 h-5 text-gray-500" />
            <select
              className="border border-gray-300 rounded-lg p-2"
              value={cityFilter}
              onChange={e => setCityFilter(e.target.value)}
            >
              <option value="">All Cities</option>
              {cities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayed.map((h, i) => (
          <div key={i} className="bg-white rounded-xl shadow-sm border p-6 flex flex-col">
            <div className="flex items-center mb-4">
              <HospitalIcon className="w-6 h-6 text-blue-600 mr-2" />
              <h2 className="text-lg font-semibold">{h.name}</h2>
            </div>
            <p className="text-sm text-gray-600 mb-2">
              <Phone className="inline-block w-4 h-4 mr-1" />
              {h.city}
            </p>
            <p className="text-sm text-gray-600 mb-2">Established: {h.established}</p>
            <p className="text-sm text-gray-600 mb-2">
              <Bed className="inline-block w-4 h-4 mr-1" />
              Beds: {h.beds}
            </p>
            {h.icuBeds && (
              <p className="text-sm text-gray-600 mb-4">
                <Users className="inline-block w-4 h-4 mr-1" />
                ICU Beds: {h.icuBeds}
              </p>
            )}
            <button
              onClick={() => alert(`Free quote requested from ${h.name}`)}
              className="mt-auto bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition"
            >
              Get Free Quote
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
