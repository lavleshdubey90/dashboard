import React from 'react';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import SmallCard from '../../components/SmallCard';
import Cards from '../../components/Cards';
import { Link } from 'react-router-dom';


const Dashboard: React.FC = () => {
  return (
    <section className='flex'>
      <Sidebar />
      <div className='w-full h-screen overflow-y-scroll'>
        <Navbar />

        <div className='flex gap-5 px-5 mt-20'>
          <SmallCard title="Total Events" count={4} />
          <SmallCard title="Total Attendees" count={965} className='bg-pink-100 text-pink-500' />
          <SmallCard title="Total Sponsors" count={3} className='bg-green-100 text-green-500' />
          <SmallCard title="Upcoming Events" count={1} className='bg-orange-100 text-orange-500' />
        </div>

        <section className='p-5'>
          <div className='flex justify-between items-baseline'>
            <h1 className='text-3xl font-bold text-zinc-700 mt-10'>Events</h1>
            <Link to={"/events/allevents"} className='text-lg font-semibold text-sky-500'>View All</Link>
          </div>
          <Cards tag="passed"/>
        </section>

        <section className='p-5'>
          <div className='flex justify-between items-baseline'>
            <h1 className='text-3xl font-bold text-zinc-700 mt-10'>Upcoming Events</h1>
            <Link to={"/events/allevents"} className='text-lg font-semibold text-sky-500'>View All</Link>
          </div>
          <Cards tag="upcoming"/>
        </section>
      </div>
    </section>
  )
}

export default Dashboard;