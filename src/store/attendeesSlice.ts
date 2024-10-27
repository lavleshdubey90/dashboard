import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { attendees, Attendee } from '../data/attendeesData';

interface AttendeesState {
    list: Attendee[];
    filteredList: Attendee[];
    filters: {
        name: string;
        company: string;
        designation: string;
        checkedIn: string;
        role: string;
        rows: number;
    };
}

const initialState: AttendeesState = {
    list: attendees,
    filteredList: attendees,
    filters: {
        name: '',
        company: '',
        designation: '',
        checkedIn: '',
        role: '',
        rows: 10,
    },
};

const attendeesSlice = createSlice({
    name: 'attendees',
    initialState,
    reducers: {
      setFilters(state, action: PayloadAction<Partial<AttendeesState['filters']>>) {
        state.filters = { ...state.filters, ...action.payload };
        state.filteredList = state.list.filter(attendee => {
          return (
            (state.filters.name ? attendee.name.toLowerCase().includes(state.filters.name.toLowerCase()) : true) &&
            (state.filters.company ? attendee.company.toLowerCase().includes(state.filters.company.toLowerCase()) : true) &&
            (state.filters.designation ? attendee.designation.toLowerCase().includes(state.filters.designation.toLowerCase()) : true) &&
            (state.filters.checkedIn ? 
              attendee.checkedIn.toLowerCase() === state.filters.checkedIn.toLowerCase() : true
            ) &&
            (state.filters.role ? attendee.role.toLowerCase() === state.filters.role.toLowerCase() : true)
          );
        });
      },
      setRows(state, action: PayloadAction<number>) {
        state.filters.rows = action.payload;
      },
    },
  });
  


export const { setFilters, setRows } = attendeesSlice.actions;
export default attendeesSlice.reducer;
