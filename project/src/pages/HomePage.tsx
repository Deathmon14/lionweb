import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Users, Heart, Award } from 'lucide-react';
import { useEvents } from '../context/EventContext';
import { useAnnouncements } from '../context/AnnouncementContext';

const HomePage = () => {
  const { events } = useEvents();
  const { announcements } = useAnnouncements();

  const recentEvents = events.slice(0, 3);
  const recentAnnouncements = announcements.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0055A4] via-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")'
          }}
        ></div>
        <div className="absolute inset-0 bg-[#0055A4] bg-opacity-85"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="font-serif text-4xl lg:text-6xl font-bold mb-6">
              Serving Our Community with Pride
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Lions Club Bangalore Doddabommasandra - Where service meets fellowship, 
              and every act of kindness creates ripples of positive change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/events"
                className="bg-[#FDB913] text-[#0055A4] px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-200 flex items-center justify-center"
              >
                View Our Impact <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/membership"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#0055A4] transition-colors duration-200"
              >
                Become a Lion
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* President's Corner */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-serif text-3xl font-bold text-[#0055A4] mb-4">President's Corner</h2>
                <div className="bg-[#FDB913] w-16 h-1 mb-6"></div>
                <h3 className="font-serif text-xl font-semibold text-gray-800 mb-4">
                  "My Vision for 2024-2025: Health, Hope, and Harmony"
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Dear Fellow Lions and Community Members, as we embark on this journey together, 
                  my vision focuses on three pillars that will strengthen our community bonds. 
                  Through health initiatives, we'll ensure wellness reaches every corner of our neighborhood. 
                  By fostering hope, we'll support those who need it most. And through harmony, 
                  we'll build bridges that unite us all in service.
                </p>
                <div className="flex items-center space-x-4">
                  <div>
                    <p className="font-semibold text-[#0055A4]">Lion President Rajesh Kumar</p>
                    <p className="text-sm text-gray-500">President 2024-2025</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <img
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                    alt="President"
                    className="w-64 h-64 rounded-full object-cover shadow-lg"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-[#FDB913] p-3 rounded-full">
                    <Heart className="h-6 w-6 text-[#0055A4]" fill="currentColor" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-[#0055A4] mb-4">Explore Our Club</h2>
            <div className="bg-[#FDB913] w-16 h-1 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              to="/events"
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="bg-[#0055A4] p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-[#FDB913] transition-colors duration-300">
                <Award className="h-8 w-8 text-white group-hover:text-[#0055A4]" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#0055A4] mb-4">Our Impact</h3>
              <p className="text-gray-600 mb-4">
                Discover the meaningful projects and community service initiatives that define our club's mission.
              </p>
              <div className="flex items-center text-[#0055A4] font-semibold group-hover:text-[#FDB913] transition-colors duration-300">
                View Gallery <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Link>

            <Link
              to="/announcements"
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="bg-[#0055A4] p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-[#FDB913] transition-colors duration-300">
                <Calendar className="h-8 w-8 text-white group-hover:text-[#0055A4]" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#0055A4] mb-4">Upcoming Events</h3>
              <p className="text-gray-600 mb-4">
                Stay updated with our latest announcements, meetings, and upcoming service opportunities.
              </p>
              <div className="flex items-center text-[#0055A4] font-semibold group-hover:text-[#FDB913] transition-colors duration-300">
                View Announcements <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Link>

            <Link
              to="/membership"
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="bg-[#0055A4] p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-[#FDB913] transition-colors duration-300">
                <Users className="h-8 w-8 text-white group-hover:text-[#0055A4]" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#0055A4] mb-4">Become a Lion</h3>
              <p className="text-gray-600 mb-4">
                Join our fellowship of dedicated individuals committed to making a difference in our community.
              </p>
              <div className="flex items-center text-[#0055A4] font-semibold group-hover:text-[#FDB913] transition-colors duration-300">
                Join Us <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Announcements */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="font-serif text-3xl font-bold text-[#0055A4] mb-4">Latest Announcements</h2>
              <div className="bg-[#FDB913] w-16 h-1"></div>
            </div>
            <Link
              to="/announcements"
              className="text-[#0055A4] hover:text-[#FDB913] font-semibold flex items-center transition-colors duration-200"
            >
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentAnnouncements.map((announcement, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-[#0055A4] mb-3">{announcement.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{announcement.content}</p>
                <p className="text-xs text-gray-500 mt-4">{announcement.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;