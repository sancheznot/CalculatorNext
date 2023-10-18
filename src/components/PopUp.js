"use client";
import React, { useEffect, useState } from "react";
import Popup from "reactjs-popup";
// import "reactjs-popup/dist/index.css";

export const PopUp = ({ setDisplay }) => {
  const [historyList, setHistoryList] = useState([]);

  useEffect(() => {
    const historial = JSON.parse(localStorage?.getItem("history"));
    historial.reverse();
    setHistoryList(historial);
  }, [historyList]);

  const setOldData = (e) => {
    const data = e.target.value.replace(/[ = ]/g, "");
    setDisplay(data);
  };
  return (
    <Popup
      trigger={
        <button className="rounded-full w-14 h-14 bg-orange-600 flex justify-center items-center">
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
              d="M8.25 9.75h4.875a2.625 2.625 0 010 5.25H12M8.25 9.75L10.5 7.5M8.25 9.75L10.5 12m9-7.243V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185z"
            />
          </svg>
        </button>
      }
      modal
      nested>
      {(close) => (
        <div className="grid grid-cols-1 rounded-lg bg-gray-400 w-[500px] sm:w-screen transition-all duration-1000 ease-out place-content-center  place-items-center p-5 ">
          <div className="w-full flex flex-col justify-end items-end  text-2xl">
            <button className=" border-2 p-2 rounded-lg  w-10" onClick={close}>
              &times;
            </button>
          </div>
          <div className="text-6xl mb-3"> History </div>
          <div className="w-full bg-slate-300 h-[2px] flex justify-center items-center"></div>
          <div className="w-full">
            <div className="w-full  overflow-scroll">
              {historyList.map((item, index) => (
                <div
                  key={index}
                  className="w-full flex flex-row justify-between items-center border-b border-slate-300 p-2 ">
                  <button
                    value={item.display}
                    className="text-2xl text-white"
                    onClick={(e) => setOldData(e)}>
                    {item.display}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </Popup>
  );
};
