import React, { useEffect, useState } from "react";

const PREFIX = `penforge-`;

const useLocalStorage = (key, initialValue) => {
  const prefixedKey = PREFIX + key;
  const [value, setValue] = useState(() => {
    //getting our value from "LocalStorage" is very slowly so we need to do it once.
    const jsonValue = localStorage.getItem(prefixedKey);

    if (jsonValue != null) return JSON.parse(jsonValue);
    if (typeof initialValue === "function") {
      return initialValue();
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    //we need to resave to localstorage
    localStorage.setItem(prefixedKey, JSON.stringify(value));
  }, [prefixedKey, value]); //for everytime we change our value
  return [value, setValue];
};

export default useLocalStorage;
