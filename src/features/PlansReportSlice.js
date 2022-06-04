import { createSlice } from "@reduxjs/toolkit";
import plansReport from "../Api/plansReport.json"

const PlansReportSlice = createSlice({
    name : "plansReport",
    initialState : {
        value : plansReport.plansReport
    },
    reducers : {

        //update
        UpdateRow(state,{payload}){
            state.value.map(item => {
                if(item.id === payload.id && payload.name && payload.type && payload.value){
                    item.name = payload.name;
                    item.type = payload.type;
                    item.value = payload.value;
                }
            })
        },
        //delete
        DeleteRow(state, {payload}){
            //Delete data
            state.value = state.value.filter((item)=> item.id !== payload.id);
        },
        //Create Cateogy
        CreateplansReport(state,{payload}){
            state.value.push(payload)
            // console.log(payload);
        }

    }
})

export const selectAll = state => state.plansReport.value; 
export const { DeleteRow, UpdateRow,CreateplansReport } = PlansReportSlice.actions;
export default PlansReportSlice.reducer;