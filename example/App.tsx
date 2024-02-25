import { useSharedPreferences } from "expo-android-shared-preferences";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [keyValue, setKeyValue] = useSharedPreferences("key");
  const [otherValue, setOtherValue] = useSharedPreferences("other");

  function handleSetKeyPress() {
    setKeyValue(Math.random().toString().substring(2, 8));
  }

  function handleSetOtherPress() {
    setOtherValue(Math.random().toString().substring(2, 8));
  }

  return (
    <View style={styles.container}>
      <Button onPress={handleSetKeyPress} title="Set" />
      <Text>"key" value: {keyValue}</Text>
      <Button onPress={handleSetOtherPress} title="Set" />
      <Text>"other" value: {otherValue}</Text>
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
