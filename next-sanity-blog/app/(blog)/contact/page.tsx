'use client'
import React, { useState, useEffect } from 'react';

// Define the form data type
interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  // State for form fields
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [formData, setFormData] = useState<FormData | null>(null);

  // Load saved form data from localStorage if available
  useEffect(() => {
    const savedData = localStorage.getItem('contactForm');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  // Handle form submission
  const handleFormSubmit = (e: React.FormEvent): void => {
    e.preventDefault();

    // Validate form
    if (name && email && message) {
      const formDetails: FormData = { name, email, message };
      setFormData(formDetails);

      // Save form data in localStorage to persist across page refreshes
      localStorage.setItem('contactForm', JSON.stringify(formDetails));

      // Reset form fields after submit
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-lg w-full p-6 bg-white rounded-xl shadow-lg">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Contact Us</h1>

        {/* Form */}
        <form onSubmit={handleFormSubmit} className="space-y-6">
          {/* Name Field */}
          <div className="flex flex-col">
            <label htmlFor="name" className="text-lg font-medium text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-lg font-medium text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Message Field */}
          <div className="flex flex-col">
            <label htmlFor="message" className="text-lg font-medium text-gray-700 mb-2">Your Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message here"
              rows={4}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Send Message
          </button>
        </form>

        {/* Display Form Data if Saved */}
        {formData && (
          <div className="mt-8 p-4 bg-gray-100 rounded-md">
            <h2 className="text-xl font-semibold text-gray-800">Saved Form Data:</h2>
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Message:</strong> {formData.message}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;

