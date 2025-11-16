import React from "react";

const RegisterForm = ({ register, errors, onSubmit }) => {
  return (
    <div className="flex flex-col space-y-4">
      
      <div className="relative">
        <input
          type="text"
          placeholder="Full Name"
          {...register('name', {
            required: 'Name is required',
            minLength: { value: 2, message: 'Name must be at least 2 characters' }
          })}
          className="w-full border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-pink-400 bg-gray-50 focus:bg-white"
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
      </div>

      <div className="relative">
        <input
          type="tel"
          placeholder="Contact Number"
          {...register('contact', {
            required: 'Contact number is required',
            pattern: { value: /^[0-9]{10}$/, message: 'Enter a valid 10-digit phone number' }
          })}
          className="w-full border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-pink-400 bg-gray-50 focus:bg-white"
        />
        {errors.contact && <p className="text-red-500 text-xs mt-1">{errors.contact.message}</p>}
      </div>

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
          className="w-full border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-pink-400 bg-gray-50 focus:bg-white"
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
      </div>

      <div className="relative">
        <input
          type="password"
          placeholder="Password"
          {...register('password', {
            required: 'Password is required',
            minLength: { value: 6, message: 'Password must be at least 6 characters' }
          })}
          className="w-full border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-pink-400 bg-gray-50 focus:bg-white"
        />
        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
      </div>

      <button
        onClick={onSubmit}
        type="button"
        className="mt-2 bg-gradient-to-r from-[#f43f5e] via-[#db2777] to-[#ef4444] text-white font-semibold py-3.5 rounded-xl"
      >
        Create Account
      </button>

    </div>
  );
};

export default RegisterForm;
