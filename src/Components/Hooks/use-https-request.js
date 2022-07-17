import React, { useEffect } from "react";

const postRequestHook = (requestConfig) => {
  const postData = async () => {
    const response = await fetch(requestConfig.url, {
      method: requestConfig.method ? requestConfig.method : "GET",
      headers: requestConfig.headers ? requestConfig.headers : {},
      body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
    });

    console.log(response);

    // const data = await response.json();

    // console.log(data);
  };
  postData();
  return;
};

export default postRequestHook;
