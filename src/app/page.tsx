'use client';
import { SignedIn, SignedOut, SignInButton } from '@clerk/clerk-react'
import { SignOutButton } from '@clerk/nextjs'
import React from 'react'
// import { SignInButton } from '@clerk/nextjs'


const HomePage = () => {
  return (
    <div>
    HomePage
    <SignedOut>
      <SignInButton/>
    </SignedOut>

    <SignedIn>
      <SignOutButton/>
    </SignedIn>
    </div>
  )
}

export default HomePage
