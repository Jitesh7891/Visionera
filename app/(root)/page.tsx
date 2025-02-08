import { UserButton } from '@clerk/nextjs'
import React from 'react'

const Home = () => {
  return (
    <div>Hello this is homepage!
      <UserButton/>
    </div>
  )
}

export default Home