"use client";
import Popup from "reactjs-popup";
// import "reactjs-popup/dist/index.css";

export const HowInstall = () => {
  return (
    <Popup
      trigger={
        <button className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
            />
          </svg>
        </button>
      }
      modal
      nested>
      {(close) => (
        <div className="grid grid-cols-1 rounded-lg overflow-y-scroll bg-gray-400 w-[500px] sm:w-screen h-screen transition-all duration-1000 ease-out place-content-start  place-items-start p-5 ">
          <div className="w-full flex flex-row justify-between items-end  text-2xl gap-3">
            <h1 className="text-2xl mb-3 text-white">
              {" "}
              How can you install it?{" "}
            </h1>
            <button
              className=" border-2 p-2 rounded-lg  w-10 bg-red-300"
              onClick={close}>
              &times;
            </button>
          </div>
          <div className="w-full grid grid-cols-1 ">
            <div className="w-full">
              <h3 className="text-lg mb-3 text-white">
                Follow the steps to install on Android devices:
              </h3>

              <div className="h-[1px] bg-gray-400 border-gray-500 border"></div>
              <ol class="pl-5 mt-2 space-y-1 list-decimal list-inside  text-white mb-5">
                <li className=" mr-2">
                  Open the browser the app you want to install
                </li>
                <li className=" mr-2">Click on the setting.</li>
                <li className=" mr-2">
                  Scroll down and tap Add to Home screen.
                </li>
                <li className=" mr-2">Confirm by tapping Add.</li>
              </ol>
              <p className="text-white text-sm text-justify p-3"></p>
              <h3 className="text-lg mb-3 text-white">
                Follow the steps to install on iOS devices:
              </h3>

              <div className="h-[1px] bg-gray-400 border-gray-500 border"></div>
              <ol class="pl-5 mt-2 space-y-1 list-decimal list-inside  text-white">
                <li className=" mr-2">Open Safari on your iOS device.</li>
                <li className=" mr-2">Visit the website of the app.</li>
                <li className=" mr-2">Tap the “Share” icon in Safari.</li>
                <li className=" mr-2">
                  Select “Add to Home Screen” from the options.
                </li>
                <li className=" mr-2">
                  Confirm the installation by tapping the “Add” button.
                </li>
              </ol>
             
              <div className="h-[1px] bg-gray-400 border-gray-500 border"></div>
              
            </div>
          </div>
        </div>
      )}
    </Popup>
  );
};
