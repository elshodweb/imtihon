import { createSlice } from "@reduxjs/toolkit";
const dataSlice = createSlice({
   name:"data",
   initialState:{
      data:[]
   },
   reducers:{
      getData(state,action){
         state.data = action.payload.data;
      }
   }
})
export const {getData} = dataSlice.actions;
export default dataSlice.reducer;