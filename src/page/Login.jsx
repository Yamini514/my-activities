import React, { useState } from 'react'
import { motion } from 'framer-motion' // Import Framer Motion
import Navbar from '../components/Navbar'
import technical from '../assets/images/technical.jpg' // Ensure the image is imported

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email address is invalid';
    }
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      // Submit form
      console.log('Form submitted');
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div>
      <div className='text-black'>
        <Navbar /> {/* Ensure Navbar text is styled with 'text-black' */}
      </div>
      <div
        className="bg-blue-800 container mx-auto px-4 py-16 flex items-center justify-center"
        style={{
          backgroundImage: `url(${technical})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          backgroundBlendMode: 'overlay'
        }}
      >
        <motion.div
          className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="md:w-1/2 p-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1
              className="text-4xl font-bold text-center mb-8 text-indigo-600 justify-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Login
            </motion.h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-wrap -mx-2">
                {/* Move email and password fields down */}
              </div>
              <div className="w-full px-2 mb-4">
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>
              <div className="w-full px-2 mb-4">
                <label className="block text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                />
                {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
              </div>
              <a href="/forgot-password" className="text-indigo-600 hover:underline">Forgot Password?</a>
              <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 w-full">
                Login
              </button>
              <div className="flex justify-between mt-4">
                <a href="/register" className="text-indigo-600 hover:underline">New User Register</a>
                <a href="/" className="text-indigo-600 hover:underline">Back</a>
              </div>
            </form>
          </motion.div>
          <motion.div
            className="md:w-1/2 bg-gray-100 p-8 flex flex-col justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <img src={technical} alt="Technology" className="mb-4" /> {/* Corrected image source */}
            <p className="text-gray-700">
              Stay ahead in the tech world with our cutting-edge solutions and insights. Join us to explore the latest trends and innovations in technology.
            </p>
          </motion.div>
        </motion.div>
      </div>
      <div className='bg-white shadow-md'>
        <Navbar style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }} />
      </div>
    </div>
  )
}

export default Login;