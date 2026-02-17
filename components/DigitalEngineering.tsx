
import React from 'react';

const capabilities = [
  {
    title: "Software Development",
    desc: "Custom enterprise solutions built with modern stacks (React, Node, Python, Go) focused on scalability and security.",
    icon: "💻"
  },
  {
    title: "Product Engineering",
    desc: "End-to-end product lifecycle management from prototyping to production-grade MVP and full-scale deployment.",
    icon: "⚙️"
  },
  {
    title: "QA & Testing Services",
    desc: "Comprehensive automated and manual testing strategies ensuring zero-defect deployments and high reliability.",
    icon: "🧪"
  },
  {
    title: "AI & Cloud Native",
    desc: "Leveraging AWS, Azure, and GCP to build intelligent, self-scaling infrastructures integrated with GenAI.",
    icon: "☁️"
  }
];

const DigitalEngineering: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          {/* Visual Representation */}
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-tms-cyan/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-tms-blue/5 rounded-full blur-3xl"></div>
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-white">
               <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000" 
                alt="High-Performance Developer Workstation" 
                className="w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tms-blue/80 via-transparent to-transparent flex items-end p-10">
                <div className="text-white">
                  <p className="text-tms-cyan font-bold uppercase tracking-wider text-sm mb-2">Excellence in Execution</p>
                  <h3 className="text-3xl font-bold">15 Years of Engineering Innovation</h3>
                </div>
              </div>
            </div>
            
            {/* Stats Overlay */}
            <div className="absolute -bottom-6 right-10 bg-tms-blue text-white p-8 rounded-2xl shadow-2xl hidden md:block">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-bold text-tms-cyan">24/7</span>
                  <p className="text-xs text-gray-400 uppercase leading-tight">Global<br/>Support</p>
                </div>
                <div className="w-full h-px bg-white/10"></div>
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-bold text-tms-cyan">99%</span>
                  <p className="text-xs text-gray-400 uppercase leading-tight">Client<br/>Retention</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-tms-blue mb-8 leading-tight">
              Architecting the <span className="text-tms-cyan">Digital Future</span>
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Since 2009, <span className="text-tms-blue font-bold">LinkTMS</span> has evolved from a boutique agency into a global engineering powerhouse. We architect experiences and engineer the digital backbone of thriving businesses, ensuring long-term scalability and technical resilience.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {capabilities.map((cap, i) => (
                <div key={i} className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100">
                  <div className="text-3xl mb-4 group-hover:scale-125 transition-transform inline-block">{cap.icon}</div>
                  <div>
                    <h4 className="font-bold text-tms-blue mb-2 text-lg">{cap.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{cap.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalEngineering;
