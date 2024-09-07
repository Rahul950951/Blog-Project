import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';

const SideBar = () => {
    const [PopularBlogs, setPoplarBlogs] = useState([]);

    useEffect(()=>{
        fetch("https://blog-project-123.onrender.com/blogs").then(res => res.json()).then(data => setPoplarBlogs(data.slice(0,15)))
    }, [])


  return (
    <div>
      <div>
        <h3 className='text-2xl font-semibold px-4'>Letest Blogs</h3>
        <div>
            {
                PopularBlogs.slice(0, 5).map(blog => <div key={blog.id} className='my-5 border-b-2'>
                    <h4 className='text-base pb-2'>{blog.title}</h4>
                    <Link to="/" className='font-medium hover:text-orange-500 inline-flex items-center py-1'>Read more <FaArrowRight className='mt-1 ml-2'/></Link>
                </div>)
            }
        </div>
      </div>
          {/* Popular Blogs */}
      <div>
        <h3 className='text-2xl font-semibold px-4 mt-20'>Popular Blogs</h3>
        <div>
            {
                PopularBlogs.slice(6, 10).map(blog => <div key={blog.id} className='my-5 border-b-2'>
                    <h4 className='text-base pb-2'>{blog.title}</h4>
                    <Link to="/" className='font-medium hover:text-orange-500 inline-flex items-center py-1'>Read more <FaArrowRight className='mt-1 ml-2'/></Link>
                </div>)
            }
        </div>
      </div>
    </div>
  )
}

export default SideBar

