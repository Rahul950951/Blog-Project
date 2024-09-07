import React, { useEffect, useState } from 'react'
import BlogCards from './BlogCards';
import Pagination from './Pagination';
import CategoriSelection from './CategoriSelection';
import SideBar from './SideBar';

const BlogPage = () => {
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize =12 // blog Per Page
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [activeCategory, setActiveCategory, ] = useState(null)


    useEffect(() => {
        async function fetchBlogs() {
            let url = `https://blog-project-123.onrender.com/blogs?page=${currentPage}&limit=${pageSize}`;

            // filtered by category
           if(selectedCategory){
            url +=`&category=${selectedCategory}`;
           }
            const response = await fetch(url);
            const data = await response.json();
            setBlogs(data);
        }

        fetchBlogs();
      },  [currentPage, pageSize, selectedCategory])

      // page chaging btn
      const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
      }

      const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);
        setActiveCategory(category)
      }

  return (
    <div>
        {/* Category Section */}
        <div>
          <CategoriSelection onSelectCategory={handleCategoryChange} selectedCategory={selectedCategory} activeCategory={activeCategory}/>
        </div>

        {/* Blog Card Section */}
        <div className='flex flex-col lg:flex-row gap-12'>
            <BlogCards blogs={blogs} currentPage={currentPage} selectedCategory={selectedCategory} pageSize={pageSize}/>
{/* // Side Bar Components */}
            <div>
              <SideBar/>
            </div>
        </div>

        {/* Pagination Section */}
        <div>
            <Pagination onPageChange={handlePageChange} currentPage={currentPage} blogs={blogs} pageSize={pageSize}/>
        </div>
      
    </div>
  )
}

export default BlogPage
