import useInput from "./hooks/use-input";

const SimpleInput = (props) => {
  const {
    enteredValue: enteredNameValue,
    IsValid: EnteredNameIsValid,
    IsInvalid: EnteredNameIsInvalid,
    handleInputTouched: handleNameInputTouched,
    handleEnteredValue: handleNameInputValue,
    resetInput: resetName,
  } = useInput((value) => value.trim() !== "");
  const {
    enteredValue: enteredEmailValue,
    IsValid: EnteredEmailIsValid,
    IsInvalid: EnteredEmailIsInvalid,
    handleInputTouched: handleEmailInputTouched,
    handleEnteredValue: handleEmailInputValue,
    resetInput: resetEmail,
  } = useInput((value) => value.includes("@"));

  let isFormValid = false;
  console.log(EnteredNameIsInvalid);
  if (EnteredNameIsValid && EnteredEmailIsValid) isFormValid = true;

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (!EnteredNameIsValid) {
      return;
    }
    
    resetName();
    resetEmail();
  };

  const formClasses = EnteredEmailIsInvalid
    ? "form-control invalid"
    : "form-control";

  const formNameClasses = EnteredNameIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={formNameClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={handleNameInputValue}
          onBlur={handleNameInputTouched}
          value={enteredNameValue}
        />
        {EnteredNameIsInvalid && (
          <p className="error-text">Name should not be empty!</p>
        )}
      </div>
      <div className={formClasses}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          onChange={handleEmailInputValue}
          onBlur={handleEmailInputTouched}
          value={enteredEmailValue}
        />
        {EnteredEmailIsInvalid && (
          <p className="error-text">Enter valid email!</p>
        )}
      </div>

      <div className="form-actions">
        {console.log(isFormValid)}
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
