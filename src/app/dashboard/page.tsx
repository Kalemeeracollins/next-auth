'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export default function DashboardPage() {
  const router = useRouter();
  const [userDetails, setUserDetails] = useState(null);
  const baseUrl = 'http://localhost:3000'; // Update with your API base URL

  useEffect(() => {
    // Check if the user is authenticated
    const sessionToken = Cookies.get('sessionToken');
    if (!sessionToken) {
      // If not authenticated, redirect to the login page
      router.push('/signIn');
    } else {
      // Fetch user details when component mounts
      fetchUserDetails(sessionToken);
    }
  }, []);

  const handleLogout = () => {
    // Remove the session token from the cookie
    Cookies.remove('sessionToken');
    // Redirect the user to the login page
    router.push('/signIn');
  };
//fetching user data
  const fetchUserDetails = async (sessionToken) => {
    try {
      const response = await fetch(`${baseUrl}`, {
        headers: {
          Authorization: `Bearer ${sessionToken}`
        }
      });
      if (response.ok) {
       
        throw new Error('Failed to fetch user details');
      }
      const userData = await response.json();
      setUserDetails(userData);

    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      {userDetails ? (
        <div>
          <p>Email: {userDetails.email}</p>
          {/* Display other user details as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
