import React from 'react';
// import Login from './pages/login';
import Dashboard from './pages/dashboard';
// import { Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div>
      {/* <Login /> */}
      <Dashboard />
      {/* <h1 className='text-3xl font-bold text-yellow-500'>Hello World</h1>

      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes> */}
    </div>
  )
}

export default App;