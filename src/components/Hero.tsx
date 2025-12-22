// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';
// import { 
//   ShieldCheck, 
//   Globe, 
//   Heart, 
//   ChevronDown,
//   Paperclip,
//   CheckCircle,
//   X,
//   Loader2 // Added for loading state
// } from 'lucide-react';

// // 🔴 PASTE YOUR GOOGLE SCRIPT WEB APP URL HERE
// const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwxJMtZ41V-eXBbi32hlNDFa5repF8pnv8uf5P5LogldVmvmkzJ0XgG503_r4Qx2wi9-A/exec";

// // Common Country Codes List
// const COUNTRY_CODES = [

// { code: "+93", country: "AF", label: "🇦🇫 Afghanistan (+93)" },

// { code: "+355", country: "AL", label: "🇦🇱 Albania (+355)" },

// { code: "+213", country: "DZ", label: "🇩🇿 Algeria (+213)" },

// { code: "+1", country: "AS", label: "🇦🇸 American Samoa (+1)" },

// { code: "+376", country: "AD", label: "🇦🇩 Andorra (+376)" },

// { code: "+244", country: "AO", label: "🇦🇴 Angola (+244)" },

// { code: "+1", country: "AI", label: "🇦🇮 Anguilla (+1)" },

// { code: "+1", country: "AG", label: "🇦🇬 Antigua & Barbuda (+1)" },

// { code: "+54", country: "AR", label: "🇦🇷 Argentina (+54)" },

// { code: "+374", country: "AM", label: "🇦🇲 Armenia (+374)" },

// { code: "+297", country: "AW", label: "🇦🇼 Aruba (+297)" },

// { code: "+61", country: "AU", label: "🇦🇺 Australia (+61)" },

// { code: "+43", country: "AT", label: "🇦🇹 Austria (+43)" },

// { code: "+994", country: "AZ", label: "🇦🇿 Azerbaijan (+994)" },

// { code: "+1", country: "BS", label: "🇧🇸 Bahamas (+1)" },

// { code: "+973", country: "BH", label: "🇧🇭 Bahrain (+973)" },

// { code: "+880", country: "BD", label: "🇧🇩 Bangladesh (+880)" },

// { code: "+1", country: "BB", label: "🇧🇧 Barbados (+1)" },

// { code: "+375", country: "BY", label: "🇧🇾 Belarus (+375)" },

// { code: "+32", country: "BE", label: "🇧🇪 Belgium (+32)" },

// { code: "+501", country: "BZ", label: "🇧🇿 Belize (+501)" },

// { code: "+229", country: "BJ", label: "🇧🇯 Benin (+229)" },

// { code: "+1", country: "BM", label: "🇧🇲 Bermuda (+1)" },

// { code: "+975", country: "BT", label: "🇧🇹 Bhutan (+975)" },

// { code: "+591", country: "BO", label: "🇧🇴 Bolivia (+591)" },

// { code: "+387", country: "BA", label: "🇧🇦 Bosnia & Herzegovina (+387)" },

// { code: "+267", country: "BW", label: "🇧🇼 Botswana (+267)" },

// { code: "+55", country: "BR", label: "🇧🇷 Brazil (+55)" },

// { code: "+1", country: "VG", label: "🇻🇬 British Virgin Islands (+1)" },

// { code: "+673", country: "BN", label: "🇧🇳 Brunei (+673)" },

// { code: "+359", country: "BG", label: "🇧🇬 Bulgaria (+359)" },

// { code: "+226", country: "BF", label: "🇧🇫 Burkina Faso (+226)" },

// { code: "+257", country: "BI", label: "🇧🇮 Burundi (+257)" },

// { code: "+855", country: "KH", label: "🇰🇭 Cambodia (+855)" },

// { code: "+237", country: "CM", label: "🇨🇲 Cameroon (+237)" },

// { code: "+1", country: "CA", label: "🇨🇦 Canada (+1)" },

// { code: "+238", country: "CV", label: "🇨🇻 Cape Verde (+238)" },

// { code: "+1", country: "KY", label: "🇰🇾 Cayman Islands (+1)" },

// { code: "+236", country: "CF", label: "🇨🇫 Central African Republic (+236)" },

// { code: "+235", country: "TD", label: "🇹🇩 Chad (+235)" },

// { code: "+56", country: "CL", label: "🇨🇱 Chile (+56)" },

// { code: "+86", country: "CN", label: "🇨🇳 China (+86)" },

// { code: "+57", country: "CO", label: "🇨🇴 Colombia (+57)" },

// { code: "+269", country: "KM", label: "🇰🇲 Comoros (+269)" },

// { code: "+242", country: "CG", label: "🇨🇬 Congo (+242)" },

// { code: "+243", country: "CD", label: "🇨🇩 Congo, Democratic Republic (+243)" },

// { code: "+682", country: "CK", label: "🇨🇰 Cook Islands (+682)" },

// { code: "+506", country: "CR", label: "🇨🇷 Costa Rica (+506)" },

// { code: "+385", country: "HR", label: "🇭🇷 Croatia (+385)" },

// { code: "+53", country: "CU", label: "🇨🇺 Cuba (+53)" },

// { code: "+599", country: "CW", label: "🇨🇼 Curaçao (+599)" },

// { code: "+357", country: "CY", label: "🇨🇾 Cyprus (+357)" },

// { code: "+420", country: "CZ", label: "🇨🇿 Czech Republic (+420)" },

// { code: "+45", country: "DK", label: "🇩🇰 Denmark (+45)" },

// { code: "+253", country: "DJ", label: "🇩🇯 Djibouti (+253)" },

// { code: "+1", country: "DM", label: "🇩🇲 Dominica (+1)" },

// { code: "+1", country: "DO", label: "🇩🇴 Dominican Republic (+1)" },

// { code: "+593", country: "EC", label: "🇪🇨 Ecuador (+593)" },

// { code: "+20", country: "EG", label: "🇪🇬 Egypt (+20)" },

// { code: "+503", country: "SV", label: "🇸🇻 El Salvador (+503)" },

// { code: "+240", country: "GQ", label: "🇬🇶 Equatorial Guinea (+240)" },

// { code: "+291", country: "ER", label: "🇪🇷 Eritrea (+291)" },

// { code: "+372", country: "EE", label: "🇪🇪 Estonia (+372)" },

// { code: "+251", country: "ET", label: "🇪🇹 Ethiopia (+251)" },

// { code: "+500", country: "FK", label: "🇫🇰 Falkland Islands (+500)" },

// { code: "+298", country: "FO", label: "🇫🇴 Faroe Islands (+298)" },

// { code: "+679", country: "FJ", label: "🇫🇯 Fiji (+679)" },

// { code: "+358", country: "FI", label: "🇫🇮 Finland (+358)" },

// { code: "+33", country: "FR", label: "🇫🇷 France (+33)" },

// { code: "+594", country: "GF", label: "🇬🇫 French Guiana (+594)" },

// { code: "+689", country: "PF", label: "🇵🇫 French Polynesia (+689)" },

// { code: "+241", country: "GA", label: "🇬🇦 Gabon (+241)" },

// { code: "+220", country: "GM", label: "🇬🇲 Gambia (+220)" },

// { code: "+995", country: "GE", label: "🇬🇪 Georgia (+995)" },

// { code: "+49", country: "DE", label: "🇩🇪 Germany (+49)" },

// { code: "+233", country: "GH", label: "🇬🇭 Ghana (+233)" },

// { code: "+350", country: "GI", label: "🇬🇮 Gibraltar (+350)" },

// { code: "+30", country: "GR", label: "🇬🇷 Greece (+30)" },

// { code: "+299", country: "GL", label: "🇬🇱 Greenland (+299)" },

// { code: "+1", country: "GD", label: "🇬🇩 Grenada (+1)" },

// { code: "+590", country: "GP", label: "🇬🇵 Guadeloupe (+590)" },

// { code: "+1", country: "GU", label: "🇬🇺 Guam (+1)" },

// { code: "+502", country: "GT", label: "🇬🇹 Guatemala (+502)" },

// { code: "+224", country: "GN", label: "🇬🇳 Guinea (+224)" },

// { code: "+245", country: "GW", label: "🇬🇼 Guinea-Bissau (+245)" },

// { code: "+592", country: "GY", label: "🇬🇾 Guyana (+592)" },

// { code: "+509", country: "HT", label: "🇭🇹 Haiti (+509)" },

// { code: "+504", country: "HN", label: "🇭🇳 Honduras (+504)" },

// { code: "+852", country: "HK", label: "🇭🇰 Hong Kong (+852)" },

// { code: "+36", country: "HU", label: "🇭🇺 Hungary (+36)" },

// { code: "+354", country: "IS", label: "🇮🇸 Iceland (+354)" },

// { code: "+91", country: "IN", label: "🇮🇳 India (+91)" },

// { code: "+62", country: "ID", label: "🇮🇩 Indonesia (+62)" },

// { code: "+98", country: "IR", label: "🇮🇷 Iran (+98)" },

// { code: "+964", country: "IQ", label: "🇮🇶 Iraq (+964)" },

// { code: "+353", country: "IE", label: "🇮🇪 Ireland (+353)" },

// { code: "+972", country: "IL", label: "🇮🇱 Israel (+972)" },

// { code: "+39", country: "IT", label: "🇮🇹 Italy (+39)" },

// { code: "+225", country: "CI", label: "🇨🇮 Ivory Coast (+225)" },

// { code: "+1", country: "JM", label: "🇯🇲 Jamaica (+1)" },

