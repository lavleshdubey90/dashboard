import React from 'react';
import { allEvents, Event } from "../data/eventsData";

interface CardsProps {
    tag: "passed" | "upcoming";
}

const Cards: React.FC<CardsProps> = ({ tag }) => {
    const currentDate = Date.now();

    const filteredEvents = allEvents.filter(event => 
        tag === "upcoming" ? new Date(event.date).getTime() > currentDate : new Date(event.date).getTime() <= currentDate
    );

    return (
        <div className="w-full mt-5 grid grid-cols-4 gap-5">
            {filteredEvents.map((event: Event) => (
                <div key={event.id} className='shadow-lg w-full rounded-lg'>
                    <img src={event.image} alt="Image" className='w-full rounded-t-lg' />
                    <div className='p-5 space-y-5 text-zinc-700 font-semibold'>
                        <h4 className='text-xl'>{event.title}</h4>
                        <div>
                            <div className='pb-2'>{event.location}</div>
                            <div className='text-zinc-400'>{event.date}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Cards;
