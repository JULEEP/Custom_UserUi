import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Used for navigation after successful login

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    error: '',
    loading: false
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormData((prevData) => ({ ...prevData, loading: true, error: '' })); // Set loading state and reset error

    try {
      const response = await axios.post('http://localhost:4000/api/users/login', {
        email: formData.email,
        password: formData.password
      });

      if (response.data.token) {
        // Store the access token (you can use localStorage, context, or state management as needed)
        localStorage.setItem('accessToken', response.data.token);
        localStorage.setItem('refreshToken', response.data.refreshToken);

        // Redirect to the home page after successful login
        navigate('/');
      }
    } catch (error) {
      setFormData((prevData) => ({
        ...prevData,
        error: error.response?.data?.message || 'Login failed. Please try again.',
        loading: false
      }));
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
        <h1 className="text-1xl font-bold text-center mb-4">Login with YourPrintify</h1>
        <form onSubmit={handleSubmit}>
          {/* Email input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password input */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Error message */}
          {formData.error && <div className="text-red-500 text-sm mb-4">{formData.error}</div>}

          {/* Submit button */}
          <button
            type="submit"
            className={`w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition duration-200 ${formData.loading ? 'cursor-not-allowed opacity-50' : ''}`}
            disabled={formData.loading}
          >
            {formData.loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        {/* Sign Up link */}
        <div className="mt-4 text-center">
          <p className="text-blue-500 cursor-pointer" onClick={() => navigate("/register")}>
            Don't have an account? Sign Up
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
