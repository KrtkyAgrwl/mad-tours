import Link from "next/link";

const FOOTER_LINKS = {
  "Explore": ["Taj Mahal", "Hampi Ruins", "Qutub Minar", "Red Fort", "Fatehpur Sikri", "Humayun's Tomb"],
  "For Guides": ["Guide Eligibility", "Apply Now", "Guide Resources", "Earnings", "Training"],
  "Company": ["About MAD Tours", "Blog", "Press", "Careers", "Contact Us"],
  "Support": ["Help Center", "Safety Guidelines", "Cancellation Policy", "Terms of Service", "Privacy Policy"],
};

export default function Footer() {
  return (
    <footer className="bg-[#1A0A2E] text-gray-300 mt-auto">
      <div className="max-w-screen-xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <div className="flex items-baseline gap-0.5">
                <span className="font-extrabold text-xl text-white tracking-tight">MADTours</span>
                <span className="text-[#C084FC] font-bold">.in</span>
              </div>
              <p className="text-[10px] text-gray-500 tracking-widest uppercase mt-0.5">
                Travel More · Connect More
              </p>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Connecting curious travellers with India&apos;s finest certified local guides — at every monument, every story, every step.
            </p>
            <div className="flex gap-3">
              {["Instagram", "Twitter", "Facebook", "YouTube"].map((s) => (
                <a key={s} href="#" aria-label={s}
                  className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:border-purple-400 hover:text-purple-300 transition-colors text-xs font-bold">
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">{heading}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-sm text-gray-400 hover:text-purple-300 transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} MAD Tours Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
              24/7 Support: <a href="mailto:info@madtours.in" className="text-purple-400 hover:underline">info@madtours.in</a>
            </span>
            <span>·</span>
            <span>Made with ❤️ in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
