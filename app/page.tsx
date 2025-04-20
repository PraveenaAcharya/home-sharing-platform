'use client';

import { useState } from 'react';
import { useAuth } from './context/AuthContext';
import { mockHomes } from './data/mockData';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  const { user, logout } = useAuth();
  const [selectedHome, setSelectedHome] = useState<string | null>(null);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [bookingDates, setBookingDates] = useState({
    start: '',
    end: ''
  });

  const handleBookNow = (homeId: string) => {
    setSelectedHome(homeId);
    setShowBookingModal(true);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedHome) return;
    // In a real app, this would send the booking to a backend
    alert(`Booking successful for home ${selectedHome}!`);
    setShowBookingModal(false);
    setSelectedHome(null);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-xl font-bold text-indigo-600">HomeShare</h1>
              </div>
            </div>
            <div className="flex items-center">
              {user ? (
                <div className="flex items-center space-x-4">
                  <span className="text-gray-700">Welcome, {user.name}</span>
                  <button
                    onClick={logout}
                    className="text-gray-700 hover:text-gray-900"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex space-x-4">
                  <Link
                    href="/login"
                    className="text-gray-700 hover:text-gray-900"
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    className="text-gray-700 hover:text-gray-900"
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockHomes.map((home) => (
            <div
              key={home.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative h-48">
            <Image
                  src={home.image}
                  alt={home.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-900">
                  {home.title}
                </h2>
                <p className="text-gray-600">{home.location}</p>
                <p className="text-gray-700 mt-2">{home.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-lg font-bold text-indigo-600">
                    ${home.price}/night
                  </span>
                  <button
                    onClick={() => handleBookNow(home.id)}
                    className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {showBookingModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg max-w-md w-full">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Book Your Stay
            </h3>
            <form onSubmit={handleBookingSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Start Date
                  </label>
                  <input
                    type="date"
                    value={bookingDates.start}
                    onChange={(e) =>
                      setBookingDates({ ...bookingDates, start: e.target.value })
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    End Date
                  </label>
                  <input
                    type="date"
                    value={bookingDates.end}
                    onChange={(e) =>
                      setBookingDates({ ...bookingDates, end: e.target.value })
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
              </div>
              <div className="mt-6 flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowBookingModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                >
                  Confirm Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
