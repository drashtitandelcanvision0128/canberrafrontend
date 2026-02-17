import React, { useEffect } from 'react';

const Careers: React.FC = () => {
  useEffect(() => {
    const scriptId = 'ceipal-jobs-widget-script';
    // Prevent adding the script multiple times
    if (document.getElementById(scriptId)) {
      return;
    }

    const script = document.createElement('script');
    script.id = scriptId;
    script.type = 'text/javascript';
    script.src = 'https://jobsapi.ceipal.com/APISource/widget.js';
    script.async = true;
    script.setAttribute('data-ceipal-api-key', 'UEVNbW9ZUUxUYUVramtuNVUrZEFFQT09');
    script.setAttribute('data-ceipal-career-portal-id', 'Z3RkUkt2OXZJVld2MjFpOVRSTXoxZz09');
    
    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      const scriptElement = document.getElementById(scriptId);
      if (scriptElement) {
        document.body.removeChild(scriptElement);
      }
      // The widget might leave styles or other elements, but this is a basic cleanup
      const widgetContainer = document.getElementById('example-widget-container');
      if (widgetContainer) {
        widgetContainer.innerHTML = '';
      }
    };
  }, []);

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-poppins font-bold text-tms-blue">Join Our Team</h2>
          <p className="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">We're looking for passionate innovators to help us engineer the future. Explore our open positions and find your next opportunity at TMS.</p>
        </div>
        <div id="example-widget-container" className="max-w-4xl mx-auto"></div>
      </div>
    </section>
  );
};

export default Careers;