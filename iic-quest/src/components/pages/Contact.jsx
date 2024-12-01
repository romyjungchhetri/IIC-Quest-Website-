import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, MessageSquare, Sparkles, MessageCircle, Users, Building } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(null), 3000)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'contact@iicquest.com',
      description: 'We will respond within 24 hours',
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+91 XXXXXXXXXX',
      description: 'Mon-Fri from 9am to 6pm',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Your Institution Name',
      description: 'City, State - PIN',
    },
  ]

  const faqs = [
    {
      question: 'What is IIC Quest 2.0?',
      answer:
        'IIC Quest 2.0 is a 36-hour hackathon where students can showcase their innovative ideas and technical skills while competing for exciting prizes.',
    },
    {
      question: 'Who can participate?',
      answer:
        'Any currently enrolled student can participate. Teams must consist of 3-4 members.',
    },
    {
      question: 'Is there a registration fee?',
      answer:
        'No, participation in IIC Quest 2.0 is completely free of charge.',
    },
    {
      question: 'What should I bring?',
      answer:
        'Participants should bring their own laptops, chargers, and any other devices they need. Food and refreshments will be provided.',
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
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
          {[...Array(15)].map((_, i) => (
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
          className="container mx-auto px-4 relative z-10 pt-32 pb-20"
        >
          <div className="text-center max-w-4xl mx-auto">
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-8"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              We're Here to Help
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-display font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Get in Touch
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
            >
              Have questions? We're here to help and provide you with the support you need.
              Our team is ready to assist you on your journey.
            </motion.p>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
            >
              <div className="flex flex-col items-center p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <MessageSquare className="w-6 h-6 text-primary mb-2" />
                <span className="text-2xl font-bold text-white">24/7</span>
                <span className="text-gray-400 text-sm">Support</span>
              </div>
              <div className="flex flex-col items-center p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <Users className="w-6 h-6 text-secondary mb-2" />
                <span className="text-2xl font-bold text-white">10+</span>
                <span className="text-gray-400 text-sm">Team Members</span>
              </div>
              <div className="flex flex-col items-center p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <Building className="w-6 h-6 text-emerald-500 mb-2" />
                <span className="text-2xl font-bold text-white">3</span>
                <span className="text-gray-400 text-sm">Locations</span>
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
            <Mail className="w-full h-full" />
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
            <Phone className="w-full h-full" />
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
            <MapPin className="w-full h-full" />
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl border border-gray-200 hover:border-primary/20 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-primary/5 text-primary">
                    <info.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{info.title}</h3>
                    <p className="text-primary font-medium mt-1">{info.details}</p>
                    <p className="text-sm text-gray-500 mt-1">{info.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & FAQs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Contact Form */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4 mb-10">
                <div className="p-4 rounded-xl bg-primary/10 text-primary">
                  <Send className="w-7 h-7" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Send us a Message</h2>
                  <p className="text-gray-500 mt-2 text-base sm:text-lg">We'll get back to you within 24 hours</p>
                </div>
              </div>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                  <div className="relative group">
                    <label className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-primary transition-colors">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-[3px] focus:ring-primary/10 transition-all duration-300 ease-out bg-white hover:border-gray-300 text-sm placeholder:text-gray-400 group-hover:border-gray-300"
                        placeholder="Your name"
                      />
                      <div className="absolute inset-y-0 left-0 w-1 bg-primary scale-y-0 group-focus-within:scale-y-100 transition-transform duration-300 ease-out origin-top rounded-l-xl" />
                    </div>
                  </div>
                  <div className="relative group">
                    <label className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-primary transition-colors duration-300">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-[3px] focus:ring-primary/10 transition-all duration-300 ease-out bg-white hover:border-gray-300 text-sm placeholder:text-gray-400 group-hover:border-gray-300"
                        placeholder="your@email.com"
                      />
                      <div className="absolute inset-y-0 left-0 w-1 bg-primary scale-y-0 group-focus-within:scale-y-100 transition-transform duration-300 ease-out origin-top rounded-l-xl" />
                    </div>
                  </div>
                </div>

                <div className="relative group">
                  <label className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-primary transition-colors duration-300">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-[3px] focus:ring-primary/10 transition-all duration-300 ease-out bg-white hover:border-gray-300 text-sm placeholder:text-gray-400 group-hover:border-gray-300"
                      placeholder="How can we help?"
                    />
                    <div className="absolute inset-y-0 left-0 w-1 bg-primary scale-y-0 group-focus-within:scale-y-100 transition-transform duration-300 ease-out origin-top rounded-l-xl" />
                  </div>
                </div>

                <div className="relative group">
                  <label className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-primary transition-colors duration-300">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-[3px] focus:ring-primary/10 transition-all duration-300 ease-out bg-white hover:border-gray-300 text-sm placeholder:text-gray-400 group-hover:border-gray-300 resize-none"
                      placeholder="Write your message here..."
                    />
                    <div className="absolute inset-y-0 left-0 w-1 bg-primary scale-y-0 group-focus-within:scale-y-100 transition-transform duration-300 ease-out origin-top rounded-l-xl" />
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4">
                  <p className="text-xs text-gray-500">
                    All fields marked with <span className="text-red-500">*</span> are required
                  </p>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`relative px-6 py-2.5 text-sm rounded-xl text-white font-medium inline-flex items-center space-x-2 overflow-hidden group ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-primary hover:bg-primary-600 focus:ring-[3px] focus:ring-primary/20 focus:outline-none'
                    } transition-all duration-300 ease-out`}
                  >
                    <div className="absolute inset-0 bg-black/10 w-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span className="relative">Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 relative" strokeWidth={1.5} />
                        <span className="relative">Send</span>
                      </>
                    )}
                  </button>
                </div>

                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`p-6 rounded-xl flex items-start space-x-4 mt-8 ${
                      submitStatus === 'success'
                        ? 'bg-green-50 text-green-800 border border-green-200'
                        : 'bg-red-50 text-red-800 border border-red-200'
                    }`}
                  >
                    <div className={`p-2.5 rounded-full ${
                      submitStatus === 'success' ? 'bg-green-100' : 'bg-red-100'
                    }`}>
                      {submitStatus === 'success' ? (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-lg">
                        {submitStatus === 'success' ? 'Message sent successfully!' : 'Failed to send message'}
                      </p>
                      <p className="text-base mt-2">
                        {submitStatus === 'success'
                          ? 'We will get back to you within 24 hours.'
                          : 'Please try again later or contact us through alternative means.'}
                      </p>
                    </div>
                  </motion.div>
                )}
              </form>
            </div>

            {/* FAQs Section */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <MessageSquare className="w-6 h-6 text-primary mr-2" />
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
