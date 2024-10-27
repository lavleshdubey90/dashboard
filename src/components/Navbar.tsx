import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const Navbar: React.FC = () => {

  const pageName = useSelector((state: RootState) => state.page.name);

  return (
    <header className='w-full sticky top-0 bg-white/90 backdrop-blur-sm z-50 p-5'>
      <nav className='flex justify-between items-center'>
        <h3 className='text-2xl text-sky-500 font-extrabold'>{pageName}</h3>
        <div className='flex items-center gap-2'>
          <div className='w-10 h-10 rounded-full bg-gradient-to-br from-sky-500 to-sky-200'></div>
          <span className='text-zinc-500 font-semibold'>John Doe</span>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
