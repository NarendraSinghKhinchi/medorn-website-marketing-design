
import React from 'react';
import { 
  MapPin, 
  CreditCard, 
  Smartphone, 
  Calendar,
  Gift,
  MessageSquare,
  Zap,
  Target,
  ArrowRight,
  ShieldCheck,
  Cloud,
  Navigation,
  FileText,
  Package,
  MonitorSmartphone,
  Megaphone,
  Clock
} from 'lucide-react';

interface FeaturesPageProps {
  onContactClick?: () => void;
}

const FeaturesPage: React.FC<FeaturesPageProps> = ({ onContactClick }) => {
  return (
    <div className="pt-24 pb-20 bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Hero Header */}
      <section className="relative py-20 lg:py-32 overflow-hidden border-b border-gray-100 dark:border-slate-900">
        <div className="absolute top-0 right-0 -mt-24 -mr-24 w-[600px] h-[600px] bg-blue-50 dark:bg-blue-900/10 rounded-full blur-[120px] opacity-60 -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-bold tracking-tight text-medical-blue dark:text-blue-400 ring-1 ring-inset ring-medical-blue/20 bg-medical-blue/5 dark:bg-blue-900/20 mb-8">
            Comprehensive Feature Set
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 dark:text-white mb-8 tracking-tighter leading-[1.1]">
            Everything your <br/>
            <span className="text-medical-blue">Pharma Business</span> needs
          </h1>
          <p className="text-xl text-gray-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed mb-10">
            From field-force automation to inventory intelligence, Medorn covers the entire spectrum of pharmaceutical sales operations.
          </p>
        </div>
      </section>

      {/* Cluster 1: Field Intelligence & Tracking */}
      <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
             <div className="h-px flex-1 bg-gray-100 dark:bg-slate-800"></div>
             <h2 className="text-sm font-black text-medical-blue uppercase tracking-[0.3em]">01. Field Intelligence</h2>
             <div className="h-px flex-1 bg-gray-100 dark:bg-slate-800"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "GPS Tracking & Attendance",
                desc: "Live field tracking combined with geo-verified attendance. Know exactly when and where your team starts their day.",
                icon: <Navigation className="w-8 h-8 text-medical-blue" />,
                features: ["Live Map View", "Battery Status", "Network Status"]
              },
              {
                title: "Geo Tagging",
                desc: "Every DCR entry is hard-linked to a geographical location, ensuring your reps are visiting the right clinics.",
                icon: <MapPin className="w-8 h-8 text-medical-blue" />,
                features: ["Clinic Mapping", "Radius Lock", "Location Integrity"]
              },
              {
                title: "DCR & TP Synchronization",
                desc: "Seamless alignment between Tour Programs (TP) and Daily Call Reports (DCR). Reduce planning errors.",
                icon: <Cloud className="w-8 h-8 text-medical-blue" />,
                features: ["Auto-Fill Visits", "Real-time Delta", "Instant Sync"]
              }
            ].map((card, i) => (
              <div key={i} className="group p-8 bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] border border-transparent hover:bg-white dark:hover:bg-slate-900 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-medical-blue/20 hover:-translate-y-2 transition-all duration-500">
                <div className="mb-8 p-4 bg-white dark:bg-slate-800 w-fit rounded-2xl shadow-sm ring-1 ring-gray-100 dark:ring-slate-700 group-hover:scale-110 group-hover:shadow-lg transition-all duration-500">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{card.title}</h3>
                <p className="text-gray-500 dark:text-slate-400 mb-8 text-sm leading-relaxed">{card.desc}</p>
                <div className="flex flex-wrap gap-2">
                   {card.features.map((f, j) => (
                     <span key={j} className="text-[10px] font-bold px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-medical-blue dark:text-blue-400 rounded-full border border-blue-100 dark:border-blue-800">{f}</span>
                   ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cluster 2: Workforce & HR Automation */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-16">
             <div className="h-px flex-1 bg-gray-200 dark:bg-slate-800"></div>
             <h2 className="text-sm font-black text-growth-green uppercase tracking-[0.3em]">02. Workforce Management</h2>
             <div className="h-px flex-1 bg-gray-200 dark:bg-slate-800"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8 bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 border border-gray-100 dark:border-slate-800 flex flex-col md:flex-row gap-10 items-center hover:shadow-2xl hover:shadow-green-500/5 hover:-translate-y-1 transition-all duration-500 group">
               <div className="flex-1">
                  <div className="w-14 h-14 bg-green-50 dark:bg-green-900/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CreditCard className="w-7 h-7 text-growth-green" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Automated Expenses</h3>
                  <p className="text-gray-500 dark:text-slate-400 leading-relaxed">
                    Say goodbye to manual math. Medorn auto-calculates travel allowances (TA) and daily allowances (DA) based on actual distance covered and visit logs.
                  </p>
               </div>
               <div className="flex-1 w-full bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6 border border-gray-100 dark:border-slate-700">
                  <div className="space-y-4">
                     <div className="flex justify-between text-xs font-bold text-gray-400"><span>EXPENSE STATUS</span> <span className="text-growth-green">AUTO-CALCULATED</span></div>
                     <div className="h-2 w-full bg-gray-100 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-growth-green w-3/4 group-hover:w-full transition-all duration-1000"></div>
                     </div>
                     <div className="flex justify-between items-end">
                        <div className="text-2xl font-black text-gray-900 dark:text-white">₹4,250.00</div>
                        <div className="text-[10px] text-gray-400">OCTOBER WEEK 2</div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="md:col-span-4 bg-growth-green dark:bg-green-700 rounded-[2.5rem] p-10 text-white flex flex-col justify-between hover:shadow-2xl hover:shadow-green-600/30 hover:-translate-y-2 transition-all duration-500 group cursor-default">
               <Calendar className="w-10 h-10 mb-6 group-hover:scale-110 transition-transform" />
               <div>
                  <h3 className="text-2xl font-bold mb-4">Leave Request Management</h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Fully integrated portal for MRs to apply for leave and managers to review coverage impact instantly.
                  </p>
               </div>
            </div>

            <div className="md:col-span-4 bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 border border-gray-100 dark:border-slate-800 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group">
               <ShieldCheck className="w-10 h-10 text-medical-blue mb-6 group-hover:scale-110 transition-transform" />
               <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Approval System</h3>
               <p className="text-gray-500 dark:text-slate-400 text-sm">
                 Standardized hierarchy for one-click approvals of TPs, DCRs, and Expenses.
               </p>
            </div>

            <div className="md:col-span-8 bg-slate-900 text-white rounded-[2.5rem] p-10 flex items-center justify-between group overflow-hidden relative hover:-translate-y-1 transition-transform duration-500">
               <div className="absolute inset-0 bg-medical-blue/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div className="z-10">
                  <h3 className="text-2xl font-bold mb-2">Attendance Management</h3>
                  <p className="text-white/50 text-sm max-w-sm">Capture check-in/out times with biometric or geo-verified triggers.</p>
               </div>
               <div className="z-10 w-24 h-24 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:scale-110 group-hover:border-medical-blue/50 transition-all duration-500">
                  <Clock className="w-10 h-10 text-medical-blue" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cluster 3: Sales & Stocks Management */}
      <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-16">
             <div className="h-px flex-1 bg-gray-100 dark:bg-slate-800"></div>
             <h2 className="text-sm font-black text-orange-500 uppercase tracking-[0.3em]">03. Sales & Inventory IQ</h2>
             <div className="h-px flex-1 bg-gray-100 dark:bg-slate-800"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-10 bg-orange-50/30 dark:bg-orange-950/10 rounded-[3rem] border border-orange-100 dark:border-orange-900/30 hover:shadow-2xl hover:shadow-orange-500/5 hover:-translate-y-2 transition-all duration-500 group">
               <div className="flex gap-6 items-start">
                  <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-3xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    <Target className="w-8 h-8 text-orange-500" />
                  </div>
                  <div className="flex-1">
                     <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Target Management</h3>
                     <p className="text-gray-600 dark:text-slate-400 mb-6">
                        Define product-specific targets for territories. Monitor progress with real-time Achievement vs Target dashboards.
                     </p>
                     <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-orange-50 dark:border-orange-900/20 group-hover:shadow-lg transition-all duration-500">
                           <div className="text-[10px] font-bold text-orange-500 uppercase">Primary Sales</div>
                           <div className="text-xl font-black text-gray-900 dark:text-white">Active Sync</div>
                        </div>
                        <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-orange-50 dark:border-orange-900/20 group-hover:shadow-lg transition-all duration-500">
                           <div className="text-[10px] font-bold text-orange-500 uppercase">Secondary Sales</div>
                           <div className="text-xl font-black text-gray-900 dark:text-white">Market Level</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="p-8 bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] flex flex-col justify-between hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group">
                  <Package className="w-10 h-10 text-orange-400 mb-6 group-hover:scale-110 transition-transform" />
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Stocks Management</h4>
                    <p className="text-sm text-gray-500 dark:text-slate-400">Track stockist levels and expiry dates to prevent inventory rot.</p>
                  </div>
               </div>
               <div className="p-8 bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] flex flex-col justify-between hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group">
                  <Gift className="w-10 h-10 text-orange-400 mb-6 group-hover:scale-110 transition-transform" />
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Sample & Gift Mgmt</h4>
                    <p className="text-sm text-gray-500 dark:text-slate-400">Maintain a ledger of physician samples and promotional materials distributed.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cluster 4: Engagement & Reporting */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-16">
             <div className="h-px flex-1 bg-gray-200 dark:bg-slate-800"></div>
             <h2 className="text-sm font-black text-medical-blue uppercase tracking-[0.3em]">04. Digital Engagement</h2>
             <div className="h-px flex-1 bg-gray-200 dark:bg-slate-800"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
             <div className="md:col-span-4 bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 border border-gray-100 dark:border-slate-800 text-center flex flex-col items-center hover:shadow-2xl hover:shadow-blue-500/5 hover:-translate-y-2 transition-all duration-500 group">
                <Smartphone className="w-12 h-12 text-medical-blue mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">eDetailing</h3>
                <p className="text-gray-500 dark:text-slate-400 text-sm mb-6">Present visual clinical studies to doctors in-app with built-in feedback loops.</p>
                <div className="mt-auto w-full h-32 bg-slate-50 dark:bg-slate-800 rounded-xl border-2 border-dashed border-gray-100 dark:border-slate-700 flex items-center justify-center">
                   <MonitorSmartphone className="w-10 h-10 text-gray-200" />
                </div>
             </div>

             <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-medical-blue text-white rounded-[2.5rem] p-10 flex flex-col justify-between hover:shadow-2xl hover:shadow-blue-600/30 hover:-translate-y-2 transition-all duration-500 group">
                   <MessageSquare className="w-10 h-10 mb-6 group-hover:scale-110 transition-transform" />
                   <div>
                      <h4 className="text-2xl font-bold mb-2">In-app Chat</h4>
                      <p className="text-white/70 text-sm">Secure, role-based instant messaging between field force and managers.</p>
                   </div>
                </div>
                <div className="bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-[2.5rem] p-10 flex flex-col justify-between hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group">
                   <Megaphone className="w-10 h-10 text-medical-blue mb-6 group-hover:scale-110 transition-transform" />
                   <div>
                      <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Campaign Module</h4>
                      <p className="text-gray-500 dark:text-slate-400 text-sm">Plan, execute, and track promotional campaigns efficiently in real-time for better reach and higher impact with Pharma CRM.</p>
                   </div>
                </div>
                <div className="bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-[2.5rem] p-10 flex flex-col justify-between hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group">
                   <FileText className="w-10 h-10 text-medical-blue mb-6 group-hover:scale-110 transition-transform" />
                   <div>
                      <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Customized Reports</h4>
                      <p className="text-gray-500 dark:text-slate-400 text-sm">Build and export reports tailored to your specific business KPIs.</p>
                   </div>
                </div>
                <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 flex items-center justify-between col-span-1 md:col-span-2 hover:-translate-y-1 transition-transform duration-500 group">
                   <div className="flex items-center gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-medical-blue/30 transition-colors">
                         <MonitorSmartphone className="w-8 h-8 text-medical-blue" />
                      </div>
                      <div>
                         <h4 className="text-xl font-bold mb-1">Responsiveness & Compatibility</h4>
                         <p className="text-white/40 text-sm">Seamless experience on low-end Android phones and 4K Desktop monitors.</p>
                      </div>
                   </div>
                   <div className="hidden sm:flex gap-2">
                      <div className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold">ANDROID</div>
                      <div className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold">DESKTOP</div>
                      <div className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold">IOS</div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-white dark:bg-slate-950 text-center transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-8 tracking-tighter transition-colors">Empower your team today.</h2>
          <p className="text-xl text-gray-600 dark:text-slate-400 mb-12 leading-relaxed transition-colors">
            Our specialists are ready to show you how Medorn can specifically solve your unique operational challenges.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
             <button 
                onClick={onContactClick}
                className="bg-medical-blue text-white px-12 py-5 rounded-2xl font-bold text-xl shadow-2xl shadow-blue-500/20 hover:scale-105 transition-all"
              >
               Request a Feature Demo
             </button>
             <button 
                onClick={onContactClick}
                className="bg-white dark:bg-slate-900 text-gray-900 dark:text-white border-2 border-gray-100 dark:border-slate-800 px-12 py-5 rounded-2xl font-bold text-xl hover:bg-gray-50 dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-3"
              >
               Download Feature Sheet <ArrowRight className="w-5 h-5" />
             </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;
