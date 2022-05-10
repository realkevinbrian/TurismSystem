import { createSlice } from "@reduxjs/toolkit";
import approved from "../Api/approved.json"

const ApprovedSlice = createSlice({
    name : "approved",
    initialState : {
        value : approved.approved
    },
    reducers : {

        //update
        UpdateRow(state,{payload}){
            state.value.map(item => {
                if(item.id === payload.id){
                    //check if payload not null
                    if(payload.name !== null){
                        item.name = payload.name;
                    }else if(payload.type !== null){
                        item.type = payload.type;
                    }
                }
            })
        },
        //delete
        DeleteRow(state, {payload}){
            //Delete data
            state.value = state.value.filter((item)=> item.id !== payload.id);
        },
        //Create Cateogy
        Createapproved(state,{payload}){
            state.value.push(payload)
            // console.log(payload);
        }

    }
})

export const selectAll = state => state.approved.value; 
export const { DeleteRow, UpdateRow,Createapproved } = ApprovedSlice.actions;
export default ApprovedSlice.reducer;