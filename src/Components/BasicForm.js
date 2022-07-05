import React from "react";
import styles from "./BasicForm.module.css";

const BasicForm = () => {
  return (
    <form>
      <div className={styles["control-group"]}>
        <div className={styles["form-control"]}>
          <label htmlFor="name">First Name</label>
          <input type="text" id="name" />
        </div>
        <div className={styles["form-control"]}>
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" />
        </div>
      </div>
      <div className={styles["form-control"]}>
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" id="name" />
      </div>
      <div className={styles["form-actions"]}>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
