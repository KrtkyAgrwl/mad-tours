"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const GUIDE = {
  name: "Rajesh Kumar",
  firstName: "Rajesh",
  reg: "MT-67432",
  photo: "https://randomuser.me/api/portraits/men/32.jpg",
  specialty: "Mughal Architecture, Vedic Texts & Northern India Heritage Walks",
  experience: "8+",
  toursGuided: "1420+",
  rating: 4.9,
  languages: ["Hindi", "English", "Sanskrit"],
  monument: "Taj Mahal",
  monumentSlug: "taj-mahal",
  state: "Uttar Pradesh",
  hours: "06:00 – 18:30 IST",
  priceNow: 1200,
  priceWas: 1560,
  bio: "Greetings! I was born in Delhi and grew up near historical bastions. Over the past 8 years, I have guided more than a thousand international and local travelers across Delhi, Agra, and Khajuraho temples. I hold an advanced master degree in Medieval Indian History and Vedic scriptures. Let me make history come alive for you!",
  certifications: [
    "Indian Ministry of Tourism Certified Pathfinder",
    "UNESCO Cultural Heritage Expert Certification",
    "First-Aid Medical Responder Safety License",
  ],
  ratingBreakdown: [
    { label: "5 Star", pct: 94, color: "bg-emerald-500" },
    { label: "4 Star", pct: 6,  color: "bg-emerald-300" },
    { label: "3 Star", pct: 2,  color: "bg-yellow-300" },
    { label: "2 Star", pct: 0,  color: "bg-gray-200" },
  ],
  complianceAudits: [
    { label: "PUNCTUALITY",        value: "99.2% Perfect",   highlight: false },
    { label: "LINGUISTIC STANDARD", value: "Elite Certified", highlight: true  },
    { label: "HISTORICAL ACCURACY", value: "100% Verified",  highlight: false },
    { label: "SAFE CODE SIGNOFF",   value: "OTP Guaranteed", highlight: true  },
  ],
  reviews: [
    {
      initial: "A",
      name: "Alistair Ross",
      location: "Edinburgh, UK",
      date: "May 14, 2026",
      rating: 5.0,
      text: "Rajesh is exceptionally knowledgeable! His detailed explanation of the Pietra Dura inlay art at the Taj Mahal made me appreciate the sheer effort that goes into the craftsmanship. Booking him through MADTours.in was a seamless breeze.",
    },
    {
      initial: "M",
      name: "Meenakshi Iyer",
      location: "Chennai, India",
      date: "April 28, 2026",
      rating: 5.0,
      text: "Superb heritage tour of Qutub Minar and Humayun's Tomb. Rajesh literally brought the monuments to life by pointing out subtle architectural alignments we would have completely missed on our own.",
    },
  ],
  microQuestions: [
    "Where exactly will we meet inside Agra?",
    "What should I wear or bring to the Taj?",
    "Can we schedule Taj during sunset instead of morning?",
  ],
};

