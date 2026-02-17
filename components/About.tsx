
import React from 'react';
import { SectionId } from '../types';
import { LinkedInIcon } from './icons/IconComponents';

const teamMembers = [
  {
    name: 'Shailesh Chandel',
    role: 'President & Principal Consultant',
    linkedin: 'https://www.linkedin.com/in/shaileshchandel/',
    summary: 'A seasoned technology executive and strategic advisor, Shailesh leads LinkTMS with a focus on innovation and client success. His deep expertise in digital transformation and talent acquisition helps organizations bridge the gap between business vision and technical execution.'
  },
  {
    name: 'Jaydeep Singh',
    role: 'Offshore Delivery Head',
    linkedin: 'https://www.linkedin.com/in/jaydeep-singh-940435217/',
    summary: 'Jaydeep oversees our global operations at the Vadodara Development Center. With a focus on operational excellence and agile delivery, he ensures that all engineering projects meet the highest quality standards and are delivered with precision.'
  }
];

const About: React.FC = () => {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-poppins font-bold text-tms-blue mb-6">
            Who We Are
          </h2>
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              Since our inception in 2009, <span className="text-tms-blue font-bold">LinkTMS</span> has been a trusted partner in global digital transformation. We deliver end-to-end excellence across <span className="text-tms-blue font-semibold">Software Development</span>, <span className="text-tms-blue font-semibold">Product Engineering</span>, and comprehensive <span className="text-tms-blue font-semibold">Testing Services</span>, complemented by our industry-leading <span className="text-tms-blue font-semibold">Staffing solutions</span>.
            </p>
            <p>
              With strategic offices in Parsippany and Edison, NJ, and a high-performance Offshore Development Center in Vadodara, India, we provide a global delivery model that scales with your ambitions. Our journey is defined by a culture of innovation, excellence, and a steadfast commitment to engineering tomorrow's solutions today.
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-poppins font-bold text-tms-blue text-center mb-12">Leadership Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-2xl font-bold text-tms-blue">{member.name}</h4>
                    <p className="text-tms-cyan font-semibold">{member.role}</p>
                  </div>
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#0077b5] transition-colors p-2"
                    aria-label={`${member.name} LinkedIn Profile`}
                  >
                    <LinkedInIcon className="h-7 w-7" />
                  </a>
                </div>
                <p className="text-gray-600 leading-relaxed italic">
                  "{member.summary}"
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <a
            href={`#${SectionId.Contact}`}
            className="inline-block px-8 py-3 bg-tms-cyan text-white font-bold rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-tms-cyan/20"
          >
            Work with Our Experts
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
