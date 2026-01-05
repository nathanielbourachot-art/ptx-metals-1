import React from 'react';

const Subscribe: React.FC = () => {
  return (
    <section className="bg-ptx-accent py-10">
      <div className="max-w-7xl mx-auto px-6">
        <form className="lg:flex justify-between items-center gap-4">
          <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
            <h2 className="font-light text-white text-2xl">Subscribe <span className="font-bold">for Updates</span></h2>
          </div>
          
          <div className="flex-1 flex flex-col sm:flex-row gap-4">
            <div className="w-full">
                <input 
                    className="w-full py-3 px-4 text-white placeholder-white/70 border-none border-b-2 border-white/30 bg-black/10 focus:outline-none focus:border-white focus:bg-black/20 transition-all rounded-t" 
                    name="FNAME" 
                    type="text" 
                    placeholder="First Name" 
                />
            </div>
            <div className="w-full">
                <input 
                    className="w-full py-3 px-4 text-white placeholder-white/70 border-none border-b-2 border-white/30 bg-black/10 focus:outline-none focus:border-white focus:bg-black/20 transition-all rounded-t" 
                    name="LNAME" 
                    type="text" 
                    placeholder="Last Name" 
                />
            </div>
            <div className="w-full">
                <input 
                    className="w-full py-3 px-4 text-white placeholder-white/70 border-none border-b-2 border-white/30 bg-black/10 focus:outline-none focus:border-white focus:bg-black/20 transition-all rounded-t" 
                    required 
                    type="email" 
                    name="EMAIL" 
                    placeholder="Email Address" 
                />
            </div>
          </div>
          
          <div className="mt-4 lg:mt-0 lg:ml-4">
            <input 
                className="py-3 px-8 text-white font-bold uppercase tracking-wider bg-slate-900 hover:bg-slate-800 rounded cursor-pointer transition-colors" 
                type="submit" 
                value="Subscribe" 
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
