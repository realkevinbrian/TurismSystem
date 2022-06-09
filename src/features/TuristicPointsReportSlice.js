import { createSlice } from "@reduxjs/toolkit";
import turisticPoints from "../Api/turisticPointsReport.json";

const TuristicReportSlice = createSlice({
  name: "turisticPoint",
  initialState: {
    value: turisticPoints.turisticPoints,
  },
  reducers: {
    //update
    UpdateRow(state, { payload }) {
      state.value.map((item) => {
        if (item.id === payload.id) {
          item.status = payload.status;
        }
      });
    },
    //delete
    // DeleteRow(state, {payload}){
    //     //Delete data
    //     state.value = state.value.filter((item)=> item.id !== payload.id);
    // },
    //Create Cateogy
    // CreateplansReport(state,{payload}){
    //     state.value.push(payload)
    //     // console.log(payload);
    // }
  },
});

export const selectAll = (state) => state.turisticPoint.value;
export const { DeleteRow, UpdateRow, CreateplansReport } =
  TuristicReportSlice.actions;
export default TuristicReportSlice.reducer;
