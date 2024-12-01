import { motion } from 'framer-motion';
import { Users, Rocket, Target, Award, Code, Lightbulb, Heart, Globe, Zap, BookOpen } from 'lucide-react';
import AnimatedSection from '../animations/AnimatedSection';
import { Link } from 'react-router-dom';

export default function About() {
  const features = [
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Innovation Hub",
      description: "A platform fostering creativity and technological advancement through exciting hackathon challenges.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Driven",
      description: "Bringing together students, mentors, and industry experts to create meaningful solutions.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Goal Oriented",
      description: "Focused on developing practical solutions to real-world problems through technology.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Technical Excellence",
      description: "Promoting best coding practices and innovative technological solutions.",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Recognition",
      description: "Celebrating and rewarding outstanding achievements and innovative solutions.",
      gradient: "from-red-500 to-rose-500"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Learning Experience",
      description: "Providing hands-on experience and learning opportunities in latest technologies.",
      gradient: "from-indigo-500 to-violet-500"
    }
  ];

  const stats = [
    { number: "500+", label: "Participants", icon: <Users className="w-5 h-5" /> },
    { number: "100+", label: "Projects", icon: <Code className="w-5 h-5" /> },
    { number: "50+", label: "Mentors", icon: <BookOpen className="w-5 h-5" /> },
    { number: "20+", label: "Partners", icon: <Globe className="w-5 h-5" /> }
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion",
      description: "We believe in nurturing passion for technology and innovation."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Impact",
      description: "Creating solutions that make a real difference in the world."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Excellence",
      description: "Striving for excellence in everything we do."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-grid-white/5" />
        <div className="container-custom relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              About IIC Quest
            </h1>
            <p className="text-xl text-gray-300 mb-12">
              Empowering the next generation of innovators through technology and collaboration
            </p>
            <Link
              to="/registration"
              className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Join Our Community
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white/5">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-secondary/10 text-secondary mb-4 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container-custom">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-display font-bold text-center mb-16 text-white"
          >
            Our Core Values
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 text-secondary mb-6 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white/5">
        <div className="container-custom">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-display font-bold text-center mb-16 text-white"
          >
            What Makes Us Different
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl blur-xl"
                  style={{
                    background: `linear-gradient(to right, var(--tw-gradient-stops))`,
                    '--tw-gradient-from': feature.gradient.split(' ')[1],
                    '--tw-gradient-to': feature.gradient.split(' ')[3]
                  }}
                />
                <div className="relative bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 group-hover:border-white/20 transition-colors">
                  <div className="text-secondary mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-display font-bold mb-6 text-white"
            >
              Ready to Start Your Journey?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-400 mb-8"
            >
              Join IIC Quest and be part of something extraordinary
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                to="/registration"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Register Now
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3 rounded-full bg-white/10 text-white font-semibold hover:bg-white/20 transition-colors"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
