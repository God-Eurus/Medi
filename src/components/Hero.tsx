import React, { useState } from 'react';
// ✅ 1. Import useNavigate from react-router-dom
import { useNavigate } from 'react-router-dom';
import { Shield, Globe, Heart } from 'lucide-react';

export default function Hero() {
  // ✅ 2. Initialize the navigate function
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    specialty: '',
    treatment: '',
    location: 'Jaipur', // Set a default since it's the only option
    comments: '',
    documents: null as File | null,
  });

  // Specialty → Treatment Mapping (your extensive map goes here)
  const treatmentsMap: Record<string, string[]> = {
    "CARDIAC SCIENCES (CARDIOLOGY AND CTVS)": [
      "Angiography including Non-ionic Contrast",
      "Angioplasty",
      "Arterial Switch Surgery",
      "Atrial Septal Defect (ASD)",
      "Balloon valvuloplasty",
      "Balloon Angioplasty",
      "Balloon Atrial Septostomy",
      "Balloon mitral valvotomy",
      "Bentall Procedure",
      "CABG - Redo",
      "Cardiac Ablation",
      "Cardiac Catheterization",
      "Cardiac Valve Replacement",
      "Closed heart Surgery",
      "CABG (Coronary Artery Bypass Grafting)",
      "Pacemaker-supported cardiac resynchronisation treatment (CRT-P)",
      "Cardiac resynchronisation therapy with a defibrillator (CRT-D)",
      "Device Closure of ASD",
      "Dual Chamber Pacemaker",
      "Electrophysiology (EP) study AND Radiofrequency ablation (RFA)",
      "Glenn procedure",
      "Double Valve Replacement",
      "Heart Port Surgery",
      "ICD Combo Device",
      "Impella implantation",
      "Intra-aortic balloon pump",
      "Left Ventricular Assist Device",
      "Left Ventricular Restoration Surgery",
      "Pacemaker Implant Single Chamber",
      "PDA Closure",
      "Pediatric cardiomyopathy with implant",
      "Pulmonary Valve Replacement",
      "Ross Procedure",
      "TAPVC",
      "TOF Repair",
      "Trans Aortic Valve Replacement",
      "TAVI",
      "VSD Closure Repair",
      "Fontan Procedure",
      "Transmyocardial Revascularization",
      "Atherectomy",
      "Norwood Surgery",
    ],
    "ORTHOPAEDICS": [
      "Acromioclavicular (AC) joint separation",
      "Adolescent idiopathic scoliosis",
      "Ankle arthroscopy",
      "Ankle Arthrodesis",
      "Anterior Cruciate Ligament (ACL) Reconstruction",
      "Arthrodesis",
      "Arthroscopic (minimally invasive) ankle surgery",
      "Boutonniere deformity treatment",
      "Bow Leg Correction",
      "Carpel Tunnel Release",
      "Congenital Limb defect surgery",
      "Congenital Pseudarthrosis of the Tibia (CPT)",
      "Corrective Osteotomy and fixation with bone graft",
      "Corrective Osteotomy Fixation and Ligament Reconstruction Surgery",
      "Debridement of the Achilles tendon",
      "Disc Replacement (Cervical/Lumber)",
      "Distal Clavicle Excision",
      "Femoroacetabular Impingement (FAI) surgery",
      "High Tibial Osteotomy(HTO)",
      "Hip Dysplasia Treatment",
      "Hip Resurfacing Surgery",
      "Knee Arthroscopy",
      "Knock-knee surgery",
      "Lateral ankle ligament reconstruction",
      "Legg-Calve-Perthes Disease (LCPD)",
      "Meniscectomy",
      "Meniscus Repair",
      "Minimally invasive hip replacement",
      "Invasive Knee Replacement Surgery",
      "Open Reduction and Internal Fixation (Orif)",
      "Osteotomy",
      "Palmar Fasciectomy",
      "PCL Reconstruction",
      "Shoulder arthroscopy",
      "Shoulder labral tear surgery",
      "Shoulder Replacement",
      "Shoulder Tendon Repair Rotator Cuff",
      "Thumb Replacement (Wrist Arthroplasty)",
      "Transforaminal Lumbar Interbody Fusion",
      "Total Hip Replacement (B/L)",
      "Total Hip Replacement (U/L)",
      "Total Knee Replacement (B/L)",
      "Total Knee Replacement (U/L)",
      "Arthroscopic Bankart Repair",
      "Autologous Chondrocyte Implantation (ACI)",
      "Limb Lengthening Shortening surgery",
    ],
    "NEURO SCIENCES (NEUROLOGY AND NEUROSURGERY)": [
      "Anterior Lumbar Interbody Fusion (ALIF) surgery",
      "Aneurysm clipping",
      "Anterior Cervical Discectomy",
      "Anterior Cervical Discectomy and Fusion (ACDF)",
      "Artificial Lumber Disc Replacement",
      "Brachial Plexus Injuries/Stereotactic Procedure",
      "Brain Tumour",
      "Carotid endarterectomy",
      "Cerebral Angiogram",
      "Carotid Angioplasty Procedure",
      "Cerebral Dosrsal Rhizotomy",
      "Cervical Corpectomy Procedure",
      "Cervical Decompression",
      "Cervical Disc Replacement Surgery",
      "Cervical Fusion Procedure",
      "Cervical Fusion for tumors",
      "Cervical Laminoplasty",
      "Cranioplasty",
      "Craniotomy",
      "Deep Brain Stimulation",
      "Endoscopic Spine Surgery",
      "Endoscopic Third Ventriculostomy",
      "Endovascular Embolisation of AVM",
      "Endovascular surgery Embolisation of AVM",
      "Epilepsy Surgery",
      "External Ventricular Drainage",
      "Foraminotomy",
      "Keyhole spine surgery",
      "Kyphoplasty",
      "Laminectomy",
      "Lesionectomy",
      "Lumbar Decompression",
      "Lumbar discectomy",
      "Lumbar Puncture",
      "Management of Seizures",
      "Microdiscectomy",
      "Microvascular Decompression (MVD)",
      "Rhizotomy",
      "Scoliosis surgery",
      "Spinal Cord Detethering",
      "Spinal Cord Stimulation",
      "Spinal Decompression and fixation operation",
      "Spinal Fusion",
      "Stroke Treatment",
      "Spina Bifida",
      "Thoracic Interbody Fusion",
      "Pars Repair Surgery",
      "Corpus Callostomy",
      "Vagal Nerve Stimulation",
      "Chronic Cerebrospinal Venous Insufficiency (CCSVI)",
      "Hemispherectomy",
    ],
    "GENERAL SURGERY": [
      "Appendectomy",
      "Abdominal Hysterectomy Surgery",
      "Kasai Procedure",
      "Laparoscopic Gall Bladder removal",
      "Hernia Repair",
      "Microwave Endometrial Ablation",
      "Rectal Polyp Removal",
      "Thyroidectomy",
      "Varicose Vein",
      "Whipple Procedure",
      "EVLT - Varicose Veins (Single Extremity)",
      "Haemorrhoids",
    ],
    "ENT": [
      "Cochlear Implant",
      "Laryngectomy",
      "Nasal Polyp Surgery",
      "Septoplasty",
      "Tympanoplasty",
      "Tonsillectomy",
      "Adenoidectomy",
      "Peritonsillar abscess drainage",
      "Parotidectomy",
      "Anterior skull base surgery",
      "Advanced lateral skull base surgery",
      "Resection of nasopharyngeal tumour",
      "Open reduction and internal fixation of maxilla / mandible / zygoma",
      "Canalopasty For EAC Atresia",
      "Stapedectomy / tympanotomy",
      "Open sinus surgery",
      "Functional Endoscopic Sinus (FESS)",
    ],
    "GYNAECOLOGY": [
      "C-Section",
      "Fibroid Removal Surgery",
      "Laparoscopic Abdominal Hysterectomy",
      "Normal delivery",
      "Polycystic Ovarian Syndrome (PCOS)",
      "Vaginal Myomectomy",
      "Class III radical hysterctomy + BPLND",
      "Vulvectomy + reconstruction procedures",
      "Vaginal repair for vesico-vaginal fistula (Repair for VVF)",
      "Laparotomy for Broad Ligament Hematoma",
      "Closure of Burst Abdomen",
      "Uretero-vaginal / Uterine fistula repair",
      "Reversal of Sterilisation/ Tuboplasty (lap/ open)",
      "Sling Surgeries for Prolapse",
      "Salpingoophorectomy for both BPLN + NORMAL",
      "Burch",
      "Rectovaginal fistula repair",
      "Hysteroscopic Myomectomy",
      "Urethrovaginal fistula repair",
    ],
    "UROLOGY": [
      "ESWL (Extracorporeal Shock Wave Lithotripsy)",
      "Hypospadias Surgery",
      "Kidney Stone Removal",
      "Management of Erectile Dysfunction",
      "Nephrectomy",
      "Penile Implant",
      "Reversal of Vasectomy",
      "Trans Urethral Resection of Bladder Tumour (TURBT)",
      "Transurethral resection of the prostate (TURP)",
      "Vasectomy",
    ],
    "GASTROENTEROLOGY": [
      "ERCP (Diagnostic)",
      "Capsule Endoscopy",
      "Endoscopy (UGI Endoscopy)",
      "Choledochoduodenostomy",
      "Porto Caval Anastomosis",
      "Gastrectomy",
      "Oesophagectomy",
      "Heller Myotomy",
      "Sigmoid Resection",
      "Gastrojejunostomy",
      "Hiatus Hernia Repair",
    ],
    "BARIATRIC SURGERIES": ["Gastric Bypass", "Lap Gastric Banding", "Sleeve Gastrectomy"],
    "INFERTILITY": ["Intrauterine insemination", "In vitro fertilisation (IVF)"],
    "OPTHALMOLOGY": [
      "Cornea Transplant",
      "Lasik Surgery",
      "Macular Degeneration Surgery",
      "Vitrectomy",
      "Cataract",
    ],
    "PLASTIC AND RECONSTRUCTIVE SURGERIES": [
      "Ear Correction",
      "Scar Revision",
      "Spider Veins (Sclerotherapy)",
      "Liposuction Surgery",
      "Hair transplant",
      "Cleft Lip and Palate Repair",
      "Hand Microsurgery",
    ],
    "PSYCHIATRY": [
      "Anxiety Disorder Treatment",
      "Bipolar Disorder Treatment",
      "Depression Disorder Treatment",
      "Obsessive-Compulsive Disorder",
      "Schizophrenia Disorder Treatment",
      "Substance Use Disorder Treatment",
    ],
    "RADIATIONAL ONCOLOGY": [
      "Proton Therapy",
      "Chimeric Antigen Receptor T-cell therapy",
      "Cyberknife Treatment",
      "Stereotactic Radio Therapy",
      "Intensity-modulated radiotherapy (IMRT)",
      "Gamma Knife Treatment",
    ],
    "SURGICAL ONCOLOGY": [],
    "PAEDIATRIC SURGERIES": [],
    "DENTISTRY": [],
    // --- Retaining other original categories that were not in the new list ---
    "ONCOLOGY (MEDICAL, SURGICAL AND RADTIONAL ONCOLOGY)": [
      "Cancer Therapy",
      "Chemotherapy",
      "Radiotherapy",
      "Bone Marrow Transplant",
      "Surgical Oncology"
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
    "UROLOGY AND NEPHROLOGY": [
      "Kidney Transplant",
      "Dialysis",
      "Prostate Surgery",
      "Stone Removal",
      "Urethral Reconstruction"
    ],
    "IVF AND INFERTILITY": [
      "IVF",
      "ICSI",
      "Egg Freezing",
      "Surrogacy",
      "Embryo Transfer"
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
    "OTHERS": ["Custom / Not Listed"],
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      ...(name === "specialty" ? { treatment: "" } : {}) // Reset treatment if specialty changes
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData(prev => ({ ...prev, documents: e.target.files![0] }));
    }
  };

  // ✅ 3. Update handleSubmit to use navigate
  const handleSubmit = (action: 'quotation' | 'consultation') => {
    console.log('Form submitted for:', action, formData);

    // Create URL query parameters from the form data to filter the hospital list
    const params = new URLSearchParams();
    if (formData.specialty) {
      params.append('specialty', formData.specialty);
    }
    if (formData.treatment) {
      params.append('treatment', formData.treatment);
    }

    // Navigate to the hospitals page with the selected filters
    navigate(`/hospitals?${params.toString()}`);
  };

  const availableTreatments =
    formData.specialty && treatmentsMap[formData.specialty]
      ? treatmentsMap[formData.specialty]
      : [];

  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Welcome to <span className="text-blue-600">Medivoyage</span>
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Hi! How can we assist you today?
          </p>
        </div>

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
                  <option key={specialty} value={specialty}>{specialty}</option>
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
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100"
              >
                <option value="">
                  {formData.specialty ? "Select Treatment" : "Select a Specialty first"}
                </option>
                {availableTreatments.map(treat => (
                  <option key={treat} value={treat}>{treat}</option>
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
                <option value="Jaipur">Jaipur</option>
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
              <div className="mt-1">
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
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
              <button
                type="button"
                // ✅ Corrected this button's action
                onClick={() => handleSubmit('consultation')}
                className="bg-gray-200 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors w-full"
              >
                Get Consultation
              </button>
            </div>
          </form>

          {/* Trust Labels */}
          <div className="mt-8 grid grid-cols-3 gap-4 border-t pt-6">
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