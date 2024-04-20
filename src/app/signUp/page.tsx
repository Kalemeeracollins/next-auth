"use client"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from 'react';
import {useRouter} from 'next/navigation'

function SignUp() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    // Make API request to your backend to signup user
    try {
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userName, email, password }),
      });
      if (response.ok) {
        // Redirect user to dashboard or profile page
        router.push('/dashboard');
      } else {
        // Handle error
        router.push('/signIn');
      }
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <form onSubmit={handleSignup}>
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
          <Label htmlFor="email">Email</Label>
          <Input id="email" 
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email" 
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
        
    
        <Button type="submit" className="w-full">Sign Up</Button>
      </div>
    </div>
    </form>
  );
}

export default SignUp;
