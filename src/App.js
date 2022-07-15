import React, { useCallback, useEffect } from "react";

import BasicForm from "./Components/BasicForm";

const App = () => {
  const formHandler = (name, email, password) => {
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
    </div>
  );
};

export default App;
