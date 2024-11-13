"use client"
import BlogTableItem from '@/Components/AdminComponents/BlogTableItem'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const page = () => {

    const [blogs, setBlogs] = useState([]);


    const fetchBlogs = async () => {
        try {
            const response = await axios.get('/api/blog');

            if (response.status === 200) {
                // toast.success(response.data.message)
                setBlogs(response.data.Data);
            }
        } catch (error) {
            console.log(error);

        }
    }

    const deleteBlog = async (id) => {
        try {
            console.log(id);
            const response = await axios.delete('/api/blog', {
                params: { id }
            });

            if (response.status === 200) {
                toast.success(response.data.message);
            }
            fetchBlogs();
        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        fetchBlogs();
    }, [])

    return (
        <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16'>
            <h1>All blogs</h1>
            <div className='realative h-[80vh] max-w-[850px] overflow-x-auto border border-gray-400 scrollbar-hide'>
                <table className='w-full text-sm text-gray-500'>
                    <thead className='text-sm text-gray-700 text-left uppercase bg-gray-50'>
                        <tr className=''>
                            <th scope='col' className='px-6 py-3'>Author name</th>
                            <th scope='col' className='px-6 py-3'>Blog Title</th>
                            <th scope='col' className='px-6 py-3'>Date</th>
                            <th scope='col' className='px-6 py-3'>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {blogs.map((item, index) => {
                            return <BlogTableItem
                                key={index}
                                title={item.title} authorImg={item.authorimg}
                                author={item.author}
                                date={item.date}
                                id={item._id}
                                deleteBlog={deleteBlog} />
                        })}
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default page
