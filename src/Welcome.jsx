import React from "react";

export default function Welcome() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center ">
      <div className=" text-green-300  text-7xl">Welcome 👋</div>
      <p className="mt-1 text-2xl">Let's Learn React.js</p>
      <div className="mt-3 bg-gray-900 min-w-[350px] p-4 rounded-lg">
        <span>URL/</span>
        <span className="text-green-400 font-bold">Allowed : </span>
        <span>todo, form</span>
        <p>
          Exmaple{" "}
          <span className="text-yellow-400">http://localhost:3000/</span>{" "}
          <span className="text-red-400 font-bold">form</span>
        </p>
      </div>
    </div>
  );
}