export default function RajeshKumarPage() {
  const router = useRouter();
  const [auditExpanded, setAuditExpanded] = useState(true);
  const [chatMsg, setChatMsg] = useState("");
  // In production this becomes true after confirmed payment
  const hired = false;

  return (
    <div className="min-h-screen" style={{ background: "#f9f6f1" }}>
      <div className="max-w-5xl mx-auto px-4 py-8 pb-28">

        {/* Back */}
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 bg-white border border-gray-200 rounded-full px-4 py-2 mb-5 shadow-sm transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Compare other Guides
        </button>

        {/* Skip-the-line banner */}
        <div className="rounded-2xl border border-amber-100 bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 shadow-sm">
          <div>
            <span className="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-widest text-orange-700 bg-orange-100 border border-orange-200 px-3 py-1 rounded-full mb-3">
              ⚡ Direct Action Permitted
            </span>
            <h2 className="text-base font-extrabold text-gray-900 mb-1.5">
              Secure Your Skip-The-Line Entry &amp; Certified Guide Instantly
            </h2>
            <p className="text-sm text-gray-600 max-w-lg leading-relaxed">
              Your pre-authorized ticket includes fast-tracked baggage clearing priority, bottled mineral water, and complimentary golf transit directly to gates. Tap below to proceed with {GUIDE.firstName}.
            </p>
          </div>
          <button className="flex items-center gap-2.5 bg-[#3D1A35] hover:bg-[#2D1025] text-white text-xs font-extrabold uppercase tracking-wider px-5 py-3.5 rounded-xl transition-colors shrink-0 whitespace-nowrap shadow-md">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Book Permits &amp; {GUIDE.firstName} (Incl. GST)
          </button>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

          {/* ── LEFT COLUMN ── */}
          <div className="lg:col-span-2 space-y-5">

            {/* Profile card */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-start gap-4 mb-5">
                <img
                  src={GUIDE.photo}
                  alt={GUIDE.name}
                  className="w-[72px] h-[72px] rounded-full object-cover border-2 border-gray-100 shrink-0"
                />
                <div>
                  <div className="flex items-center gap-2 flex-wrap mb-2">
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      VERIFIED GUIDE
                    </span>
                    <span className="text-[10px] font-bold text-gray-500 bg-gray-100 border border-gray-200 px-2.5 py-1 rounded-full">
                      REG: {GUIDE.reg}
                    </span>
                  </div>
                  <h1 className="text-2xl font-extrabold text-gray-900 leading-tight">{GUIDE.name}</h1>
                  <p className="text-sm text-gray-500 italic mt-1">
                    &ldquo;{GUIDE.specialty}&rdquo;
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-0 border border-gray-100 rounded-2xl overflow-hidden mb-5">
                <div className="text-center py-4 px-3">
                  <p className="text-xl font-extrabold text-[#582A4A]">{GUIDE.experience} Years</p>
                  <p className="text-[9px] uppercase tracking-widest text-gray-400 font-bold mt-1">Experience</p>
                </div>
                <div className="text-center py-4 px-3 border-x border-gray-100">
                  <p className="text-xl font-extrabold text-[#582A4A]">{GUIDE.toursGuided}</p>
                  <p className="text-[9px] uppercase tracking-widest text-gray-400 font-bold mt-1">Tours Guided</p>
                </div>
                <div className="text-center py-4 px-3">
                  <p className="text-xl font-extrabold text-gray-900">⭐ {GUIDE.rating}</p>
                  <p className="text-[9px] uppercase tracking-widest text-[#582A4A] font-bold mt-1 underline underline-offset-2">User Rating</p>
                </div>
              </div>

              {/* Languages */}
              <div className="mb-5">
                <p className="text-[9px] uppercase tracking-widest text-gray-400 font-bold mb-2.5">Languages Conversant</p>
                <div className="flex flex-wrap gap-2">
                  {GUIDE.languages.map((lang) => (
                    <span key={lang} className="inline-flex items-center gap-1 text-[11px] font-medium bg-purple-50 text-purple-700 border border-purple-100 px-3 py-1.5 rounded-full">
                      🗣 {lang}
                    </span>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="bg-gray-50 rounded-xl border border-gray-100 p-4">
                <p className="flex items-center gap-2 text-[9px] uppercase tracking-widest font-extrabold text-gray-500 mb-3">
                  <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  National Ministry Certified Upskilling Standard
                </p>
                <ul className="space-y-2.5">
                  {GUIDE.certifications.map((cert) => (
                    <li key={cert} className="flex items-center gap-2.5 text-sm text-gray-700">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                        <svg className="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bio */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <p className="text-[9px] uppercase tracking-widest text-gray-400 font-bold mb-3">Background Biography</p>
              <p className="text-sm text-gray-700 leading-relaxed">{GUIDE.bio}</p>
            </div>

            {/* Rating Audit */}
            <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <p className="font-bold text-gray-900 text-sm">Verified Rating Audit</p>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                      ✓ Handshake Score Active
                    </span>
                  </div>
                  <p className="text-xs text-gray-500">Authentic star counts, behavior index, and performance ratings.</p>
                </div>
                <button
                  onClick={() => setAuditExpanded(!auditExpanded)}
                  className="text-[#582A4A] text-[11px] font-extrabold uppercase tracking-widest shrink-0 hover:opacity-70 transition-opacity"
                >
                  {auditExpanded ? "Hide Audit" : "Show Audit"}
                </button>
              </div>

              {auditExpanded && (
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Bar chart */}
                  <div>
                    <p className="text-[9px] uppercase tracking-widest text-gray-400 font-bold mb-3">Rating Proportion</p>
                    <div className="space-y-2.5">
                      {GUIDE.ratingBreakdown.map((row) => (
                        <div key={row.label} className="flex items-center gap-2">
                          <span className="text-[11px] text-gray-500 w-12 shrink-0">{row.label}</span>
                          <div className="flex-1 bg-gray-100 rounded-full h-2">
                            <div className={`${row.color} h-2 rounded-full transition-all`} style={{ width: `${row.pct}%` }} />
                          </div>
                          <span className="text-[11px] font-semibold text-gray-700 w-8 text-right">{row.pct}%</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Compliance grid */}
                  <div className="border border-gray-200 rounded-xl p-4">
                    <p className="text-[9px] uppercase tracking-widest text-gray-400 font-bold mb-3">Verified Compliance Audits</p>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-3.5">
                      {GUIDE.complianceAudits.map((item) => (
                        <div key={item.label}>
                          <p className="text-[8px] uppercase tracking-widest text-gray-400 font-bold">{item.label}</p>
                          <p className={`text-sm font-extrabold mt-0.5 ${item.highlight ? "text-[#582A4A]" : "text-emerald-600"}`}>
                            {item.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <svg className="w-4 h-4 text-[#582A4A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <h3 className="font-bold text-gray-900 text-sm">Traveler Verification Feed</h3>
                  </div>
                  <p className="text-xs text-gray-500">Direct feedback and anecdotes from travelers who booked this specialist.</p>
                </div>
                <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full shrink-0 whitespace-nowrap">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full" />
                  {GUIDE.reviews.length} Verified Comments
                </span>
              </div>

              <div className="space-y-3">
                {GUIDE.reviews.map((review, i) => (
                  <div key={i} className="border border-gray-100 rounded-xl p-4">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-full bg-[#582A4A] text-white flex items-center justify-center font-extrabold text-sm shrink-0">
                          {review.initial}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 flex-wrap mb-0.5">
                            <span className="font-bold text-gray-900 text-sm">{review.name}</span>
                            <span className="text-[9px] font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                              ✓ VERIFIED BOOKER
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5 text-xs text-gray-400 flex-wrap">
                            <span>📍 {review.location}</span>
                            <span>·</span>
                            <span>🗓 {review.date}</span>
                          </div>
                        </div>
                      </div>
                      <span className="text-sm font-extrabold text-amber-500 shrink-0">⭐ {review.rating.toFixed(1)}</span>
                    </div>
                    <p className="text-sm text-gray-600 italic leading-relaxed">
                      &ldquo;{review.text}&rdquo;
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Review Guard */}
            <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap mb-1.5">
                    <span className="text-[9px] font-extrabold uppercase tracking-widest text-[#582A4A] bg-[#582A4A]/10 border border-[#582A4A]/20 px-2.5 py-1 rounded-full">
                      🔒 Review Verification Guard Active
                    </span>
                  </div>
                  <p className="text-[10px] font-extrabold text-emerald-600 uppercase tracking-wider mb-2">Safe Escort Policy</p>
                  <p className="text-sm font-bold text-gray-900 leading-snug mb-2">
                    Only verified travelers who successfully booked and completed a direct-escorted journey with {GUIDE.firstName} are permitted to write reviews.
                  </p>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    This safeguards the peer network from fabricated recommendations and secures genuine community feedback. Please advance-book a session, enjoy your custom itinerary, and rate after completion!
                  </p>
                </div>
                <button className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider bg-[#3D1A35] hover:bg-[#2D1025] text-white px-4 py-3 rounded-xl transition-colors shrink-0 whitespace-nowrap">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Book {GUIDE.firstName}
                </button>
              </div>
            </div>

            {/* Pricing CTA */}
            <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm flex items-center justify-between gap-4 flex-wrap">
              <div>
                <p className="text-[9px] uppercase tracking-widest text-gray-400 font-bold mb-1">Special Discount Price</p>
                <div className="flex items-baseline gap-2 flex-wrap">
                  <p className="text-2xl font-extrabold text-gray-900">INR {GUIDE.priceNow.toLocaleString()}</p>
                  <p className="text-sm text-gray-400 line-through">INR {GUIDE.priceWas.toLocaleString()}</p>
                  <span className="text-[10px] font-extrabold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                    BEST VALUE
                  </span>
                </div>
              </div>
              <button className="bg-[#3D1A35] hover:bg-[#2D1025] text-white font-extrabold text-sm uppercase tracking-wider px-6 py-3 rounded-xl transition-colors">
                Hire Him Now
              </button>
            </div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className="space-y-4">
            {/* Video intro */}
            <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm">
              <p className="text-[9px] uppercase tracking-widest text-gray-400 font-bold mb-3">Guide&apos;s Video Introduction</p>
              <div className="relative rounded-xl overflow-hidden bg-gray-900 aspect-video">
                <img
                  src="https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600&q=80"
                  alt="Taj Mahal"
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#582A4A] flex items-center justify-center shadow-lg">
                    <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                  <p className="text-white text-xs font-bold">Watch him in action [v-intro.mp4]</p>
                  <p className="text-white/60 text-[10px] mt-0.5">Video Certification: AMM-Audit Verified</p>
                </div>
              </div>
            </div>

            {/* Monument site */}
            <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm">
              <p className="text-[9px] uppercase tracking-widest text-gray-400 font-bold mb-3">Featured Monument Site</p>
              <Link href={`/monument/${GUIDE.monumentSlug}`}>
                <h3 className="text-lg font-extrabold text-gray-900 hover:text-[#582A4A] transition-colors mb-2">{GUIDE.monument}</h3>
              </Link>
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-4 flex-wrap">
                <span>🏛 {GUIDE.state}</span>
                <span>·</span>
                <span>🕐 {GUIDE.hours}</span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed mb-3">
                Secure checkout includes immediate pre-entry passes so you bypass local standard queues.
              </p>
              <button className="w-full py-2.5 bg-gray-900 hover:bg-black text-white text-xs font-extrabold uppercase tracking-wider rounded-xl transition-colors">
                Open Skip-The-Line Form
              </button>
            </div>
          </div>
        </div>

        {/* ── Trip Companion (full width) ── */}
        <div className="mt-5 rounded-2xl overflow-hidden shadow-sm" style={{ background: "linear-gradient(135deg, #3D1A35 0%, #250e1f 100%)" }}>
          <div className="px-6 py-5 border-b border-white/10">
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-yellow-400 mb-1">⊙ Vetted Live Explorer Suite</p>
            <h3 className="text-white font-extrabold text-lg">Trip Companion: {GUIDE.monument} Walk</h3>
            <p className="text-white/50 text-xs mt-1">
              Real-time physical route layouts, climate advisories, and direct communications, calibrated for{" "}
              <span className="text-yellow-400 font-semibold">{GUIDE.name}</span>.
            </p>
          </div>

          {hired ? (
            <div className="grid grid-cols-1 lg:grid-cols-3">
              {/* Chat window */}
              <div className="lg:col-span-2 p-5">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <img src={GUIDE.photo} alt={GUIDE.name} className="w-9 h-9 rounded-full object-cover" />
                    <div>
                      <p className="text-white font-bold text-sm">{GUIDE.name}</p>
                      <p className="text-emerald-400 text-[10px]">● Verified guide is active</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="text-white/50 hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </button>
                    <button className="text-white/50 hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 mb-4 min-h-[120px]">
                  <div className="bg-white/10 rounded-xl p-3 max-w-xs">
                    <p className="text-white text-sm leading-relaxed">
                      Hello Kartikay! I am Rajesh Kumar, your verified companion for Taj Mahal. Excited to guide you through our ancient heritage! Use quick questions below or draft custom texts for coordination.
                    </p>
                    <p className="text-white/40 text-[10px] mt-2">10:00 AM</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3">
                  <input
                    type="text"
                    value={chatMsg}
                    onChange={(e) => setChatMsg(e.target.value)}
                    placeholder="Type an encrypted query (e.g. photospots, meeting timing, water)..."
                    className="flex-1 bg-transparent text-white text-xs placeholder-white/40 outline-none"
                  />
                  <button className="w-8 h-8 rounded-full bg-[#582A4A] flex items-center justify-center shrink-0 hover:bg-[#6e3460] transition-colors">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Micro questions */}
              <div className="p-5 border-t lg:border-t-0 lg:border-l border-white/10">
                <p className="text-[9px] uppercase tracking-widest text-white/40 font-bold mb-3">Suggested Micro Questions</p>
                <div className="space-y-2">
                  {GUIDE.microQuestions.map((q, i) => (
                    <button
                      key={i}
                      onClick={() => setChatMsg(q)}
                      className="w-full flex items-center justify-between gap-2 bg-white/10 hover:bg-white/15 text-white text-xs text-left px-3 py-3 rounded-xl transition-colors"
                    >
                      <span>💡 {q}</span>
                      <svg className="w-3.5 h-3.5 shrink-0 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  ))}
                </div>
                <p className="text-white/30 text-[10px] mt-4 leading-relaxed">
                  All communications are routed through secure proxy tunnels to secure personal numbers.
                </p>
              </div>
            </div>
          ) : (
            /* Locked — unlock after booking */
            <div className="flex flex-col items-center justify-center py-14 px-6 text-center">
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <p className="text-white font-extrabold text-base mb-1">Guide Live Chat</p>
              <p className="text-white/50 text-sm max-w-sm mb-5 leading-relaxed">
                Complete your booking with {GUIDE.name} to unlock encrypted live chat, route coordination, and real-time guide messaging.
              </p>
              <button className="flex items-center gap-2 bg-[#582A4A] hover:bg-[#6e3460] text-white font-bold text-sm uppercase tracking-wider px-6 py-3 rounded-xl transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book {GUIDE.firstName} to Unlock Chat
              </button>
            </div>
          )}

          <div className="px-6 py-3 border-t border-white/10 flex items-center justify-between gap-4">
            <span className="text-[10px] text-white/30">⊙ Vetted Standard Pathfinder Escort Protocol Secured</span>
            <span className="text-[10px] text-white/30">Reg License: AMM-987654-RAJESH-KUMAR</span>
          </div>
        </div>

      </div>

      {/* ── Sticky bottom bar ── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={GUIDE.photo} alt={GUIDE.name} className="w-10 h-10 rounded-full object-cover shrink-0" />
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-bold text-gray-900 text-sm">Hire {GUIDE.name}</span>
                <span className="text-[9px] font-extrabold text-emerald-600 uppercase tracking-wide">✓ Verified Active</span>
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-extrabold text-gray-900 text-sm">INR {GUIDE.priceNow.toLocaleString()}</span>
                <span className="text-xs text-gray-400">/Day</span>
                <span className="text-xs text-gray-400 line-through">INR {GUIDE.priceWas.toLocaleString()}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-[10px] font-extrabold text-amber-600 flex items-center gap-1 justify-end">
                ⚡ 100% RISK-FREE PROMISE
              </p>
              <p className="text-[10px] text-gray-400">Free reschedule or full refund anytime</p>
            </div>
            <button className="bg-[#3D1A35] hover:bg-[#2D1025] text-white font-extrabold text-sm uppercase tracking-wider px-6 py-3 rounded-xl transition-colors shrink-0">
              Hire Him Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
