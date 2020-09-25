import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: "",
  logged: false,
};

//Create store slice- for login
const loginSlice = createSlice({
  name: "login",
  initialState: initialState,
  reducers: {
    setLogin: (state, action) => {
      state.login = action.payload;
      if (action.payload) {
        state.logged = true;
      }
    },
  },
});

export default loginSlice.reducer;

//Actions
export const { setLogin } = loginSlice.actions;

//Selectors
export const selectLogin = (state) => state.login.login;
export const selectLogged = (state) => state.login.logged;
