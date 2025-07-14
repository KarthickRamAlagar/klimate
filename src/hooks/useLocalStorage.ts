import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (e) {
      console.log(e);
      return initialValue;
    }
  });
  useEffect(() => {
    return () => {
      try {
        window.localStorage.setItem(key, JSON.stringify(storedValue));
      } catch (e) {
        console.log(e);
      }
    };
  }, [key, storedValue]);

  return [storedValue, setStoredValue] as const;
}
