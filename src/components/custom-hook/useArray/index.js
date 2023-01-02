import { useCallback, useState } from "react";

export const useArray = (init) => {
  const [value, setValues] = useState(init);

  return {
    value: value,
    addValue: useCallback((a) => setValues((value) => [...value, a])),
    removeValue: useCallback((a) =>
      setValues((value) => value.filter((v) => v != a))
    ),
    removeByIndex: useCallback((a) =>
      setValues((value) => value.filter((v, i) => i !== a))
    ),
  };
};
