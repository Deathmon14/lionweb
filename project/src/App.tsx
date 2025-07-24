import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import EventsPage from './pages/EventsPage';
import EventDetailPage from './pages/EventDetailPage';
import AnnouncementsPage from './pages/AnnouncementsPage';
import MembershipPage from './pages/MembershipPage';
import ContactPage from './pages/ContactPage';
import AdminPortal from './pages/AdminPortal';
import { EventProvider } from './context/EventContext';
import { AnnouncementProvider } from './context/AnnouncementContext';

function App() {
  return (
    <EventProvider>
      <AnnouncementProvider>
        <Router>
          <div className="min-h-screen bg-white">
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/events" element={<EventsPage />} />
                <Route path="/events/:eventId" element={<EventDetailPage />} />
                <Route path="/announcements" element={<AnnouncementsPage />} />
                <Route path="/membership" element={<MembershipPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/portal-admin-2024" element={<AdminPortal />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AnnouncementProvider>
    </EventProvider>
  );
}

export default App;