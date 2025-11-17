import React from 'react';
import { 
  Users, 
  Clock, 
  MapPin, 
  Award, 
  HeartHandshake, 
  Stethoscope, 
  ShieldCheck,
  Building,
  Target,
  PhoneCall,
  CheckCircle, // For the hero list
  Folder,      // For certifications
  Server       // For certifications
} from 'lucide-react';

const HeroSection = () => (
 <section className="bg-gray-50 py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
    
    {/* Image (Left Side) - MOVED HERE */}
    <div className="md:w-1/2">
      <img
        src="/img.png" // Using your existing image path
        alt="Doctor consulting with a patient"
        className="w-full max-w-md mx-auto"
      />
    </div>

    {/* Text Content (Right Side) - MOVED HERE */}
    <div className="md:w-1/2 text-center md:text-left">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
  <span className="text-blue-600">Medivoyage</span> Your Health Journey, Safe and Secure.
</h1>
      <ul className="space-y-4 mb-8">
        <li className="flex items-center justify-center md:justify-start text-lg text-gray-600">
          <CheckCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
          Doctor-led guidance, not broker-led portals.
        </li>
        <li className="flex items-center justify-center md:justify-start text-lg text-gray-600">
          <CheckCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
          End-to-end support, from travel to recovery.
        </li>
        <li className="flex items-center justify-center md:justify-start text-lg text-gray-600">
          <CheckCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
          HIPAA-compliant systems to protect your data.
        </li>
      </ul>
    </div>

  </div>
</section>
);

// NEW COMPONENT: For the Practo-style "Our Doctor Insights" certification bar
const CertificationsSection = () => (
  <section className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Certification Item 1 */}
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-3">
            <Building className="h-12 w-12 text-gray-700" />
            <CheckCircle className="h-6 w-6 text-blue-600 bg-white rounded-full absolute -bottom-1 -right-1" />
          </div>
          <p className="text-gray-600 font-medium">JCI & NABH Accredited Hospitals</p>
        </div>

        {/* Certification Item 2 */}
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-3">
            <ShieldCheck className="h-12 w-12 text-gray-700" />
            <CheckCircle className="h-6 w-6 text-blue-600 bg-white rounded-full absolute -bottom-1 -right-1" />
          </div>
          <p className="text-gray-600 font-medium">HIPAA Compliant Data Security</p>
        </div>
        
        {/* Certification Item 3 */}
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-3">
            <Stethoscope className="h-12 w-12 text-gray-700" />
            <CheckCircle className="h-6 w-6 text-blue-600 bg-white rounded-full absolute -bottom-1 -right-1" />
          </div>
          <p className="text-gray-600 font-medium">Expert Doctor-Led Vetting</p>
        </div>
        
        {/* Certification Item 4 */}
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-3">
            <HeartHandshake className="h-12 w-12 text-gray-700" />
            <CheckCircle className="h-6 w-6 text-blue-600 bg-white rounded-full absolute -bottom-1 -right-1" />
          </div>
          <p className="text-gray-600 font-medium">Patient-Centered Counselling</p>
        </div>

      </div>
    </div>
  </section>
);


export default function About() {
  return (
    // The parent container is now a React Fragment <>
    <>
      {/* START: YOUR UNTOUCHED "INDIA" SECTION */}
      <section id="about" className="relative py-20 bg-gray-50 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_-_low_resolution.svg/2000px-World_map_-_low_resolution.svg.png"
            alt="World map background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            🌍 India: Your Trusted Destination for World-Class Healthcare
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            India has become a global leader in healthcare, offering advanced treatments at affordable costs.
            Patients from across the world travel here for its expert doctors, modern hospitals, and faster
            access to life-saving procedures.
          </p>

          {/* Highlights */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left mb-16">
            <div className="p-6 bg-teal-50 rounded-xl shadow-sm">
              <PhoneCall className="h-12 w-12 text-teal-600 mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Speedy Consultation</h4>
              <p className="text-gray-600">contact to consultation within 12 hrs</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-xl shadow-sm">
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 mb-2">2M+ Patients</h4>
              <p className="text-gray-600">choose India every year for treatment</p>
            </div>
            <div className="p-6 bg-green-50 rounded-xl shadow-sm">
              <Clock className="h-12 w-12 text-green-600 mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 mb-2">1.1M+ Medical Visas</h4>
              <p className="text-gray-600">issued annually to international patients</p>
            </div>
            <div className="p-6 bg-purple-50 rounded-xl shadow-sm">
              <MapPin className="h-12 w-12 text-purple-600 mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Globally Renowned Doctors</h4>
              <p className="text-gray-600">leading specialists across all major fields</p>
            </div>
            <div className="p-6 bg-orange-50 rounded-xl shadow-sm">
              <Award className="h-12 w-12 text-orange-600 mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Accredited Hospitals</h4>
              <p className="text-gray-600">with state-of-the-art facilities & tech</p>
            </div>
            <div className="p-6 bg-teal-50 rounded-xl shadow-sm">
              <Stethoscope className="h-12 w-12 text-teal-600 mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Quick Treatment</h4>
              <p className="text-gray-600">diagnosis to surgery in under a week</p>
            </div>
          </div>
        </div>
      </section>
      {/* END: YOUR UNTOUCHED "INDIA" SECTION */}


      {/* START: NEW PRACTO-STYLE SECTIONS */}
      <HeroSection />
      <CertificationsSection />
      {/* END: NEW PRACTO-STYLE SECTIONS */}
       <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Text side */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center lg:text-left">Our Doctor Insights </h2>
        <div className="space-y-8"> {/* Increased spacing slightly for a more open feel */}
          
          {/* Item 1 */}
          <div className="flex items-start gap-4">
            <Building className="h-8 w-8 text-blue-600 flex-shrink-0" />
            <p className="text-lg text-gray-700">
              <span className="font-semibold">Only the Best Hospitals –</span> We partner exclusively with internationally accredited centers (JCI, NABH, NABL, etc).
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex items-start gap-4">
            <Stethoscope className="h-8 w-8 text-blue-600 flex-shrink-0" />
            <p className="text-lg text-gray-700">
              <span className="font-semibold">Expert Selection –</span> As doctors, we identify the right specialists and treatments with precision.
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex items-start gap-4">
            <Target className="h-8 w-8 text-blue-600 flex-shrink-0" />
            <p className="text-lg text-gray-700">
              <span className="font-semibold">Knowledge-Backed Choices –</span> Every recommendation comes from medical expertise, not guesswork or margins.
            </p>
          </div>

          {/* Item 4 */}
          <div className="flex items-start gap-4">
            <HeartHandshake className="h-8 w-8 text-blue-600 flex-shrink-0" />
            <p className="text-lg text-gray-700">
              <span className="font-semibold">Patient-Centered Counselling –</span> We ensure you receive the safest, most effective, and proven care.
            </p>
          </div>

          {/* Item 5 */}
          <div className="flex items-start gap-4">
            <ShieldCheck className="h-8 w-8 text-blue-600 flex-shrink-0" />
            <p className="text-lg text-gray-700">
              <span className="font-semibold">No Middlemen, No Brokers –</span> Direct doctor-to-patient care ensures easier access and lower costs.
            </p>
          </div>

        </div>
      </div>

      {/* Video side */}
      <div className="w-full h-96 rounded-2xl shadow-lg overflow-hidden">
        <iframe
          className="w-full h-full object-cover"
          src="https://www.youtube.com/embed/erei6SZjcck?autoplay=1&mute=1&loop=1&playlist=erei6SZjcck"
          title="Doctor Insights Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </div>
</section>
    </>
    
  );
}