"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

interface Guide {
  id: number;
  name: string;
  reg: string;
  monument: string;
  monumentSlug: string | null;
  state: string;
  status: "ON-SPOT" | "ON-TOUR";
  statusColor: string;
  photo: string;
  specialty: string;
  rating: number;
  experience: string;
  languages: string[];
  price: number;
  availableIn?: string;
  booked: boolean;
}

const GUIDES: Guide[] = [
  // Taj Mahal — Uttar Pradesh
  { id: 1, name: "Rajesh Kumar", reg: "MT-67432", monument: "Taj Mahal", monumentSlug: "taj-mahal", state: "Uttar Pradesh", status: "ON-SPOT", statusColor: "bg-emerald-500", photo: "https://randomuser.me/api/portraits/men/32.jpg", specialty: "Mughal Architecture, Vedic Texts & Northern India Heritage Walks", rating: 4.9, experience: "8", languages: ["Hindi", "English", "Sanskrit"], price: 1200, booked: false },
  { id: 2, name: "Aarav Mehta", reg: "MT-51029", monument: "Taj Mahal", monumentSlug: "taj-mahal", state: "Uttar Pradesh", status: "ON-SPOT", statusColor: "bg-emerald-500", photo: "https://randomuser.me/api/portraits/men/45.jpg", specialty: "Mughal Engineering Symmetries & Rajputana Fortifications Analyst", rating: 4.86, experience: "7", languages: ["English", "Hindi", "Gujarati"], price: 1200, booked: false },
  { id: 3, name: "Sunita Sharma", reg: "MT-21590", monument: "Taj Mahal", monumentSlug: "taj-mahal", state: "Uttar Pradesh", status: "ON-TOUR", statusColor: "bg-rose-500", photo: "https://randomuser.me/api/portraits/women/68.jpg", specialty: "Ancient Indian Dynasties, Mughal Folklore & Vedic Philosophy Specialist", rating: 4.95, experience: "11", languages: ["Hindi", "English", "Punjabi"], price: 1200, availableIn: "1h 15m", booked: true },
  { id: 4, name: "Sanjay Prasad", reg: "MT-11204", monument: "Taj Mahal", monumentSlug: "taj-mahal", state: "Uttar Pradesh", status: "ON-TOUR", statusColor: "bg-rose-500", photo: "https://randomuser.me/api/portraits/men/77.jpg", specialty: "Imperial Delhi Capital Planning & Taj Mahal Symmetry Expert", rating: 4.78, experience: "9", languages: ["Hindi", "English"], price: 1200, availableIn: "2h", booked: false },
  // Fatehpur Sikri — Uttar Pradesh
  { id: 5, name: "Priya Verma", reg: "MT-43011", monument: "Fatehpur Sikri", monumentSlug: null, state: "Uttar Pradesh", status: "ON-SPOT", statusColor: "bg-emerald-500", photo: "https://randomuser.me/api/portraits/women/11.jpg", specialty: "Akbar Era Court Protocols, Sufi Architecture & Mughal Court Studies", rating: 4.82, experience: "6", languages: ["Hindi", "English", "French"], price: 1000, booked: false },
  { id: 6, name: "Vikram Singh", reg: "MT-29876", monument: "Fatehpur Sikri", monumentSlug: null, state: "Uttar Pradesh", status: "ON-TOUR", statusColor: "bg-rose-500", photo: "https://randomuser.me/api/portraits/men/12.jpg", specialty: "Mughal-Rajput Political Alliances & Sandstone Fortification Scholar", rating: 4.71, experience: "5", languages: ["Hindi", "English", "Urdu"], price: 1000, availableIn: "3h", booked: false },
  // Humayun's Tomb — Delhi
  { id: 7, name: "Neha Kapoor", reg: "MT-55231", monument: "Humayun's Tomb", monumentSlug: null, state: "Delhi", status: "ON-SPOT", statusColor: "bg-emerald-500", photo: "https://randomuser.me/api/portraits/women/22.jpg", specialty: "Timurid Architecture, Garden Tomb Traditions & Mughal Botanical Heritage", rating: 4.88, experience: "7", languages: ["Hindi", "English", "Bengali"], price: 1100, booked: false },
  { id: 8, name: "Amit Sharma", reg: "MT-33109", monument: "Humayun's Tomb", monumentSlug: null, state: "Delhi", status: "ON-SPOT", statusColor: "bg-emerald-500", photo: "https://randomuser.me/api/portraits/men/22.jpg", specialty: "Charbagh Garden Design, Mughal Calligraphy & Islamic Geometric Patterns", rating: 4.74, experience: "6", languages: ["Hindi", "English", "Tamil"], price: 1100, booked: false },
  // Red Fort — Delhi
  { id: 9, name: "Divya Nair", reg: "MT-77543", monument: "Red Fort", monumentSlug: null, state: "Delhi", status: "ON-SPOT", statusColor: "bg-emerald-500", photo: "https://randomuser.me/api/portraits/women/33.jpg", specialty: "Mughal Imperial Court Life, Throne Rooms & Coronation Ceremony Historian", rating: 4.92, experience: "10", languages: ["English", "Hindi", "Malayalam"], price: 1150, booked: false },
  { id: 10, name: "Rahul Tiwari", reg: "MT-44892", monument: "Red Fort", monumentSlug: null, state: "Delhi", status: "ON-TOUR", statusColor: "bg-rose-500", photo: "https://randomuser.me/api/portraits/men/56.jpg", specialty: "Mughal Military Architecture, Baoli Water Systems & Diwan-i-Khas Expert", rating: 4.67, experience: "5", languages: ["Hindi", "English"], price: 1150, availableIn: "45m", booked: false },
  { id: 11, name: "Meena Iyer", reg: "MT-22067", monument: "Red Fort", monumentSlug: null, state: "Delhi", status: "ON-SPOT", statusColor: "bg-emerald-500", photo: "https://randomuser.me/api/portraits/women/44.jpg", specialty: "Mughal Textile Arts, Bazaar Economy & Chandni Chowk Heritage Market Scholar", rating: 4.85, experience: "8", languages: ["Tamil", "English", "Hindi"], price: 1150, booked: false },
  // Amber Fort — Rajasthan
  { id: 12, name: "Arjun Rathore", reg: "MT-88123", monument: "Amber Fort", monumentSlug: null, state: "Rajasthan", status: "ON-SPOT", statusColor: "bg-emerald-500", photo: "https://randomuser.me/api/portraits/men/81.jpg", specialty: "Rajput Valor Chronicles, Sheesh Mahal Mirror Work & Desert Military Tactics", rating: 4.94, experience: "12", languages: ["Hindi", "English", "German"], price: 1300, booked: false },
  { id: 13, name: "Kavita Sharma", reg: "MT-61045", monument: "Amber Fort", monumentSlug: null, state: "Rajasthan", status: "ON-TOUR", statusColor: "bg-rose-500", photo: "https://randomuser.me/api/portraits/women/55.jpg", specialty: "Rajasthani Folk Culture, Zenana Mahal Women's Quarters & Elephant Stables Historian", rating: 4.77, experience: "7", languages: ["Hindi", "English", "Rajasthani"], price: 1300, availableIn: "2h 30m", booked: false },
  // City Palace — Rajasthan
  { id: 14, name: "Rohan Mehta", reg: "MT-35678", monument: "City Palace", monumentSlug: null, state: "Rajasthan", status: "ON-SPOT", statusColor: "bg-emerald-500", photo: "https://randomuser.me/api/portraits/men/71.jpg", specialty: "Royal Jaipur Court Protocols, Mughal-Rajput Fusion Art & Astronomical Legacy", rating: 4.91, experience: "9", languages: ["Hindi", "English", "Japanese"], price: 1350, booked: false },
  { id: 15, name: "Ananya Verma", reg: "MT-19234", monument: "City Palace", monumentSlug: null, state: "Rajasthan", status: "ON-SPOT", statusColor: "bg-emerald-500", photo: "https://randomuser.me/api/portraits/women/66.jpg", specialty: "Pink City Textile Heritage, Jaipur Miniature Painting & Gemstone Trade History", rating: 4.83, experience: "6", languages: ["Hindi", "English", "French"], price: 1100, booked: false },
];

