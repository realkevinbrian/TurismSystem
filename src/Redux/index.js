import {configureStore} from "@reduxjs/toolkit";
import {MenuSlice} from "./MenuSlice";

/***
 * Setup store
 */

const store = configureStore({
    reducers : {
        menu : MenuSlice
    }

})


export default store;