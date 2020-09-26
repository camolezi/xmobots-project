import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  airports: [],
};

const airportReducer = createSlice({
  name: "airport",
  initialState: initialState,
  reducers: {
    AddAirport: (state, action) => {
      state.airports.push(action.payload);
    },
    SetAirports: (state, action) => {
      state.airports = action.payload;
    },
  },
});

//Reducer
export default airportReducer.reducer;

//Actions
export const { AddAirport, SetAirports } = airportReducer.actions;

//Selectors
export const selectAllAirports = (state) => state.airport.airports;
export const selectAirport = (id) => (state) => state.airport.airports[id];
