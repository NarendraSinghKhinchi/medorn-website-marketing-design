
import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { AppView } from '../App';

interface NavbarProps {
  onNavigate: (view: AppView) => void;
  currentView: AppView;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView, isDarkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    onNavigate('home');
    setTimeout(() => {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <button 
              onClick={() => onNavigate('home')}
              className="flex-shrink-0 flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <div className="w-10 h-10 bg-medical-blue rounded-lg flex items-center justify-center text-white font-bold text-xl">M</div>
              <span className={`text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white transition-colors`}>Medorn</span>
            </button>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => onNavigate('features')}
              className={`${currentView === 'features' ? 'text-medical-blue' : 'text-gray-600 dark:text-slate-400'} hover:text-medical-blue dark:hover:text-medical-blue font-medium transition-colors`}
            >
              Features
            </button>
            <button 
              onClick={() => onNavigate('about')}
              className={`${currentView === 'about' ? 'text-medical-blue' : 'text-gray-600 dark:text-slate-400'} hover:text-medical-blue dark:hover:text-medical-blue font-medium transition-colors`}
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('benefits')}
              className="text-gray-600 dark:text-slate-400 hover:text-medical-blue dark:hover:text-medical-blue font-medium transition-colors"
            >
              Benefits
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleDarkMode}
              className="p-2.5 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-slate-700 transition-all"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button className="hidden sm:block text-gray-700 dark:text-slate-300 font-semibold px-4 py-2 hover:text-medical-blue transition-colors">Login</button>
            <button 
              onClick={() => onNavigate('contact-sales')}
              className={`bg-medical-blue text-white px-6 py-2.5 rounded-full font-bold shadow-lg hover:shadow-xl hover:opacity-90 transition-all ${currentView === 'contact-sales' ? 'ring-4 ring-blue-100 dark:ring-blue-900/50' : ''}`}
            >
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