// { code: "+81", country: "JP", label: "🇯🇵 Japan (+81)" },

// { code: "+962", country: "JO", label: "🇯🇴 Jordan (+962)" },

// { code: "+7", country: "KZ", label: "🇰🇿 Kazakhstan (+7)" },

// { code: "+254", country: "KE", label: "🇰🇪 Kenya (+254)" },

// { code: "+686", country: "KI", label: "🇰🇮 Kiribati (+686)" },

// { code: "+383", country: "XK", label: "🇽🇰 Kosovo (+383)" },

// { code: "+965", country: "KW", label: "🇰🇼 Kuwait (+965)" },

// { code: "+996", country: "KG", label: "🇰🇬 Kyrgyzstan (+996)" },

// { code: "+856", country: "LA", label: "🇱🇦 Laos (+856)" },

// { code: "+371", country: "LV", label: "🇱🇻 Latvia (+371)" },

// { code: "+961", country: "LB", label: "🇱🇧 Lebanon (+961)" },

// { code: "+266", country: "LS", label: "🇱🇸 Lesotho (+266)" },

// { code: "+231", country: "LR", label: "🇱🇷 Liberia (+231)" },

// { code: "+218", country: "LY", label: "🇱🇾 Libya (+218)" },

// { code: "+423", country: "LI", label: "🇱🇮 Liechtenstein (+423)" },

// { code: "+370", country: "LT", label: "🇱🇹 Lithuania (+370)" },

// { code: "+352", country: "LU", label: "🇱🇺 Luxembourg (+352)" },

// { code: "+853", country: "MO", label: "🇲🇴 Macau (+853)" },

// { code: "+389", country: "MK", label: "🇲🇰 Macedonia (+389)" },

// { code: "+261", country: "MG", label: "🇲🇬 Madagascar (+261)" },

// { code: "+265", country: "MW", label: "🇲🇼 Malawi (+265)" },

// { code: "+60", country: "MY", label: "🇲🇾 Malaysia (+60)" },

// { code: "+960", country: "MV", label: "🇲🇻 Maldives (+960)" },

// { code: "+223", country: "ML", label: "🇲🇱 Mali (+223)" },

// { code: "+356", country: "MT", label: "🇲🇹 Malta (+356)" },

// { code: "+692", country: "MH", label: "🇲🇭 Marshall Islands (+692)" },

// { code: "+596", country: "MQ", label: "🇲🇶 Martinique (+596)" },

// { code: "+222", country: "MR", label: "🇲🇷 Mauritania (+222)" },

// { code: "+230", country: "MU", label: "🇲🇺 Mauritius (+230)" },

// { code: "+52", country: "MX", label: "🇲🇽 Mexico (+52)" },

// { code: "+691", country: "FM", label: "🇫🇲 Micronesia (+691)" },

// { code: "+373", country: "MD", label: "🇲🇩 Moldova (+373)" },

// { code: "+377", country: "MC", label: "🇲🇨 Monaco (+377)" },

// { code: "+976", country: "MN", label: "🇲🇳 Mongolia (+976)" },

// { code: "+382", country: "ME", label: "🇲🇪 Montenegro (+382)" },

// { code: "+1", country: "MS", label: "🇲🇸 Montserrat (+1)" },

// { code: "+212", country: "MA", label: "🇲🇦 Morocco (+212)" },

// { code: "+258", country: "MZ", label: "🇲🇿 Mozambique (+258)" },

// { code: "+95", country: "MM", label: "🇲🇲 Myanmar (+95)" },

// { code: "+264", country: "NA", label: "🇳🇦 Namibia (+264)" },

// { code: "+674", country: "NR", label: "🇳🇷 Nauru (+674)" },

// { code: "+977", country: "NP", label: "🇳🇵 Nepal (+977)" },

// { code: "+31", country: "NL", label: "🇳🇱 Netherlands (+31)" },

// { code: "+687", country: "NC", label: "🇳🇨 New Caledonia (+687)" },

// { code: "+64", country: "NZ", label: "🇳🇿 New Zealand (+64)" },

// { code: "+505", country: "NI", label: "🇳🇮 Nicaragua (+505)" },

// { code: "+227", country: "NE", label: "🇳🇪 Niger (+227)" },

// { code: "+234", country: "NG", label: "🇳🇬 Nigeria (+234)" },

// { code: "+683", country: "NU", label: "🇳🇺 Niue (+683)" },

// { code: "+850", country: "KP", label: "🇰🇵 North Korea (+850)" },

// { code: "+1", country: "MP", label: "🇲🇵 Northern Mariana Islands (+1)" },

// { code: "+47", country: "NO", label: "🇳🇴 Norway (+47)" },

// { code: "+968", country: "OM", label: "🇴🇲 Oman (+968)" },

// { code: "+92", country: "PK", label: "🇵🇰 Pakistan (+92)" },

// { code: "+680", country: "PW", label: "🇵🇼 Palau (+680)" },

// { code: "+970", country: "PS", label: "🇵🇸 Palestine (+970)" },

// { code: "+507", country: "PA", label: "🇵🇦 Panama (+507)" },

// { code: "+675", country: "PG", label: "🇵🇬 Papua New Guinea (+675)" },

// { code: "+595", country: "PY", label: "🇵🇾 Paraguay (+595)" },

// { code: "+51", country: "PE", label: "🇵🇪 Peru (+51)" },

// { code: "+63", country: "PH", label: "🇵🇭 Philippines (+63)" },

// { code: "+48", country: "PL", label: "🇵🇱 Poland (+48)" },

// { code: "+351", country: "PT", label: "🇵🇹 Portugal (+351)" },

// { code: "+1", country: "PR", label: "🇵🇷 Puerto Rico (+1)" },

// { code: "+974", country: "QA", label: "🇶🇦 Qatar (+974)" },

// { code: "+262", country: "RE", label: "🇷🇪 Réunion (+262)" },

// { code: "+40", country: "RO", label: "🇷🇴 Romania (+40)" },

// { code: "+7", country: "RU", label: "🇷🇺 Russia (+7)" },

// { code: "+250", country: "RW", label: "🇷🇼 Rwanda (+250)" },

// { code: "+685", country: "WS", label: "🇼🇸 Samoa (+685)" },

// { code: "+378", country: "SM", label: "🇸🇲 San Marino (+378)" },

// { code: "+239", country: "ST", label: "🇸🇹 São Tomé & Príncipe (+239)" },

// { code: "+966", country: "SA", label: "🇸🇦 Saudi Arabia (+966)" },

// { code: "+221", country: "SN", label: "🇸🇳 Senegal (+221)" },

// { code: "+381", country: "RS", label: "🇷🇸 Serbia (+381)" },

// { code: "+248", country: "SC", label: "🇸🇨 Seychelles (+248)" },

// { code: "+232", country: "SL", label: "🇸🇱 Sierra Leone (+232)" },

// { code: "+65", country: "SG", label: "🇸🇬 Singapore (+65)" },

// { code: "+1", country: "SX", label: "🇸🇽 Sint Maarten (+1)" },

// { code: "+421", country: "SK", label: "🇸🇰 Slovakia (+421)" },

// { code: "+386", country: "SI", label: "🇸🇮 Slovenia (+386)" },

// { code: "+677", country: "SB", label: "🇸🇧 Solomon Islands (+677)" },

// { code: "+27", country: "ZA", label: "🇿🇦 South Africa (+27)" },

// { code: "+82", country: "KR", label: "🇰🇷 South Korea (+82)" },

// { code: "+211", country: "SS", label: "🇸🇸 South Sudan (+211)" },

// { code: "+34", country: "ES", label: "🇪🇸 Spain (+34)" },

// { code: "+94", country: "LK", label: "🇱🇰 Sri Lanka (+94)" },

// { code: "+1", country: "KN", label: "🇰🇳 St Kitts & Nevis (+1)" },

// { code: "+1", country: "LC", label: "🇱🇨 St Lucia (+1)" },

// { code: "+1", country: "VC", label: "🇻🇨 St Vincent & Grenadines (+1)" },

// { code: "+249", country: "SD", label: "🇸🇩 Sudan (+249)" },

// { code: "+597", country: "SR", label: "🇸🇷 Suriname (+597)" },

// { code: "+268", country: "SZ", label: "🇸🇿 Swaziland (+268)" },

// { code: "+46", country: "SE", label: "🇸🇪 Sweden (+46)" },

// { code: "+41", country: "CH", label: "🇨🇭 Switzerland (+41)" },

// { code: "+963", country: "SY", label: "🇸🇾 Syria (+963)" },

// { code: "+886", country: "TW", label: "🇹🇼 Taiwan (+886)" },

// { code: "+992", country: "TJ", label: "🇹🇯 Tajikistan (+992)" },

// { code: "+255", country: "TZ", label: "🇹🇿 Tanzania (+255)" },

// { code: "+66", country: "TH", label: "🇹🇭 Thailand (+66)" },

// { code: "+670", country: "TL", label: "🇹🇱 Timor-Leste (+670)" },

// { code: "+228", country: "TG", label: "🇹🇬 Togo (+228)" },

// { code: "+690", country: "TK", label: "🇹🇰 Tokelau (+690)" },

// { code: "+676", country: "TO", label: "🇹🇴 Tonga (+676)" },

// { code: "+1", country: "TT", label: "🇹🇹 Trinidad & Tobago (+1)" },

// { code: "+216", country: "TN", label: "🇹🇳 Tunisia (+216)" },

