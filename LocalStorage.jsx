//basic localStorage code 


import React, { useRef } from "react";

function LocalStorage() {
  const data = useRef();    // react hook used for input field dom manipulation instead of 'document.getElementById'
  const handleClick = () => {
    console.log(data.current.value, "initial value");  //data.current.value used for getting current value we have written
    localStorage.setItem("inputValue", data.current.value); //"inputValue" is the name of the key or variable for localstorage just click on it , it will be saved
  };
  console.log(localStorage.getItem("inputValue"), "****");  //console to get the data
  return (
    <>
      <input ref={data} />
      <button onClick={handleClick}>Add</button>
    </>
  );
}
export default LocalStorage;
