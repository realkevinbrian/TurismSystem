import { createSlice } from "@reduxjs/toolkit";
import finance from "../Api/finance.json"


const FinanceSlice = createSlice({
    name : "finance",
    initialState : {
        value : finance.finance
    },
    reducers : {
        //update
        // UpdateRow(state,{payload}){
        //     state.value.map(item => {
                
        //         if(item.id === payload.id){
        //             return(
        //             item.name = (payload.name !== null) ? payload.name : item.name,
        //             item.date = (payload.date !== null) ? payload.date : item.date,
        //             item.start = (payload.start_time !== null) ? payload.start_time : item.start, 
        //             item.entrance = (payload.entrance !== null) ? payload.entrance : item.entrance,
        //             item.local = (payload.local !== null) ? payload.local : item.local
                
        //         )
        //         }
        //     })

        //     console.log("Update row", state.value)
        // },
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

export const selectAll = state => state.finance.value; 
// export const {} = FinanceSlice.actions;
export default FinanceSlice.reducer;