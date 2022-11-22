import { configureStore } from "@reduxjs/toolkit";
import diseasesReducer from "./reducer/diseasesReducer";
import sideBarReducer from "./reducer/sideBarReducer";

export default configureStore({
    reducer: {
        sideBar: sideBarReducer,
        diseases: diseasesReducer,
    },
});
