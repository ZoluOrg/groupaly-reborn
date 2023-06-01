import axios from "axios";
import React from "react";
import { Floaty } from "./Floaty";

const SessionPage = async () => {
  return (
    <div
      className={`h-screen px-20 py-10 gap-5 w-screen flex flex-col`}
      style={{
        backgroundImage: `url("https://picsum.photos/1920/1080")`,
      }}
    >
      <Floaty />
    </div>
  );
};

export default SessionPage;
