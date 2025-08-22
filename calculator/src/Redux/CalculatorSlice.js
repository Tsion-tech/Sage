import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  num: "",      
  res: "",      
  sign: "",     
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    reset: () => initialState, 

    setNum: (state, action) => {
      const value = action.payload;
      if (value === "0" && state.num === "0") return;
      if (value === "." && state.num.includes(".")) return;
      state.num = state.num + value;
    },

    setSign: (state, action) => {
      const num = parseFloat(state.num);
      if (state.num !== "") {
        if (state.sign && state.res !== "Error") {
          const res = parseFloat(state.res);
          switch (state.sign) {
            case "+": state.res = String(res + num); break;
            case "-": state.res = String(res - num); break;
            case "X": state.res = String(res * num); break;
            case "/": state.res = num === 0 ? "Error" : String(res / num); break;
            default: break;
          }
        } else {
          state.res = String(num);
        }
      }
      state.sign = action.payload;
      state.num = "";
    },

    calculate: (state) => {
      if (!state.sign || state.num === "") return;

      const num = parseFloat(state.num);
      const res = parseFloat(state.res);
      let result = res;

      switch (state.sign) {
        case "+": result = res + num; break;
        case "-": result = res - num; break;
        case "X": result = res * num; break;
        case "/": result = num === 0 ? "Error" : res / num; break;
        default: break;
      }

      state.res = String(result);
      state.num = "";
      state.sign = "";
    },

    invert: (state) => {
      if (state.num !== "") {
        state.num = String(-parseFloat(state.num));
      } else if (state.res !== "") {
        state.res = String(-parseFloat(state.res));
      }
    },

    percent: (state) => {
      if (state.num !== "") {
        state.num = String(parseFloat(state.num) / 100);
      } else if (state.res !== "") {
        state.res = String(parseFloat(state.res) / 100);
      }
    },

    clearEntry: (state) => {
      state.num = ""; 
    },
  },
});

export const {
  reset,
  setNum,
  setSign,
  calculate,
  invert,
  percent,
  clearEntry,
} = calculatorSlice.actions;

export default calculatorSlice.reducer;
