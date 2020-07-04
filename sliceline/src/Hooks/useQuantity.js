import { useState } from "react";

export function useQuantity(defualtQuantity) {
  const [value, setValue] = useState(defualtQuantity || 1);

  function onChange(e) {
    // console.log(e.target.value);
    // test that won't allow text entered into the input box
    if (!(+e.target.value >= 1)) {
      setValue(1);
      return;
    }
    setValue(+e.target.value);
  }

  return {
    value,
    setValue,
    onChange,
  };
}
