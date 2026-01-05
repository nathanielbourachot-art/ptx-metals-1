import React from 'react';
import { ArrowRight, Calendar, ExternalLink } from 'lucide-react';
import { NewsItem } from '../types';

const News: React.FC = () => {
  const newsItems: NewsItem[] = [
    {
      id: '1',
      date: 'Dec 21, 2025',
      title: 'PTX Metals Inc. Completes Surface Work at the Shining Tree Gold Property and Reports Multiple High-Grade Results',
      category: 'Press Release',
      link: '#'
    },
    {
      id: '2',
      date: 'Dec 01, 2025',
      title: 'PTX Metals Launches 5,000m Drill Program at W2 Copper-Nickel-PGE-Gold Project',
      category: 'Press Release',
      link: '#'
    },
    {
      id: '3',
      date: 'Nov 24, 2025',
      title: 'Green Canada Corporation Announces Proposed Going Public Transaction and Acquisition of Marshall Uranium Project',
      category: 'Press Release',
      link: '#'
    }
  ];

  return (
    <section id="news" className="py-24 bg-ptx-primary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-between items-end mb-12 border-b border-white/10 pb-6">
          <div>
             <h4 className="text-ptx-accent font-bold uppercase tracking-widest text-sm mb-2">Latest Updates</h4>
             <h2 className="text-3xl md:text-4xl font-bold text-white">News & Press</h2>
          </div>
          <button className="hidden sm:flex items-center gap-2 text-ptx-accent font-medium hover:text-white transition-colors mt-4 sm:mt-0">
            View Archive <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <div key={item.id} className="group cursor-pointer bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-ptx-accent/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-2 py-1 bg-slate-900 text-slate-300 text-xs font-semibold rounded uppercase tracking-wider border border-slate-800">
                    {item.category}
                </span>
                <div className="flex items-center gap-1 text-slate-500 text-xs">
                    <Calendar size={12} />
                    {item.date}
                </div>
              </div>
              <h3 className="text-lg font-bold text-white leading-snug group-hover:text-ptx-accent transition-colors mb-4">
                {item.title}
              </h3>
              <div className="flex items-center text-sm text-slate-400 group-hover:text-white transition-colors">
                  Read Full Release <ExternalLink size={14} className="ml-2" />
              </div>
            </div>
          ))}
        </div>
        
        <button className="sm:hidden w-full mt-8 py-3 bg-slate-800 text-white rounded font-medium border border-slate-700">
            View All News
        </button>
      </div>
    </section>
  );
};

export default News;
