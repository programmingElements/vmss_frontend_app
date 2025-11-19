import React from 'react'

const DealerCard = ({dealer, index}) => {
  return (
<tr>
        <td className='font-bold'>
          {
            index + 1
          }
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
              <div className="font-bold">{dealer.name}</div>
              {/* <div className="text-sm opacity-50">{dealer.email}</div> */}
            </div>
          </div>
        </td>
        <td>
          {dealer.phone}
        </td>
        <td>
          {dealer.alternativePhone}
        </td>
        <td>
        {/* 
        <td className="flex items-center gap-1">
        <Link to={`/dealer/${dealer._id}`}><Eye className='size-5' /></Link>
        <Link><PenSquareIcon className='size-5' /></Link>
        <button onClick={(e) => handleDelete(e, dealer._id)} className='btn btn-ghost btn-xs text-error'>
        <Trash2Icon className='size-5' />
        </button>
        </td> 
        */}
        </td>
      </tr>
  )
}

export default DealerCard