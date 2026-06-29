"use client";

import { useState } from "react";
import Link from "next/link";

const GUIDES = [
  {
    id: 1,
    name: "Rajesh Kumar",
    reg: "MT-67432",
    status: "ON-SPOT",
    statusColor: "bg-emerald-500",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    specialty: "Mughal Architecture, Vedic Texts & Northern India Heritage Walks",
    rating: 4.9,
    experience: "8+",
    languages: ["Hindi", "English", "Sanskrit"],
    price: 1200,
    available: true,
    booked: false,
  },
  {
    id: 2,
    name: "Aarav Mehta",
    reg: "MT-51029",
    status: "ON-SPOT",
    statusColor: "bg-emerald-500",
    photo: "https://randomuser.me/api/portraits/men/45.jpg",
    specialty: "Mughal Engineering Symmetries & Rajputana Fortifications Analyst",
    rating: 4.86,
    experience: "7",
    languages: ["English", "Hindi", "Gujarati"],
    price: 1200,
    available: true,
    booked: false,
  },
  {
    id: 3,
    name: "Sunita Sharma",
    reg: "MT-21590",
    status: "ON-TOUR",
    statusColor: "bg-rose-500",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    specialty: "Ancient Indian Dynasties, Mughal Folklore & Vedic Philosophy Specialist",
    rating: 4.95,
    experience: "11",
    languages: ["Hindi", "English", "Punjabi"],
    price: 1200,
    available: false,
    availableIn: "1h 15m",
    booked: true,
  },
  {
    id: 4,
    name: "Sanjay Prasad",
    reg: "MT-11204",
    status: "ON-TOUR",
    statusColor: "bg-rose-500",
    photo: "https://randomuser.me/api/portraits/men/77.jpg",
    specialty: "Imperial Delhi Capital Planning & Taj Mahal Symmetry Expert",
    rating: 4.78,
    experience: "9",
    languages: ["Hindi", "English"],
    price: 1200,
    available: true,
    booked: false,
  },
];