// { code: "+90", country: "TR", label: "🇹🇷 Turkey (+90)" },

// { code: "+993", country: "TM", label: "🇹🇲 Turkmenistan (+993)" },

// { code: "+1", country: "TC", label: "🇹🇨 Turks & Caicos (+1)" },

// { code: "+688", country: "TV", label: "🇹🇻 Tuvalu (+688)" },

// { code: "+256", country: "UG", label: "🇺🇬 Uganda (+256)" },

// { code: "+380", country: "UA", label: "🇺🇦 Ukraine (+380)" },

// { code: "+971", country: "AE", label: "🇦🇪 United Arab Emirates (+971)" },

// { code: "+44", country: "GB", label: "🇬🇧 United Kingdom (+44)" },

// { code: "+1", country: "US", label: "🇺🇸 United States (+1)" },

// { code: "+598", country: "UY", label: "🇺🇾 Uruguay (+598)" },

// { code: "+1", country: "VI", label: "🇻🇮 US Virgin Islands (+1)" },

// { code: "+998", country: "UZ", label: "🇺🇿 Uzbekistan (+998)" },

// { code: "+678", country: "VU", label: "🇻🇺 Vanuatu (+678)" },

// { code: "+58", country: "VE", label: "🇻🇪 Venezuela (+58)" },

// { code: "+84", country: "VN", label: "🇻🇳 Vietnam (+84)" },

// { code: "+681", country: "WF", label: "🇼🇫 Wallis & Futuna (+681)" },

// { code: "+967", country: "YE", label: "🇾🇪 Yemen (+967)" },
// { code: "+260", country: "ZM", label: "🇿🇲 Zambia (+260)" },
// { code: "+263", country: "ZW", label: "🇿🇼 Zimbabwe (+263)" }

// ];

// export default function Hero() {
//   const navigate = useNavigate();
//   const [showSuccess, setShowSuccess] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false); // New Loading State

//   const [formData, setFormData] = useState({
//     name: '',
//     countryCode: '+91',
//     phone: '',
//     email: '',
//     specialty: '',
//     treatment: '',
//     location: 'Jaipur',
//     comments: '',
//     documents: null
//   });

//   const treatmentsMap = {

// "CARDIAC SCIENCES (CARDIOLOGY AND CTVS)": [

// "Angiography including Non-ionic Contrast", "Angioplasty", "Arterial Switch Surgery",

// "Atrial Septal Defect (ASD)", "Balloon valvuloplasty", "Balloon Angioplasty",

// "Balloon Atrial Septostomy", "Balloon mitral valvotomy", "Bentall Procedure",

// "CABG - Redo", "Cardiac Ablation", "Cardiac Catheterization", "Cardiac Valve Replacement",

// "Closed heart Surgery", "CABG (Coronary Artery Bypass Grafting)",

// "Pacemaker-supported cardiac resynchronisation treatment (CRT-P)",

// "Cardiac resynchronisation therapy with a defibrillator (CRT-D)", "Device Closure of ASD",

// "Dual Chamber Pacemaker", "Electrophysiology (EP) study AND Radiofrequency ablation (RFA)",

// "Glenn procedure", "Double Valve Replacement", "Heart Port Surgery", "ICD Combo Device",

// "Impella implantation", "Intra-aortic balloon pump", "Left Ventricular Assist Device",

// "Left Ventricular Restoration Surgery", "Pacemaker Implant Single Chamber", "PDA Closure",

// "Pediatric cardiomyopathy with implant", "Pulmonary Valve Replacement", "Ross Procedure",

// "TAPVC", "TOF Repair", "Trans Aortic Valve Replacement", "TAVI", "VSD Closure Repair",

// "Fontan Procedure", "Transmyocardial Revascularization", "Atherectomy", "Norwood Surgery",

// ],

// "ORTHOPAEDICS": [

// "Acromioclavicular (AC) joint separation", "Adolescent idiopathic scoliosis",

// "Ankle arthroscopy", "Ankle Arthrodesis", "Anterior Cruciate Ligament (ACL) Reconstruction",

// "Arthrodesis", "Arthroscopic (minimally invasive) ankle surgery", "Boutonniere deformity treatment",

// "Bow Leg Correction", "Carpel Tunnel Release", "Congenital Limb defect surgery",

// "Congenital Pseudarthrosis of the Tibia (CPT)", "Corrective Osteotomy and fixation with bone graft",

// "Corrective Osteotomy Fixation and Ligament Reconstruction Surgery", "Debridement of the Achilles tendon",

// "Disc Replacement (Cervical/Lumber)", "Distal Clavicle Excision", "Femoroacetabular Impingement (FAI) surgery",

// "High Tibial Osteotomy(HTO)", "Hip Dysplasia Treatment", "Hip Resurfacing Surgery", "Knee Arthroscopy",

// "Knock-knee surgery", "Lateral ankle ligament reconstruction", "Legg-Calve-Perthes Disease (LCPD)",

// "Meniscectomy", "Meniscus Repair", "Minimally invasive hip replacement", "Invasive Knee Replacement Surgery",

// "Open Reduction and Internal Fixation (Orif)", "Osteotomy", "Palmar Fasciectomy", "PCL Reconstruction",

// "Shoulder arthroscopy", "Shoulder labral tear surgery", "Shoulder Replacement",

// "Shoulder Tendon Repair Rotator Cuff", "Thumb Replacement (Wrist Arthroplasty)",

// "Transforaminal Lumbar Interbody Fusion", "Total Hip Replacement (B/L)", "Total Hip Replacement (U/L)",

// "Total Knee Replacement (B/L)", "Total Knee Replacement (U/L)", "Arthroscopic Bankart Repair",

// "Autologous Chondrocyte Implantation (ACI)", "Limb Lengthening Shortening surgery",

// ],

// "NEURO SCIENCES (NEUROLOGY AND NEUROSURGERY)": [

// "Anterior Lumbar Interbody Fusion (ALIF) surgery", "Aneurysm clipping", "Anterior Cervical Discectomy",

// "Anterior Cervical Discectomy and Fusion (ACDF)", "Artificial Lumber Disc Replacement",

// "Brachial Plexus Injuries/Stereotactic Procedure", "Brain Tumour", "Carotid endarterectomy",

// "Cerebral Angiogram", "Carotid Angioplasty Procedure", "Cerebral Dosrsal Rhizotomy",

// "Cervical Corpectomy Procedure", "Cervical Decompression", "Cervical Disc Replacement Surgery",

// "Cervical Fusion Procedure", "Cervical Fusion for tumors", "Cervical Laminoplasty", "Cranioplasty",

// "Craniotomy", "Deep Brain Stimulation", "Endoscopic Spine Surgery", "Endoscopic Third Ventriculostomy",

// "Endovascular Embolisation of AVM", "Endovascular surgery Embolisation of AVM", "Epilepsy Surgery",

// "External Ventricular Drainage", "Foraminotomy", "Keyhole spine surgery", "Kyphoplasty", "Laminectomy",

// "Lesionectomy", "Lumbar Decompression", "Lumbar discectomy", "Lumbar Puncture", "Management of Seizures",

// "Microdiscectomy", "Microvascular Decompression (MVD)", "Rhizotomy", "Scoliosis surgery",

// "Spinal Cord Detethering", "Spinal Cord Stimulation", "Spinal Decompression and fixation operation",

// "Spinal Fusion", "Stroke Treatment", "Spina Bifida", "Thoracic Interbody Fusion", "Pars Repair Surgery",

// "Corpus Callostomy", "Vagal Nerve Stimulation", "Chronic Cerebrospinal Venous Insufficiency (CCSVI)",

// "Hemispherectomy",

// ],

// "GENERAL SURGERY": [

// "Appendectomy", "Abdominal Hysterectomy Surgery", "Kasai Procedure", "Laparoscopic Gall Bladder removal",

// "Hernia Repair", "Microwave Endometrial Ablation", "Rectal Polyp Removal", "Thyroidectomy",

// "Varicose Vein", "Whipple Procedure", "EVLT - Varicose Veins (Single Extremity)", "Haemorrhoids",

// ],

// "ENT": [

// "Cochlear Implant", "Laryngectomy", "Nasal Polyp Surgery", "Septoplasty", "Tympanoplasty",

// "Tonsillectomy", "Adenoidectomy", "Peritonsillar abscess drainage", "Parotidectomy",

// "Anterior skull base surgery", "Advanced lateral skull base surgery", "Resection of nasopharyngeal tumour",

// "Open reduction and internal fixation of maxilla / mandible / zygoma", "Canalopasty For EAC Atresia",

// "Stapedectomy / tympanotomy", "Open sinus surgery", "Functional Endoscopic Sinus (FESS)",

// ],

// "GYNAECOLOGY": [

// "C-Section", "Fibroid Removal Surgery", "Laparoscopic Abdominal Hysterectomy", "Normal delivery",

// "Polycystic Ovarian Syndrome (PCOS)", "Vaginal Myomectomy", "Class III radical hysterctomy + BPLND",

// "Vulvectomy + reconstruction procedures", "Vaginal repair for vesico-vaginal fistula (Repair for VVF)",

// "Laparotomy for Broad Ligament Hematoma", "Closure of Burst Abdomen",

// "Uretero-vaginal / Uterine fistula repair", "Reversal of Sterilisation/ Tuboplasty (lap/ open)",

// "Sling Surgeries for Prolapse", "Salpingoophorectomy for both BPLN + NORMAL", "Burch",

// "Rectovaginal fistula repair", "Hysteroscopic Myomectomy", "Urethrovaginal fistula repair",

