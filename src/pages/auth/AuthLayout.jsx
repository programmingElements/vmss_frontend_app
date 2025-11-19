import React from 'react'
import { Outlet } from 'react-router'
import Header from '../../components/Header'

const AuthLayout = () => {
  return (
    <div className='min-h-screen'>
    <Header />
    <div className='p-2'>
        <Outlet />
    </div>
    </div>
  )
}

export default AuthLayout