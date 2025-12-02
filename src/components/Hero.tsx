import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  ShieldCheck, 
  Globe, 
  Heart, 
  ChevronDown,
  Paperclip
} from 'lucide-react';

// Common Country Codes List
const COUNTRY_CODES = [
  { code: "+91", country: "IN", label: "🇮🇳 +91" },
  { code: "+1", country: "US", label: "🇺🇸 +1" },
  { code: "+44", country: "UK", label: "🇬🇧 +44" },
  { code: "+971", country: "UAE", label: "🇦🇪 +971" },
  { code: "+61", country: "AU", label: "🇦🇺 +61" },
  { code: "+1", country: "CA", label: "🇨🇦 +1" },
  { code: "+49", country: "DE", label: "🇩🇪 +49" },
  { code: "+33", country: "FR", label: "🇫🇷 +33" },
  { code: "+81", country: "JP", label: "🇯🇵 +81" },
  { code: "+65", country: "SG", label: "🇸🇬 +65" },
  { code: "+966", country: "SA", label: "🇸🇦 +966" },
  { code: "+974", country: "QA", label: "🇶🇦 +974" },
  { code: "+968", country: "OM", label: "🇴🇲 +968" },
  { code: "+965", country: "KW", label: "🇰🇼 +965" },
  { code: "+880", country: "BD", label: "🇧🇩 +880" },
  { code: "+977", country: "NP", label: "🇳🇵 +977" },
  { code: "+94", country: "LK", label: "🇱🇰 +94" },
];

