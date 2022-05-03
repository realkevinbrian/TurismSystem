import {createSlice} from "@reduxjs/toolkit";


/***
 * Init menuSlice 
 * 
 */

const MenuSlice = createSlice({
    name : "menu",
    initialState : {
        menuState : false,
        AgendaState : false,
        NavbarState : false
    },
    reducers : {

        setMenuState(state){

            if(state.menuState === true){
                state.menuState = false;
            }else{
                state.menuState = true;
            }
        },

        setAgendaState(state){
            if(state.AgendaState){
                state.AgendaState = false;
            }else{
                state.AgendaState = true;

            }
        },

        setNavbarState(state,action){
            state.NavbarState = action.payload
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