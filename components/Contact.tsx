import React, { useState } from 'react';
import { MailIcon, PhoneIcon, LocationMarkerIcon, LinkedInIcon, TwitterIcon } from './icons/IconComponents';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name) newErrors.name = 'Name is required.';
    if (!formData.email) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid.';
    }
    if (!formData.message) newErrors.message = 'Message is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Mock API call
      console.log('Form Submitted:', formData);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', company: '', message: '' });
      }, 1500);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-poppins font-bold text-tms-blue">Let's Connect</h2>
          <p className="text-lg text-gray-600 mt-2">Have a project in mind? We'd love to hear from you.</p>
        </div>
        <div className="rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2">
          {/* Contact Form */}
          <div className="p-8 md:p-12 bg-white">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center bg-green-50 text-green-800 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                <p>Your message has been sent successfully. We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name <span className="text-red-500">*</span></label>
                    <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className={`mt-1 block w-full px-3 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-tms-cyan focus:border-tms-cyan`} />
                    {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email <span className="text-red-500">*</span></label>
                    <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className={`mt-1 block w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-tms-cyan focus:border-tms-cyan`} />
                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company</label>
                    <input type="text" name="company" id="company" value={formData.company} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-tms-cyan focus:border-tms-cyan" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message <span className="text-red-500">*</span></label>
                    <textarea name="message" id="message" rows={4} value={formData.message} onChange={handleChange} className={`mt-1 block w-full px-3 py-2 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-tms-cyan focus:border-tms-cyan`}></textarea>
                     {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                  </div>
                </div>
                <div className="mt-8">
                  <button type="submit" disabled={isSubmitting} className="w-full px-6 py-3 bg-tms-cyan text-white font-bold rounded-full hover:bg-opacity-90 transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            )}
          </div>
          {/* Contact Info */}
          <div className="bg-tms-blue text-white p-8 md:p-12">
            <h3 className="text-2xl font-bold font-poppins mb-6">Contact Information</h3>
            <ul className="space-y-8">
              <li className="flex items-start">
                <MailIcon className="h-6 w-6 mr-4 mt-1 text-tms-cyan" />
                <div>
                  <h4 className="font-bold">Email</h4>
                  <a href="mailto:info@linktms.com" className="hover:text-tms-cyan transition-colors">info@linktms.com</a>
                </div>
              </li>
              <li className="flex items-start">
                <PhoneIcon className="h-6 w-6 mr-4 mt-1 text-tms-cyan" />
                <div>
                  <h4 className="font-bold">Phone</h4>
                  <a href="tel:+12012547297" className="hover:text-tms-cyan transition-colors">+1 201-254-7297</a>
                </div>
              </li>
              <li className="flex items-start">
                <LocationMarkerIcon className="h-6 w-6 mr-4 mt-1 text-tms-cyan flex-shrink-0" />
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-tms-cyan uppercase text-xs tracking-widest mb-1">Edison Office</h4>
                    <p className="text-sm leading-relaxed">
                      22 Meridian Rd, Unit 17,<br />
                      Edison, NJ 08820
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-tms-cyan uppercase text-xs tracking-widest mb-1">Parsippany Office</h4>
                    <p className="text-sm leading-relaxed">
                      8 Campus Dr, Suite 105,<br />
                      Parsippany, NJ 07054
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-tms-cyan uppercase text-xs tracking-widest mb-1">Offshore Development Center</h4>
                    <p className="text-sm leading-relaxed">
                      7th Floor, Samanvay complex,<br />
                      Mujmahuda Circle,<br />
                      Vadodara, Gujarat 390007
                    </p>
                  </div>
                </div>
              </li>
            </ul>
            <div className="mt-8 pt-8 border-t border-blue-800">
                <h4 className="text-lg font-bold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                    <a href="https://www.linkedin.com/company/tmsllc" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-300 hover:text-tms-cyan transition-colors"><LinkedInIcon className="h-7 w-7"/></a>
                    <a href="#" aria-label="Twitter" className="text-gray-300 hover:text-tms-cyan transition-colors"><TwitterIcon className="h-7 w-7"/></a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;