// ],

// "UROLOGY": [

// "ESWL (Extracorporeal Shock Wave Lithotripsy)", "Hypospadias Surgery", "Kidney Stone Removal",

// "Management of Erectile Dysfunction", "Nephrectomy", "Penile Implant", "Reversal of Vasectomy",

// "Trans Urethral Resection of Bladder Tumour (TURBT)", "Transurethral resection of the prostate (TURP)",

// "Vasectomy",

// ],

// "GASTROENTEROLOGY": [

// "ERCP (Diagnostic)", "Capsule Endoscopy", "Endoscopy (UGI Endoscopy)", "Choledochoduodenostomy",

// "Porto Caval Anastomosis", "Gastrectomy", "Oesophagectomy", "Heller Myotomy", "Sigmoid Resection",

// "Gastrojejunostomy", "Hiatus Hernia Repair",

// ],

// "BARIATRIC SURGERIES": ["Gastric Bypass", "Lap Gastric Banding", "Sleeve Gastrectomy"],

// "INFERTILITY": ["Intrauterine insemination", "In vitro fertilisation (IVF)"],

// "OPTHALMOLOGY": [

// "Cornea Transplant", "Lasik Surgery", "Macular Degeneration Surgery", "Vitrectomy", "Cataract",

// ],

// "PLASTIC AND RECONSTRUCTIVE SURGERIES": [

// "Ear Correction", "Scar Revision", "Spider Veins (Sclerotherapy)", "Liposuction Surgery",

// "Hair transplant", "Cleft Lip and Palate Repair", "Hand Microsurgery",

// ],

// "PSYCHIATRY": [

// "Anxiety Disorder Treatment", "Bipolar Disorder Treatment", "Depression Disorder Treatment",

// "Obsessive-Compulsive Disorder", "Schizophrenia Disorder Treatment", "Substance Use Disorder Treatment",

// ],

// "RADIATIONAL ONCOLOGY": [

// "Proton Therapy", "Chimeric Antigen Receptor T-cell therapy", "Cyberknife Treatment",

// "Stereotactic Radio Therapy", "Intensity-modulated radiotherapy (IMRT)", "Gamma Knife Treatment",

// ],

// "SURGICAL ONCOLOGY": [],

// "PAEDIATRIC SURGERIES": [],

// "DENTISTRY": [],

// "ONCOLOGY (MEDICAL, SURGICAL AND RADTIONAL ONCOLOGY)": [

// "Cancer Therapy", "Chemotherapy", "Radiotherapy", "Bone Marrow Transplant", "Surgical Oncology"

// ],

// "GYNAECOLOGY AND OBSTETRICS": [

// "Normal Delivery", "C-Section", "Hysterectomy", "Fibroid Removal", "Endometriosis Surgery"

// ],

// "GASTROENTEROLOGY (AND SURGRICAL GASTRO)": [

// "Colonoscopy", "Liver Transplant", "Endoscopy", "Gallbladder Surgery", "Bariatric Surgery"

// ],

// "UROLOGY AND NEPHROLOGY": [

// "Kidney Transplant", "Dialysis", "Prostate Surgery", "Stone Removal", "Urethral Reconstruction"

// ],

// "IVF AND INFERTILITY": [

// "IVF", "ICSI", "Egg Freezing", "Surrogacy", "Embryo Transfer"

// ],

// "PAEDIATRIC SURGERIES (ALL)": [

// "Pediatric Heart Surgery", "Pediatric Urology", "Cleft Lip/Palate Repair",

// "Pediatric Neurosurgery", "Pediatric Orthopedics"

// ],

// "GENERAL MEDICINE": [

// "Diabetes Management", "Hypertension Treatment", "Thyroid Disorders",

// "Infectious Diseases", "Routine Check-ups"

// ],

// "INTERVENTIONAL RADIOLOGY": [

// "Angioplasty", "Embolization", "Biopsy", "Stent Placement", "Vertebroplasty"

// ],

// "ORAL AND MAXILLOFACIAL SURGERY": [

// "Jaw Surgery", "Dental Implants", "Facial Trauma Repair", "Wisdom Tooth Extraction", "Cleft Jaw Surgery"

// ],

// "PALLIATIVE CARE": [

// "Pain Management", "End-of-Life Care", "Symptom Control", "Counseling", "Home Care Support"

// ],

// "GERAITRIC MEDICINE": [

// "Elderly Care", "Dementia Management", "Arthritis Care", "Chronic Disease Management", "Fall Prevention"

// ],

// "PHYSICAL MEDICINE AND REHABILITATION": [

// "Physiotherapy", "Stroke Rehabilitation", "Sports Injury Rehab", "Occupational Therapy", "Speech Therapy"

// ],

// "RESPIRATORY AND PULMONOLOGY MEDICINE": [

// "Asthma Management", "COPD Treatment", "Lung Cancer Care", "Pulmonary Rehabilitation", "Bronchoscopy"

// ],

// "OTHERS": ["Custom / Not Listed"],

// };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value,
//       ...(name === "specialty" ? { treatment: "" } : {}) 
//     }));
//   };

//   const handleFileChange = (e) => {
//     if (e.target.files && e.target.files.length > 0) {
//       setFormData(prev => ({ ...prev, documents: e.target.files[0] }));
//     }
//   };

//   const validateForm = () => {
//     if (!formData.name.trim()) return false;
//     if (!formData.phone.trim()) return false;
//     if (!formData.email.trim()) return false;
//     if (!formData.specialty) return false;
//     // Treatment is mandatory if specialty has treatments
//     const treatments = treatmentsMap[formData.specialty];
//     if (treatments && treatments.length > 0 && !formData.treatment) return false;
//     return true;
//   };

//   const handleSubmit = (action) => {
//     if (!validateForm()) {
//       alert("Please fill in all mandatory fields.");
//       return;
//     }

//     setIsSubmitting(true);

//     // 1. Create a timestamp
//     const timestamp = new Date().toLocaleString();

//     // 2. Use URLSearchParams (More reliable for Google Sheets than FormData)
//     const formParams = new URLSearchParams();
//     formParams.append('Date', timestamp);
//     formParams.append('Type', action); // 'quotation' or 'consultation'
//     formParams.append('Name', formData.name);
//     formParams.append('Phone', `'${formData.countryCode} ${formData.phone}`); // Adding ' prevents Excel math formatting
//     formParams.append('Email', formData.email);
//     formParams.append('Specialty', formData.specialty);
//     formParams.append('Treatment', formData.treatment);
//     formParams.append('Location', formData.location);
//     formParams.append('Comments', formData.comments);

//     // 3. Send using "no-cors"
//     fetch(GOOGLE_SCRIPT_URL, {
//       method: "POST",
//       body: formParams,
//       mode: "no-cors" // IMPORTANT: Allows the browser to send data to a different domain
//     })
//     .then(() => {
//         // With 'no-cors', we can't read the response, so if it doesn't throw an error, we assume success.
//         setIsSubmitting(false);
//         setShowSuccess(true);
//         console.log("Success: Data sent to sheet");
//     })
//     .catch((error) => {
//         setIsSubmitting(false);
//         console.error("Error:", error);
//         alert("Connection error. Please check your internet.");
//     });
//   };

//   const closePopupAndReturnHome = () => {
//     setShowSuccess(false);
//     navigate('/'); 
//     setFormData({
//         name: '', countryCode: '+91', phone: '', email: '', specialty: '', treatment: '', location: 'Jaipur', comments: '', documents: null
//     });
//   };

//   const availableTreatments =
//     formData.specialty && treatmentsMap[formData.specialty]
//       ? treatmentsMap[formData.specialty]
//       : [];

//   const inputBase = "bg-black/20 border border-white/10 text-white text-sm rounded-lg px-3 py-2.5 placeholder:text-white/40 focus:outline-none focus:border-[#D4C5A9] transition-colors";
//   const labelBase = "text-[10px] text-[#D4C5A9] uppercase tracking-wider ml-1 mb-1 block";

//   return (
//   <section className="relative w-full min-h-screen overflow-hidden flex flex-col items-center justify-center py-12">
      
//       {/* BACKGROUND */}
//       <div className="absolute inset-0 z-0">
//         <motion.div
//             initial={{ scale: 1.15 }}
//             animate={{ scale: 1 }}
//             transition={{ duration: 10, ease: "easeOut" }}
//             // Added 'will-change-transform' and 'transform-gpu' for smoother Safari animation
//             className="w-full h-full transform-gpu will-change-transform"
//         >
//            {/* Replace with your actual image path */}
//             <img src="/bgimgg.png" alt="Medical Tourism" className="w-full h-full object-cover"/>
//         </motion.div>
//         {/* Darker overlay */}
//         <div className="absolute inset-0 bg-[#0F2622]/60"></div>
//       </div>

//       {/* MAIN CONTENT WRAPPER */}
//       <div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex flex-col items-center gap-8">
        
//         {/* 1. TEXT ON TOP */}
//         <motion.div 
//             initial={{ opacity: 0, y: -30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-center space-y-4 max-w-4xl mx-auto pt-10"
//         >
//             <h1 className="text-3xl md:text-5xl font-serif text-white leading-tight">
//                 Doctor Led. <span className="text-[#D4C5A9] font-light">World Class HealthCare.</span>
//             </h1>
//             <h2 className="text-2xl md:text-4xl font-serif text-white leading-tight">
//                 Zero Waiting Time. <span className="text-[#D4C5A9] font-light">Transparent Pricing.</span> 
//             </h2>
//         </motion.div>

//         {/* 2. EXPANDED FORM IN MIDDLE */}
//         <motion.div 
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="w-full max-w-5xl" 
//         >
//             {/* SAFARI OPTIMIZATION:
//                1. transform-gpu: Forces a new stacking context to prevent blur bleed.
//                2. WebkitBackdropFilter: Explicitly targets Safari's blur engine.
//                3. bg-white/10: Ensures there is a fill for the blur to catch onto.
//             */}
//             <div 
//                 className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 md:p-8 rounded-3xl shadow-2xl relative transform-gpu"
//                 style={{ WebkitBackdropFilter: 'blur(24px)' }} 
//             >
                
//                 <h3 className="text-2xl font-serif text-white text-center mb-6">Get Personalized Quotation</h3>
                
//                 <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                    
//                     {/* ROW 1: Name, Phone, Email (3 Columns) */}
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                         {/* Name */}
//                         <input 
//                             type="text" 
//                             name="name"
//                             value={formData.name}
//                             onChange={handleChange}
//                             placeholder="Patient Name *" 
//                             className={`${inputBase} w-full`}
//                         />
                        
//                         {/* Phone */}
//                         <div className="flex gap-2">
//                              <div className="relative w-[100px] shrink-0">
//                                 <select
//                                     name="countryCode"
//                                     value={formData.countryCode}
//                                     onChange={handleChange}
//                                     className={`${inputBase} w-full appearance-none pr-6`}
//                                 >
//                                     {COUNTRY_CODES.map((item) => (
//                                         <option key={item.code + item.country} value={item.code} className="bg-[#0F2622]">
//                                             {item.label}
//                                         </option>
//                                     ))}
//                                 </select>
//                                 <ChevronDown className="absolute right-2 top-3 text-white/50 pointer-events-none" size={12} />
//                              </div>
//                              <input 
//                                 type="tel" 
//                                 name="phone"
//                                 value={formData.phone}
//                                 onChange={handleChange}
//                                 placeholder="Phone Number *" 
//                                 className={`${inputBase} flex-1`}
//                             />
//                         </div>

//                         {/* Email */}
//                         <input 
//                             type="email" 
//                             name="email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             placeholder="Email Address *" 
//                             className={`${inputBase} w-full`}
//                         />
//                     </div>

//                     {/* ROW 2: Specialty, Treatment, Location (3 Columns) */}
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                         {/* Specialty */}
//                         <div className="relative">
//                             <select name="specialty" value={formData.specialty} onChange={handleChange} className={`${inputBase} w-full appearance-none`}>
//                                 <option value="" className="bg-[#0F2622]">Select Specialty *</option>
//                                 {Object.keys(treatmentsMap).map(specialty => (
//                                     <option key={specialty} value={specialty} className="bg-[#0F2622]">{specialty}</option>
//                                 ))}
//                             </select>
//                             <ChevronDown className="absolute right-3 top-3.5 text-white/50 pointer-events-none" size={14} />
//                         </div>

//                         {/* Treatment */}
//                         <div className="relative">
//                             <select name="treatment" value={formData.treatment} onChange={handleChange} disabled={!formData.specialty} className={`${inputBase} w-full appearance-none disabled:opacity-50`}>
//                                 <option value="" className="bg-[#0F2622]">{formData.specialty ? "Select Treatment *" : "Select Specialty First"}</option>
//                                 {availableTreatments.map(treat => (
//                                     <option key={treat} value={treat} className="bg-[#0F2622]">{treat}</option>
//                                 ))}
//                             </select>
//                             <ChevronDown className="absolute right-3 top-3.5 text-white/50 pointer-events-none" size={14} />
//                         </div>

//                         {/* Location */}
//                         <div className="relative">
//                             <select name="location" value={formData.location} onChange={handleChange} className={`${inputBase} w-full appearance-none`}>
//                               <option value="" className="bg-[#0F2622]">Preferred Location</option>
//                               <option value="Jaipur" className="bg-[#0F2622]">Jaipur, India</option>
//                                 <option value="Bangalore" className="bg-[#0F2622]">Bangalore, India</option>
//                                 <option value="Delhi" className="bg-[#0F2622]">Delhi, India</option>
//                                 <option value="Mumbai" className="bg-[#0F2622]">Mumbai, India</option>
//                             </select>
//                             <ChevronDown className="absolute right-3 top-3.5 text-white/50 pointer-events-none" size={14} />
//                         </div>
//                     </div>

//                     {/* ROW 3: Comments & File Upload */}
//                     <div className="flex gap-4 items-center">
//                         <input 
//                             name="comments" 
//                             value={formData.comments} 
//                             onChange={handleChange} 
//                             type="text" 
//                             placeholder="Describe your medical needs or specific requirements..." 
//                             className={`${inputBase} flex-1`}
//                         />
//                         <div className="relative group shrink-0">
//                             <input type="file" id="file-upload" className="hidden" onChange={handleFileChange}/>
//                             <label htmlFor="file-upload" className="flex items-center gap-2 px-4 h-[42px] border border-white/20 rounded-lg bg-black/10 hover:bg-black/20 text-white/70 hover:text-[#D4C5A9] cursor-pointer transition-colors" title="Upload Documents">
//                                 <Paperclip size={18} />
//                                 <span className="text-sm hidden sm:inline">Attach Reports</span>
//                             </label>
//                         </div>
//                     </div>
                    
//                     <div className="h-px bg-white/10 my-4"></div>

//                     {/* Submit Button */}
//                     <div className="flex justify-center">
//                         <button 
//                             type="button" 
//                             disabled={isSubmitting}
//                             onClick={() => handleSubmit('quotation')} 
//                             className="w-full md:w-1/3 bg-[#D4C5A9] hover:bg-[#C0B090] text-[#0F2622] text-base font-bold py-3.5 rounded-lg transition-all active:scale-95 shadow-lg shadow-[#D4C5A9]/20 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//                         >
//                             {isSubmitting ? <Loader2 className="animate-spin" size={18} /> : "Get Free Quotation"}
//                         </button>
//                     </div>
//                 </form>

//                 {/* Trust Badges */}
//                 <div className="flex justify-center gap-8 mt-6 pt-4 border-t border-white/10 opacity-70">
//                     <div className="flex items-center gap-2"><ShieldCheck className="text-[#D4C5A9]" size={16} /><span className="text-[10px] md:text-xs uppercase tracking-widest text-white">Verified Hospitals</span></div>
//                     <div className="flex items-center gap-2"><Globe className="text-[#D4C5A9]" size={16} /><span className="text-[10px] md:text-xs uppercase tracking-widest text-white">Intl. Standards</span></div>
//                     <div className="flex items-center gap-2"><Heart className="text-[#D4C5A9]" size={16} /><span className="text-[10px] md:text-xs uppercase tracking-widest text-white">24/7 Support</span></div>
//                 </div>
//             </div>
//         </motion.div>
//       </div>

//       {/* SUCCESS POPUP (Unchanged) */}
//       <AnimatePresence>
//         {showSuccess && (
//           <motion.div 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
//           >
//             <motion.div 
//               initial={{ scale: 0.9, opacity: 0, y: 20 }}
//               animate={{ scale: 1, opacity: 1, y: 0 }}
//               exit={{ scale: 0.9, opacity: 0, y: 20 }}
//               className="bg-white rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl relative"
//             >
//               <button 
//                 onClick={closePopupAndReturnHome} 
//                 className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
//               >
//                 <X size={20} />
//               </button>

//               <div className="mx-auto w-16 h-16 bg-[#1A3C34]/10 rounded-full flex items-center justify-center mb-6">
//                 <CheckCircle className="text-[#1A3C34] w-10 h-10" />
//               </div>

//               <h3 className="text-2xl font-serif text-[#1A3C34] mb-2">Request Received</h3>
//               <p className="text-gray-600 text-sm leading-relaxed mb-6">
//                 Thank you for trusting us. Our medical team will review your details and connect with you shortly.
//               </p>

//               <button 
//                 onClick={closePopupAndReturnHome}
//                 className="w-full bg-[#1A3C34] text-white font-medium py-3 rounded-lg hover:bg-[#142F29] transition-colors"
//               >
//                 Return to Home
//               </button>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//     </section>
//   );
// }

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  Paperclip, 
  Loader2, 
  ShieldCheck, 
  Globe, 
  Heart, 
  X, 
  CheckCircle 
} from 'lucide-react';

