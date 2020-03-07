
import Spinner from 'react-bootstrap/Spinner'
import React from "react";

const SpinnerLoading = () =>{
    return (<Spinner animation="border" role="status">
    <span className="sr-only">Loading...</span>
  </Spinner>);
}

export default SpinnerLoading;
