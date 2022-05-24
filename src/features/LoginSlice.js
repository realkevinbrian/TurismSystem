import { createSlice } from "@reduxjs/toolkit";

const LoginSlice = createSlice({
    name: "login",
    initialState: {
        user_status: null,
        user_role: "Standard"
    },
    reducers: {

        //Login 
        Login(state, { payload }) {
            state.user_status = payload.user_status;
            state.user_role = payload.user_role;
        },
        //Logout
        Logout(state) {
            state.user_status = null;
            state.user_role = null;
        }
    }
})



//export actions
export const { Login, Logout } = LoginSlice.actions;

export default LoginSlice.reducer;