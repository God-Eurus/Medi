// src/components/HospitalDetail.tsx

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import { ArrowLeft, MapPin, Bed, Users, Stethoscope } from 'lucide-react';
import { hospitals } from '../data'; // Assumes your data is in src/data.ts

export default function HospitalDetail() {
  const navigate = useNavigate();
  const { hospitalId } = useParams<{ hospitalId: string }>(); 
  const hospital = hospitals.find(h => h.id === hospitalId);

  if (!hospital) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <h2 className="text-2xl font-bold text-red-600">Hospital Not Found</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto p-4 md:p-8">
        <button onClick={() => navigate(-1)} className="mb-6 flex items-center text-gray-600 hover:text-blue-600">
          <ArrowLeft className="w-5 h-5 mr-2" /> Back to List
        </button>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <img src={hospital.imageUrl} alt={hospital.name} className="w-full h-64 object-cover" />
          <div className="p-8">
            <h1 className="text-4xl font-extrabold text-gray-900">{hospital.name}</h1>
            <p className="mt-2 text-lg text-gray-600 flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-gray-500" /> {hospital.city}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8 border-t pt-6">
              <div className="flex items-center gap-3">
                <Bed className="w-8 h-8 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-500">Total Beds</p>
                  <p className="text-lg font-bold">{hospital.beds}</p>
                </div>
              </div>
              {hospital.icuBeds && (
                <div className="flex items-center gap-3">
                  <Users className="w-8 h-8 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-500">ICU Beds</p>
                    <p className="text-lg font-bold">{hospital.icuBeds}</p>
                  </div>
                </div>
              )}
               <div className="flex items-center gap-3">
                <Stethoscope className="w-8 h-8 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-500">Established</p>
                  <p className="text-lg font-bold">{hospital.established}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t pt-6">
              <h2 className="text-2xl font-bold text-gray-800">Treatments & Specialties</h2>
              <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                {hospital.specialties.map(spec => (
                  <li key={spec} className="flex items-center text-gray-700">
                    <Stethoscope className="w-4 h-4 mr-3 text-teal-600 flex-shrink-0" />
                    {spec}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-10 border-t pt-8 bg-gray-50 -m-8 p-8">
                <h2 className="text-2xl font-bold text-center text-gray-800">Request a Free, No-Obligation Quote</h2>
                <p className="text-center text-gray-600 mt-2">Our patient care team will get back to you within 24 hours.</p>
                <div className="mt-6 max-w-lg mx-auto">
                    <button className="w-full bg-teal-600 text-white font-bold py-3 rounded-lg text-lg hover:bg-teal-700 transition">
                        Contact Patient Support
                    </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}