
import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-4xl px-6 py-8 bg-white rounded-xl shadow-lg">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
          About Us
        </h1>

        {/* Paragraph */}
        <p className="text-lg text-gray-700 text-center leading-relaxed">
          Welcome to our platform, where we offer insightful content and resources
          to guide you through your journey in the world of trading. Our team is
          dedicated to providing high quality accurate and up to date information
          to help you make informed decisions. Whether you are a beginner or an
          experienced trader we strive to empower you with the knowledge you need
          to succeed.
        </p>
      </div>
    </div>
  );
};

export default About;
