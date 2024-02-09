import { Ref } from "./Ref";
import { State } from "./State";

export const PageHooks = () => {
  return (
    <div className=" w-screen flex flex-col gap-5 items-center justify-center ">
      <State />
      <Ref />
    </div>
  );
};
