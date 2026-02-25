import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="bg-white shadow-sm rounded-2xl border border-gray-100 p-10 md:p-14">

          {/* Header */}
          <div className="mb-12 border-b border-gray-100 pb-6">
            <h1 className="text-4xl font-semibold text-gray-900 tracking-tight">
              Privacy Policy
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              Last Updated: February 18, 2026

            </p>
          </div>

          <div className="space-y-12 text-gray-700 leading-relaxed">

            <section>
              <p className="text-base">
                LinkTMS ("Company", "we", "our", or "us") operates in the United States.
                This Privacy Policy explains how we collect, use, and protect your
                information when you interact with our website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                1. Information We Collect
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name</li>
                <li>Email address</li>
                <li>Cookies and usage data (if enabled)</li>
              </ul>
              <p className="mt-4 text-sm text-gray-600">
                We do not collect payment or financial information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                2. How We Use Information
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To operate and improve our services</li>
                <li>To communicate with users</li>
                <li>To maintain security and prevent misuse</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                3. Cookies
              </h2>
              <p>
                We may use cookies and similar technologies to enhance user
                experience and analyze website performance. You can manage cookie
                preferences through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                4. Data Security
              </h2>
              <p>
                We implement reasonable administrative, technical, and
                organizational safeguards. However, no internet transmission
                is completely secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                5. Updates to This Policy
              </h2>
              <p>
                We may update this Privacy Policy periodically. Continued use
                of the website after changes are posted constitutes acceptance.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                6. Contact Information
              </h2>
              <p>
                If you have questions regarding this policy, please contact:
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

export default PrivacyPolicy;
