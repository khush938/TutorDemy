import React, { useState } from 'react';

const burgundy = '#5a1b16';
// const beige = '#b3836f';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gray-400 focus:outline-none transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gray-400 focus:outline-none transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gray-400 focus:outline-none transition-colors"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="tutoring">Tutoring Services</option>
                  <option value="technical">Technical Support</option>
                  <option value="billing">Billing Question</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  placeholder="Tell us how we can help you..."
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gray-400 focus:outline-none transition-colors resize-none"
                />
              </div>
              
              <button 
                type="submit" 
                className="w-full px-8 py-4 text-white font-semibold rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                style={{ backgroundColor: burgundy }}
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4 p-6 rounded-xl" style={{ backgroundColor: burgundy }}>
              <div className="text-3xl">📍</div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-white leading-relaxed">
                  123 Education Street<br />
                  Learning City, LC 12345<br />
                  United States
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-6 rounded-xl" style={{ backgroundColor: burgundy }}>
              <div className="text-3xl">📧</div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-white">hello@tutordemy.com</p>
                <p className="text-white">support@tutordemy.com</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-6 rounded-xl" style={{ backgroundColor: burgundy }}>
              <div className="text-3xl">📞</div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-white">+1 (555) 123-4567</p>
                <p className="text-white">Mon-Fri: 9AM-6PM EST</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-6 rounded-xl" style={{ backgroundColor: burgundy }}>
              <div className="text-3xl">💬</div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Live Chat</h3>
                <p className="text-white">Available 24/7</p>
                <p className="text-white">Get instant help from our support team</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 