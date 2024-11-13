"use client"
import { blog_data } from '@/Assets/assets'
import React, { useEffect, useState } from 'react'
import BlogItem from './BlogItem'
import axios from 'axios'
import { toast } from 'react-toastify'

const Bloglist = () => {

    const [menu, setMenu] = useState("All");
    const [blog, setBlog] = useState([]);

    const fetchblogs = async () => {
        const response = await axios('/api/blog');

        if (response.status === 200) {
            toast.success(response.data.message)
            setBlog(response.data.Data);
        }
    }

    useEffect(() => {
        fetchblogs();
    }, []);
    return (
        <div className=''>
            <div className='flex justify-center gap-6 my-10'>
                <button onClick={() => setMenu("All")} className={menu === "All" ? 'bg-black text-white py-1 px-4 rounded-sm' : ""}>All</button>
                <button onClick={() => setMenu("Technology")} className={menu === "Technology" ? 'bg-black text-white py-1 px-4 rounded-sm' : ""}>Technology</button>
                <button onClick={() => setMenu("Startup")} className={menu === "Startup" ? 'bg-black text-white py-1 px-4 rounded-sm' : ""}>Startup</button>
                <button onClick={() => setMenu("Lifestyle")} className={menu === "Lifestyle" ? 'bg-black text-white py-1 px-4 rounded-sm' : ""}>Lifestyle</button>
            </div>
            <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
                {blog.filter((item) => menu === "All" ? true : item.category === menu).map((item, index) => {
                    return <BlogItem key={index} image={item.image} title={item.title} description={item.description} category={item.category} id={item._id} />
                })}
            </div>

        </div>
    )
}

export default Bloglist
