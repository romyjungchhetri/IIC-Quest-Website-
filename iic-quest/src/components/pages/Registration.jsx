import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Mail, Phone, School, Code, FileText, Brain, Sparkles, Rocket, ArrowRight, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AnimatedSection from '../animations/AnimatedSection';
import toast from 'react-hot-toast';
import { auth } from '../../config/firebase';
import { useAuth } from '../../contexts/AuthContext';

const Registration = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const { currentUser } = useAuth();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    teamName: '',
    teamSize: '4',
    track: '',
    members: [
      { name: '', email: '', phone: '', college: '', year: '', role: 'Team Leader' },
      { name: '', email: '', phone: '', college: '', year: '', role: 'Member' },
      { name: '', email: '', phone: '', college: '', year: '', role: 'Member' },
      { name: '', email: '', phone: '', college: '', year: '', role: 'Member' },
    ],
    projectIdea: '',
    techStack: '',
  });

  const tracks = [
    {
      id: 'ai-ml',
      title: 'AI/ML Innovation',
      icon: Brain,
      description: 'Develop cutting-edge solutions using artificial intelligence',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'fintech',
      title: 'FinTech Revolution',
      icon: Sparkles,
      description: 'Create innovative financial technology solutions',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'social',
      title: 'Social Impact',
      icon: Users,
      description: 'Build solutions that address social issues',
      color: 'from-green-500 to-emerald-500'
    },
  ];

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        
        toast.error('Please sign in to access registration');
        navigate('/user-login', { 
          state: { from: { pathname: '/registration' } }
        });
      }
      
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, [navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  const handleInputChange = (e, index = null) => {
    const { name, value } = e.target;
    if (index !== null) {
      const newMembers = [...formData.members];
      newMembers[index] = { ...newMembers[index], [name]: value };
      setFormData({ ...formData, members: newMembers });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    toast.success('Registration submitted successfully!');
  };

  const handleNextStep = () => {
    if (step === 1) {
      if (!formData.teamName || !formData.track) {
        toast.error('Please fill in all required fields');
        return;
      }
      setStep(2);
    }
  };

  const handlePrevStep = () => {
    setStep(1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            {/* Team Name */}
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-200">
                Team Name
                <div className="relative mt-1">
                  <input
                    type="text"
                    name="teamName"
                    value={formData.teamName}
                    onChange={handleInputChange}
                    className="block w-full px-4 py-3 rounded-xl bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:border-secondary focus:ring-secondary transition-colors"
                    placeholder="Enter your team name"
                  />
                </div>
              </label>

              {/* Team Size */}
              <label className="block text-sm font-medium text-gray-200">
                Team Size
                <div className="relative mt-1">
                  <select
                    name="teamSize"
                    value={formData.teamSize}
                    onChange={handleInputChange}
                    className="block w-full px-4 py-3 rounded-xl bg-white/10 border border-gray-600 text-white focus:border-secondary focus:ring-secondary transition-colors appearance-none"
                  >
                    <option value="4">4 Members</option>
                    <option value="3">3 Members</option>
                    <option value="2">2 Members</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <ArrowRight className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </label>
            </div>

            {/* Track Selection */}
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-200">
                Select Track
              </label>
              <div className="grid gap-6 md:grid-cols-3">
                {tracks.map((track) => (
                  <label
                    key={track.id}
                    className={`relative flex flex-col p-6 cursor-pointer rounded-2xl border transition-all duration-300 hover:scale-105 ${
                      formData.track === track.id
                        ? 'border-secondary bg-secondary/10 shadow-lg shadow-secondary/20'
                        : 'border-gray-600 hover:border-gray-500 hover:bg-white/5'
                    }`}
                  >
                    <input
                      type="radio"
                      name="track"
                      value={track.id}
                      checked={formData.track === track.id}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${track.color} p-2.5 mb-4`}>
                      <track.icon className="w-full h-full text-white" />
                    </div>
                    <h3 className="font-semibold text-white text-lg mb-2">{track.title}</h3>
                    <p className="text-sm text-gray-400">{track.description}</p>
                  </label>
                ))}
              </div>
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            {formData.members.slice(0, Number(formData.teamSize)).map((member, index) => (
              <div 
                key={index} 
                className="p-6 rounded-2xl border border-gray-600 space-y-6 bg-white/5 backdrop-blur-sm"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center">
                    <Users className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {member.role}
                  </h3>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  {/* Full Name */}
                  <label className="block">
                    <span className="text-sm font-medium text-gray-200">Full Name</span>
                    <div className="relative mt-1">
                      <input
                        type="text"
                        name="name"
                        value={member.name}
                        onChange={(e) => handleInputChange(e, index)}
                        className="block w-full px-4 py-3 rounded-xl bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:border-secondary focus:ring-secondary transition-colors"
                        placeholder="Enter full name"
                      />
                    </div>
                  </label>

                  {/* Email */}
                  <label className="block">
                    <span className="text-sm font-medium text-gray-200">Email</span>
                    <div className="relative mt-1">
                      <input
                        type="email"
                        name="email"
                        value={member.email}
                        onChange={(e) => handleInputChange(e, index)}
                        className="block w-full px-4 py-3 rounded-xl bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:border-secondary focus:ring-secondary transition-colors"
                        placeholder="Enter email address"
                      />
                    </div>
                  </label>

                  {/* Phone */}
                  <label className="block">
                    <span className="text-sm font-medium text-gray-200">Phone Number</span>
                    <div className="relative mt-1">
                      <input
                        type="tel"
                        name="phone"
                        value={member.phone}
                        onChange={(e) => handleInputChange(e, index)}
                        className="block w-full px-4 py-3 rounded-xl bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:border-secondary focus:ring-secondary transition-colors"
                        placeholder="Enter phone number"
                      />
                    </div>
                  </label>

                  {/* College */}
                  <label className="block">
                    <span className="text-sm font-medium text-gray-200">College</span>
                    <div className="relative mt-1">
                      <input
                        type="text"
                        name="college"
                        value={member.college}
                        onChange={(e) => handleInputChange(e, index)}
                        className="block w-full px-4 py-3 rounded-xl bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:border-secondary focus:ring-secondary transition-colors"
                        placeholder="Enter college name"
                      />
                    </div>
                  </label>

                  {/* Year */}
                  <label className="block">
                    <span className="text-sm font-medium text-gray-200">Year</span>
                    <div className="relative mt-1">
                      <select
                        name="year"
                        value={member.year}
                        onChange={(e) => handleInputChange(e, index)}
                        className="block w-full px-4 py-3 rounded-xl bg-white/10 border border-gray-600 text-white focus:border-secondary focus:ring-secondary transition-colors appearance-none"
                      >
                        <option value="">Select Year</option>
                        <option value="1">1st Year</option>
                        <option value="2">2nd Year</option>
                        <option value="3">3rd Year</option>
                        <option value="4">4th Year</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <ArrowRight className="h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            ))}
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <label className="block text-sm font-medium text-gray-200">
              Project Idea
              <textarea
                name="projectIdea"
                value={formData.projectIdea}
                onChange={handleInputChange}
                rows="4"
                className="mt-1 block w-full rounded-xl bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:border-secondary focus:ring-secondary transition-colors"
                placeholder="Describe your project idea..."
              />
            </label>

            <label className="block text-sm font-medium text-gray-200">
              Tech Stack
              <textarea
                name="techStack"
                value={formData.techStack}
                onChange={handleInputChange}
                rows="3"
                className="mt-1 block w-full rounded-xl bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:border-secondary focus:ring-secondary transition-colors"
                placeholder="List the technologies you plan to use..."
              />
            </label>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <AnimatedSection className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-white mb-4"
          >
            Register Your Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg"
          >
            Join IIC Quest 2.0 and showcase your innovation
          </motion.p>
        </div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex justify-between items-center">
            {['Team Details', 'Member Information', 'Project Details'].map((label, index) => (
              <div key={label} className="flex-1">
                <div className="relative">
                  <div
                    className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center ${
                      step > index
                        ? 'bg-secondary text-white'
                        : step === index + 1
                        ? 'bg-secondary/20 text-secondary border-2 border-secondary'
                        : 'bg-gray-700 text-gray-400'
                    }`}
                  >
                    {index + 1}
                  </div>
                  <div className="text-center mt-2">
                    <span
                      className={`text-sm font-medium ${
                        step === index + 1 ? 'text-secondary' : 'text-gray-400'
                      }`}
                    >
                      {label}
                    </span>
                  </div>
                </div>
                {index === 0 && (
                  <div
                    className={`absolute top-4 left-0 right-0 h-0.5 mx-auto w-full max-w-[200px] ${
                      step > 1 ? 'bg-secondary' : 'bg-gray-700'
                    }`}
                  />
                )}
                {index === 1 && (
                  <div
                    className={`absolute top-4 left-0 right-0 h-0.5 mx-auto w-full max-w-[200px] ${
                      step > 2 ? 'bg-secondary' : 'bg-gray-700'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/10"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            {renderStep()}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-8 border-t border-gray-700">
              {step > 1 && (
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="inline-flex items-center px-6 py-3 rounded-xl bg-gray-800 text-white hover:bg-gray-700 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Previous
                </button>
              )}
              <div className={step === 1 ? 'ml-auto' : ''}>
                {step < 2 ? (
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-secondary via-secondary-light to-secondary text-white hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    Next Step
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="inline-flex items-center px-8 py-3 rounded-xl bg-gradient-to-r from-secondary via-secondary-light to-secondary text-white hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    <Rocket className="w-5 h-5 mr-2" />
                    Submit Registration
                  </button>
                )}
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default Registration;
