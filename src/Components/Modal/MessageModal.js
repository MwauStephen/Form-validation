import React from "react";
import { Alert, AlertTitle } from "@mui/material";
import styles from "./MessageModal.module.css";

const MessageModal = () => {
  return (
    <div className={styles.message}>
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        Data sent successfully
      </Alert>
    </div>
  );
};

export default MessageModal;
