import { Home } from '../types';

export const mockHomes: Home[] = [
  {
    id: '1',
    title: 'Modern Beachfront Villa',
    location: 'Miami, Florida',
    description: 'Beautiful beachfront property with stunning ocean views',
    price: 250,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
    availableDates: {
      start: '2024-05-01',
      end: '2024-12-31'
    },
    ownerId: '1'
  },
  {
    id: '2',
    title: 'Cozy Mountain Cabin',
    location: 'Aspen, Colorado',
    description: 'Perfect getaway in the mountains with fireplace',
    price: 180,
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233',
    availableDates: {
      start: '2024-06-01',
      end: '2024-12-31'
    },
    ownerId: '2'
  },
  {
    id: '3',
    title: 'Downtown Loft',
    location: 'New York, NY',
    description: 'Modern loft in the heart of the city',
    price: 300,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688',
    availableDates: {
      start: '2024-07-01',
      end: '2024-12-31'
    },
    ownerId: '3'
  }
]; 