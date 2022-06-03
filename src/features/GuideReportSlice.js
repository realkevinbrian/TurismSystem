import { createSlice } from "@reduxjs/toolkit";
import guideReport from "../Api/guideReport.json"


const GuideReportSlice = createSlice({
    name : "guideReport",
    initialState : {
        value : guideReport.guideReport
    },
    reducers : {
        //update
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

export const selectAll = state => state.guideReport.value; 
export const {UpdateRow} = GuideReportSlice.actions;
export default GuideReportSlice.reducer;