"use client";
import React, { useEffect, useState } from "react";
import { PopUp } from "./PopUp";
import { Info } from "./Info";
import { HowInstall } from "./HowInstall";

export default function Calculator() {
  const [display, setDisplay] = useState("");
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [windowSizeHeight, setWindowSizeHeight] = useState("");

  // fix the pixel of the screen
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.outerHeight });
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    console.log(window);

    setWindowSizeHeight(windowSize.height + "px");

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowSize.height]);

  const deleteone = () => {
    const displayDeleted = display.slice(0, -1);
    setDisplay(displayDeleted);
  };

  const handleButtonClick = (value) => {
    const values = ["()", "+/-"];

    const checkHistory = JSON.parse(localStorage.getItem("history"));
    const history = checkHistory === null ? [] : checkHistory;

    if (value === "=") {
      try {
        setDisplay(eval(display).toString());
        if (history.length > 0) {
          const history = JSON.parse(localStorage.getItem("history"));
          const newHistory = [
            ...history,
            { display: display + " = " + eval(display).toString() },
          ];
          localStorage.setItem("history", JSON.stringify(newHistory));
        } else {
          const newHistory = [
            { display: display + " = " + eval(display).toString() },
          ];
          localStorage.setItem("history", JSON.stringify(newHistory));
        }
      } catch (error) {
        setDisplay("Error");
      }
    } else if (value === "C") {
      setDisplay("");
    } else if (values.includes(value)) {
      setDisplay("Soon...");
      setTimeout(() => {
        setDisplay("");
      }, 500);
    } else {
      setDisplay(display + value);
    }
    if (display === "0") {
      setDisplay(value);
    }
  };

  const buttonValues = [
    "C",
    "()",
    "%",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "+/-",
    "0",
    ".",
    "=",
  ];

  const regularCharacter = "rounded-full w-16 h-16 bg-slate-300";
  const cancelCharacter =
    "rounded-full w-16 h-16 bg-orange-600 text-white font-bold text-xl";

  return (
    <>
      <div
        className={`w-full bg-black h-full flex flex-col justify-center items-center `}>
        <div className="bg-white h-full text-black w-full rounded-xl flex flex-col justify-center items-center">
          <input
            type="text"
            disabled
            value={display}
            className="w-full h-32 rounded-t-xl text-2xl bg-gray-300 "
          />
          <div className="w-full h-full grid gap-1 p-2 grid-cols-1 rounded-b-xl bg-slate-700 place-content-center">
            <div className=" h-10 flex flex-row justify-between gap-20 w-full ">
              <PopUp setDisplay={setDisplay} />

              <button
                className="rounded-full w-14 h-14 bg-orange-600 flex justify-center items-center"
                onClick={deleteone}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-full h-4/6  text-white">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z"
                  />
                </svg>
              </button>
            </div>
            <div className="grid grid-cols-4 p-6 place-items-center gap-10">
              {buttonValues.map((value) => (
                <button
                  className={value !== "C" ? regularCharacter : cancelCharacter}
                  key={value}
                  onClick={() => handleButtonClick(value)}>
                  {value}
                </button>
              ))}
            </div>
            <div className="  flex flex-row justify-between  w-full">
              <Info />
              <HowInstall />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
