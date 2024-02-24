import * as React from 'react';

import { ExpoAndroidSharedPreferencesViewProps } from './ExpoAndroidSharedPreferences.types';

export default function ExpoAndroidSharedPreferencesView(props: ExpoAndroidSharedPreferencesViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
