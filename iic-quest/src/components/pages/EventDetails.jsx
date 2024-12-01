import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, Trophy, Target, Lightbulb, CheckCircle2, Timer, Flag, Rocket, PenTool, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import AnimatedSection from '../animations/AnimatedSection';
import { RegisterNowButton } from '../common/RegisterNowButton';
import { dummyEvents } from '../../data/dummyEvents';

const EventDetails = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showEventModal, setShowEventModal] = useState(false);
  const [showLightbox, setShowLightbox] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const timeline = [
    {
      date: 'March 15, 2024',
      title: 'Registration Opens',
      description: 'Start your journey by registering your team',
      icon: Flag,
      status: 'completed',
      color: 'from-green-400 to-emerald-500'
    },
    {
      date: 'March 25, 2024',
      title: 'Registration Closes',
      description: 'Last date to register your team',
      icon: PenTool,
      status: 'upcoming',
      color: 'from-blue-400 to-indigo-500'
    },
    {
      date: 'March 30, 2024',
      title: 'Event Kickoff',
      description: 'Opening ceremony and problem statement release',
      icon: Rocket,
      status: 'upcoming',
      color: 'from-purple-400 to-pink-500'
    },
    {
      date: 'April 1, 2024',
      title: 'Final Submission',
      description: 'Submit your project and presentation',
      icon: CheckCircle2,
      status: 'upcoming',
      color: 'from-orange-400 to-red-500'
    },
  ];

  const prizes = [
    {
      position: '1st Prize',
      amount: '₹50,000',
      color: 'from-yellow-400 to-orange-500',
    },
    {
      position: '2nd Prize',
      amount: '₹30,000',
      color: 'from-gray-300 to-gray-400',
    },
    {
      position: '3rd Prize',
      amount: '₹20,000',
      color: 'from-amber-500 to-yellow-600',
    },
  ];

  const tracks = [
    {
      icon: Lightbulb,
      title: 'AI/ML Innovation',
      description: 'Develop cutting-edge solutions using artificial intelligence and machine learning',
    },
    {
      icon: Target,
      title: 'FinTech Revolution',
      description: 'Create innovative financial technology solutions for modern challenges',
    },
    {
      icon: Users,
      title: 'Social Impact',
      description: 'Build solutions that address pressing social and environmental issues',
    },
  ];

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setShowEventModal(true);
  };

  const handleImageClick = (event, index) => {
    setSelectedEvent(event);
    setCurrentImageIndex(index);
    setShowLightbox(true);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? selectedEvent.galleryImages.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === selectedEvent.galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const ImageLightbox = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center"
    >
      <button
        onClick={() => setShowLightbox(false)}
        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors duration-200"
      >
        <X className="w-8 h-8" />
      </button>
      <button
        onClick={handlePrevImage}
        className="absolute left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors duration-200"
      >
        <ChevronLeft className="w-12 h-12" />
      </button>
      <button
        onClick={handleNextImage}
        className="absolute right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors duration-200"
      >
        <ChevronRight className="w-12 h-12" />
      </button>
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <motion.img
          key={currentImageIndex}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          src={selectedEvent.galleryImages[currentImageIndex].url}
          alt={selectedEvent.galleryImages[currentImageIndex].caption}
          className="max-h-[80vh] w-auto mx-auto rounded-lg shadow-2xl"
        />
        <div className="text-center mt-6">
          <p className="text-white text-lg font-medium">
            {selectedEvent.galleryImages[currentImageIndex].caption}
          </p>
          <p className="text-white/60 text-sm mt-2">
            Image {currentImageIndex + 1} of {selectedEvent.galleryImages.length}
          </p>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("/images/hero-bg.jpg")',
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/70 to-gray-900" />
        
        {/* Content */}
        <div className="relative container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto px-4"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              IIC Quest 2.0
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Join us for a 48-hour hackathon where innovation meets opportunity. 
              Build, learn, and compete for amazing prizes!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <RegisterNowButton
                className="inline-flex items-center px-8 py-3 rounded-xl bg-gradient-to-r from-secondary via-secondary-light to-secondary text-white font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Register Now
                <Rocket className="w-5 h-5 ml-2" />
              </RegisterNowButton>
              <a
                href="#timeline"
                className="inline-flex items-center px-8 py-3 rounded-xl bg-white/10 backdrop-blur-sm text-white font-semibold hover:bg-white/20 transition-all duration-300"
              >
                View Timeline
                <Clock className="w-5 h-5 ml-2" />
              </a>
            </div>
            
            {/* Quick Info */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4"
              >
                <Calendar className="w-6 h-6 text-secondary" />
                <span className="text-white">March 30-31, 2024</span>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4"
              >
                <MapPin className="w-6 h-6 text-secondary" />
                <span className="text-white">Hybrid Mode</span>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4"
              >
                <Trophy className="w-6 h-6 text-secondary" />
                <span className="text-white">₹1,00,000 in Prizes</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900 to-primary-800" />
        <div className="absolute inset-0 bg-grid-white/5" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-bold text-white mb-4">
              Event Timeline
            </h2>
            <p className="text-xl text-gray-300">
              Mark your calendar for these important dates
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-700 to-primary-600" />

              {/* Timeline Items */}
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className={`relative flex items-center justify-between mb-16 last:mb-0 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-colors group hover:bg-white/15">
                      <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                      <p className="text-white/90 text-base mb-4 leading-relaxed">{item.description}</p>
                      <div className={`flex items-center gap-3 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                        <div className="bg-secondary/20 p-2 rounded-lg">
                          <Calendar className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-white font-medium text-base">{item.date}</span>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Point */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} p-3 flex items-center justify-center shadow-lg group cursor-pointer transform rotate-3 hover:rotate-6 transition-all duration-300`}
                    >
                      <item.icon className="w-8 h-8 text-white transform group-hover:scale-110 transition-transform" />
                    </motion.div>
                    <div className={`h-full w-1 ${
                      item.status === 'completed' ? 'bg-green-400' : 'bg-gray-600'
                    }`} />
                  </div>

                  {/* Empty Space for Layout */}
                  <div className="w-5/12" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-20"
          >
            <RegisterNowButton
              className="inline-flex items-center px-10 py-4 rounded-2xl bg-gradient-to-r from-secondary via-secondary-light to-secondary text-white text-lg font-semibold hover:shadow-[0_0_30px_rgba(var(--secondary-rgb),0.3)] hover:scale-105 transition-all duration-300 group"
            >
              Register Now
              <motion.span
                className="ml-2"
                initial={{ x: 0 }}
                animate={{ x: [0, 5, 0] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              >
                →
              </motion.span>
            </RegisterNowButton>
            <p className="mt-4 text-gray-300 text-sm">Don't miss out on this amazing opportunity!</p>
          </motion.div>
        </div>
      </section>

      {/* Tracks Section */}
      <AnimatedSection className="py-20 bg-primary-800">
        <div className="container-custom">
          <h2 className="text-3xl font-display font-bold text-center mb-16 text-white">
            Hackathon Tracks
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {tracks.map((track, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group relative bg-white rounded-2xl p-8 overflow-hidden border hover:border-transparent transition-colors duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 group-hover:text-white transition-colors duration-300">
                  <div className="inline-flex p-4 border-2 border-primary/20 rounded-xl text-primary group-hover:text-white group-hover:border-white/20 mb-6 transition-colors duration-300">
                    <track.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-white transition-colors duration-300">
                    {track.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-300">
                    {track.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Prizes Section */}
      <AnimatedSection className="py-20 bg-primary-800">
        <div className="container-custom">
          <h2 className="text-3xl font-display font-bold text-center mb-16 text-white">
            Exciting Prizes
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {prizes.map((prize, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                className="relative group"
              >
                <div className="absolute inset-0.5 bg-gradient-to-br from-primary to-secondary rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity" />
                <div className="relative bg-white rounded-2xl p-8 text-center border hover:border-transparent transition-colors">
                  <Trophy className="w-12 h-12 mx-auto mb-4 text-secondary" />
                  <h3 className="text-2xl font-bold mb-2 text-white">{prize.position}</h3>
                  <p className={`text-3xl font-display font-bold bg-gradient-to-r ${prize.color} bg-clip-text text-transparent`}>
                    {prize.amount}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Past Events Gallery Section */}
      <AnimatedSection className="mt-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold font-display bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
              Event Memories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Relive the moments and memories from our past events through these captured highlights
            </p>
          </div>

          {dummyEvents.map((event) => (
            event.galleryImages?.length > 0 && (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-20 last:mb-0"
              >
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{event.title}</h3>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{event.date.toLocaleDateString()}</span>
                      <span className="mx-3">•</span>
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {event.galleryImages.length} Photos
                    </span>
                    <button
                      onClick={() => handleEventClick(event)}
                      className="px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-full text-sm font-medium hover:opacity-90 transition-opacity duration-300"
                    >
                      View Event Details
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {event.galleryImages.map((image, index) => (
                    <motion.div
                      key={index}
                      className="relative aspect-[4/3] overflow-hidden rounded-xl cursor-pointer group"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      onClick={() => handleImageClick(event, index)}
                    >
                      <img
                        src={image.url}
                        alt={image.caption}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <p className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                            {image.caption}
                          </p>
                        </div>
                      </div>
                      <div className="absolute inset-0 border-4 border-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl"></div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          ))}
        </div>
      </AnimatedSection>

      {/* Image Lightbox */}
      {showLightbox && selectedEvent && <ImageLightbox />}

      {/* Event Details Modal */}
      {showEventModal && selectedEvent && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="relative">
              <img
                src={selectedEvent.imageUrl}
                alt={selectedEvent.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setShowEventModal(false)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900">{selectedEvent.title}</h2>
                <span className="px-3 py-1 bg-primary text-white text-sm rounded-full">
                  {selectedEvent.category}
                </span>
              </div>
              <p className="text-gray-600 mb-6">{selectedEvent.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Event Highlights</h3>
                  <ul className="space-y-2">
                    {selectedEvent.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <CheckCircle2 className="w-5 h-5 mr-2 text-primary" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Schedule</h3>
                  <ul className="space-y-2">
                    {selectedEvent.schedule.map((item, index) => (
                      <li key={index} className="flex items-start text-gray-600">
                        <Clock className="w-5 h-5 mr-2 mt-1 text-primary" />
                        <div>
                          <span className="font-medium">{item.time}</span>
                          <p className="text-sm">{item.activity}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {selectedEvent.speakers && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Speakers</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedEvent.speakers.map((speaker, index) => (
                      <div key={index} className="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <Users className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{speaker.name}</h4>
                          <p className="text-sm text-gray-600">{speaker.topic}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex justify-end">
                <button
                  onClick={() => setShowEventModal(false)}
                  className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default EventDetails;
