
import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Award, 
  Target, 
  Users, 
  Zap, 
  LayoutDashboard, 
  PlusSquare, 
  Calendar as CalendarIcon, 
  Tags, 
  Wallet, 
  Wrench, 
  Clock, 
  Bell, 
  Search, 
  LogOut, 
  User,
  Briefcase,
  Home,
  Camera,
  Users2,
  CheckSquare,
  ChevronLeft,
  ChevronRight,
  // Fix: Added missing Smartphone icon import
  Smartphone
} from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Header Section */}
      <section className="bg-gray-50 dark:bg-slate-900/50 py-24 border-b border-gray-100 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-medical-blue font-bold uppercase tracking-widest mb-4">A Medi-Tech Platform</p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-8 tracking-tight transition-colors">
            IMPRESSIVE | <span className="text-medical-blue">INCREDIBLE</span> | RELIABLE
          </h1>
          <div className="h-1.5 w-24 bg-medical-blue mx-auto rounded-full"></div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-24 bg-white dark:bg-slate-950 transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-12 text-center transition-colors">About <span className="text-medical-blue">Medorn ERP</span></h2>
          
          <div className="space-y-8 text-lg text-gray-600 dark:text-slate-400 leading-relaxed transition-colors">
            <p>
              Medorn aims to deliver a tech platform that is a 'one-stop solution' for pharmaceuticals. The team of Medorn aims to develop a software that emerges as the best enterprise solution in terms of project management, expense management, UI/UX, ease of use, responsiveness, and last but not least, cybersecurity.
            </p>
            <p>
              Belonging from a family that has multiple members working in pharmaceuticals, the Founders noticed that there is a severe lack of technology in the existing software. Also, they noticed that the software being used lacks UX that is user experience since the people using the software have a hard time figuring out ways to perform a certain task.
            </p>
            <p>
              Looking at all the problems faced by the users, the founders came up with 'Medorn'. At Medorn, they are trying to focus on the tech perspective, user-experience, ease of use, along with incorporating the principles of Artificial Intelligence that will boost the productivity of pharmaceuticals.
            </p>
          </div>
        </div>
      </section>

      {/* Recreated Dashboard Screenshot Section */}
      <section className="py-24 bg-gray-50 dark:bg-slate-900/30 overflow-hidden transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4 transition-colors">See Medorn in Action</h2>
            <p className="text-gray-500 dark:text-slate-400">Experience a dashboard designed for high-performance pharma teams.</p>
          </div>
          
          <div className="relative mx-auto max-w-6xl">
            {/* The Dashboard Mockup UI */}
            <div className="bg-[#1a1c2c] rounded-[2rem] shadow-2xl border border-slate-800 overflow-hidden flex flex-col md:flex-row aspect-video text-slate-300 font-sans shadow-blue-500/10">
              
              {/* Sidebar */}
              <div className="hidden md:flex w-64 bg-[#23263d] border-r border-slate-700/50 flex-col py-6">
                <div className="px-6 mb-10 flex items-center gap-3">
                  <div className="w-8 h-8 bg-medical-blue rounded-lg flex items-center justify-center text-white font-bold">V</div>
                  <span className="text-xl font-black tracking-tighter text-white">MEDORN</span>
                </div>
                
                <nav className="flex-1 space-y-1 px-3 text-xs font-bold uppercase tracking-wider">
                  <div className="flex items-center gap-3 p-3 text-slate-400 hover:bg-slate-800 rounded-xl transition-colors cursor-pointer">
                    <LayoutDashboard className="w-4 h-4" /> DASHBOARD
                  </div>
                  <div className="flex items-center gap-3 p-3 text-slate-400 hover:bg-slate-800 rounded-xl transition-colors cursor-pointer">
                    <PlusSquare className="w-4 h-4" /> CREATION MENU
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-medical-blue/20 text-blue-400 border-r-4 border-medical-blue rounded-l-xl cursor-default">
                    <CalendarIcon className="w-4 h-4" /> TOUR PROGRAM
                  </div>
                  <div className="flex items-center gap-3 p-3 text-slate-400 hover:bg-slate-800 rounded-xl transition-colors cursor-pointer">
                    <Tags className="w-4 h-4" /> SECONDARY SALES
                  </div>
                  <div className="flex items-center gap-3 p-3 text-slate-400 hover:bg-slate-800 rounded-xl transition-colors cursor-pointer">
                    <Wallet className="w-4 h-4" /> EXPENSES
                  </div>
                  <div className="flex items-center gap-3 p-3 text-slate-400 hover:bg-slate-800 rounded-xl transition-colors cursor-pointer">
                    <Wrench className="w-4 h-4" /> UTILITIES
                  </div>
                </nav>
              </div>

              {/* Main Area */}
              <div className="flex-1 flex flex-col min-w-0">
                {/* Header */}
                <header className="h-16 bg-[#23263d]/50 border-b border-slate-700/50 flex items-center justify-between px-8">
                  <div className="relative w-96 max-w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input 
                      disabled
                      placeholder="Search Doctors, Tour Program..." 
                      className="w-full bg-[#1a1c2c] border border-slate-700 rounded-full py-2 pl-10 pr-4 text-xs outline-none" 
                    />
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="relative cursor-pointer">
                      <Bell className="w-5 h-5" />
                      <span className="absolute -top-1 -right-1 w-4 h-4 bg-medical-blue text-[8px] font-bold flex items-center justify-center rounded-full text-white">3</span>
                    </div>
                    <LogOut className="w-5 h-5 text-slate-500 cursor-pointer" />
                    <div className="flex items-center gap-3 border-l border-slate-700 pl-6">
                      <div className="text-right hidden sm:block">
                        <div className="text-xs font-bold text-white">Nasir Singh</div>
                        <div className="text-[10px] text-slate-500 uppercase font-black">Admin</div>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center border-2 border-medical-blue/30 overflow-hidden">
                        <User className="w-6 h-6 text-slate-400" />
                      </div>
                    </div>
                  </div>
                </header>

                {/* Content */}
                <main className="flex-1 p-8 overflow-y-auto bg-[#141523]">
                  <div className="mb-8">
                    <h2 className="text-sm font-black uppercase tracking-widest text-white mb-2">TOUR PROGRAM</h2>
                    <div className="flex items-center gap-4">
                      <label className="text-[10px] font-bold uppercase text-slate-500">Select Month *</label>
                      <div className="bg-[#23263d] border border-slate-700 rounded-lg px-4 py-2 text-xs flex items-center gap-20 cursor-pointer">
                        December 2022 <ChevronLeft className="w-3 h-3 text-slate-500" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Calendar Grid */}
                    <div className="bg-[#23263d] rounded-3xl p-6 border border-slate-700 shadow-inner">
                      <div className="flex justify-between items-center mb-6">
                         <ChevronLeft className="w-4 h-4 cursor-pointer" />
                         <span className="font-bold text-sm">December <span className="text-slate-500">2022</span></span>
                         <ChevronRight className="w-4 h-4 cursor-pointer" />
                      </div>
                      <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-bold text-slate-500 mb-4">
                        <span>SUN</span><span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span>
                      </div>
                      <div className="grid grid-cols-7 gap-1 text-[10px]">
                        {[...Array(31)].map((_, i) => (
                          <div key={i} className={`py-3 rounded-lg hover:bg-slate-700 transition-colors cursor-pointer ${i + 1 === 10 ? 'bg-medical-blue/20 border border-medical-blue/30 text-white font-bold' : ''}`}>
                            {i + 1}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Activity Legend */}
                    <div className="space-y-4">
                      <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4">ACTIVITY</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { label: "Working", icon: <Briefcase className="w-4 h-4 text-blue-400" /> },
                          { label: "HD Leave", icon: <Home className="w-4 h-4 text-green-400" /> },
                          { label: "HD Camp", icon: <PlusSquare className="w-4 h-4 text-orange-400" /> },
                          { label: "Weekends", icon: <CalendarIcon className="w-4 h-4 text-yellow-400" /> },
                          { label: "WFH", icon: <Smartphone className="w-4 h-4 text-purple-400" /> },
                          { label: "Leave", icon: <LogOut className="w-4 h-4 text-red-400" /> },
                          { label: "Meeting", icon: <Camera className="w-4 h-4 text-teal-400" /> },
                          { label: "Conference", icon: <Users2 className="w-4 h-4 text-indigo-400" /> },
                          { label: "Closing", icon: <CheckSquare className="w-4 h-4 text-growth-green" /> }
                        ].map((act, i) => (
                          <div key={i} className="bg-[#23263d] border border-slate-700 rounded-xl p-3 flex items-center gap-3 hover:bg-slate-800 transition-colors cursor-pointer">
                            <div className="w-8 h-8 rounded-lg bg-[#1a1c2c] flex items-center justify-center">
                              {act.icon}
                            </div>
                            <span className="text-[10px] font-bold">{act.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            </div>

            {/* Floating Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-medical-blue/10 rounded-full blur-[80px] -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-growth-green/10 rounded-full blur-[80px] -z-10"></div>
          </div>
        </div>
      </section>

      {/* Values/Stats Section */}
      <section className="py-24 bg-white dark:bg-slate-950 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="p-8 rounded-3xl bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800 transition-colors">
              <Award className="w-12 h-12 text-medical-blue mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">Enterprise Grade</h3>
              <p className="text-gray-600 dark:text-slate-400 transition-colors">Built to handle the complexity of large-scale pharmaceutical operations.</p>
            </div>
            <div className="p-8 rounded-3xl bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-800 transition-colors">
              <Users className="w-12 h-12 text-growth-green mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">User Focused</h3>
              <p className="text-gray-600 dark:text-slate-400 transition-colors">Designed with a deep understanding of the MR and Manager daily workflow.</p>
            </div>
            <div className="p-8 rounded-3xl bg-orange-50 dark:bg-orange-900/10 border border-orange-100 dark:border-orange-800 transition-colors">
              <Target className="w-12 h-12 text-orange-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">AI Optimized</h3>
              <p className="text-gray-600 dark:text-slate-400 transition-colors">Leveraging data and AI to predict market trends and field productivity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Location */}
      <section className="py-24 bg-gray-900 text-white rounded-[4rem] mx-4 mb-24 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-medical-blue/20 blur-[120px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-extrabold mb-12">Connect With Us Today</h2>
              <div className="space-y-10">
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-medical-blue" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Call Support</h4>
                    <p className="text-white/60 text-lg">+91 98934 56088</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-medical-blue" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Our Headquarters</h4>
                    <p className="text-white/60 text-lg leading-relaxed">
                      Medorn Ventures Private Limited,<br />
                      S-03, Tirupati Abhinav Homes, Ayodhya Bypass Rd,<br />
                      Bhopal, Madhya Pradesh 462041
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-medical-blue" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Email Inquiry</h4>
                    <p className="text-white/60 text-lg">info@medorn.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem] backdrop-blur-xl">
               <h3 className="text-2xl font-bold mb-8">Get the App</h3>
               <div className="space-y-6">
                 <button className="w-full bg-white text-gray-900 p-5 rounded-2xl flex items-center justify-center gap-4 hover:bg-gray-100 transition-colors">
                    <div className="text-left">
                      <p className="text-[10px] font-bold uppercase opacity-50 leading-none">Download on the</p>
                      <p className="text-xl font-bold leading-tight">App Store</p>
                    </div>
                 </button>
                 <button className="w-full bg-medical-blue text-white p-5 rounded-2xl flex items-center justify-center gap-4 hover:opacity-90 transition-opacity">
                    <div className="text-left">
                      <p className="text-[10px] font-bold uppercase opacity-50 leading-none">Get it on</p>
                      <p className="text-xl font-bold leading-tight">Google Play</p>
                    </div>
                 </button>
               </div>
               <div className="mt-12 p-6 bg-growth-green/10 rounded-2xl border border-growth-green/20">
                  <p className="text-growth-green font-bold text-center">Use the free trial of our app for 15 days. Contact us & get onboarded today!</p>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
