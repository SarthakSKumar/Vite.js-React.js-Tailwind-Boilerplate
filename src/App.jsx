import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React Boilerplate</h1>
      <div className="m-4 p-4">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p className="m-4">
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p>
        Boilerplate by{" "}
        <a href="https://github.com/sarthakskumar">Sarthak S Kumar</a>
      </p>
    </>
  );
}

export default App;
