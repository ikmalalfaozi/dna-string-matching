import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDiseasesList } from "../api";

export const getAllDisease = createAsyncThunk("diseases/getData", getDiseasesList);

export const diseasesSlice = createSlice({
    name: "diseases",
    initialState: {
        data: [],
        total_data: 0,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllDisease.fulfilled, (state, action) => {
            state.data = action.payload.data;
            state.total_data = action.payload.total_data;
        });
    },
});

// Action creators are generated for each case reducer function

export default diseasesSlice.reducer;
