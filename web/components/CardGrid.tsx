const MONUMENTS = [
  {
    id: 1,
    name: "Taj Mahal",
    state: "Uttar Pradesh",
    guidesActive: 48,
    price: 1200,
    description:
      "The monumental Mughal marble mausoleum built of pure ivory-white stone. A UNESCO World Heritage Site and one of the seven wonders of the modern world.",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600&q=80",
  },
  {
    id: 2,
    name: "Fatehpur Sikri",
    state: "Uttar Pradesh",
    guidesActive: 22,
    price: 1000,
    description:
      "The majestic red sandstone capital built by Emperor Akbar. Features magnificent palaces, mosques and courtyards frozen in sixteenth century grandeur.",
    image: "https://images.unsplash.com/photo-1587135941948-670b381f08ce?w=600&q=80",
  },
  {
    id: 3,
    name: "Humayun's Tomb",
    state: "Delhi",
    guidesActive: 19,
    price: 1100,
    description:
      "The splendid precursor to the Taj Mahal. This grand red-sandstone garden tomb of the Mughal emperor set the template for Mughal funerary architecture.",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80",
  },
  {
    id: 4,
    name: "Red Fort",
    state: "Delhi",
    guidesActive: 35,
    price: 1150,
    description:
      "The massive octagonal military bastion and imperial home of Mughal dynasty rulers in Old Delhi, housing museums, palaces and the famous Diwan-i-Khas.",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&q=80",
  },
];

const STATE_COLORS: Record<string, string> = {
  "Uttar Pradesh": "bg-emerald-600",
  "Delhi": "bg-sky-600",
};

export default function CardGrid() {
  return (
    <section className="max-w-screen-xl mx-auto px-4 py-12">

      {/* Section header */}
      <div className="flex items-start justify-between gap-4 mb-1">
        <div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 leading-snug max-w-2xl">
            Meet Northern India&apos;s Highest-Rated Storytellers: 100% Certified, Police-Cleared &amp; Top-Rated
          </h2>
          <p
            className="text-sm text-gray-500 mt-1 italic"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Mughal brick bastions and monumental temples of the central state heartlands
          </p>
        </div>
        <a
          href="/explore"
          className="flex items-center gap-1 text-sm font-semibold text-gray-700 hover:text-[#582A4A] whitespace-nowrap pt-1 transition-colors shrink-0"
        >
          View Directory
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      {/* Card row */}
      <div className="mt-6 flex gap-5 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory">
        {MONUMENTS.map((m) => (
          <div
            key={m.id}
            className="group snap-start shrink-0 w-[280px] sm:w-[300px] rounded-2xl overflow-hidden bg-white flex flex-col shadow-sm border border-gray-200 transition-all duration-200 hover:shadow-lg hover:scale-[1.02] hover:border-[#582A4A]"
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={m.image}
                alt={m.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span
                className={`absolute top-3 left-3 ${STATE_COLORS[m.state] ?? "bg-gray-600"} text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full`}
              >
                {m.state}
              </span>
              <span className="absolute top-3 right-3 bg-emerald-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                {m.guidesActive} Guides Active
              </span>
            </div>

            {/* Body */}
            <div className="flex flex-col flex-1 p-4 gap-2">
              <h3 className="font-bold text-gray-900 text-base">{m.name}</h3>
              <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">{m.description}</p>

              <div className="flex items-center gap-2 text-[11px] text-emerald-600 font-medium mt-auto pt-2">
                <span>✓ Free Cancel</span>
                <span className="text-gray-300">·</span>
                <span>Verified Direct Rate</span>
              </div>

              {/* CTA — identical across all cards, goes dark on hover */}
              <button className="w-full mt-2 py-2.5 rounded-xl text-sm font-semibold border border-[#582A4A] text-[#582A4A] bg-white transition-colors duration-200 hover:bg-[#582A4A] hover:text-white">
                INR {m.price.toLocaleString()} onwards&nbsp;|&nbsp;Find my guide
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
