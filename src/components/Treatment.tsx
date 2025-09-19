import React, { useState } from "react";
import {
  ArrowLeft,
  Heart,
  Brain,
  Ear,
  Stethoscope,
  Microscope,
  Activity,
  Users,
  Baby,
} from "lucide-react";

export default function Treatment() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Categories
  const medicalTreatments = [
    { key: "cardiac", icon: Heart, title: "Cardiac Sciences" },
    { key: "orthopaedics", icon: Activity, title: "Orthopaedics" },
    { key: "neuro", icon: Brain, title: "Neuro Sciences" },
    { key: "general", icon: Stethoscope, title: "General Surgery" },
    { key: "ent", icon: Ear, title: "ENT" },
    { key: "gynae", icon: Baby, title: "Gynaecology" },
    { key: "urology", icon: Microscope, title: "Urology" },
    { key: "gastro", icon: Users, title: "Gastroenterology" },
    { key: "others", icon: Activity, title: "Other Categories" },
  ];

  // Subcategories Data (now an array of objects)
  const subcategories: Record<
    string,
    { title: string; description: string; price: number }[]
  > = {
    cardiac: [
      {
        title: "Angiography",
        description: "Diagnostic test using X-rays to check your blood vessels.",
        price: 375,
      },
      {
        title: "Angioplasty",
        description: "Procedure to restore blood flow through a blocked artery.",
        price: 1450,
      },
      {
        title: "Arterial Switch Surgery",
        description: "Open-heart surgery that corrects a congenital heart defect.",
        price: 6000,
      },
      {
        title: "Atrial Septal Defect (ASD)",
        description: "Surgical closure of a hole between the heart's upper chambers.",
        price: 4000,
      },
       {
        title: "CABG (Coronary Artery Bypass)",
        description: "Creates new paths for blood to flow to the heart.",
        price: 3625,
      },
       {
        title: "Pacemaker Implant",
        description: "Device implantation to help control abnormal heart rhythms.",
        price: 3625,
      },
    ],
    orthopaedics: [
       {
        title: "ACL Reconstruction",
        description: "Surgical repair of a torn anterior cruciate ligament in the knee.",
        price: 2300,
      },
      {
        title: "Ankle Arthrodesis",
        description: "Ankle fusion surgery to relieve arthritis pain.",
        price: 750,
      },
      {
        title: "Total Hip Replacement (U/L)",
        description: "Replacing a damaged hip joint with a prosthetic implant.",
        price: 2625,
      },
      {
        title: "Total Knee Replacement (U/L)",
        description: "Resurfacing a knee damaged by arthritis with prosthesis.",
        price: 2875,
      },
    ],
    neuro: [
       {
        title: "Aneurysm clipping",
        description: "Surgical procedure to treat a brain aneurysm.",
        price: 2880,
      },
       {
        title: "Brain Tumour Surgery",
        description: "Surgical removal of a tumor from the brain.",
        price: 2625,
      },
      {
        title: "Craniotomy",
        description: "Surgical removal of a part of the bone from the skull.",
        price: 2880,
      },
      {
        title: "Spinal Fusion",
        description: "Surgery to permanently connect two or more vertebrae.",
        price: 3875,
      },
    ],
    general: [
      {
        title: "Appendectomy",
        description: "Surgical removal of the appendix.",
        price: 1450,
      },
      {
        title: "Laparoscopic Gall Bladder removal",
        description: "Minimally invasive surgery to remove the gallbladder.",
        price: 1450,
      },
      {
        title: "Hernia Repair",
        description: "Operation for the correction of a hernia.",
        price: 1450,
      },
      {
        title: "Thyroidectomy",
        description: "Surgical removal of all or part of your thyroid gland.",
        price: 865,
      },
    ],
    ent: [
      {
        title: "Cochlear Implant",
        description: "Surgically implanted device that provides a sense of sound.",
        price: 12500,
      },
      {
        title: "Septoplasty",
        description: "Surgical procedure to straighten a deviated nasal septum.",
        price: 440,
      },
      {
        title: "Tonsillectomy",
        description: "Surgical removal of the tonsils.",
        price: 865,
      },
    ],
    gynae: [
      {
        title: "C-Section",
        description: "Surgical delivery of a baby through an incision.",
        price: 1450,
      },
      {
        title: "Fibroid Removal Surgery",
        description: "Surgical procedure to remove uterine fibroids.",
        price: 1500,
      },
      {
        title: "Laparoscopic Hysterectomy",
        description: "Minimally invasive removal of the uterus.",
        price: 1725,
      },
    ],
    urology: [
      {
        title: "Kidney Stone Removal",
        description: "Procedures to remove stones from the urinary tract.",
        price: 1725,
      },
      {
        title: "Nephrectomy",
        description: "Surgical removal of a kidney.",
        price: 1725,
      },
      {
        title: "TURP",
        description: "Surgery to remove parts of the prostate gland.",
        price: 1450,
      },
    ],
    gastro: [
      {
        title: "ERCP (Diagnostic)",
        description: "Procedure to diagnose diseases of the bile ducts.",
        price: 865,
      },
      {
        title: "Endoscopy (UGI Endoscopy)",
        description: "Procedure to visually examine your upper digestive system.",
        price: 60,
      },
      {
        title: "Hiatus Hernia Repair",
        description: "Surgery to correct a hernia in the upper part of the stomach.",
        price: 1450,
      },
    ],
    others: [
      {
        title: "Bariatric Surgeries",
        description: "Weight-loss surgeries for obesity.",
        price: 5000,
      },
      {
        title: "Infertility (IVF, IUI)",
        description: "Treatments to help with conception.",
        price: 2500,
      },
      {
        title: "Ophthalmology",
        description: "Medical and surgical eye care.",
        price: 1000,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-4xl font-bold text-gray-900 my-4">
            {selectedCategory
              ? `Explore ${
                  medicalTreatments.find((c) => c.key === selectedCategory)
                    ?.title
                }`
              : "Find Medical Treatments"}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {!selectedCategory ? (
          <>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Choose a <span className="text-blue-600">Category</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {medicalTreatments.map((treatment) => {
                const Icon = treatment.icon;
                return (
                  <div
                    key={treatment.key}
                    onClick={() => setSelectedCategory(treatment.key)}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg hover:scale-[1.02] transform transition-all cursor-pointer"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-4 text-blue-600 shadow-sm">
                        <Icon className="h-8 w-8" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {treatment.title}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <>
            <button
              onClick={() => setSelectedCategory(null)}
              className="mb-8 flex items-center text-blue-600 hover:underline"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Categories
            </button>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {subcategories[selectedCategory].map((sub, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col hover:shadow-lg transition-shadow"
                >
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {sub.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4">
                    {sub.description}
                  </p>
                  <p className="text-xl font-bold text-blue-600 mt-auto pt-4 border-t border-gray-100">
                    ${sub.price.toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}