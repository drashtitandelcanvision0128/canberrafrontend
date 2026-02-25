import React from "react";

const TermsOfUse: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-10 md:p-14">
          
          {/* Header */}
          <div className="mb-12 border-b border-gray-100 pb-6">
            <h1 className="text-4xl font-semibold text-gray-900 tracking-tight">
              Terms of Use
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              Last Updated: February 18, 2026

            </p>
          </div>

          {/* Content */}
          <div className="space-y-12 text-gray-700 leading-relaxed">

            <section>
              <p>
                By accessing or using LinkTMS, you agree to comply with and be
                bound by these Terms of Use. If you do not agree, please do not
                use this website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                1. Eligibility
              </h2>
              <p>
                You must be at least 18 years old or have legal parental consent
                to access and use this website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                2. Acceptable Use
              </h2>
              <p>
                You agree not to misuse the website, attempt unauthorized access,
                distribute malicious content, or violate any applicable laws or
                regulations.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                3. Intellectual Property
              </h2>
              <p>
                All content, branding, logos, and materials on LinkTMS are owned
                by the Company unless otherwise stated and are protected under
                applicable intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                4. Limitation of Liability
              </h2>
              <p>
                LinkTMS shall not be liable for any indirect, incidental, or
                consequential damages resulting from your use of the website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                5. Governing Law
              </h2>
              <p>
                These Terms shall be governed by and interpreted in accordance
                with the laws of the United States.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                6. Contact
              </h2>
              <p>
                If you have any questions regarding these Terms, please contact:
              </p>
              <p className="mt-3 font-medium text-gray-900">
                info@linktms.com
              </p>
            </section>

          </div>
        </div>

      </div>
    </div>
  );
};

export default TermsOfUse;
