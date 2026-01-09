
import React from 'react';
import { ShieldCheck, Map, Zap, TrendingUp } from 'lucide-react';

const ValuePillars: React.FC = () => {
  const pillars = [
    {
      title: "Complete Visibility",
      description: "Know where your team is and what they're doing in real-time without micromanaging.",
      icon: <Map className="w-8 h-8 text-white" />,
      color: "bg-medical-blue",
      shadowColor: "hover:shadow-blue-500/20",
      features: ["GPS Live Tracking", "Smart Geo-fencing", "Real-time Field Updates"]
    },
    {
      title: "Field Efficiency",
      description: "Remove the administrative burden from your MRs so they can focus on what matters.",
      icon: <Zap className="w-8 h-8 text-white" />,
      color: "bg-growth-green",
      shadowColor: "hover:shadow-green-500/20",
      features: ["Auto-Expense Management", "One-Click DCR Entry", "Dynamic Tour Programs (TP)"]
    },
    {
      title: "Sales Growth",
      description: "Scale your revenue with data-driven insights into doctor preferences and market trends.",
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      color: "bg-blue-900",
      shadowColor: "hover:shadow-slate-900/20",
      features: ["Target vs. Achievement", "Interactive e-Detailing", "Primary/Secondary Sales Sync"]
    }
  ];

  return (
    <section id="features" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">Focus on Outcomes, Not Just Features</h2>
          <p className="text-xl text-gray-600 dark:text-slate-400 max-w-3xl mx-auto">
            Medorn is engineered to solve the most critical challenges in pharmaceutical sales management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <div 
              key={idx} 
              className={`group p-8 rounded-[2.5rem] border border-gray-100 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-medical-blue/30 hover:-translate-y-3 hover:scale-[1.02] shadow-sm hover:shadow-2xl ${pillar.shadowColor} transition-all duration-500 ease-out`}
            >
              <div className={`${pillar.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                {pillar.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{pillar.title}</h3>
              <p className="text-gray-600 dark:text-slate-400 mb-8 leading-relaxed">{pillar.description}</p>
              <ul className="space-y-4">
                {pillar.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3 text-gray-700 dark:text-slate-300 font-medium">
                    <div className="w-5 h-5 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center">
                      <ShieldCheck className="w-3.5 h-3.5 text-growth-green" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePillars;
