import React from "react";
import VideoCallContainer from "./VideoCallContainer";
import Dock from "./Dock";
import { TopContainer } from "./TopContainer";

const SessionPage = () => {
  return (
    <div className="h-screen p-5 gap-5 w-screen flex flex-col">
      <TopContainer />
      <Dock />
    </div>
  );
};

export default SessionPage;
