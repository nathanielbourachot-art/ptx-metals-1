import React, { useState, useEffect } from 'react';
import { MapPin, ShieldCheck, TrendingUp, Pickaxe, ArrowRight, X, Menu, Users, History, FileText, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  const [isFullOpen, setIsFullOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<'overview' | 'management' | 'board' | 'advisors'>('overview');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Lock body scroll when overlay is open
  useEffect(() => {
    if (isFullOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isFullOpen]);

  const jurisdictionPoints = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-ptx-accent" />,
      title: "Stable Jurisdiction",
      desc: "Operating exclusively in Ontario, a Tier-1 global mining jurisdiction with established rule of law."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-ptx-accent" />,
      title: "Infrastructure Rich",
      desc: "Access to clean power, roads, and skilled workforce in the Timmins and Ring of Fire districts."
    },
    {
      icon: <Pickaxe className="w-6 h-6 text-ptx-accent" />,
      title: "Technical Excellence",
      desc: "Led by a team of expert geologists with extensive tenure at global mining companies."
    }
  ];

  const managementTeam = [
    {
      name: "Greg Ferron",
      role: "President, Chief Executive Officer, Director",
      bio: "Mr. Ferron has 20 years of mining industry, capital markets and corporate development experience. He has held senior level roles at Laramide Resources Ltd., Treasury Metals Inc., Fancamp Exploration, Omai Gold Mines, TMX Group and Scotiabank. Mr. Ferron has diverse merger and acquisitions experience, including Laramide’s Westwater ISR project acquisition and as CEO of Treasury Metals (now NexGold Mining Corp) led the Goldlund project acquisition, creating one of Canada’s largest gold developers. During his tenure as the CEO at Treasury, he created significant shareholder value.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Cindy Davis",
      role: "Chief Financial Officer",
      bio: "Mrs. Cindy Davis possesses over 15 years of experience of providing accounting, financial reporting, regulatory compliance, and management advisory services to publicly listed companies, through Marrelli Support Services Inc. She also serves as the Chief Financial Officer for several publicly listed companies. Mrs. Davis is a Canadian Chartered Professional Accountant and holds a Bachelor of Science degree specializing in Accounting and Economics from the University of West Indies in Jamaica.",
      image: null
    },
    {
      name: "Erika Dohring",
      role: "Head of Technical Development",
      bio: "Mrs. Dohring holds a M.Sc. in geology and mining engineering from LaSalle Beauvais (France), cumulating more than 10 years of experience in leading and strategically managing exploration projects with a primary focus in precious and base metals. Over the years, Mrs. Dohring has built her expertise across three continents working for junior and major companies, where she excelled at identifying and developing projects from exploration to development, which also led to be involved with some of the major Copper and Gold players in the mining industry.",
      image: null
    },
    {
      name: "Joerg Kleinboeck, P.Geo.",
      role: "Exploration Manager",
      bio: "Joerg Kleinboeck, P.Geo., a professional geoscientist with 24 years of experience in mineral exploration primarily in Ontario. Notably, he brings extensive years of experience working in the Shining Tree area, and he previously held a role managing exploration programs at Heenan Mallard. The 2023/2024 exploration programs at Shining Tree, Heenan Mallard and W2 Cu Project drill program in 2024 were led by Joerg.",
      image: null
    }
  ];

  const handleNavClick = (section: 'overview' | 'management' | 'board' | 'advisors') => {
    setActiveSection(section);
    setIsMenuOpen(false);
  };

  return (
    <section id="about" className="py-24 bg-ptx-primary border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Teaser Text Content */}
        <div>
          <h4 className="text-ptx-accent font-bold uppercase tracking-widest text-sm mb-2">About Us</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Strategic Exploration in Northern Ontario
          </h2>
          
          <div className="space-y-6 text-slate-300 leading-relaxed mb-8">
            <p>
              PTX is a mineral exploration company focused on high-quality critical minerals projects, including two flagship projects situated in northern Ontario, renowned as a world-class mining jurisdiction for its abundance of mineral resources and investment opportunities.
            </p>
            <p className="border-l-4 border-ptx-accent pl-4 font-medium text-white bg-white/5 p-4 rounded-r">
              Our corporate objective is to advance the exploration programs towards proving the potential of each asset, which includes the W2 Cu-Ni-PGE and Gold Project and South Timmins Gold Joint Venture Project.
            </p>
          </div>

          <button 
            onClick={() => setIsFullOpen(true)}
            className="group flex items-center gap-3 bg-ptx-accent text-white px-6 py-3 rounded font-semibold hover:bg-amber-700 transition-all shadow-lg"
          >
            Read More About PTX <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="mt-12 space-y-6">
            <h3 className="text-xl font-semibold text-white">Why Ontario Matters</h3>
            <div className="grid gap-6">
              {jurisdictionPoints.map((point, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="mt-1 p-2 bg-slate-800 rounded border border-slate-700">
                    {point.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{point.title}</h4>
                    <p className="text-sm text-slate-400 mt-1">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Visual / Collage on Main Page */}
        <div className="relative h-full min-h-[500px]">
          <div className="absolute -inset-4 bg-ptx-accent/10 rounded-xl blur-2xl"></div>
          <div className="grid grid-cols-2 gap-4 h-full">
             <div className="space-y-4 pt-8">
                 <img 
                   src="https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2024/03/08103835/IMG_0219-scaled.jpg" 
                   alt="Drilling Operations" 
                   className="rounded-xl shadow-2xl object-cover h-64 w-full border border-slate-700"
                 />
                 <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 h-48 flex flex-col justify-center">
                    <h4 className="text-white font-bold text-lg mb-2">Experienced Team</h4>
                    <p className="text-slate-400 text-sm">Decades of combined experience in exploration and discovery.</p>
                 </div>
             </div>
             <div className="space-y-4">
                 <div className="bg-slate-900/90 p-6 rounded-xl border border-slate-700 h-40 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-2">
                        <MapPin className="text-ptx-accent" />
                        <span className="text-white font-bold">Toronto, ON</span>
                    </div>
                    <p className="text-slate-400 text-xs">Headquartered in a global mining hub.</p>
                 </div>
                 <img 
                   src="https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2024/04/07152334/NW-Ont-W2-Infrastructure-4M-040324.jpg" 
                   alt="Ontario Map" 
                   className="rounded-xl shadow-2xl object-cover h-80 w-full border border-slate-700"
                 />
             </div>
          </div>
        </div>
      </div>

      {/* FULL SCREEN OVERLAY */}
      {isFullOpen && (
        <div className="fixed inset-0 z-[100] bg-slate-950 overflow-y-auto animate-in fade-in duration-300">
          
          {/* Header */}
          <div className="sticky top-0 z-[110] bg-slate-950/90 backdrop-blur-md border-b border-white/10 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-ptx-accent rounded-sm flex items-center justify-center font-bold text-white">P</div>
                <span className="font-bold text-white text-lg tracking-tight">PTX METALS <span className="text-slate-500 font-normal">| ABOUT</span></span>
            </div>
            
            {/* Navigation Controls */}
            <div className="relative flex items-center gap-4">
                 {/* Inner Hamburger */}
                 <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsMenuOpen(!isMenuOpen);
                    }}
                    className="p-2 text-white hover:bg-white/10 rounded-full transition-colors flex items-center gap-2"
                 >
                    <span className="text-sm font-medium hidden sm:block">SECTIONS</span>
                    <Menu size={24} />
                 </button>
                 
                 {/* Close Button */}
                 <button 
                    onClick={() => setIsFullOpen(false)}
                    className="p-2 text-white hover:bg-red-500/20 hover:text-red-500 rounded-full transition-colors"
                 >
                    <X size={28} />
                 </button>

                 {/* Menu Dropdown - Absolute relative to button container */}
                 {isMenuOpen && (
                    <div className="absolute top-full right-0 mt-4 w-72 sm:w-80 bg-slate-900 border border-white/10 rounded-lg z-[120] shadow-2xl animate-in slide-in-from-top-2 duration-200">
                        <div className="flex flex-col p-2">
                            <button 
                                onClick={() => handleNavClick('overview')}
                                className={`p-4 text-left rounded-lg transition-colors flex items-center gap-3 ${activeSection === 'overview' ? 'bg-ptx-accent text-white' : 'text-slate-300 hover:bg-white/5'}`}
                            >
                                <FileText size={20} /> Corporate Overview
                            </button>
                            <button 
                                onClick={() => handleNavClick('management')}
                                className={`p-4 text-left rounded-lg transition-colors flex items-center gap-3 ${activeSection === 'management' ? 'bg-ptx-accent text-white' : 'text-slate-300 hover:bg-white/5'}`}
                            >
                                <Users size={20} /> Management Team
                            </button>
                            <button 
                                onClick={() => handleNavClick('board')}
                                className={`p-4 text-left rounded-lg transition-colors flex items-center gap-3 ${activeSection === 'board' ? 'bg-ptx-accent text-white' : 'text-slate-300 hover:bg-white/5'}`}
                            >
                                <ShieldCheck size={20} /> Board of Directors
                            </button>
                            <button 
                                onClick={() => handleNavClick('advisors')}
                                className={`p-4 text-left rounded-lg transition-colors flex items-center gap-3 ${activeSection === 'advisors' ? 'bg-ptx-accent text-white' : 'text-slate-300 hover:bg-white/5'}`}
                            >
                                <GraduationCap size={20} /> Technical Advisors
                            </button>
                        </div>
                    </div>
                  )}
            </div>
          </div>

          {/* Main Content Area */}
          <div className="max-w-7xl mx-auto px-6 py-12 min-h-screen" onClick={() => setIsMenuOpen(false)}>
            
            {activeSection === 'overview' && (
                <div className="animate-in fade-in slide-in-from-bottom-5 duration-500">
                    <div className="relative h-96 rounded-2xl overflow-hidden mb-12">
                         <img 
                            src="https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2024/03/08103739/Ronda-Stripping-5.jpg" 
                            className="w-full h-full object-cover"
                            alt="Northern Ontario Landscape"
                         />
                         <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>
                         <div className="absolute bottom-8 left-8">
                             <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">Corporate Overview</h2>
                             <p className="text-slate-300 text-lg">Powering the future through strategic discovery.</p>
                         </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 space-y-6 text-slate-300 leading-relaxed text-lg">
                            <p>
                                PTX Metals is a mineral exploration company focused on high-quality critical minerals projects, including two flagship projects situated in northern Ontario, renowned as a world-class mining jurisdiction for its abundance of mineral resources and investment opportunities.
                            </p>
                            <p>
                                PTX’s portfolio of assets offers investors exposure to some of the world’s most valuable metals including gold, as well as essential critical minerals for the clean energy transition: copper, nickel, PGE, and uranium. PTX’s portfolio of assets was strategically acquired for their geologically favorable attributes, and proximity to established mining companies.
                            </p>
                            <p>
                                PTX’s mineral exploration programs are designed by a team of expert geologists with extensive career knowledge gained from their tenure working for global mining companies in northern Ontario and around the world.
                            </p>
                            <div className="bg-slate-900 p-8 rounded-xl border border-white/5 mt-8">
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><History className="text-ptx-accent"/> Strategic History</h3>
                                <p className="text-sm">
                                    Strategic acquisitions and partnerships have positioned PTX as a key player in the Ring of Fire and Timmins districts. Our focus remains on creating shareholder value through disciplined exploration and responsible stewardship.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <h3 className="text-white font-bold text-xl mb-4">Project Highlights</h3>
                            <div className="grid grid-cols-1 gap-4">
                                <img src="https://images.unsplash.com/photo-1579547621113-e4bb2a19bdd6?auto=format&fit=crop&q=80&w=600" alt="Core Samples" className="rounded-lg object-cover h-48 w-full border border-slate-800" />
                                <img src="https://images.unsplash.com/photo-1591955506264-3f75b5ea1849?auto=format&fit=crop&q=80&w=600" alt="Geologist" className="rounded-lg object-cover h-48 w-full border border-slate-800" />
                            </div>
                            <div className="p-6 bg-ptx-accent/10 border border-ptx-accent/20 rounded-xl">
                                <h4 className="text-ptx-accent font-bold mb-2">Market Presence</h4>
                                <ul className="space-y-2 text-sm text-slate-300">
                                    <li>• TSXV: <strong>PTX</strong></li>
                                    <li>• OTCQB: <strong>PANXF</strong></li>
                                    <li>• Frankfurt: <strong>9PX</strong></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {activeSection === 'management' && (
                <div className="animate-in fade-in slide-in-from-bottom-5 duration-500">
                    <h2 className="text-4xl font-bold text-white mb-12">Management Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                        {managementTeam.map((member, index) => (
                           <div key={index} className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 group hover:border-ptx-accent/50 transition-all flex flex-col">
                                {member.image ? (
                                    <div className="h-64 overflow-hidden bg-slate-800">
                                        <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0" />
                                    </div>
                                ) : (
                                    <div className="h-32 bg-slate-800 border-b border-slate-800 flex items-center justify-center relative overflow-hidden group-hover:bg-slate-800/80 transition-colors">
                                        <div className="absolute inset-0 bg-ptx-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        {index % 2 === 0 ? <Users className="text-slate-700 w-12 h-12" /> : <Pickaxe className="text-slate-700 w-12 h-12" />}
                                    </div>
                                )}
                                <div className="p-8 flex-1 flex flex-col">
                                    <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                                    <p className="text-ptx-accent font-medium mb-6 uppercase tracking-wider text-sm">{member.role}</p>
                                    <p className="text-slate-400 text-sm leading-relaxed flex-1">
                                        {member.bio}
                                    </p>
                                </div>
                           </div>
                        ))}
                    </div>
                </div>
            )}

            {activeSection === 'board' && (
                 <div className="animate-in fade-in slide-in-from-bottom-5 duration-500">
                    <h2 className="text-4xl font-bold text-white mb-12">Board of Directors</h2>
                    <div className="space-y-4 max-w-3xl">
                        {[
                            { name: "Greg Ferron", role: "Director" },
                            { name: "James R. Trusler", role: "Non-Executive Chairman" },
                            { name: "Felix Lee", role: "Independent Director" },
                            { name: "Sam Kanes", role: "Independent Director" },
                            { name: "Christophe Vereecke", role: "Independent Director" }
                        ].map((member, i) => (
                            <div key={i} className="bg-slate-900 p-6 rounded-xl border border-slate-800 flex items-center justify-between hover:bg-slate-800 transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 font-bold">
                                        {member.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white">{member.name}</h3>
                                        <p className="text-ptx-accent text-sm">{member.role}</p>
                                    </div>
                                </div>
                                <ShieldCheck className="text-slate-600" size={20} />
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {activeSection === 'advisors' && (
                 <div className="animate-in fade-in slide-in-from-bottom-5 duration-500">
                    <h2 className="text-4xl font-bold text-white mb-12">Technical Advisors</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-slate-900 p-8 rounded-xl border border-slate-800">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-ptx-accent">
                                    <GraduationCap size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">James R. Trusler</h3>
                                    <p className="text-ptx-accent font-medium text-sm">Technical Advisor</p>
                                </div>
                            </div>
                            <p className="text-slate-400">
                                Geological Engineer with over 45 years of exploration experience. He has a history of discovery and project management in the mining industry.
                            </p>
                        </div>
                         <div className="bg-slate-900 p-8 rounded-xl border border-slate-800">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-ptx-accent">
                                    <Pickaxe size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">Technical Advisory Team</h3>
                                    <p className="text-ptx-accent font-medium text-sm">Geology & Environment</p>
                                </div>
                            </div>
                            <p className="text-slate-400">
                                Our advisory board includes experts in metallurgy, environmental stewardship, and First Nations engagement to ensure sustainable project development.
                            </p>
                        </div>
                    </div>
                </div>
            )}

          </div>
        </div>
      )}
    </section>
  );
};

export default About;
