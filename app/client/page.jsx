'use client'
import React from 'react'
import { signOut, useSession } from 'next-auth/react';

const Client = () => {

  const { data: session, status } = useSession()

  if (status === 'loading') {
    return <p>Loading...</p>
  }

  if (status === 'unauthenticated') {
    return <p>Access denied. Please login to view this page.</p>
  }

  return (
    <div>
      <h1>Welcome to the Dashboard, {session.user.name}</h1>
      <button onClick={() => signOut({ callbackUrl: '/' })}>Log out</button>
    </div>
  )
}

export default Client