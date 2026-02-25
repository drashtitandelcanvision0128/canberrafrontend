
import React from 'react';
import { SectionId } from '../types';
import { LinkedInIcon, TwitterIcon } from './icons/IconComponents';
import TmsLogo from './Logo';
import { Link } from "react-router-dom";


interface FooterProps {
  onScrollTo: (id: SectionId) => void;
}

const Footer: React.FC<FooterProps> = ({ onScrollTo }) => {
  const footerLinks = [
    { title: 'Services', id: SectionId.Services },
    { title: 'About', id: SectionId.About },
    { title: 'Careers', id: SectionId.Careers },
    { title: 'Contact', id: SectionId.Contact }
  ];

  const legalLinks = [
  { title: "Privacy Policy", path: "/privacy-policy" },
  { title: "Terms of Use", path: "/terms-of-use" }

  ];

  const handleNavClick = (id: SectionId) => {
    onScrollTo(id);
  };
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
               <TmsLogo className="h-24 w-auto" variant="light" mode="full" />
            </div>
            <p className="text-gray-400 max-w-md">Engineering tomorrow's solutions today with LinkTMS expertise in digital products, staffing, and IoT.</p>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map(link => (
                <li key={link.id}>
                  <a href={`#${link.id}`} onClick={(e) => { e.preventDefault(); handleNavClick(link.id); }} className="text-gray-400 hover:text-tms-cyan transition-colors">{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
          {/* Legal Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map(link => (
  <li key={link.path}>
    <Link
      to={link.path}
      className="text-gray-400 hover:text-tms-cyan transition-colors"
    >
      {link.title}
    </Link>
  </li>
))}

            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} LinkTMS - Technology Management Solutions. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
             <a href="https://www.linkedin.com/company/tmsllc" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-tms-cyan transition-colors"><LinkedInIcon className="h-6 w-6"/></a>
             <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-tms-cyan transition-colors"><TwitterIcon className="h-6 w-6"/></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
