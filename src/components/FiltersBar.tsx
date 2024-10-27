import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilters, setRows } from '../store/attendeesSlice';

const FiltersBar: React.FC = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    console.log(name, value);
    if (name === 'rows') {
      console.log("Inside If: ",name, value);
      dispatch(setRows(Number(value)));
    } else {
      console.log("Inside else: ",name, value);
      dispatch(setFilters({ [name]: value }));
    }
  };

  return (
    <div className='flex gap-10 p-5 font-medium'>

      {/* Filtering By Number of Rows */}
      <select name="rows" onChange={handleFilterChange} className="select bg-neutral-100 text-base space-y-5 w-fit">
        <option disabled selected>Show</option>
        <option value={10}>10</option>
        <option value={25}>25</option>
        <option value={50}>50</option>
        <option value={100}>100</option>
      </select>

      {/* Filtering By Name */}
      <label className="input input-bordered flex items-center gap-2">
        <input type="text" name="name" onChange={handleFilterChange} className="grow" placeholder="Search by Name" />
      </label>

      {/* Filtering By Designation */}
      <label className="input input-bordered flex items-center gap-2">
        <input type="text" name="designation" onChange={handleFilterChange} className="grow" placeholder="Search by Designation" />
      </label>

      {/* Filtering By Company */}
      <label className="input input-bordered flex items-center gap-2">
        <input type="text" name="company" onChange={handleFilterChange} className="grow" placeholder="Search by Company" />
      </label>

      {/* Filtering By Checked-In */}
      <select name="checkedIn" onChange={handleFilterChange} className="select select-bordered w-fit">
        <option disabled selected>Checked-In</option>
        <option value="">All</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>

      {/* Filtering By Roles */}
      <select name="role" onChange={handleFilterChange} className="select select-bordered w-fit">
        <option disabled selected>Role</option>
        <option value="">All</option>
        <option value="Speaker">Speaker</option>
        <option value="Delegate">Delegate</option>
        <option value="Sponsor">Sponsor</option>
        <option value="Panelist">Panelist</option>
        <option value="Moderator">Moderator</option>
      </select>
    </div>
  )
}

export default FiltersBar;