// Mock Data / Constants
const COUNTRY_CODES = [

{ code: "+93", country: "AF", label: "🇦🇫 Afghanistan (+93)" },

{ code: "+355", country: "AL", label: "🇦🇱 Albania (+355)" },

{ code: "+213", country: "DZ", label: "🇩🇿 Algeria (+213)" },

{ code: "+1", country: "AS", label: "🇦🇸 American Samoa (+1)" },

{ code: "+376", country: "AD", label: "🇦🇩 Andorra (+376)" },

{ code: "+244", country: "AO", label: "🇦🇴 Angola (+244)" },

{ code: "+1", country: "AI", label: "🇦🇮 Anguilla (+1)" },

{ code: "+1", country: "AG", label: "🇦🇬 Antigua & Barbuda (+1)" },

{ code: "+54", country: "AR", label: "🇦🇷 Argentina (+54)" },

{ code: "+374", country: "AM", label: "🇦🇲 Armenia (+374)" },

{ code: "+297", country: "AW", label: "🇦🇼 Aruba (+297)" },

{ code: "+61", country: "AU", label: "🇦🇺 Australia (+61)" },

{ code: "+43", country: "AT", label: "🇦🇹 Austria (+43)" },

{ code: "+994", country: "AZ", label: "🇦🇿 Azerbaijan (+994)" },

{ code: "+1", country: "BS", label: "🇧🇸 Bahamas (+1)" },

{ code: "+973", country: "BH", label: "🇧🇭 Bahrain (+973)" },

{ code: "+880", country: "BD", label: "🇧🇩 Bangladesh (+880)" },

{ code: "+1", country: "BB", label: "🇧🇧 Barbados (+1)" },

{ code: "+375", country: "BY", label: "🇧🇾 Belarus (+375)" },

{ code: "+32", country: "BE", label: "🇧🇪 Belgium (+32)" },

{ code: "+501", country: "BZ", label: "🇧🇿 Belize (+501)" },

{ code: "+229", country: "BJ", label: "🇧🇯 Benin (+229)" },

{ code: "+1", country: "BM", label: "🇧🇲 Bermuda (+1)" },

{ code: "+975", country: "BT", label: "🇧🇹 Bhutan (+975)" },

{ code: "+591", country: "BO", label: "🇧🇴 Bolivia (+591)" },

{ code: "+387", country: "BA", label: "🇧🇦 Bosnia & Herzegovina (+387)" },

{ code: "+267", country: "BW", label: "🇧🇼 Botswana (+267)" },

{ code: "+55", country: "BR", label: "🇧🇷 Brazil (+55)" },

{ code: "+1", country: "VG", label: "🇻🇬 British Virgin Islands (+1)" },

{ code: "+673", country: "BN", label: "🇧🇳 Brunei (+673)" },

{ code: "+359", country: "BG", label: "🇧🇬 Bulgaria (+359)" },

{ code: "+226", country: "BF", label: "🇧🇫 Burkina Faso (+226)" },

{ code: "+257", country: "BI", label: "🇧🇮 Burundi (+257)" },

{ code: "+855", country: "KH", label: "🇰🇭 Cambodia (+855)" },

{ code: "+237", country: "CM", label: "🇨🇲 Cameroon (+237)" },

{ code: "+1", country: "CA", label: "🇨🇦 Canada (+1)" },

{ code: "+238", country: "CV", label: "🇨🇻 Cape Verde (+238)" },

{ code: "+1", country: "KY", label: "🇰🇾 Cayman Islands (+1)" },

{ code: "+236", country: "CF", label: "🇨🇫 Central African Republic (+236)" },

{ code: "+235", country: "TD", label: "🇹🇩 Chad (+235)" },

{ code: "+56", country: "CL", label: "🇨🇱 Chile (+56)" },

{ code: "+86", country: "CN", label: "🇨🇳 China (+86)" },

{ code: "+57", country: "CO", label: "🇨🇴 Colombia (+57)" },

{ code: "+269", country: "KM", label: "🇰🇲 Comoros (+269)" },

{ code: "+242", country: "CG", label: "🇨🇬 Congo (+242)" },

{ code: "+243", country: "CD", label: "🇨🇩 Congo, Democratic Republic (+243)" },

{ code: "+682", country: "CK", label: "🇨🇰 Cook Islands (+682)" },

{ code: "+506", country: "CR", label: "🇨🇷 Costa Rica (+506)" },

{ code: "+385", country: "HR", label: "🇭🇷 Croatia (+385)" },

{ code: "+53", country: "CU", label: "🇨🇺 Cuba (+53)" },

{ code: "+599", country: "CW", label: "🇨🇼 Curaçao (+599)" },

{ code: "+357", country: "CY", label: "🇨🇾 Cyprus (+357)" },

{ code: "+420", country: "CZ", label: "🇨🇿 Czech Republic (+420)" },

{ code: "+45", country: "DK", label: "🇩🇰 Denmark (+45)" },

{ code: "+253", country: "DJ", label: "🇩🇯 Djibouti (+253)" },

{ code: "+1", country: "DM", label: "🇩🇲 Dominica (+1)" },

{ code: "+1", country: "DO", label: "🇩🇴 Dominican Republic (+1)" },

{ code: "+593", country: "EC", label: "🇪🇨 Ecuador (+593)" },

{ code: "+20", country: "EG", label: "🇪🇬 Egypt (+20)" },

{ code: "+503", country: "SV", label: "🇸🇻 El Salvador (+503)" },

{ code: "+240", country: "GQ", label: "🇬🇶 Equatorial Guinea (+240)" },

{ code: "+291", country: "ER", label: "🇪🇷 Eritrea (+291)" },

{ code: "+372", country: "EE", label: "🇪🇪 Estonia (+372)" },

{ code: "+251", country: "ET", label: "🇪🇹 Ethiopia (+251)" },

{ code: "+500", country: "FK", label: "🇫🇰 Falkland Islands (+500)" },

{ code: "+298", country: "FO", label: "🇫🇴 Faroe Islands (+298)" },

{ code: "+679", country: "FJ", label: "🇫🇯 Fiji (+679)" },

{ code: "+358", country: "FI", label: "🇫🇮 Finland (+358)" },

{ code: "+33", country: "FR", label: "🇫🇷 France (+33)" },

{ code: "+594", country: "GF", label: "🇬🇫 French Guiana (+594)" },

{ code: "+689", country: "PF", label: "🇵🇫 French Polynesia (+689)" },

{ code: "+241", country: "GA", label: "🇬🇦 Gabon (+241)" },

{ code: "+220", country: "GM", label: "🇬🇲 Gambia (+220)" },

{ code: "+995", country: "GE", label: "🇬🇪 Georgia (+995)" },

{ code: "+49", country: "DE", label: "🇩🇪 Germany (+49)" },

{ code: "+233", country: "GH", label: "🇬🇭 Ghana (+233)" },

{ code: "+350", country: "GI", label: "🇬🇮 Gibraltar (+350)" },

{ code: "+30", country: "GR", label: "🇬🇷 Greece (+30)" },

{ code: "+299", country: "GL", label: "🇬🇱 Greenland (+299)" },

{ code: "+1", country: "GD", label: "🇬🇩 Grenada (+1)" },

{ code: "+590", country: "GP", label: "🇬🇵 Guadeloupe (+590)" },

{ code: "+1", country: "GU", label: "🇬🇺 Guam (+1)" },

{ code: "+502", country: "GT", label: "🇬🇹 Guatemala (+502)" },

{ code: "+224", country: "GN", label: "🇬🇳 Guinea (+224)" },

{ code: "+245", country: "GW", label: "🇬🇼 Guinea-Bissau (+245)" },

{ code: "+592", country: "GY", label: "🇬🇾 Guyana (+592)" },

{ code: "+509", country: "HT", label: "🇭🇹 Haiti (+509)" },

{ code: "+504", country: "HN", label: "🇭🇳 Honduras (+504)" },

{ code: "+852", country: "HK", label: "🇭🇰 Hong Kong (+852)" },

{ code: "+36", country: "HU", label: "🇭🇺 Hungary (+36)" },

{ code: "+354", country: "IS", label: "🇮🇸 Iceland (+354)" },

{ code: "+91", country: "IN", label: "🇮🇳 India (+91)" },

{ code: "+62", country: "ID", label: "🇮🇩 Indonesia (+62)" },

{ code: "+98", country: "IR", label: "🇮🇷 Iran (+98)" },

{ code: "+964", country: "IQ", label: "🇮🇶 Iraq (+964)" },

{ code: "+353", country: "IE", label: "🇮🇪 Ireland (+353)" },

{ code: "+972", country: "IL", label: "🇮🇱 Israel (+972)" },

{ code: "+39", country: "IT", label: "🇮🇹 Italy (+39)" },

{ code: "+225", country: "CI", label: "🇨🇮 Ivory Coast (+225)" },

{ code: "+1", country: "JM", label: "🇯🇲 Jamaica (+1)" },

{ code: "+81", country: "JP", label: "🇯🇵 Japan (+81)" },

{ code: "+962", country: "JO", label: "🇯🇴 Jordan (+962)" },

{ code: "+7", country: "KZ", label: "🇰🇿 Kazakhstan (+7)" },

{ code: "+254", country: "KE", label: "🇰🇪 Kenya (+254)" },

{ code: "+686", country: "KI", label: "🇰🇮 Kiribati (+686)" },

{ code: "+383", country: "XK", label: "🇽🇰 Kosovo (+383)" },

{ code: "+965", country: "KW", label: "🇰🇼 Kuwait (+965)" },

{ code: "+996", country: "KG", label: "🇰🇬 Kyrgyzstan (+996)" },

{ code: "+856", country: "LA", label: "🇱🇦 Laos (+856)" },

{ code: "+371", country: "LV", label: "🇱🇻 Latvia (+371)" },

{ code: "+961", country: "LB", label: "🇱🇧 Lebanon (+961)" },

{ code: "+266", country: "LS", label: "🇱🇸 Lesotho (+266)" },

{ code: "+231", country: "LR", label: "🇱🇷 Liberia (+231)" },

{ code: "+218", country: "LY", label: "🇱🇾 Libya (+218)" },

{ code: "+423", country: "LI", label: "🇱🇮 Liechtenstein (+423)" },

{ code: "+370", country: "LT", label: "🇱🇹 Lithuania (+370)" },

{ code: "+352", country: "LU", label: "🇱🇺 Luxembourg (+352)" },

{ code: "+853", country: "MO", label: "🇲🇴 Macau (+853)" },

{ code: "+389", country: "MK", label: "🇲🇰 Macedonia (+389)" },

{ code: "+261", country: "MG", label: "🇲🇬 Madagascar (+261)" },

{ code: "+265", country: "MW", label: "🇲🇼 Malawi (+265)" },

{ code: "+60", country: "MY", label: "🇲🇾 Malaysia (+60)" },

{ code: "+960", country: "MV", label: "🇲🇻 Maldives (+960)" },

{ code: "+223", country: "ML", label: "🇲🇱 Mali (+223)" },

{ code: "+356", country: "MT", label: "🇲🇹 Malta (+356)" },

{ code: "+692", country: "MH", label: "🇲🇭 Marshall Islands (+692)" },

{ code: "+596", country: "MQ", label: "🇲🇶 Martinique (+596)" },

{ code: "+222", country: "MR", label: "🇲🇷 Mauritania (+222)" },

{ code: "+230", country: "MU", label: "🇲🇺 Mauritius (+230)" },

{ code: "+52", country: "MX", label: "🇲🇽 Mexico (+52)" },

{ code: "+691", country: "FM", label: "🇫🇲 Micronesia (+691)" },

{ code: "+373", country: "MD", label: "🇲🇩 Moldova (+373)" },

{ code: "+377", country: "MC", label: "🇲🇨 Monaco (+377)" },

{ code: "+976", country: "MN", label: "🇲🇳 Mongolia (+976)" },

{ code: "+382", country: "ME", label: "🇲🇪 Montenegro (+382)" },

{ code: "+1", country: "MS", label: "🇲🇸 Montserrat (+1)" },

{ code: "+212", country: "MA", label: "🇲🇦 Morocco (+212)" },

{ code: "+258", country: "MZ", label: "🇲🇿 Mozambique (+258)" },

{ code: "+95", country: "MM", label: "🇲🇲 Myanmar (+95)" },

{ code: "+264", country: "NA", label: "🇳🇦 Namibia (+264)" },

{ code: "+674", country: "NR", label: "🇳🇷 Nauru (+674)" },

{ code: "+977", country: "NP", label: "🇳🇵 Nepal (+977)" },

{ code: "+31", country: "NL", label: "🇳🇱 Netherlands (+31)" },

{ code: "+687", country: "NC", label: "🇳🇨 New Caledonia (+687)" },

{ code: "+64", country: "NZ", label: "🇳🇿 New Zealand (+64)" },

{ code: "+505", country: "NI", label: "🇳🇮 Nicaragua (+505)" },

{ code: "+227", country: "NE", label: "🇳🇪 Niger (+227)" },

{ code: "+234", country: "NG", label: "🇳🇬 Nigeria (+234)" },

{ code: "+683", country: "NU", label: "🇳🇺 Niue (+683)" },

{ code: "+850", country: "KP", label: "🇰🇵 North Korea (+850)" },

{ code: "+1", country: "MP", label: "🇲🇵 Northern Mariana Islands (+1)" },

{ code: "+47", country: "NO", label: "🇳🇴 Norway (+47)" },

{ code: "+968", country: "OM", label: "🇴🇲 Oman (+968)" },

{ code: "+92", country: "PK", label: "🇵🇰 Pakistan (+92)" },

{ code: "+680", country: "PW", label: "🇵🇼 Palau (+680)" },

{ code: "+970", country: "PS", label: "🇵🇸 Palestine (+970)" },

{ code: "+507", country: "PA", label: "🇵🇦 Panama (+507)" },

{ code: "+675", country: "PG", label: "🇵🇬 Papua New Guinea (+675)" },

{ code: "+595", country: "PY", label: "🇵🇾 Paraguay (+595)" },

{ code: "+51", country: "PE", label: "🇵🇪 Peru (+51)" },

{ code: "+63", country: "PH", label: "🇵🇭 Philippines (+63)" },

{ code: "+48", country: "PL", label: "🇵🇱 Poland (+48)" },

{ code: "+351", country: "PT", label: "🇵🇹 Portugal (+351)" },

{ code: "+1", country: "PR", label: "🇵🇷 Puerto Rico (+1)" },

{ code: "+974", country: "QA", label: "🇶🇦 Qatar (+974)" },

{ code: "+262", country: "RE", label: "🇷🇪 Réunion (+262)" },

{ code: "+40", country: "RO", label: "🇷🇴 Romania (+40)" },

{ code: "+7", country: "RU", label: "🇷🇺 Russia (+7)" },

{ code: "+250", country: "RW", label: "🇷🇼 Rwanda (+250)" },

{ code: "+685", country: "WS", label: "🇼🇸 Samoa (+685)" },

{ code: "+378", country: "SM", label: "🇸🇲 San Marino (+378)" },

{ code: "+239", country: "ST", label: "🇸🇹 São Tomé & Príncipe (+239)" },

{ code: "+966", country: "SA", label: "🇸🇦 Saudi Arabia (+966)" },

{ code: "+221", country: "SN", label: "🇸🇳 Senegal (+221)" },

{ code: "+381", country: "RS", label: "🇷🇸 Serbia (+381)" },

{ code: "+248", country: "SC", label: "🇸🇨 Seychelles (+248)" },

{ code: "+232", country: "SL", label: "🇸🇱 Sierra Leone (+232)" },

{ code: "+65", country: "SG", label: "🇸🇬 Singapore (+65)" },

{ code: "+1", country: "SX", label: "🇸🇽 Sint Maarten (+1)" },

{ code: "+421", country: "SK", label: "🇸🇰 Slovakia (+421)" },

{ code: "+386", country: "SI", label: "🇸🇮 Slovenia (+386)" },

{ code: "+677", country: "SB", label: "🇸🇧 Solomon Islands (+677)" },

{ code: "+27", country: "ZA", label: "🇿🇦 South Africa (+27)" },

{ code: "+82", country: "KR", label: "🇰🇷 South Korea (+82)" },

{ code: "+211", country: "SS", label: "🇸🇸 South Sudan (+211)" },

{ code: "+34", country: "ES", label: "🇪🇸 Spain (+34)" },

{ code: "+94", country: "LK", label: "🇱🇰 Sri Lanka (+94)" },

{ code: "+1", country: "KN", label: "🇰🇳 St Kitts & Nevis (+1)" },

{ code: "+1", country: "LC", label: "🇱🇨 St Lucia (+1)" },

{ code: "+1", country: "VC", label: "🇻🇨 St Vincent & Grenadines (+1)" },

{ code: "+249", country: "SD", label: "🇸🇩 Sudan (+249)" },

{ code: "+597", country: "SR", label: "🇸🇷 Suriname (+597)" },

{ code: "+268", country: "SZ", label: "🇸🇿 Swaziland (+268)" },

{ code: "+46", country: "SE", label: "🇸🇪 Sweden (+46)" },

{ code: "+41", country: "CH", label: "🇨🇭 Switzerland (+41)" },

{ code: "+963", country: "SY", label: "🇸🇾 Syria (+963)" },

{ code: "+886", country: "TW", label: "🇹🇼 Taiwan (+886)" },

{ code: "+992", country: "TJ", label: "🇹🇯 Tajikistan (+992)" },

{ code: "+255", country: "TZ", label: "🇹🇿 Tanzania (+255)" },

{ code: "+66", country: "TH", label: "🇹🇭 Thailand (+66)" },

{ code: "+670", country: "TL", label: "🇹🇱 Timor-Leste (+670)" },

{ code: "+228", country: "TG", label: "🇹🇬 Togo (+228)" },

{ code: "+690", country: "TK", label: "🇹🇰 Tokelau (+690)" },

{ code: "+676", country: "TO", label: "🇹🇴 Tonga (+676)" },

{ code: "+1", country: "TT", label: "🇹🇹 Trinidad & Tobago (+1)" },

{ code: "+216", country: "TN", label: "🇹🇳 Tunisia (+216)" },

{ code: "+90", country: "TR", label: "🇹🇷 Turkey (+90)" },

{ code: "+993", country: "TM", label: "🇹🇲 Turkmenistan (+993)" },

{ code: "+1", country: "TC", label: "🇹🇨 Turks & Caicos (+1)" },

{ code: "+688", country: "TV", label: "🇹🇻 Tuvalu (+688)" },

{ code: "+256", country: "UG", label: "🇺🇬 Uganda (+256)" },

{ code: "+380", country: "UA", label: "🇺🇦 Ukraine (+380)" },

{ code: "+971", country: "AE", label: "🇦🇪 United Arab Emirates (+971)" },

{ code: "+44", country: "GB", label: "🇬🇧 United Kingdom (+44)" },

{ code: "+1", country: "US", label: "🇺🇸 United States (+1)" },

{ code: "+598", country: "UY", label: "🇺🇾 Uruguay (+598)" },

{ code: "+1", country: "VI", label: "🇻🇮 US Virgin Islands (+1)" },

{ code: "+998", country: "UZ", label: "🇺🇿 Uzbekistan (+998)" },

{ code: "+678", country: "VU", label: "🇻🇺 Vanuatu (+678)" },

{ code: "+58", country: "VE", label: "🇻🇪 Venezuela (+58)" },

{ code: "+84", country: "VN", label: "🇻🇳 Vietnam (+84)" },

{ code: "+681", country: "WF", label: "🇼🇫 Wallis & Futuna (+681)" },
{ code: "+967", country: "YE", label: "🇾🇪 Yemen (+967)" },
{ code: "+260", country: "ZM", label: "🇿🇲 Zambia (+260)" },
{ code: "+263", country: "ZW", label: "🇿🇼 Zimbabwe (+263)" }

];

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
const availableTreatments = ["Knee Replacement", "Hip Replacement", "Angioplasty"]; // Simplified for preview

