import React from "react";
import { useHistory } from 'react-router-dom';

const Error = () => {
  const history = useHistory();
  return (
    <div class="d-flex flex-column min-vh-100 justify-content-center align-items-center">
      <div class="mb-3">
        <h1 class="main-heading">Oops!</h1>
        <h3>A server/network error occurred </h3>
        <p class="text-center">Looks like CORS might be the problem. Sorry about this - we will get it fixed shortly</p>
      </div>
      <button class="btn btn-primary" onClick={()=> history.push("/")}>Back to Home</button>
    </div>
  );
}

export default Error;