import { useState } from "react";

export default function useToggle(initialValue: boolean) {
  const [toggle, setToggle] = useState(initialValue);

  const toggleValue = () => {
    setToggle(!toggle);
  };

  const forceToggleValue = (desiredValue: boolean) => {
    setToggle(desiredValue);
  };

  return [toggle, toggleValue, forceToggleValue] as const;
}
