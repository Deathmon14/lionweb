import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, X } from 'lucide-react';
import { useEvents } from '../context/EventContext';

const EventDetailPage = () => {
  const { eventId } = useParams();
  const { events } = useEvents();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const event = events.find(e => e.id === eventId);

  if (!event) {
    return (
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-3xl font-bold text-[#0055A4] mb-4">Event Not Found</h1>
          <p className="text-gray-600 mb-8">The event you're looking for could not be found.</p>
          <Link
            to="/events"
            className="bg-[#0055A4] text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 inline-flex items-center"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Events
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/events"
          className="inline-flex items-center text-[#0055A4] hover:text-[#FDB913] font-semibold mb-8 transition-colors duration-200"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Events
        </Link>

        {/* Event Header */}
        <div className="mb-12">
          <div className="flex items-center text-[#FDB913] text-sm mb-4">
            <Calendar className="h-4 w-4 mr-2" />
            {event.date}
          </div>
          <h1 className="font-serif text-4xl font-bold text-[#0055A4] mb-6">{event.title}</h1>
          <div className="bg-[#FDB913] w-20 h-1 mb-6"></div>
          <p className="text-gray-600 text-lg leading-relaxed max-w-4xl">
            {event.description}
          </p>
        </div>

        {/* Photo Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {event.images.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image}
                alt={`${event.title} - Image ${index + 1}`}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white bg-opacity-90 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="h-6 w-6 text-[#0055A4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-6xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-[#FDB913] transition-colors duration-200"
              >
                <X className="h-8 w-8" />
              </button>
              <img
                src={selectedImage}
                alt="Expanded view"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventDetailPage;