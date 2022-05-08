
/***
 * THIS SLICE IS RESPONSABLE FOR QUERY/SEARCHIND IN TABLES
 */
import { createSlice } from "@reduxjs/toolkit";


const QuerySlice = createSlice({
    name : "query",
    initialState : {
        query_string : '',
        queryByNumber : 5
    },

    reducers : {
        QueryData(state,action){
            state.query_string = action.payload;
        },
        QueryByNum(state,action){
            state.queryByNumber = action.payload;
            // console.log(state.queryByNumber)
        }
    }

})



/**
 * Export QueryActions AND
 * Export QuerySlice with reducers
 */

export const QueryActions = QuerySlice.actions;

export default QuerySlice.reducer;
