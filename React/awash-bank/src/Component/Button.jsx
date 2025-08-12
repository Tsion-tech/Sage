import { useSelector, useDispatch } from "react-redux";
import { add, subtract, reset } from "../redux/counterSlice";

export default function Button() {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "15px" }}>
      <button onClick={() => dispatch(add())}>Add</button>
      <button onClick={() => dispatch(subtract())}>Subtract</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}
