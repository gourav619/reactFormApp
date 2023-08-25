import { useState } from "react";

const useInput = (validateInput) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isInputFieldTouched, setIsInputFieldTouched] = useState(false);

  const IsValid = validateInput(enteredValue);
  const IsInvalid = !IsValid && isInputFieldTouched;

 const handleInputTouched = () => {
    setIsInputFieldTouched(true);
  };

  const handleEnteredValue = (event) => {
    setEnteredValue(event.target.value);
  };

  const resetInput = () => {
    setEnteredValue("");
    handleInputTouched(false);
  };

  return {
    enteredValue,
    IsValid,
    IsInvalid,
    handleInputTouched,
    handleEnteredValue,
    resetInput,
  };
};
export default useInput;
