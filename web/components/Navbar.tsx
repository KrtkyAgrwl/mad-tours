"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Explore Guides", href: "/explore" },
  { label: "Profile", href: "/profile" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
  { label: "Guide Eligibility", href: "/eligibility" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("Explore Guides");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between h-16 gap-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image src="/logo.png" alt="MAD Tours Logo" width={40} height={40} className="rounded-full" />
          <div className="leading-tight">
            <div className="flex items-baseline gap-0.5">
              <span className="font-extrabold text-lg text-gray-900 tracking-tight">MADTours</span>
              <span className="text-[#8B1F7A] font-bold text-sm">.in</span>
            </div>
            <p className="text-[9px] text-gray-500 tracking-widest uppercase font-medium">
              Travel More · Connect More
            </p>
          </div>
        </Link>

        {/* Desktop nav links */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setActiveLink(link.label)}
              className={`px-3 py-1.5 text-sm font-medium whitespace-nowrap transition-colors ${
                activeLink === link.label
                  ? "text-gray-900 border-b-2 border-[#2D1B4E]"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right-side info strip */}
        <div className="hidden lg:flex items-center gap-4 shrink-0 text-xs">
          <div className="flex items-center gap-1.5 border border-gray-300 rounded-full px-3 py-1.5">
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
            <span className="text-gray-500">24/7 VERIFIED SUPPORT:</span>
            <a href="mailto:info@madtours.in" className="text-[#2D1B4E] font-semibold">
              info@madtours.in
            </a>
          </div>
          <div className="flex items-center gap-1.5 border border-gray-300 rounded-full px-3 py-1.5">
            <span className="w-2 h-2 rounded-full bg-gray-400" />
            <span className="text-gray-500">AMM ID:</span>
            <span className="text-gray-900 font-semibold">987654</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-gray-700 font-medium">Hi, Kartikay</span>
            <button className="text-gray-500 hover:text-red-600 font-medium transition-colors">
              SIGN OUT
            </button>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-1">
            <span className={`block h-0.5 bg-current transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`block h-0.5 bg-current transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-4 pb-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => { setActiveLink(link.label); setMenuOpen(false); }}
              className={`block py-2.5 text-sm font-medium border-b border-gray-50 ${
                activeLink === link.label ? "text-[#2D1B4E]" : "text-gray-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-3 flex flex-col gap-2 text-xs">
            <a href="mailto:info@madtours.in" className="text-[#2D1B4E] font-semibold">info@madtours.in</a>
            <span className="text-gray-500">AMM ID: 987654</span>
            <span className="text-gray-700">Hi, Kartikay · <button className="text-red-500">Sign Out</button></span>
          </div>
        </div>
      )}
    </header>
  );
}
