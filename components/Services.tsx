import React from 'react';
import { ChipIcon, UserGroupIcon, WifiIcon } from './icons/IconComponents';
import { SectionId } from '../types';

interface ServicesProps {
  onScrollTo: (id: SectionId) => void;
}

const services = [
  {
    icon: <ChipIcon />,
    title: 'Digital Product Engineering',
    description: 'Specializing in software development, cloud-native architecture, and AI-driven solutions since 2009.',
    cta: 'Explore Capabilities',
    targetId: SectionId.DigitalEngineering
  },
  {
    icon: <UserGroupIcon />,
    title: 'Staffing Solutions',
    description: 'Connecting world-class talent with premier organizations through rigorous, EEOC-compliant selection.',
    cta: 'View Careers',
    targetId: SectionId.Careers
  },
  {
    icon: <WifiIcon />,
    title: 'Enterprise IoT Strategy',
    description: 'Expert integration of connected devices and smart sensors to create resilient enterprise ecosystems.',
    cta: 'Get in Touch',
    targetId: SectionId.Contact
  }
];

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string; cta: string; targetId: SectionId; onScrollTo: (id: SectionId) => void; }> = ({ icon, title, description, cta, targetId, onScrollTo }) => (
  <div className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
    <div className="text-tms-cyan mb-6 transform group-hover:scale-110 transition-transform duration-300">{icon}</div>
    <h3 className="text-2xl font-poppins font-bold text-tms-blue mb-4">{title}</h3>
    <p className="text-gray-600 mb-8 flex-grow leading-relaxed">{description}</p>
    <button 
      onClick={() => onScrollTo(targetId)} 
      className="font-bold text-tms-cyan hover:text-tms-blue transition-colors flex items-center gap-2 self-start"
    >
      {cta} <span className="text-lg">→</span>
    </button>
  </div>
);

const Services: React.FC<ServicesProps> = ({ onScrollTo }) => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl font-poppins font-bold text-tms-blue">Core Capabilities</h2>
          <div className="h-1.5 w-20 bg-tms-cyan mt-4 rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 leading-relaxed">
            From talent acquisition to complex product engineering, we provide the technical foundation for modern enterprise growth.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} onScrollTo={onScrollTo} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;