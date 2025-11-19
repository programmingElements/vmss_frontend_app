import { Link, useNavigate } from 'react-router';
import { ArrowLeftIcon } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import api from '../../lib/axios';

const CreateDealer = () => {
  const [dealerName, setDealerName] = useState("");
  const [phone, setPhone] = useState("");
  const [alternativePhone, setAlternativePhone] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!dealerName.trim() || !phone.trim() || !alternativePhone.trim()) {
      toast.error("All Fields are required.");
      return;
    }

    console.log(`
      DealerName: ${dealerName} \n
      Phone: ${phone} \n
      Alternative Phone: ${alternativePhone}
      `);
    
    setLoading(true);
    
    try {
      await api.post("/dealer", {
        name: dealerName,
        phone,
        alternativePhone
      });
      toast.success("Dealer Created Successfully!");
      navigate("/");
    } catch (error) {
      console.log("Error Creating Dealer!", error.message);
      if (error.response.status === 429) {
        toast.error("Slow down! You're creating Dealer too fast!", {
          duration: 4000,
          icon: "💀"
        });
      } else {
        toast.error("Failed to create Dealer.");
      }
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className='min-h-screen bg-base-200'>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Link to={"/dashboard"} className="btn btn-ghost mb-6">
            <ArrowLeftIcon className='size-5' />
            Back to Notes
          </Link>
          <div className='card bg-base-100'>
            <div className='card-body'>
              <h2 className="card-title text-2xl mb-4">Create New Dealer</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Dealer Name</span>
                  </label>
                  <input 
                  type="text" 
                  placeholder='Dealer Name' 
                  className='input input-bordered'
                  value={dealerName}
                  onChange={e => setDealerName(e.target.value)}
                  />
                </div>
                <div className="form-control mb-4">
                  <label className="label">
                    <span className='label-text'>Phone No</span>
                  </label>
                  <input 
                  type="text" 
                  placeholder='Phone No'
                  className='input input-bordered'
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  />
                </div>
                <div className="form-control mb-4">
                  <label className="label">
                    <span className='label-text'>Alternative Phone No</span>
                  </label>
                  <input 
                  type="text" 
                  placeholder='Alternative Phone No'
                  className='input input-bordered'
                  value={alternativePhone}
                  onChange={e => setAlternativePhone(e.target.value)}
                  />
                </div>
                <div className="card-actions justify-start">
                  <button type='submit' className='btn btn-primary' disabled={loading}>
                    {loading ? "Creating..." : "Create Dealer"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateDealer;