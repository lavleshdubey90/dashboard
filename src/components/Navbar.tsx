import React from 'react';

const Navbar:React.FC = () => {
  return (
    <header className='w-full p-5'>
        <nav className='flex justify-between items-center'>
            <h3 className='text-2xl text-sky-500 font-extrabold'>Dashboard</h3>
            <div className='flex items-center gap-2'>
                <div className='w-10 h-10 rounded-full bg-gradient-to-br from-sky-500 to-sky-200'></div>
                <span className='text-zinc-500 font-semibold'>John Doe</span>
            </div>
        </nav>
    </header>
  )
}

export default Navbar;