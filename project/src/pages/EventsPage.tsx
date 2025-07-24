import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users } from 'lucide-react';
import { useEvents } from '../context/EventContext';

const EventsPage = () => {
  const { events } = useEvents();

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl font-bold text-[#0055A4] mb-6">Our Impact</h1>
          <div className="bg-[#FDB913] w-20 h-1 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A visual journey through our community service initiatives, celebrating the positive 
            change we create together through fellowship and humanitarian action.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <Link
              key={event.id}
              to={`/events/${event.id}`}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={event.coverImage}
                  alt={event.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-[#FDB913] text-sm mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  {event.date}
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#0055A4] mb-3 group-hover:text-[#FDB913] transition-colors duration-200">
                  {event.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {event.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center text-gray-500 text-sm">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{event.images.length} photos</span>
                  </div>
                  <div className="text-[#0055A4] font-semibold text-sm group-hover:text-[#FDB913] transition-colors duration-200">
                    View Gallery →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {events.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <Calendar className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="font-serif text-2xl font-semibold text-gray-600 mb-4">No Events Yet</h3>
            <p className="text-gray-500 max-w-md mx-auto">
              Our event gallery will be updated with photos and stories from our community service initiatives.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventsPage;