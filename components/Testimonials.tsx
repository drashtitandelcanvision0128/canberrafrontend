
import React from 'react';

const testimonials = [
  {
    quote: "TMS transformed our digital platform with seamless IoT integration that exceeded all our expectations. Their technical depth is unparalleled.",
    author: "Jane Doe",
    role: "CTO",
    company: "TechCorp Global"
  },
  {
    quote: "Their staffing solutions are second to none. They didn't just find us developers; they helped us build a high-performance engineering culture.",
    author: "John Smith",
    role: "Head of Engineering",
    company: "RetailX Dynamics"
  },
  {
    quote: "Boondock Echo is an absolute game-changer for the HAM radio community. The level of product engineering behind it is masterclass.",
    author: "Robert Wilson",
    role: "Systems Architect",
    company: "SignalStream"
  }
];

const TestimonialCard: React.FC<{ quote: string; author: string; role: string; company: string }> = ({ quote, author, role, company }) => (
  <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
    <div className="text-tms-cyan text-5xl font-serif mb-6">“</div>
    <p className="text-xl text-tms-blue italic mb-8 flex-grow leading-relaxed font-sans">
      {quote}
    </p>
    <div className="pt-6 border-t border-gray-100">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-tms-blue flex items-center justify-center text-white font-bold text-lg">
          {author.charAt(0)}
        </div>
        <div>
          <p className="font-bold text-tms-blue">{author}</p>
          <p className="text-sm text-tms-cyan font-medium uppercase tracking-wider">{role} · {company}</p>
        </div>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-tms-blue">Global Recognition</h2>
          <p className="text-lg text-gray-600 mt-4">Trusted by industry leaders and technical visionaries across the globe.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
