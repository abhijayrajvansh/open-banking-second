'use client'

import Login from '@/components/pages/Login'
import React, { useEffect, useState } from 'react'
import { isAuthenticated } from '@/lib/auth'
import { redirect } from 'next/navigation';

const page = () => {
  const [user, setUser] = useState(false)

  useEffect(() => {
    const isLoggedIn = isAuthenticated();
    setUser(isLoggedIn)
  }, [])
    
  if (user) redirect('/');
    
  return <Login />
  
}

export default page
