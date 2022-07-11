import React, { useState } from "react";
import "./BasicForm.css";
// import styles from "./BasicForm.module.css";

const BasicForm = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");

  // touched states
  const [nameTouched, setNameTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

  // overall form validation

  const nameIsValid = enteredName.trim() !== "";
  const nameIsInValid = !nameIsValid && nameTouched;

  const emailIsValid = enteredEmail.includes("@");
  const emailIsInValid = !emailIsValid && emailTouched;

  const passwordIsValid = enteredPassword.trim().length >= 6;
  const passwordIsInValid = !passwordIsValid && passwordTouched;

  const submitFormHandler = (event) => {
    event.preventDefault();

    //  prevent submission of empty inputs
    if (
      enteredName.trim() === "" &&
      enteredEmail.trim() === "" &&
      enteredPassword.trim() === ""
    ) {
      return;
    }
    console.log(enteredName, enteredEmail, enteredPassword);
    // clear user inputs
    setEnteredName("");
    setNameTouched(false);

    setEnteredPassword("");
    setPasswordTouched(false);

    setEnteredEmail("");
    setEmailTouched(false);
  };

  let formIsValid = false;

  if (nameIsValid && emailIsValid && passwordIsValid) {
    formIsValid = true;
  }

  const nameInputHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const passwordInputHandler = (event) => {
    setEnteredPassword(event.target.value);
  };
  const emailInputHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  // blur handlers
  const nameBlurHandler = () => {
    setNameTouched(true);
  };
  const passwordBlurHandler = () => {
    setPasswordTouched(true);
  };
  const emailBlurHandler = () => {
    setEmailTouched(true);
  };

  const nameInputClasses = nameIsInValid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailIsInValid
    ? "form-control invalid"
    : "form-control";

  const passwordInputClasses = passwordIsInValid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitFormHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Full Names:</label>
        <input
          type="text"
          id="name"
          onChange={nameInputHandler}
          value={enteredName}
          onBlur={nameBlurHandler}
        />
        {nameIsInValid && <p>Name must not be empty !!</p>}
      </div>
      <div className={passwordInputClasses}>
        <label htmlFor="pass">Password:</label>
        <input
          type="password"
          id="pass"
          onChange={passwordInputHandler}
          value={enteredPassword}
          onBlur={passwordBlurHandler}
        />
        {passwordIsInValid && <p>Password must be at least 6 characters !!!</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">E-Mail Address:</label>
        <input
          type="email"
          id="email"
          onChange={emailInputHandler}
          value={enteredEmail}
          onBlur={emailBlurHandler}
        />
        {emailIsInValid && <p>Invalid email !!!</p>}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
