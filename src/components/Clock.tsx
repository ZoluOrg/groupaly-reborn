"use client";
import dayjs from "dayjs";
import React from "react";
import { disposeEmitNodes } from "typescript";

export const Clock = ({ format = "hh:mm.ss" }: { format?: string }) => {
  const [date, setDate] = React.useState<string>("");
  const getTime = () => {
    let newDate = new Date();
    setDate(dayjs(newDate).format(format));
    requestAnimationFrame(getTime);
  };
  React.useEffect(() => {
    const perFrame = requestAnimationFrame(getTime);
    return () => {
      cancelAnimationFrame(perFrame);
    };
  }, []);
  return <span>{date}</span>;
};
