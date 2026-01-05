import React from 'react';
import { Cpu, Zap, Battery, Globe } from 'lucide-react';

const MarketTrends: React.FC = () => {
  const trends = [
    {
      icon: <Cpu className="w-10 h-10 text-cyan-400" />,
      title: "AI Infrastructure",
      desc: "Data centers and AI computing require massive amounts of Copper for conductivity and cooling."
    },
    {
      icon: <Battery className="w-10 h-10 text-green-400" />,
      title: "Energy Storage",
      desc: "Nickel and PGEs are critical components in next-gen battery technologies for grid storage."
    },
    {
      icon: <Zap className="w-10 h-10 text-yellow-400" />,
      title: "Electrification",
      desc: "Global shift to electric vehicles (EVs) is driving unprecedented demand for critical minerals."
    },
    {
      icon: <Globe className="w-10 h-10 text-indigo-400" />,
      title: "Supply Security",
      desc: "North American supply chains are prioritizing domestic sources to reduce geopolitical risk."
    }
  ];

  return (
    <section id="trends" className="py-24 bg-ptx-primary border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
                <h4 className="text-ptx-accent font-bold uppercase tracking-widest text-sm mb-2">Macro Drivers</h4>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Connecting Geology to Technology
                </h2>
                <p className="text-slate-300 text-lg">
                    PTX Metals is exploring for the building blocks of the future economy.
                </p>
            </div>
            <a href="#investors" className="text-white hover:text-ptx-accent font-medium flex items-center gap-2 transition-colors">
                See Investor Presentation <span className="text-xl">→</span>
            </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trends.map((trend, index) => (
            <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:bg-slate-800 hover:border-slate-600 transition-all duration-300">
              <div className="bg-slate-900/50 w-16 h-16 rounded-lg flex items-center justify-center mb-6 border border-white/5 shadow-inner">
                {trend.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{trend.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-3">
                {trend.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketTrends;
