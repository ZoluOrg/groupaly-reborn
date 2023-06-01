import { Button } from "@/components/Button";
import { Clock } from "@/components/Clock";
import React from "react";

const ClockBlock = () => {
  return (
    <div className="bg-core-bg shadow bg-blend-multiply p-10 w-80 flex items-center justify-center rounded-xl absolute bg-opacity-50 backdrop-blur-2xl ">
      <span className="text-5xl font-bold font-mono">
        <Clock />
      </span>
    </div>
  );
};

export default ClockBlock;
