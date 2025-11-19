import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import RateLimitedUI from '../../components/RateLimitedUI';
import toast from 'react-hot-toast';
import ConsumerCard from '../../components/ConsumerCard';
import api from '../../lib/axios';

const Home = () => {
  const [isRateLimited, setIsRateLimited] = useState(true);
  const [consumers, setConsumers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchConsumers = async () => {
        try {
        const res = await api.get("/consumer");
        const data = res.data;
        setConsumers(data);
        setIsRateLimited(false);
        console.log(data);
        } catch (error) {
            console.log("Error fetching consumers")
            if (error.response.status === 429) {
                setIsRateLimited(true)
            } else {
                toast.error("Failed to load notes");
            }
        } finally {
            setLoading(false);
        }
    }
    fetchConsumers();
  }, [])

  return (
    <div className='min-h-screen'>
        <Header />

        {isRateLimited && <RateLimitedUI/> }

        <div className='max-m-7xl mx-auto p-4 mt-6'>
            {loading && <div className='text-center text-primary py-10'>Loading notes...</div>}
        </div>

         {/* Table Content Data */}
        <div className="overflow-x-auto mx-4">
            {
                    consumers.length > 0 && !isRateLimited && (
                        <table className="table">
    {/* head */}
    <thead>
      <tr className='font-bold'>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th className='font-bold text-base text-lime-400'>S.No.</th>
        <th className='font-bold text-base text-lime-400'>Name</th>
        <th className='font-bold text-base text-lime-400'>Phone</th>
        <th className='font-bold text-base text-lime-400'>Service No</th>
        <th className='font-bold text-base text-lime-400'>First Payment</th>
        <th className='font-bold text-base text-lime-400'>Second Payment</th>
        <th className='font-bold text-base text-lime-400'>Margin Payment</th>
        <th className='font-bold text-base text-lime-400'>Total Project Cost</th>
        <th className='font-bold text-base text-lime-400'>Reference</th>
        {/* <th className='font-bold text-base text-lime-400'>Actions</th> */}
      </tr>
    </thead>
    <tbody>
        {/* body */}
        {
             consumers.map((consumer) => (
                <ConsumerCard key={consumer._id} consumer={consumer}  />
            ))
        }
    </tbody>
  </table>
                    )}

                    {
                      consumers.length === 0 && <h1>No Consumer Found!</h1>
                    }
  
  </div>
</div>
  )
}

export default Home