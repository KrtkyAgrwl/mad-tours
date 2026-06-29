"use client";

import { useState, useRef, useEffect } from "react";

const PRESETS = ["Tomorrow", "This Sat", "This Sun", "Next Week"] as const;

function toInputValue(date: Date): string {
  return date.toISOString().split("T")[0];
}

function presetDate(label: (typeof PRESETS)[number]): Date {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  if (label === "Tomorrow") { d.setDate(d.getDate() + 1); return d; }
  if (label === "This Sat") { d.setDate(d.getDate() + ((6 - d.getDay() + 7) % 7 || 7)); return d; }
  if (label === "This Sun") { d.setDate(d.getDate() + ((7 - d.getDay()) % 7 || 7)); return d; }
  d.setDate(d.getDate() + 7); return d;
}

function formatDisplay(iso: string): string {
  if (!iso) return "Anytime";
  const [y, m, day] = iso.split("-");
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  return `${day} ${months[parseInt(m) - 1]} ${y}`;
}

export default function Hero() {
  const [dateOpen, setDateOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [pendingDate, setPendingDate] = useState("");
  const [activePreset, setActivePreset] = useState<string | null>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
        setDateOpen(false);
      }
    }
    if (dateOpen) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [dateOpen]);

  function openPicker() {
    setPendingDate(selectedDate);
    setActivePreset(null);
    setDateOpen(true);
  }

  function applyDate() {
    setSelectedDate(pendingDate);
    setDateOpen(false);
  }

  function clearDate() {
    setPendingDate("");
    setActivePreset(null);
  }

  function pickPreset(label: (typeof PRESETS)[number]) {
    setActivePreset(label);
    setPendingDate(toInputValue(presetDate(label)));
  }

  return (
    <section
      className="relative w-full min-h-[420px] flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center 40%",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center text-white px-4 py-16 max-w-3xl mx-auto">

        {/* Badge pill */}
        <div className="flex items-center gap-2 border border-white/40 rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase mb-6 bg-white/10 backdrop-blur-sm">
          <span className="text-yellow-400">⚡</span>
          Real Guides. Real India. Book Direct.
        </div>

        {/* Headline */}
        <h1
          className="text-4xl sm:text-5xl md:text-[3.25rem] font-bold italic leading-tight mb-4"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Meet India&apos;s Finest Local Storytellers
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-white/85 max-w-xl leading-relaxed mb-10">
          Book direct, certified local pathfinders trained in regional art, Vedic architecture, and safe mountain expeditions.
        </p>

        {/* Search bar + date popover wrapper */}
        <div className="w-full max-w-2xl relative" ref={popoverRef}>
          {/* Search bar pill */}
          <div className="bg-white rounded-full shadow-2xl flex items-center overflow-visible">
            {/* Text search */}
            <div className="flex items-center gap-3 flex-1 px-5 py-3.5">
              <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
              </svg>
              <input
                type="text"
                placeholder="Enter City / Monument Name / TourGuide ID"
                className="flex-1 text-sm text-gray-700 placeholder-gray-400 outline-none bg-transparent min-w-0"
              />
            </div>

            {/* Divider */}
            <div className="w-px h-8 bg-gray-200 shrink-0" />

            {/* Date trigger */}
            <button
              onClick={openPicker}
              className={`flex items-center gap-2 px-5 py-3.5 cursor-pointer shrink-0 transition-colors rounded-none ${
                dateOpen ? "bg-gray-50" : "hover:bg-gray-50"
              }`}
            >
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z" />
              </svg>
              <div className="text-left">
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider leading-none">Book Date</p>
                <p className={`text-sm font-medium ${selectedDate ? "text-[#582A4A]" : "text-gray-700"}`}>
                  {formatDisplay(selectedDate)}
                </p>
              </div>
            </button>

            {/* Search */}
            <button className="bg-[#582A4A] hover:bg-[#6e3460] text-white font-bold text-sm tracking-wider px-7 py-[18px] transition-colors rounded-r-full shrink-0">
              SEARCH
            </button>
          </div>

          {/* Date picker popover */}
          {dateOpen && (
            <div className="absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between px-5 pt-5 pb-3">
                <span className="text-xs font-extrabold text-gray-800 uppercase tracking-widest">
                  Advance Reservation
                </span>
                <button
                  onClick={() => setDateOpen(false)}
                  className="text-gray-400 hover:text-gray-700 transition-colors text-lg leading-none"
                >
                  ×
                </button>
              </div>

              <div className="px-5 pb-5 space-y-4">
                {/* Custom date input */}
                <div>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">
                    Select Custom Date
                  </p>
                  <input
                    type="date"
                    value={pendingDate}
                    min={toInputValue(new Date())}
                    onChange={(e) => {
                      setPendingDate(e.target.value);
                      setActivePreset(null);
                    }}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-[#582A4A] focus:ring-1 focus:ring-[#582A4A] transition-colors"
                  />
                </div>

                {/* Preset buttons */}
                <div>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">
                    Popular Advance Presets
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {PRESETS.map((label) => (
                      <button
                        key={label}
                        onClick={() => pickPreset(label)}
                        className={`py-2 rounded-lg text-sm font-medium border transition-colors ${
                          activePreset === label
                            ? "bg-[#582A4A] text-white border-[#582A4A]"
                            : "bg-white text-gray-700 border-gray-200 hover:border-[#582A4A] hover:text-[#582A4A]"
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-1">
                  <button
                    onClick={clearDate}
                    className="flex-1 py-2.5 rounded-lg text-sm font-semibold border border-gray-200 text-gray-600 hover:border-gray-400 transition-colors"
                  >
                    Clear Date
                  </button>
                  <button
                    onClick={applyDate}
                    className="flex-1 py-2.5 rounded-lg text-sm font-semibold bg-[#582A4A] text-white hover:bg-[#6e3460] transition-colors"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
