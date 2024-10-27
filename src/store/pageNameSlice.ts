import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PageState {
    name: string;
}

const initialState: PageState = {
    name: "Dashboard",
};

const pageSlice = createSlice({
    name: 'page name',
    initialState,
    reducers: {
        setPageName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
    },
});

export const { setPageName } = pageSlice.actions;
export default pageSlice.reducer;
