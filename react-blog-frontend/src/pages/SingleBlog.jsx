import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { FaClock, FaUser } from "react-icons/fa"
import SideBar from '../components/SideBar';
import Slider from '../components/Slider';
const SingleBlog = () => {
    const data = useLoaderData();
    const {title, image, category, author, published_date, reading_time, content} = data [0];

    
  return (
    <div>
      {/* <div className='py-40 bg-black text-center text-white px-4'>
        <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'> Single Bolg Page</h2>
      </div> */}
      <Slider/>
      {/* Blog Details */}
      <div className='max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12'>
        <div className='lg:w/4 mx-auto'>
           <div>
            <img src={image} alt="" className='w-full mx-auto rounded '/>
            <h2 className='text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer'>{title}</h2>
            <p className='mb-3 text-gray-600'><FaUser className='inline-flex items-center mr-2'/>{author} | {published_date}</p>
            <p className='mb-3 text-gray-600'><FaClock className='inline-flex items-center mr-2'/>{reading_time}</p>
            <p className='text-base text-gray-500 mb-6'>{content}</p>
              <div className='text-base text-gray-500'> 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo facilis, qui fugit eum vel tempora, ipsam impedit nisi iusto reiciendis obcaecati hic aperiam accusantium voluptatem distinctio ad voluptatibus quibusdam rem?</p> <br />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus doloribus, temporibus in repellendus qui reiciendis officia blanditiis autem itaque provident atque dicta iste illo quasi labore nesciunt aspernatur libero? Assumenda?</p><br />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat quis voluptatum quia quod, ad accusamus libero corporis voluptate vero, consectetur facere error repellendus quisquam omnis ducimus ratione illum rerum velit.</p><br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo facilis, qui fugit eum vel tempora, ipsam impedit nisi iusto reiciendis obcaecati hic aperiam accusantium voluptatem distinctio ad voluptatibus quibusdam rem?</p> <br />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus doloribus, temporibus in repellendus qui reiciendis officia blanditiis autem itaque provident atque dicta iste illo quasi labore nesciunt aspernatur libero? Assumenda?</p><br />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat quis voluptatum quia quod, ad accusamus libero corporis voluptate vero, consectetur facere error repellendus quisquam omnis ducimus ratione illum rerum velit.</p><br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo facilis, qui fugit eum vel tempora, ipsam impedit nisi iusto reiciendis obcaecati hic aperiam accusantium voluptatem distinctio ad voluptatibus quibusdam rem?</p> <br />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus doloribus, temporibus in repellendus qui reiciendis officia blanditiis autem itaque provident atque dicta iste illo quasi labore nesciunt aspernatur libero? Assumenda?</p><br />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat quis voluptatum quia quod, ad accusamus libero corporis voluptate vero, consectetur facere error repellendus quisquam omnis ducimus ratione illum rerum velit.</p><br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo facilis, qui fugit eum vel tempora, ipsam impedit nisi iusto reiciendis obcaecati hic aperiam accusantium voluptatem distinctio ad voluptatibus quibusdam rem?</p> <br />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus doloribus, temporibus in repellendus qui reiciendis officia blanditiis autem itaque provident atque dicta iste illo quasi labore nesciunt aspernatur libero? Assumenda?</p><br />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat quis voluptatum quia quod, ad accusamus libero corporis voluptate vero, consectetur facere error repellendus quisquam omnis ducimus ratione illum rerum velit.</p><br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo facilis, qui fugit eum vel tempora, ipsam impedit nisi iusto reiciendis obcaecati hic aperiam accusantium voluptatem distinctio ad voluptatibus quibusdam rem?</p> <br />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus doloribus, temporibus in repellendus qui reiciendis officia blanditiis autem itaque provident atque dicta iste illo quasi labore nesciunt aspernatur libero? Assumenda?</p><br />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat quis voluptatum quia quod, ad accusamus libero corporis voluptate vero, consectetur facere error repellendus quisquam omnis ducimus ratione illum rerum velit.</p><br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo facilis, qui fugit eum vel tempora, ipsam impedit nisi iusto reiciendis obcaecati hic aperiam accusantium voluptatem distinctio ad voluptatibus quibusdam rem?</p> <br />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus doloribus, temporibus in repellendus qui reiciendis officia blanditiis autem itaque provident atque dicta iste illo quasi labore nesciunt aspernatur libero? Assumenda?</p><br />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat quis voluptatum quia quod, ad accusamus libero corporis voluptate vero, consectetur facere error repellendus quisquam omnis ducimus ratione illum rerum velit.</p><br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo facilis, qui fugit eum vel tempora, ipsam impedit nisi iusto reiciendis obcaecati hic aperiam accusantium voluptatem distinctio ad voluptatibus quibusdam rem?</p> <br />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus doloribus, temporibus in repellendus qui reiciendis officia blanditiis autem itaque provident atque dicta iste illo quasi labore nesciunt aspernatur libero? Assumenda?</p><br />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat quis voluptatum quia quod, ad accusamus libero corporis voluptate vero, consectetur facere error repellendus quisquam omnis ducimus ratione illum rerum velit.</p><br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo facilis, qui fugit eum vel tempora, ipsam impedit nisi iusto reiciendis obcaecati hic aperiam accusantium voluptatem distinctio ad voluptatibus quibusdam rem?</p> <br />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus doloribus, temporibus in repellendus qui reiciendis officia blanditiis autem itaque provident atque dicta iste illo quasi labore nesciunt aspernatur libero? Assumenda?</p><br />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat quis voluptatum quia quod, ad accusamus libero corporis voluptate vero, consectetur facere error repellendus quisquam omnis ducimus ratione illum rerum velit.</p><br />
              </div>
           </div>
        </div>
        <div className='lg:w-1/2'>
            <SideBar/>
        </div>

      </div>
    </div>
  )
}

export default SingleBlog
