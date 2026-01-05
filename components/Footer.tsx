import React from 'react';
import { Mail, MapPin, Phone, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-950 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-ptx-accent rounded-sm flex items-center justify-center font-bold text-white">P</div>
                <span className="text-xl font-bold text-white">PTX METALS</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Advancing a high-quality portfolio of strategic metal assets in Northern Ontario.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/ptxmetals" target="_blank" rel="noreferrer" className="p-2 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-ptx-accent transition-all">
                <Linkedin size={18} />
              </a>
              <a href="https://x.com/PTXMetals" target="_blank" rel="noreferrer" className="p-2 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-ptx-accent transition-all">
                <Twitter size={18} />
              </a>
              <a href="https://www.facebook.com/ptxmetals" target="_blank" rel="noreferrer" className="p-2 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-ptx-accent transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#about" className="hover:text-ptx-accent transition-colors">About Us</a></li>
              <li><a href="#projects" className="hover:text-ptx-accent transition-colors">Projects</a></li>
              <li><a href="#investors" className="hover:text-ptx-accent transition-colors">Investors</a></li>
              <li><a href="#news" className="hover:text-ptx-accent transition-colors">News</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex gap-3">
                    <MapPin className="text-ptx-accent shrink-0" size={20} />
                    <div>
                        <span className="block text-white font-medium text-sm">Head Office</span>
                        <span className="block text-slate-400 text-sm">The Exchange Tower<br />130 King St W, Suite 3680<br />Toronto, ON M5X 1B1</span>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="flex gap-3">
                        <Mail className="text-ptx-accent shrink-0" size={20} />
                        <div>
                            <span className="block text-white font-medium text-sm">Greg Ferron, CEO</span>
                            <a href="mailto:gferron@ptxmetals.com" className="block text-slate-400 text-sm hover:text-white">gferron@ptxmetals.com</a>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <Phone className="text-ptx-accent shrink-0" size={20} />
                         <div>
                            <span className="block text-white font-medium text-sm">Phone</span>
                            <span className="block text-slate-400 text-sm">+1 (416) 270-5042</span>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>

        {/* Disclaimer / Copyright */}
        <div className="border-t border-white/5 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-slate-500">
                © {new Date().getFullYear()} PTX Metals Inc. All rights reserved.
            </p>
            <div className="max-w-2xl text-xs text-slate-600 text-justify md:text-right">
                <p>
                    Disclaimer: This website contains forward-looking statements. Past performance is not indicative of future results. 
                    Information presented is for informational purposes only and does not constitute investment advice.
                    TSXV: PTX | OTCQB: PANXF | Frankfurt: 9PX
                </p>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