export default function TajMahalPage() {
  const [hubExpanded, setHubExpanded] = useState(false);

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">

        {/* Back button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 bg-white border border-gray-200 rounded-full px-4 py-2 mb-6 transition-colors shadow-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Dashboard
        </Link>

        {/* Visitor Advisory Banner */}
        <div className="rounded-2xl overflow-hidden mb-8" style={{ background: "linear-gradient(135deg, #582A4A 0%, #3D1A35 100%)" }}>
          <button
            className="w-full text-left p-5 flex items-center justify-between gap-4"
            onClick={() => setHubExpanded(!hubExpanded)}
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1 flex-wrap">
                  <span className="bg-yellow-400 text-yellow-900 text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full">
                    Official Visitor Advisory
                  </span>
                  <span className="text-white/60 text-[10px] uppercase tracking-wider flex items-center gap-1">
                    <span className="text-yellow-400">★</span> Aligned with Archaeological Survey of India Guidelines
                  </span>
                </div>
                <h2 className="text-white font-bold text-base sm:text-lg" style={{ fontFamily: "var(--font-playfair)" }}>
                  The Definitive Taj Mahal Visitor Guide &amp; Entry Rules
                </h2>
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-white/70 text-xs font-medium hidden sm:block">
                {hubExpanded ? "HIDE VISITOR HUB" : "EXPAND VISITOR HUB"}
              </span>
              <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white transition-transform duration-300" style={{ transform: hubExpanded ? "rotate(45deg)" : "rotate(0deg)" }}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
            </div>
          </button>

          {/* Expandable content */}
          {hubExpanded && (
            <div className="bg-white rounded-b-2xl">
              {/* Intro header */}
              <div className="px-6 pt-6 pb-4 flex items-start justify-between gap-4 border-b border-gray-100">
                <div>
                  <h2 className="text-lg font-extrabold text-gray-900">The Ultimate Taj Mahal Guide for International Travelers (Official Guidelines)</h2>
                  <p className="text-sm text-gray-500 italic mt-1 max-w-2xl">Visiting the Taj Mahal is a majestic, bucket-list experience, but navigating strict security protocols, tiered pricing, and regional logistics can be overwhelming. This definitive hub is aligned with official Archaeological Survey of India (ASI) standards to ensure a smooth, hassle-free journey.</p>
                </div>
                <div className="shrink-0 border border-emerald-200 bg-emerald-50 rounded-xl px-4 py-3 text-center min-w-[140px]">
                  <p className="text-[9px] uppercase tracking-widest text-emerald-600 font-bold flex items-center gap-1 justify-center mb-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                    Audit Status
                  </p>
                  <p className="text-xs font-bold text-emerald-700">Ministry Guidelines Aligned</p>
                </div>
              </div>

              {/* Two-column grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-100">

                {/* LEFT COLUMN */}
                <div className="px-6 py-6 space-y-8">

                  {/* Section 1 */}
                  <div>
                    <h3 className="flex items-center gap-2 font-bold text-gray-900 text-sm mb-3">
                      <span className="w-6 h-6 rounded-full bg-[#582A4A]/10 text-[#582A4A] text-xs font-extrabold flex items-center justify-center">1</span>
                      Tickets, Pricing &amp; High-Value Perks
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">The Archaeological Survey of India (ASI) uses a tiered pricing system.</p>

                    {/* Price breakdown card */}
                    <div className="border border-gray-200 rounded-xl p-4 mb-3">
                      <p className="text-[9px] uppercase tracking-widest text-gray-400 font-bold mb-3">Price Breakdown</p>
                      <ul className="space-y-1.5 text-sm">
                        <li>🌐 <strong>Foreign National Entry permit:</strong> ₹1,100</li>
                        <li>🤝 <strong>SAARC &amp; BIMSTEC Citizens:</strong> ₹540</li>
                        <li className="flex items-center gap-1"><span className="text-xs font-bold border border-gray-300 px-1 rounded">IN</span> <strong>Indian Citizens:</strong> ₹50</li>
                        <li>🏛️ <strong>Main Mausoleum Chamber Access:</strong> <span className="text-gray-600">+₹200 (Optional but Highly Recommended)</span></li>
                        <li>👶 <strong>Daytime Child Entry:</strong> Entry is completely <span className="text-emerald-600 font-bold">FREE</span> for children under 15, regardless of nationality.</li>
                      </ul>
                    </div>

                    {/* Premium perks callout */}
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-3">
                      <p className="text-[10px] uppercase tracking-widest text-amber-700 font-bold mb-2">💡 Exclusive Premium Ticket Perks:</p>
                      <p className="text-sm text-gray-700">Do not buy water or shoe covers from street vendors! Your Foreigner, SAARC, or BIMSTEC ticket automatically includes a complimentary 500ml bottle of water, disposable shoe covers (required for the main marble platform), a Tourist Guide Map of Agra, and free access to the battery bus &amp; golf cart service connecting the parking lots to the gates.</p>
                    </div>

                    <p className="text-sm font-semibold text-gray-800 mb-1">Booking Your Tickets</p>
                    <p className="text-sm text-gray-600 mb-1"><strong>Book Online (Highly Recommended):</strong> <span className="text-[#582A4A]">Purchase your tickets in advance via the official government portal.</span> Booking online grants a ₹50 discount per Foreigner ticket (and a ₹5 discount for Indians).</p>
                    <p className="text-sm text-gray-600"><strong>Mandatory Identification:</strong> <span className="text-[#582A4A]">You must carry your physical, original passport or designated Government ID during your visit.</span></p>
                  </div>

                  {/* Section 3 */}
                  <div>
                    <h3 className="flex items-center gap-2 font-bold text-gray-900 text-sm mb-3">
                      <span className="w-6 h-6 rounded-full bg-[#582A4A]/10 text-[#582A4A] text-xs font-extrabold flex items-center justify-center">3</span>
                      Which Gate &amp; Escape Comforts
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      <span className="text-[#582A4A] font-semibold">🟫 The Eastern Gate (Highly Recommended for Foreigners):</span> Located near Agra&apos;s main tourist hotels. The primary parking lot here is Shilpgram. The security queues here are generally highly organized and faster, making it ideal for sunrise entries.
                    </p>
                    <p className="text-sm text-gray-600 mb-3">
                      <span className="text-[#582A4A] font-semibold">🟫 The Western Gate:</span> Closer to the busy old city center. The official parking facility for this gate is at Amrood ka Teela.
                    </p>
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                      <p className="text-[10px] uppercase tracking-widest text-blue-700 font-bold mb-2">🏨 Premium Escape Lounge Trick</p>
                      <p className="text-sm text-gray-700 mb-1">The Oberoi Amarvilas (Located just 600m from the East Gate) – you can enter their lounge bar/cafe to sit down, purchase a soft drink, and use pristine, top-tier sanitary restrooms.</p>
                      <p className="text-xs text-gray-500 italic">*Legitimate policy: International guest access is safely permitted inside luxury cafes and lounge lobby limits.</p>
                    </div>
                  </div>

                  {/* Section 5 */}
                  <div>
                    <h3 className="flex items-center gap-2 font-bold text-gray-900 text-sm mb-3">
                      <span className="w-6 h-6 rounded-full bg-[#582A4A]/10 text-[#582A4A] text-xs font-extrabold flex items-center justify-center">5</span>
                      Dress Code, Etiquette &amp; Sanitation
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-600 mb-3">
                      <li>• <strong>Footwear:</strong> When ascending the main mausoleum, you must either slide the complimentary shoe covers over your shoes or remove your footwear.</li>
                      <li>• <strong>Inside the Tomb:</strong> <span className="text-[#582A4A]">Photography is strictly prohibited inside the main mausoleum.</span> Visitors are requested to not make noise inside the chamber.</li>
                      <li>• <strong>White Marble Preservation:</strong> Avoid touching or scratching the walls and surfaces of the monument. Please use dustbins to help keep the complex clean.</li>
                      <li>• <strong>Facilities:</strong> Wheelchairs for differently-abled visitors are available at the ASI Office.</li>
                    </ul>
                    <div className="border border-gray-200 rounded-xl p-4">
                      <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-2">🚻 Restrooms &amp; Sanitation</p>
                      <p className="text-sm text-gray-600 mb-2">Premium pay-and-use clean restrooms located at the Shopping &amp; Ticketing Courtyard (both East and West gates). Inside the main crypt area, there are very limited facilities, so use them at the entrance.</p>
                      <p className="text-sm text-amber-700 flex items-start gap-1.5">
                        <span>💡</span>
                        <span>Highly recommend carrying wet wipes, sanitizers, and compact packet tissues, as toilet rolls can occasionally run out during high afternoon volume.</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* RIGHT COLUMN */}
                <div className="px-6 py-6 space-y-8">

                  {/* Section 2 */}
                  <div>
                    <h3 className="flex items-center gap-2 font-bold text-gray-900 text-sm mb-3">
                      <span className="w-6 h-6 rounded-full bg-[#582A4A]/10 text-[#582A4A] text-xs font-extrabold flex items-center justify-center">2</span>
                      Operating Hours &amp; Weekly Off-Days
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-600 mb-3">
                      <li>• <strong>Weekly Schedule:</strong> <span className="text-[#582A4A]">The Taj Mahal is open Saturday through Thursday. It is <span className="text-red-600 font-bold">strictly closed</span> to the public every Friday.</span></li>
                      <li>• <strong>Daily Hours:</strong> <span className="text-[#582A4A]">Gates open 30 minutes before sunrise and close 30 minutes before sunset.</span></li>
                    </ul>
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                      <p className="text-[10px] uppercase tracking-widest text-amber-700 font-bold mb-2">🌕 The Magical Full Moon Night Viewing</p>
                      <p className="text-sm text-gray-700 mb-3">The Taj Mahal opens for night viewing on the night of the full moon, as well as two nights before and two nights after (totaling 5 nights a month, excluding Fridays and the month of Ramadan).</p>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-[9px] uppercase tracking-widest text-gray-400 font-bold mb-1">Pricing</p>
                          <p className="text-gray-800 font-semibold">₹750 Foreigners</p>
                          <p className="text-gray-800 font-semibold">₹510 Indians</p>
                          <p className="text-gray-500 text-xs">₹500 Kids (3–15y)</p>
                        </div>
                        <div>
                          <p className="text-[9px] uppercase tracking-widest text-gray-400 font-bold mb-1">Batches</p>
                          <p className="text-gray-800 font-semibold">20:30 – 00:30 hrs</p>
                          <p className="text-gray-800 font-semibold">8 batches of 50 max</p>
                          <p className="text-gray-500 text-xs">Exactly 30 mins inside</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Section 4 */}
                  <div>
                    <h3 className="flex items-center gap-2 font-bold text-gray-900 text-sm mb-3">
                      <span className="w-6 h-6 rounded-full bg-[#582A4A]/10 text-[#582A4A] text-xs font-extrabold flex items-center justify-center">4</span>
                      Packing Light &amp; Cloakrooms
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">The Taj Mahal maintains airport-grade security. Keep your belongings to a bare minimum.</p>
                    <div className="border border-gray-200 rounded-xl p-4 mb-3">
                      <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-2">🧳 Cloakroom Lockers &amp; Bag Policies</p>
                      <p className="text-sm text-gray-600">Secure official locker facility is available at the West Gate ticket counter block. Small lockers accommodate hand cameras, but <span className="text-[#582A4A]">large hiking packs must be checked in.</span></p>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3">
                        <p className="text-[9px] uppercase tracking-widest text-emerald-700 font-bold mb-2">✅ Allowed (Daytime)</p>
                        <ul className="space-y-1 text-xs text-gray-700">
                          <li>• Mobile phone (silent/off)</li>
                          <li>• A standard still camera</li>
                          <li>• Original ID/Passport &amp; ticket</li>
                          <li>• Complimentary water bottle</li>
                        </ul>
                      </div>
                      <div className="bg-red-50 border border-red-200 rounded-xl p-3">
                        <p className="text-[9px] uppercase tracking-widest text-red-600 font-bold mb-2">✕ Prohibited</p>
                        <ul className="space-y-1 text-xs text-gray-700">
                          {["Laptops", "Drone systems", "Tripods", "Chargers & Powerbanks", "Tobacco/Lighters", "Large backpacks"].map(item => (
                            <li key={item} className="flex items-center gap-1"><span className="text-red-500 font-bold">✕</span> {item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Section 6 */}
                  <div>
                    <h3 className="flex items-center gap-2 font-bold text-gray-900 text-sm mb-3">
                      <span className="w-6 h-6 rounded-full bg-[#582A4A]/10 text-[#582A4A] text-xs font-extrabold flex items-center justify-center">6</span>
                      Regulated Transit &amp; Terminals
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">Regular fossil-fuel emitting commercial vehicles are strictly banned within a 500-meter radius to protect the marble. Transit happens in two stages:</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• <strong>To the Parking Hubs:</strong> <span className="text-[#582A4A]">Take a taxi to Shilpgram (East Gate parking) or Amrood ka Teela (West Gate parking).</span></li>
                      <li>• <strong>The Final Stretch:</strong> Walk or ride the official, rate-controlled silent electric golf carts or battery e-rickshaws. Standard fare is <strong>INR 20 per head</strong> for domestic/non-high-value ticket holders; Foreigner/high-value ticket holders get a free/complimentary ride.</li>
                    </ul>
                  </div>

                  {/* Section 7 */}
                  <div>
                    <h3 className="flex items-center gap-2 font-bold text-gray-900 text-sm mb-3">
                      <span className="w-6 h-6 rounded-full bg-[#582A4A]/10 text-[#582A4A] text-xs font-extrabold flex items-center justify-center">7</span>
                      Hiring Guides &amp; Emergency Care
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">If you wish to hire a guide to explain the history and architecture, you are advised to hire only approved guides (like <span className="text-[#582A4A] font-semibold">Rajesh Kumar</span>) who visibly exhibit their official identity cards.</p>
                    <div className="border border-rose-200 bg-rose-50 rounded-xl p-4">
                      <p className="text-[10px] uppercase tracking-widest text-rose-600 font-bold mb-2">🏥 Nearest Level-1 Medical Unit</p>
                      <p className="text-sm font-bold text-gray-900 mb-1">District Hospital Agra (Tajganj Link)</p>
                      <p className="text-sm text-gray-700 mb-0.5">Phone: <span className="text-[#582A4A] font-semibold underline">+91 562 246 0000</span></p>
                      <p className="text-sm font-semibold text-gray-800 mb-1">Distance: 3.2 km (Approx 10 mins)</p>
                      <p className="text-xs text-gray-500 italic">Accessible directly via Taj East Gate road. Emergency responders have authorized direct ambulance lane clearance.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                <span>✓ Managed by Verified Local Pathfinder Network Security</span>
                <span>Secure Direct reservation</span>
              </div>
            </div>
          )}
        </div>

        {/* Guide Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {GUIDES.map((guide) => (
            <div
              key={guide.id}
              className={`bg-white rounded-2xl p-5 flex flex-col gap-4 shadow-sm border transition-all duration-200 hover:shadow-md ${
                guide.id === 1 ? "border-[#582A4A] ring-1 ring-[#582A4A]/20" : "border-gray-200"
              }`}
            >
              {/* Header */}
              <div className="flex items-start gap-3">
                <div className="relative shrink-0">
                  <img
                    src={guide.photo}
                    alt={guide.name}
                    className="rounded-full object-cover w-14 h-14"
                  />
                  <span className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${guide.statusColor}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-0.5">
                    <span className={`text-[9px] font-bold uppercase tracking-wider ${guide.statusColor === "bg-emerald-500" ? "text-emerald-600" : "text-rose-500"}`}>
                      ● {guide.status}
                    </span>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-gray-500">CERTIFIED</span>
                  </div>
                  <p className="font-bold text-gray-900 text-sm leading-tight">{guide.name}</p>
                  <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">REG: {guide.reg}</p>
                </div>
              </div>

              {/* Specialty */}
              <p className="text-xs text-gray-500 italic leading-relaxed">
                &ldquo;{guide.specialty}&rdquo;
              </p>

              {/* Stats */}
              <div className="flex items-center gap-2 border border-gray-100 rounded-xl p-3">
                <div className="flex-1 text-center">
                  <p className="text-sm font-bold text-gray-900">⭐ {guide.rating}</p>
                  <p className="text-[9px] uppercase tracking-wider text-gray-400 font-medium mt-0.5">User Rating</p>
                </div>
                <div className="w-px h-8 bg-gray-100" />
                <div className="flex-1 text-center">
                  <p className="text-sm font-bold text-[#582A4A]">{guide.experience}+ Years</p>
                  <p className="text-[9px] uppercase tracking-wider text-gray-400 font-medium mt-0.5">Expert Exp.</p>
                </div>
              </div>

              {/* Languages */}
              <div>
                <p className="text-[9px] uppercase tracking-widest text-gray-400 font-semibold mb-2">Conversant Languages:</p>
                <div className="flex flex-wrap gap-1.5">
                  {guide.languages.map((lang) => (
                    <span key={lang} className="text-[10px] font-medium bg-purple-50 text-purple-700 px-2.5 py-1 rounded-full flex items-center gap-1">
                      🗣 {lang}
                    </span>
                  ))}
                </div>
              </div>

              {/* Busy status — all ON-TOUR guides */}
              {guide.status === "ON-TOUR" && (
                <p className="text-xs text-rose-500 flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {guide.availableIn ? (
                    <>Busy: Available in <strong className="ml-0.5">{guide.availableIn}</strong></>
                  ) : (
                    "Currently on tour"
                  )}
                </p>
              )}

              {/* Price + CTA */}
              <div className="flex items-end justify-between gap-3 mt-auto pt-2 border-t border-gray-50">
                <div>
                  <p className="text-sm font-bold text-gray-900">INR {guide.price.toLocaleString()} <span className="text-gray-400 font-normal text-xs">/ Day</span></p>
                </div>
                {guide.status === "ON-TOUR" ? (
                  <button disabled className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-gray-200 text-gray-400 text-xs font-semibold bg-gray-50 cursor-not-allowed shadow-sm">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Booked Now
                  </button>
                ) : guide.id === 1 ? (
                  <Link
                    href="/guide/rajesh-kumar"
                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#582A4A] text-white text-[10px] font-bold uppercase tracking-wide hover:bg-[#3D1A35] transition-colors"
                  >
                    Select &amp; Proceed
                    <span className="text-[8px] opacity-75">(With Skip-the-Line Option)</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ) : (
                  <button className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#582A4A] text-white text-[10px] font-bold uppercase tracking-wide hover:bg-[#3D1A35] transition-colors">
                    Select &amp; Proceed
                    <span className="text-[8px] opacity-75">(With Skip-the-Line Option)</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
