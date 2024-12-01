import { motion } from 'framer-motion';
import { useState } from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

const AnimatedFormField = ({
  label,
  type = 'text',
  name,
  value,
  onChange,
  required = false,
  validation = {},
  placeholder,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [error, setError] = useState('');
  const [isValid, setIsValid] = useState(false);

  const validate = (value) => {
    if (required && !value) {
      setError(`${label} is required`);
      setIsValid(false);
      return false;
    }

    if (validation.pattern && !validation.pattern.test(value)) {
      setError(validation.message || 'Invalid format');
      setIsValid(false);
      return false;
    }

    if (validation.minLength && value.length < validation.minLength) {
      setError(`Minimum ${validation.minLength} characters required`);
      setIsValid(false);
      return false;
    }

    if (type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setError('Invalid email address');
      setIsValid(false);
      return false;
    }

    setError('');
    setIsValid(true);
    return true;
  };

  const handleChange = (e) => {
    const newValue = e.target.value;
    onChange(e);
    validate(newValue);
  };

  const handleBlur = (e) => {
    setIsFocused(false);
    validate(e.target.value);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="relative"
    >
      <label
        htmlFor={name}
        className={`block text-sm font-medium transition-colors duration-200 ${
          isFocused ? 'text-primary' : 'text-gray-700'
        } mb-1`}
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      
      <div className="relative">
        <motion.input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={handleBlur}
          placeholder={placeholder}
          className={`w-full px-4 py-2.5 rounded-lg border transition-all duration-200 ${
            error
              ? 'border-red-300 focus:ring-2 focus:ring-red-200 focus:border-red-400'
              : isValid
              ? 'border-green-300 focus:ring-2 focus:ring-green-200 focus:border-green-400'
              : 'border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary'
          }`}
        />
        
        <motion.div
          initial={false}
          animate={{ scale: error || isValid ? 1 : 0, opacity: error || isValid ? 1 : 0 }}
          className="absolute right-3 top-1/2 transform -translate-y-1/2"
        >
          {error ? (
            <AlertCircle className="w-5 h-5 text-red-500" />
          ) : isValid ? (
            <CheckCircle2 className="w-5 h-5 text-green-500" />
          ) : null}
        </motion.div>
      </div>

      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-sm text-red-500 mt-1"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default AnimatedFormField;
