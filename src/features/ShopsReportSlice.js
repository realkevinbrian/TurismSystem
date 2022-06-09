import { createSlice } from "@reduxjs/toolkit";
import shopsReport from "../Api/shopsReport.json"


const ShopsReportSlice = createSlice({
    name : "shopsReport",
    initialState : {
        value : shopsReport.shopsReport
    },
    reducers : {

        //update row according to switch
        UpdateRow(state,{payload}){
            state.value.map(item => (item.id === payload.id) ? item.status = payload.status : "")
        },
        //delete
        // DeleteRow(state, {payload}){
        //     //Delete data
        //     state.value = state.value.filter((item)=> item.id !== payload.id);
        // },
        //Create Cateogy
        // Createfinance(state,{payload}){
        //     state.value.push(payload)
        //     console.log("Pushed payload :",payload);
        //     console.log("data today :",state.value);
        // }

    }
})

export const selectAll = state => state.shopsReport.value;
export const {UpdateRow} = ShopsReportSlice.actions;
export default ShopsReportSlice.reducer;