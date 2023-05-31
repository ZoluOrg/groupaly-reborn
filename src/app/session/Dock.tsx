import { Button } from "@/components/Button";
import {
  PhoneOff,
  Mic,
  Camera,
  Pin,
  MessageCircle,
  HelpCircleIcon,
} from "lucide-react";
import React from "react";

const Dock = () => {
  return (
    <div className="text-white bg-core-darker rounded-lg p-1.5 h-15 flex gap-2 items-center justify-between">
      <div className="flex gap-2">
        <Button variant="ghost" size="square">
          <HelpCircleIcon size={20} />
        </Button>
      </div>

      <div className="flex gap-2 ">
        <Button variant="ghost" size="square">
          <Mic size={20} />
        </Button>
        <Button variant="ghost" size="square">
          <Camera size={20} />
        </Button>
        <Button variant="accent" size="square">
          <PhoneOff size={20} />
        </Button>
      </div>

      <div className="flex gap-2 ">
        <Button variant="ghost" size="square">
          <Pin size={20} />
        </Button>
        <Button variant="ghost" size="square">
          <MessageCircle size={20} />
        </Button>
      </div>
    </div>
  );
};

export default Dock;
