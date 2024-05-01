'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export default function DashboardPage() {
  const router = useRouter();
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const baseUrl = 'http://localhost:3000/users'; // Update with your API base URL

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
      const response = await fetch(baseUrl);
      const users = await response.json();
      const authenticatedUser = authenticateUser(users, sessionToken);
      if (authenticatedUser) {
        setUserDetails(authenticatedUser.userData);

      } else {
        throw new Error('User data not found');
      }
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const authenticateUser = (users, sessionToken) => {
    return users.find(user => user.authenticated && user.sessionToken === sessionToken);
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
            <p>Name: {userDetails.name}</p>
            <p>Email: {userDetails.email}</p>
            <p>Age: {userDetails.age}</p>
            {/* Display other user details as needed */}
          </div>
        )
      )}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
