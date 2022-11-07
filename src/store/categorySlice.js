import { createSlice } from "@reduxjs/toolkit";
const categorySlice = createSlice({
   name: "category",
   initialState: {
      category: []
   },
   reducers: {
      setCategory(state, action) {
         state.category = action.payload.category;
      }
   }
})
export const { setCategory } = categorySlice.actions;
export default categorySlice.reducer;