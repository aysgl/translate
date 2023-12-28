import { configureStore } from "@reduxjs/toolkit";
import languageSlice from "./slices/languageSlice";
import translateSlice from "./slices/translateSlice";

const store = configureStore({
    reducer: {
        language: languageSlice,
        translate: translateSlice
    }
});

export default store;
