import React from 'react';
import { Globe, Heart, Award } from 'lucide-react';
import presidentPhoto from '../assets/president-photo.jpg';
import raviNaiduPhoto from '../assets/ravi-naidu-photo.jpg'; // Assuming this is the path to the image

const AboutPage = () => {
  const leadership = [
    {
      name: 'Lion President Dr. Kaiwara Srinivasa',
      position: 'President',
      image: presidentPhoto,
      term: '2025-2026'
    },
    {
      name: 'Lion Dr. B.M. Ravi Naidu, PMJF',
      position: 'District Chairperson – Social Welfare',
      image: raviNaiduPhoto,
      term: '2025-2026'
    }
  ];

  const achievements = [
    {
      year: '2023',
      title: 'Excellence in Community Service Award',
      description: 'Recognized by Lions District 317D for outstanding humanitarian service.'
    },
    {
      year: '2022',
      title: 'Environmental Conservation Initiative',
      description: 'Planted over 1,000 trees across Doddabommasandra area.'
    },
    {
      year: '2021',
      title: 'COVID-19 Relief Efforts',
      description: 'Distributed food packages to 500+ families during the pandemic.'
    },
    {
      year: '2020',
      title: 'Health Screening Camp Success',
      description: 'Conducted free health check-ups for 800+ community members.'
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl font-bold text-[#0055A4] mb-6">About Our Club</h1>
          <div className="bg-[#FDB913] w-20 h-1 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Lions Club Bangalore Doddabommasandra is a beacon of hope and service in our community,
            dedicated to creating positive change through fellowship, leadership, and humanitarian action.
          </p>
        </div>

        {/* Lions Club International */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-[#0055A4] to-blue-700 rounded-2xl p-8 lg:p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <Globe className="h-12 w-12 text-[#FDB913] mr-4" />
                  <div>
                    <h2 className="font-serif text-3xl font-bold">Lions Clubs International</h2>
                    <p className="text-blue-100">The World's Largest Service Club Organization</p>
                  </div>
                </div>
                <p className="text-blue-100 leading-relaxed mb-6">
                  Since 1917, Lions Clubs International has been empowering volunteers to serve their communities,
                  meet humanitarian needs, encourage peace, and promote international understanding. With over
                  1.4 million members worldwide, we are united by our motto: "We Serve."
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#FDB913]">1.4M+</div>
                    <div className="text-sm text-blue-100">Members Worldwide</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#FDB913]">200+</div>
                    <div className="text-sm text-blue-100">Countries & Territories</div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src="https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop"
                  alt="Lions International Service"
                  className="rounded-lg shadow-lg w-full max-w-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Chapter's Journey */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold text-[#0055A4] mb-4">Our Chapter's Journey</h2>
              <div className="bg-[#FDB913] w-16 h-1 mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Founded in 2015, Lions Club Bangalore Doddabommasandra emerged from a shared vision of
                dedicated community members who believed in the power of collective service. Our club was
                chartered with the mission to address local needs while contributing to global Lions initiatives.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Over the years, we have grown from a small group of passionate individuals to a robust
                organization of 45+ active members, each committed to making a meaningful difference in
                the Doddabommasandra area and beyond.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-[#0055A4]">45+</div>
                  <div className="text-sm text-gray-600">Active Members</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-[#0055A4]">100+</div>
                  <div className="text-sm text-gray-600">Service Projects</div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Our Club History"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </section>

        {/* Our Achievements */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-[#0055A4] mb-4">Our Achievements</h2>
            <div className="bg-[#FDB913] w-16 h-1 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence in service has been recognized through various awards and the
              tangible impact we've made in our community.
            </p>
          </div>
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white border-l-4 border-[#FDB913] rounded-lg shadow-md p-6 flex items-start space-x-4">
                <div className="bg-[#0055A4] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-sm">
                  {achievement.year}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-[#0055A4] text-lg mb-2">{achievement.title}</h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
                <Award className="h-6 w-6 text-[#FDB913]" />
              </div>
            ))}
          </div>
        </section>

        {/* Leadership Team */}
        <section>
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-[#0055A4] mb-4">Our Leadership Team</h2>
            <div className="bg-[#FDB913] w-16 h-1 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated leaders who guide our club's vision and ensure our continued commitment
              to community service and fellowship.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="relative mb-6">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-[#FDB913] p-2 rounded-full">
                    <Heart className="h-4 w-4 text-[#0055A4]" fill="currentColor" />
                  </div>
                </div>
                <h3 className="font-semibold text-[#0055A4] text-lg mb-2">{leader.name}</h3>
                <p className="text-[#FDB913] font-medium mb-1">{leader.position}</p>
                <p className="text-gray-500 text-sm">{leader.term}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
