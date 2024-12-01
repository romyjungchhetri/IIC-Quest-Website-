import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Users, Trophy, Lightbulb, ArrowRight, Code, Zap, Rocket, Brain, Sparkles, Globe } from 'lucide-react';
import SEO from '../shared/SEO';
import AnimatedSection from '../animations/AnimatedSection';
import { RegisterNowButton } from '../common/RegisterNowButton';

const Home = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Set your event date here
  const eventDate = new Date('2024-03-15T00:00:00')

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = eventDate.getTime() - now

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const features = [
    {
      icon: <Trophy className="w-6 h-6" />,
      title: 'Amazing Prizes',
      description: 'Win exciting prizes worth ₹1,00,000+',
      gradient: 'from-yellow-400 to-orange-500',
      iconColor: 'text-yellow-500',
      borderColor: 'border-yellow-200'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Network & Learn',
      description: 'Connect with like-minded innovators',
      gradient: 'from-blue-400 to-purple-500',
      iconColor: 'text-blue-500',
      borderColor: 'border-blue-200'
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Build & Innovate',
      description: 'Transform your ideas into reality',
      gradient: 'from-emerald-400 to-teal-500',
      iconColor: 'text-emerald-500',
      borderColor: 'border-emerald-200'
    },
  ];

  return (
    <>
      <SEO
        title="IIC Quest 2.0 - Innovation Hackathon | Home"
        description="Join IIC Quest 2.0, a premier 36-hour hackathon event fostering innovation and creativity among student developers. Register now for an exciting journey of innovation!"
        keywords="hackathon, innovation, technology, coding competition, student developers, IIC Quest 2.0, tech event"
        ogImage="/images/home-banner.jpg"
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("/images/hero-bg.jpg")',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/80 to-gray-900/90" />
        
        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="container-custom relative z-10 pt-32 pb-20"
        >
          <div className="text-center max-w-4xl mx-auto px-4">
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-8"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Registration Open for 2024
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-display font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                IIC Quest 2.0
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-8"
            >
              Where Innovation Meets Opportunity
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 mb-12 max-w-2xl mx-auto"
            >
              Join us for a 36-hour journey of creativity, coding, and collaboration. 
              Build solutions that matter and compete for prizes worth ₹1,00,000+
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <RegisterNowButton
                className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold text-lg hover:shadow-lg hover:shadow-primary/25 transform hover:scale-105 transition-all duration-300"
              >
                <span>Register Now</span>
                <Rocket className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </RegisterNowButton>
              <Link
                to="/event-details"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm text-white font-semibold text-lg hover:bg-white/20 transition-all duration-300"
              >
                Learn More
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
            >
              <div className="flex flex-col items-center p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <Brain className="w-6 h-6 text-primary mb-2" />
                <span className="text-2xl font-bold text-white">500+</span>
                <span className="text-gray-400 text-sm">Participants</span>
              </div>
              <div className="flex flex-col items-center p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <Globe className="w-6 h-6 text-secondary mb-2" />
                <span className="text-2xl font-bold text-white">50+</span>
                <span className="text-gray-400 text-sm">Teams</span>
              </div>
              <div className="flex flex-col items-center p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <Trophy className="w-6 h-6 text-yellow-500 mb-2" />
                <span className="text-2xl font-bold text-white">₹1L+</span>
                <span className="text-gray-400 text-sm">in Prizes</span>
              </div>
              <div className="flex flex-col items-center p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <Clock className="w-6 h-6 text-emerald-500 mb-2" />
                <span className="text-2xl font-bold text-white">36h</span>
                <span className="text-gray-400 text-sm">Duration</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 left-1/4 w-16 h-16 text-primary opacity-25"
          >
            <Code className="w-full h-full" />
          </motion.div>
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/3 right-1/4 w-12 h-12 text-secondary opacity-25"
          >
            <Zap className="w-full h-full" />
          </motion.div>
          <motion.div
            animate={{
              y: [0, 15, 0],
              x: [0, 15, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-1/4 right-1/3 w-20 h-20 text-primary opacity-25"
          >
            <Brain className="w-full h-full" />
          </motion.div>
        </div>
      </section>

      {/* Countdown Section */}
      <AnimatedSection className="py-20 bg-gradient-radial from-primary-50 to-white">
        <div className="container-custom">
          <h2 className="text-4xl font-display font-bold text-center mb-12">
            Event Starts In
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {Object.entries(timeLeft).map(([unit, value], index) => (
              <motion.div
                key={unit}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-transform"
              >
                <div className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                  {value}
                </div>
                <div className="text-gray-600 font-medium capitalize">{unit}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Features Section */}
      <AnimatedSection className="py-20 bg-primary-800">
        <div className="container-custom">
          <h2 className="text-4xl font-display font-bold text-center mb-16 text-gray-100">
            Why Participate?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group relative bg-white rounded-2xl shadow-lg p-8 overflow-hidden border hover:border-transparent transition-colors duration-300"
              >
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} 
                />
                <div className="relative z-10 group-hover:text-white transition-colors duration-300">
                  <div className={`inline-flex p-4 ${feature.borderColor} border-2 rounded-xl ${feature.iconColor} group-hover:text-white group-hover:border-white/20 mb-6 transition-colors duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-primary to-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-display font-bold mb-8">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl mb-12 text-primary-100">
            Join us in this exciting hackathon and showcase your talent!
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <RegisterNowButton
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-50 transition-colors"
            >
              Register Your Team <ArrowRight className="w-5 h-5" />
            </RegisterNowButton>
          </motion.div>
        </div>
      </AnimatedSection>
    </>
  );
};

export default Home;
