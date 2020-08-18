import { useState } from "react";
const hooks = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>React Hooks Demo</div>
      <div>Counter: {count}</div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};
export default hooks;
