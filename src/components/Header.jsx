import React from 'react'
import { Link } from 'react-router'
import { LogIn, PlusIcon } from 'lucide-react'
import { useAuth } from '../context/useAuth'
import { useState } from 'react'


const Header = () => {
  const { isLoggedIn } = useAuth();
  console.log(isLoggedIn);
  return (
    <div className='bg-base-300 border-b border-base-content/10'>
        <div className='mx-auto max-w-6xl p-4'>
            <div className='flex items-center justify-between'>
                <h1 className='text-3xl font-bold text-primary font-mono tracking-light'>VMSS</h1>
                {
                  true ? (
                  <div className='flex items-center gap-4'>
                    <Link to={"/dashboard/create_consumer"} className="btn btn-primary">
                    <PlusIcon className='size-5' />
                    <span>New Loan</span>
                    </Link>
                    <Link to={"/create_dealer"} className='btn btn-warning'>
                    <PlusIcon className='size-5' />
                    <span>New Dealer</span>
                    </Link>
                </div>
                ) : (
                  <div className='flex items-center gap-4'>
                    <Link to={"/auth"} className="btn btn-primary">
                    <LogIn className='size-5' />
                    <span>LogIn</span>
                    </Link>
                    <Link to={"/auth/signup"} className='btn btn-warning'>
                    <LogIn className='size-5' />
                    <span>SignUp</span>
                    </Link>
                </div>
                )
                }
            </div>
    {/* <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">VMSS</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a className='font-bold'>Services</a></li>
      <li>
        <details>
          <summary className='font-bold'>Admin</summary>
          <ul className="bg-base-100 rounded-t-none p-2">
            <li><a>Login</a></li>
            <li><a>Register</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
  <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
</div> */}
</div>
</div>
  )
}

export default Header