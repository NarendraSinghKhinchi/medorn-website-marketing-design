
import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Niraj Singh",
      role: "Co-Founder",
      company: "Zanofi Pharmaceuticals",
      content: "Medorn has helped us increase our productivity and keep the records of the sales we do. It's simple and easy to use & the analytics are up to the mark.",
      rating: 5,
      image: "https://picsum.photos/seed/person1/100/100"
    },
    {
      name: "Meera Singh",
      role: "Director",
      company: "Zanofi Pharmaceuticals",
      content: "One of the best softwares I've seen recently that's making the reporting process streamlined. Being a manager, I find the app convenient to track the accuracy of reporting and overall management.",
      rating: 5,
      image: "https://picsum.photos/seed/person2/100/100"
    },
    {
      name: "Satyendra Singh",
      role: "National Sales Manager",
      company: "Pharma Leaders",
      content: "It's literally the one-stop solution for pharmaceuticals. One can find a perfect blend of features required for the proper management of pharmaceuticals.",
      rating: 5,
      image: "https://picsum.photos/seed/person3/100/100"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">The Choice of Industry Leaders</h2>
          <p className="text-xl text-gray-600 dark:text-slate-400">Hear from the teams driving growth with Medorn.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-gray-50 dark:bg-slate-900 p-10 rounded-[2.5rem] border border-gray-100 dark:border-slate-800 flex flex-col h-full relative group hover:bg-white dark:hover:bg-slate-900 hover:shadow-2xl hover:shadow-medical-blue/5 hover:-translate-y-2 transition-all duration-500">
               <div className="text-medical-blue mb-6 group-hover:scale-110 transition-transform duration-500">
                 <svg className="w-10 h-10 opacity-20" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V5C14.017 3.89543 14.9124 3 16.017 3H19.017C21.2261 3 23.017 4.79086 23.017 7V15C23.017 17.2091 21.2261 19 19.017 19H17.017V21H14.017ZM1.017 21V18C1.017 16.8954 1.91243 16 3.017 16H6.017C6.56928 16 7.017 15.5523 7.017 15V9C7.017 8.44772 6.56928 8 6.017 8H3.017C1.91243 8 1.017 7.10457 1.017 6V5C1.017 3.89543 1.91243 3 3.017 3H6.017C8.22614 3 10.017 4.79086 10.017 7V15C10.017 17.2091 8.22614 19 6.017 19H4.017V21H1.017Z"/></svg>
               </div>
               <p className="text-xl text-gray-900 dark:text-white font-medium italic mb-10 leading-relaxed flex-1">
                 "{t.content}"
               </p>
               <div className="flex items-center gap-4 mt-auto">
                 <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full border-2 border-white dark:border-slate-800 shadow-md group-hover:scale-110 transition-transform duration-500" />
                 <div>
                   <div className="font-bold text-gray-900 dark:text-white">{t.name}</div>
                   <div className="text-sm text-gray-500 dark:text-slate-500">{t.role}, {t.company}</div>
                 </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
