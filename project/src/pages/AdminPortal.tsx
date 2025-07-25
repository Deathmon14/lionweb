import React, { useState } from 'react';
import { Eye, EyeOff, Plus, FileImage, MessageSquare, CheckCircle, X } from 'lucide-react';
import { useEvents } from '../context/EventContext';
import { useAnnouncements } from '../context/AnnouncementContext';

const AdminPortal = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState<'events' | 'announcements'>('events');
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const { addEvent } = useEvents();
  const { addAnnouncement } = useAnnouncements();

  // Simple authentication (in production, this should be much more secure)
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginData.username === 'admin' && loginData.password === 'lions2024') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid credentials. Use username: admin, password: lions2024');
    }
  };

  const [eventForm, setEventForm] = useState({
    title: '',
    date: '',
    description: '',
    images: [] as string[]
  });

  const [announcementForm, setAnnouncementForm] = useState({
    title: '',
    content: ''
  });

  const handleEventSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!eventForm.title || !eventForm.date || !eventForm.description) {
      alert('Please fill in all required fields');
      return;
    }

    const newEvent = {
      id: Date.now().toString(),
      title: eventForm.title,
      date: eventForm.date,
      description: eventForm.description,
      coverImage: eventForm.images[0] || 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      images: eventForm.images.length > 0 ? eventForm.images : [
        'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ]
    };

    addEvent(newEvent);
    setEventForm({ title: '', date: '', description: '', images: [] });
    setSubmitStatus('Event added successfully!');
    setTimeout(() => setSubmitStatus(null), 3000);
  };

  const handleAnnouncementSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!announcementForm.title || !announcementForm.content) {
      alert('Please fill in all required fields');
      return;
    }

    const newAnnouncement = {
      title: announcementForm.title,
      content: announcementForm.content,
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    };

    addAnnouncement(newAnnouncement);
    setAnnouncementForm({ title: '', content: '' });
    setSubmitStatus('Announcement added successfully!');
    setTimeout(() => setSubmitStatus(null), 3000);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      files.forEach(file => {
        const reader = new FileReader();
        reader.onloadend = () => {
          if (typeof reader.result === 'string') {
            setEventForm(prev => ({
              ...prev,
              images: [...prev.images, reader.result as string]
            }));
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const removeImage = (index: number) => {
    setEventForm(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center py-16">
        <div className="max-w-md w-full mx-4">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
              <div className="bg-[#0055A4] p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h1 className="font-serif text-2xl font-bold text-[#0055A4]">Admin Portal</h1>
              <p className="text-gray-600 mt-2">Lions Club Content Management</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
                <input
                  type="text"
                  value={loginData.username}
                  onChange={(e) => setLoginData(prev => ({ ...prev, username: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0055A4] focus:border-transparent"
                  placeholder="Enter username"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={loginData.password}
                    onChange={(e) => setLoginData(prev => ({ ...prev, password: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0055A4] focus:border-transparent pr-12"
                    placeholder="Enter password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-[#0055A4] text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                Login
              </button>
            </form>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-xs text-blue-600">
                <strong>Demo Credentials:</strong><br />
                Username: admin<br />
                Password: lions2024
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-serif text-3xl font-bold text-[#0055A4]">Admin Portal</h1>
              <p className="text-gray-600">Content Management System</p>
            </div>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-200"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Success Message */}
        {submitStatus && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center">
            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
            <span className="text-green-700">{submitStatus}</span>
          </div>
        )}

        {/* Navigation Tabs */}
        <div className="bg-white rounded-xl shadow-lg mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex">
              <button
                onClick={() => setActiveTab('events')}
                className={`py-4 px-6 font-medium border-b-2 transition-colors duration-200 ${
                  activeTab === 'events'
                    ? 'border-[#0055A4] text-[#0055A4]'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <FileImage className="h-5 w-5 inline mr-2" />
                Add New Event
              </button>
              <button
                onClick={() => setActiveTab('announcements')}
                className={`py-4 px-6 font-medium border-b-2 transition-colors duration-200 ${
                  activeTab === 'announcements'
                    ? 'border-[#0055A4] text-[#0055A4]'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <MessageSquare className="h-5 w-5 inline mr-2" />
                Add New Announcement
              </button>
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'events' && (
              <form onSubmit={handleEventSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Event Title *
                  </label>
                  <input
                    type="text"
                    value={eventForm.title}
                    onChange={(e) => setEventForm(prev => ({ ...prev, title: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0055A4] focus:border-transparent"
                    placeholder="Enter event title"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Event Date *
                  </label>
                  <input
                    type="date"
                    value={eventForm.date}
                    onChange={(e) => setEventForm(prev => ({ ...prev, date: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0055A4] focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Event Description *
                  </label>
                  <textarea
                    value={eventForm.description}
                    onChange={(e) => setEventForm(prev => ({ ...prev, description: e.target.value }))}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0055A4] focus:border-transparent"
                    placeholder="Describe the event, its purpose, execution, and outcome..."
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Event Images
                  </label>
                  <div className="space-y-4">
                    <input
                      type="file"
                      id="imageUpload"
                      multiple
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                    <label
                      htmlFor="imageUpload"
                      className="cursor-pointer inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                    >
                      <Plus className="h-5 w-5 mr-2" />
                      Upload Images
                    </label>

                    {eventForm.images.length > 0 && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {eventForm.images.map((image, index) => (
                          <div key={index} className="relative">
                            <img
                              src={image}
                              alt={`Event image ${index + 1}`}
                              className="w-full h-32 object-cover rounded-lg"
                            />
                            <button
                              type="button"
                              onClick={() => removeImage(index)}
                              className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors duration-200"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}

                    <p className="text-sm text-gray-500">
                      Upload images directly from your device. If no images are added, default images will be used.
                    </p>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0055A4] text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
                >
                  <Plus className="h-5 w-5 mr-2" />
                  Add Event
                </button>
              </form>
            )}

            {activeTab === 'announcements' && (
              <form onSubmit={handleAnnouncementSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Announcement Title *
                  </label>
                  <input
                    type="text"
                    value={announcementForm.title}
                    onChange={(e) => setAnnouncementForm(prev => ({ ...prev, title: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0055A4] focus:border-transparent"
                    placeholder="Enter announcement title"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Content *
                  </label>
                  <textarea
                    value={announcementForm.content}
                    onChange={(e) => setAnnouncementForm(prev => ({ ...prev, content: e.target.value }))}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0055A4] focus:border-transparent"
                    placeholder="Enter the announcement content with all relevant details..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0055A4] text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
                >
                  <Plus className="h-5 w-5 mr-2" />
                  Add Announcement
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-blue-50 rounded-xl p-6">
          <h3 className="font-semibold text-[#0055A4] mb-4">Instructions</h3>
          <div className="space-y-2 text-sm text-blue-700">
            <p>• <strong>Events:</strong> Fill in all required fields and upload images directly from your device.</p>
            <p>• <strong>Announcements:</strong> Create announcements that will appear on the homepage and announcements page.</p>
            <p>• <strong>Images:</strong> Use high-quality images that represent your events well. These will be displayed as previews.</p>
            <p>• <strong>Publishing:</strong> Content is published immediately after submission and will appear on the website.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPortal;