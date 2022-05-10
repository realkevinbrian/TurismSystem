import { createSlice } from "@reduxjs/toolkit";
import category from "../Api/server.json"

const CategorySlice = createSlice({
    name : "category",
    initialState : {
        value : category.category
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
        CreateCategory(state,{payload}){
            state.value.push(payload)
            // console.log(payload);
        }

    }
})

export const selectAll = state => state.category.value; 
export const { DeleteRow, UpdateRow,CreateCategory } = CategorySlice.actions;
export default CategorySlice.reducer;