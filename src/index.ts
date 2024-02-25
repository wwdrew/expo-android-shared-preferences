import { EventEmitter, Subscription } from "expo-modules-core";

import { ChangeEventPayload } from "./ExpoAndroidSharedPreferences.types";
import ExpoAndroidSharedPreferencesModule from "./ExpoAndroidSharedPreferencesModule";

export { useSharedPreferences } from "./useSharedPreferences";

export function get(key: string): string {
  return ExpoAndroidSharedPreferencesModule.get(key);
}

export function set(key: string, value: string): void {
  ExpoAndroidSharedPreferencesModule.set(key, value);
}

const emitter = new EventEmitter(ExpoAndroidSharedPreferencesModule);

export function addChangeListener(
  listener: (event: ChangeEventPayload) => void,
): Subscription {
  return emitter.addListener<ChangeEventPayload>("onChange", listener);
}

export { ChangeEventPayload };
