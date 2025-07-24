import React from 'react';
import { Calendar, Clock, Star } from 'lucide-react';
import { useAnnouncements } from '../context/AnnouncementContext';

const AnnouncementsPage = () => {
  const { announcements } = useAnnouncements();

  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl font-bold text-[#0055A4] mb-6">Announcements & Calendar</h1>
          <div className="bg-[#FDB913] w-20 h-1 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Stay updated with our latest news, upcoming events, and important club information.
          </p>
        </div>

        {/* Announcements List */}
        <div className="space-y-8">
          {announcements.map((announcement, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-[#FDB913]">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-[#0055A4] p-2 rounded-full">
                    <Star className="h-5 w-5 text-white" fill="currentColor" />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-semibold text-[#0055A4]">{announcement.title}</h2>
                    <div className="flex items-center text-gray-500 text-sm mt-1">
                      <Calendar className="h-4 w-4 mr-2" />
                      {announcement.date}
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                {announcement.content}
              </div>
            </div>
          ))}
        </div>

        {announcements.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <Calendar className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="font-serif text-2xl font-semibold text-gray-600 mb-4">No Announcements Yet</h3>
            <p className="text-gray-500 max-w-md mx-auto">
              Check back soon for updates on club activities, meetings, and upcoming events.
            </p>
          </div>
        )}

        {/* Meeting Schedule */}
        <div className="mt-16 bg-gradient-to-r from-[#0055A4] to-blue-700 rounded-2xl p-8 text-white">
          <div className="text-center">
            <Clock className="h-12 w-12 text-[#FDB913] mx-auto mb-4" />
            <h3 className="font-serif text-2xl font-bold mb-4">Regular Meeting Schedule</h3>
            <div className="space-y-2">
              <p className="text-blue-100">Every 2nd & 4th Saturday of the month</p>
              <p className="text-xl font-semibold">7:00 PM - 9:00 PM</p>
              <p className="text-blue-100">Community Hall, Doddabommasandra</p>
            </div>
            <p className="text-sm text-blue-200 mt-4">
              All Lions members are encouraged to attend. Guests and prospective members are welcome!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementsPage;