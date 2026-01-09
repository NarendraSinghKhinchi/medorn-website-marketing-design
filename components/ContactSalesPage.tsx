
import React, { useState } from 'react';
import { Send, CheckCircle, ShieldCheck, Users, Globe, Building2, Phone, Mail } from 'lucide-react';

const ContactSalesPage: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    teamSize: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
        setSubmitted(false);
        setFormState({ name: '', email: '', phone: '', company: '', teamSize: '', message: '' });
    }, 5000);
  };

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* Content Column */}
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
              Ready to <span className="text-medical-blue">Empower</span> Your Field Force?
            </h1>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Join hundreds of top-tier pharmaceutical companies that trust Medorn to drive sales growth, automate expenses, and achieve 100% field visibility.
            </p>
            
            <div className="space-y-8 mb-16">
              {[
                { 
                  icon: <ShieldCheck className="text-medical-blue" />, 
                  title: "Enterprise Reliability", 
                  desc: "Built on high-availability infrastructure with AES-256 data encryption." 
                },
                { 
                  icon: <Users className="text-medical-blue" />, 
                  title: "Pharma-Specific Design", 
                  desc: "Tailored specifically for the unique workflows of medical representatives." 
                },
                { 
                  icon: <Globe className="text-medical-blue" />, 
                  title: "Global Support", 
                  desc: "24/7 dedicated support via phone and WhatsApp for your entire team." 
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-8 bg-medical-blue rounded-[2.5rem] text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
               <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                 <Building2 className="w-5 h-5" /> Quick Contact
               </h4>
               <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 opacity-60" />
                    <span className="font-bold text-xl">+91 98934 56088</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 opacity-60" />
                    <span className="opacity-80">support@medorn.com</span>
                  </div>
               </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="order-1 lg:order-2 bg-white rounded-[3rem] shadow-2xl shadow-blue-500/10 border border-gray-100 p-10 relative">
            {submitted ? (
              <div className="py-20 text-center animate-in fade-in duration-500">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-100">
                  <CheckCircle className="w-10 h-10 text-growth-green" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Message Received!</h2>
                <p className="text-gray-500 text-lg">
                  Thank you for reaching out. A sales executive will contact you shortly to schedule your demo.
                </p>
              </div>
            ) : (
              <>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Speak with Sales</h2>
                <p className="text-gray-500 mb-10">Fill out the form below and we'll get back to you within 24 hours.</p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                      <input 
                        required
                        type="text" 
                        value={formState.name}
                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                        placeholder="John Doe" 
                        className="w-full bg-gray-50 border border-gray-100 rounded-xl p-4 focus:ring-2 focus:ring-medical-blue focus:bg-white outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 ml-1">Work Email</label>
                      <input 
                        required
                        type="email" 
                        value={formState.email}
                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                        placeholder="john@pharmaco.com" 
                        className="w-full bg-gray-50 border border-gray-100 rounded-xl p-4 focus:ring-2 focus:ring-medical-blue focus:bg-white outline-none transition-all"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 ml-1">Phone Number</label>
                      <input 
                        required
                        type="tel" 
                        value={formState.phone}
                        onChange={(e) => setFormState({...formState, phone: e.target.value})}
                        placeholder="+91 00000 00000" 
                        className="w-full bg-gray-50 border border-gray-100 rounded-xl p-4 focus:ring-2 focus:ring-medical-blue focus:bg-white outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 ml-1">Company Name</label>
                      <input 
                        required
                        type="text" 
                        value={formState.company}
                        onChange={(e) => setFormState({...formState, company: e.target.value})}
                        placeholder="Zanofi Pharma" 
                        className="w-full bg-gray-50 border border-gray-100 rounded-xl p-4 focus:ring-2 focus:ring-medical-blue focus:bg-white outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Sales Team Size</label>
                    <select 
                      required
                      value={formState.teamSize}
                      onChange={(e) => setFormState({...formState, teamSize: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-100 rounded-xl p-4 focus:ring-2 focus:ring-medical-blue focus:bg-white outline-none transition-all appearance-none cursor-pointer"
                    >
                      <option value="">Select size...</option>
                      <option value="1-10">1 - 10 Representatives</option>
                      <option value="11-50">11 - 50 Representatives</option>
                      <option value="51-200">51 - 200 Representatives</option>
                      <option value="200+">200+ Representatives</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Message (Optional)</label>
                    <textarea 
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                      placeholder="Tell us about your requirements..." 
                      className="w-full bg-gray-50 border border-gray-100 rounded-xl p-4 focus:ring-2 focus:ring-medical-blue focus:bg-white outline-none transition-all resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-medical-blue hover:bg-blue-700 text-white font-bold py-5 rounded-2xl text-lg shadow-xl shadow-blue-500/20 transition-all flex items-center justify-center gap-3 active:scale-95"
                  >
                    Send Request <Send className="w-5 h-5" />
                  </button>
                  
                  <p className="text-center text-xs text-gray-400 mt-6">
                    By submitting this form, you agree to our <a href="#" className="underline">Privacy Policy</a>.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSalesPage;
