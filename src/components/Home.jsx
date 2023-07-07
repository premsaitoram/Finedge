import React from 'react'
import Typed from 'react-typed'

const Home = () => {
  return (
      <div className='home h-screen flex flex-col justify-center items-center bg-[#000300]  text-white'>
          <div className='max-w-[800px] mx-auto text-center'>
          
              <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Welcome to FinEdge</h1>
              <p className='text-[#00df9a] font-bold p-2'> Revolutionizing Cross-Border Payments for Individuals and Businesses.</p>
              <div className='flex justify-center items-center'>
                  <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Fast transactions for</p>
                  <Typed
                      className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
                      strings={['individuals', 'businesses',]} typeSpeed={120} backSpeed={140} loop
                  />
              </div>
          </div>
    </div>
  )
}

export default Home