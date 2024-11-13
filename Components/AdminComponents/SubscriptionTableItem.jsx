import React from 'react'

const SubscriptionTableItem = ({ email, date, id, deleteEmail }) => {
    const emaildate = new Date(date)
    return (
        <tr className='bg-white border-b text-left'>
            <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-normal'>
                {email ? email : "No Email"}
            </th>
            <td className='px-6 py-4 hidden sm:block'>{emaildate ? emaildate.toDateString() : "N/A"}</td>
            <td className='px-6 py-4 cursor-pointer text-red-600' onClick={() => deleteEmail(id)}>X</td>
        </tr>
    )
}

export default SubscriptionTableItem
