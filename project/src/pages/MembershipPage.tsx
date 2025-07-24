import React, { useState } from 'react';
import { Users, Heart, Award, HandHeart, CheckCircle, Send } from 'lucide-react';

const MembershipPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
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
    console.log('Membership inquiry submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const benefits = [
    {
      icon: <HandHeart className="h-8 w-8" />,
      title: 'Make a Difference',
      description: 'Join meaningful community service projects that create lasting positive impact in Doddabommasandra and beyond.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Fellowship & Networking',
      description: 'Build lifelong friendships with like-minded individuals who share your passion for community service.'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Leadership Development',
      description: 'Develop leadership skills through various roles and responsibilities within the club structure.'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Personal Growth',
      description: 'Experience the joy and fulfillment that comes from serving others and making a positive difference.'
    }
  ];

  const responsibilities = [
    'Attend regular club meetings (2nd & 4th Saturday of each month)',
    'Participate actively in club service projects and fundraising activities',
    'Contribute to the planning and execution of community service initiatives',
    'Support fellow Lions members and maintain the spirit of fellowship',
    'Uphold the Lions Club Code of Ethics and represent the organization positively',
    'Pay annual membership dues and contribute to club activities as able'
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl font-bold text-[#0055A4] mb-6">Become a Lion</h1>
          <div className="bg-[#FDB913] w-20 h-1 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join a global network of service-minded individuals committed to strengthening communities 
            through humanitarian service and international understanding.
          </p>
        </div>

        {/* Benefits Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-[#0055A4] mb-4">Benefits of Membership</h2>
            <div className="bg-[#FDB913] w-16 h-1 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="bg-[#0055A4] text-white p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#0055A4] mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Who We're Looking For */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-serif text-3xl font-bold text-[#0055A4] mb-4">Who We're Looking For</h2>
                <div className="bg-[#FDB913] w-16 h-1 mb-6"></div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Lions Club welcomes individuals from all walks of life who share our commitment to service. 
                  We seek people who are passionate about making a positive difference in their community and 
                  are willing to work together toward common humanitarian goals.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#FDB913]" />
                    <span className="text-gray-700">Community-minded individuals</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#FDB913]" />
                    <span className="text-gray-700">Committed to regular participation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#FDB913]" />
                    <span className="text-gray-700">Enthusiastic about service projects</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#FDB913]" />
                    <span className="text-gray-700">Values fellowship and teamwork</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop"
                  alt="Community Service"
                  className="rounded-lg shadow-lg w-full max-w-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Responsibilities */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-[#0055A4] mb-4">Member Responsibilities</h2>
            <div className="bg-[#FDB913] w-16 h-1 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Being a Lion means taking on certain responsibilities that help our club function effectively 
              and maintain our high standards of service.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {responsibilities.map((responsibility, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="bg-[#FDB913] rounded-full p-1 mt-1">
                    <CheckCircle className="h-4 w-4 text-[#0055A4]" />
                  </div>
                  <span className="text-gray-700 text-sm leading-relaxed">{responsibility}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Membership Inquiry Form */}
        <section>
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold text-[#0055A4] mb-4">Ready to Join Us?</h2>
              <div className="bg-[#FDB913] w-16 h-1 mx-auto mb-6"></div>
              <p className="text-gray-600">
                Fill out the form below and one of our members will contact you to discuss membership 
                opportunities and answer any questions you may have.
              </p>
            </div>

            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="font-serif text-2xl font-semibold text-green-800 mb-2">Thank You!</h3>
                <p className="text-green-700">
                  Your membership inquiry has been submitted successfully. We'll be in touch within 48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0055A4] focus:border-transparent transition-colors duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0055A4] focus:border-transparent transition-colors duration-200"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0055A4] focus:border-transparent transition-colors duration-200"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0055A4] focus:border-transparent transition-colors duration-200"
                    placeholder="Tell us about yourself and why you're interested in joining Lions Club..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#0055A4] text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default MembershipPage;