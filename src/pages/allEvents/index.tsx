import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import EventRow from '../../components/EventRow';
import { allEvents } from '../../data/eventsData';

const AllEvents: React.FC = () => {
  const [active, setActive] = useState<string>("upcoming");
  const currentDate = Date.now();

  
  const upcomingEvents = allEvents.filter(event => new Date(event.date).getTime() > currentDate);
  const passedEvents = allEvents.filter(event => new Date(event.date).getTime() <= currentDate);
  console.log(upcomingEvents, passedEvents);
  
  return (
    <section className='flex'>
      <Sidebar />
      <div className='w-full h-screen overflow-y-scroll'>
        <Navbar />
        
        <div className='px-5'>
          <h1 className='text-3xl font-bold text-zinc-700 mt-20'>All Events</h1>
          <div className='py-5 space-x-5 font-bold text-white'>
            <button onClick={() => setActive("upcoming")} className={`${active === "upcoming" ? "bg-sky-500" : "bg-neutral-300"} px-6 py-3 duration-300 rounded-md`}>Upcoming Events</button>
            <button onClick={() => setActive("passed")} className={`${active === "passed" ? "bg-sky-500" : "bg-neutral-300"} px-6 py-3 duration-300 rounded-md`}>Passed Events</button>
          </div>
        </div>

        {
          active === "upcoming" &&
          <div className='px-5 mt-5'>
            {upcomingEvents.map(event => (
              <EventRow key={event.id} event={event} />
            ))}
          </div>
        }

        {
          active === "passed" &&
          <div className='px-5 mt-5'>
            {passedEvents.map(event => (
              <EventRow key={event.id} event={event} />
            ))}
          </div>
        }
      </div>
    </section>
  );
}

export default AllEvents;
