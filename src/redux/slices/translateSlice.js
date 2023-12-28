import { createSlice } from "@reduxjs/toolkit";
import { getTranslate } from "../actions/translateAction";

const translateSlice = createSlice({
    name: "translate",
    initialState: {
        anwser: "",
        isLoading: false,
        isError: false
    },
    extraReducers: (builder) => {
        builder
            .addCase(getTranslate.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getTranslate.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            })
            .addCase(getTranslate.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.anwser = action.payload
            })
    }
})

export default translateSlice.reducer;