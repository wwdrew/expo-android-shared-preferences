import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoAndroidSharedPreferences.web.ts
// and on native platforms to ExpoAndroidSharedPreferences.ts
import ExpoAndroidSharedPreferencesModule from './ExpoAndroidSharedPreferencesModule';
import ExpoAndroidSharedPreferencesView from './ExpoAndroidSharedPreferencesView';
import { ChangeEventPayload, ExpoAndroidSharedPreferencesViewProps } from './ExpoAndroidSharedPreferences.types';

// Get the native constant value.
export const PI = ExpoAndroidSharedPreferencesModule.PI;

export function hello(): string {
  return ExpoAndroidSharedPreferencesModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoAndroidSharedPreferencesModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoAndroidSharedPreferencesModule ?? NativeModulesProxy.ExpoAndroidSharedPreferences);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoAndroidSharedPreferencesView, ExpoAndroidSharedPreferencesViewProps, ChangeEventPayload };
