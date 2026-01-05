import React from 'react';
import { ArrowRight, MapPin, FileText, Leaf } from 'lucide-react';
import { Project } from '../types';

const Projects: React.FC = () => {
  const projectList: Project[] = [
    {
      id: 'w2',
      title: 'W2 Copper-Nickel-PGE',
      minerals: ['Copper', 'Nickel', 'PGE'],
      location: 'Ring of Fire District, 50km West',
      description: 'A large-scale land package with significant historical potential. The W2 project controls a major Cu-Ni-PGE complex located just 50 km from the Ring of Fire.',
      image: 'https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2024/05/07152333/project1-bg.jpg',
      highlights: ['100% Ownership', 'Near Infrastructure', 'Battery Metal Potential'],
      reportUrl: 'https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2025/03/07093225/2024-W2-Technical-Report_Final.pdf'
    },
    {
      id: 'south-timmins',
      title: 'South Timmins Mining JV',
      minerals: ['Gold'],
      location: 'Abitibi Greenstone Belt',
      description: 'Ideally located in the prolific Timmins Gold Camp. This joint venture focuses on shining a light on under-explored gold assets in a Tier-1 jurisdiction.',
      image: 'https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2024/05/07152333/project2-bg.jpg',
      highlights: ['Shining Tree Gold', 'Heenan Mallard Gold', 'High-Grade Results'],
      reportUrl: 'https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2024/07/03124859/2024-PTX-Shining-Tree-Project-43-101-Report_V2.pdf'
    }
  ];

  return (
    <section id="projects" className="py-24 bg-ptx-dark relative">
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
        
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h4 className="text-ptx-accent font-bold uppercase tracking-widest text-sm mb-2">Our Portfolio</h4>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Flagship Projects</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Developing high-potential assets in geologically proven regions of Northern Ontario.
          </p>
        </div>

        {/* Main Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {projectList.map((project) => (
            <div 
                key={project.id} 
                className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden hover:border-ptx-accent/50 transition-all duration-300 hover:shadow-2xl hover:shadow-ptx-accent/10 flex flex-col"
            >
              {/* Image Header */}
              <div className="h-72 overflow-hidden relative">
                <div className="absolute top-4 left-4 z-10 flex gap-2">
                    {project.minerals.map(m => (
                        <span key={m} className="px-3 py-1 bg-black/60 backdrop-blur-md text-white text-xs font-bold rounded-full border border-white/10">
                            {m}
                        </span>
                    ))}
                </div>
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-90"></div>
                
                {/* Map Overlay Button */}
                <div className="absolute bottom-4 right-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                   <a href={project.reportUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white text-ptx-dark px-4 py-2 rounded-lg font-bold text-sm hover:bg-ptx-accent hover:text-white transition-colors">
                      <FileText size={16} /> NI 43-101 Report
                   </a>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-2 text-ptx-accent text-sm font-medium">
                    <MapPin size={16} /> {project.location}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-ptx-accent transition-colors">
                    {project.title}
                </h3>
                <p className="text-slate-400 mb-6 flex-1 leading-relaxed">
                    {project.description}
                </p>

                {/* Metrics/Highlights */}
                <div className="mb-8 grid grid-cols-1 gap-2">
                    {project.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-slate-300">
                             <div className="w-1.5 h-1.5 bg-ptx-accent rounded-full"></div>
                             {highlight}
                        </div>
                    ))}
                </div>

                <button className="w-full py-3 border border-slate-600 hover:border-ptx-accent hover:bg-ptx-accent hover:text-white text-slate-300 rounded font-medium transition-all duration-300 flex items-center justify-center gap-2">
                    View Project Details <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Green Canada Subsidiary Section */}
        <div className="bg-gradient-to-br from-emerald-950/50 to-slate-900 border border-emerald-900/30 rounded-2xl p-8 md:p-12 relative overflow-hidden">
             {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
                <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                        <Leaf className="text-emerald-500" size={24} />
                        <h3 className="text-emerald-500 font-bold uppercase tracking-widest text-sm">Strategic Subsidiary</h3>
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-6">Green Canada Corporation</h2>
                    <p className="text-slate-300 mb-6 leading-relaxed">
                        A subsidiary created by PTX Metals to provide exposure to clean energy and the transition to a low-carbon economy. 
                        With a primary focus on uranium, Green Canada’s exploration portfolio covers key ground in the Thelon Basin (Nunavut), 
                        Athabasca Basin (Saskatchewan), and Matoush (Quebec).
                    </p>
                    <a 
                        href="https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2024/11/06184454/Green-Canada-Co-Corporate-Presentation-Oct-2024.pdf" 
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 bg-emerald-900/50 hover:bg-emerald-800 text-emerald-100 border border-emerald-700/50 px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                        Download Green Canada Presentation <ArrowRight size={16} />
                    </a>
                </div>
                <div className="w-full md:w-1/3">
                    <img 
                        src="https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2023/11/16170015/Green-Canada-Logo-v3-1-300x199.png" 
                        alt="Green Canada Logo" 
                        className="w-full h-auto opacity-90"
                    />
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
