import React from "react";

const LoginForm = ({ register, errors, onSubmit }) => {
  return (
    <div className="flex flex-col space-y-4">
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

      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" {...register('rememberMe')} className="w-4 h-4 rounded accent-pink-500" />
          <span className="text-gray-600">Remember me</span>
        </label>
        <button type="button" className="text-pink-500 hover:text-pink-600 font-medium">
          Forgot Password?
        </button>
      </div>

      <button
        onClick={onSubmit}
        type="button"
        className="mt-2 bg-gradient-to-r from-[#f43f5e] via-[#db2777] to-[#ef4444] text-white font-semibold py-3.5 rounded-xl"
      >
        Sign In
      </button>
    </div>
  );
};

export default LoginForm;
