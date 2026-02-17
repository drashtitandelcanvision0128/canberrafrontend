import React from 'react';
import { SectionId } from '../types';

interface HeroProps {
  onScrollTo: (id: SectionId) => void;
}

const Hero: React.FC<HeroProps> = ({ onScrollTo }) => {
  return (
    <section className="relative h-screen flex items-center justify-center text-white text-center overflow-hidden">
      {/* High-quality tech-focused background */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] hover:scale-110" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1920')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-tms-blue/90 via-tms-blue/70 to-tms-blue/90"></div>
      
      <div className="relative z-10 p-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-poppins font-bold mb-6 animate-fade-in-down leading-tight">
          Engineering <span className="text-tms-cyan">Tomorrow’s</span> Solutions Today
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl font-sans max-w-3xl mx-auto mb-10 animate-fade-in-up text-gray-200">
          Global leaders in digital product engineering, strategic staffing, and innovative IoT ecosystems.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button
            onClick={() => onScrollTo(SectionId.Services)}
            className="w-full sm:w-auto px-10 py-4 bg-tms-cyan text-white font-bold rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-tms-cyan/20"
          >
            Discover Our Services
          </button>
          <button
            onClick={() => onScrollTo(SectionId.Contact)}
            className="w-full sm:w-auto px-10 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-tms-blue transition-all duration-300 transform hover:scale-105"
          >
            Start a Project
          </button>
        </div>
      </div>

       <style>{`
        @keyframes fade-in-down {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-down {
          animation: fade-in-down 1s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out 0.5s forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Hero;