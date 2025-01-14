function App() {
  return (
    <div>
      Hello from App.js
      <button
        onClick={() => {
          localStorage.setItem("arr", JSON.stringify([1, 2, 3, 4]));
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
          console.log(JSON.parse(arr));
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
