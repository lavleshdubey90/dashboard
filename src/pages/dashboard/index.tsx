import React from 'react';
import Sidebar from '../../components/Sidebar';
import Panel from '../../components/Panel';

const Dashboard:React.FC = () => {
  return (
    <section className='flex'>
        <Sidebar />
        <Panel />
    </section>
  )
}

export default Dashboard;