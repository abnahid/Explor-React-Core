import { useState } from "react";

export default function Centare() {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  const handleRemove = () => {
    const newCount = count - 1;
    setCount(newCount);
  };
  return (
    <div>
      <h3>centare: {count} </h3>
      <button onClick={handleAdd}>Love You</button>
      <button onClick={handleRemove}>Block</button>
    </div>
  );
}
