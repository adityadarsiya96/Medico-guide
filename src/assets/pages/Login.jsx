import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    console.log('Form Mode:', isLogin ? 'Login' : 'Register');
  };

  const handleToggle = (loginMode) => {
    setIsLogin(loginMode);
    reset();
  };

  return (
    <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-red-50 min-h-screen w-full flex items-center justify-center p-4">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-center gap-8">
        
        {/* Left Side - Illustration/Info */}
        <div className="hidden lg:flex lg:w-1/2 flex-col items-center justify-center text-center space-y-6 p-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-red-500 blur-3xl opacity-20 rounded-full"></div>
            <svg className="w-80 h-80 relative z-10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor: '#f43f5e', stopOpacity: 1}} />
                  <stop offset="50%" style={{stopColor: '#db2777', stopOpacity: 1}} />
                  <stop offset="100%" style={{stopColor: '#ef4444', stopOpacity: 1}} />
                </linearGradient>
              </defs>
              <path fill="url(#grad1)" d="M47.1,-57.1C59.9,-45.8,68.5,-29.2,71.4,-11.8C74.3,5.6,71.5,23.8,62.6,38.5C53.7,53.2,38.7,64.4,21.8,69.3C4.9,74.2,-13.9,72.8,-30.5,66.1C-47.1,59.4,-61.5,47.4,-68.3,32.1C-75.1,16.8,-74.3,-1.8,-68.4,-18.2C-62.5,-34.6,-51.5,-48.8,-38.1,-59.9C-24.7,-71,-12.4,-79,0.5,-79.6C13.4,-80.2,34.3,-68.4,47.1,-57.1Z" transform="translate(100 100)" />
            </svg>
          </div>
          <div className="space-y-4">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-red-600 bg-clip-text text-transparent">
              Welcome to Medico
            </h2>
            <p className="text-gray-600 text-lg max-w-md">
              Connect with experienced mentors and transform your healthcare career journey
            </p>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full lg:w-1/2 max-w-md">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 backdrop-blur-lg border border-gray-100">
            
            {/* Header */}
            <div className="mb-8 text-center">
              <h1 className="font-extrabold text-5xl bg-gradient-to-r from-[#f43f5e] via-[#db2777] to-[#ef4444] bg-clip-text text-transparent mb-2">
                Medico
              </h1>
              <p className="text-gray-500 text-sm">Your mentorship journey starts here</p>
            </div>

            {/* Toggle Buttons */}
            <div className="flex gap-2 mb-6 bg-gray-100 rounded-xl p-1">
              <button
                onClick={() => handleToggle(true)}
                type="button"
                className={`flex-1 py-2.5 rounded-lg font-semibold transition-all duration-200 ${
                  isLogin
                    ? 'bg-gradient-to-r from-[#f43f5e] via-[#db2777] to-[#ef4444] text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Login
              </button>
              <button
                onClick={() => handleToggle(false)}
                type="button"
                className={`flex-1 py-2.5 rounded-lg font-semibold transition-all duration-200 ${
                  !isLogin
                    ? 'bg-gradient-to-r from-[#f43f5e] via-[#db2777] to-[#ef4444] text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Register
              </button>
            </div>

            {/* Form */}
            <div className="flex flex-col space-y-4">
              {!isLogin && (
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Full Name"
                    {...register('name', { 
                      required: 'Name is required',
                      minLength: {
                        value: 2,
                        message: 'Name must be at least 2 characters'
                      }
                    })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                  )}
                </div>
              )}
              
              {!isLogin && (
                <div className="relative">
                  <input
                    type="tel"
                    placeholder="Contact Number"
                    {...register('contact', { 
                      required: 'Contact number is required',
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: 'Please enter a valid 10-digit phone number'
                      }
                    })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                  />
                  {errors.contact && (
                    <p className="text-red-500 text-xs mt-1">{errors.contact.message}</p>
                  )}
                </div>
              )}

              <div className="relative">
                <input
                  type="email"
                  placeholder="Email Address"
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Please enter a valid email address'
                    }
                  })}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                )}
              </div>

              <div className="relative">
                <input
                  type="password"
                  placeholder="Password"
                  {...register('password', { 
                    required: 'Password is required',
                    minLength: {
                      value: 6,
                      message: 'Password must be at least 6 characters'
                    }
                  })}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                />
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
                )}
              </div>

              {isLogin && (
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="checkbox" 
                      {...register('rememberMe')}
                      className="w-4 h-4 rounded accent-pink-500" 
                    />
                    <span className="text-gray-600">Remember me</span>
                  </label>
                  <button type="button" className="text-pink-500 hover:text-pink-600 font-medium">
                    Forgot Password?
                  </button>
                </div>
              )}

              <button
                onClick={handleSubmit(onSubmit)}
                type="button"
                className="mt-2 bg-gradient-to-r from-[#f43f5e] via-[#db2777] to-[#ef4444] text-white font-semibold py-3.5 rounded-xl hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                {isLogin ? 'Sign In' : 'Create Account'}
              </button>
            </div>

            {/* Footer */}
            <p className="text-center text-sm text-gray-500 mt-6">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button
                onClick={() => handleToggle(!isLogin)}
                type="button"
                className="text-pink-500 hover:text-pink-600 font-semibold"
              >
                {isLogin ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

