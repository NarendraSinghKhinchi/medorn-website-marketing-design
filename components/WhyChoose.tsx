
import React from 'react';
import { 
  Layout, 
  Zap, 
  Rocket, 
  Banknote, 
  ShieldCheck, 
  MousePointer2, 
  BarChart4, 
  Headphones
} from 'lucide-react';

const WhyChoose: React.FC = () => {
  const benefits = [
    {
      title: "Best UI/UX for MR Reporting Software",
      highlight: "UI/UX",
      desc: "Experience an intuitive user interface and smooth experience with Medorn's MR reporting app, designed for optimal use in reporting and analytics.",
      icon: <Layout className="w-6 h-6 text-medical-blue" />
    },
    {
      title: "Minimal Latency for Call Reporting",
      highlight: "Latency",
      desc: "Our software ensures near-instant data processing, providing fast access to crucial insights without delays or lag.",
      icon: <Zap className="w-6 h-6 text-medical-blue" />
    },
    {
      title: "Fast & Smooth Onboarding with eDetailing",
      highlight: "Onboarding",
      desc: "Get started effortlessly with our smooth onboarding process and seamless integration of our e-detailing software into your workflow.",
      icon: <Rocket className="w-6 h-6 text-medical-blue" />
    },
    {
      title: "Impressive & Affordable MR Reporting App",
      highlight: "Affordable",
      desc: "Offering an affordable MR reporting app with the most powerful features for analytics, reporting, and geo-tagging at the best price.",
      icon: <Banknote className="w-6 h-6 text-medical-blue" />
    },
    {
      title: "Enhanced Security for Data in MR Reporting Software",
      highlight: "Security",
      desc: "Medorn's MR reporting software prioritizes the security of your data, protecting against common cyber threats and ensuring confidentiality.",
      icon: <ShieldCheck className="w-6 h-6 text-medical-blue" />
    },
    {
      title: "Easy to Use eDetailing Software",
      highlight: "Easy to Use",
      desc: "Medorn's e-detailing software is designed to be user-friendly, reducing the learning curve and enabling teams to get started quickly.",
      icon: <MousePointer2 className="w-6 h-6 text-medical-blue" />
    },
    {
      title: "Precise Analytics with Call Reporting & Geo-Tagging Software",
      highlight: "Analytics",
      desc: "Read and visualize your data with Medorn's detailed report analysis, powered by our geo-tagging and call reporting software, for precise insights.",
      icon: <BarChart4 className="w-6 h-6 text-medical-blue" />
    },
    {
      title: "24X7 Support for MR Reporting Software Users",
      highlight: "Support",
      desc: "Have questions? Our 24X7 WhatsApp and call support ensures that all queries are resolved promptly, helping you stay focused on using our software without delays.",
      icon: <Headphones className="w-6 h-6 text-medical-blue" />
    }
  ];

  return (
    <section id="benefits" className="py-24 bg-white dark:bg-slate-950 relative transition-colors duration-300">
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 dark:bg-blue-900/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight transition-colors">
            Why Choose <span className="text-medical-blue">Medorn?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed transition-colors">
            Discover the top reasons why Medorn is the ideal solution for your business. Offering powerful features like doctor call reporting, call planning, geo-tagging, and e-detailing, Medorn adds significant value to your enterprise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item, idx) => (
            <div 
              key={idx} 
              className="p-8 bg-blue-50/30 dark:bg-slate-900/50 rounded-[2.5rem] border border-blue-100/50 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-900 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-medical-blue/30 dark:hover:border-medical-blue/40 hover:-translate-y-3 transition-all duration-500 group flex flex-col text-center"
            >
              <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-2xl shadow-sm dark:shadow-none flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:shadow-lg transition-all duration-500 ring-1 ring-blue-50 dark:ring-slate-700">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 leading-tight transition-colors">
                {item.title.split(item.highlight).map((part, i, arr) => (
                  <React.Fragment key={i}>
                    {part}
                    {i < arr.length - 1 && <span className="text-medical-blue">{item.highlight}</span>}
                  </React.Fragment>
                ))}
              </h3>
              <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed transition-colors flex-1">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
