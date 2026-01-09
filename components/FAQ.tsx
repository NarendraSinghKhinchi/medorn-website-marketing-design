
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is MR reporting software?",
      answer: "Medical Representative (MR) reporting software is a specialized CRM designed for the pharmaceutical industry. It helps track field visits, manage doctor relationships, and automate daily call reports (DCR). It's essential for ensuring field force accountability and maximizing sales impact."
    },
    {
      question: "Who can use MR Reporting software?",
      answer: "MR Reporting software is built for Pharmaceutical Company Owners, Sales Managers, and Medical Representatives. It facilitates a transparent workflow from field operations to managerial oversight."
    },
    {
      question: "How does MR Reporting software work?",
      answer: "It works by providing MRs with a mobile application to log their daily activities (visits, e-detailing, expenses) in real-time. Managers use a desktop dashboard to monitor these activities, track location via GPS, and approve reports instantly."
    },
    {
      question: "How to automate expense management?",
      answer: "When an MR logs a visit, Medorn calculates travel distance via GPS. Expense reports are automatically generated based on your company's predefined travel and daily allowance rules, which managers can approve with a single click."
    },
    {
      question: "How do I export reports in Excel from MR reporting software?",
      answer: "Yes, all reports including DCRs, primary/secondary sales, and expense summaries can be exported to Excel, CSV, or PDF formats for further analysis or integration with your ERP via the admin portal."
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-16 tracking-tight">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 text-left flex justify-between items-center transition-colors hover:bg-gray-50"
              >
                <span className="font-bold text-gray-900 text-lg">{faq.question}</span>
                {openIndex === i ? <ChevronUp className="text-medical-blue" /> : <ChevronDown className="text-gray-400" />}
              </button>
              {openIndex === i && (
                <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-50">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
