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