export default function Hero() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    countryCode: '+91', // Default Country Code
    phone: '',
    email: '',
    specialty: '',
    treatment: '',
    location: 'Jaipur',
    comments: '',
    documents: null
  });

  // Extensive treatments map (Collapsed for brevity, same as before)
  const treatmentsMap = {
    "CARDIAC SCIENCES (CARDIOLOGY AND CTVS)": [
      "Angiography including Non-ionic Contrast", "Angioplasty", "Arterial Switch Surgery",
      "Atrial Septal Defect (ASD)", "Balloon valvuloplasty", "Balloon Angioplasty",
      "Balloon Atrial Septostomy", "Balloon mitral valvotomy", "Bentall Procedure",
      "CABG - Redo", "Cardiac Ablation", "Cardiac Catheterization", "Cardiac Valve Replacement",
      "Closed heart Surgery", "CABG (Coronary Artery Bypass Grafting)",
      "Pacemaker-supported cardiac resynchronisation treatment (CRT-P)",
      "Cardiac resynchronisation therapy with a defibrillator (CRT-D)", "Device Closure of ASD",
      "Dual Chamber Pacemaker", "Electrophysiology (EP) study AND Radiofrequency ablation (RFA)",
      "Glenn procedure", "Double Valve Replacement", "Heart Port Surgery", "ICD Combo Device",
      "Impella implantation", "Intra-aortic balloon pump", "Left Ventricular Assist Device",
      "Left Ventricular Restoration Surgery", "Pacemaker Implant Single Chamber", "PDA Closure",
      "Pediatric cardiomyopathy with implant", "Pulmonary Valve Replacement", "Ross Procedure",
      "TAPVC", "TOF Repair", "Trans Aortic Valve Replacement", "TAVI", "VSD Closure Repair",
      "Fontan Procedure", "Transmyocardial Revascularization", "Atherectomy", "Norwood Surgery",
    ],
    "ORTHOPAEDICS": [
      "Acromioclavicular (AC) joint separation", "Adolescent idiopathic scoliosis",
      "Ankle arthroscopy", "Ankle Arthrodesis", "Anterior Cruciate Ligament (ACL) Reconstruction",
      "Arthrodesis", "Arthroscopic (minimally invasive) ankle surgery", "Boutonniere deformity treatment",
      "Bow Leg Correction", "Carpel Tunnel Release", "Congenital Limb defect surgery",
      "Congenital Pseudarthrosis of the Tibia (CPT)", "Corrective Osteotomy and fixation with bone graft",
      "Corrective Osteotomy Fixation and Ligament Reconstruction Surgery", "Debridement of the Achilles tendon",
      "Disc Replacement (Cervical/Lumber)", "Distal Clavicle Excision", "Femoroacetabular Impingement (FAI) surgery",
      "High Tibial Osteotomy(HTO)", "Hip Dysplasia Treatment", "Hip Resurfacing Surgery", "Knee Arthroscopy",
      "Knock-knee surgery", "Lateral ankle ligament reconstruction", "Legg-Calve-Perthes Disease (LCPD)",
      "Meniscectomy", "Meniscus Repair", "Minimally invasive hip replacement", "Invasive Knee Replacement Surgery",
      "Open Reduction and Internal Fixation (Orif)", "Osteotomy", "Palmar Fasciectomy", "PCL Reconstruction",
      "Shoulder arthroscopy", "Shoulder labral tear surgery", "Shoulder Replacement",
      "Shoulder Tendon Repair Rotator Cuff", "Thumb Replacement (Wrist Arthroplasty)",
      "Transforaminal Lumbar Interbody Fusion", "Total Hip Replacement (B/L)", "Total Hip Replacement (U/L)",
      "Total Knee Replacement (B/L)", "Total Knee Replacement (U/L)", "Arthroscopic Bankart Repair",
      "Autologous Chondrocyte Implantation (ACI)", "Limb Lengthening Shortening surgery",
    ],
    "NEURO SCIENCES (NEUROLOGY AND NEUROSURGERY)": [
      "Anterior Lumbar Interbody Fusion (ALIF) surgery", "Aneurysm clipping", "Anterior Cervical Discectomy",
      "Anterior Cervical Discectomy and Fusion (ACDF)", "Artificial Lumber Disc Replacement",
      "Brachial Plexus Injuries/Stereotactic Procedure", "Brain Tumour", "Carotid endarterectomy",
      "Cerebral Angiogram", "Carotid Angioplasty Procedure", "Cerebral Dosrsal Rhizotomy",
      "Cervical Corpectomy Procedure", "Cervical Decompression", "Cervical Disc Replacement Surgery",
      "Cervical Fusion Procedure", "Cervical Fusion for tumors", "Cervical Laminoplasty", "Cranioplasty",
      "Craniotomy", "Deep Brain Stimulation", "Endoscopic Spine Surgery", "Endoscopic Third Ventriculostomy",
      "Endovascular Embolisation of AVM", "Endovascular surgery Embolisation of AVM", "Epilepsy Surgery",
      "External Ventricular Drainage", "Foraminotomy", "Keyhole spine surgery", "Kyphoplasty", "Laminectomy",
      "Lesionectomy", "Lumbar Decompression", "Lumbar discectomy", "Lumbar Puncture", "Management of Seizures",
      "Microdiscectomy", "Microvascular Decompression (MVD)", "Rhizotomy", "Scoliosis surgery",
      "Spinal Cord Detethering", "Spinal Cord Stimulation", "Spinal Decompression and fixation operation",
      "Spinal Fusion", "Stroke Treatment", "Spina Bifida", "Thoracic Interbody Fusion", "Pars Repair Surgery",
      "Corpus Callostomy", "Vagal Nerve Stimulation", "Chronic Cerebrospinal Venous Insufficiency (CCSVI)",
      "Hemispherectomy",
    ],
    "GENERAL SURGERY": [
      "Appendectomy", "Abdominal Hysterectomy Surgery", "Kasai Procedure", "Laparoscopic Gall Bladder removal",
      "Hernia Repair", "Microwave Endometrial Ablation", "Rectal Polyp Removal", "Thyroidectomy",
      "Varicose Vein", "Whipple Procedure", "EVLT - Varicose Veins (Single Extremity)", "Haemorrhoids",
    ],
    "ENT": [
      "Cochlear Implant", "Laryngectomy", "Nasal Polyp Surgery", "Septoplasty", "Tympanoplasty",
      "Tonsillectomy", "Adenoidectomy", "Peritonsillar abscess drainage", "Parotidectomy",
      "Anterior skull base surgery", "Advanced lateral skull base surgery", "Resection of nasopharyngeal tumour",
      "Open reduction and internal fixation of maxilla / mandible / zygoma", "Canalopasty For EAC Atresia",
      "Stapedectomy / tympanotomy", "Open sinus surgery", "Functional Endoscopic Sinus (FESS)",
    ],
    "GYNAECOLOGY": [
      "C-Section", "Fibroid Removal Surgery", "Laparoscopic Abdominal Hysterectomy", "Normal delivery",
      "Polycystic Ovarian Syndrome (PCOS)", "Vaginal Myomectomy", "Class III radical hysterctomy + BPLND",
      "Vulvectomy + reconstruction procedures", "Vaginal repair for vesico-vaginal fistula (Repair for VVF)",
      "Laparotomy for Broad Ligament Hematoma", "Closure of Burst Abdomen",
      "Uretero-vaginal / Uterine fistula repair", "Reversal of Sterilisation/ Tuboplasty (lap/ open)",
      "Sling Surgeries for Prolapse", "Salpingoophorectomy for both BPLN + NORMAL", "Burch",
      "Rectovaginal fistula repair", "Hysteroscopic Myomectomy", "Urethrovaginal fistula repair",
    ],
    "UROLOGY": [
      "ESWL (Extracorporeal Shock Wave Lithotripsy)", "Hypospadias Surgery", "Kidney Stone Removal",
      "Management of Erectile Dysfunction", "Nephrectomy", "Penile Implant", "Reversal of Vasectomy",
      "Trans Urethral Resection of Bladder Tumour (TURBT)", "Transurethral resection of the prostate (TURP)",
      "Vasectomy",
    ],
    "GASTROENTEROLOGY": [
      "ERCP (Diagnostic)", "Capsule Endoscopy", "Endoscopy (UGI Endoscopy)", "Choledochoduodenostomy",
      "Porto Caval Anastomosis", "Gastrectomy", "Oesophagectomy", "Heller Myotomy", "Sigmoid Resection",
      "Gastrojejunostomy", "Hiatus Hernia Repair",
    ],
    "BARIATRIC SURGERIES": ["Gastric Bypass", "Lap Gastric Banding", "Sleeve Gastrectomy"],
    "INFERTILITY": ["Intrauterine insemination", "In vitro fertilisation (IVF)"],
    "OPTHALMOLOGY": [
      "Cornea Transplant", "Lasik Surgery", "Macular Degeneration Surgery", "Vitrectomy", "Cataract",
    ],
    "PLASTIC AND RECONSTRUCTIVE SURGERIES": [
      "Ear Correction", "Scar Revision", "Spider Veins (Sclerotherapy)", "Liposuction Surgery",
      "Hair transplant", "Cleft Lip and Palate Repair", "Hand Microsurgery",
    ],
    "PSYCHIATRY": [
      "Anxiety Disorder Treatment", "Bipolar Disorder Treatment", "Depression Disorder Treatment",
      "Obsessive-Compulsive Disorder", "Schizophrenia Disorder Treatment", "Substance Use Disorder Treatment",
    ],
    "RADIATIONAL ONCOLOGY": [
      "Proton Therapy", "Chimeric Antigen Receptor T-cell therapy", "Cyberknife Treatment",
      "Stereotactic Radio Therapy", "Intensity-modulated radiotherapy (IMRT)", "Gamma Knife Treatment",
    ],
    "SURGICAL ONCOLOGY": [],
    "PAEDIATRIC SURGERIES": [],
    "DENTISTRY": [],
    "ONCOLOGY (MEDICAL, SURGICAL AND RADTIONAL ONCOLOGY)": [
      "Cancer Therapy", "Chemotherapy", "Radiotherapy", "Bone Marrow Transplant", "Surgical Oncology"
    ],
    "GYNAECOLOGY AND OBSTETRICS": [
      "Normal Delivery", "C-Section", "Hysterectomy", "Fibroid Removal", "Endometriosis Surgery"
    ],
    "GASTROENTEROLOGY (AND SURGRICAL GASTRO)": [
      "Colonoscopy", "Liver Transplant", "Endoscopy", "Gallbladder Surgery", "Bariatric Surgery"
    ],
    "UROLOGY AND NEPHROLOGY": [
      "Kidney Transplant", "Dialysis", "Prostate Surgery", "Stone Removal", "Urethral Reconstruction"
    ],
    "IVF AND INFERTILITY": [
      "IVF", "ICSI", "Egg Freezing", "Surrogacy", "Embryo Transfer"
    ],
    "PAEDIATRIC SURGERIES (ALL)": [
      "Pediatric Heart Surgery", "Pediatric Urology", "Cleft Lip/Palate Repair",
      "Pediatric Neurosurgery", "Pediatric Orthopedics"
    ],
    "GENERAL MEDICINE": [
      "Diabetes Management", "Hypertension Treatment", "Thyroid Disorders",
      "Infectious Diseases", "Routine Check-ups"
    ],
    "INTERVENTIONAL RADIOLOGY": [
      "Angioplasty", "Embolization", "Biopsy", "Stent Placement", "Vertebroplasty"
    ],
    "ORAL AND MAXILLOFACIAL SURGERY": [
      "Jaw Surgery", "Dental Implants", "Facial Trauma Repair", "Wisdom Tooth Extraction", "Cleft Jaw Surgery"
    ],
    "PALLIATIVE CARE": [
      "Pain Management", "End-of-Life Care", "Symptom Control", "Counseling", "Home Care Support"
    ],
    "GERAITRIC MEDICINE": [
      "Elderly Care", "Dementia Management", "Arthritis Care", "Chronic Disease Management", "Fall Prevention"
    ],
    "PHYSICAL MEDICINE AND REHABILITATION": [
      "Physiotherapy", "Stroke Rehabilitation", "Sports Injury Rehab", "Occupational Therapy", "Speech Therapy"
    ],
    "RESPIRATORY AND PULMONOLOGY MEDICINE": [
      "Asthma Management", "COPD Treatment", "Lung Cancer Care", "Pulmonary Rehabilitation", "Bronchoscopy"
    ],
    "OTHERS": ["Custom / Not Listed"],
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      ...(name === "specialty" ? { treatment: "" } : {}) 
    }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData(prev => ({ ...prev, documents: e.target.files[0] }));
    }
  };

  const handleSubmit = (action) => {
    console.log('Form submitted for:', action, formData);
    const params = new URLSearchParams();
    if (formData.specialty) params.append('specialty', formData.specialty);
    if (formData.treatment) params.append('treatment', formData.treatment);
    navigate(`/hospitals?${params.toString()}`);
  };

  const availableTreatments =
    formData.specialty && treatmentsMap[formData.specialty]
      ? treatmentsMap[formData.specialty]
      : [];

  // Reusable styles
  const inputBase = "bg-black/20 border border-white/10 text-white text-sm rounded-lg px-3 py-2.5 placeholder:text-white/40 focus:outline-none focus:border-[#D4C5A9] transition-colors";
  const labelBase = "text-[10px] text-[#D4C5A9] uppercase tracking-wider ml-1 mb-1 block";

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex flex-col justify-center py-12 lg:py-0">
      
      {/* 1. BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0">
        <motion.div
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
            className="w-full h-full"
        >
            <img 
            src="/hospitalimage.jpg" 
            alt="Wellness Sanctuary" 
            className="w-full h-full object-cover"
            />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2622]/95 via-[#0F2622]/85 to-[#0F2622]/90"></div>
      </div>

      {/* 2. MAIN CONTENT GRID */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">
        
        {/* LEFT COLUMN: Text Content */}
        <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-center lg:text-left pt-10 lg:pt-0 hidden lg:block"
        >
            <h1 className="text-4xl lg:text-6xl font-serif text-white leading-tight">
                DOCTOR LED. <br />
                <span className="text-[#D4C5A9] font-light">WORLD CLASS HEALTHCARE.</span>
            </h1>
            <h1 className="text-4xl lg:text-6xl font-serif text-white leading-tight">
                ZERO WAITING TIME. <br />
                <span className="text-[#D4C5A9] font-light">TRANSPARENT PRICING.</span> 
            </h1>
        </motion.div>

        {/* RIGHT COLUMN: Compact Glass Form */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full max-w-[420px] mx-auto lg:ml-auto"
        >
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-2xl shadow-2xl relative">
                
                <h3 className="text-xl font-serif text-white text-center mb-4">Get Personalized Help</h3>

                <form className="space-y-3">
                    
                    {/* SECTION 1: Personal Details */}
                    <div className="space-y-3">
                        {/* Name */}
                        <div>
                            <input 
                                type="text" 
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Name" 
                                className={`${inputBase} w-full`}
                            />
                        </div>

                        {/* Phone Number with Country Code Dropdown */}
                        <div className="flex gap-2">
                             {/* Country Code Dropdown */}
                             <div className="relative w-[110px] shrink-0">
                                <select
                                    name="countryCode"
                                    value={formData.countryCode}
                                    onChange={handleChange}
                                    className={`${inputBase} w-full appearance-none pr-6`}
                                >
                                    {COUNTRY_CODES.map((item) => (
                                        <option key={item.country} value={item.code} className="bg-[#0F2622]">
                                            {item.label}
                                        </option>
                                    ))}
                                </select>
                                <ChevronDown className="absolute right-2 top-3 text-white/50 pointer-events-none" size={12} />
                             </div>

                             {/* Phone Input */}
                             <input 
                                type="tel" 
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Phone Number" 
                                className={`${inputBase} flex-1`}
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <input 
                                type="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email Address" 
                                className={`${inputBase} w-full`}
                            />
                        </div>
                    </div>

                    <div className="h-px bg-white/10 my-2"></div>

                    {/* SECTION 2: Medical Details */}
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label className={labelBase}>Specialty</label>
                            <div className="relative">
                                <select 
                                    name="specialty"
                                    value={formData.specialty} 
                                    onChange={handleChange} 
                                    className={`${inputBase} w-full appearance-none`}
                                >
                                    <option value="" className="bg-[#0F2622]">Select...</option>
                                    {Object.keys(treatmentsMap).map(specialty => (
                                        <option key={specialty} value={specialty} className="bg-[#0F2622]">{specialty}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div>
                            <label className={labelBase}>Treatment</label>
                            <div className="relative">
                                <select 
                                    name="treatment"
                                    value={formData.treatment}
                                    onChange={handleChange}
                                    disabled={!formData.specialty}
                                    className={`${inputBase} w-full appearance-none disabled:opacity-50`}
                                >
                                    <option value="" className="bg-[#0F2622]">
                                        {formData.specialty ? "Select..." : "Select Specialty"}
                                    </option>
                                    {availableTreatments.map(treat => (
                                        <option key={treat} value={treat} className="bg-[#0F2622]">{treat}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Location */}
                    <div>
                        <label className={labelBase}>Preferred Location</label>
                        <div className="relative">
                            <select 
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                className={`${inputBase} w-full appearance-none`}
                            >
                                <option value="Jaipur" className="bg-[#0F2622]">Jaipur, India</option>
                                <option value="Delhi" className="bg-[#0F2622]">Delhi, India</option>
                                <option value="Mumbai" className="bg-[#0F2622]">Mumbai, India</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-3.5 text-white/50 pointer-events-none" size={14} />
                        </div>
                    </div>

                    {/* Message & File */}
                    <div className="flex gap-2 items-center">
                        <input 
                            name="comments"
                            value={formData.comments}
                            onChange={handleChange}
                            type="text" 
                            placeholder="Describe your needs..." 
                            className={`${inputBase} flex-1`}
                        />
                        <div className="relative group">
                            <input 
                                type="file" 
                                id="file-upload" 
                                className="hidden" 
                                onChange={handleFileChange}
                            />
                            <label htmlFor="file-upload" className="flex items-center justify-center w-10 h-[42px] border border-white/20 rounded-lg bg-black/10 hover:bg-black/20 text-white/60 hover:text-[#D4C5A9] cursor-pointer transition-colors" title="Upload Documents">
                                <Paperclip size={18} />
                            </label>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-3 pt-2">
                        <button 
                            type="button" 
                            onClick={() => handleSubmit('quotation')}
                            className="bg-[#D4C5A9] hover:bg-[#C0B090] text-[#0F2622] text-sm font-bold py-3 rounded-lg transition-all active:scale-95 shadow-lg shadow-[#D4C5A9]/20"
                        >
                            Get Quotations
                        </button>
                        <button 
                            type="button" 
                            onClick={() => handleSubmit('consultation')}
                            className="bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium py-3 rounded-lg transition-all"
                        >
                            Consultation
                        </button>
                    </div>
                </form>

                {/* Footer Trust Icons */}
                <div className="flex justify-center gap-6 mt-4 pt-3 border-t border-white/10 opacity-70">
                    <div className="flex items-center gap-1.5">
                        <ShieldCheck className="text-[#D4C5A9]" size={14} />
                        <span className="text-[9px] uppercase tracking-widest text-white">Trusted</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Globe className="text-[#D4C5A9]" size={14} />
                        <span className="text-[9px] uppercase tracking-widest text-white">Global</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Heart className="text-[#D4C5A9]" size={14} />
                        <span className="text-[9px] uppercase tracking-widest text-white">Caring</span>
                    </div>
                </div>

            </div>
        </motion.div>
      </div>
    </section>
  );
}