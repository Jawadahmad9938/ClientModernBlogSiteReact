import React from "react";

const Hero = () => {
  return (
    <div className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a0014] via-[#1a001a] to-[#330033] px-4 sm:px-6 lg:px-8 py-20 md:py-28">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#ff0080]/10 via-transparent to-transparent"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-6 h-6 bg-[#ff0080] rounded-full blur-xl opacity-60 animate-float"></div>
      <div className="absolute top-40 right-20 w-8 h-8 bg-[#ff4da6] rounded-full blur-xl opacity-40 animate-float delay-1000"></div>
      <div className="absolute bottom-32 left-1/4 w-5 h-5 bg-[#ff0080] rounded-full blur-lg opacity-50 animate-float delay-2000"></div>
      <div className="absolute bottom-20 right-32 w-7 h-7 bg-[#ff4da6] rounded-full blur-lg opacity-30 animate-float delay-3000"></div>
      
      {/* Animated Gradient Orbs */}
      <div className="absolute -top-20 -left-40 w-80 h-80 bg-gradient-to-r from-[#ff0080] to-[#ff4da6] rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute -bottom-20 -right-40 w-80 h-80 bg-gradient-to-r from-[#ff4da6] to-[#ff0080] rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto w-full">
        {/* Premium Badge */}
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#ff0080]/20 to-[#ff4da6]/20 border border-[#ff0080]/30 backdrop-blur-sm mb-8 md:mb-10">
          <span className="text-2xl">💎</span>
          <span className="text-[#ffb3d9] font-semibold tracking-widest text-sm uppercase">
            Premium Erotic Content
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 leading-tight">
          <span className="bg-gradient-to-r from-[#ff0080] via-[#ff4da6] to-[#ff0080] bg-clip-text text-transparent">
            Lusty Laughs
          </span>
          <br />
          <span className="text-3xl sm:text-4xl lg:text-5xl text-[#ffb3d9] font-light mt-4 block">
            Where Desires Come Alive 💋
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl lg:text-2xl text-[#ffb3d9]/90 max-w-4xl mx-auto mb-10 md:mb-12 leading-relaxed font-light">
          Dive into a world of <span className="text-[#ff0080] font-semibold">sensual stories</span>, 
          {" "}<span className="text-[#ff4da6] font-semibold">playful roleplays</span>, and 
          {" "}<span className="text-[#ff0080] font-semibold">intimate fantasies</span> that will 
          ignite your imagination and awaken your deepest desires.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-14 md:mb-16">
          <button className="group relative px-8 py-4 sm:px-12 sm:py-5 bg-gradient-to-r from-[#ff0080] to-[#ff4da6] text-white font-bold rounded-2xl shadow-2xl shadow-[#ff0080]/40 hover:shadow-[#ff0080]/60 transform hover:scale-105 transition-all duration-300 overflow-hidden">
            {/* Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            
            <span className="relative z-10 text-lg tracking-widest flex items-center gap-3">
              <img 
                src="https://i.postimg.cc/QCyjRT3d/fire.png" 
                alt="Stories" 
                className="w-6 h-6 object-contain filter brightness-0 invert group-hover:scale-110 transition-transform duration-300"
              />
              Explore Stories
            </span>
          </button>

          <button className="group px-8 py-4 sm:px-12 sm:py-5 bg-transparent text-[#ffb3d9] font-bold rounded-2xl border-2 border-[#ff0080]/50 hover:border-[#ff0080] hover:bg-[#ff0080]/10 transform hover:scale-105 transition-all duration-300">
            <span className="flex items-center gap-3">
              <img 
                src="https://i.postimg.cc/MGmqz4w6/community.png" 
                alt="Community" 
                className="w-6 h-6 object-contain opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
              />
              Join Community
            </span>
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
          {[
            { number: "500+", label: "Erotic Stories", img: "https://i.postimg.cc/gkLpxrpD/stories.png" },
            { number: "50K+", label: "Happy Readers", img: "https://i.postimg.cc/rsvv1CTS/readers.png" },
            { number: "24/7", label: "New Content", img: "https://i.postimg.cc/TPRBJP8T/content.png" },
            { number: "100%", label: "Discreet", img: "https://i.postimg.cc/Hn7NkcMW/discrete.png" }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="flex justify-center mb-2 transform group-hover:scale-110 transition-transform duration-300">
                <img 
                  src={stat.img} 
                  alt={stat.label}
                  className="w-8 h-8 object-contain opacity-90 group-hover:opacity-100"
                />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-[#ff0080] mb-1">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm text-[#ffb3d9]/80 font-medium tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator - Only show if needed */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#ff0080] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#ff0080] rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;