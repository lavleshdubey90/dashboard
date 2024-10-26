import React from 'react';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import FiltersBar from '../../components/FiltersBar';

const Attendees: React.FC = () => {
    return (
        <section className='flex'>
            <Sidebar />
            <div className='w-full h-screen'>
                <Navbar />

                <FiltersBar />
            </div>
        </section>
    )
}

export default Attendees;