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
        NavbarState : false,
        CategoryState : false
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
        },
        setCategoryState(state){
            if(state.CategoryState === true){
                state.CategoryState = false;
            }else{
                state.CategoryState = true;
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