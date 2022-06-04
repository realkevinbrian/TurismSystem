import { createSlice } from "@reduxjs/toolkit";
import usersReport from "../Api/usersReport.json";

const UsersReportSlice = createSlice({
  name: "usersReport",
  initialState: {
    value: usersReport.usersReport,
  },
  reducers: {
    //update Method
    UpdateRow(state, { payload }) {
      state.value.map((item) => {
        // return () => {
        if (
          item.id === payload.id &&
          payload.code &&
          payload.date &&
          payload.name &&
          payload.status
        ) {
          item.name = payload.name;
          item.date = payload.date;
          item.local = payload.code;
          item.status = payload.status;
        }
        // };
      });
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
  },
});

export const selectAll = (state) => state.usersReport.value;
export const { UpdateRow } = UsersReportSlice.actions;
export default UsersReportSlice.reducer;
