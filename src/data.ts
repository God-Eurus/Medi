// src/data.ts

export interface HospitalType {
  id: string; 
  name: string;
  city: string;
  established: string;
  beds: number;
  icuBeds?: number;
  specialties: string[];
  imageUrl: string;
}

export const hospitals: HospitalType[] = [
 { 
  id: 'mgm-jaipur',
  name: 'Mahatma Gandhi Hospital', 
  city: 'Jaipur', 
  established: '2007', // ✅ ADDED
  beds: 400,           // ✅ ADDED
  icuBeds: 70,         // ✅ ADDED (optional, but good to include)
  specialties: ['CARDIAC SCIENCES', 'GENERAL SURGERY', 'UROLOGY AND NEPHROLOGY'], // ✅ Populated array
  imageUrl: 'https://www.mgmch.org/images/expect.jpg' // ✅ ADDED
},
  // ... more hospitals
];