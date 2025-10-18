import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      // Reset after 3 seconds
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "All Stories", href: "/#stories" },
    { name: "Popular", href: "/#popular" },
    { name: "New Releases", href: "/#new" }
  ];

  const categories = [
    { name: "Romantic", count: "24 Stories" },
    { name: "Forbidden", count: "18 Stories" },
    { name: "Passionate", count: "32 Stories" },
    { name: "Intimate", count: "15 Stories" }
  ];

  const supportLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Contact Us", href: "/contact" },
    { name: "FAQ", href: "/faq" }
  ];

  return (
    <footer className="bg-gradient-to-b from-[#0a0014] to-[#1a001a] border-t border-[#ff0080]/20">
      {/* Newsletter Section */}
      <div className="border-b border-[#ff0080]/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              <span className="text-4xl">💌</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4 font-['Playfair_Display']">
              Stay in the Loop
            </h2>
            <p className="text-lg text-[#ffb3d9]/80 mb-8 max-w-2xl mx-auto">
              Get exclusive access to our latest passionate stories, writing tips, and special offers delivered straight to your inbox.
            </p>
            
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
              {isSubscribed ? (
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-6">
                  <div className="flex items-center justify-center gap-3 text-green-400">
                    <span className="text-2xl">🎉</span>
                    <span className="font-semibold">Welcome to our intimate circle!</span>
                  </div>
                  <p className="text-green-300/80 text-sm mt-2">
                    Check your email to confirm your subscription.
                  </p>
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    className="flex-1 px-6 py-4 bg-[#1a001a] border border-[#ff0080]/30 rounded-2xl text-white placeholder-[#ffb3d9]/50 focus:outline-none focus:border-[#ff0080] focus:ring-2 focus:ring-[#ff0080]/20 transition-all duration-300 font-['Inter']"
                    required
                  />
                  <button
                    type="submit"
                    className="px-8 py-4 bg-gradient-to-r from-[#ff0080] to-[#ff4da6] text-white font-bold rounded-2xl hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-[#ff0080]/40 font-['Inter'] whitespace-nowrap"
                  >
                    Subscribe Now
                  </button>
                </div>
              )}
              <p className="text-xs text-[#ffb3d9]/50 mt-4">
                By subscribing, you agree to our Privacy Policy. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-[#ff0080] to-[#ff4da6] rounded-2xl flex items-center justify-center text-white text-xl font-bold">
                LL
              </div>
              <div>
                <h3 className="text-2xl font-black text-white font-['Playfair_Display']">
                  Lusty Laughs
                </h3>
                <p className="text-[#ff0080] text-sm font-semibold">💋 Passionate Storytelling</p>
              </div>
            </div>
            <p className="text-[#ffb3d9]/70 text-sm leading-relaxed mb-6">
              Crafting intimate and captivating stories that explore the depths of passion, desire, and human connection.
            </p>
            <div className="flex gap-4">
              {[
                { icon: "📘", label: "Facebook" },
                { icon: "📷", label: "Instagram" },
                { icon: "🐦", label: "Twitter" },
                { icon: "💼", label: "LinkedIn" }
              ].map((social, index) => (
                <button
                  key={index}
                  className="w-10 h-10 bg-[#1a001a] border border-[#ff0080]/20 rounded-xl flex items-center justify-center text-[#ffb3d9] hover:bg-[#ff0080]/10 hover:border-[#ff0080] hover:text-white transition-all duration-300"
                  title={social.label}
                >
                  <span className="text-lg">{social.icon}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 font-['Inter'] border-l-4 border-[#ff0080] pl-3">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[#ffb3d9]/70 hover:text-[#ff4da6] transition-colors duration-300 flex items-center gap-2 group font-['Inter']"
                  >
                    <span className="text-[#ff0080] opacity-0 group-hover:opacity-100 transition-opacity duration-300">•</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 font-['Inter'] border-l-4 border-[#ff4da6] pl-3">
              Hot Categories
            </h4>
            <ul className="space-y-3">
              {categories.map((category, index) => (
                <li key={index}>
                  <a
                    href={`/category/${category.name.toLowerCase()}`}
                    className="text-[#ffb3d9]/70 hover:text-[#ff4da6] transition-colors duration-300 flex justify-between items-center group font-['Inter']"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-[#ff0080] opacity-0 group-hover:opacity-100 transition-opacity duration-300">•</span>
                      {category.name}
                    </span>
                    <span className="text-xs bg-[#ff0080]/10 text-[#ff0080] px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 font-['Inter'] border-l-4 border-[#ff0080] pl-3">
              Support
            </h4>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[#ffb3d9]/70 hover:text-[#ff4da6] transition-colors duration-300 flex items-center gap-2 group font-['Inter']"
                  >
                    <span className="text-[#ff0080] opacity-0 group-hover:opacity-100 transition-opacity duration-300">•</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Contact Info */}
            <div className="mt-8 p-4 bg-[#1a001a]/50 rounded-2xl border border-[#ff0080]/10">
              <h5 className="text-white font-semibold mb-3 font-['Inter']">Get in Touch</h5>
              <div className="space-y-2 text-sm">
                <p className="text-[#ffb3d9]/70 flex items-center gap-2">
                  <span>📧</span>
                  contact@lustylaughs.com
                </p>
                <p className="text-[#ffb3d9]/70 flex items-center gap-2">
                  <span>🕒</span>
                  24/7 Support
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#ff0080]/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-[#ffb3d9]/60 text-sm font-['Inter']">
              © {new Date().getFullYear()} Lusty Laughs. All rights reserved. | Crafted with 💖 for passionate readers
            </div>
            <div className="flex items-center gap-6 text-sm text-[#ffb3d9]/60">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Online: 2.4k readers
              </span>
              <span>🔒 Secure & Private</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;