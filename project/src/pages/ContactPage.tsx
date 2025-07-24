import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Send, CheckCircle } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the data to a server
    console.log('Contact form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl font-bold text-[#0055A4] mb-6">Get in Touch</h1>
          <div className="bg-[#FDB913] w-20 h-1 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We'd love to hear from you. Whether you have questions about our activities, 
            want to get involved, or need support, we're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="font-serif text-2xl font-bold text-[#0055A4] mb-6">Contact Information</h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-[#0055A4] p-3 rounded-full">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0055A4] mb-1">Email</h3>
                  <p className="text-gray-600">info@lionsbangaloredoddabommasandra.org</p>
                  <p className="text-gray-500 text-sm">We typically respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#0055A4] p-3 rounded-full">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0055A4] mb-1">Phone</h3>
                  <p className="text-gray-600">+91 98765 43210</p>
                  <p className="text-gray-500 text-sm">Available during business hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#0055A4] p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0055A4] mb-1">Meeting Location</h3>
                  <p className="text-gray-600">Community Hall<br />Doddabommasandra<br />Bangalore, Karnataka 560067</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#0055A4] p-3 rounded-full">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0055A4] mb-1">Meeting Schedule</h3>
                  <p className="text-gray-600">Every 2nd & 4th Saturday</p>
                  <p className="text-gray-600">7:00 PM - 9:00 PM</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="font-semibold text-[#0055A4] mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-[#0055A4] p-3 rounded-full text-white hover:bg-[#FDB913] hover:text-[#0055A4] transition-colors duration-200"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="bg-[#0055A4] p-3 rounded-full text-white hover:bg-[#FDB913] hover:text-[#0055A4] transition-colors duration-200"
                >
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="font-serif text-2xl font-bold text-[#0055A4] mb-6">Send us a Message</h2>
            
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="font-serif text-2xl font-semibold text-green-800 mb-2">Message Sent!</h3>
                <p className="text-green-700">
                  Thank you for reaching out. We'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0055A4] focus:border-transparent transition-colors duration-200"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0055A4] focus:border-transparent transition-colors duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0055A4] focus:border-transparent transition-colors duration-200"
                    placeholder="What is this regarding?"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0055A4] focus:border-transparent transition-colors duration-200"
                    placeholder="Please share your message, questions, or how we can help you..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#0055A4] text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h2 className="font-serif text-2xl font-bold text-[#0055A4] mb-6 text-center">Find Us</h2>
          <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
            <div className="text-center text-gray-600">
              <MapPin className="h-16 w-16 mx-auto mb-4 text-gray-400" />
              <h3 className="font-semibold text-xl mb-2">Interactive Map</h3>
              <p>Community Hall, Doddabommasandra</p>
              <p>Bangalore, Karnataka 560067</p>
              <p className="text-sm mt-2 text-gray-500">
                (In a live site, this would display an embedded Google Map)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;