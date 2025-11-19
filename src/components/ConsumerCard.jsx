import React from 'react'
import { Link } from 'react-router'
import { Eye, Pencil, PenSquareIcon, Trash, Trash2Icon } from 'lucide-react'
import { formatDate } from '../lib/utils'
import api from '../lib/axios'
import { useState } from 'react'
import { useEffect } from 'react'

const ConsumerCard = ({consumer}) => {
  const [dealers, setDealers] = useState([]);

  useEffect(() => {
    getDealers();
  }, [consumer])
  
  const handleDelete = async (e, id) => {
    if (!window.confirm("Are you sure you want to delete this note?")) {
      
    } 
  }

  const getDealers = async () => {
    try {
          const res = await api.get("/dealer");
          const data = res.data;
          setDealers(data);
    } catch (error) {
          console.log(error.message);
    }
  }

  const getDealer = (dealerId) => {
    // console.log(dealers.length > 0 && dealers.find(dealer => dealerId === dealer._id));
    return dealers.length == 0 ? "Own Lead" : dealers.find(dealer => dealerId === dealer._id).name;
  }

  return (
    <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          {formatDate(new Date(consumer.createdAt))}
        </td>
        <td>
          <div className="flex items-center gap-3">
            {/* <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div> */}
            <div>
              <div className="font-bold">{consumer.name}</div>
              <div className="text-sm opacity-50">{consumer.email}</div>
            </div>
          </div>
        </td>
        <td>
          {consumer.phone}
        </td>
        <td>
            {consumer.service_no}
        </td>
        <td>
          <div className="flex items-center gap-3">
            <div>
              <div className="font-bold">{consumer.first_payment}</div>
              <div className="text-sm opacity-50">{formatDate(new Date(consumer.first_payment_date))}</div>
            </div>
          </div>
        </td>
        <td>
          <div className="flex items-center gap-3">
            <div>
              <div className="font-bold">{consumer.second_payment}</div>
              <div className="text-sm opacity-50">{formatDate(new Date(consumer.second_payment_date))}</div>
            </div>
          </div>
        </td>
        <td>
          <div className="flex items-center gap-3">
            <div>
              <div className="font-bold">{consumer.margin_amount}</div>
              <div className="text-sm opacity-50">{formatDate(new Date(consumer.margin_amount_date))}</div>
            </div>
          </div>
        </td>
        <td>
          {consumer.total_project_cost}
        </td>
        <td>
          {getDealer(consumer.reference)}
        </td>
        {/* <td className="flex items-center gap-1">
        <Link to={`/consumer/${consumer._id}`}><Eye className='size-5' /></Link>
        <Link><PenSquareIcon className='size-5' /></Link>
        <button onClick={(e) => handleDelete(e, consumer._id)} className='btn btn-ghost btn-xs text-error'>
        <Trash2Icon className='size-5' />
        </button>
        </td> */}
        <td></td>
      </tr>
  )
}

export default ConsumerCard


// Demo Program
{/*
      <tr>
      <td className="border border-gray-300 px-6 py-2">{loan.name}</td>
      <td className="border border-gray-300 px-6 py-2">{loan.phone}</td>
      <td className="border border-gray-300 px-6 py-2">{loan.service_no}</td>
      <td className="border border-gray-300 px-6 py-2 flex items-center gap-1">
        <Link to={`/loan/${loan._id}`}><Eye className='size-4' /></Link>
        <Link><PenSquareIcon className='size-4' /></Link>
        <Link className='btn btn-ghost btn-xs text-error'>
        <Trash2Icon className='size-4' />
        </Link>
     </td>
     </tr>
*/}
    

