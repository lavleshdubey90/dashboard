import React from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

const Sponsors:React.FC = () => {
  return (
    <section className='flex'>
            <Sidebar />
            <div className='w-full h-screen'>
                <Navbar />

                <h1 className='text-5xl mt-10 p-5 text-sky-500 font-extrabold'>Sponsers Page</h1>
            </div>
        </section>
  )
}

export default Sponsors;