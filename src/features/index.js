import {configureStore} from "@reduxjs/toolkit";
import MenuSlice from "./MenuSlice";
import QuerySlice from "./QuerySlice";
import CategorySlice from "./CategorySlice";
import AgendaSlice from "./AgendaSlice"
import FinanceSlice from "./FinanceSlice"

/***
 * Setup store
 */

const store = configureStore({
    reducer : {
        menu : MenuSlice,
        query : QuerySlice,
        category : CategorySlice,
        agenda : AgendaSlice,
        finance : FinanceSlice
    }

})

console.log(store.getState())


export default store;