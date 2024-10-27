import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import AllEvents from './pages/allEvents';
import AddEvents from './pages/addEvents';
import Attendees from './pages/attendees';
import Sponsers from './pages/sponsers';
import Settings from './pages/settings';
import Profile from './pages/profile';

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/events" element={<Events />} /> */}
        <Route path="/events/allevents" element={<AllEvents />} />
        <Route path="/events/addevents" element={<AddEvents />} />
        <Route path="/attendees" element={<Attendees />} />
        <Route path="/sponsors" element={<Sponsers />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
