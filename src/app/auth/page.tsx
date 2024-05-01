'use client'
import React, { useEffect, useState } from 'react';

const AuthenticatedUsers = () => {
  const [authenticatedUsers, setAuthenticatedUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:8000/users');
      const data = await response.json();
      const filteredUsers = data.users.filter(user => user.authenticated);
      setAuthenticatedUsers(filteredUsers);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Authenticated Users</h1>
      <ul>
        {authenticatedUsers.map(user => (
          <li key={user.userData.email}>
            <p>Name: {user.userData.name}</p>
            <p>Email: {user.userData.email}</p>
            <p>Age: {user.userData.age}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AuthenticatedUsers;
