
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface FeaturePillar {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}
