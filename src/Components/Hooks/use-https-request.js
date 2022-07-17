import React, { useCallback } from "react";

const usePostRequest = () => {
  const postData = useCallback(async (requestConfig) => {
    const response = await fetch(requestConfig.url, {
      method: requestConfig.method ? requestConfig.method : "GET",
      headers: requestConfig.headers ? requestConfig.headers : {},
      body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
    });
    console.log(response);
  }, []);

  return {
    postData: postData,
  };
};

export default usePostRequest;

// const usePostRequest = (requestConfig) => {
//   const fetchData = async () => {
//     const response = await fetch(requestConfig.url, {
//       method: requestConfig.method ? requestConfig.method : "GET",
//       body: requestConfig.body ? JSON.stringify(requestConfig.body) : {},
//       headers: requestConfig.headers ? requestConfig.headers : null,
//     });
//     console.log(response);
//   };
//   return {
//     data: fetchData,
//   };
//   //   fetchData();
// };

// export default usePostRequest;
