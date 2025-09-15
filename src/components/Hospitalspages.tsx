import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // ✅ Import Link for navigation
import {
  MapPin,
  Building as HospitalIcon,
  Bed,
  Users,
  Tag 
} from 'lucide-react';
// ✅ Import data and type from your new central data file
import { hospitals, HospitalType } from '../data'; 

// ✅ Removed 'onBack' and 'specialty' props as routing handles this now
export default function Hospitals() {
  const [cityFilter, setCityFilter] = useState<string>('');
  // You can add a specialty filter state here if you want users to filter on this page
  // const [specialtyFilter, setSpecialtyFilter] = useState<string>('');

  const cities = Array.from(new Set(hospitals.map(h => h.city)));

  const displayed = hospitals.filter(h => {
    const matchesCity = cityFilter ? h.city === cityFilter : true;
    // Add specialty filter logic here if you implement it
    // const matchesSpecialty = specialtyFilter ? h.specialties.includes(specialtyFilter) : true;
    return matchesCity; // && matchesSpecialty;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto p-6">
          {/* ✅ Removed the 'Back to Home' button as this is the main page now */}
          
          <h1 className="text-4xl font-bold text-gray-900 mt-4 mb-6">
            Best <span className="text-teal-600">Hospitals in Jaipur</span>
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
        {displayed.map(h => (
          // ✅ Use the unique hospital 'id' for the key prop (React best practice)
          <div key={h.id} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
            <img src={h.imageUrl} alt={`${h.name}`} className="w-full h-48 object-cover" />
            
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center mb-4">
                <HospitalIcon className="w-6 h-6 text-blue-600 mr-2" />
                <h2 className="text-xl font-semibold text-gray-900">{h.name}</h2>
              </div>
              <p className="text-sm text-gray-600 mb-2 flex items-center">
                <MapPin className="inline-block w-4 h-4 mr-1 flex-shrink-0" />
                {h.city}
              </p>
              <p className="text-sm text-gray-600 mb-2">Established: {h.established}</p>
              <p className="text-sm text-gray-600 mb-2 flex items-center">
                <Bed className="inline-block w-4 h-4 mr-1 flex-shrink-0" />
                Beds: {h.beds}
              </p>
              {h.icuBeds && (
                <p className="text-sm text-gray-600 mb-4 flex items-center">
                  <Users className="inline-block w-4 h-4 mr-1 flex-shrink-0" />
                  ICU Beds: {h.icuBeds}
                </p>
              )}

              <div className="flex flex-wrap gap-2 mt-2 mb-4">
                {h.specialties.slice(0, 2).map((s, idx) => ( 
                  <span key={idx} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
                    <Tag className="w-3 h-3 mr-1" />{s}
                  </span>
                ))}
                {h.specialties.length > 2 && (
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                        +{h.specialties.length - 2} more
                    </span>
                )}
              </div>

              {/* ✅ REPLACED <button> with <Link> for navigation */}
              <Link
                to={`/hospital/${h.id}`}
                className="mt-auto block text-center bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition w-full"
              >
                View Details & Get Quote
              </Link>
            </div>
          </div>
        ))}

        {displayed.length === 0 && (
          <p className="text-gray-600 col-span-full text-center py-8">
            No hospitals found for the selected filters.
          </p>
        )}
      </div>
    </div>
  );
}