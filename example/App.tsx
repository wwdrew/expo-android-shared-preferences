import { StyleSheet, Text, View } from 'react-native';

import * as ExpoAndroidSharedPreferences from 'expo-android-shared-preferences';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ExpoAndroidSharedPreferences.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
