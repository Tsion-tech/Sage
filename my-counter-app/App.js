import React from "react";
import { Provider, useSelector } from "react-redux";
import { SafeAreaView, View, Text } from "react-native";
import { store } from "./redux/store";
import Button from "./Components/Button";

function CounterApp() {
  const count = useSelector((state) => state.counter.value);

  return (
    <SafeAreaView
      style={{ flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center" }}
    >
      <View
        style={{
          color: "orange",
          backgroundColor: "#031154",
          padding: 15,
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "bold", color: "orange" }}>
          Awash Counter App
        </Text>
      </View>
      <Text style={{ fontSize: 40, color: "#100101ff", marginTop: 10 }}>{count}</Text>
      <Button />
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <CounterApp />
    </Provider>
  );
}
