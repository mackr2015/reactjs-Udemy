import { useState } from "react";

function CounterExample() {
  // Storing value in state
  // second function is the setter for variable
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <h2>Counter example using State Hook</h2>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)} className="btn">Counter +</button>
      <p>If equal or less than 0 counter will return 0</p>
      <button onClick={() => setCount(count <= 0 ? 0 : count - 1)} className="btn">
        Counter -
      </button>
    </div>
  );
}

export default CounterExample;
