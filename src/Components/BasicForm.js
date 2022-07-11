import React, { useState } from "react";
import styles from "./BasicForm.module.css";

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
  const nameInValid = !nameIsValid && nameTouched;

  const emailIsValid = enteredEmail.includes("@");
  const emailInValid = !enteredEmail && emailTouched;

  const passwordIsValid = enteredPassword.trim().length === 6;
  const passwordInValid = !passwordIsValid && passwordTouched;

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
    setEnteredPassword("");
    setEnteredEmail("");
  };

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

  return (
    <form onSubmit={submitFormHandler}>
      <div className={styles["control-group"]}>
        <div className={styles["form-control"]}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            onChange={nameInputHandler}
            value={enteredName}
            onBlur={nameBlurHandler}
          />
          {/* <p>Please enter correct name!!</p> */}
        </div>
        <div className={styles["form-control"]}>
          <label htmlFor="pass">Password</label>
          <input
            type="password"
            id="pass"
            onChange={passwordInputHandler}
            value={enteredPassword}
            onBlur={passwordBlurHandler}
          />
          {/* <p>Password must be at least 6 characters!!!</p> */}
        </div>
      </div>
      <div className={styles["form-control"]}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          onChange={emailInputHandler}
          value={enteredEmail}
          onBlur={emailBlurHandler}
        />
        {/* <p>Invalid email !!!</p> */}
      </div>

      <div className={styles["form-actions"]}>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
