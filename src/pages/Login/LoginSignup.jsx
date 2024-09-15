import React, { useState } from 'react';
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa6";

const LoginSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
  };

  return (
    <div className="h-screen bg-cover bg-center flex justify-center items-center" style={{ backgroundImage: "url('path-to-your-background-image.jpg')" }}>
      <div className="bg-white bg-opacity-50 p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-center mb-6">
          {/* Logo */}
          <img src="path-to-your-logo.png" alt="Logo" className="h-12 w-12" />
        </div>
        <h2 className="text-2xl font-semibold text-center mb-6">Login / Signup</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input 
              type="email" 
              placeholder="Email address" 
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-3 flex items-center"
              onClick={togglePasswordVisibility}
            >
              {/* Add an eye icon here */}
              {showPassword ? <FaRegEyeSlash /> : <MdOutlineRemoveRedEye />}
            </button>
          </div>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Confirm password"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-3 flex items-center"
              onClick={togglePasswordVisibility}
            >
              {/* Add an eye icon here */}
              {showPassword ? <FaRegEyeSlash /> : <MdOutlineRemoveRedEye />}
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white p-3 rounded-lg hover:bg-gray-500 transition duration-300"
          >
            Confirm
          </button>
        </form>
        <div className="mt-6 text-center">
          <button className="border p-2 rounded-lg">
            Select Language
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
