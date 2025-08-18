import { configureStore } from "@reduxjs/toolkit";
import calculatorReducer from "./CalculatorSlice";

const Store = configureStore({
  reducer: {
    calculator: calculatorReducer,
  },
});

export default Store;
