"use client"
import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'

const BlogTableItem = ({ authorImg, title, author, date, id, deleteBlog }) => {
    const blogdate = new Date(date);
    return (
        <tr className='bg-white border-b'>
            <th scope='row' className='items-center gap-3 hidden sm:flex px-6 py-4 font font-medium text-gray-900 whitespace-normal'>
                <Image src={authorImg ? authorImg : assets.profile_icon} width={40} height={40} alt='' />
                <p>{author ? author : "No author"}</p>
            </th>
            <td className='px-6 py-4'>
                {title ? title : "No title"}
            </td>
            <td className='px-6 py-4'>
                {blogdate.toDateString()}
            </td>
            <td className='px-6 py-4 cursor-pointer text-red-600' onClick={() => deleteBlog(id)}>
                X
            </td>

        </tr>
    )
}

export default BlogTableItem
