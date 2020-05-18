import * as React from "react";

const useInput = (initialValue) => {
  const [value, setValue] = React.useState(initialValue);
  const onChange = (text) => {
    setValue(text);
  };
  return { value, onChange };
};

export default useInput;
