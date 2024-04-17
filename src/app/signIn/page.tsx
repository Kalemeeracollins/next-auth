'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export default function LoginPage() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false); // State for success message
  const router = useRouter();
  const baseUrl = "http://localhost:3000/users";
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Here you would typically send a request to your server to authenticate the user
      const response = await fetch(baseUrl);
      const users = await response.json();

      // Check if the provided email exists in the fetched user data
      const existingUser = users.find(user => user.userName === userName);

      if (existingUser) {
        // Account exists, proceed with authentication
        if (existingUser.password === password) {
          // Login successful, set session token in cookie and redirect to dashboard
          const sessionToken = 'your-session-token'; // Replace with actual session token
          Cookies.set('sessionToken', sessionToken, { expires: 1, path: '/' });
          setSuccess(true); // Set success message
          setTimeout(() => {
            setSuccess(false); // Clear success message after some time
          }, 5000);
          router.push('/dashboard');
        } else {
          // Password incorrect, display error message
          setError('Incorrect password');
        }
      } else {
        // Account does not exist, display error message
        setError('Account not found');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setError('An error occurred while logging in');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div className="mb-6">
          <label htmlFor="userName" className="block text-gray-700 text-sm font-bold mb-2">Username</label>
          <input
            id="userName"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Username"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Password"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Sign In</button>
        </div>
        {error && <p className="text-red-500 text-xs italic mt-2">{error}</p>}
        {success && <p className="text-green-500 text-xs italic mt-2">Login successful!</p>} {/* Success message */}
      </form>
    </div>
  );
}
