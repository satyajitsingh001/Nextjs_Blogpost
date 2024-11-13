"use client"
import { assets, blog_data } from '@/Assets/assets';
import Footer from '@/Components/Footer';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const page = ({ params }) => {

    const [data, setData] = useState(null);

    // const fetchBlogData = () => {
    //     for (let i = 0; i < blog_data.length; i++) {
    //         if (Number(params.id) == blog_data[i].id) {
    //             setData(blog_data[i]);
    //             break;
    //         }
    //     }
    // }

    const fetchBlogData = async () => {
        const response = await axios.get('/api/blog', {
            params: {
                id: params.id
            }
        })

        setData(response.data)
    }

    useEffect(() => {
        fetchBlogData();
    }, []);

    return (
        data ? <>
            <div className='bg-gray-300 py-5 px-5 md:px-12 lg:px-28 '>
                <div className='flex justify-between items-center'>
                    <Link href='/'>
                        <Image src={assets.logo} width={180} alt='' className='w-[130px] sm:w-auto' />
                    </Link>
                    <button className='flex items-center gap-2 font-medium py-1 px-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]'>
                        Get started
                        <Image src={assets.arrow} alt='' />
                    </button>
                </div>
                <div className='text-center my-24'>
                    <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data.title}</h1>
                    <Image className='mx-auto mt-6 border border-white rounded-full' src={data.authorimg} width={60} height={60} alt='' />
                    <p className='mt-1 pb-2 text-lg mac-w-[740px] mx-auto '>{data.author}</p>
                </div>
            </div>
            <div className=' mx-5 max-w-[800px] md:mx-auto lg-mx-auto mt-[-100px] mb-10  border-white border-4'>
                <Image src={data.image} width={1200} height={720} alt='' />
                <h1 className='my-8 text-[26px] font-semibold'>Introduction:</h1>
                <p>{data.description}</p>
                <h3 className='my-5 text-[18px] font-semibold'>Step 1: Self lerning material</h3>
                <p className='my-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum eligendi, voluptatibus doloremque quas quaerat quo fuga minima. Nihil sequi saepe earum aliquam. Qui perferendis beatae iure, eum perspiciatis itaque iusto.</p>
                <h3 className='my-5 text-[18px] font-semibold'>Step 2: Self lerning material</h3>
                <p className='my-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum eligendi, voluptatibus doloremque quas quaerat quo fuga minima. Nihil sequi saepe earum aliquam. Qui perferendis beatae iure, eum perspiciatis itaque iusto.</p>
                <h3 className='my-5 text-[18px] font-semibold'>Step 3: Self lerning material</h3>
                <p className='my-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum eligendi, voluptatibus doloremque quas quaerat quo fuga minima. Nihil sequi saepe earum aliquam. Qui perferendis beatae iure, eum perspiciatis itaque iusto.</p>
                <h3 className='my-5 text-[18px] font-semibold'>Step 4: Self lerning material</h3>
                <p className='my-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum eligendi, voluptatibus doloremque quas quaerat quo fuga minima. Nihil sequi saepe earum aliquam. Qui perferendis beatae iure, eum perspiciatis itaque iusto.</p>
                <h3 className='my-5 text-[18px] font-semibold'>Step 5: Self lerning material</h3>
                <p className='my-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum eligendi, voluptatibus doloremque quas quaerat quo fuga minima. Nihil sequi saepe earum aliquam. Qui perferendis beatae iure, eum perspiciatis itaque iusto.</p>
                <h3 className='my-5 text-[18px] font-semibold'>Step 6: Self lerning material</h3>
                <p className='my-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum eligendi, voluptatibus doloremque quas quaerat quo fuga minima. Nihil sequi saepe earum aliquam. Qui perferendis beatae iure, eum perspiciatis itaque iusto.</p>
                <h3 className='my-5 text-[18px] font-semibold'>Conclusion :</h3>
                <p className='my-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum eligendi, voluptatibus doloremque quas quaerat quo fuga minima. Nihil sequi saepe earum aliquam. Qui perferendis beatae iure, eum perspiciatis itaque iusto.</p>

                <div className='my-24 '>
                    <p className='text-black font-semibold my-4'>Share this article on social media</p>
                    <div className='flex'>
                        <Image src={assets.facebook_icon} width={50} alt='' />
                        <Image src={assets.twitter_icon} width={50} alt='' />
                        <Image src={assets.googleplus_icon} width={50} alt='' />
                    </div>
                </div>
            </div>
            <Footer />
        </> : <>
            No Data Found !
        </>
    )
}

export default page
