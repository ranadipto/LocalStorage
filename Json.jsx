//basic json convertion of any value with localstorage 


function App() {
  return (
    <div>
      Hello from App.js
      <button
        onClick={() => {
          localStorage.setItem("arr", JSON.stringify([1, 2, 3, 4]));    //"arr" means the variable or key name of the localstorage value JSON.stringify converts the array into string
          localStorage.setItem(
            "obj",
            JSON.stringify({ name: "name", address: "address1" })       
          );
        }}
      >
        SAVE
      </button>
      <button
        onClick={() => {
          let arr = localStorage.getItem("arr");
          console.log(JSON.parse(arr));                     //"JSON.parse" converts the already converted stringify value into its original form 
          let obj = localStorage.getItem("obj");
          console.log(JSON.parse(obj));
        }}
      >
        GET VALUES
      </button>
    </div>
  );
}

export default App;
