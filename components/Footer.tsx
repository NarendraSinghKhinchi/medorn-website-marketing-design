
import React from 'react';
import { Mail, MapPin, Phone, Linkedin, Twitter, Facebook, ArrowRight } from 'lucide-react';
import { AppView } from '../App';

interface FooterProps {
  onNavigate?: (view: AppView) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToBenefits = () => {
    onNavigate?.('home');
    setTimeout(() => {
      const el = document.getElementById('benefits');
      el?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const allFeatures = [
    "GPS Tracking", "Attendance Management", "DCR Synchronization", "Tour Program (TP)", 
    "Geo Tagging", "Approval System", "Customized Reports", "Automated Expenses", 
    "Primary Sales", "Secondary Sales", "Target Management", "Leave Management", 
    "eDetailing", "In-app Chat", "Stocks Management", "Sample & Gift Management", 
    "Campaign Module", "Pharma CRM", "Offline Capabilities", "Data Security"
  ];

  // Double the features for seamless infinite scroll
  const scrollFeatures = [...allFeatures, ...allFeatures];

  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12 overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-medical-blue/5 blur-[120px] -z-10 rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
          
          {/* Brand Identity */}
          <div className="lg:col-span-4">
            <button 
              onClick={() => onNavigate?.('home')}
              className="flex items-center gap-2 mb-8 hover:opacity-80 transition-opacity"
            >
              <div className="w-10 h-10 bg-medical-blue rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/20">M</div>
              <span className="text-3xl font-extrabold tracking-tighter">Medorn</span>
            </button>
            <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-sm">
              Empowering pharmaceutical sales teams with enterprise-grade reporting, real-time GPS intelligence, and AI-optimized CRM solutions.
            </p>
            <div className="flex gap-4">
               {[
                 { Icon: Linkedin, href: "#" },
                 { Icon: Twitter, href: "#" },
                 { Icon: Facebook, href: "#" }
               ].map(({ Icon, href }, i) => (
                 <a 
                   key={i} 
                   href={href} 
                   className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-medical-blue hover:text-white hover:border-medical-blue transition-all duration-300"
                 >
                    <Icon className="w-5 h-5" />
                 </a>
               ))}
            </div>
          </div>

          {/* Product Links */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-white mb-8 text-sm uppercase tracking-widest flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-medical-blue"></div>
              Product
            </h4>
            <ul className="space-y-5">
              <li><button onClick={() => onNavigate?.('features')} className="text-slate-400 hover:text-white transition-colors text-left flex items-center group">
                <ArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                Features
              </button></li>
              <li><button onClick={() => onNavigate?.('about')} className="text-slate-400 hover:text-white transition-colors text-left flex items-center group">
                <ArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                About Us
              </button></li>
              <li><button onClick={scrollToBenefits} className="text-slate-400 hover:text-white transition-colors text-left flex items-center group">
                <ArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                Benefits
              </button></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors flex items-center group">
                <ArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                Enterprise
              </a></li>
            </ul>
          </div>

          {/* Legal/Support */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-white mb-8 text-sm uppercase tracking-widest flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-growth-green"></div>
              Support
            </h4>
            <ul className="space-y-5">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors flex items-center group">
                <ArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                Help Center
              </a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors flex items-center group">
                <ArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                Privacy Policy
              </a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors flex items-center group">
                <ArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                Terms of Service
              </a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors flex items-center group">
                <ArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                Cookie Settings
              </a></li>
            </ul>
          </div>

          {/* Contact Information - RE-DESIGNED FOR MAXIMUM VISIBILITY */}
          <div className="lg:col-span-4">
            <h4 className="font-bold text-white mb-8 text-sm uppercase tracking-widest flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></div>
              Reach Us
            </h4>
            <div className="space-y-4">
              {/* Address Card */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 transition-all">
                <div className="w-10 h-10 rounded-xl bg-medical-blue/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-medical-blue" />
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Medorn Ventures Private Limited,<br />
                  S-03, Tirupati Abhinav Homes, Ayodhya Bypass Rd,<br />
                  Bhopal, MP 462041, India
                </p>
              </div>
              
              {/* Phone Card - High Visibility */}
              <div className="group flex items-center gap-5 p-6 rounded-2xl bg-growth-green/10 border border-growth-green/20 hover:bg-growth-green hover:border-growth-green transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-growth-green flex items-center justify-center flex-shrink-0 shadow-lg shadow-growth-green/20 group-hover:bg-white transition-colors">
                  <Phone className="w-7 h-7 text-white group-hover:text-growth-green transition-colors" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-[10px] uppercase font-black tracking-widest text-growth-green group-hover:text-white/80 transition-colors mb-1">Call Our Team</p>
                  <a href="tel:+919893456088" className="text-white text-xl font-black truncate group-hover:scale-105 inline-block transition-transform">
                    +91 98934 56088
                  </a>
                </div>
              </div>

              {/* Email Card - High Visibility */}
              <div className="group flex items-center gap-5 p-6 rounded-2xl bg-medical-blue/10 border border-medical-blue/20 hover:bg-medical-blue hover:border-medical-blue transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-medical-blue flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/20 group-hover:bg-white transition-colors">
                  <Mail className="w-7 h-7 text-white group-hover:text-medical-blue transition-colors" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-[10px] uppercase font-black tracking-widest text-medical-blue group-hover:text-white/80 transition-colors mb-1">Email Inquiry</p>
                  <a href="mailto:support@medorn.com" className="text-white text-xl font-black truncate group-hover:scale-105 inline-block transition-transform">
                    support@medorn.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Ticker Carousel Section */}
        <div className="py-8 border-y border-white/5 relative flex overflow-x-hidden group">
          <div className="flex animate-infinite-scroll whitespace-nowrap">
            {scrollFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="flex items-center mx-8 text-xs font-black uppercase tracking-[0.2em] text-slate-600 hover:text-medical-blue transition-colors cursor-default"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-medical-blue/20 mr-4 group-hover:bg-medical-blue transition-colors"></div>
                {feature}
              </div>
            ))}
          </div>
          {/* Gradient masking for seamless edges */}
          <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-slate-950 to-transparent z-10"></div>
          <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-slate-950 to-transparent z-10"></div>
        </div>

        {/* Bottom Section */}
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Medorn Ventures Private Limited.
            </p>
            <div className="flex gap-6 text-sm text-slate-500">
              <a href="#" className="hover:text-white transition-colors">MR Reporting Software</a>
              <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
              <a href="#" className="hover:text-white transition-colors">Pricing Policy</a>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-2xl hover:bg-slate-200 transition-all group">
              <div className="bg-black p-1 rounded-md text-white">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5,1.25H6.5c-2.48,0-4.5,2.02-4.5,4.5v12.5c0,2.48,2.02,4.5,4.5,4.5h11c2.48,0,4.5-2.02,4.5-4.5V5.75c0-2.48-2.02-4.5-4.5-4.5zM17.5,21.25H6.5c-1.65,0-3-1.35-3-3V5.75c0-1.65,1.35-3,3-3h11c1.65,0,3,1.35,3,3v12.5c0,1.65-1.35,3-3,3z M15.5,5.25h-7c-0.41,0-0.75,0.34-0.75,0.75s0.34,0.75,0.75,0.75h7c0.41,0,0.75-0.34,0.75-0.75s-0.34-0.75-0.75-0.75z"/></svg>
              </div>
              <div className="text-left">
                <div className="text-[10px] font-bold uppercase leading-none opacity-50">Download on the</div>
                <div className="text-sm font-extrabold leading-tight">App Store</div>
              </div>
            </button>
            <button className="flex items-center gap-3 bg-white/5 border border-white/10 text-white px-6 py-3 rounded-2xl hover:bg-white/10 transition-all">
              <div className="bg-medical-blue p-1 rounded-md">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M5.2,2C4.7,2.1,4.2,2.4,3.8,2.8L14.7,13.7l3.6-3.6L5.2,2z M3,4.4v15.2l9-9L3,4.4z M15.7,14.7L4.7,25.7c0.4,0.3,1,0.5,1.6,0.2 l13.1-8.1L15.7,14.7z M20.4,11.1l-2,1.2l3.4,3.4c0.5-0.6,0.5-1.5,0.2-2.3L20.4,11.1z"/></svg>
              </div>
              <div className="text-left">
                <div className="text-[10px] font-bold uppercase leading-none opacity-40">Get it on</div>
                <div className="text-sm font-extrabold leading-tight">Google Play</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
