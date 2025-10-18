import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const navItems = [
  { id: "home", emoji: "🏠", label: "Home", href: "#home" },
  { id: "stories", emoji: "📖", label: "Stories", href: "#stories" },
  { id: "cats", emoji: "📚", label: "Categories", href: "#categories" },
  { id: "desires", emoji: "💖", label: "Desires", href: "#desires" },
  { id: "about", emoji: "👁️", label: "About", href: "#about" },
  { id: "contact", emoji: "📞", label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate('/');
  };

  const handleNavClick = (href, event) => {
    if (href.startsWith('#')) {
      event.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        if (window.location.pathname !== '/') {
          navigate('/');
          setTimeout(() => {
            const element = document.getElementById(targetId);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }, 100);
        } else {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setMobileOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-gradient-to-r from-[#1a001a] via-[#330033] to-[#1a001a] shadow-2xl shadow-[#ff0080]/40 py-3"
            : "bg-gradient-to-r from-[#ff0080]/10 via-[#ff4da6]/5 to-[#ff0080]/10 backdrop-blur-xl py-5"
        } border-b border-[#ff0080]/30`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={handleLogoClick}
            title="Go to Homepage"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full blur-sm opacity-70 bg-gradient-to-r from-[#ff0080] to-[#ff4da6] group-hover:opacity-100 transition-opacity duration-300"></div>
              <img
                src="/lusty laughs.jpeg"
                alt="Lusty Laughs"
                className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-[#ff0080] shadow-[0_8px_30px_rgba(255,0,127,0.4)] group-hover:scale-105 group-hover:shadow-[0_12px_40px_rgba(255,0,127,0.6)] transition-all duration-300"
              />
            </div>

            <div className="flex flex-col leading-none">
              <span className="brand-font text-3xl text-[#ff0080] drop-shadow-[0_4px_20px_rgba(255,0,127,0.5)] group-hover:scale-105 transition-transform duration-300">
                Lusty Laughs
              </span>
              <span className="ui-font text-xs text-[#ff99cc] tracking-widest bg-gradient-to-r from-transparent via-[#ff0080]/20 to-transparent px-2 py-0.5 rounded-full">
                Forbidden Desires
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-10 lg:gap-14">
            {navItems.map((it) => (
              <li key={it.id} className="relative group">
                <a
                  href={it.href}
                  onClick={(e) => handleNavClick(it.href, e)}
                  className="flex flex-col items-center gap-2 px-2 py-1 transition-all duration-300 group-hover:scale-110 cursor-pointer"
                  aria-label={it.label}
                >
                  <div className="flex items-center justify-center w-16 h-16 rounded-full transition-all duration-300 group-hover:bg-gradient-to-r from-[#ff0080]/10 to-[#ff4da6]/10">
                    <img
                      src={it.img}
                      alt={it.label}
                      className="w-10 h-10 object-contain opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 group-hover:brightness-110"
                    />
                  </div>

                  <span className="ui-font text-[#ffb3d9] group-hover:text-[#ff0080] text-sm font-semibold tracking-wide transition-colors duration-300 whitespace-nowrap">
                    {it.label}
                  </span>
                </a>

                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#ff0080] to-[#ff4da6] group-hover:w-12 transition-all duration-300"></div>
              </li>
            ))}
          </ul>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button className="hidden md:inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#ff0080] to-[#ff4da6] text-white font-bold shadow-[0_10px_30px_rgba(255,0,127,0.4)] hover:shadow-[0_10px_40px_rgba(255,0,127,0.6)] hover:scale-105 transition-all duration-300 ui-font">
              Join Now
            </button>

            {/* Premium Mobile Toggle Button */}
            <button
              onClick={() => setMobileOpen((s) => !s)}
              className="md:hidden transition-all duration-500 hover:scale-110"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? (
                // Premium Close Button - X mark
                <div className="relative">
                  <div className="w-14 h-14 flex items-center justify-center">
                    <div className="relative">
                      {/* Animated X lines */}
                      <div className="w-8 h-0.5 bg-white transform rotate-45 absolute transition-all duration-500"></div>
                      <div className="w-8 h-0.5 bg-white transform -rotate-45 absolute transition-all duration-500"></div>
                    </div>
                  </div>
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#ff0080] to-[#ff4da6] opacity-0 hover:opacity-20 blur-sm transition-opacity duration-300 -z-10"></div>
                </div>
              ) : (
                // Premium Kiss Emoji Button
                <div className="relative group">
                  <span className="text-5xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:filter group-hover:drop-shadow-[0_0_15px_rgba(255,0,127,0.8)]">
                    💋
                  </span>
                  {/* Subtle pulse animation */}
                  <div className="absolute inset-0 animate-ping rounded-full bg-[#ff0080] opacity-20 group-hover:opacity-30 -z-10"></div>
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-gradient-to-b from-[#330033] to-[#1a001a] border-t border-[#ff0080]/30 shadow-2xl backdrop-blur-xl">
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navItems.map((it) => (
                <a
                  key={it.id}
                  href={it.href}
                  onClick={(e) => handleNavClick(it.href, e)}
                  className="flex items-center gap-4 px-4 py-4 rounded-xl transition-all duration-300 hover:bg-gradient-to-r from-[#ff0080]/10 to-[#ff4da6]/10 group cursor-pointer"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#ff0080]/5 to-[#ff4da6]/5">
                    <img
                      src={it.img}
                      alt={it.label}
                      className="w-8 h-8 object-contain opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 group-hover:brightness-110"
                    />
                  </div>

                  <span className="ui-font text-lg text-[#ffb3d9] group-hover:text-[#ff0080] font-semibold transition-colors duration-300">
                    {it.label}
                  </span>
                </a>
              ))}

              {/* Premium Unlock Button */}
              <button className="mt-4 w-full py-5 rounded-2xl transition-all duration-500 hover:scale-105 group relative overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff0080] to-[#ff4da6] opacity-100 group-hover:from-[#ff4da6] group-hover:to-[#ff0080] transition-all duration-500"></div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                
                {/* Content */}
                <div className="relative z-10 flex items-center justify-center gap-3">
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-300">✨</span>
                  <span className="text-white font-bold text-lg tracking-wide">Unlock Desires</span>
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-300">🔓</span>
                </div>
                
                {/* Subtle shadow */}
                <div className="absolute inset-0 shadow-2xl shadow-[#ff0080]/40 group-hover:shadow-[#ff0080]/60 transition-all duration-500 rounded-2xl"></div>
              </button>
            </div>
          </div>
        )}
      </nav>

      <div className="h-20 md:h-24"></div>
    </>
  );
}