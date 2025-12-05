import { useEffect, useState } from "react";

function EffectModule() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component Mounted / Updated");
    return () => console.log("Component Unmounted");
  }, [count]);

  return (
    <div>
      <h2>useEffect Lifecycle</h2>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default EffectModule;