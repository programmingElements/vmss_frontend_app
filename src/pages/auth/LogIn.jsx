import { useState } from 'react'

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`USERNAME : ${username}\nPASSWORD : ${password}`);
  }

  return (
    <div>
        <div className='container mx-auto bg-green-400'>
          <h1 className='text-3xl p-4 border-2 border-blue-500 rounded-md flex place-content-center text-orange-600 font-bold'>LOGIN VMSS</h1>
        </div>
        <div className='card bg-base-100'>
            <div className='card-body'>
              {/* <h2 className="card-title text-2xl mb-4 place-content-center">Login VMSS</h2> */}
              <form onSubmit={handleSubmit}>
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Username</span>
                  </label>
                  <input 
                  type="text" 
                  placeholder='Username' 
                  className='border-2 p-4 rounded-lg bg-white text-black'
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  />
                </div>
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input 
                  type="password" 
                  placeholder='Password'
                  className='border-2 p-4 rounded-lg bg-white text-black'
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  />
                </div>
                <div className="card-actions justify-start">
                  <button type='submit' className='btn btn-primary' disabled={loading}>
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
    </div>
  )
}

export default Login