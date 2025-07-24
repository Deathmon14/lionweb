import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Announcement {
  title: string;
  content: string;
  date: string;
}

interface AnnouncementContextType {
  announcements: Announcement[];
  addAnnouncement: (announcement: Announcement) => void;
}

const AnnouncementContext = createContext<AnnouncementContextType | undefined>(undefined);

const sampleAnnouncements: Announcement[] = [
  {
    title: 'General Body Meeting - March 23rd',
    content: `Dear Fellow Lions,

We invite all members to attend our upcoming General Body Meeting on Saturday, March 23rd, 2024, at 7:00 PM at the Community Hall, Doddabommasandra.

Agenda:
• Review of recent service projects
• Planning for upcoming health camp
• Budget discussion for Q2 activities
• Election of committee members
• Introduction of prospective new members

Light refreshments will be served. Please confirm your attendance by replying to this announcement.

We Serve!`,
    date: 'March 10, 2024'
  },
  {
    title: 'Blood Donation Camp - April 7th',
    content: `Lions Club Bangalore Doddabommasandra is organizing a Blood Donation Camp in collaboration with Bangalore Medical College.

Date: Sunday, April 7th, 2024
Time: 9:00 AM - 3:00 PM
Venue: Community Hall, Doddabommasandra

We need volunteers to help with:
• Registration and donor management
• Refreshment service for donors
• Crowd management and assistance

All healthy individuals aged 18-65 are eligible to donate. Let's come together to save lives and serve our community!

For volunteer registration, contact Lion Secretary Priya Sharma.`,
    date: 'March 8, 2024'
  },
  {
    title: 'New Member Orientation - March 30th',
    content: `Welcome to our new Lions! We're excited to conduct an orientation session for our newest members.

Date: Saturday, March 30th, 2024
Time: 6:00 PM - 8:00 PM
Venue: Community Hall, Doddabommasandra

Topics covered:
• Lions Club history and mission
• Club procedures and protocols
• Upcoming service opportunities
• Committee assignments
• Q&A session with leadership team

All existing members are welcome to join and share their experiences. This is a great opportunity to strengthen our Lions family!`,
    date: 'March 5, 2024'
  }
];

export const AnnouncementProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [announcements, setAnnouncements] = useState<Announcement[]>(sampleAnnouncements);

  const addAnnouncement = (announcement: Announcement) => {
    setAnnouncements(prev => [announcement, ...prev]);
  };

  return (
    <AnnouncementContext.Provider value={{ announcements, addAnnouncement }}>
      {children}
    </AnnouncementContext.Provider>
  );
};

export const useAnnouncements = () => {
  const context = useContext(AnnouncementContext);
  if (context === undefined) {
    throw new Error('useAnnouncements must be used within an AnnouncementProvider');
  }
  return context;
};