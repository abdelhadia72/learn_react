import { useRef, useState } from "react";

export const Ref = () => {
  const [contant, setContant] = useState("Let's type something");
  const text = useRef("");

  const clickHanlder = () => {
    setContant(text.current?.value);
    text.current.value = "";
  };

  return (
    <div className="">
      <div className="filed flex gap-4 mt-10">
        <input
          type="text"
          placeholder="Type here"
          ref={text}
          className="input input-bordered input-primary w-full max-w-xs"
        />
        <button onClick={clickHanlder} className="btn btn-success">
          Success
        </button>
      </div>
      <div className=" mt-4">
        <div role="alert" className="alert p-2 rounded-md alert-info">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-current shrink-0 w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span>{contant}</span>
        </div>
      </div>
    </div>
  );
};
