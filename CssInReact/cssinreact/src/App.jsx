import { useState } from "react";
import "./App.scss";
import Cart from "./Cart";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>CSS IN REACT</h1>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        Show
      </button>
      <Cart isShow={show} />
    </div>
  );
}

export default App;
