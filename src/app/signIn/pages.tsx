"use client"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from 'react';
import {useRouter} from 'next/navigation'

export default function SignIn() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/users');
      const users = await response.json();

      // Check if the provided email exists in the fetched user data
      const existingUser = users.find(user => user.userName === userName);

      if (existingUser) {
        // Account exists, proceed with authentication
        if (existingUser.password === password) {
          // Login successful, redirect to dashboard
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
    <div>
    <form onSubmit={handleLogin}>
    <div className="mx-auto max-w-sm space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Sign Up</h1>
        <p className="text-gray-500 dark:text-gray-400">Enter your information to create an account</p>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input 
          id="name" 
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="userName"    
          required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input 
          id="password" 
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required />
        </div>
        
        <div className="flex items-center space-x-2">
          {error && <p>{error}</p>}
        </div>
        <Button type="submit" className="w-full">Sign Up</Button>
      </div>
    </div>
    </form>
    </div>
  );
};
