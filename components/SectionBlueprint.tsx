import React from 'react';
import { ArrowRight } from 'lucide-react';

interface SectionBlueprintProps {
  title: string;
  highlight?: string;
  description: string;
  image: string;
  badge?: string;
  primaryAction?: { label: string; href: string };
  secondaryAction?: { label: string; href: string; icon?: React.ReactNode };
  heightClass?: string;
  id?: string;
}

const SectionBlueprint: React.FC<SectionBlueprintProps> = ({
  title,
  highlight,
  description,
  image,
  badge,
  primaryAction,
  secondaryAction,
  heightClass = 'min-h-[70vh]',
  id
}) => {
  return (
    <section id={id} className={`relative ${heightClass} flex items-center justify-center overflow-hidden group`}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        {/* Gradient Overlay - The "Blueprint" Styling */}
        <div className="absolute inset-0 bg-gradient-to-r from-ptx-dark/95 via-ptx-dark/80 to-ptx-dark/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-ptx-dark via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="max-w-4xl">
          {badge && (
            <div className="inline-block mb-6 px-4 py-1.5 bg-ptx-accent/20 border border-ptx-accent/50 rounded-full backdrop-blur-md">
              <span className="text-ptx-accent font-semibold text-xs tracking-widest uppercase">
                {badge}
              </span>
            </div>
          )}
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            {title} <br />
            {highlight && (
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                {highlight}
              </span>
            )}
          </h2>
          
          <p className="text-xl text-slate-300 mb-10 max-w-2xl font-light leading-relaxed">
            {description}
          </p>

          {(primaryAction || secondaryAction) && (
            <div className="flex flex-col sm:flex-row gap-4">
              {primaryAction && (
                <a
                  href={primaryAction.href}
                  className="px-8 py-4 bg-ptx-accent hover:bg-amber-700 text-white rounded font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-amber-900/20"
                >
                  {primaryAction.label} <ArrowRight size={18} />
                </a>
              )}
              {secondaryAction && (
                <a
                  href={secondaryAction.href}
                  className="px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:border-white/40 rounded font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {secondaryAction.label} {secondaryAction.icon}
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SectionBlueprint;
