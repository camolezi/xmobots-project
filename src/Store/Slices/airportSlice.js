import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  airports: [],
};

//Create store slice- for login
const airportReducer = createSlice({
  name: "airport",
  initialState: initialState,
  reducers: {
    AddAirport: (state, action) => {
      state.airports.push(action.payload);
    },
  },
});

export default airportReducer.reducer;

//Actions
export const { AddAirport } = airportReducer.actions;

//Selectors
export const selectAllAirports = (state) => state.airport.airports;
export const selectAirport = (id) => (state) => state.airport.airports[id];
