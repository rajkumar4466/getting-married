export interface Guest {
  name: string;
  email: string;
  phone: string;
  attending: 'yes' | 'no';
  numberOfGuests: number;
  message?: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
}

export interface LocationItem {
  id: string;
  name: string;
  address: string;
  mapQuery: string;
  type: 'Wedding' | 'Reception';
}