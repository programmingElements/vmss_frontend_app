import React from 'react';
import { Routes, Route } from 'react-router';
import Home from "./pages/consumer/Home";
import CreateConsumer from "./pages/consumer/CreateConsumer";
import ConsumerDetail from "./pages/consumer/ConsumerDetail";
import CreateDealer from "./pages/dealer/CreateDealer";
import DealerDetail from './pages/dealer/DealerDetail';
import ListDealers from './pages/dealer/ListDealers';
import SignUp from './pages/auth/SignUp';
import Login from './pages/auth/Login';
import Dashboard from './pages/consumer/Dashboard';
import AuthLayout from './pages/auth/AuthLayout';
import { AuthProvider } from './context/useAuth';

const App = () => {
  return (
    <AuthProvider>
    <div className='relative w-full h-full' data-theme="forest">
      <Routes>
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="create_consumer" element={<CreateConsumer />} />
          <Route path="consumer/:id" element={<ConsumerDetail />} />
        </Route>

        <Route path="/create_dealer" element={<CreateDealer/>} />
        <Route path="/dealers" element={<ListDealers/>} />
        <Route path="/dealer/:id" element={<DealerDetail />} />
        
        <Route path='auth' element={<AuthLayout />}>
        <Route index element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        </Route>

      </Routes>
    </div>
    </AuthProvider>
  )
}

export default App


