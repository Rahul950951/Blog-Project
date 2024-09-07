import React from 'react'
import Banner from '../components/Banner'
import BlogPage from '../components/BlogPage'

const Home = () => {
  return (
    <div>
      <Banner/>
      <div className='mx-w-7xl mx-quto'>
        <BlogPage/>
      </div>
    </div>
  )
}

export default Home
