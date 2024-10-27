import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Attendee } from '../data/attendeesData';

const DataTable: React.FC = () => {
  const filteredList = useSelector((state: RootState) => state.attendees.filteredList);
  const rowsToShow = useSelector((state: RootState) => state.attendees.filters.rows);

  return (
    <div className='px-5'>
      <table className="table-auto w-full overflow-y-scroll text-left">
        <thead>
          <tr className='border rounded-md'>
            <th className='py-3 px-5'>No.</th>
            <th className='py-3 px-5'>Name</th>
            <th className='py-3 px-5'>Designation</th>
            <th className='py-3 px-5'>Company</th>
            <th className='py-3 px-5'>Email</th>
            <th className='py-3 px-5'>Role</th>
            <th className='py-3 px-5'>Check In</th>
          </tr>
        </thead>

        <tbody>
          {
            filteredList.slice(0, rowsToShow).map((attendee:Attendee, index:number) => (
              <tr key={attendee.email} className='border rounded-md font-medium text-zinc-700'>
                <td className='py-3 px-5'>{index + 1}</td>
                <td className='py-3 px-5'>{attendee.name}</td>
                <td className='py-3 px-5'>{attendee.designation}</td>
                <td className='py-3 px-5'>{attendee.company}</td>
                <td className='py-3 px-5'>{attendee.email}</td>
                <td className='py-3 px-5'>{attendee.role}</td>
                <td className='py-3 px-5'>{attendee.checkedIn}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default DataTable;
