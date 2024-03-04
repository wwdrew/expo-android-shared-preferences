import { useEffect, useState } from "react";

import {
  getString,
  setString,
  addChangeListener,
} from "./AndroidSharedPreferences";

export function useSharedPreferences(key: string) {
  const [value, setValue] = useState(() => getString(key));

  useEffect(() => {
    const subscription = addChangeListener((event) => {
      if (event.key === key) {
        setValue(event.value);
      }
    });

    return () => {
      subscription.remove();
    };
  }, [key]);

  function setNewValue(newValue: string) {
    setString(key, newValue);
  }

  return [value, setNewValue] as const;
}