const SITES_BY_STATE: Record<string, string[]> = {
  "Uttar Pradesh": ["Taj Mahal", "Fatehpur Sikri"],
  "Delhi": ["Humayun's Tomb", "Red Fort"],
  "Rajasthan": ["Amber Fort", "City Palace"],
};

const ALL_LANGUAGES = ["Hindi", "English", "Sanskrit", "Gujarati", "Punjabi", "French", "Urdu", "Bengali", "Tamil", "Malayalam", "German", "Japanese", "Rajasthani"];

type SortKey = "rating" | "experience" | "price_low" | "price_high";

interface FilterSidebarProps {
  search: string;
  onSearch: (v: string) => void;
  state: string;
  onState: (v: string) => void;
  site: string;
  onSite: (v: string) => void;
  siteOptions: string[];
  minRating: number;
  onMinRating: (v: number) => void;
  languages: string[];
  onToggleLanguage: (l: string) => void;
  availability: string;
  onAvailability: (v: string) => void;
  priceRange: string;
  onPriceRange: (v: string) => void;
  activeFilterCount: number;
  onClearAll: () => void;
}

function FilterSidebar({
  search, onSearch,
  state, onState,
  site, onSite, siteOptions,
  minRating, onMinRating,
  languages, onToggleLanguage,
  availability, onAvailability,
  priceRange, onPriceRange,
  activeFilterCount, onClearAll,
}: FilterSidebarProps) {
  return (
    <div className="space-y-6">
      {/* Search */}
      <div>
        <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold block mb-2">
          Search
        </label>
        <input
          type="text"
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Guide name or monument…"
          className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-[#582A4A] focus:ring-1 focus:ring-[#582A4A]/30"
        />
      </div>

      {/* State / Region */}
      <div>
        <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2">State / Region</p>
        {["All", "Uttar Pradesh", "Delhi", "Rajasthan"].map((opt) => (
          <label key={opt} className="flex items-center gap-2 py-1.5 cursor-pointer select-none">
            <input
              type="radio"
              name="state"
              checked={state === opt}
              onChange={() => onState(opt)}
              className="accent-[#582A4A]"
            />
            <span className="text-sm text-gray-600">{opt === "All" ? "All States" : opt}</span>
          </label>
        ))}
      </div>

      {/* Site — only shown when a state is selected */}
      {siteOptions.length > 0 && (
        <div>
          <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2">Site</p>
          <label className="flex items-center gap-2 py-1.5 cursor-pointer select-none">
            <input
              type="radio"
              name="site"
              checked={site === "All"}
              onChange={() => onSite("All")}
              className="accent-[#582A4A]"
            />
            <span className="text-sm text-gray-600">All Sites</span>
          </label>
          {siteOptions.map((opt) => (
            <label key={opt} className="flex items-center gap-2 py-1.5 cursor-pointer select-none">
              <input
                type="radio"
                name="site"
                checked={site === opt}
                onChange={() => onSite(opt)}
                className="accent-[#582A4A]"
              />
              <span className="text-sm text-gray-600">{opt}</span>
            </label>
          ))}
        </div>
      )}

      {/* Minimum Rating */}
      <div>
        <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2">Minimum Rating</p>
        {[
          { val: 0, label: "Any Rating" },
          { val: 4.9, label: "⭐ 4.9 and above" },
          { val: 4.8, label: "⭐ 4.8 and above" },
          { val: 4.7, label: "⭐ 4.7 and above" },
        ].map((opt) => (
          <label key={opt.val} className="flex items-center gap-2 py-1.5 cursor-pointer select-none">
            <input
              type="radio"
              name="rating"
              checked={minRating === opt.val}
              onChange={() => onMinRating(opt.val)}
              className="accent-[#582A4A]"
            />
            <span className="text-sm text-gray-600">{opt.label}</span>
          </label>
        ))}
      </div>

      {/* Languages */}
      <div>
        <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2">Languages</p>
        <div className="flex flex-wrap gap-1.5">
          {ALL_LANGUAGES.map((lang) => (
            <button
              key={lang}
              onClick={() => onToggleLanguage(lang)}
              className={`text-[11px] px-2.5 py-1 rounded-full border font-medium transition-colors ${
                languages.includes(lang)
                  ? "bg-[#582A4A] text-white border-[#582A4A]"
                  : "bg-white text-gray-600 border-gray-200 hover:border-[#582A4A]"
              }`}
            >
              {lang}
            </button>
          ))}
        </div>
      </div>

      {/* Availability */}
      <div>
        <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2">Availability</p>
        {(["All", "ON-SPOT", "ON-TOUR"] as const).map((opt) => (
          <label key={opt} className="flex items-center gap-2 py-1.5 cursor-pointer select-none">
            <input
              type="radio"
              name="availability"
              checked={availability === opt}
              onChange={() => onAvailability(opt)}
              className="accent-[#582A4A]"
            />
            <span
              className={`text-sm ${
                opt === "ON-SPOT"
                  ? "text-emerald-600 font-medium"
                  : opt === "ON-TOUR"
                  ? "text-rose-500 font-medium"
                  : "text-gray-600"
              }`}
            >
              {opt === "All" ? "All Guides" : opt}
            </span>
          </label>
        ))}
      </div>

      {/* Price Range */}
      <div>
        <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2">Price Range / Day</p>
        {[
          { key: "All", label: "Any Price" },
          { key: "under1000", label: "Under ₹1,000" },
          { key: "1000-1200", label: "₹1,000 – ₹1,200" },
          { key: "over1200", label: "Above ₹1,200" },
        ].map((opt) => (
          <label key={opt.key} className="flex items-center gap-2 py-1.5 cursor-pointer select-none">
            <input
              type="radio"
              name="price"
              checked={priceRange === opt.key}
              onChange={() => onPriceRange(opt.key)}
              className="accent-[#582A4A]"
            />
            <span className="text-sm text-gray-600">{opt.label}</span>
          </label>
        ))}
      </div>

      {activeFilterCount > 0 && (
        <button
          onClick={onClearAll}
          className="w-full py-2 text-sm font-semibold text-[#582A4A] border border-[#582A4A] rounded-xl hover:bg-[#582A4A] hover:text-white transition-colors"
        >
          Clear All Filters ({activeFilterCount})
        </button>
      )}
    </div>
  );
}

export default function ExplorePage() {
  const [search, setSearch] = useState("");
  const [state, setState] = useState("All");
  const [site, setSite] = useState("All");
  const [minRating, setMinRating] = useState(0);
  const [languages, setLanguages] = useState<string[]>([]);
  const [availability, setAvailability] = useState("All");
  const [priceRange, setPriceRange] = useState("All");
  const [sortBy, setSortBy] = useState<SortKey>("rating");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const handleState = (s: string) => {
    setState(s);
    setSite("All");
  };

  const toggleLanguage = (lang: string) =>
    setLanguages((prev) =>
      prev.includes(lang) ? prev.filter((l) => l !== lang) : [...prev, lang]
    );

  const clearAll = () => {
    setSearch("");
    setState("All");
    setSite("All");
    setMinRating(0);
    setLanguages([]);
    setAvailability("All");
    setPriceRange("All");
  };

  const siteOptions = state !== "All" ? (SITES_BY_STATE[state] ?? []) : [];

  const activeFilterCount = [
    state !== "All",
    site !== "All",
    minRating > 0,
    languages.length > 0,
    availability !== "All",
    priceRange !== "All",
  ].filter(Boolean).length;

  const filtered = useMemo(() => {
    return GUIDES.filter((g) => {
      if (
        search &&
        !g.name.toLowerCase().includes(search.toLowerCase()) &&
        !g.monument.toLowerCase().includes(search.toLowerCase())
      )
        return false;
      if (state !== "All" && g.state !== state) return false;
      if (site !== "All" && g.monument !== site) return false;
      if (g.rating < minRating) return false;
      if (languages.length > 0 && !languages.some((l) => g.languages.includes(l)))
        return false;
      if (availability === "ON-SPOT" && g.status !== "ON-SPOT") return false;
      if (availability === "ON-TOUR" && g.status !== "ON-TOUR") return false;
      if (priceRange === "under1000" && g.price >= 1000) return false;
      if (priceRange === "1000-1200" && (g.price < 1000 || g.price > 1200)) return false;
      if (priceRange === "over1200" && g.price <= 1200) return false;
      return true;
    }).sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "experience") return parseInt(b.experience) - parseInt(a.experience);
      if (sortBy === "price_low") return a.price - b.price;
      if (sortBy === "price_high") return b.price - a.price;
      return 0;
    });
  }, [search, state, site, minRating, languages, availability, priceRange, sortBy]);

  const uniqueStates = new Set(filtered.map((g) => g.state)).size;

  const sidebarProps: FilterSidebarProps = {
    search, onSearch: setSearch,
    state, onState: handleState,
    site, onSite: setSite, siteOptions,
    minRating, onMinRating: setMinRating,
    languages, onToggleLanguage: toggleLanguage,
    availability, onAvailability: setAvailability,
    priceRange, onPriceRange: setPriceRange,
    activeFilterCount, onClearAll: clearAll,
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">

      {/* Page header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
          <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-gray-900 font-medium">Guide Directory</span>
        </div>

        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              Explore Certified Guide Directory
            </h1>
            <p
              className="text-sm text-gray-500 mt-1 italic"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {filtered.length} verified guide{filtered.length !== 1 ? "s" : ""} across{" "}
              {uniqueStates} state{uniqueStates !== 1 ? "s" : ""}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 bg-white hover:border-[#582A4A] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-7.586L3.293 6.707A1 1 0 013 6V4z" />
              </svg>
              Filters
              {activeFilterCount > 0 && (
                <span className="bg-[#582A4A] text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-bold">
                  {activeFilterCount}
                </span>
              )}
            </button>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortKey)}
              className="border border-gray-200 rounded-xl px-3 py-2 text-sm text-gray-700 bg-white focus:outline-none focus:border-[#582A4A] cursor-pointer"
            >
              <option value="rating">Sort: Rating</option>
              <option value="experience">Sort: Experience</option>
              <option value="price_low">Sort: Price (Low → High)</option>
              <option value="price_high">Sort: Price (High → Low)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Active filter chips */}
      {activeFilterCount > 0 && (
        <div className="flex flex-wrap gap-2 mb-5">
          {state !== "All" && (
            <span className="flex items-center gap-1.5 text-xs bg-[#582A4A]/10 text-[#582A4A] px-3 py-1.5 rounded-full font-medium">
              📍 {state}
              <button onClick={() => handleState("All")} className="font-bold hover:opacity-70">×</button>
            </span>
          )}
          {site !== "All" && (
            <span className="flex items-center gap-1.5 text-xs bg-[#582A4A]/10 text-[#582A4A] px-3 py-1.5 rounded-full font-medium">
              🏛 {site}
              <button onClick={() => setSite("All")} className="font-bold hover:opacity-70">×</button>
            </span>
          )}
          {minRating > 0 && (
            <span className="flex items-center gap-1.5 text-xs bg-[#582A4A]/10 text-[#582A4A] px-3 py-1.5 rounded-full font-medium">
              ⭐ {minRating}+
              <button onClick={() => setMinRating(0)} className="font-bold hover:opacity-70">×</button>
            </span>
          )}
          {languages.map((lang) => (
            <span key={lang} className="flex items-center gap-1.5 text-xs bg-[#582A4A]/10 text-[#582A4A] px-3 py-1.5 rounded-full font-medium">
              🗣 {lang}
              <button onClick={() => toggleLanguage(lang)} className="font-bold hover:opacity-70">×</button>
            </span>
          ))}
          {availability !== "All" && (
            <span className="flex items-center gap-1.5 text-xs bg-[#582A4A]/10 text-[#582A4A] px-3 py-1.5 rounded-full font-medium">
              ● {availability}
              <button onClick={() => setAvailability("All")} className="font-bold hover:opacity-70">×</button>
            </span>
          )}
          {priceRange !== "All" && (
            <span className="flex items-center gap-1.5 text-xs bg-[#582A4A]/10 text-[#582A4A] px-3 py-1.5 rounded-full font-medium">
              {priceRange === "under1000" ? "Under ₹1,000" : priceRange === "1000-1200" ? "₹1,000–₹1,200" : "Above ₹1,200"}
              <button onClick={() => setPriceRange("All")} className="font-bold hover:opacity-70">×</button>
            </span>
          )}
        </div>
      )}

      {/* Layout */}
      <div className="flex gap-8 items-start">

        {/* Desktop sidebar */}
        <aside className="hidden lg:block w-64 shrink-0 bg-white rounded-2xl border border-gray-200 p-5 sticky top-20">
          <FilterSidebar {...sidebarProps} />
        </aside>

        {/* Card grid */}
        <div className="flex-1 min-w-0">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-5xl mb-4">🔍</p>
              <p className="text-gray-600 font-medium mb-1">No guides match your filters</p>
              <p className="text-sm text-gray-400 mb-4">Try removing a filter or broadening your search</p>
              <button
                onClick={clearAll}
                className="text-[#582A4A] text-sm font-semibold border border-[#582A4A] px-4 py-2 rounded-xl hover:bg-[#582A4A] hover:text-white transition-colors"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {filtered.map((guide) => (
                <div
                  key={guide.id}
                  className="bg-white rounded-2xl p-5 flex flex-col gap-4 shadow-sm border border-gray-200 transition-all duration-200 hover:shadow-md hover:border-[#582A4A]/40"
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
                        <span
                          className={`text-[9px] font-bold uppercase tracking-wider ${
                            guide.status === "ON-SPOT" ? "text-emerald-600" : "text-rose-500"
                          }`}
                        >
                          ● {guide.status}
                        </span>
                        <span className="text-[9px] font-bold uppercase tracking-wider text-gray-400">CERTIFIED</span>
                      </div>
                      <p className="font-bold text-gray-900 text-sm leading-tight">{guide.name}</p>
                      <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">REG: {guide.reg}</p>
                      <p className="text-[10px] text-[#582A4A] font-semibold mt-0.5">
                        📍{" "}
                        {guide.monumentSlug ? (
                          <Link href={`/monument/${guide.monumentSlug}`} className="hover:underline">
                            {guide.monument}
                          </Link>
                        ) : (
                          guide.monument
                        )}{" "}
                        · {guide.state}
                      </p>
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
                        <span
                          key={lang}
                          className="text-[10px] font-medium bg-purple-50 text-purple-700 px-2.5 py-1 rounded-full flex items-center gap-1"
                        >
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
                      <p className="text-sm font-bold text-gray-900">
                        INR {guide.price.toLocaleString()}{" "}
                        <span className="text-gray-400 font-normal text-xs">/ Day</span>
                      </p>
                    </div>
                    {guide.status === "ON-TOUR" ? (
                      <button
                        disabled
                        className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-gray-200 text-gray-400 text-xs font-semibold bg-gray-50 cursor-not-allowed shadow-sm"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        Booked Now
                      </button>
                    ) : guide.monumentSlug === "taj-mahal" && guide.reg === "MT-67432" ? (
                      <Link
                        href="/guide/rajesh-kumar"
                        className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#582A4A] text-white text-[10px] font-bold uppercase tracking-wide hover:bg-[#3D1A35] transition-colors"
                      >
                        Select &amp; Proceed
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    ) : (
                      <button className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#582A4A] text-white text-[10px] font-bold uppercase tracking-wide hover:bg-[#3D1A35] transition-colors">
                        Select &amp; Proceed
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-2xl p-5 max-h-[85vh] overflow-y-auto lg:hidden shadow-2xl">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-bold text-gray-900 text-base">Filters</h3>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="text-gray-500 hover:text-gray-900 p-1"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <FilterSidebar {...sidebarProps} />
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="w-full mt-5 py-3 bg-[#582A4A] text-white rounded-xl font-semibold text-sm hover:bg-[#3D1A35] transition-colors"
            >
              Show {filtered.length} Guide{filtered.length !== 1 ? "s" : ""}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
