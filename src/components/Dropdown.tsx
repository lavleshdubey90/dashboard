import React, { useState } from 'react';

const Dropdown: React.FC = () => {
  const [selected, setSelected] = useState<number>(10);

  return (
    <div className="relative inline-block text-left">
      <details className="dropdown">
        <summary className="btn w-full text-zinc-700 bg-neutral-300 rounded-md transition duration-200 ease-in-out px-4 py-2 flex justify-between items-center">
          <span>Show {selected}</span>
          <svg
            className="ml-2 h-5 w-5 transform transition-transform duration-200"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06 0L10 10.293l3.71-3.08a.75.75 0 111 1.12l-4 3.333a.75.75 0 01-1 0l-4-3.333a.75.75 0 010-1.12z"
              clipRule="evenodd"
            />
          </svg>
        </summary>
        <ul className="menu space-y-2 dropdown-content bg-white border border-gray-200 rounded-md shadow-lg mt-1 w-full z-[1] p-2">
          { [10, 25, 50, 100].map(value => (
            <li
              key={value}
              className="w-full cursor-pointer hover:bg-gray-100 rounded-md p-2 transition duration-200 ease-in-out"
              onClick={() => setSelected(value)}
            >
              {value}
            </li>
          ))}
        </ul>
      </details>
    </div>
  );
};

export default Dropdown;
