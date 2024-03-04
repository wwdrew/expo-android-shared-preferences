import { EventEmitter, Subscription } from "expo-modules-core";

import { ChangeEventPayload } from "./AndroidSharedPreferences.types";
import ExpoAndroidSharedPreferencesModule from "./ExpoAndroidSharedPreferences";

export { useSharedPreferences } from "./useSharedPreferences";

export function contains(key: string, filename?: string): boolean {
  return ExpoAndroidSharedPreferencesModule.contains(key, filename);
}

export function remove(key: string, filename?: string): void {
  ExpoAndroidSharedPreferencesModule.remove(key, filename);
}

export function clear(filename?: string): void {
  ExpoAndroidSharedPreferencesModule.clear(filename);
}

// String
export function getString(
  key: string,
  defaultValue?: string,
  filename?: string
): string {
  return ExpoAndroidSharedPreferencesModule.getString(
    key,
    defaultValue,
    filename
  );
}

export function setString(key: string, value: string, filename?: string): void {
  ExpoAndroidSharedPreferencesModule.setString(key, value, filename);
}

// Int
export function getInt(
  key: string,
  defaultValue?: number,
  filename?: string
): number {
  return ExpoAndroidSharedPreferencesModule.getInt(key, defaultValue, filename);
}

export function setInt(key: string, value: number, filename?: string): void {
  ExpoAndroidSharedPreferencesModule.setInt(key, value, filename);
}

// Long
export function getLong(
  key: string,
  defaultValue?: number,
  filename?: string
): number {
  return ExpoAndroidSharedPreferencesModule.getLong(
    key,
    defaultValue,
    filename
  );
}

export function setLong(key: string, value: number, filename?: string): void {
  ExpoAndroidSharedPreferencesModule.setLong(key, value, filename);
}

// Float
export function getFloat(
  key: string,
  defaultValue?: number,
  filename?: string
): number {
  return ExpoAndroidSharedPreferencesModule.getFloat(
    key,
    defaultValue,
    filename
  );
}

export function setFloat(key: string, value: number, filename?: string): void {
  ExpoAndroidSharedPreferencesModule.setFloat(key, value, filename);
}

// Boolean
export function getBoolean(
  key: string,
  defaultValue?: boolean,
  filename?: string
): boolean {
  return ExpoAndroidSharedPreferencesModule.getBoolean(
    key,
    defaultValue,
    filename
  );
}

export function setBoolean(
  key: string,
  value: boolean,
  filename?: string
): void {
  ExpoAndroidSharedPreferencesModule.setBoolean(key, value, filename);
}

const emitter = new EventEmitter(ExpoAndroidSharedPreferencesModule);

export function addChangeListener(
  listener: (event: ChangeEventPayload) => void
): Subscription {
  return emitter.addListener<ChangeEventPayload>("onChange", listener);
}

export { ChangeEventPayload };
