import React, { useEffect, useState } from 'react'
import api from '../../lib/axios';
import DealerCard from '../../components/DealerCard';

const ListDealers = () => {
  const [dealers, setDealers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDealers = async () => {
        try {
            const res = await api.get("/dealer");
            const data = res.data;
            setDealers(data);
            console.log(data);
            
        } catch (error) {
            console.log("Error fetching dealers")
            toast.error("Failed to load dealers");
        } finally {
            setLoading(false);
        }
    }
    fetchDealers();
  }, [])

  return (
    <div className='min-h-screen'>
        {
            loading && "Loading the Dealers"
        }

        <h1 className='text-3xl flex place-content-center p-4 text-green-400'>List of Dealers</h1>

        {/* Table Content Data */}
        <div className="overflow-x-auto mx-4">
            {
                    dealers.length > 0 && (
                        <table className="table">
    {/* head */}
    <thead>
      <tr className='font-bold'>
        
        <th className='font-bold text-base text-lime-400'>S.No.</th>
        <th className='font-bold text-base text-lime-400'>Name</th>
        <th className='font-bold text-base text-lime-400'>Phone No</th>
        <th className='font-bold text-base text-lime-400'>Alternative Phone No</th>
        {/* <th className='font-bold text-base text-lime-400'>Actions</th> */}
      </tr>
    </thead>
    <tbody>
        {/* body */}
        {
             dealers.map((dealer,index) => (
                <DealerCard key={dealer._id} index={index} dealer={dealer}  />
            ))
        }
    </tbody>
  </table>
                    )}

                    {
                      dealers.length === 0 && <h1>No Consumer Found!</h1>
                    }
  
  </div>
    </div>
  )
}

export default ListDealers;