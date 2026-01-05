import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2025/10/08175718/Photo-2025-03-28-9-14-08-AM-scaled.jpg"
          alt="Northern Ontario Mining Landscape"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-ptx-dark/95 via-ptx-dark/70 to-ptx-dark/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-ptx-dark via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 w-full">
        <div className="max-w-4xl">
          <div className="inline-block mb-6 px-4 py-1.5 bg-ptx-accent/20 border border-ptx-accent/50 rounded-full backdrop-blur-md">
            <span className="text-ptx-accent font-semibold text-xs tracking-widest uppercase">
              TSXV: PTX | OTCQB: PANXF | Frankfurt: 9PX
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
            Creating Value from <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
              High-Quality Assets.
            </span>
          </h1>
          
          <p className="text-xl text-slate-300 mb-10 max-w-2xl font-light leading-relaxed">
            Focused on Gold and Copper-Nickel-PGE projects in the world-acclaimed mining camps of Northern Ontario.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="px-8 py-4 bg-ptx-accent hover:bg-amber-700 text-white rounded font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-amber-900/20"
            >
              Explore Projects <ArrowRight size={18} />
            </a>
            <a
              href="https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2025/02/17072850/PTX-Metals-Corportate-Presentation-DECEMBER-2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:border-white/40 rounded font-semibold transition-all duration-300 flex items-center justify-center gap-2"
            >
              Corporate Presentation <Download size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block text-slate-400">
        <span className="text-xs uppercase tracking-widest mb-2 block text-center">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-slate-400 to-transparent mx-auto"></div>
      </div>
    </section>
  );
};

export default Hero;
