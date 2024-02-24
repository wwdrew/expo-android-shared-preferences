import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoAndroidSharedPreferencesViewProps } from './ExpoAndroidSharedPreferences.types';

const NativeView: React.ComponentType<ExpoAndroidSharedPreferencesViewProps> =
  requireNativeViewManager('ExpoAndroidSharedPreferences');

export default function ExpoAndroidSharedPreferencesView(props: ExpoAndroidSharedPreferencesViewProps) {
  return <NativeView {...props} />;
}
