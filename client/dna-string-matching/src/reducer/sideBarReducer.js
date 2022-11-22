import { createSlice } from "@reduxjs/toolkit";

export const sideBarSlice = createSlice({
    name: "sidebar",
    initialState: {
        value: [1, 0, 0, 0, 0, 0],
        showSidebar: true,
    },
    reducers: {
        setSideBarValue: (state, action) => {
            state.value = action.payload.value;
            state.showSidebar = action.payload.showSidebar;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setSideBarValue } = sideBarSlice.actions;

export default sideBarSlice.reducer;
