
import React from 'react';
import { 
  Signal, 
  UserCheck, 
  Lock, 
  ShieldCheck, 
  Zap, 
  Globe, 
  Cpu, 
  Cloud, 
  CheckCircle2, 
  Smartphone, 
  Laptop, 
  ArrowRight,
  Database,
  BarChart3,
  // Fix: Added missing icon imports
  CreditCard,
  Calendar
} from 'lucide-react';

const Differentiators: React.FC = () => {
  return (
    <section id="solutions" className="py-32 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-500">
      {/* Dynamic Background Accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-slate-800 to-transparent"></div>
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-50/50 dark:bg-blue-900/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-green-50/30 dark:bg-green-900/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-medical-blue/5 dark:bg-blue-900/20 border border-medical-blue/10 dark:border-blue-800/50 mb-6 backdrop-blur-sm">
            <ShieldCheck className="w-4 h-4 text-medical-blue dark:text-blue-400" />
            <span className="text-[10px] font-black tracking-[0.2em] text-medical-blue dark:text-blue-400 uppercase">The Medorn Advantage</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-gray-900 dark:text-white mb-8 tracking-tighter leading-[1.1]">
            Engineered for <br/>
            <span className="text-medical-blue">Enterprise Excellence</span>
          </h2>
          <p className="text-xl text-gray-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            While others provide features, we provide a foundation. Medorn is built to scale with the world's most demanding pharmaceutical operations.
          </p>
        </div>

        <div className="space-y-40 lg:space-y-64">
          
          {/* Differentiator 1: Real-time Cloud Integration */}
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
            <div className="flex-1 lg:max-w-xl">
              <div className="inline-flex p-4 rounded-3xl bg-blue-50 dark:bg-blue-900/30 mb-8 border border-blue-100 dark:border-blue-800 shadow-sm">
                <Cloud className="w-8 h-8 text-medical-blue dark:text-blue-400" />
              </div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight leading-tight">
                Unified <span className="text-medical-blue">Cloud-Sync</span> Infrastructure
              </h3>
              <p className="text-lg text-gray-600 dark:text-slate-400 leading-relaxed mb-10">
                Erase the lag between field activity and management awareness. Our proprietary sync engine handles millions of daily data points with sub-second latency, even in low-bandwidth regions.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-12">
                 {[
                   { label: "Uptime", value: "99.99%", desc: "SLA Guaranteed" },
                   { label: "Sync Speed", value: "< 200ms", desc: "Real-time Delta" }
                 ].map((stat, i) => (
                   <div key={i} className="p-6 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-gray-100 dark:border-slate-800">
                      <div className="text-3xl font-black text-gray-900 dark:text-white mb-1">{stat.value}</div>
                      <div className="text-[10px] font-bold text-medical-blue uppercase tracking-widest mb-1">{stat.label}</div>
                      <div className="text-xs text-gray-400">{stat.desc}</div>
                   </div>
                 ))}
              </div>

              <div className="flex items-center gap-4 group cursor-pointer">
                 <div className="w-12 h-12 rounded-full bg-medical-blue flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <Zap className="w-5 h-5 fill-current" />
                 </div>
                 <span className="font-bold text-gray-900 dark:text-white">Learn about our Global Server Mesh</span>
                 <ArrowRight className="w-4 h-4 text-medical-blue group-hover:translate-x-2 transition-transform" />
              </div>
            </div>

            <div className="flex-1 w-full relative">
               {/* Visual: Multi-device Sync Mockup */}
               <div className="relative z-10">
                  {/* Desktop Background Card */}
                  <div className="bg-white dark:bg-slate-900 rounded-[3rem] shadow-2xl border border-gray-100 dark:border-slate-800 p-8 transform rotate-1">
                     <div className="flex items-center gap-4 mb-10 pb-6 border-b border-gray-50 dark:border-slate-800">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        <div className="ml-auto flex items-center gap-2">
                           <Signal className="w-3 h-3 text-growth-green" />
                           <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Live Connection: Ayodhya Server</span>
                        </div>
                     </div>
                     <div className="space-y-4">
                        <div className="h-4 bg-slate-50 dark:bg-slate-800 rounded-full w-3/4"></div>
                        <div className="h-4 bg-slate-50 dark:bg-slate-800 rounded-full w-1/2"></div>
                        <div className="grid grid-cols-2 gap-4 mt-8">
                           <div className="h-24 bg-blue-50 dark:bg-blue-900/20 rounded-3xl animate-pulse"></div>
                           <div className="h-24 bg-green-50 dark:bg-green-900/20 rounded-3xl [animation-delay:0.2s]"></div>
                        </div>
                     </div>
                  </div>
                  {/* Floating Mobile Card */}
                  <div className="absolute -bottom-12 -left-8 w-64 bg-slate-900 rounded-[2.5rem] p-6 shadow-2xl border border-white/10 transform -rotate-6 transition-transform hover:-rotate-3 duration-500">
                     <div className="flex justify-between mb-8">
                        <Smartphone className="w-5 h-5 text-white/40" />
                        <div className="px-2 py-0.5 bg-growth-green rounded text-[8px] font-bold text-white uppercase tracking-widest">Synced</div>
                     </div>
                     <div className="space-y-3">
                        <div className="h-1.5 bg-white/10 rounded-full w-full"></div>
                        <div className="h-1.5 bg-white/10 rounded-full w-4/5"></div>
                        <div className="h-1.5 bg-white/10 rounded-full w-3/5"></div>
                     </div>
                     <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                        <span className="text-[8px] text-white/40 font-bold">DR. MEHTA VISIT</span>
                        <CheckCircle2 className="w-3 h-3 text-growth-green" />
                     </div>
                  </div>
               </div>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-medical-blue/5 dark:bg-blue-900/5 rounded-full blur-[100px] -z-10"></div>
            </div>
          </div>

          {/* Differentiator 2: Approvals (Reversed) */}
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32 lg:flex-row-reverse">
            <div className="flex-1 lg:max-w-xl">
              <div className="inline-flex p-4 rounded-3xl bg-green-50 dark:bg-green-900/30 mb-8 border border-green-100 dark:border-green-800 shadow-sm">
                <UserCheck className="w-8 h-8 text-growth-green" />
              </div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight leading-tight">
                Frictionless <span className="text-growth-green">One-Click</span> Governance
              </h3>
              <p className="text-lg text-gray-600 dark:text-slate-400 leading-relaxed mb-10">
                Managers shouldn't spend half their day on paperwork. Medorn streamlines the entire hierarchy of leave, expense, and TP approvals into a single high-efficiency queue.
              </p>
              
              <ul className="space-y-4 mb-12">
                 {[
                   "Bulk approval processing for quarterly plans",
                   "Automatic anomaly detection in expense logs",
                   "Role-based delegation for regional clusters"
                 ].map((item, i) => (
                   <li key={i} className="flex items-center gap-3 text-gray-700 dark:text-slate-300 font-medium">
                      <div className="w-6 h-6 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center border border-green-100 dark:border-green-800">
                         <CheckCircle2 className="w-3.5 h-3.5 text-growth-green" />
                      </div>
                      {item}
                   </li>
                 ))}
              </ul>

              <div className="p-8 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-gray-100 dark:border-slate-800 shadow-sm flex items-center gap-6">
                 <div className="w-16 h-16 rounded-2xl bg-slate-900 dark:bg-slate-800 flex items-center justify-center shrink-0">
                    <BarChart3 className="w-8 h-8 text-white" />
                 </div>
                 <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">Admin Dashboard v4.0</h4>
                    <p className="text-sm text-gray-400">Deployed and ready for large-scale enterprise rollouts.</p>
                 </div>
              </div>
            </div>

            <div className="flex-1 w-full relative">
               <div className="relative z-10 group">
                  <div className="bg-slate-900 dark:bg-slate-950 rounded-[3rem] p-10 shadow-2xl border border-white/5 overflow-hidden transition-transform group-hover:-translate-y-2 duration-500">
                     <div className="flex justify-between items-center mb-10">
                        <div className="flex items-center gap-3">
                           <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                              <Cpu className="w-5 h-5 text-growth-green" />
                           </div>
                           <span className="text-xs font-bold text-white/40 tracking-widest uppercase">Approvals Intelligence</span>
                        </div>
                        <div className="h-2 w-16 bg-growth-green rounded-full shadow-[0_0_15px_rgba(0,200,83,0.5)]"></div>
                     </div>
                     <div className="space-y-6">
                        {[
                          { name: "Anita Verma", type: "Exp", detail: "₹1,240.00", icon: <CreditCard className="w-4 h-4" /> },
                          { name: "Rahul Sharma", type: "Leave", detail: "3 Days", icon: <Calendar className="w-4 h-4" /> }
                        ].map((req, i) => (
                          <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-between group/item hover:bg-white/[0.08] transition-colors">
                             <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white/50">
                                   {req.icon}
                                </div>
                                <div>
                                   <div className="text-white font-bold">{req.name}</div>
                                   <div className="text-[10px] text-white/40 font-bold uppercase tracking-widest">{req.type} • {req.detail}</div>
                                </div>
                             </div>
                             <div className="flex gap-2">
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/20 hover:text-red-400 hover:bg-red-400/10 cursor-pointer transition-all">✕</div>
                                <div className="w-10 h-10 rounded-xl bg-growth-green flex items-center justify-center text-white shadow-lg shadow-green-500/20 cursor-pointer hover:scale-110 transition-all">✓</div>
                             </div>
                          </div>
                        ))}
                     </div>
                     <div className="mt-8 text-center">
                        <span className="text-[10px] font-black text-growth-green uppercase tracking-[0.2em] cursor-pointer hover:underline">Process Batch (14 items)</span>
                     </div>
                  </div>
                  {/* Decorative Elements */}
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-growth-green/10 rounded-full blur-3xl"></div>
               </div>
            </div>
          </div>

          {/* Differentiator 3: Security */}
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
            <div className="flex-1 lg:max-w-xl">
              <div className="inline-flex p-4 rounded-3xl bg-slate-900 dark:bg-slate-800 mb-8 border border-white/10 shadow-sm">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight leading-tight">
                Enterprise <span className="text-medical-blue">Security Fortification</span>
              </h3>
              <p className="text-lg text-gray-600 dark:text-slate-400 leading-relaxed mb-10">
                Your pharma sales data is your most valuable asset. We treat it as such, employing bank-grade encryption and rigorous compliance protocols to ensure total data sovereignty.
              </p>
              
              <div className="grid grid-cols-1 gap-4 mb-10">
                 {[
                   { label: "AES-256", desc: "Military-grade data at rest encryption" },
                   { label: "Multi-Tenant", desc: "Isolated logical data structures for every client" },
                   { label: "GDPR & DPDP", desc: "Fully compliant with global privacy standards" }
                 ].map((feat, i) => (
                   <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-transparent hover:border-medical-blue/20 transition-all">
                      <div className="w-10 h-10 rounded-xl bg-medical-blue/10 flex items-center justify-center">
                         <Database className="w-5 h-5 text-medical-blue" />
                      </div>
                      <div>
                         <span className="font-bold text-gray-900 dark:text-white text-sm">{feat.label}</span>
                         <span className="mx-2 text-gray-300 dark:text-slate-700">•</span>
                         <span className="text-xs text-gray-500 dark:text-slate-400">{feat.desc}</span>
                      </div>
                   </div>
                 ))}
              </div>

              <div className="flex items-center gap-2">
                 <div className="flex -space-x-3">
                    {[1,2,3,4].map(i => <div key={i} className="w-10 h-10 rounded-full border-4 border-white dark:border-slate-950 bg-slate-200 dark:bg-slate-800"></div>)}
                 </div>
                 <p className="text-sm font-medium text-gray-500 dark:text-slate-400 ml-4">Trusted by over <span className="font-bold text-gray-900 dark:text-white">450+</span> Enterprises Globally</p>
              </div>
            </div>

            <div className="flex-1 w-full relative">
               <div className="relative group perspective-1000">
                  <div className="bg-white dark:bg-slate-900 rounded-[3rem] shadow-2xl border border-gray-100 dark:border-slate-800 p-16 relative z-10 text-center flex flex-col items-center">
                     <div className="w-32 h-32 rounded-full bg-medical-blue/5 border-4 border-dashed border-medical-blue/20 flex items-center justify-center mb-10 relative group-hover:rotate-12 transition-transform duration-700">
                        <ShieldCheck className="w-14 h-14 text-medical-blue" />
                        <div className="absolute inset-0 bg-medical-blue/10 rounded-full animate-ping opacity-20"></div>
                     </div>
                     <div className="space-y-4 w-full">
                        <div className="flex justify-between items-end mb-2">
                           <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Integrity Score</span>
                           <span className="text-2xl font-black text-medical-blue">100/100</span>
                        </div>
                        <div className="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                           <div className="h-full bg-medical-blue w-full"></div>
                        </div>
                        <div className="pt-6 flex flex-wrap justify-center gap-2">
                           {["SOC2", "HIPAA", "ISO 27001"].map((cert, i) => (
                             <div key={i} className="px-4 py-1.5 bg-gray-50 dark:bg-slate-800 rounded-full text-[9px] font-bold text-gray-400 border border-gray-100 dark:border-slate-700">{cert}</div>
                           ))}
                        </div>
                     </div>
                  </div>
                  {/* Deep Shadow/Decoration */}
                  <div className="absolute -inset-10 bg-gradient-to-br from-medical-blue/5 to-transparent rounded-[4rem] -z-10 blur-2xl"></div>
               </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Scroll Indicator or CTA */}
      <div className="mt-32 max-w-7xl mx-auto px-4 flex justify-center">
         <div className="inline-flex items-center gap-4 px-8 py-4 bg-slate-950 dark:bg-white text-white dark:text-slate-950 rounded-full font-bold shadow-2xl hover:scale-105 transition-all cursor-pointer group">
            Ready to Upgrade? <span className="text-medical-blue">Book Enterprise Demo</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
         </div>
      </div>
    </section>
  );
};

export default Differentiators;
