import React from 'react';
import { Event } from '../data/eventsData';

interface EventRowProps {
    event: Event; // Accept the event prop here
}

const EventRow: React.FC<EventRowProps> = ({ event }) => {

    return (
        <div className='w-full py-5 text-sm 2xl:text-base'>
            <div className='flex border-2 rounded-xl p-5 justify-between items-center gap-5'>
                <div className='flex items-center gap-5'>
                    <img src={event.image} alt="event" className='w-80 rounded-md' />
                    <h5 className='text-2xl font-semibold'>{event.title}</h5>
                </div>
                <div className='h-full flex flex-col gap-y-2'>
                    <div className='flex items-center gap-2 font-bold'>Date: <p className='font-medium text-zinc-400'>{event.date}</p></div>
                    <div className='flex items-center gap-2 font-bold'>Time: <p className='font-medium text-zinc-400'>{event.time}</p></div>
                    <div className='flex items-center gap-2 font-bold'>Venue: <p className='font-medium text-zinc-400'>{event.venue}</p></div>
                </div>

                <div className='h-full flex flex-col gap-y-2'>
                    <div className='flex items-center gap-2 font-bold'>Total Registrations: <p className='font-medium text-zinc-400'>{event.totalRegistrations}</p></div>
                    <div className='flex items-center gap-2 font-bold'>Total Attendees: <p className='font-medium text-zinc-400'>{event.totalAttendees}</p></div>
                    <div className='flex items-center gap-2 font-bold'>Checked In Speakers: <p className='font-medium text-zinc-400'>{event.checkedInSpeakers}</p></div>
                    <div className='flex items-center gap-2 font-bold'>Checked In Sponsors: <p className='font-medium text-zinc-400'>{event.checkedInSponsors}</p></div>
                    <div className='flex items-center gap-2 font-bold'>Pending Delegates: <p className='font-medium text-zinc-400'>{event.pendingDelegates}</p></div>
                </div>

                <div className='h-full text-sky-500 font-medium flex flex-col gap-y-2'>
                    <div className='text-purple-500'>View Event</div>
                    <div className='text-sky-500'>Edit Event</div>
                    <div className='text-blue-500'>All Attendees</div>
                    <div className='text-green-500'>All Sponsors</div>
                    <div className='text-yellow-500'>View Agendas</div>
                    <div className='text-red-500'>Delete Event</div>
                </div>
            </div>

        </div>
    )
}

export default EventRow;