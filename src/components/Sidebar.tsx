import React from 'react';

const Sidebar: React.FC = () => {

    const links: string[] = ["Dashboard", "Events", "All Attendees", "All Sponsers", "Settings", "Profile"];

    return (
        <section className='w-80 h-screen bg-sky-600'>
            <h2 className='p-5 text-3xl font-extrabold text-white text-center uppercase'>KLOUT CLUB</h2>

            <div className='mt-20 space-y-10'>
                <ul className='text-white font-semibold text-lg'>
                    {
                        links.map((link: string, index: number) => (
                            <li key={index} className='px-5 py-4 hover:bg-sky-500/80 cursor-pointer duration-300'>{link}</li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}

export default Sidebar;