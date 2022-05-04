import {configureStore} from "@reduxjs/toolkit";
import MenuSlice from "./MenuSlice";
import QuerySlice from "./QuerySlice";

/***
 * Setup store
 */

const store = configureStore({
    reducer : {
        menu : MenuSlice,
        query : QuerySlice
    }

})


export default store;