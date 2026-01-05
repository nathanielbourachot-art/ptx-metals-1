import React from 'react';
import { Download, BarChart3, PieChart, FileText } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Investors: React.FC = () => {
  // Mock data for the chart - simulating stock trend
  const data = [
    { name: 'Jan', value: 0.035 },
    { name: 'Feb', value: 0.04 },
    { name: 'Mar', value: 0.038 },
    { name: 'Apr', value: 0.042 },
    { name: 'May', value: 0.045 },
    { name: 'Jun', value: 0.048 },
    { name: 'Jul', value: 0.052 },
  ];

  return (
    <section id="investors" className="py-24 bg-ptx-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h4 className="text-ptx-accent font-bold uppercase tracking-widest text-sm mb-2">Investor Relations</h4>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Market Data</h2>
        </div>

        {/* Ticker Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
                { exchange: "TSX Venture", ticker: "PTX", price: "0.05", currency: "CAD" },
                { exchange: "OTCQB", ticker: "PANXF", price: "0.035", currency: "USD" },
                { exchange: "Frankfurt", ticker: "9PX", price: "0.03", currency: "EUR" },
            ].map((stock) => (
                <div key={stock.ticker} className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700 flex flex-col items-center justify-center shadow-lg relative overflow-hidden group">
                     <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                        <BarChart3 size={64} />
                     </div>
                    <span className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-1">{stock.exchange}</span>
                    <h3 className="text-4xl font-bold text-white mb-2">{stock.ticker}</h3>
                    <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-semibold text-ptx-accent">${stock.price}</span>
                        <span className="text-xs text-slate-500">{stock.currency}</span>
                    </div>
                    <span className="mt-2 text-xs text-green-500 flex items-center gap-1">
                         ● Market Open
                    </span>
                </div>
            ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Chart Area */}
            <div className="lg:col-span-2 bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-white">Price Performance</h3>
                    <span className="text-xs text-slate-500">*Data delayed 15 mins</span>
                </div>
                <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data}>
                            <defs>
                                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#d97706" stopOpacity={0.3}/>
                                    <stop offset="95%" stopColor="#d97706" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                            <XAxis dataKey="name" stroke="#94a3b8" tick={{fontSize: 12}} />
                            <YAxis stroke="#94a3b8" tick={{fontSize: 12}} domain={['auto', 'auto']} />
                            <Tooltip 
                                contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#f8fafc' }}
                                itemStyle={{ color: '#d97706' }}
                            />
                            <Area type="monotone" dataKey="value" stroke="#d97706" fillOpacity={1} fill="url(#colorValue)" strokeWidth={2} />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Downloads / Share Structure */}
            <div className="flex flex-col gap-4">
                {/* Downloads */}
                <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 flex-1 flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-white mb-6">Resources</h3>
                    
                    <a href="https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2025/02/17072850/PTX-Metals-Corportate-Presentation-DECEMBER-2025.pdf" target="_blank" rel="noreferrer" className="w-full flex items-center justify-between p-4 bg-slate-700/50 hover:bg-slate-700 rounded-lg border border-slate-600 mb-3 group transition-all">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-red-500/10 rounded text-red-400">
                                <FileText size={20} />
                            </div>
                            <div className="text-left">
                                <span className="block text-white font-medium">Corporate Presentation</span>
                                <span className="text-xs text-slate-400">PDF • December 2025</span>
                            </div>
                        </div>
                        <Download size={18} className="text-slate-400 group-hover:text-white" />
                    </a>

                    <a href="https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2025/02/13055445/PTX-Metals-Fact-Sheet-March-2025.pdf" target="_blank" rel="noreferrer" className="w-full flex items-center justify-between p-4 bg-slate-700/50 hover:bg-slate-700 rounded-lg border border-slate-600 group transition-all">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-blue-500/10 rounded text-blue-400">
                                <PieChart size={20} />
                            </div>
                            <div className="text-left">
                                <span className="block text-white font-medium">Fact Sheet</span>
                                <span className="text-xs text-slate-400">PDF • March 2025</span>
                            </div>
                        </div>
                        <Download size={18} className="text-slate-400 group-hover:text-white" />
                    </a>
                </div>

                {/* Specific Share Structure Table */}
                <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                    <h4 className="text-white font-bold mb-4">Share Structure</h4>
                    <div className="space-y-3">
                        <div className="flex justify-between py-2 border-b border-slate-700">
                            <span className="text-slate-300">Issued</span>
                            <span className="text-white font-mono">118,772,996</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-slate-700">
                            <span className="text-slate-300">Options</span>
                            <span className="text-white font-mono">9,412,500</span>
                        </div>
                         <div className="flex justify-between py-2 border-b border-slate-700">
                            <span className="text-slate-300">Warrants</span>
                            <span className="text-white font-mono">17,316,483</span>
                        </div>
                        <div className="flex justify-between py-2">
                            <span className="text-ptx-accent font-semibold">Fully Diluted</span>
                            <span className="text-white font-mono font-bold">145,501,979</span>
                        </div>
                    </div>
                    <p className="text-xs text-slate-500 mt-4 text-center">As of April 30, 2025</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Investors;
