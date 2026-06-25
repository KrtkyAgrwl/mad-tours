export default function Hero() {
  return (
    <section
      className="relative w-full min-h-[420px] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center 40%",
      }}
    >
      {/* Dark gradient overlay */}
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

        {/* Search bar */}
        <div className="w-full max-w-2xl bg-white rounded-full shadow-2xl flex items-center overflow-hidden">
          {/* Search input */}
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

          {/* Date picker trigger */}
          <div className="flex items-center gap-2 px-5 py-3.5 cursor-pointer shrink-0">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z" />
            </svg>
            <div className="text-left">
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider leading-none">Book Date</p>
              <p className="text-sm text-gray-700 font-medium">Anytime</p>
            </div>
          </div>

          {/* Explore button */}
          <button className="bg-[#1a0a2e] hover:bg-[#2d1b4e] text-white font-bold text-sm tracking-wider px-7 py-[18px] transition-colors rounded-r-full shrink-0">
            EXPLORE
          </button>
        </div>
      </div>
    </section>
  );
}
