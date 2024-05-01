'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export default function LoginPage() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const baseUrl = "http://localhost:3000/users";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state when form is submitted

    try {
      const response = await fetch(baseUrl);
      const users = await response.json();

      const existingUser = users.find(user => user.userName === userName);

      if (existingUser) {
        if (existingUser.password === password) {
          const sessionToken = 'your-session-token';
          Cookies.set('sessionToken', sessionToken, { expires: 1, path: '/' });
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
          }, 5000);
          router.push('/dashboard');
        } else {
          setError('Incorrect username or password'); // More specific error message
        }
      } else {
        setError('Account not found'); // More specific error message
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setError('An error occurred while logging in');
    } finally {
      setLoading(false); // Reset loading state after form submission
    }
  };

  // Use effect to clear error and success messages after a certain time
  useEffect(() => {
    let timeout;
    if (error || success) {
      timeout = setTimeout(() => {
        setError('');
        setSuccess(false);
      }, 5000);
    }
    return () => clearTimeout(timeout);
  }, [error, success]);

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
          <button type="submit" className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}>
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </div>
        {error && <p className="text-red-500 text-xs italic mt-2">{error}</p>}
        {success && <p className="text-green-500 text-xs italic mt-2">Login successful!</p>}
      </form>
    </div>
  );
}
