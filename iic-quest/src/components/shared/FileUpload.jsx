import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, X, File, CheckCircle, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FileUpload({ 
  onFileSelect, 
  maxSize = 5242880, // 5MB
  acceptedTypes = {
    'application/pdf': ['.pdf'],
    'application/msword': ['.doc'],
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
    'image/*': ['.png', '.jpg', '.jpeg']
  },
  maxFiles = 1
}) {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState('');

  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    if (rejectedFiles.length > 0) {
      const errors = rejectedFiles[0].errors.map(err => {
        if (err.code === 'file-too-large') return 'File is too large. Maximum size is 5MB.';
        if (err.code === 'file-invalid-type') return 'Invalid file type.';
        return err.message;
      });
      setError(errors[0]);
      return;
    }

    setError('');
    const newFiles = acceptedFiles.map(file => ({
      file,
      preview: file.type.startsWith('image/') ? URL.createObjectURL(file) : null,
      uploading: false,
      progress: 0,
      error: null,
      success: false
    }));

    setFiles(prev => {
      const combined = [...prev, ...newFiles];
      return combined.slice(-maxFiles);
    });
    onFileSelect(acceptedFiles);
  }, [maxFiles, onFileSelect]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxSize,
    accept: acceptedTypes,
    maxFiles,
  });

  const removeFile = (index) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="w-full">
      <div
        {...getRootProps()}
        className={`relative border-2 border-dashed rounded-lg p-6 transition-colors
          ${isDragActive 
            ? 'border-primary bg-primary-50 dark:bg-primary-950/50' 
            : 'border-gray-300 dark:border-gray-700 hover:border-primary dark:hover:border-primary-400'
          }
        `}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center justify-center space-y-3 text-center">
          <Upload className="w-8 h-8 text-gray-400 dark:text-gray-500" />
          <div className="text-sm text-gray-600 dark:text-gray-400">
            <span className="font-medium text-primary dark:text-primary-400">
              Click to upload
            </span>{' '}
            or drag and drop
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-500">
            PDF, DOC, DOCX or images up to 5MB
          </p>
        </div>
      </div>

      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-3 flex items-center gap-2 text-sm text-red-600 dark:text-red-400"
        >
          <AlertCircle className="w-4 h-4" />
          {error}
        </motion.div>
      )}

      <AnimatePresence>
        {files.map((file, index) => (
          <motion.div
            key={file.file.name}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-3 relative flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
          >
            <div className="flex-shrink-0">
              {file.preview ? (
                <img
                  src={file.preview}
                  alt="Preview"
                  className="w-10 h-10 object-cover rounded"
                />
              ) : (
                <File className="w-10 h-10 text-gray-400 dark:text-gray-500" />
              )}
            </div>
            <div className="ml-3 flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                {file.file.name}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {(file.file.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
            <div className="ml-4 flex-shrink-0 flex items-center space-x-2">
              {file.success && (
                <CheckCircle className="w-5 h-5 text-green-500" />
              )}
              <button
                onClick={() => removeFile(index)}
                className="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
