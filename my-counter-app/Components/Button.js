import React from "react";
import { View, Pressable, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { add, subtract, reset } from "../redux/counterSlice";

export default function Button() {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View style={{ flexDirection: "row", gap: 15, marginTop: 20 }}>
      <Pressable
        style={{ backgroundColor: "#07cee0", padding: 10, borderRadius:30}}
        onPress={() => dispatch(add())}
      >
        <Text style={{ color: "#ed15f5ff", fontWeight: "bold" }}>Add</Text>
      </Pressable>

      <Pressable
        style={{ backgroundColor: "#07cee0", padding: 10 ,borderRadius:30}}
        onPress={() => dispatch(subtract())}
      >
        <Text style={{ color: "#ed15f5ff", fontWeight: "bold" }}>Subtract</Text>
      </Pressable>

      <Pressable
        style={{ backgroundColor: "#c8790b", padding: 10,borderRadius:30}}
        onPress={() => dispatch(reset())}
      >
        <Text style={{ color: "#ed15f5ff", fontWeight: "bold" }}>Reset</Text>
      </Pressable>
    </View>
  );
}
