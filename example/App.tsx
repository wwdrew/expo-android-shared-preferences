import {
  getBoolean,
  getFloat,
  getInt,
  getLong,
  getString,
  setBoolean,
  setFloat,
  setInt,
  setLong,
} from "expo-android-shared-preferences";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [stringValue, setStringValue] = useState(
    getString("string", "initialString"),
  );
  const [intValue, setIntValue] = useState(getInt("intValue", 1234));
  const [floatValue, setFloatValue] = useState(getFloat("floatValue", 12.34));
  const [longValue, setLongValue] = useState(
    getLong("longValue", 54836785364878),
  );
  const [booleanValue, setBooleanValue] = useState(
    getBoolean("booleanValue", true),
  );

  function handleSetStringPress() {
    setStringValue(Math.random().toString().substring(2, 8));
  }

  function handleSetIntPress() {
    const random = Number(Math.random().toString().substring(2, 4));

    setIntValue(random);
    setInt("intValue", random);
  }

  function handleSetLongPress() {
    const random = Number(Math.random().toString().substring(2, 10));

    setLongValue(random);
    setLong("longValue", random);
  }

  function handleSetFloatPress() {
    const random = Math.random();

    setFloatValue(random);
    setFloat("floatValue", random);
  }

  function handleSetBooleanPress() {
    setBoolean("booleanValue", !booleanValue);
    setBooleanValue(!booleanValue);
  }

  return (
    <View style={styles.container}>
      <Button onPress={handleSetStringPress} title="Set String" />
      <Text>String: {stringValue}</Text>
      <Button onPress={handleSetIntPress} title="Set Int" />
      <Text>Int: {intValue}</Text>
      <Button onPress={handleSetLongPress} title="Set Long" />
      <Text>Long: {longValue}</Text>
      <Button onPress={handleSetFloatPress} title="Set Float" />
      <Text>Float: {floatValue}</Text>
      <Button onPress={handleSetBooleanPress} title="Set Boolean" />
      <Text>Boolean: {booleanValue ? "true" : "false"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
