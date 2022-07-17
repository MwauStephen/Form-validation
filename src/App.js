import React, { useCallback, useEffect } from "react";
import postRequestHook from "./Components/Hooks/use-https-request";
import MessageModal from "./Components/Modal/MessageModal";
import BasicForm from "./Components/BasicForm";

const App = () => {
  const formHandler = (name, email, password) => {
    // const sendRequest = async () => {
    //   postRequestHook({
    //     url: "https://post-form-data-f16ec-default-rtdb.firebaseio.com/form.json",
    //     method: "POST",
    //     body: { name: name, email: email, passowrd: password },
    //     Headers: { "Content-Type": "application/json" },
    //   });
    // };
    // sendRequest();
    const fetchData = async () => {
      const response = await fetch(
        "https://post-form-data-f16ec-default-rtdb.firebaseio.com/form.json",
        {
          method: "POST",
          body: JSON.stringify({
            name: name,
            email: email,
            password: password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
    };
    fetchData();
  };

  // const formHandler = (name, email, password) => {
  //   console.log(name);
  //   console.log(email);
  //   console.log(password);
  // };

  // useEffect(() => {}, []);

  return (
    <div className="app">
      <BasicForm sendFormData={formHandler} />
      <MessageModal />
    </div>
  );
};

export default App;
