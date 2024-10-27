import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaAngleDown } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { setPageName } from '../store/pageNameSlice';
import { Links, links } from '../data/linksData';

const Sidebar: React.FC = () => {
    const [showDropdown, setShowDropdown] = useState<boolean>(false);
    const location = useLocation();
    const dispatch = useDispatch();

    const handleLinkClick = (name: string) => {
        dispatch(setPageName(name));
    };

    return (
        <section className='w-80 h-screen bg-sky-600'>
            <h2 className='p-5 text-3xl font-extrabold text-white uppercase'>KLOUT CLUB</h2>
            <div className='mt-20 space-y-10'>
                <ul className='text-white font-semibold text-lg'>
                    {
                        links.map((link: Links) => (
                            link.name === "Events" ? (
                                <div key={link.name}>
                                    <li
                                        onClick={() => {
                                            setShowDropdown(!showDropdown);
                                            // handleLinkClick(link.name);
                                        }}
                                        className={`${location.pathname.startsWith('/events') ? "bg-sky-500/80" : ""} px-5 py-4 hover:bg-sky-500/80 cursor-pointer duration-300 flex justify-between items-center`}
                                    >
                                        {link.name}
                                        <FaAngleDown className={`${showDropdown ? "-rotate-180" : "rotate-0"} transition-transform duration-300`} />
                                    </li>
                                    {showDropdown && (
                                        <div className=''>
                                            <Link to="/events/allevents" onClick={() => handleLinkClick("All Events")}>
                                                <li className={`${location.pathname === "/events/allevents" ? "bg-sky-500/80" : ""} pl-10 px-5 py-4 hover:bg-sky-500/80 cursor-pointer duration-300`}>
                                                    All Events
                                                </li>
                                            </Link>
                                            <Link to="/events/addevents" onClick={() => handleLinkClick("Add Events")}>
                                                <li className={`${location.pathname === "/events/addevents" ? "bg-sky-500/80" : ""} pl-10 px-5 py-4 hover:bg-sky-500/80 cursor-pointer duration-300`}>
                                                    Add Events
                                                </li>
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <Link key={link.name} to={link.path} onClick={() => handleLinkClick(link.name)}>
                                    <li className={`${location.pathname === link.path ? "bg-sky-500/80" : ""} px-5 py-4 hover:bg-sky-500/80 cursor-pointer duration-300`}>
                                        {link.name}
                                    </li>
                                </Link>
                            )
                        ))
                    }
                </ul>
            </div>
        </section>
    );
}

export default Sidebar;
