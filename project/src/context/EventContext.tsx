import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  coverImage: string;
  images: string[];
}

interface EventContextType {
  events: Event[];
  addEvent: (event: Event) => void;
}

const EventContext = createContext<EventContextType | undefined>(undefined);

const sampleEvents: Event[] = [
  {
    id: '1',
    title: 'Tree Plantation Drive 2024',
    date: '2024-03-15',
    description: 'Our annual tree plantation drive was a huge success! We planted over 200 saplings across Doddabommasandra area, contributing to environmental conservation and creating a greener future for our community. The event saw participation from 30+ Lions members and local volunteers who worked together to make this initiative impactful.',
    coverImage: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    images: [
      'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/1141853/pexels-photo-1141853.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    ]
  },
  {
    id: '2',
    title: 'Community Health Screening Camp',
    date: '2024-02-28',
    description: 'We organized a free health screening camp for the local community, providing basic health check-ups, blood pressure monitoring, diabetes screening, and eye examinations. Over 150 community members benefited from this initiative. Medical professionals volunteered their time to ensure quality healthcare reached those who needed it most.',
    coverImage: 'https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    images: [
      'https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/4386344/pexels-photo-4386344.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    ]
  },
  {
    id: '3',
    title: 'Food Distribution for Underprivileged',
    date: '2024-01-20',
    description: 'During the winter months, our club organized a food distribution drive to support underprivileged families in our area. We prepared and distributed nutritious meal packages to over 100 families, ensuring no one goes hungry in our community. This initiative was made possible through the generous contributions of our members and local supporters.',
    coverImage: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    images: [
      'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/6646953/pexels-photo-6646953.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/6646952/pexels-photo-6646952.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    ]
  }
];

export const EventProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [events, setEvents] = useState<Event[]>(sampleEvents);

  const addEvent = (event: Event) => {
    setEvents(prev => [event, ...prev]);
  };

  return (
    <EventContext.Provider value={{ events, addEvent }}>
      {children}
    </EventContext.Provider>
  );
};

export const useEvents = () => {
  const context = useContext(EventContext);
  if (context === undefined) {
    throw new Error('useEvents must be used within an EventProvider');
  }
  return context;
};