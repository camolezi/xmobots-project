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
    setUserLogged: (state, action) => {
      state.logged = action.payload;
    },

    setLogin: (state, action) => {
      state.login = action.payload;
    },
  },
});

export default loginSlice.reducer;

//Actions
export const { setUserLogged, setLogin } = loginSlice.actions;

//Selectors
export const selectLogin = (state) => state.login.login;
export const selectLogged = (state) => state.login.logged;
