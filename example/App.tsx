import {
  clear,
  getBoolean,
  getFloat,
  getInt,
  getLong,
  getString,
  remove,
  setBoolean,
  setFloat,
  setInt,
  setLong,
  setString,
} from "expo-android-shared-preferences";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const EXAMPLE_PREFERENCES_FILE = "example_preferences";
const STRING_KEY = "string";
const INT_KEY = "int";
const FLOAT_KEY = "float";
const LONG_KEY = "long";
const BOOLEAN_KEY = "boolean";

const STRING_INITIAL_VALUE = "initialString";
const INT_INITIAL_VALUE = 1234;
const FLOAT_INITIAL_VALUE = 12.34;
const LONG_INITIAL_VALUE = 54836785364878;
const BOOLEAN_INITIAL_VALUE = true;

export default function App() {
  const [stringValue, setStringValue] = useState(
    getString(STRING_KEY, STRING_INITIAL_VALUE, EXAMPLE_PREFERENCES_FILE),
  );
  const [intValue, setIntValue] = useState(
    getInt(INT_KEY, INT_INITIAL_VALUE, EXAMPLE_PREFERENCES_FILE),
  );
  const [floatValue, setFloatValue] = useState(
    getFloat(FLOAT_KEY, FLOAT_INITIAL_VALUE, EXAMPLE_PREFERENCES_FILE),
  );
  const [longValue, setLongValue] = useState(
    getLong(LONG_KEY, LONG_INITIAL_VALUE, EXAMPLE_PREFERENCES_FILE),
  );
  const [booleanValue, setBooleanValue] = useState(
    getBoolean(BOOLEAN_KEY, BOOLEAN_INITIAL_VALUE, EXAMPLE_PREFERENCES_FILE),
  );

  function handleSetStringPress() {
    const random = Math.random().toString().substring(2, 8);
    setStringValue(random);
    setString(STRING_KEY, random, EXAMPLE_PREFERENCES_FILE);
  }

  function handleRemoveStringPress() {
    remove(STRING_KEY, EXAMPLE_PREFERENCES_FILE);
    setStringValue(
      getString(STRING_KEY, STRING_INITIAL_VALUE, EXAMPLE_PREFERENCES_FILE),
    );
  }

  function handleSetIntPress() {
    const random = Number(Math.random().toString().substring(2, 4));

    setIntValue(random);
    setInt(INT_KEY, random, EXAMPLE_PREFERENCES_FILE);
  }

  function handleRemoveIntPress() {
    remove(INT_KEY, EXAMPLE_PREFERENCES_FILE);
    setIntValue(getInt(INT_KEY, INT_INITIAL_VALUE, EXAMPLE_PREFERENCES_FILE));
  }

  function handleSetLongPress() {
    const random = Number(Math.random().toString().substring(2, 10));

    setLongValue(random);
    setLong(LONG_KEY, random, EXAMPLE_PREFERENCES_FILE);
  }

  function handleRemoveLongPress() {
    remove(LONG_KEY, EXAMPLE_PREFERENCES_FILE);
    setLongValue(
      getLong(LONG_KEY, LONG_INITIAL_VALUE, EXAMPLE_PREFERENCES_FILE),
    );
  }

  function handleSetFloatPress() {
    const random = Math.random();

    setFloatValue(random);
    setFloat(FLOAT_KEY, random, EXAMPLE_PREFERENCES_FILE);
  }

  function handleRemoveFloatPress() {
    remove(FLOAT_KEY, EXAMPLE_PREFERENCES_FILE);
    setFloatValue(
      getFloat(FLOAT_KEY, FLOAT_INITIAL_VALUE, EXAMPLE_PREFERENCES_FILE),
    );
  }

  function handleSetBooleanPress() {
    setBoolean(BOOLEAN_KEY, !booleanValue, EXAMPLE_PREFERENCES_FILE);
    setBooleanValue(!booleanValue);
  }

  function handleRemoveBooleanPress() {
    remove(BOOLEAN_KEY, EXAMPLE_PREFERENCES_FILE);
    setBooleanValue(
      getBoolean(BOOLEAN_KEY, BOOLEAN_INITIAL_VALUE, EXAMPLE_PREFERENCES_FILE),
    );
  }

  function handleClearPress() {
    clear(EXAMPLE_PREFERENCES_FILE);
  }

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", gap: 16, marginVertical: 8 }}>
        <Button onPress={handleSetStringPress} title="Set String" />
        <Button onPress={handleRemoveStringPress} title="Remove String" />
      </View>
      <Text>String: {stringValue}</Text>
      <View style={{ flexDirection: "row", gap: 16, marginVertical: 8 }}>
        <Button onPress={handleSetIntPress} title="Set Int" />
        <Button onPress={handleRemoveIntPress} title="Remove Int" />
      </View>
      <Text>Int: {intValue}</Text>
      <View style={{ flexDirection: "row", gap: 16, marginVertical: 8 }}>
        <Button onPress={handleSetLongPress} title="Set Long" />
        <Button onPress={handleRemoveLongPress} title="Remove Long" />
      </View>
      <Text>Long: {longValue}</Text>
      <View style={{ flexDirection: "row", gap: 16, marginVertical: 8 }}>
        <Button onPress={handleSetFloatPress} title="Set Float" />
        <Button onPress={handleRemoveFloatPress} title="Remove Float" />
      </View>
      <Text>Float: {floatValue}</Text>
      <View style={{ flexDirection: "row", gap: 16, marginVertical: 8 }}>
        <Button onPress={handleSetBooleanPress} title="Set Boolean" />
        <Button onPress={handleRemoveBooleanPress} title="Remove Boolean" />
      </View>
      <Text>Boolean: {booleanValue ? "true" : "false"}</Text>
      <View style={{ flexDirection: "row", gap: 16, marginVertical: 8 }}>
        <Button onPress={handleClearPress} title="Clear" />
      </View>
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
