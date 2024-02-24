import {
  NativeModulesProxy,
  EventEmitter,
  Subscription,
} from "expo-modules-core";

// Import the native module. On web, it will be resolved to ExpoAndroidSharedPreferences.web.ts
// and on native platforms to ExpoAndroidSharedPreferences.ts
import { ChangeEventPayload } from "./ExpoAndroidSharedPreferences.types";
import ExpoAndroidSharedPreferencesModule from "./ExpoAndroidSharedPreferencesModule";

export function get(key: string): string {
  return ExpoAndroidSharedPreferencesModule.get(key);
}

export function set(key: string, value: string): void {
  ExpoAndroidSharedPreferencesModule.set(key, value);
}

const emitter = new EventEmitter(
  ExpoAndroidSharedPreferencesModule ??
    NativeModulesProxy.ExpoAndroidSharedPreferences,
);

export function addChangeListener(
  listener: (event: ChangeEventPayload) => void,
): Subscription {
  return emitter.addListener<ChangeEventPayload>("onChange", listener);
}

export { ChangeEventPayload };
