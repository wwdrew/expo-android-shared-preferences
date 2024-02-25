import { useEffect, useState } from "react";

import { get, set, addChangeListener } from "./index";

export function useSharedPreferences(key: string) {
  const [value, setValue] = useState(() => get(key));

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
    set(key, newValue);
  }

  return [value, setNewValue] as const;
}
