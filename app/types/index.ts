export interface User {
  id: string;
  email: string;
  name: string;
}

export interface Home {
  id: string;
  title: string;
  location: string;
  description: string;
  price: number;
  image: string;
  availableDates: {
    start: string;
    end: string;
  };
  ownerId: string;
}

export interface Booking {
  id: string;
  homeId: string;
  userId: string;
  startDate: string;
  endDate: string;
  status: 'pending' | 'confirmed' | 'cancelled';
} 