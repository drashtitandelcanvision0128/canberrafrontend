
import React from 'react';

interface LogoProps {
    className?: string;
    variant?: 'light' | 'dark';
    mode?: 'full' | 'compact';
}

const TmsLogo: React.FC<LogoProps> = ({ className, variant = 'dark', mode = 'full' }) => {
  // "Link" matches the cyan color of "Tomorrow's" in the Hero section
  // "TMS" is white as per user request
  const linkColor = 'text-tms-cyan';
  const tmsColor = 'text-white';

  // Tagline color adjusts to ensure readability depending on the section background
  const taglineColor = variant === 'light' ? 'text-white' : 'text-tms-blue';

  if (mode === 'full') {
    return (
      <div className={`${className} flex flex-col justify-center`}>
        <div className="flex items-baseline">
          <span className={`font-poppins font-bold text-5xl ${linkColor}`}>Link</span>
          <span className={`font-poppins font-bold text-5xl ${tmsColor}`}>TMS</span>
        </div>
        <span className={`font-sans text-sm tracking-wider ${taglineColor} opacity-90 mt-1`}>
          Technology, Management, Solutions
        </span>
      </div>
    );
  }

  // Compact mode
  return (
    <div className={`${className} flex items-center`}>
      <span className={`${linkColor} font-poppins font-bold text-3xl`}>Link</span>
      <span className={`${tmsColor} font-poppins font-bold text-3xl`}>TMS</span>
    </div>
  );
};

export default TmsLogo;
