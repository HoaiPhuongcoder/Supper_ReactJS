import { useEffect, useState } from "react";

function Count() {
  const [count, setCount] = useState<number>(0);
  const handleClick = () => {
    setCount((prev) => prev + 1);
  };
  useEffect(() => {
    if (count === 4) {
      setCount(0);
    }
  }, [count]);
  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default Count;
