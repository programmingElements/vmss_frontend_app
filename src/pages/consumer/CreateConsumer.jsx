import { ArrowLeftIcon } from 'lucide-react'
import { Link, useNavigate } from 'react-router'
import React, { useState, useEffect } from 'react'
import toast from 'react-hot-toast';
import api from '../../lib/axios';

const CreateConsumer = () => {
  const [name, setName] = useState("");
  const [scno, setScno] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [aadharNo, setAadharNo] = useState("");
  const [firstPayment, setFirstPayment] = useState(0);
  const [firstPaymentDate, setFirstPaymentDate] = useState("");
  const [totalProjectCost, setTotalProjectCost] = useState(0);
  const [reference, setReference] = useState("");
  const [loading, setLoading] = useState(false);
  const [dealers, setDealers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchDealers();
  }, [])

  const fetchDealers = async () => {
    const res = await api.get("/dealer");
    const data = res.data;
    setDealers(data);
  }

  const handleTotalProjectCost = () => {
    setTotalProjectCost(Number(firstPayment));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !scno.trim() || !phone.trim() || !email.trim() || !aadharNo.trim() || !firstPayment.trim() || !firstPaymentDate.trim()) {
      toast.error("All Fields are required.");
      return;
    }
    console.log(`
      Name: ${name} \n
      Scno: ${scno} \n
      Phone: ${phone} \n
      Email: ${email} \n
      Aadhar No: ${aadharNo} \n
      First Payment: ${firstPayment} \n
      First Payment Date: ${firstPaymentDate} \n
      Total Project Cost: ${totalProjectCost} \n
      Reference : ${reference}
      `);
    setLoading(true);
    try {
      await api.post("/consumer", {
        name, 
        service_no: scno, 
        email, 
        phone, 
        aadhar_no: aadharNo,
        first_payment: firstPayment,
        first_payment_date: firstPaymentDate,
        total_project_cost: totalProjectCost,
        reference,
      });
      toast.success("Loan Created Successfully!");
      navigate("/");
    } catch (error) {
      console.log(error);
      console.log("Error Creating Loan!", error.message);
      if (error.response.status === 429) {
        toast.error("Slow down! You're creating loan too fast!", {
          duration: 4000,
          icon: "💀"
        });
      } else {
        toast.error("Failed to create loan.");
      }
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className='min-h-screen bg-base-200'>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Link to={"/"} className="btn btn-ghost mb-6">
            <ArrowLeftIcon className='size-5' />
            Back to Notes
          </Link>
          <div className='card bg-base-100'>
            <div className='card-body'>
              <h2 className="card-title text-2xl mb-4">Create New Loan</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input 
                  type="text" 
                  placeholder='Consumer Name' 
                  className='input input-bordered'
                  value={name}
                  onChange={e => setName(e.target.value)}
                  />
                </div>
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Service Number</span>
                  </label>
                  <input 
                  type="text" 
                  placeholder='Consumer Scno'
                  className='input input-bordered'
                  value={scno}
                  onChange={e => setScno(e.target.value)}
                  />
                </div>
                <div className="form-control mb-4">
                  <label className="label">
                    <span className='label-text'>Phone</span>
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
                    <span className="label-text">Email Id</span>
                  </label>
                  <input 
                  type="text" 
                  placeholder='Email Id'
                  className='input input-bordered'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Aadhar No.</span>
                  </label>
                  <input 
                  type="text" 
                  placeholder='Aadhar No.'
                  className='input input-bordered'
                  value={aadharNo}
                  onChange={e => setAadharNo(e.target.value)}
                  />
                </div>
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">First Payment</span>
                  </label>
                  <input 
                  type="text" 
                  placeholder='First Payment'
                  className='input input-bordered'
                  value={firstPayment}
                  onChange={e => {
                    setFirstPayment(e.target.value)
                  }}
                  onMouseOut={e => handleTotalProjectCost()}
                  />
                </div>
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">First Payment Date</span>
                  </label>
                  <input 
                  type="date" 
                  placeholder='First Payment Date'
                  className='input input-bordered'
                  value={firstPaymentDate}
                  onChange={e => setFirstPaymentDate(e.target.value)}
                  />
                </div>
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Total Project Cost</span>
                  </label>
                  <input 
                  type="text" 
                  placeholder='Total Project Cost'
                  className='input input-bordered'
                  value={totalProjectCost}
                  onChange={e => setTotalProjectCost(e.target.value)}
                  />
                </div>
                <div className='form-control mb-4'>
                  <label className='label-text'>
                    <span className='label-text'>Reference</span>
                  </label>
                  <select value={reference} onChange={(e) => setReference(e.target.value)} className="select input input-bordered">
                          <option value={"Office Lead"}>Select Dealer</option>
                          {
                            dealers.map((dealer,index) => (
                              <option key={index} value={dealer._id}>{dealer.name}</option>
                            ))
                          }
                  </select>
                </div>
                <div className="card-actions justify-start">
                  <button type='submit' className='btn btn-primary' disabled={loading}>
                    {loading ? "Creating..." : "Create Loan"}
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

export default CreateConsumer