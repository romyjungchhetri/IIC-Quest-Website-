export const dummyEvents = [
  {
    id: 'event-001',
    title: 'Hackathon 2023: Code for Change',
    description: 'A 36-hour coding marathon where teams compete to build innovative solutions for social impact. Join us for an exciting weekend of coding, collaboration, and creativity.',
    date: new Date('2023-12-15'),
    location: 'Main Campus Auditorium',
    category: 'Hackathon',
    participants: 150,
    imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    status: 'completed',
    highlights: [
      'Cash prizes worth ₹1,00,000',
      'Industry mentorship',
      'Networking opportunities',
      'Free workshops'
    ],
    schedule: [
      { time: '9:00 AM', activity: 'Registration & Breakfast' },
      { time: '10:00 AM', activity: 'Opening Ceremony' },
      { time: '11:00 AM', activity: 'Hacking Begins' },
      { time: '8:00 PM', activity: 'Dinner' }
    ],
    sponsors: ['TechCorp', 'InnovateHub', 'DevTools'],
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        caption: 'Opening Ceremony'
      },
      {
        url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        caption: 'Teams at Work'
      },
      {
        url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        caption: 'Mentoring Session'
      },
      {
        url: 'https://images.unsplash.com/photo-1528901166007-3784c7dd3653?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        caption: 'Prize Distribution'
      }
    ]
  },
  {
    id: 'event-002',
    title: 'Tech Innovation Summit 2023',
    description: 'Join industry leaders and experts for a day of insights into emerging technologies, AI, and the future of software development. Perfect for students and professionals alike.',
    date: new Date('2023-11-20'),
    location: 'Virtual Event',
    category: 'Conference',
    participants: 300,
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    status: 'completed',
    highlights: [
      'Expert Speakers',
      'Interactive Sessions',
      'Virtual Networking',
      'Digital Resource Pack'
    ],
    schedule: [
      { time: '10:00 AM', activity: 'Keynote Speech' },
      { time: '11:30 AM', activity: 'Panel Discussion' },
      { time: '2:00 PM', activity: 'Workshop Sessions' },
      { time: '4:00 PM', activity: 'Closing Remarks' }
    ],
    speakers: [
      { name: 'Dr. Sarah Johnson', topic: 'AI in Healthcare' },
      { name: 'Mike Chen', topic: 'Future of Cloud Computing' }
    ],
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        caption: 'Keynote Speech'
      },
      {
        url: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        caption: 'Panel Discussion'
      },
      {
        url: 'https://images.unsplash.com/photo-1560523159-4a9692d222ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        caption: 'Networking Session'
      }
    ]
  },
  {
    id: 'event-003',
    title: 'AI Workshop Series',
    description: 'Hands-on workshops covering machine learning, deep learning, and artificial intelligence applications. Perfect for beginners and intermediate developers.',
    date: new Date('2023-10-05'),
    location: 'Tech Lab',
    category: 'Workshop',
    participants: 80,
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    status: 'completed',
    highlights: [
      'Practical Exercises',
      'Take-home Projects',
      'Certificate of Completion',
      'Resource Materials'
    ],
    schedule: [
      { time: '9:00 AM', activity: 'Introduction to AI' },
      { time: '11:00 AM', activity: 'Hands-on Session' },
      { time: '2:00 PM', activity: 'Project Work' },
      { time: '4:00 PM', activity: 'Presentations' }
    ],
    prerequisites: ['Basic Python', 'Mathematics Fundamentals'],
    galleryImages: []
  },
  {
    id: 'event-004',
    title: 'Web Development Bootcamp',
    description: 'Intensive 2-day bootcamp covering modern web development technologies including React, Node.js, and MongoDB. Build real-world projects and enhance your portfolio.',
    date: new Date('2023-09-15'),
    location: 'Innovation Center',
    category: 'Workshop',
    participants: 50,
    imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    status: 'completed',
    highlights: [
      'Project-based Learning',
      'Industry Expert Sessions',
      'Career Guidance',
      'Portfolio Development'
    ],
    schedule: [
      { time: '9:30 AM', activity: 'Frontend Basics' },
      { time: '11:30 AM', activity: 'Backend Development' },
      { time: '2:30 PM', activity: 'Database Integration' },
      { time: '4:30 PM', activity: 'Project Deployment' }
    ],
    tools: ['React', 'Node.js', 'MongoDB', 'Git'],
    galleryImages: []
  },
  {
    id: 'event-005',
    title: 'Cybersecurity Challenge 2023',
    description: 'Test your cybersecurity skills in this intensive challenge. Tackle real-world security scenarios, identify vulnerabilities, and implement secure solutions.',
    date: new Date('2023-08-25'),
    location: 'Security Labs',
    category: 'Hackathon',
    participants: 100,
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    status: 'completed',
    highlights: [
      'CTF Challenges',
      'Security Workshops',
      'Industry Mentorship',
      'Prizes worth ₹50,000'
    ],
    schedule: [
      { time: '8:00 AM', activity: 'Registration' },
      { time: '9:00 AM', activity: 'Challenge Briefing' },
      { time: '10:00 AM', activity: 'Challenge Begins' },
      { time: '6:00 PM', activity: 'Results & Prize Distribution' }
    ],
    requirements: ['Laptop', 'Basic networking knowledge', 'Linux basics'],
    galleryImages: []
  },
  {
    id: 'event-006',
    title: 'Mobile App Development Workshop',
    description: 'Learn to build cross-platform mobile applications using React Native. From basics to deployment, cover everything you need to know to build your first mobile app.',
    date: new Date('2023-07-10'),
    location: 'Mobile Dev Center',
    category: 'Workshop',
    participants: 60,
    imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    status: 'completed',
    highlights: [
      'Cross-platform Development',
      'UI/UX Best Practices',
      'App Store Deployment',
      'Performance Optimization'
    ],
    schedule: [
      { time: '10:00 AM', activity: 'React Native Basics' },
      { time: '12:00 PM', activity: 'Component Development' },
      { time: '2:00 PM', activity: 'State Management' },
      { time: '4:00 PM', activity: 'App Publishing' }
    ],
    prerequisites: ['JavaScript knowledge', 'React basics'],
    galleryImages: []
  }
];

// Helper function to get events by category
export const getEventsByCategory = (category) => {
  return dummyEvents.filter(event => event.category === category);
};

// Helper function to get events by status
export const getEventsByStatus = (status) => {
  return dummyEvents.filter(event => event.status === status);
};

// Helper function to get upcoming events
export const getUpcomingEvents = () => {
  const now = new Date();
  return dummyEvents.filter(event => new Date(event.date) > now);
};

// Helper function to get past events
export const getPastEvents = () => {
  const now = new Date();
  return dummyEvents.filter(event => new Date(event.date) < now);
};

// Helper function to search events
export const searchEvents = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return dummyEvents.filter(event => 
    event.title.toLowerCase().includes(lowercaseQuery) ||
    event.description.toLowerCase().includes(lowercaseQuery)
  );
};
