"use client"
import SubscriptionTableItem from '@/Components/AdminComponents/SubscriptionTableItem'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const page = () => {

    const [email, setEmail] = useState([]);


    const fetchEmail = async () => {
        const response = await axios.get('/api/email')

        if (response.status === 200) {
            setEmail(response.data.Data);
        }
    }

    const deleteEmail = async (id) => {
        const response = await axios.delete('/api/email', {
            params: { id }
        })
        fetchEmail()
        if (response.status === 200) {
            toast.success(response.data.message);
        }
    }

    useEffect(() => {
        fetchEmail();
    }, [])

    return (
        <div className=' flex-1 pt-5 px-5 sm:pt-12 sm:pl-16'>
            <h1>All Subscription</h1>
            <div className='relative max-w-[600px] h-[80vh] overflow-x-auto mt-4 border border-gray-400  scroll-hide'>
                <table className='w-full text-sm text-gray-500'>
                    <thead className='text-sx text-left text-gray-700 uppercase bg-gray-50'>
                        <tr>
                            <th scope='col' className='px-6 py-3'>
                                Email Subscription
                            </th>
                            <th scope='col' className=' px-6 py-3'>
                                Date
                            </th>
                            <th scope='col' className='  px-6 py-3'>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {email.map((item, index) => {
                            return <SubscriptionTableItem key={index} email={item.email} date={item.date} deleteEmail={deleteEmail} id={item._id} />
                        })}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default page