export default function HeroForm() {
    const [formData, setFormData] = useState({
        name: '',
        countryCode: '+91',
        phone: '',
        email: '',
        specialty: '',
        treatment: '',
        location: '',
        comments: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = () => {};
    const handleSubmit = () => {
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setShowSuccess(true);
        }, 1500);
    };
    const closePopupAndReturnHome = () => setShowSuccess(false);

    // --- SAFARI OPTIMIZED INPUT STYLES ---
    // Added 'appearance-none' to remove default Safari styling
    // Added high contrast text colors and a specific background color to fix the dark-on-dark issue
    const inputBase = "w-full bg-[#0F2622]/60 hover:bg-[#0F2622]/80 border border-white/10 rounded-lg px-4 py-3.5 text-white placeholder:text-white/40 focus:outline-none focus:border-[#D4C5A9] focus:bg-[#0F2622] transition-all duration-300 appearance-none text-sm md:text-base";
    const labelBase = "block text-white/80 text-xs font-bold uppercase tracking-wider mb-1.5 ml-1";

    return (
        <section className="relative w-full min-h-screen overflow-hidden flex flex-col items-center justify-center py-12">
            
            {/* BACKGROUND */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    initial={{ scale: 1.15 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 10, ease: "easeOut" }}
                    // SAFARI FIX: 'will-change-transform' prevents jitter during slow zooms
                    // SAFARI FIX: 'transform-gpu' forces hardware acceleration
                    className="w-full h-full transform-gpu will-change-transform"
                >
                    <img src="/bgimgg.png" alt="Medical Tourism" className="w-full h-full object-cover"/>
                </motion.div>
                {/* Darker overlay for text contrast */}
                <div className="absolute inset-0 bg-[#0F2622]/60"></div>
            </div>

            {/* MAIN CONTENT WRAPPER */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex flex-col items-center gap-8">
                
                {/* 1. TEXT ON TOP */}
                <motion.div 
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-center space-y-4 max-w-4xl mx-auto pt-10"
                >
                    <h1 className="text-3xl md:text-5xl font-serif text-white leading-tight">
                        DOCTOR LED. <span className="text-[#D4C5A9] font-light">World Class HealthCare.</span>
                    </h1>
                    <h2 className="text-2xl md:text-4xl font-serif text-white leading-tight">
                        ZERO WAITING TIME. <span className="text-[#D4C5A9] font-light">Transparent Pricing.</span> 
                    </h2>
                </motion.div>

                {/* 2. EXPANDED FORM IN MIDDLE */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="w-full max-w-5xl" 
                >
                    {/* SAFARI FIX: 
                        1. transform-gpu: Creates a new stacking context.
                        2. WebkitBackdropFilter: Explicitly targets Safari's blur engine.
                    */}
                    <div 
                        className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 md:p-8 rounded-3xl shadow-2xl relative transform-gpu"
                        style={{ WebkitBackdropFilter: 'blur(20px)' }}
                    >
                        
                        <h3 className="text-2xl font-serif text-white text-center mb-6">Get Personalized Quotation</h3>
                        
                        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                            
                            {/* ROW 1: Name, Phone, Email */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <input 
                                    type="text" 
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Patient Name *" 
                                    className={inputBase}
                                />
                                
                                <div className="flex gap-2">
                                    <div className="relative w-[110px] shrink-0">
                                        <select
                                            name="countryCode"
                                            value={formData.countryCode}
                                            onChange={handleChange}
                                            className={`${inputBase} pr-8`}
                                        >
                                            {COUNTRY_CODES.map((item) => (
                                                <option key={item.code + item.country} value={item.code} className="bg-[#0F2622] text-white">
                                                    {item.label}
                                                </option>
                                            ))}
                                        </select>
                                        <ChevronDown className="absolute right-3 top-4 text-white/50 pointer-events-none" size={12} />
                                    </div>
                                    <input 
                                        type="tel" 
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Phone Number *" 
                                        className={inputBase}
                                    />
                                </div>

                                <input 
                                    type="email" 
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email Address *" 
                                    className={inputBase}
                                />
                            </div>

                            {/* ROW 2: Specialty, Treatment, Location */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="relative">
                                    <select name="specialty" value={formData.specialty} onChange={handleChange} className={inputBase}>
                                        <option value="" className="bg-[#0F2622] text-gray-400">Select Specialty *</option>
                                        {Object.keys(treatmentsMap).map(specialty => (
                                            <option key={specialty} value={specialty} className="bg-[#0F2622] text-white">{specialty}</option>
                                        ))}
                                    </select>
                                    <ChevronDown className="absolute right-4 top-4 text-white/50 pointer-events-none" size={14} />
                                </div>

                                <div className="relative">
                                    <select name="treatment" value={formData.treatment} onChange={handleChange} disabled={!formData.specialty} className={`${inputBase} disabled:opacity-50 disabled:cursor-not-allowed`}>
                                        <option value="" className="bg-[#0F2622] text-gray-400">{formData.specialty ? "Select Treatment *" : "Select Specialty First"}</option>
                                        {availableTreatments.map(treat => (
                                            <option key={treat} value={treat} className="bg-[#0F2622] text-white">{treat}</option>
                                        ))}
                                    </select>
                                    <ChevronDown className="absolute right-4 top-4 text-white/50 pointer-events-none" size={14} />
                                </div>

                                <div className="relative">
                                    <select name="location" value={formData.location} onChange={handleChange} className={inputBase}>
                                        <option value="" className="bg-[#0F2622] text-gray-400">Preferred Location</option>
                                        <option value="Jaipur" className="bg-[#0F2622] text-white">Jaipur, India</option>
                                        <option value="Bangalore" className="bg-[#0F2622] text-white">Bangalore, India</option>
                                        <option value="Delhi" className="bg-[#0F2622] text-white">Delhi, India</option>
                                        <option value="Mumbai" className="bg-[#0F2622] text-white">Mumbai, India</option>
                                    </select>
                                    <ChevronDown className="absolute right-4 top-4 text-white/50 pointer-events-none" size={14} />
                                </div>
                            </div>

                            {/* ROW 3: Comments & File Upload */}
                            <div className="flex gap-4 items-center">
                                <input 
                                    name="comments" 
                                    value={formData.comments} 
                                    onChange={handleChange} 
                                    type="text" 
                                    placeholder="Describe your medical needs..." 
                                    className={`${inputBase} flex-1`}
                                />
                                <div className="relative group shrink-0">
                                    <input type="file" id="file-upload" className="hidden" onChange={handleFileChange}/>
                                    <label 
                                        htmlFor="file-upload" 
                                        className="flex items-center gap-2 px-6 h-[50px] border border-white/20 rounded-lg bg-[#0F2622]/60 hover:bg-[#0F2622]/80 text-white/80 hover:text-[#D4C5A9] cursor-pointer transition-colors" 
                                        title="Upload Documents"
                                    >
                                        <Paperclip size={18} />
                                        <span className="text-sm font-medium hidden sm:inline">Attach Reports</span>
                                    </label>
                                </div>
                            </div>
                            
                            <div className="h-px bg-white/10 my-6"></div>

                            {/* Submit Button */}
                            <div className="flex justify-center">
                                <button 
                                    type="button" 
                                    disabled={isSubmitting}
                                    onClick={() => handleSubmit('quotation')} 
                                    className="w-full md:w-1/3 bg-[#D4C5A9] hover:bg-[#C0B090] text-[#0F2622] text-base font-bold py-4 rounded-lg transition-all active:scale-95 shadow-lg shadow-[#D4C5A9]/20 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? <Loader2 className="animate-spin" size={18} /> : "Get Free Quotation"}
                                </button>
                            </div>
                        </form>

                        {/* Trust Badges */}
                        <div className="flex justify-center gap-8 mt-6 pt-4 border-t border-white/10 opacity-70">
                            <div className="flex items-center gap-2"><ShieldCheck className="text-[#D4C5A9]" size={16} /><span className="text-[10px] md:text-xs uppercase tracking-widest text-white">Verified Hospitals</span></div>
                            <div className="flex items-center gap-2"><Globe className="text-[#D4C5A9]" size={16} /><span className="text-[10px] md:text-xs uppercase tracking-widest text-white">Intl. Standards</span></div>
                            <div className="flex items-center gap-2"><Heart className="text-[#D4C5A9]" size={16} /><span className="text-[10px] md:text-xs uppercase tracking-widest text-white">24/7 Support</span></div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* SUCCESS POPUP */}
            <AnimatePresence>
                {showSuccess && (
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
                >
                    <motion.div 
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    className="bg-white rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl relative"
                    >
                    <button 
                        onClick={closePopupAndReturnHome} 
                        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        <X size={20} />
                    </button>

                    <div className="mx-auto w-16 h-16 bg-[#1A3C34]/10 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle className="text-[#1A3C34] w-10 h-10" />
                    </div>

                    <h3 className="text-2xl font-serif text-[#1A3C34] mb-2">Request Received</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                        Thank you for trusting us. Our medical team will review your details and connect with you shortly.
                    </p>

                    <button 
                        onClick={closePopupAndReturnHome}
                        className="w-full bg-[#1A3C34] text-white font-medium py-3 rounded-lg hover:bg-[#142F29] transition-colors"
                    >
                        Return to Home
                    </button>
                    </motion.div>
                </motion.div>
                )}
            </AnimatePresence>

        </section>
    );
}