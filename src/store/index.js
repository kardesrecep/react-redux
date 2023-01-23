import { configureStore } from "@reduxjs/toolkit";
import  localeSlice  from "./slices/locale-file";
import themeSlice from "./slices/theme-slice";

export default configureStore({
    reducer:{
        theme:themeSlice,
        local:localeSlice
    }
});

