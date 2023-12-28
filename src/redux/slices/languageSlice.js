import { createSlice } from "@reduxjs/toolkit";
import { getLanguages } from "../actions/translateAction";

const languageSlice = createSlice({
    name: "language",
    initialState: {
        languages: [],
        isLoading: false,
        isError: false
    },
    extraReducers: (builder) => {
        builder
            .addCase(getLanguages.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getLanguages.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            })
            .addCase(getLanguages.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.languages = action.payload
            })
    }
})

export default languageSlice.reducer;