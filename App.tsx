
import React, { useState, useEffect } from 'react';
import { CheckCircle, MapPin, IndianRupeeIcon } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import ValuePillars from './components/ValuePillars';
import Differentiators from './components/Differentiators';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FeaturesPage from './components/FeaturesPage';
import AboutPage from './components/AboutPage';
import WhyChoose from './components/WhyChoose';
import SyncSection from './components/SyncSection';
import ContactSalesPage from './components/ContactSalesPage';

export type AppView = 'home' | 'features' | 'about' | 'contact-sales';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>('home');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const navigateTo = (view: AppView) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <Navbar 
        onNavigate={navigateTo} 
        currentView={currentView} 
        isDarkMode={isDarkMode} 
        toggleDarkMode={toggleDarkMode} 
      />
      
      <main>
        {currentView === 'home' && (
          <>
            <Hero onContactClick={() => navigateTo('contact-sales')} />
            <TrustBar />
            
            {/* Offer Section */}
            <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/2">
                       <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
                         Look what <span className="text-medical-blue">Medorn</span> has to <span className="text-medical-blue">offer!</span>
                       </h2>
                       <p className="text-xl text-gray-600 dark:text-slate-400 leading-relaxed mb-8">
                         Medorn is a 'ONE SIZE FITS ALL' solution for pharmaceutical companies. Medorn removes the dependency of numerous software under a single platform.
                       </p>
                       <button onClick={() => navigateTo('features')} className="bg-medical-blue text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all">
                         View All Features
                       </button>
                    </div>
                    <div className="lg:w-1/2 grid grid-cols-1 gap-6">
                       {[
                         { title: "Geo Tagging", desc: "Medorn ensures that the reporting done is with respect to the location but also ensures that the privacy of users is maintained.", icon: <MapPin className="text-medical-blue w-6 h-6" /> },
                         { title: "Approval System", desc: "The hierarchy is very strictly maintained in the App. Every thing that requires attention goes one level up for approval.", icon: <CheckCircle className="text-medical-blue w-6 h-6" /> },
                         { title: "Automated Expense", desc: "No need to fill the expense manually. It generates an automated expense based on the reporting wherein user can rectify if anything is wrong.", icon: <IndianRupeeIcon className="text-medical-blue w-6 h-6" /> }
                       ].map((item, i) => (
                         <div key={i} className="flex gap-6 items-start p-6 rounded-2xl border border-gray-100 dark:border-slate-800 hover:border-medical-blue/30 transition-colors bg-gray-50/50 dark:bg-slate-900/50">
                            <div className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm">{item.icon}</div>
                            <div>
                               <h4 className="font-bold text-gray-900 dark:text-white mb-1">{item.title}</h4>
                               <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
            </section>

            <WhyChoose />
            <SyncSection />
            <Differentiators />
            
            {/* Redesigned Outcome Highlight Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-slate-900 dark:to-slate-800 rounded-[3rem] py-20 px-8 text-center relative overflow-hidden border border-blue-100 dark:border-slate-800 shadow-sm">
                <div className="absolute top-0 left-0 w-64 h-64 bg-medical-blue/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-medical-blue/5 rounded-full blur-3xl translate-x-1/4 translate-y-1/4"></div>
                
                <div className="relative z-10">
                  <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-8 leading-tight">
                    Try our <span className="text-medical-blue underline decoration-medical-blue/30">service today!</span>
                  </h2>
                  <p className="text-xl md:text-2xl text-gray-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                    Medorn aims at helping the pharmaceutical companies increase their productivity. 
                    Click the button & start your journey with us!
                  </p>
                  <div className="flex justify-center">
                    <button 
                      onClick={() => navigateTo('contact-sales')}
                      className="bg-medical-blue hover:bg-blue-700 text-white font-bold py-5 px-16 rounded-full text-xl transition-all shadow-xl shadow-blue-500/20 hover:scale-105 active:scale-95"
                    >
                      Contact Sales
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Free Trial Banner */}
              <div className="max-w-5xl mx-auto mt-16 bg-[#DFF8EB] dark:bg-green-900/20 border border-[#B3F2D2] dark:border-green-800/30 rounded-2xl p-6 text-center shadow-sm">
                 <p className="text-[#007F3E] dark:text-growth-green font-bold text-lg">
                   Use the free trial of our app for 15 days. Contact us & get onboarded today!
                 </p>
              </div>
            </section>

            <Testimonials />
            <FAQ />
          </>
        )}
        {currentView === 'features' && <FeaturesPage onContactClick={() => navigateTo('contact-sales')} />}
        {currentView === 'about' && <AboutPage />}
        {currentView === 'contact-sales' && <ContactSalesPage />}
      </main>
      
      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;
