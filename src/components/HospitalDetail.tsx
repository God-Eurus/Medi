// src/components/HospitalDetail.tsx

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Bed, Users, Stethoscope, UserRound, CheckCircle } from 'lucide-react';
import { hospitals } from '../data'; // Assumes your data is in src/data.ts

export default function HospitalDetail() {
  const navigate = useNavigate();
  const { hospitalId } = useParams<{ hospitalId: string }>();
  const hospital = hospitals.find(h => h.id === hospitalId);

  if (!hospital) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <h2 className="text-2xl font-bold text-red-600">Hospital Not Found</h2>
        <button onClick={() => navigate(-1)} className="ml-4 text-blue-600 hover:underline">Go Back</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto p-4 md:p-8">
        <button onClick={() => navigate(-1)} className="mb-6 flex items-center text-gray-600 hover:text-blue-600 transition-colors">
          <ArrowLeft className="w-5 h-5 mr-2" /> Back to List
        </button>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <img src={hospital.imageUrl} alt={hospital.name} className="w-full h-72 object-cover" />
          
          <div className="p-6 md:p-10">
            {/* --- HEADER --- */}
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">{hospital.name}</h1>
            <p className="mt-2 text-lg text-gray-600 flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-gray-500 flex-shrink-0" /> {hospital.city}
            </p>

            {/* --- DESCRIPTION --- */}
            <div className="mt-6 border-t pt-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-3">About the Hospital</h2>
                <p className="text-gray-700 leading-relaxed">{hospital.description}</p>
            </div>

            {/* --- STATS BAR --- */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8">
              <div className="flex items-center gap-4 bg-blue-50 p-4 rounded-lg">
                <Bed className="w-8 h-8 text-blue-600 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500">Total Beds</p>
                  <p className="text-xl font-bold text-gray-900">{hospital.beds}</p>
                </div>
              </div>
              {hospital.icuBeds && (
                <div className="flex items-center gap-4 bg-blue-50 p-4 rounded-lg">
                  <Users className="w-8 h-8 text-blue-600 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500">ICU Beds</p>
                    <p className="text-xl font-bold text-gray-900">{hospital.icuBeds}</p>
                  </div>
                </div>
              )}
               <div className="flex items-center gap-4 bg-blue-50 p-4 rounded-lg">
                <Stethoscope className="w-8 h-8 text-blue-600 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500">Established</p>
                  <p className="text-xl font-bold text-gray-900">{hospital.established}</p>
                </div>
              </div>
            </div>

            {/* --- TREATMENTS & SPECIALTIES --- */}
            <div className="mt-10 border-t pt-8">
              <h2 className="text-2xl font-bold text-gray-800">Treatments & Specialties</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {hospital.specialties.map(spec => (
                  <span key={spec} className="bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-2 rounded-full">
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            {/* --- TOP DOCTORS --- */}
            <div className="mt-10 border-t pt-8">
              <h2 className="text-2xl font-bold text-gray-800">Meet Our Top Doctors</h2>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {hospital.doctors.map(doctor => (
                  <div key={doctor.id} className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                    <img src={doctor.imageUrl} alt={doctor.name} className="w-24 h-24 rounded-full mx-auto object-cover mb-4 border-2 border-blue-200" />
                    <h3 className="font-bold text-lg text-gray-900">{doctor.name}</h3>
                    <p className="text-blue-600 font-medium">{doctor.specialty}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* --- FACILITIES --- */}
            <div className="mt-10 border-t pt-8">
                <h2 className="text-2xl font-bold text-gray-800">Facilities & Amenities</h2>
                <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                    {hospital.facilities.map(facility => (
                        <li key={facility} className="flex items-center text-gray-700">
                            <CheckCircle className="w-5 h-5 mr-3 text-blue-600 flex-shrink-0" />
                            {facility}
                        </li>
                    ))}
                </ul>
            </div>
          </div>
          
          {/* --- CTA / QUOTE --- */}
          <div className="mt-10 bg-gray-100 p-8 text-center">
              <h2 className="text-3xl font-bold text-gray-800">Ready for the Next Step?</h2>
              <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Our dedicated patient support team is available 24/7 to assist you with quotes, appointments, and any questions you may have.</p>
              <div className="mt-6">
                  <button className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-blue-700 transition-transform hover:scale-105">
                      Contact Patient Support
                  </button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}