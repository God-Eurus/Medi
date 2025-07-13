import React, { useState } from 'react';
import { ArrowLeft, Star, MapPin, Stethoscope } from 'lucide-react';

interface DoctorProps {
  onBack: () => void;
}

interface Doctor {
  name: string;
  specialty: string;
  hospital: string;
  experience: number;
  location: string;
  rating: number;
  profilePic?: string;
}

const doctors: Doctor[] = [
  {
    name: 'Dr. Rajiv Sharma',
    specialty: 'Cardiologist',
    hospital: 'Fortis Hospital',
    experience: 15,
    location: 'Delhi',
    rating: 4.8,
    profilePic: 'https://via.placeholder.com/100'
  },
  {
    name: 'Dr. Neha Mehta',
    specialty: 'Neurologist',
    hospital: 'AIIMS',
    experience: 12,
    location: 'Mumbai',
    rating: 4.7,
    profilePic: 'https://via.placeholder.com/100'
  },
  {
    name: 'Dr. Sanjay Kumar',
    specialty: 'Orthopedic Surgeon',
    hospital: 'Apollo Hospital',
    experience: 18,
    location: 'Chennai',
    rating: 4.9,
    profilePic: 'https://via.placeholder.com/100'
  }
  // Add more doctors as needed
];

export default function Doctors({ onBack }: DoctorProps) {
  const [search, setSearch] = useState('');

  const filteredDoctors = doctors.filter(d =>
    d.name.toLowerCase().includes(search.toLowerCase()) ||
    d.specialty.toLowerCase().includes(search.toLowerCase()) ||
    d.hospital.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <button
            onClick={onBack}
            className="flex items-center mb-4 text-gray-600 hover:text-blue-600 transition"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </button>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Our <span className="text-teal-500">Expert Doctors</span>
          </h1>

          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search by name, specialty, or hospital..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded-lg mb-6"
          />
        </div>
      </div>

      {/* Doctors Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDoctors.map((doc, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow border flex flex-col"
          >
            <img
              src={doc.profilePic}
              alt={doc.name}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h2 className="text-lg font-semibold text-center text-gray-800">{doc.name}</h2>
            <p className="text-sm text-center text-teal-600 mb-1">{doc.specialty}</p>
            <p className="text-sm text-center text-gray-500 mb-2">{doc.hospital}</p>
            <div className="flex justify-center items-center text-sm text-gray-600 mb-1">
              <Stethoscope className="h-4 w-4 mr-1" /> {doc.experience} yrs experience
            </div>
            <div className="flex justify-center items-center text-sm text-gray-600 mb-1">
              <MapPin className="h-4 w-4 mr-1" /> {doc.location}
            </div>
            <div className="flex justify-center items-center text-yellow-500 mb-3">
              <Star className="h-4 w-4 mr-1" />
              {doc.rating.toFixed(1)} / 5
            </div>
            <button
              className="mt-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              onClick={() => alert(`Consultation requested with ${doc.name}`)}
            >
              Book Consultation
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
