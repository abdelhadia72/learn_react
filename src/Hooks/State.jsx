import { useContext, useState } from "react";

export const State = () => {
  const [count, setCount] = useState(0);
  const increaseHandler = () => {
    setCount((prev) => prev + 1);
  };

  const decreaseHandler = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div className="mt-[200px]">
      <button
        onClick={decreaseHandler}
        className="btn btn-outline btn-error px-5">
        -
      </button>
      <button className="btn px-10 mx-6 text-2xl min-w-[150px]">{count}</button>
      <button
        onClick={increaseHandler}
        className="btn btn-outline btn-success px-5">
        +
      </button>
    </div>
  );
};
