'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export default function DashboardPage() {
  const router = useRouter();
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const baseUrl = 'http://localhost:3000'; // Update with your API base URL

  useEffect(() => {
    const sessionToken = Cookies.get('sessionToken');
    if (!sessionToken) {
      router.push('/signIn');
    } else {
      fetchUserDetails(sessionToken);
    }
  }, []);

  const fetchUserDetails = async (sessionToken) => {
    try {
      const response = await fetch(`${baseUrl}/user`, {
        headers: {
          Authorization: `Bearer ${sessionToken}`
        }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch user details');
      }
      const userData = await response.json();
      setUserDetails(userData);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const handleLogout = () => {
    Cookies.remove('sessionToken');
    router.push('/signIn');
  };

  return (
    <div>
      <h1>Dashboard</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        userDetails && (
          <div>
            <p>Email: {userDetails.email}</p>
            {/* Display other user details as needed */}
          </div>
        )
      )}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
