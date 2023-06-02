import axios from "axios";
import React from "react";
import Bottom from "./Bottom";
import { Top } from "./Top";

const SessionPage = async () => {
  return (
    <div className=" h-screen w-screen flex bg-[url(https://images.unsplash.com/photo-1501854140801-50d01698950b)] bg-no-repeat bg-cover">
      <Top />
      <Bottom />
    </div>
  );
};

export default SessionPage;
