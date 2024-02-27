# @wwdrew/expo-android-shared-preferences

[![npm version](https://badge.fury.io/js/@wwdrew%2Fexpo-android-shared-preferences.svg)](https://badge.fury.io/js/@wwdrew%2Fexpo-android-shared-preferences)

Expo Module for Android SharedPreferences

## Installation in managed Expo projects

```
npx expo install @wwdrew/expo-android-shared-preferences
```

## API Reference

The filename parameter is optional for all functions. If you do not specify a filename, it will default to `<bundleId>_preferences`. This means the shared preferences will be accessed from a file named after your application's bundle identifier. This allows you to separate your application's shared preferences into different files, or use the default file associated with your application's bundle ID if no filename is specified.

### `contains(key: string, filename?: string): boolean`

Checks if the shared preferences contains a value for the given key.

### `remove(key: string, filename?: string): void`

Removes the value for the given key from the shared preferences.

### `clear(filename?: string): void`

Clears all values from the shared preferences.

### `getString(key: string, defaultValue?: string, filename?: string): string`

Retrieves a string value from the shared preferences.

### `setString(key: string, value: string, filename?: string): void`

Sets a string value in the shared preferences.

### `getInt(key: string, defaultValue?: number, filename?: string): number`

Retrieves an integer value from the shared preferences.

### `setInt(key: string, value: number, filename?: string): void`

Sets an integer value in the shared preferences.

### `getLong(key: string, defaultValue?: number, filename?: string): number`

Retrieves a long value from the shared preferences.

### `setLong(key: string, value: number, filename?: string): void`

Sets a long value in the shared preferences.

### `getFloat(key: string, defaultValue?: number, filename?: string): number`

Retrieves a float value from the shared preferences.

### `setFloat(key: string, value: number, filename?: string): void`

Sets a float value in the shared preferences.

### `getBoolean(key: string, defaultValue?: boolean, filename?: string): boolean`

Retrieves a boolean value from the shared preferences.

### `setBoolean(key: string, value: boolean, filename?: string): void`

Sets a boolean value in the shared preferences.

### `addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription`

Adds a listener for changes to the shared preferences.

## Types

### `ChangeEventPayload`
The payload for change events.
# Contributing

Contributions are very welcome! Please refer to guidelines described in the [contributing guide]( https://github.com/expo/expo#contributing).
