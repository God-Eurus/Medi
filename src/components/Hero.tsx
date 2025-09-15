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

  // Specialty → Treatment Mapping
  const treatmentsMap: Record<string, string[]> = {
    "CARDIAC SCIENCES (CARDIOLOGY AND CTVS)": [
      "Heart Bypass",
      "Angioplasty",
      "Valve Replacement",
      "Pacemaker Implant",
      "Open Heart Surgery"
    ],
    "ORTHOPAEDICS": [
      "Knee Replacement",
      "Hip Replacement",
      "Spinal Surgery",
      "Arthroscopy",
      "Fracture Fixation"
    ],
    "NEURO SCIENCES (NEUROLOGY AND NEUROSURGERY)": [
      "Brain Tumor Surgery",
      "Spinal Surgery",
      "Stroke Management",
      "Epilepsy Surgery",
      "Parkinson’s Treatment"
    ],
    "ONCOLOGY (MEDICAL, SURGICAL AND RADTIONAL ONCOLOGY)": [
      "Cancer Therapy",
      "Chemotherapy",
      "Radiotherapy",
      "Bone Marrow Transplant",
      "Surgical Oncology"
    ],
    "PLASTIC AND RECONSTRUCTIVE SURGERIES": [
      "Reconstructive Surgery",
      "Burn Surgery",
      "Cleft Lip/Palate Repair",
      "Scar Revision",
      "Cosmetic Enhancements"
    ],
    "GENERAL SURGERY": [
      "Appendectomy",
      "Gallbladder Removal",
      "Hernia Repair",
      "Laparoscopic Surgery",
      "Thyroid Surgery"
    ],
    "GYNAECOLOGY AND OBSTETRICS": [
      "Normal Delivery",
      "C-Section",
      "Hysterectomy",
      "Fibroid Removal",
      "Endometriosis Surgery"
    ],
    "GASTROENTEROLOGY (AND SURGRICAL GASTRO)": [
      "Colonoscopy",
      "Liver Transplant",
      "Endoscopy",
      "Gallbladder Surgery",
      "Bariatric Surgery"
    ],
    "ENT": [
      "Cochlear Implant",
      "Sinus Surgery",
      "Tonsillectomy",
      "Hearing Loss Treatment",
      "Thyroid Surgery"
    ],
    "UROLOGY AND NEPHROLOGY": [
      "Kidney Transplant",
      "Dialysis",
      "Prostate Surgery",
      "Stone Removal",
      "Urethral Reconstruction"
    ],
    "BARIATRIC SURGERIES": [
      "Gastric Bypass",
      "Sleeve Gastrectomy",
      "Adjustable Gastric Band",
      "Biliopancreatic Diversion"
    ],
    "IVF AND INFERTILITY": [
      "IVF",
      "ICSI",
      "Egg Freezing",
      "Surrogacy",
      "Embryo Transfer"
    ],
    "OPTHALMOLOGY": [
      "Cataract Surgery",
      "LASIK",
      "Retinal Surgery",
      "Corneal Transplant",
      "Glaucoma Surgery"
    ],
    "PSYCHIATRY": [
      "Depression Management",
      "Anxiety Disorders",
      "Bipolar Disorder Treatment",
      "Addiction Therapy",
      "Counseling"
    ],
    "DENTISTRY": [
      "Root Canal",
      "Dental Implants",
      "Orthodontics (Braces)",
      "Tooth Extraction",
      "Cosmetic Dentistry"
    ],
    "PAEDIATRIC SURGERIES (ALL)": [
      "Pediatric Heart Surgery",
      "Pediatric Urology",
      "Cleft Lip/Palate Repair",
      "Pediatric Neurosurgery",
      "Pediatric Orthopedics"
    ],
    "GENERAL MEDICINE": [
      "Diabetes Management",
      "Hypertension Treatment",
      "Thyroid Disorders",
      "Infectious Diseases",
      "Routine Check-ups"
    ],
    "INTERVENTIONAL RADIOLOGY": [
      "Angioplasty",
      "Embolization",
      "Biopsy",
      "Stent Placement",
      "Vertebroplasty"
    ],
    "ORAL AND MAXILLOFACIAL SURGERY": [
      "Jaw Surgery",
      "Dental Implants",
      "Facial Trauma Repair",
      "Wisdom Tooth Extraction",
      "Cleft Jaw Surgery"
    ],
    "PALLIATIVE CARE": [
      "Pain Management",
      "End-of-Life Care",
      "Symptom Control",
      "Counseling",
      "Home Care Support"
    ],
    "GERAITRIC MEDICINE": [
      "Elderly Care",
      "Dementia Management",
      "Arthritis Care",
      "Chronic Disease Management",
      "Fall Prevention"
    ],
    "PHYSICAL MEDICINE AND REHABILITATION": [
      "Physiotherapy",
      "Stroke Rehabilitation",
      "Sports Injury Rehab",
      "Occupational Therapy",
      "Speech Therapy"
    ],
    "RESPIRATORY AND PULMONOLOGY MEDICINE": [
      "Asthma Management",
      "COPD Treatment",
      "Lung Cancer Care",
      "Pulmonary Rehabilitation",
      "Bronchoscopy"
    ],
    "OTHERS": ["Custom / Not Listed"]
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      ...(name === "specialty" ? { treatment: "" } : {}) // reset treatment if specialty changes
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData(prev => ({ ...prev, documents: e.target.files![0] }));
    }
  };

  const handleSubmit = (action: 'quotation' | 'consultation') => {
    console.log('Form submitted for:', action);
    console.log(formData);

    // Trigger navigation to Hospitals page, passing form data
    window.dispatchEvent(
      new CustomEvent('showHospitals', { detail: { formData } })
    );
  };

  // ✅ This must be OUTSIDE handleSubmit
  const availableTreatments =
    formData.specialty && treatmentsMap[formData.specialty]
      ? treatmentsMap[formData.specialty]
      : [];

  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Text */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Welcome to <span className="text-blue-600">Medivoyage</span>
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Hi! How can we assist you today?
          </p>

        </div>

        {/* Form Section */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Get Personalized Help
          </h2>
          <form className="space-y-4">
            {/* Specialty */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Specialty</label>
              <select
                name="specialty"
                value={formData.specialty}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select Specialty</option>
                {Object.keys(treatmentsMap).map(specialty => (
                  <option key={specialty}>{specialty}</option>
                ))}
              </select>
            </div>

            {/* Treatment */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Treatment</label>
              <select
                name="treatment"
                value={formData.treatment}
                onChange={handleChange}
                disabled={!formData.specialty}
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">
                  {formData.specialty ? "Select Treatment" : "Select a Specialty first"}
                </option>
                {availableTreatments.map(treat => (
                  <option key={treat}>{treat}</option>
                ))}
              </select>
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Preferred Location (India)</label>
              <select
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select Location</option>
                <option>Jaipur</option>
              </select>
            </div>

            {/* Comments */}
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

            {/* File Upload */}
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

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                type="button"
                onClick={() => handleSubmit('quotation')}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors w-full"
              >
                Get Quotations
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
