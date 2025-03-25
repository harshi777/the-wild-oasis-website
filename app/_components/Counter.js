"use client";

import { useState } from "react";

function Counter({ user }) {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>There are {user.length} users.</h1>
      <button onClick={() => setCounter((c) => c + 1)}>{counter}</button>
    </div>
  );
}

export default Counter;
