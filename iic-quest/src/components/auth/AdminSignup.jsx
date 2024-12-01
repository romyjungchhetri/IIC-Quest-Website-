import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { motion } from 'framer-motion';
import { Mail, Lock, User, Eye, EyeOff, AlertCircle, CheckCircle2, ArrowLeft } from 'lucide-react';
import toast from 'react-hot-toast';

export default function AdminSignup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const errors = [];
    if (!formData.name.trim()) {
      errors.push('Name is required');
    }
    if (!formData.email.endsWith('@admin.iicquest.com')) {
      errors.push('Please use an admin email address (@admin.iicquest.com)');
    }
    if (formData.password.length < 6) {
      errors.push('Password must be at least 6 characters long');
    }
    if (formData.password !== formData.confirmPassword) {
      errors.push('Passwords do not match');
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (errors.length > 0) {
      errors.forEach(error => toast.error(error));
      return;
    }

    try {
      setLoading(true);
      await signup(formData.email, formData.password, formData.name);
      toast.success('Admin account created successfully!');
      navigate('/admin');
    } catch (error) {
      console.error('Error signing up:', error);
      toast.error(error.message || 'Failed to create admin account');
    } finally {
      setLoading(false);
    }
  };

  const passwordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    return strength;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 pt-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full space-y-4 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm p-6 rounded-2xl shadow-2xl"
      >
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold text-gray-900 dark:text-white text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600"
          >
            Create Admin Account
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400"
          >
            Sign up with your admin credentials
          </motion.p>
        </div>

        <motion.form 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-4 space-y-3" 
          onSubmit={handleSubmit}
        >
          {/* Name Input */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 block">
              Full Name
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400 group-focus-within:text-primary transition-colors duration-200" />
              </div>
              <input
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="appearance-none relative block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent sm:text-sm dark:bg-gray-700/50 transition-all duration-200"
                placeholder="John Doe"
              />
            </div>
          </motion.div>

          {/* Email Input */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 block">
              Email Address
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-primary transition-colors duration-200" />
              </div>
              <input
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="appearance-none relative block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent sm:text-sm dark:bg-gray-700/50 transition-all duration-200"
                placeholder="admin@admin.iicquest.com"
              />
            </div>
          </motion.div>

          {/* Password Input */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
          >
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 block">
              Password
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-primary transition-colors duration-200" />
              </div>
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                required
                value={formData.password}
                onChange={handleChange}
                className="appearance-none relative block w-full pl-10 pr-10 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent sm:text-sm dark:bg-gray-700/50 transition-all duration-200"
                placeholder="••••••••"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200" />
                )}
              </button>
            </div>
            {/* Password Strength Indicator */}
            <div className="mt-2">
              <div className="h-1.5 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ 
                    width: `${(passwordStrength(formData.password) / 4) * 100}%`,
                  }}
                  transition={{ duration: 0.3 }}
                  className={`h-full transition-all ${
                    passwordStrength(formData.password) === 0 ? 'w-0' :
                    passwordStrength(formData.password) === 1 ? 'bg-red-500' :
                    passwordStrength(formData.password) === 2 ? 'bg-yellow-500' :
                    passwordStrength(formData.password) === 3 ? 'bg-blue-500' :
                    'bg-green-500'
                  }`}
                />
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 flex items-center">
                <span className={`mr-1 ${
                  passwordStrength(formData.password) === 0 ? 'text-gray-400' :
                  passwordStrength(formData.password) === 1 ? 'text-red-500' :
                  passwordStrength(formData.password) === 2 ? 'text-yellow-500' :
                  passwordStrength(formData.password) === 3 ? 'text-blue-500' :
                  'text-green-500'
                }`}>●</span>
                Password strength: {
                  passwordStrength(formData.password) === 0 ? 'Too weak' :
                  passwordStrength(formData.password) === 1 ? 'Weak' :
                  passwordStrength(formData.password) === 2 ? 'Medium' :
                  passwordStrength(formData.password) === 3 ? 'Strong' :
                  'Very strong'
                }
              </p>
            </div>
          </motion.div>

          {/* Confirm Password Input */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
          >
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 block">
              Confirm Password
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-primary transition-colors duration-200" />
              </div>
              <input
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                className="appearance-none relative block w-full pl-10 pr-10 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent sm:text-sm dark:bg-gray-700/50 transition-all duration-200"
                placeholder="••••••••"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200" />
                )}
              </button>
            </div>
            {formData.confirmPassword && formData.password !== formData.confirmPassword && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-1 flex items-center text-xs text-red-500"
              >
                <AlertCircle className="h-4 w-4 mr-1" />
                <p>Passwords do not match</p>
              </motion.div>
            )}
            {formData.confirmPassword && formData.password === formData.confirmPassword && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-1 flex items-center text-xs text-green-500"
              >
                <CheckCircle2 className="h-4 w-4 mr-1" />
                <p>Passwords match</p>
              </motion.div>
            )}
          </motion.div>

          {/* Create Account Button */}
          <motion.div 
            className="pt-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                'Create Account'
              )}
            </button>
          </motion.div>

          {/* Login Link */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <Link
              to="/login"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-200 inline-flex items-center"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Already have an account? Login
            </Link>
          </motion.div>
        </motion.form>
      </motion.div>
    </div>
  );
}
