
import React, { useState } from 'react';
import { CheckCircle, MapPin } from 'lucide-react';

interface HeroProps {
  onContactClick?: () => void;
}

const headlines = [
  {
    main: "Best MR Reporting Software for Pharmaceuticals",
    sub: "Actionable Insights for Pharma Leaders.",
    desc: "Medorn is a complete tech solution for pharmaceuticals. Right from DCR (Doctor Call Report) Submission, creating Tour Programs to Expense Management and GPS Tracking, it comes with lots of features."
  },
  {
    main: "Streamline Your Pharma Sales Force.",
    sub: "The All-in-One MR Reporting & CRM Solution.",
    desc: "Track field visits, automate expenses, and boost sales productivity with the #1 GPS-enabled reporting app built for modern pharmaceutical teams."
  },
  {
    main: "Full Control. No Blind Spots. Real-time Visibility.",
    sub: "The Enterprise Choice for Sales Managers.",
    desc: "Bridge the gap between strategy and execution. Enforce geo-verified visits, monitor territory coverage live, and eliminate reporting delays with Medorn's manager-first dashboard."
  }
];

const checklistFeatures = [
  "Tour Program", "Geo Tagging", "Automated Expense", "Attendance", 
  "e-Detailing", "Approval System", "Payroll Management", "Customized Reports"
];

const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  const [testIndex, setTestIndex] = useState(0);

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-50 dark:bg-blue-900/10 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-green-50 dark:bg-green-900/10 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6 leading-tight transition-colors">
              {headlines[testIndex].main.split(' ').map((word, i) => 
                word === 'MR' || word === 'Pharmaceuticals' ? <span key={i} className="text-medical-blue">{word} </span> : word + ' '
              )}
            </h1>
            
            <p className="mt-6 text-xl text-gray-600 dark:text-slate-400 leading-relaxed mb-8">
              {headlines[testIndex].desc}
            </p>

            <div className="grid grid-cols-2 gap-y-3 mb-10">
              {checklistFeatures.map((f, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-700 dark:text-slate-300 font-medium">
                  <CheckCircle className="w-5 h-5 text-medical-blue" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onContactClick}
                className="bg-medical-blue text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-blue-500/20 hover:scale-105 transition-all"
              >
                Contact Sales
              </button>
              <button 
                onClick={onContactClick}
                className="border-2 border-medical-blue text-medical-blue dark:text-blue-400 dark:border-blue-400/50 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all"
              >
                Schedule Demo
              </button>
            </div>

            <div className="mt-8">
              <button 
                onClick={() => setTestIndex((prev) => (prev + 1) % headlines.length)}
                className="text-xs uppercase tracking-widest text-gray-400 dark:text-slate-500 font-bold hover:text-medical-blue transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
                Next Variant ({testIndex + 1}/{headlines.length})
              </button>
            </div>
          </div>

          <div className="mt-16 lg:mt-0 relative flex justify-center">
            <div className="flex -space-x-12">
               <div className="w-56 h-[450px] bg-white dark:bg-slate-900 rounded-[2rem] shadow-2xl border-4 border-gray-900 dark:border-slate-800 z-10 overflow-hidden relative">
                  <div className="bg-medical-blue p-4 text-white text-xs font-bold">Approve Doctors</div>
                  <div className="p-4 space-y-3">
                    <div className="h-12 bg-gray-50 dark:bg-slate-800 rounded-lg"></div>
                    <div className="h-12 bg-gray-50 dark:bg-slate-800 rounded-lg"></div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 bg-green-50 dark:bg-green-900/20 p-2 border border-green-200 dark:border-green-800/50 rounded text-[10px] text-green-700 dark:text-growth-green flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" /> Congratulations! Doctor has been approved.
                  </div>
               </div>
               <div className="w-56 h-[450px] bg-white dark:bg-slate-900 rounded-[2rem] shadow-2xl border-4 border-gray-900 dark:border-slate-800 z-20 overflow-hidden mt-8 transform scale-105">
                  <div className="bg-gray-900 dark:bg-slate-950 p-4 text-white flex justify-between items-center">
                    <span className="text-[10px] font-bold">11 Nov 2022</span>
                    <span className="text-[10px] bg-medical-blue px-2 py-0.5 rounded">HQ</span>
                  </div>
                  <div className="p-4 space-y-4">
                    <div className="w-full h-32 bg-gray-100 dark:bg-slate-800 rounded-xl relative overflow-hidden">
                       <MapPin className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-medical-blue w-8 h-8" />
                    </div>
                    <div className="h-2 w-1/2 bg-gray-200 dark:bg-slate-700 rounded"></div>
                    <div className="h-2 w-3/4 bg-gray-100 dark:bg-slate-700 rounded"></div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
