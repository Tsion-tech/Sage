import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  reset,
  setNum,
  setSign,
  calculate,
  invert,
  percent,
  clearEntry,
} from "./Redux/CalculatorSlice";

import Wrapper from "./Components/Wrapper";
import Screen from "./Components/Screen";
import ButtonBox from "./Components/ButtonBox";
import Button from "./Components/Button";

const btnValues = [
  ["AC", "C", "%", "/"],
  ["7", "8", "9", "X"],
  ["4", "5", "6", "-"],
  ["1", "2", "3", "+"],
  ["0", ".", "="],
];

const App = () => {
  const dispatch = useDispatch();
  const calc = useSelector((state) => state.calculator);

  const handleClick = (btn) => {
    if (!isNaN(btn) || btn === ".") {
      dispatch(setNum(btn));
    } else if (["+", "-", "X", "/"].includes(btn)) {
      dispatch(setSign(btn));
    } else if (btn === "=") {
      dispatch(calculate());
    } else if (btn === "AC") {
      dispatch(reset());
    } else if (btn === "C") {
      dispatch(clearEntry());
    } else if (btn === "+-") {
      dispatch(invert());
    } else if (btn === "%") {
      dispatch(percent());
    }
  };

  return (
    <Wrapper>
      <Screen
        value={calc.num !== "" ? calc.num : calc.res }
        history={calc.history}
      />

      <ButtonBox>
        {btnValues.flat().map((btn, i) => (
          <Button
            key={i}
            value={btn}
            className={btn === "=" ? "equals" : ""}
            onClick={() => handleClick(btn)}
          />
        ))}
      </ButtonBox>
    </Wrapper>
  );
};

export default App;