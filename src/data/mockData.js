// Mock food listings used across the app (Food Listing page).
// In a real app this would come from an API / database.

const mockListings = [
  {
    id: 1,
    name: 'Extra Wedding Buffet',
    image:
      'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80',
    quantity: 'Serves ~40 people',
    location: 'Green Valley Banquet Hall, Sector 12',
    expiry: 'Today, 10:00 PM',
    donor: 'Sharma Family',
    category: 'Wedding Leftover',
  },
  {
    id: 2,
    name: 'Birthday Party Dinner',
    image:
      'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80',
    quantity: 'Serves ~15 people',
    location: 'Rosewood Apartments, Block C',
    expiry: 'Today, 11:00 PM',
    donor: 'Ananya Verma',
    category: 'Household Extra',
  },
  {
    id: 3,
    name: 'Restaurant Lunch Surplus',
    image:
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    quantity: '20 meal boxes',
    location: 'Spice Route Restaurant, MG Road',
    expiry: 'Today, 6:00 PM',
    donor: 'Spice Route Restaurant',
    category: 'Restaurant Surplus',
  },
  {
    id: 4,
    name: 'College Event Snacks',
    image:
      'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=800&q=80',
    quantity: 'Serves ~50 people',
    location: 'City Engineering College, Main Auditorium',
    expiry: 'Tomorrow, 9:00 AM',
    donor: 'Student Council',
    category: 'Event Food',
  },
  {
    id: 5,
    name: 'Temple Prasad',
    image:
      'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    quantity: 'Serves ~30 people',
    location: 'Shree Ganesh Mandir, Old Town',
    expiry: 'Today, 8:00 PM',
    donor: 'Temple Committee',
    category: 'Event Food',
  },
  {
    id: 6,
    name: 'Office Meeting Lunch',
    image:
      'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=800&q=80',
    quantity: '12 meal boxes',
    location: 'Tech Park Tower B, 4th Floor',
    expiry: 'Today, 5:00 PM',
    donor: 'Nimbus Technologies',
    category: 'Household Extra',
  },
  {
    id: 7,
    name: 'Festival Food',
    image:
      'https://images.unsplash.com/photo-1576402187872-5f8f0e7c4f78?auto=format&fit=crop&w=800&q=80',
    quantity: 'Serves ~60 people',
    location: 'Community Ground, Sector 21',
    expiry: 'Tomorrow, 12:00 PM',
    donor: 'Sector 21 Residents Association',
    category: 'Event Food',
  },
  {
    id: 8,
    name: 'Bakery Unsold Bread',
    image:
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    quantity: '35 loaves & pastries',
    location: 'Golden Crust Bakery, Station Road',
    expiry: 'Tomorrow, 8:00 AM',
    donor: 'Golden Crust Bakery',
    category: 'Restaurant Surplus',
  },
]

export default mockListings
