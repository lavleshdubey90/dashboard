import React from 'react';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import FiltersBar from '../../components/FiltersBar';
import DataTable from '../../components/DataTable';

const Attendees: React.FC = () => {
    return (
        <section className='flex'>
            <Sidebar />
            <div className='w-full h-screen overflow-y-scroll pb-5'>
                <Navbar />

                <FiltersBar />
                <DataTable />
            </div>
        </section>
    )
}

export default Attendees;