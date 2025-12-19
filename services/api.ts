import { Guest, ContactMessage } from '../types';

// Simulate network delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const submitRSVP = async (data: Guest): Promise<{ success: boolean; message: string }> => {
  await delay(1000);
  console.log('RSVP Submitted:', data);
  // In a real app, this would POST to an API
  // localStorage is used here just to persist data in the user's browser for demo purposes
  const existing = JSON.parse(localStorage.getItem('rsvps') || '[]');
  localStorage.setItem('rsvps', JSON.stringify([...existing, data]));
  
  return { success: true, message: 'Thank you for your RSVP!' };
};

export const submitContact = async (data: ContactMessage): Promise<{ success: boolean; message: string }> => {
  await delay(1000);
  console.log('Contact Message Submitted:', data);
  const existing = JSON.parse(localStorage.getItem('messages') || '[]');
  localStorage.setItem('messages', JSON.stringify([...existing, data]));
  
  return { success: true, message: 'Message sent successfully!' };
};