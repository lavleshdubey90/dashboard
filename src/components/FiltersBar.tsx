import React from 'react';

const FiltersBar: React.FC = () => {
  return (
    <div className='flex gap-10 p-5 font-medium'>
      {/* Filter By Number of Rows */}
      <select className="select bg-neutral-100 text-base space-y-5 w-fit">
        <option disabled selected>Show</option>
        <option>10</option>
        <option>25</option>
        <option>50</option>
        <option>100</option>
      </select>


      {/* Filter By Name */}
      <label className="input input-bordered flex items-center gap-2">
        <input type="text" className="grow" placeholder="Search by Name" />
      </label>

      {/* Filter By Company */}
      <label className="input input-bordered flex items-center gap-2">
        <input type="text" className="grow" placeholder="Search by Company" />
      </label>

      {/* Filter By Designation */}
      <label className="input input-bordered flex items-center gap-2">
        <input type="text" className="grow" placeholder="Search by Designation" />
      </label>

      {/* Filter By Checked-In */}
      <select className="select select-bordered w-fit">
        <option disabled selected>Checked-In</option>
        <option>Yes</option>
        <option>No</option>
      </select>

      {/* Filter By Roles */}
      <select className="select select-bordered w-fit">
        <option disabled selected>Role</option>
        <option>Speaker</option>
        <option>Delegate</option>
        <option>Sponsor</option>
        <option>Panelist</option>
        <option>Moderator</option>
      </select>
    </div>
  )
}

export default FiltersBar;