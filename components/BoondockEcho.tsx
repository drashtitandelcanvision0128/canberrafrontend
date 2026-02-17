import React from 'react';

const BoondockEcho: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-tms-cyan uppercase bg-tms-cyan/10 rounded-full">
              Flagship Product
            </div>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-tms-blue mb-6 leading-tight">
              Revolutionizing HAM Radio with <span className="text-tms-cyan">Boondock Echo</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Boondock Echo, proudly engineered by <span className="text-tms-blue font-bold">LinkTMS</span>, is a pioneering cloud-based recording and streaming solution for HAM radio enthusiasts. Never miss a transmission again, whether you're at home or on the go. Integrated with modern IoT protocols, it brings analog legacy into the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://boondockecho.com/product/echo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-tms-blue text-white font-bold rounded-full hover:bg-opacity-90 transition-all duration-300 text-center"
              >
                Explore Boondock Echo
              </a>
              <div className="flex items-center gap-2 text-tms-cyan font-bold">
                <span className="w-8 h-px bg-tms-cyan"></span>
                Engineered by LinkTMS
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="absolute -inset-4 bg-tms-cyan/5 rounded-3xl blur-2xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1551703599-6b3e8379aa8b?auto=format&fit=crop&q=80&w=800" 
              alt="Advanced Radio Interface Concept" 
              className="relative rounded-2xl shadow-2xl w-full h-[450px] object-cover border border-gray-100" 
            />
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/20">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Product Status</p>
                  <p className="text-tms-blue font-bold">Production Ready / v2.4</p>
                </div>
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-tms-cyan"></div>
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-tms-blue"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoondockEcho;