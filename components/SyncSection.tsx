
import React from 'react';
import { Laptop, Smartphone, Zap, Clock } from 'lucide-react';

const SyncSection: React.FC = () => {
  return (
    <section className="py-24 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4 leading-tight">
            Effortless Synchronization between the <span className="text-medical-blue">Desktop</span> and the <br/>
            <span className="text-medical-blue">Android</span> Version of Medorn MR Reporting Software
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm flex gap-6 items-start">
             <div className="w-14 h-14 bg-medical-blue rounded-2xl flex items-center justify-center flex-shrink-0">
                <Zap className="w-8 h-8 text-white" />
             </div>
             <div>
                <h3 className="text-xl font-bold mb-3">Lag-Less and Effort-Less Synchronization</h3>
                <p className="text-white/60">Powered by best-in-class servers, Medorn ensures seamless data sharing across devices with no apparent lag. Whether you're using our MR reporting software on a fast or slow device, expect flawless performance across both the desktop and Android versions.</p>
             </div>
          </div>
          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm flex gap-6 items-start">
             <div className="w-14 h-14 bg-medical-blue rounded-2xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-8 h-8 text-white" />
             </div>
             <div>
                <h3 className="text-xl font-bold mb-3">Quicker Response for MR Reporting</h3>
                <p className="text-white/60">Whether you are approving a new doctor or submitting a leave request, the data is processed instantly, ensuring that your actions are saved securely and are accessible for an unlimited time, providing seamless connectivity.</p>
             </div>
          </div>
        </div>

        {/* Desktop Dashboard Mockup */}
        <div className="relative mx-auto max-w-5xl">
           <div className="bg-[#1e1e1e] rounded-2xl border-4 border-gray-800 shadow-2xl overflow-hidden aspect-[16/9] flex flex-col">
              <div className="h-12 border-b border-white/5 flex items-center px-4 gap-4">
                 <div className="w-3 h-3 rounded-full bg-red-500"></div>
                 <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                 <div className="w-3 h-3 rounded-full bg-green-500"></div>
                 <div className="flex-1 text-center text-xs opacity-30 font-bold">MEDORN ADMIN DASHBOARD</div>
              </div>
              <div className="flex-1 flex">
                 <div className="w-48 border-r border-white/5 p-4 space-y-4">
                    {[1,2,3,4,5,6].map(i => <div key={i} className="h-4 bg-white/5 rounded w-full"></div>)}
                 </div>
                 <div className="flex-1 p-8 space-y-8">
                    <div className="grid grid-cols-3 gap-6">
                       <div className="h-32 bg-medical-blue/20 border border-medical-blue/30 rounded-2xl p-6">
                          <div className="text-4xl font-bold text-medical-blue">1,240</div>
                          <div className="text-[10px] uppercase tracking-widest mt-2 opacity-50">Total Doctors Visited</div>
                       </div>
                       <div className="h-32 bg-green-500/20 border border-green-500/30 rounded-2xl p-6">
                          <div className="text-4xl font-bold text-growth-green">$8,600</div>
                          <div className="text-[10px] uppercase tracking-widest mt-2 opacity-50">Secondary Sales</div>
                       </div>
                       <div className="h-32 bg-white/5 border border-white/10 rounded-2xl p-6">
                          <div className="text-4xl font-bold text-white">42</div>
                          <div className="text-[10px] uppercase tracking-widest mt-2 opacity-50">Pending Approvals</div>
                       </div>
                    </div>
                    <div className="h-48 w-full bg-white/5 rounded-2xl border border-white/10 flex items-end p-6 gap-3">
                       {[60, 40, 80, 55, 90, 30, 75].map((h, i) => (
                         <div key={i} className="flex-1 bg-medical-blue rounded-t" style={{height: h + '%'}}></div>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default SyncSection;
