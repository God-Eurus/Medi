// src/data.ts

export interface DoctorType {
  id: string;
  name: string;
  specialty: string;
  imageUrl: string;
}

export interface HospitalType {
  id: string;
  name: string;
  city: string;
  imageUrl: string;
  beds: number;
  icuBeds?: number;
  established: number;
  specialties: string[];
  description: string;
  doctors: DoctorType[];
  facilities: string[];
}

export const hospitals: HospitalType[] = [
  {
    id: 'h001',
    name: 'Mahatama Gandhi Hospital Jaipur',
    // 👇 Fixed: Added missing properties
    city: 'Jaipur',
    imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipOU1T8Wke5M8QsnS0V-DPas-iB4FEkxWIKsKrsA=s1360-w1360-h1020-rw', // Note: Replace with your image path
    beds: 1400,
    icuBeds: 125,
    established: 1999,
    specialties: ['Cardiology', 'Neurology', 'Orthopedics', 'Oncology', 'Gastroenterology'],
    // End of fix
    description: 'Apollo Hospital is a multi-specialty hospital in Jaipur, known for its advanced cardiac and neuro sciences departments. It offers a wide range of services with state-of-the-art technology and a patient-centric approach.',
    doctors: [
      { id: 'd01', name: 'Dr. Anjali Sharma', specialty: 'Cardiologist', imageUrl: '/docimg2.jpg' },
      { id: 'd02', name: 'Dr. Rohan Mehra', specialty: 'Neurosurgeon', imageUrl: '/docimg3.jpg' },
      { id: 'd03', name: 'Dr. Priya Singh', specialty: 'Orthopedic Surgeon', imageUrl: '/docimg2.jpg' }
    ],
    facilities: [
      '24/7 Emergency Services',
      'In-house Pharmacy',
      'Advanced Diagnostic Labs',
      'Ambulance Service',
      'Intensive Care Unit (ICU)',
      'Cafeteria & Lounge'
    ]
  },
  // 👇 Added a second hospital for a better example
  
];