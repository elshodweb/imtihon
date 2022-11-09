import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./dataSlice";
import categoryReducer from "./categorySlice";
export default configureStore({
   reducer: {
      data: dataReducer,
      category: categoryReducer,
   }
})