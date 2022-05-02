import {createSlice} from "@reduxjs/toolkit";


/***
 * Init menuSlice 
 * 
 */

const MenuSlice = createSlice({
    name : "menu",
    initialState : {
        menuState : false
    },
    reducers : {

        setMenuState(state){

            if(state.menuState === true){
                state.menuState = false;
            }else{
                state.menuState = true;
            }
        }
    }
})

/***
 * Export actions
 */

export const MenuActions = MenuSlice.actions;


/***
 * Export default reducers
 */

export  default MenuSlice.reducer;