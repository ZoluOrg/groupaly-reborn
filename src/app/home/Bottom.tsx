import { Button } from "@/components/Button";
import { Clock } from "@/components/Clock";
import {
  PhoneOff,
  Mic,
  Pin,
  MessageCircle,
  MoreHorizontal,
} from "lucide-react";
import React from "react";

const Bottom = () => {
  return (
    <div className="border-t border-black w-full py-4 bg-opacity-50 backdrop-blur-2xl absolute bottom-0 px-4 font-medium flex justify-between items-center ">
      <div className="w-32">
        <Clock />
      </div>
      <div className="flex gap-2 items-center ">
        <Button variant="defaulyBlack" size="square">
          <Mic size={20} />
        </Button>
        <Button
          variant="defaulyBlack"
          size="square"
          className="hover:bg-red-500"
        >
          <PhoneOff size={20} />
        </Button>
      </div>
      <div className="flex gap-2 items-center ">
        <Button variant="defaulyBlack" size="square">
          <Pin size={20} />
        </Button>
        <Button variant="defaulyBlack" size="square">
          <MessageCircle size={20} />
        </Button>
        <Button variant="defaulyBlack" size="square">
          <MoreHorizontal size={20} />
        </Button>
      </div>
    </div>
  );
};

export default Bottom;
